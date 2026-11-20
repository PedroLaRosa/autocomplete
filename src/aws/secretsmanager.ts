import awsRegions from "./regions";
const ttl = 30000;
const appendFolderPath = (tokens: string[], prefix: string): string[] => {
  const baseLsCommand = ["ls", "-1ApL"];
  let whatHasUserTyped = tokens[tokens.length - 1];
  if (!whatHasUserTyped.startsWith(prefix)) {
    return ["echo", prefix];
  }
  whatHasUserTyped = whatHasUserTyped.slice(prefix.length);
  let folderPath = "";
  const lastSlashIndex = whatHasUserTyped.lastIndexOf("/");
  if (lastSlashIndex > -1) {
    if (whatHasUserTyped.startsWith("/") && lastSlashIndex === 0) {
      folderPath = "/";
    } else {
      folderPath = whatHasUserTyped.slice(0, lastSlashIndex + 1);
    }
  }
  return [...baseLsCommand, folderPath];
};
const postProcessFiles = (out: string, prefix: string): Fig.Suggestion[] => {
  if (out.trim() === prefix) {
    return [
      {
        name: prefix,
        insertValue: prefix,
      },
    ];
  }
  const sortFnStrings = (a, b) => {
    return a.localeCompare(b);
  };
  const alphabeticalSortFilesAndFolders = (arr) => {
    const dots_arr = [];
    const other_arr = [];
    arr.map((elm) => {
      if (elm.toLowerCase() == ".ds_store") return;
      if (elm.slice(0, 1) === ".") dots_arr.push(elm);
      else other_arr.push(elm);
    });
    return [
      ...other_arr.sort(sortFnStrings),
      "../",
      ...dots_arr.sort(sortFnStrings),
    ];
  };
  const temp_array = alphabeticalSortFilesAndFolders(out.split("\n"));
  const final_array = [];
  temp_array.forEach((item) => {
    if (!(item === "" || item === null || item === undefined)) {
      const outputType = item.slice(-1) === "/" ? "folder" : "file";
      final_array.push({
        type: outputType,
        name: item,
        insertValue: item,
      });
    }
  });
  return final_array;
};
const triggerPrefix = (
  newToken: string,
  oldToken: string,
  prefix: string
): boolean => {
  if (!newToken.startsWith(prefix)) {
    if (!oldToken) return false;
    return oldToken.startsWith(prefix);
  }
  return newToken.lastIndexOf("/") !== oldToken.lastIndexOf("/");
};
const filterWithPrefix = (token: string, prefix: string): string => {
  if (!token.startsWith(prefix)) return token;
  return token.slice(token.lastIndexOf("/") + 1);
};
const _prefixFile = "file://";
const _prefixFileb = "fileb://";
const generators: Record<string, Fig.Generator> = {
  secretIdsGenerator: {
    // --page-size does not affect the number of items returned,
    // just chunks request so it won't timeout
    script: [
      "aws",
      "secretsmanager",
      "list-secrets",
      "--sort-order",
      "asc",
      "--page-size",
      "100",
    ],
    postProcess: function (out) {
      try {
        const list = JSON.parse(out)["SecretList"];
        return list.map((item) => ({
          name: item["Name"],
        }));
      } catch (error) {
        console.error(error);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
  kmsKeyIdGenerator: {
    // --page-size does not affect the number of items returned,
    // just chunks request so it won't timeout
    script: ["aws", "kms", "list-keys", "--page-size", "100"],
    postProcess: function (out) {
      try {
        const list = JSON.parse(out)["Keys"];
        return list.map((item) => ({
          name: item["KeyId"],
        }));
      } catch (error) {
        console.error(error);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
  // --cli-input-json and a few other options takes a JSON string literal, or arbitrary files containing valid JSON.
  // In case the JSON is passed as a file, the filepath must be prefixed by file://
  // See more: https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html
  listFilesGenerator: {
    script: (tokens) => {
      return appendFolderPath(tokens, _prefixFile);
    },
    postProcess: (out) => {
      return postProcessFiles(out, _prefixFile);
    },
    trigger: (newToken, oldToken) => {
      return triggerPrefix(newToken, oldToken, _prefixFile);
    },
    getQueryTerm: (token) => {
      return filterWithPrefix(token, _prefixFile);
    },
  },
  // --secret-binary and a few other options takes a blob as parameter.
  // The path pointing to the blob must be prefixed by fileb://
  // See more: https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html
  listBlobsGenerator: {
    script: (tokens) => {
      return appendFolderPath(tokens, _prefixFileb);
    },
    postProcess: (out) => {
      return postProcessFiles(out, _prefixFileb);
    },
    trigger: (newToken, oldToken) => {
      return triggerPrefix(newToken, oldToken, _prefixFileb);
    },
    getQueryTerm: (token) => {
      return filterWithPrefix(token, _prefixFileb);
    },
  },
  getReplicaRegionsGenerator: {
    script: ["aws", "kms", "list-keys", "--page-size", "100"],
    postProcess: function (out, tokens) {
      try {
        const list = JSON.parse(out)["Keys"];
        return list.flatMap((secret) => {
          return awsRegions.flatMap((region) => {
            return {
              name: `Region=${region},KmsKeyId=${secret.KeyId}`,
            };
          });
        });
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
  getLambdasGenerator: {
    script: ["aws", "lambda", "list-functions", "--page-size", "100"],
    postProcess: function (out, tokens) {
      try {
        const list = JSON.parse(out)["Functions"];
        return list.map((item) => ({
          name: item["FunctionArn"],
        }));
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
  getVersionIdGenerator: {
    custom: async function (tokens, executeShellCommand) {
      try {
        // secret-id value
        const idx = tokens.indexOf("--secret-id");
        if (idx < 0) {
          return [];
        }
        const secretId = tokens[idx + 1];
        const { stdout } = await executeShellCommand({
          command: "aws",
          args: ["secretsmanager", "describe-secret", "--secret-id", secretId],
        });
        const versions = JSON.parse(stdout)["VersionIdsToStages"];
        return Object.keys(versions).map((elm) => ({ name: elm }));
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
  getVersionStageGenerator: {
    custom: async function (tokens, executeShellCommand) {
      try {
        // secret-id value
        const idx = tokens.indexOf("--secret-id");
        if (idx < 0) {
          return [];
        }
        const secretId = tokens[idx + 1];
        const { stdout } = await executeShellCommand({
          command: "aws",
          args: ["secretsmanager", "describe-secret", "--secret-id", secretId],
        });
        const versions = JSON.parse(stdout)["VersionIdsToStages"];
        return Object.keys(versions).map((elm) => ({ name: versions[elm][0] }));
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
  listTagKeys: {
    custom: async function (tokens, executeShellCommand) {
      try {
        // secret-id value
        const idx = tokens.indexOf("--secret-id");
        if (idx < 0) {
          return [];
        }
        const secretId = tokens[idx + 1];
        const { stdout } = await executeShellCommand({
          command: "aws",
          args: ["secretsmanager", "describe-secret", "--secret-id", secretId],
        });
        const versions = JSON.parse(stdout)["Tags"];
        return versions.map((elm) => ({ name: elm["Key"] }));
      } catch (e) {
        console.log(e);
      }
      return [];
    },
    cache: {
      ttl: ttl,
    },
  },
};
const completionSpec: Fig.Spec = {
  name: "secretsmanager",
  description:
    "Amazon Web Services Secrets Manager Amazon Web Services Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets. This guide provides descriptions of the Secrets Manager API. For more information about using this service, see the Amazon Web Services Secrets Manager User Guide.  API Version  This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17. For a list of endpoints, see Amazon Web Services Secrets Manager endpoints.  Support and Feedback for Amazon Web Services Secrets Manager  We welcome your feedback. Send your comments to awssecretsmanager-feedback@amazon.com, or post your feedback and questions in the Amazon Web Services Secrets Manager Discussion Forum. For more information about the Amazon Web Services Discussion Forums, see Forums Help.  Logging API Requests  Amazon Web Services Secrets Manager supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information that's collected by Amazon Web Services CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the request, when it was made, and so on. For more about Amazon Web Services Secrets Manager and support for Amazon Web Services CloudTrail, see Logging Amazon Web Services Secrets Manager Events with Amazon Web Services CloudTrail in the Amazon Web Services Secrets Manager User Guide. To learn more about CloudTrail, including enabling it and find your log files, see the Amazon Web Services CloudTrail User Guide",
  subcommands: [
    {
      name: "associate-cross-account-replica",
      description:
        "Links a primary secret in your account to a replica secret in a different Amazon Web Services account and starts replication to this replica. The replica secret must already exist in the other Amazon Web Services account. Create the replica with CreateSecret and set its CrossAccountPrimaryARN field set to this primary secret's ARN. When you call AssociateCrossAccountReplica, Secrets Manager calls AcceptCrossAccountReplication on the replica secret on your behalf. The primary and replica secrets must be in the same Amazon Web Services Region and partition, and you must call this operation from the account that owns the primary secret. A primary secret can have at most one cross-account replica. This operation is idempotent, so you can call it again for the same replica to repair replication. If the association fails, Secrets Manager does not modify either the primary or replica secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:AssociateCrossAccountReplica, secretsmanager:GetSecretValue on the primary secret, and secretsmanager:AcceptCrossAccountReplication on the replica secret. You must also have kms:Decrypt permission for the Key Management Service (KMS) key that encrypts the primary secret, and kms:Encrypt permission for the Amazon Web Services KMS key that encrypts the replica secret. If you supply ReplicationRoleARN, you also need iam:PassRole for that role. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the primary secret in your account to replicate. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--cross-account-replica-arn",
          description:
            "The ARN of the replica secret in the other Amazon Web Services account. The replica secret must be in the same Region and partition as the primary secret. Additionally, the replica account owner must have created the replica secret as a cross-account replica of the primary secret. For more information see CreateSecret",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-restriction",
          description:
            "Whether the replica account must belong to the same Amazon Web Services organization as the primary account:    SameOrg, which requires the replica account to be in the same organization as the primary account. This is the default.    NoRestriction, which allows the replica account to be in any organization",
          args: {
            name: "string",
            suggestions: ["SameOrg", "NoRestriction"],
          },
        },
        {
          name: "--replication-role-arn",
          description:
            "The ARN of an IAM role in the primary account that Secrets Manager assumes to perform replication. If you don't include this field, Secrets Manager replicates using the credentials of caller who updates the primary secret. For more information, see  Cross-account replication permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "batch-get-secret-value",
      description:
        "Retrieves the contents of the encrypted fields SecretString or SecretBinary for up to 20 secrets. To retrieve a single secret, call GetSecretValue.  To choose which secrets to retrieve, you can specify a list of secrets by name or ARN, or you can use filters. If Secrets Manager encounters errors such as AccessDeniedException while attempting to retrieve any of the secrets, you can see the errors in Errors in the response. Secrets Manager generates CloudTrail GetSecretValue log entries for each secret you request when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:BatchGetSecretValue, and you must have secretsmanager:GetSecretValue for each secret. If you use filters, you must also have secretsmanager:ListSecrets. If the secrets are encrypted using customer-managed keys instead of the Amazon Web Services managed key aws/secretsmanager, then you also need kms:Decrypt permissions for the keys. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id-list",
          description:
            "The ARN or names of the secrets to retrieve. You must include Filters or SecretIdList, but not both",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "The filters to choose which secrets to retrieve. You must include Filters or SecretIdList, but not both",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of results to include in the response. If there are more results available, in the response, Secrets Manager includes NextToken. To get the next results, call BatchGetSecretValue again with the value from NextToken. To use this parameter, you must also use the Filters parameter",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where the output should continue from, if a previous call did not show all results. To get the next results, call BatchGetSecretValue again with this value",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "cancel-rotate-secret",
      description:
        "Turns off automatic rotation, and if a rotation is currently in progress, cancels the rotation. If you cancel a rotation in progress, it can leave the VersionStage labels in an unexpected state. You might need to remove the staging label AWSPENDING from the partially created version. You also need to determine whether to roll back to the previous version of the secret by moving the staging label AWSCURRENT to the version that has AWSPENDING. To determine which version has a specific staging label, call DescribeSecret. Then use UpdateSecretVersionStage to change staging labels. For more information, see How rotation works. To turn on automatic rotation again, call RotateSecret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:CancelRotateSecret. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-secret",
      description:
        "Creates a new secret. A secret can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager. The secret also includes the connection information to access a database or other service. Secrets Manager does not encrypt this connection information. A secret in Secrets Manager consists of both the encrypted secret versions and the metadata that Secrets Manager uses to manage the secret. For secrets that use managed rotation, you need to create the secret through the managing service. For more information, see Secrets Manager secrets managed by other Amazon Web Services services.  For information about creating a secret in the console, see Create a secret. To create a secret, you can provide the secret value to be encrypted in either the SecretString parameter or the SecretBinary parameter, but not both. If you include SecretString or SecretBinary, then Secrets Manager creates an initial secret version and automatically attaches the staging label AWSCURRENT to it. For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret, you must make sure the JSON you store in the SecretString matches the JSON structure of a database secret. If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key aws/secretsmanager. If this key doesn't already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use aws/secretsmanager. Creating aws/secretsmanager can result in a one-time delay to complete the secret creation. If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use aws/secretsmanager to encrypt the secret, and you must create and use a customer managed KMS key.  To create a cross-account replica secret, include CrossAccountPrimaryARN. The replica must use a customer managed KMS key, and can't include AddReplicaRegions, Description, SecretBinary, SecretString, or Type. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except SecretBinary or SecretString because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:CreateSecret. If you include tags in the secret, you also need secretsmanager:TagResource. To add replica Regions, you must also have secretsmanager:ReplicateSecretToRegions. To create a cross-account replica secret, you must also have secretsmanager:PutResourcePolicy permissions. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.  To encrypt the secret with a KMS key other than aws/secretsmanager, you need kms:GenerateDataKey and kms:Decrypt permission to the key.   When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to Mitigate the risks of using command-line tools to store Secrets Manager secrets",
      options: [
        {
          name: "--name",
          description:
            "The name of the new secret. The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@- Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN",
          args: {
            name: "string",
          },
          priority: 100,
        },
        {
          name: "--client-request-token",
          description:
            "If you include SecretString or SecretBinary, then Secrets Manager creates an initial version for the secret, and this parameter specifies the unique identifier for the new version.   If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request.   If you generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a ClientRequestToken and include it in the request. This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a UUID-type value to ensure uniqueness of your versions within the specified secret.    If the ClientRequestToken value isn't already associated with a version of the secret then a new version of the secret is created.    If a version with this value already exists and the version SecretString and SecretBinary values are the same as those in the request, then the request is ignored.   If a version with this value already exists and that version's SecretString and SecretBinary values are different from those in the request, then the request fails because you cannot modify an existing version. Instead, use PutSecretValue to create a new version.   This value becomes the VersionId of the new version",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by alias/, for example alias/aws/secretsmanager. For more information, see About aliases. To use a KMS key in a different account, use the key ARN or the alias ARN. If you don't specify this value, then Secrets Manager uses the key aws/secretsmanager. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value. If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use aws/secretsmanager to encrypt the secret, and you must create and use a customer managed KMS key",
          args: {
            name: "string",
            generators: generators.kmsKeyIdGenerator,
          },
          priority: 80,
        },
        {
          name: "--secret-binary",
          description:
            "The binary data to encrypt and store in the new version of the secret. We recommend that you store your binary data in a file and then pass the contents of the file as a parameter. Either SecretString or SecretBinary must have a value, but not both. This parameter is not available in the Secrets Manager console. Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
          priority: 90,
        },
        {
          name: "--secret-string",
          description:
            "The text data to encrypt and store in this new version of the secret. We recommend you use a JSON structure of key/value pairs for your secret value. Either SecretString or SecretBinary must have a value, but not both. If you create a secret by using the Secrets Manager console then Secrets Manager puts the protected secret text in only the SecretString parameter. The Secrets Manager console stores the information as a JSON structure of key/value pairs that a Lambda rotation function can parse. Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field",
          args: {
            name: "string",
          },
          priority: 90,
        },
        {
          name: "--tags",
          description:
            'A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example:  [{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]  Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc". If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an Access Denied error. For more information, see Control access to secrets using tags and Limit access to identities with tags that match secrets\' tags. For information about how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters. If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text. For tag quotas and naming restrictions, see Service quotas for Tagging in the Amazon Web Services General Reference guide',
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--add-replica-regions",
          description: "A list of Regions and KMS keys to replicate secrets",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.getReplicaRegionsGenerator,
          },
        },
        {
          name: "--force-overwrite-replica-secret",
          description:
            "Specifies whether to overwrite a secret with the same name in the destination Region. By default, secrets aren't overwritten",
        },
        {
          name: "--no-force-overwrite-replica-secret",
          description:
            "Specifies whether to overwrite a secret with the same name in the destination Region. By default, secrets aren't overwritten",
        },
        {
          name: "--type",
          description:
            "The exact string that identifies the partner that holds the external secret. For more information, see Using Secrets Manager managed external secrets",
          args: {
            name: "string",
          },
        },
        {
          name: "--cross-account-primary-arn",
          description:
            "The ARN of a primary secret in another Amazon Web Services account. Include this field to create a cross-account replica secret that receives replicated data from that primary secret. The primary secret must be in the same Amazon Web Services Region and partition as the replica, and you must specify a customer managed KMS key in KmsKeyId. You can't include SecretString, SecretBinary, Description, AddReplicaRegions, or Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-resource-policy",
      description:
        "Deletes the resource-based permission policy attached to the secret. To attach a policy to a secret, use PutResourcePolicy. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:DeleteResourcePolicy. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret to delete the attached resource-based policy for. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--policy-name",
          description:
            "The name of the resource policy to delete. If you don't specify this field, Secrets Manager uses default. You can only delete the default policy; if you specify any other name, the operation returns an InvalidParameterException",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-secret",
      description:
        "Deletes a secret and all of its versions. You can specify a recovery window during which you can restore the secret. The minimum recovery window is 7 days. The default recovery window is 30 days. Secrets Manager attaches a DeletionDate stamp to the secret that specifies the end of the recovery window. At the end of the recovery window, Secrets Manager deletes the secret permanently. You can't delete a primary secret that is replicated to other Regions. You must first delete the replicas using RemoveRegionsFromReplication, and then delete the primary secret. When you delete a replica, it is deleted immediately. You can't delete a cross-account primary secret that is associated with a cross-account replica secret. You must first disassociate each of the replicas using DisassociateCrossAccountReplica, before deleting the primary secret. Similarly, you can't delete a cross-account replica secret without first stopping replication. Call StopReplicationToReplica to stop replication, and then you can delete the secret. You can't directly delete a version of a secret. Instead, you remove all staging labels from the version using UpdateSecretVersionStage. This marks the version as deprecated, and then Secrets Manager can automatically delete the version in the background. To determine whether an application still uses a secret, you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window. For more information, see  Monitor secrets scheduled for deletion. Secrets Manager performs the permanent secret deletion at the end of the waiting period as a background task with low priority. There is no guarantee of a specific time after the recovery window for the permanent delete to occur. At any time before recovery window ends, you can use RestoreSecret to remove the DeletionDate and cancel the deletion of the secret. When a secret is scheduled for deletion, you cannot retrieve the secret value. You must first cancel the deletion with RestoreSecret and then you can retrieve the secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:DeleteSecret. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret to delete. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--recovery-window-in-days",
          description:
            "The number of days from 7 to 30 that Secrets Manager waits before permanently deleting the secret. You can't use both this parameter and ForceDeleteWithoutRecovery in the same call. If you don't use either, then by default Secrets Manager uses a 30 day recovery window",
          args: {
            name: "long",
            suggestions: Array.from({ length: 31 - 7 }, (v, k) =>
              String(k + 7)
            ),
          },
        },
        {
          name: "--force-delete-without-recovery",
          description:
            "Specifies whether to delete the secret without any recovery window. You can't use both this parameter and RecoveryWindowInDays in the same call. If you don't use either, then by default Secrets Manager uses a 30 day recovery window. Secrets Manager performs the actual deletion with an asynchronous background process, so there might be a short delay before the secret is permanently deleted. If you delete a secret and then immediately create a secret with the same name, use appropriate back off and retry logic. If you forcibly delete an already deleted or nonexistent secret, the operation does not return ResourceNotFoundException.  Use this parameter with caution. This parameter causes the operation to skip the normal recovery window before the permanent deletion that Secrets Manager would normally impose with the RecoveryWindowInDays parameter. If you delete a secret with the ForceDeleteWithoutRecovery parameter, then you have no opportunity to recover the secret. You lose the secret permanently",
        },
        {
          name: "--no-force-delete-without-recovery",
          description:
            "Specifies whether to delete the secret without any recovery window. You can't use both this parameter and RecoveryWindowInDays in the same call. If you don't use either, then by default Secrets Manager uses a 30 day recovery window. Secrets Manager performs the actual deletion with an asynchronous background process, so there might be a short delay before the secret is permanently deleted. If you delete a secret and then immediately create a secret with the same name, use appropriate back off and retry logic. If you forcibly delete an already deleted or nonexistent secret, the operation does not return ResourceNotFoundException.  Use this parameter with caution. This parameter causes the operation to skip the normal recovery window before the permanent deletion that Secrets Manager would normally impose with the RecoveryWindowInDays parameter. If you delete a secret with the ForceDeleteWithoutRecovery parameter, then you have no opportunity to recover the secret. You lose the secret permanently",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-secret",
      description:
        "Retrieves the details of a secret. It does not include the encrypted secret value. Secrets Manager only returns fields that have a value in the response.   The VersionIdsToStages field in the response includes every version ID that has a staging label attached, even if that version doesn't contain a secret value. In contrast, ListSecretVersionIds only returns versions that contain a secret value. To check whether a secret version contains a value, call GetSecretValue.  Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:DescribeSecret. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret.  For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "disassociate-cross-account-replica",
      description:
        "Removes the link between a primary secret in your account and a cross-account replica secret, and stops replication to the replica secret. Call this operation on the primary secret. This action removes the replica association created by AssociateCrossAccountReplica. Disassociating the replica from the primary does not delete the replica secret or convert the replica secret to a standalone secret. The replica secret remains in the other account and its replication status changes to Detached. Secrets Manager no longer sends updates from the primary secret to the replica secret after disassociation. To convert a detached replica into a standalone secret, call StopReplicationToReplica on the replica secret. You must disassociate a cross-account replica before you call DeleteSecret for the primary secret. The DeleteSecret call fails if any replicas are still associated with the primary secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:DisassociateCrossAccountReplica. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the primary secret in your account. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--cross-account-replica-arn",
          description:
            "The ARN of the cross-account replica secret to unlink from the primary secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-random-password",
      description:
        "Generates a random password. We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support. By default, Secrets Manager uses uppercase and lowercase letters, numbers, and the following characters in passwords: !\\\"#$%&'()*+,-./:;<=>?@[\\\\]^_`{|}~  Secrets Manager generates a CloudTrail log entry when you call this action.  Required permissions:  secretsmanager:GetRandomPassword. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--password-length",
          description:
            "The length of the password. If you don't include this parameter, the default length is 32 characters",
          args: {
            name: "long",
          },
        },
        {
          name: "--exclude-characters",
          description:
            "A string of the characters that you don't want in the password",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclude-numbers",
          description:
            "Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers",
        },
        {
          name: "--no-exclude-numbers",
          description:
            "Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers",
        },
        {
          name: "--exclude-punctuation",
          description:
            "Specifies whether to exclude the following punctuation characters from the password: ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~. If you don't include this switch, the password can contain punctuation",
        },
        {
          name: "--no-exclude-punctuation",
          description:
            "Specifies whether to exclude the following punctuation characters from the password: ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~. If you don't include this switch, the password can contain punctuation",
        },
        {
          name: "--exclude-uppercase",
          description:
            "Specifies whether to exclude uppercase letters from the password. If you don't include this switch, the password can contain uppercase letters",
        },
        {
          name: "--no-exclude-uppercase",
          description:
            "Specifies whether to exclude uppercase letters from the password. If you don't include this switch, the password can contain uppercase letters",
        },
        {
          name: "--exclude-lowercase",
          description:
            "Specifies whether to exclude lowercase letters from the password. If you don't include this switch, the password can contain lowercase letters",
        },
        {
          name: "--no-exclude-lowercase",
          description:
            "Specifies whether to exclude lowercase letters from the password. If you don't include this switch, the password can contain lowercase letters",
        },
        {
          name: "--include-space",
          description:
            "Specifies whether to include the space character. If you include this switch, the password can contain space characters",
        },
        {
          name: "--no-include-space",
          description:
            "Specifies whether to include the space character. If you include this switch, the password can contain space characters",
        },
        {
          name: "--require-each-included-type",
          description:
            "Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. If you don't include this switch, the password contains at least one of every character type",
        },
        {
          name: "--no-require-each-included-type",
          description:
            "Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. If you don't include this switch, the password contains at least one of every character type",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-resource-policy",
      description:
        "Retrieves the JSON text of the resource-based policy document attached to the secret. For more information about permissions policies attached to a secret, see Permissions policies attached to a secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:GetResourcePolicy. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret to retrieve the attached resource-based policy for. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--policy-name",
          description:
            "The name of the resource policy to retrieve. If you don't specify this field, Secrets Manager uses default. If you specify a name other than default and no policy with that name exists, the operation returns a ResourceNotFoundException",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-secret-value",
      description:
        "Retrieves the contents of the encrypted fields SecretString or SecretBinary from the specified version of a secret, whichever contains content. To retrieve the values for a group of secrets, call BatchGetSecretValue. We recommend that you cache your secret values by using client-side caching. Caching secrets improves speed and reduces your costs. For more information, see Cache secrets for your applications. To retrieve the previous version of a secret, use VersionStage and specify AWSPREVIOUS. To revert to the previous version of a secret, call UpdateSecretVersionStage. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:GetSecretValue. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key aws/secretsmanager, then you also need kms:Decrypt permissions for that key. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret to retrieve. To retrieve a secret from another account, you must use an ARN. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--version-id",
          description:
            "The unique identifier of the version of the secret to retrieve. If you include both this parameter and VersionStage, the two parameters must refer to the same secret version. If you don't specify either a VersionStage or VersionId, then Secrets Manager returns the AWSCURRENT version. This value is typically a UUID-type value with 32 hexadecimal digits",
          args: {
            name: "string",
            generators: generators.getVersionIdGenerator,
          },
        },
        {
          name: "--version-stage",
          description:
            "The staging label of the version of the secret to retrieve.  Secrets Manager uses staging labels to keep track of different versions during the rotation process. If you include both this parameter and VersionId, the two parameters must refer to the same secret version. If you don't specify either a VersionStage or VersionId, Secrets Manager returns the AWSCURRENT version",
          args: {
            name: "string",
            generators: generators.getVersionStageGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-resource-policies",
      description:
        "Lists the resource-based policies attached to a secret. The response contains only the names of the policies, not their contents. Secrets Manager lists default first, followed by any other policies in alphabetical order. To get the contents of a policy, use GetResourcePolicy. You can modify only the default policy. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:ListResourcePolicies. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
        },
        {
          name: "--max-results",
          description:
            "The number of results to include in the response. If you don't specify this value, the service returns up to 100 results. If there are more results available, in the response, Secrets Manager includes NextToken. To get the next results, call ListResourcePolicies again with the value from NextToken",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where the output should continue from, if a previous call did not show all results. To get the next results, call ListResourcePolicies again with this value",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-secret-version-ids",
      description:
        "Lists the versions of a secret. Secrets Manager uses staging labels to indicate the different versions of a secret. For more information, see  Secrets Manager concepts: Versions. To list the secrets in the account, use ListSecrets.   ListSecretVersionIds only returns versions that contain a secret value. To see all version IDs that have staging labels attached, including ones without a secret value, call DescribeSecret and check VersionIdsToStages.  Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:ListSecretVersionIds. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret whose versions you want to list. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--max-results",
          description:
            "The number of results to include in the response. If there are more results available, in the response, Secrets Manager includes NextToken. To get the next results, call ListSecretVersionIds again with the value from NextToken",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where the output should continue from, if a previous call did not show all results. To get the next results, call ListSecretVersionIds again with this value",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-deprecated",
          description:
            "Specifies whether to include versions of secrets that don't have any staging labels attached to them. Versions without staging labels are considered deprecated and are subject to deletion by Secrets Manager. By default, versions without staging labels aren't included",
        },
        {
          name: "--no-include-deprecated",
          description:
            "Specifies whether to include versions of secrets that don't have any staging labels attached to them. Versions without staging labels are considered deprecated and are subject to deletion by Secrets Manager. By default, versions without staging labels aren't included",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-secrets",
      description:
        "Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account, not including secrets that are marked for deletion. To see secrets marked for deletion, use the Secrets Manager console. All Secrets Manager operations are eventually consistent. ListSecrets might not reflect changes from the last five minutes. You can get more recent information for a specific secret by calling DescribeSecret. To list the versions of a secret, use ListSecretVersionIds. To retrieve the values for the secrets, call BatchGetSecretValue or GetSecretValue. For information about finding secrets in the console, see Find secrets in Secrets Manager. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:ListSecrets. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--include-planned-deletion",
          description:
            "Specifies whether to include secrets scheduled for deletion. By default, secrets scheduled for deletion aren't included",
        },
        {
          name: "--no-include-planned-deletion",
          description:
            "Specifies whether to include secrets scheduled for deletion. By default, secrets scheduled for deletion aren't included",
        },
        {
          name: "--max-results",
          description:
            "The number of results to include in the response. If there are more results available, in the response, Secrets Manager includes NextToken. To get the next results, call ListSecrets again with the value from NextToken",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token that indicates where the output should continue from, if a previous call did not show all results. To get the next results, call ListSecrets again with this value",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "The filters to apply to the list of secrets",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--sort-order",
          description: "Secrets are listed by CreatedDate",
          args: {
            name: "string",
            suggestions: ["asc", "desc"],
          },
        },
        {
          name: "--sort-by",
          description: "If not specified, secrets are listed by CreatedDate",
          args: {
            name: "string",
            suggestions: [
              "created-date",
              "last-accessed-date",
              "last-changed-date",
              "name",
            ],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "put-resource-policy",
      description:
        "Attaches a resource-based permission policy to a secret. A resource-based policy is optional. For more information, see Authentication and access control for Secrets Manager  For information about attaching a policy in the console, see Attach a permissions policy to a secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:PutResourcePolicy. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret to attach the resource-based policy. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--resource-policy",
          description:
            "A JSON-formatted string for an Amazon Web Services resource-based policy. For example policies, see Permissions policy examples",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--policy-name",
          description:
            "The name of the resource policy to attach. If you don't specify this field, Secrets Manager uses default. You can only attach the default policy; if you specify any other name, the operation returns an InvalidParameterException",
          args: {
            name: "string",
          },
        },
        {
          name: "--block-public-policy",
          description:
            "Specifies whether to block resource-based policies that allow broad access to the secret, for example those that use a wildcard for the principal. By default, public policies aren't blocked.  Resource policy validation and the BlockPublicPolicy parameter help protect your resources by preventing public access from being granted through the resource policies that are directly attached to your secrets. In addition to using these features, carefully inspect the following policies to confirm that they do not grant public access:   Identity-based policies attached to associated Amazon Web Services principals (for example, IAM roles)   Resource-based policies attached to associated Amazon Web Services resources (for example, Key Management Service (KMS) keys)   To review permissions to your secrets, see Determine who has permissions to your secrets",
        },
        {
          name: "--no-block-public-policy",
          description:
            "Specifies whether to block resource-based policies that allow broad access to the secret, for example those that use a wildcard for the principal. By default, public policies aren't blocked.  Resource policy validation and the BlockPublicPolicy parameter help protect your resources by preventing public access from being granted through the resource policies that are directly attached to your secrets. In addition to using these features, carefully inspect the following policies to confirm that they do not grant public access:   Identity-based policies attached to associated Amazon Web Services principals (for example, IAM roles)   Resource-based policies attached to associated Amazon Web Services resources (for example, Key Management Service (KMS) keys)   To review permissions to your secrets, see Determine who has permissions to your secrets",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "put-secret-value",
      description:
        "Creates a new version of your secret by creating a new encrypted value and attaching it to the secret. version can contain a new SecretString value or a new SecretBinary value.  Do not call PutSecretValue at a sustained rate of more than once every 10 minutes. When you update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager keeps 100 of the most recent versions, but it keeps all secret versions created in the last 24 hours. If you call PutSecretValue more than once every 10 minutes, you will create more versions than Secrets Manager removes, and you will reach the quota for secret versions. You can specify the staging labels to attach to the new version in VersionStages. If you don't include VersionStages, then Secrets Manager automatically moves the staging label AWSCURRENT to this version. If this operation creates the first version for the secret, then Secrets Manager automatically attaches the staging label AWSCURRENT to it. If this operation moves the staging label AWSCURRENT from another version to this version, then Secrets Manager also automatically moves the staging label AWSPREVIOUS to the version that AWSCURRENT was removed from. This operation is idempotent. If you call this operation with a ClientRequestToken that matches an existing version's VersionId, and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you can't modify an existing version; you can only create new ones. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except SecretBinary, SecretString, or RotationToken because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:PutSecretValue. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.   When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to Mitigate the risks of using command-line tools to store Secrets Manager secrets",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret to add a new version to. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN. If the secret doesn't already exist, use CreateSecret instead",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the new version of the secret.   If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request.   If you generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a ClientRequestToken and include it in the request. This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a UUID-type value to ensure uniqueness of your versions within the specified secret.    If the ClientRequestToken value isn't already associated with a version of the secret then a new version of the secret is created.    If a version with this value already exists and that version's SecretString or SecretBinary values are the same as those in the request then the request is ignored. The operation is idempotent.    If a version with this value already exists and the version of the SecretString and SecretBinary values are different from those in the request, then the request fails because you can't modify a secret version. You can only create new versions to store new secret values.   This value becomes the VersionId of the new version",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-binary",
          description:
            "The binary data to encrypt and store in the new version of the secret. To use this parameter in the command-line tools, we recommend that you store your binary data in a file and then pass the contents of the file as a parameter.  You must include SecretBinary or SecretString, but not both. You can't access this value from the Secrets Manager console. Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--secret-string",
          description:
            "The text to encrypt and store in the new version of the secret.  You must include SecretBinary or SecretString, but not both. We recommend you create the secret string as JSON key/value pairs, as shown in the example. Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-stages",
          description:
            "A list of staging labels to attach to this version of the secret. Secrets Manager uses staging labels to track versions of a secret through the rotation process. If you specify a staging label that's already associated with a different version of the same secret, then Secrets Manager removes the label from the other version and attaches it to this version. If you specify AWSCURRENT, and it is already attached to another version, then Secrets Manager also moves the staging label AWSPREVIOUS to the version that AWSCURRENT was removed from. If you don't include VersionStages, then Secrets Manager automatically moves the staging label AWSCURRENT to this version",
          args: {
            name: "list",
            generators: generators.getVersionStageGenerator,
          },
        },
        {
          name: "--rotation-token",
          description:
            "A unique identifier that indicates the source of the request. Required for secret rotations using an IAM assumed role or cross-account rotation, in which you rotate a secret in one account by using a Lambda rotation function in another account. In both cases, the rotation function assumes an IAM role to call Secrets Manager, and then Secrets Manager validates the identity using the token. For more information, see How rotation works and Rotation by Lambda functions. Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "remove-regions-from-replication",
      description:
        "For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:RemoveRegionsFromReplication. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description: "The ARN or name of the secret",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--remove-replica-regions",
          description: "The Regions of the replicas to remove",
          args: {
            name: "list",
            isVariadic: true,
            suggestions: awsRegions,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "replicate-secret-to-regions",
      description:
        "Replicates the secret to a new Regions. See Multi-Region secrets. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:ReplicateSecretToRegions. If the primary secret is encrypted with a KMS key other than aws/secretsmanager, you also need kms:Decrypt permission to the key. To encrypt the replicated secret with a KMS key other than aws/secretsmanager, you need kms:GenerateDataKey and kms:Encrypt to the key. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description: "The ARN or name of the secret to replicate",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--add-replica-regions",
          description: "A list of Regions in which to replicate the secret",
          args: {
            name: "list",
            isVariadic: true,
            generators: generators.getReplicaRegionsGenerator,
          },
        },
        {
          name: "--force-overwrite-replica-secret",
          description:
            "Specifies whether to overwrite a secret with the same name in the destination Region. By default, secrets aren't overwritten",
        },
        {
          name: "--no-force-overwrite-replica-secret",
          description:
            "Specifies whether to overwrite a secret with the same name in the destination Region. By default, secrets aren't overwritten",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "restore-secret",
      description:
        "Cancels the scheduled deletion of a secret by removing the DeletedDate time stamp. You can access a secret again after it has been restored. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:RestoreSecret. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret to restore. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "rotate-secret",
      description:
        "Configures and starts the asynchronous process of rotating the secret. For information about rotation, see Rotate secrets in the Secrets Manager User Guide. If you include the configuration parameters, the operation sets the values for the secret and then immediately starts a rotation. If you don't include the configuration parameters, the operation starts a rotation with the values already stored in the secret.  When rotation is successful, the AWSPENDING staging label might be attached to the same version as the AWSCURRENT version, or it might not be attached to any version. If the AWSPENDING staging label is present but not attached to the same version as AWSCURRENT, then any later invocation of RotateSecret assumes that a previous rotation request is still in progress and returns an error. When rotation is unsuccessful, the AWSPENDING staging label might be attached to an empty secret version. For more information, see Troubleshoot rotation in the Secrets Manager User Guide. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:RotateSecret. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager. You also need lambda:InvokeFunction permissions on the rotation function. For more information, see  Permissions for rotation",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret to rotate. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--client-request-token",
          description:
            "A unique identifier for the new version of the secret. You only need to specify this value if you implement your own retry logic and you want to ensure that Secrets Manager doesn't attempt to create a secret version twice.  If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request.   If you generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a ClientRequestToken and include it in the request. This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a UUID-type value to ensure uniqueness of your versions within the specified secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--rotation-lambda-arn",
          description:
            "For secrets that use a Lambda rotation function to rotate, the ARN of the Lambda rotation function.  For secrets that use managed rotation, omit this field. For more information, see Managed rotation in the Secrets Manager User Guide",
          args: {
            name: "string",
            generators: generators.getLambdasGenerator,
          },
        },
        {
          name: "--rotation-rules",
          description:
            "A structure that defines the rotation configuration for this secret.  When changing an existing rotation schedule and setting RotateImmediately to false:   If using AutomaticallyAfterDays or a ScheduleExpression with rate(), the previously scheduled rotation might still occur.   To prevent unintended rotations, use a ScheduleExpression with cron() for granular control over rotation windows",
          args: {
            name: "structure",
          },
        },
        {
          name: "--external-secret-rotation-metadata",
          description:
            "The metadata needed to successfully rotate a managed external secret. A list of key value pairs in JSON format specified by the partner. For more information about the required information, see Using Secrets Manager managed external secrets",
          args: {
            name: "list",
          },
        },
        {
          name: "--external-secret-rotation-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the role that allows Secrets Manager to rotate a secret held by a third-party partner. For more information, see Security and permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--rotate-immediately",
          description:
            "Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. The rotation schedule is defined in RotateSecretRequest$RotationRules. The default for RotateImmediately is true. If you don't specify this value, Secrets Manager rotates the secret immediately. If you set RotateImmediately to false, Secrets Manager tests the rotation configuration by running the  testSecret step of the Lambda rotation function. This test creates an AWSPENDING version of the secret and then removes it. When changing an existing rotation schedule and setting RotateImmediately to false:   If using AutomaticallyAfterDays or a ScheduleExpression with rate(), the previously scheduled rotation might still occur.   To prevent unintended rotations, use a ScheduleExpression with cron() for granular control over rotation windows.   Rotation is an asynchronous process. For more information, see How rotation works",
        },
        {
          name: "--no-rotate-immediately",
          description:
            "Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. The rotation schedule is defined in RotateSecretRequest$RotationRules. The default for RotateImmediately is true. If you don't specify this value, Secrets Manager rotates the secret immediately. If you set RotateImmediately to false, Secrets Manager tests the rotation configuration by running the  testSecret step of the Lambda rotation function. This test creates an AWSPENDING version of the secret and then removes it. When changing an existing rotation schedule and setting RotateImmediately to false:   If using AutomaticallyAfterDays or a ScheduleExpression with rate(), the previously scheduled rotation might still occur.   To prevent unintended rotations, use a ScheduleExpression with cron() for granular control over rotation windows.   Rotation is an asynchronous process. For more information, see How rotation works",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "stop-replication-to-replica",
      description:
        "Removes the link between a replica secret and its primary secret, and stops replication to the replica. You call this operation from the replica account or Region. Depending on the type of replica, the behavior is:    Cross-Region replica: promotes the replica to a standalone primary secret in the replica Region.    Cross-account replica: promotes the replica in your account to a standalone secret and stops replication from its primary secret in the other account. Secrets Manager updates the primary secret's replication status to Detached for this replica.   To stop cross-account replication from the primary account instead, use DisassociateCrossAccountReplica. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:StopReplicationToReplica. For cross-account replica secrets, you must also have secretsmanager:DeleteResourcePolicy permissions. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the replica secret. For a cross-region replica, the replica ARN is the same as the original primary secret ARN except that the Region is changed to the replica Region. For a cross-account replica, this is the ARN or name of the replica secret in your account",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description:
        "Attaches tags to a secret. Tags consist of a key name and a value. Tags are part of the secret's metadata. They are not associated with specific versions of the secret. This operation appends tags to the existing list of tags. For tag quotas and naming restrictions, see Service quotas for Tagging in the Amazon Web Services General Reference guide.  If you use tags as part of your security strategy, then adding or removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.  Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:TagResource. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The identifier for the secret to attach tags to. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--tags",
          description:
            "The tags to attach to the secret as a JSON text string argument. Each element in the list consists of a Key and a Value. For storing multiple values, we recommend that you use a JSON text string argument and specify key/value pairs. For more information, see Specifying parameter values for the Amazon Web Services CLI in the Amazon Web Services CLI User Guide",
          args: {
            name: "list",
            isVariadic: true,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description:
        "Removes specific tags from a secret. This operation is idempotent. If a requested tag is not attached to the secret, no error is returned and the secret metadata is unchanged.  If you use tags as part of your security strategy, then removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.  Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:UntagResource. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag key names to remove from the secret. You don't specify the value. Both the key and its associated value are removed. This parameter requires a JSON text string argument. For storing multiple values, we recommend that you use a JSON text string argument and specify key/value pairs. For more information, see Specifying parameter values for the Amazon Web Services CLI in the Amazon Web Services CLI User Guide",
          args: {
            name: "list",
            generators: generators.listTagKeys,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-secret",
      description:
        "Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use PutSecretValue. To change the rotation configuration of a secret, use RotateSecret instead. To change a secret so that it is managed by another service, you need to recreate the secret in that service. See Secrets Manager secrets managed by other Amazon Web Services services. We recommend you avoid calling UpdateSecret at a sustained rate of more than once every 10 minutes. When you call UpdateSecret to update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you update the secret value more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions. If you include SecretString or SecretBinary to create a new secret version, Secrets Manager automatically moves the staging label AWSCURRENT to the new version. Then it attaches the label AWSPREVIOUS to the version that AWSCURRENT was removed from. If you call this operation with a ClientRequestToken that matches an existing version's VersionId, the operation results in an error. You can't modify an existing version, you can only create a new version. To remove a version, remove all staging labels from it. See UpdateSecretVersionStage. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except SecretBinary or SecretString because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:UpdateSecret. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager. If you use a customer managed key, you must also have kms:GenerateDataKey, kms:Encrypt, and kms:Decrypt permissions on the key. If you change the KMS key and you don't have kms:Encrypt permission to the new key, Secrets Manager does not re-encrypt existing secret versions with the new key. For more information, see  Secret encryption and decryption.  When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to Mitigate the risks of using command-line tools to store Secrets Manager secrets",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--client-request-token",
          description:
            "If you include SecretString or SecretBinary, then Secrets Manager creates a new version for the secret, and this parameter specifies the unique identifier for the new version.  If you use the Amazon Web Services CLI or one of the Amazon Web Services SDKs to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes it as the value for this parameter in the request.   If you generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a ClientRequestToken and include it in the request. This value helps ensure idempotency. Secrets Manager uses this value to prevent the accidental creation of duplicate versions if there are failures and retries during a rotation. We recommend that you generate a UUID-type value to ensure uniqueness of your versions within the specified secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt new secret versions as well as any existing versions with the staging labels AWSCURRENT, AWSPENDING, or AWSPREVIOUS. If you don't have kms:Encrypt permission to the new key, Secrets Manager does not re-encrypt existing secret versions with the new key. For more information about versions and staging labels, see Concepts: Version. A key alias is always prefixed by alias/, for example alias/aws/secretsmanager. For more information, see About aliases. If you set this to an empty string, Secrets Manager uses the Amazon Web Services managed key aws/secretsmanager. If this key doesn't already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use aws/secretsmanager. Creating aws/secretsmanager can result in a one-time significant delay in returning the result.   You can only use the Amazon Web Services managed key aws/secretsmanager if you call this operation using credentials from the same Amazon Web Services account that owns the secret. If the secret is in a different account, then you must use a customer managed key and provide the ARN of that KMS key in this field. The user making the call must have permissions to both the secret and the KMS key in their respective accounts",
          args: {
            name: "string",
            generators: generators.kmsKeyIdGenerator,
          },
        },
        {
          name: "--secret-binary",
          description:
            "The binary data to encrypt and store in the new version of the secret. We recommend that you store your binary data in a file and then pass the contents of the file as a parameter.  Either SecretBinary or SecretString must have a value, but not both. You can't access this parameter in the Secrets Manager console. Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--secret-string",
          description:
            "The text data to encrypt and store in the new version of the secret. We recommend you use a JSON structure of key/value pairs for your secret value.  Either SecretBinary or SecretString must have a value, but not both.  Sensitive: This field contains sensitive information, so the service does not include it in CloudTrail log entries. If you create your own log entries, you must also avoid logging the information in this field",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The exact string that identifies the third-party partner that holds the external secret. For more information, see Managed external secret partners",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-secret-version-stage",
      description:
        "Modifies the staging labels attached to a version of a secret. Secrets Manager uses staging labels to track a version as it progresses through the secret rotation process. Each staging label can be attached to only one version at a time. To add a staging label to a version when it is already attached to another version, Secrets Manager first removes it from the other version first and then attaches it to this one. For more information about versions and staging labels, see Concepts: Version.  The staging labels that you specify in the VersionStage parameter are added to the existing list of staging labels for the version.  You can move the AWSCURRENT staging label to this version by including it in this call.  Whenever you move AWSCURRENT, Secrets Manager automatically moves the label AWSPREVIOUS to the version that AWSCURRENT was removed from.  If this action results in the last label being removed from a version, then the version is considered to be 'deprecated' and can be deleted by Secrets Manager. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:UpdateSecretVersionStage. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or the name of the secret with the version and staging labelsto modify. For an ARN, we recommend that you specify a complete ARN rather than a partial ARN. See Finding a secret from a partial ARN",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--version-stage",
          description: "The staging label to add to this version",
          args: {
            name: "string",
            generators: generators.getVersionStageGenerator,
          },
        },
        {
          name: "--remove-from-version-id",
          description:
            "The ID of the version that the staging label is to be removed from. If the staging label you are trying to attach to one version is already attached to a different version, then you must include this parameter and specify the version that the label is to be removed from. If the label is attached and you either do not specify this parameter, or the version ID does not match, then the operation fails",
          args: {
            name: "string",
            generators: generators.getVersionIdGenerator,
          },
        },
        {
          name: "--move-to-version-id",
          description:
            "The ID of the version to add the staging label to. To remove a label from a version, then do not specify this parameter. If the staging label is already attached to a different version of the secret, then you must also specify the RemoveFromVersionId parameter",
          args: {
            name: "string",
            generators: generators.getVersionIdGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "validate-resource-policy",
      description:
        "Validates that a resource policy does not grant a wide range of principals access to your secret. A resource-based policy is optional for secrets. The API performs three checks when validating the policy:   Sends a call to Zelkova, an automated reasoning engine, to ensure your resource policy does not allow broad access to your secret, for example policies that use a wildcard for the principal.   Checks for correct syntax in a policy.   Verifies the policy does not lock out a caller.   Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail.  Required permissions:  secretsmanager:ValidateResourcePolicy and secretsmanager:PutResourcePolicy. For more information, see  IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager",
      options: [
        {
          name: "--secret-id",
          description:
            "The ARN or name of the secret with the resource-based policy you want to validate",
          args: {
            name: "string",
            generators: generators.secretIdsGenerator,
          },
          priority: 100,
        },
        {
          name: "--resource-policy",
          description:
            "A JSON-formatted string that contains an Amazon Web Services resource-based policy. The policy in the string identifies who can access or manage this secret and its versions. For example policies, see Permissions policy examples",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
            generators: generators.listFilesGenerator,
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
  ],
};

export default completionSpec;
