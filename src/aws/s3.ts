// TODO: suggest available s3 endpoints
import awsRegions from "./regions";

const storageClasses = [
  "STANDARD",
  "REDUCED_REDUNDANCY",
  "STANDARD_IA",
  "ONEZONE_IA",
  "INTELLIGENT_TIERING",
  "GLACIER",
  "DEEP_ARCHIVE",
];

const acl = [
  "private",
  "public-read",
  "public-read-write",
  "authenticated-read",
  "aws-exec-read",
  "bucket-owner-read",
  "bucket-owner-full-control",
  "log-delivery-write",
];

const metadataDirective = ["COPY", "REPLACE"];
const sse = ["AES256", "aws:kms"];
const sseC = ["AES256"];
const requester = ["requester"];

const ttl = 30000;

const appendFolderPath = (
  whatHasUserTyped: string,
  baseLSCommand: string[]
): string[] => {
  let folderPath = "";
  const lastSlashIndex = whatHasUserTyped.lastIndexOf("/");

  if (lastSlashIndex > -1) {
    if (whatHasUserTyped.startsWith("/") && lastSlashIndex === 0) {
      folderPath = "/";
    } else {
      folderPath = whatHasUserTyped.slice(0, lastSlashIndex + 1);
    }
  }

  return [...baseLSCommand, folderPath];
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
  return sortSuggestions(out.split("\n"));
};

const sortSuggestions = (arr: string[], isS3?: boolean): Fig.Suggestion[] => {
  const sortFnStrings = (a, b) => {
    return a.localeCompare(b);
  };

  const alphabeticalSortFilesAndFolders = (arr) => {
    const dots_arr = [];
    const other_arr = [];

    arr.map((fsObject) => {
      if (fsObject.toLowerCase() == ".ds_store") return;
      if (fsObject.slice(0, 1) === ".") {
        dots_arr.push(fsObject);
      } else {
        other_arr.push(fsObject);
      }
    });

    if (isS3) {
      return [
        ...other_arr.sort(sortFnStrings),
        ...dots_arr.sort(sortFnStrings),
      ];
    }

    return [
      ...other_arr.sort(sortFnStrings),
      "../",
      ...dots_arr.sort(sortFnStrings),
    ];
  };

  const temp_array = alphabeticalSortFilesAndFolders(arr);

  const final_array = [];

  temp_array.forEach((item) => {
    if (item !== "" && item !== null) {
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

const _prefixS3 = "s3://";
const _prefixFile = "";
const _prefixFileb = "fileb://";

const generators: Record<string, Fig.Generator> = {
  listFilesGenerator: {
    script: (tokens) => {
      const baseLsCommand = ["ls", "-1ApL"];
      const whatHasUserTyped = tokens[tokens.length - 1];

      // Do not show file suggestions when s3:// typed
      if (whatHasUserTyped.startsWith(_prefixS3)) {
        return undefined;
      }

      return appendFolderPath(whatHasUserTyped, baseLsCommand);
    },
    postProcess: (out) => {
      return postProcessFiles(out, _prefixFile);
    },

    trigger: (newToken, oldToken) => {
      return triggerPrefix(newToken, oldToken, _prefixFile);
    },

    getQueryTerm: (token) => {
      // if token is either s3:// or any substr permutation (e.g: "s", "s3", "s3:/")
      // simply return token
      if (!token.startsWith(_prefixS3) && _prefixS3.startsWith(token)) {
        return token;
      }
      return token.slice(token.lastIndexOf("/") + 1);
    },
  },

  // --secret-binary and a few other options takes a blob as parameter.
  // The path pointing to the blob must be prefixed by fileb://
  // See more: https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-file.html
  listBlobsGenerator: {
    script: (tokens) => {
      const baseLSCommand = ["ls", "-1ApL "];
      let whatHasUserTyped = tokens[tokens.length - 1];

      if (whatHasUserTyped.startsWith(_prefixFileb)) {
        whatHasUserTyped = whatHasUserTyped.slice(_prefixFileb.length);
      } else {
        return ["echo", "fileb://"];
      }

      return appendFolderPath(whatHasUserTyped, baseLSCommand);
    },
    postProcess: (out) => {
      return postProcessFiles(out, _prefixFileb);
    },

    trigger: (newToken, oldToken) => {
      return triggerPrefix(newToken, oldToken, _prefixFileb);
    },

    getQueryTerm: (token) => {
      if (!token.startsWith(_prefixFileb)) return token;
      return token.slice(token.lastIndexOf("/") + 1);
    },
  },

  // generate s3 filepaths
  listRemoteFilesGenerator: {
    script: (tokens) => {
      const whatHasUserTyped = tokens[tokens.length - 1];
      const baseLsCommand = ["aws", "s3", "ls"];

      let folderPath = "";

      const lastSlashIndex = whatHasUserTyped.lastIndexOf("/");

      if (!whatHasUserTyped.startsWith(_prefixS3)) {
        // if whatHasUserTyped is neither s3:// or its substr permutations,
        // then we can assume that the filepath generator is in work
        // so do not return any s3 related filepaths
        if (!_prefixS3.startsWith(whatHasUserTyped)) {
          return undefined;
        }

        return ["echo", "s3://"];
      }

      if (lastSlashIndex > -1) {
        folderPath = whatHasUserTyped.slice(0, lastSlashIndex + 1);
      }

      return [...baseLsCommand, folderPath];
    },
    postProcess: (out) => {
      if (out == "") {
        return [];
      }

      if (out.trim() === _prefixS3) {
        return [
          {
            name: _prefixS3,
            insertValue: _prefixS3,
          },
        ];
      }

      let preFound = false;
      const lines = out.split("\n").map((line) => {
        const parts = line.split(/\s+/);
        // sub prefix
        if (!parts.length) {
          return [];
        }

        let s3Path = parts[parts.length - 1];

        // Parsing S3 CLI Output here
        // Do this in a try block because of the indexing magic
        try {
          //Example Output:
          //                             PRE charts/
          //  2021-05-08 10:15:53      81765 img.jpg
          //
          // After we have found at least 1 PRE keyword
          // we can assume that all lines without PRE are files
          if (parts[1] === "PRE") {
            preFound = true;
            return s3Path;
          }

          const hasBackSlash =
            s3Path.slice(_prefixS3.length).lastIndexOf("/") > -1;

          // it is a file, do not append trailing '/'
          if (preFound && !hasBackSlash) {
            return s3Path;
          }

          // If output line's third column is a number (File size column)
          // we can assume that it is a file so do not append trailing '/'
          if (!isNaN(parseFloat(parts[2])) && isFinite(parseInt(parts[2]))) {
            return s3Path;
          }

          // Any leftover lines are bucket names
          // just append '/' at the end
          if (!hasBackSlash) {
            s3Path = s3Path + "/";
          }
        } catch (e) {
          console.log(e);
        }

        return s3Path;
      });

      return sortSuggestions(lines as string[], true);
    },
    trigger: (newToken, oldToken) => {
      return triggerPrefix(newToken, oldToken, _prefixS3);
    },

    getQueryTerm: (token) => {
      if (!token.startsWith(_prefixS3)) return token;
      return token.slice(token.lastIndexOf("/") + 1);
    },
    cache: {
      ttl: ttl,
    },
  },

  // just bucket names
  listBuckets: {
    script: ["aws", "s3", "ls", "--page-size", "1000"],
    postProcess: function (out, context) {
      try {
        return out.split("\n").map((line) => {
          const parts = line.split(/\s+/);
          // sub prefix
          if (!parts.length) {
            return [];
          }
          return {
            name: _prefixS3 + parts[parts.length - 1],
          };
        }) as Fig.Suggestion[];
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
};
const completionSpec: Fig.Spec = {
  name: "s3",
  description:
    'This section explains prominent concepts and notations in the set of high-level S3 commands provided.\n\nIf you are looking for the low level S3 commands for the CLI, please see the\n``s3api`` command `reference page\n`_.\n\nPath Argument Type\n++++++++++++++++++\n\nWhenever using a command, at least one path argument must be specified.  There\nare two types of path arguments: ``LocalPath`` and ``S3Uri``.\n\n``LocalPath``: represents the path of a local file or directory.  It can be\nwritten as an absolute path or relative path.\n\n``S3Uri``: represents the location of an S3 object, prefix, or bucket.  This\nmust be written in the form ``s3://amzn-s3-demo-bucket/mykey`` where ``amzn-s3-demo-bucket`` is\nthe specified S3 bucket, ``mykey`` is the specified S3 key.  The path argument\nmust begin with ``s3://`` in order to denote that the path argument refers to\nan S3 object. Note that prefixes are separated by forward slashes. For\nexample, if the S3 object ``myobject`` had the prefix ``myprefix``, the\nS3 key would be ``myprefix/myobject``, and if the object was in the bucket\n``amzn-s3-demo-bucket``, the ``S3Uri`` would be ``s3://amzn-s3-demo-bucket/myprefix/myobject``.\n\n``S3Uri`` also supports S3 access points. To specify an access point, this\nvalue must be of the form ``s3:///``. For example if\nthe access point ``myaccesspoint`` to be used has the ARN:\n``arn:aws:s3:us-west-2:123456789012:accesspoint/myaccesspoint`` and the object\nbeing accessed has the key ``mykey``, then the ``S3URI`` used must be:\n``s3://arn:aws:s3:us-west-2:123456789012:accesspoint/myaccesspoint/mykey``.\nSimilar to bucket names, you can also use prefixes with access point ARNs for\nthe ``S3Uri``. For example:\n``s3://arn:aws:s3:us-west-2:123456789012:accesspoint/myaccesspoint/myprefix/``\n\n\n\nOrder of Path Arguments\n+++++++++++++++++++++++\n\nEvery command takes one or two positional path arguments.  The first path\nargument represents the source, which is the local file/directory or S3\nobject/prefix/bucket that is being referenced.  If there is a second path\nargument, it represents the destination, which is the local file/directory\nor S3 object/prefix/bucket that is being operated on.  Commands with only\none path argument do not have a destination because the operation is being\nperformed only on the source.\n\n\nSingle Local File and S3 Object Operations\n++++++++++++++++++++++++++++++++++++++++++\n\nSome commands perform operations only on single files and S3 objects.  The\nfollowing commands are single file/object operations if no ``--recursive``\nflag is provided.\n\n    * ``cp``\n    * ``mv``\n    * ``rm``\n\nFor this type of operation, the first path argument, the source, must exist\nand be a local file or S3 object.  The second path argument, the destination,\ncan be the name of a local file, local directory, S3 object, S3 prefix,\nor S3 bucket.\n\nThe destination is indicated as a local directory, S3 prefix, or S3 bucket\nif it ends with a forward slash or back slash.  The use of slash depends\non the path argument type.  If the path argument is a ``LocalPath``,\nthe type of slash is the separator used by the operating system.  If the\npath is a ``S3Uri``, the forward slash must always be used.  If a slash\nis at the end of the destination, the destination file or object will\nadopt the name of the source file or object.  Otherwise, if there is no\nslash at the end, the file or object will be saved under the name provided.\nSee examples in ``cp`` and ``mv`` to illustrate this description.\n\n\nDirectory and S3 Prefix Operations\n++++++++++++++++++++++++++++++++++\n\nSome commands only perform operations on the contents of a local directory\nor S3 prefix/bucket.  Adding or omitting a forward slash or back slash to\nthe end of any path argument, depending on its type, does not affect the\nresults of the operation.  The following commands will always result in\na directory or S3 prefix/bucket operation:\n\n* ``sync``\n* ``mb``\n* ``rb``\n* ``ls``\n\n\nUse of Exclude and Include Filters\n++++++++++++++++++++++++++++++++++\n\nCurrently, there is no support for the use of UNIX style wildcards in\na command\'s path arguments.  However, most commands have ``--exclude ""``\nand ``--include ""`` parameters that can achieve the desired result.\nThese parameters perform pattern matching to either exclude or include\na particular file or object.  The following pattern symbols are supported.\n\n    * ``*``: Matches everything\n    * ``?``: Matches any single character\n    * ``[sequence]``: Matches any character in ``sequence``\n    * ``[!sequence]``: Matches any character not in ``sequence``\n\nAny number of these parameters can be passed to a command.  You can do this by\nproviding an ``--exclude`` or ``--include`` argument multiple times, e.g.\n``--include "*.txt" --include "*.png"``.\nWhen there are multiple filters, the rule is the filters that appear later in\nthe command take precedence over filters that appear earlier in the command.\nFor example, if the filter parameters passed to the command were\n\n::\n\n    --exclude "*" --include "*.txt"\n\nAll files will be excluded from the command except for files ending with\n``.txt``  However, if the order of the filter parameters was changed to\n\n::\n\n    --include "*.txt" --exclude "*"\n\nAll files will be excluded from the command.\n\nEach filter is evaluated against the **source directory**.  If the source\nlocation is a file instead of a directory, the directory containing the file is\nused as the source directory.  For example, suppose you had the following\ndirectory structure::\n\n    /tmp/foo/\n      .git/\n      |---config\n      |---description\n      foo.txt\n      bar.txt\n      baz.jpg\n\nIn the command ``aws s3 sync /tmp/foo s3://bucket/`` the source directory is\n``/tmp/foo``.  Any include/exclude filters will be evaluated with the source\ndirectory prepended.  Below are several examples to demonstrate this.\n\nGiven the directory structure above and the command\n``aws s3 cp /tmp/foo s3://bucket/ --recursive --exclude ".git/*"``, the\nfiles ``.git/config`` and ``.git/description`` will be excluded from the\nfiles to upload because the exclude filter ``.git/*`` will have the source\nprepended to the filter.  This means that::\n\n    /tmp/foo/.git/* -> /tmp/foo/.git/config       (matches, should exclude)\n    /tmp/foo/.git/* -> /tmp/foo/.git/description  (matches, should exclude)\n    /tmp/foo/.git/* -> /tmp/foo/foo.txt  (does not match, should include)\n    /tmp/foo/.git/* -> /tmp/foo/bar.txt  (does not match, should include)\n    /tmp/foo/.git/* -> /tmp/foo/baz.jpg  (does not match, should include)\n\nThe command ``aws s3 cp /tmp/foo/ s3://bucket/ --recursive --exclude "ba*"``\nwill exclude ``/tmp/foo/bar.txt`` and ``/tmp/foo/baz.jpg``::\n\n    /tmp/foo/ba* -> /tmp/foo/.git/config      (does not match, should include)\n    /tmp/foo/ba* -> /tmp/foo/.git/description (does not match, should include)\n    /tmp/foo/ba* -> /tmp/foo/foo.txt          (does not match, should include)\n    /tmp/foo/ba* -> /tmp/foo/bar.txt  (matches, should exclude)\n    /tmp/foo/ba* -> /tmp/foo/baz.jpg  (matches, should exclude)\n\n\nNote that, by default, *all files are included*.  This means that\nproviding **only** an ``--include`` filter will not change what\nfiles are transferred.  ``--include`` will only re-include files that\nhave been excluded from an ``--exclude`` filter.  If you only want\nto upload files with a particular extension, you need to first exclude\nall files, then re-include the files with the particular extension.\nThis command will upload **only** files ending with ``.jpg``::\n\n    aws s3 cp /tmp/foo/ s3://bucket/ --recursive --exclude "*" --include "*.jpg"\n\nIf you wanted to include both ``.jpg`` files as well as ``.txt`` files you\ncan run::\n\n    aws s3 cp /tmp/foo/ s3://bucket/ --recursive \\\n        --exclude "*" --include "*.jpg" --include "*.txt"',
  subcommands: [
    {
      name: "ls",
      description:
        "List S3 objects and common prefixes under a prefix or all S3 buckets. Note that the --output and --no-paginate arguments are ignored for this command",
      options: [
        {
          name: "--recursive",
          description:
            "Command is performed on all files or objects under the specified directory or prefix",
        },
        {
          name: "--page-size",
          description:
            "The number of results to return in each response to a list operation. The default value is 1000 (the maximum allowed). Using a lower value may help if an operation times out",
          args: {
            name: "integer",
            description: "The default & max is 1000",
          },
        },
        {
          name: "--human-readable",
          description: "Displays file sizes in human readable format",
        },
        {
          name: "--summarize",
          description:
            "Displays summary information (number of objects, total size)",
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html",
          args: {
            name: "string",
            suggestions: requester,
            isOptional: true,
          },
        },
        {
          name: "--bucket-name-prefix",
          description:
            "Limits the response to bucket names that begin with the specified bucket name prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--bucket-region",
          description:
            "Limits the response to buckets that are located in the specified Amazon Web Services Region. The Amazon Web Services Region must be expressed according to the Amazon Web Services Region code, such as us-west-2 for the US West (Oregon) Region. For a list of the valid values for all of the Amazon Web Services Regions, see https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "paths",
        generators: generators.listRemoteFilesGenerator,
        isOptional: true,
      },
    },
    {
      name: "website",
      description: "Set the website configuration for a bucket",
      options: [
        {
          name: "--index-document",
          description:
            "A suffix that is appended to a request that is for a directory on the website endpoint (e.g. if the suffix is index.html and you make a request to samplebucket/images/ the data that is returned will be for the object with the key name images/index.html) The suffix must not be empty and must not include a slash character",
          args: {
            name: "string",
            suggestions: ["index.html"],
          },
        },
        {
          name: "--error-document",
          description:
            "The object key name to use when a 4XX class error occurs",
          args: {
            name: "string",
            suggestions: ["error.html"],
          },
        },
      ],
      args: {
        name: "paths",
        generators: generators.listBuckets,
      },
    },
    {
      name: "cp",
      description:
        "Copies a local file or S3 object to another location locally or in S3",
      options: [
        {
          name: "--dryrun",
          description:
            "Displays the operations that would be performed using the specified command without actually running them",
        },
        {
          name: "--quiet",
          description:
            "Does not display the operations performed from the specified command",
        },
        {
          name: "--include",
          description:
            "Don't exclude files or objects in the command that match the specified pattern. See Use of Exclude and Include Filters for details",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclude",
          description:
            "Exclude all files or objects from the command that matches the specified pattern",
          args: {
            name: "string",
          },
        },
        {
          name: "--acl",
          description:
            'Sets the ACL for the object when the command is performed.  If you use this parameter you must have the "s3:PutObjectAcl" permission included in the list of actions for your IAM policy. Only accepts values of ``private``, ``public-read``, ``public-read-write``, ``authenticated-read``, ``aws-exec-read``, ``bucket-owner-read``, ``bucket-owner-full-control`` and ``log-delivery-write``. See Canned ACL for details',
          args: {
            name: "string",
            suggestions: acl,
          },
        },
        {
          name: "--follow-symlinks",
          description:
            "Symbolic links are followed when uploading to S3 from the local filesystem. Note that S3 does not support symbolic links, so the contents of the link target are uploaded under the name of the link. When downloading from S3, ``--no-follow-symlinks`` skips any object whose destination is a symbolic link, or is located under one, starting at the destination you specified. Symbolic links in the path leading up to that destination are still followed. When neither ``--follow-symlinks`` nor ``--no-follow-symlinks`` is specified, the default is to follow symlinks",
        },
        {
          name: "--no-follow-symlinks",
        },
        {
          name: "--no-guess-mime-type",
          description:
            "Do not try to guess the mime type for uploaded files.  By default the mime type of a file is guessed when it is uploaded",
        },
        {
          name: "--sse",
          description:
            "Specifies server-side encryption of the object in S3. Valid values are ``AES256`` and ``aws:kms``. If the parameter is specified but no value is provided, ``AES256`` is used",
          args: {
            name: "string",
            suggestions: sse,
            isOptional: true,
          },
        },
        {
          name: "--sse-c",
          description:
            "Specifies server-side encryption using customer provided keys of the the object in S3. ``AES256`` is the only valid value. If the parameter is specified but no value is provided, ``AES256`` is used. If you provide this value, ``--sse-c-key`` must be specified as well",
          args: {
            name: "string",
            suggestions: sseC,
            isOptional: true,
          },
        },
        {
          name: "--sse-c-key",
          description:
            "The customer-provided encryption key to use to server-side encrypt the object in S3. If you provide this value, ``--sse-c`` must be specified as well. The key provided should **not** be base64 encoded",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--sse-kms-key-id",
          description:
            "The customer-managed AWS Key Management Service (KMS) key ID that should be used to server-side encrypt the object in S3. You should only provide this parameter if you are using a customer managed customer master key (CMK) and not the AWS managed KMS CMK",
          args: {
            name: "string",
            generators: generators.kmsKeyIdGenerator,
          },
        },
        {
          name: "--sse-c-copy-source",
          description:
            "This parameter should only be specified when copying an S3 object that was encrypted server-side with a customer-provided key. It specifies the algorithm to use when decrypting the source object. ``AES256`` is the only valid value. If the parameter is specified but no value is provided, ``AES256`` is used. If you provide this value, ``--sse-c-copy-source-key`` must be specified as well",
          args: {
            name: "string",
            suggestions: sseC,
            isOptional: true,
          },
        },
        {
          name: "--sse-c-copy-source-key",
          description:
            "This parameter should only be specified when copying an S3 object that was encrypted server-side with a customer-provided key. Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided must be one that was used when the source object was created. If you provide this value, ``--sse-c-copy-source`` be specified as well. The key provided should **not** be base64 encoded",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--storage-class",
          description:
            "The type of storage to use for the object. Valid choices are: STANDARD | REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | GLACIER_IR. Defaults to 'STANDARD'",
          args: {
            name: "string",
            suggestions: storageClasses,
          },
        },
        {
          name: "--tags",
          description:
            "Tags to set on objects, in the format of ``--tags key value``. You can specify this flag multiple times, once for each tag. This parameter is only supported when transferring from a local path to S3. For a ``sync``, tags are only set on objects that are transferred",
          args: {
            name: "string",
          },
        },
        {
          name: "--grants",
          description:
            "Grant specific permissions to individual users or groups. You can supply a list of grants of the form--grants Permission=Grantee_Type=Grantee_ID [Permission=Grantee_Type=Grantee_ID ...]To specify the same permission type for multiple grantees, specify the permission as such as --grants Permission=Grantee_Type=Grantee_ID,Grantee_Type=Grantee_ID,...Each value contains the following elements:Permission - Specifies the granted permissions, and can be set to read, readacl, writeacl, or full.Grantee_Type - Specifies how the grantee is to be identified, and can be set to uri or id.Grantee_ID - Specifies the grantee based on Grantee_Type. The Grantee_ID value can be one of:uri - The group's URI. For more information, see Who Is a Grantee?id - The account's canonical IDFor more information on Amazon S3 access control, see Access Control",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--website-redirect",
          description:
            "If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "Specify an explicit content type for this operation.  This value overrides any guessed mime types",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-control",
          description:
            "Specifies caching behavior along the request/reply chain",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-disposition",
          description: "Specifies presentational information for the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-encoding",
          description:
            "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-language",
          description: "The language the content is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires",
          description:
            "The date and time at which the object is no longer cacheable",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-region",
          description:
            "When transferring objects from an s3 bucket to an s3 bucket, this specifies the region of the source bucket. Note the region specified by ``--region`` or through configuration of the CLI refers to the region of the destination bucket.  If ``--source-region`` is not specified the region of the source will be the same as the region of the destination bucket",
          args: {
            name: "string",
            suggestions: awsRegions,
          },
        },
        {
          name: "--only-show-errors",
          description:
            "Only errors and warnings are displayed. All other output is suppressed",
        },
        {
          name: "--no-progress",
          description:
            "File transfer progress is not displayed. This flag is only applied when the quiet and only-show-errors flags are not provided",
        },
        {
          name: "--progress-frequency",
          description:
            "Number of seconds to wait before updating file transfer progress. This flag is only applied when the quiet and only-show-errors flags are not provided",
          args: {
            name: "integer",
          },
        },
        {
          name: "--progress-multiline",
          description: "Show progress on multiple lines",
        },
        {
          name: "--page-size",
          description:
            "The number of results to return in each response to a list operation. The default value is 1000 (the maximum allowed). Using a lower value may help if an operation times out",
          args: {
            name: "integer",
            description: "The default & max is 1000",
          },
        },
        {
          name: "--ignore-glacier-warnings",
          description:
            "Turns off glacier warnings. Warnings about an operation that cannot be performed because it involves copying, downloading, or moving a glacier object will no longer be printed to standard error and will no longer cause the return code of the command to be ``2``",
        },
        {
          name: "--force-glacier-transfer",
          description:
            "Forces a transfer request on all Glacier objects in a sync or recursive copy",
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html",
          args: {
            name: "string",
            suggestions: requester,
            isOptional: true,
          },
        },
        {
          name: "--checksum-mode",
          description:
            "To retrieve the checksum, this mode must be enabled. If the object has a checksum, it will be verified",
          args: {
            name: "string",
            suggestions: ["ENABLED"],
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object",
          args: {
            name: "string",
            suggestions: [
              "CRC64NVME",
              "CRC32",
              "SHA256",
              "SHA1",
              "CRC32C",
              "SHA512",
              "XXHASH64",
              "XXHASH3",
              "XXHASH128",
            ],
          },
        },
        {
          name: "--metadata",
          description:
            "A map of metadata to store with the objects in S3. This will be applied to every object which is part of this request. In a sync, this means that files which haven't changed won't receive the new metadata",
          args: {
            name: "map",
            description: "KeyName1=string,KeyName2=string",
          },
        },
        {
          name: "--copy-props",
          description:
            "Determines which properties are copied from the source S3 object. This parameter only applies for S3 to S3 copies. Valid values are: ``none`` - Do not copy any of the properties from the source S3 object.``metadata-directive`` - Copies the following properties from the source S3 object: ``content-type``, ``content-language``, ``content-encoding``, ``content-disposition``, ``cache-control``, ``--expires``, and ``metadata````default`` - The default value. Copies tags and properties covered under the ``metadata-directive`` value from the source S3 object.``all`` - Copies annotations in addition to the tags and properties covered under the ``default`` value from the source S3 object.In order to copy the appropriate properties for multipart copies, some of the options may require additional API calls if a multipart copy is involved. Specifically:``metadata-directive`` may require additional ``HeadObject`` API calls.``default`` may require additional ``HeadObject``, ``GetObjectTagging``, and ``PutObjectTagging`` API calls.``all`` may require the additional API calls covered under the ``default`` value, as well as ``ListObjectAnnotations``, ``GetObjectAnnotation``, and ``PutObjectAnnotation`` API calls. Note this list of API calls may grow in the future in order to ensure multipart copies preserve the exact properties a ``CopyObject`` API call would preserve.If you want to guarantee no additional API calls are made other than than the ones needed to perform the actual copy, set this option to ``none``",
          args: {
            name: "string",
            suggestions: ["none", "metadata-directive", "default", "all"],
          },
        },
        {
          name: "--metadata-directive",
          description:
            "Sets the ``x-amz-metadata-directive`` header for CopyObject operations. It is recommended to use the ``--copy-props`` parameter instead to control copying of metadata properties. If ``--metadata-directive`` is set, the ``--copy-props`` parameter will be disabled and will have no affect on the transfer",
          args: {
            name: "string",
            suggestions: metadataDirective,
          },
        },
        {
          name: "--expected-size",
          description:
            "This argument specifies the expected size of a stream in terms of bytes. Note that this argument is needed only when a stream is being uploaded to s3 and the size is larger than 50GB.  Failure to include this argument under these conditions may result in a failed upload due to too many parts in upload",
          args: {
            name: "string",
          },
        },
        {
          name: "--recursive",
          description:
            "Command is performed on all files or objects under the specified directory or prefix",
        },
        {
          name: "--case-conflict",
          description:
            "Configures behavior when attempting to download multiple objects whose keys differ only by case, which can cause undefined behavior on case-insensitive filesystems. This parameter only applies for commands that perform multiple S3 to local downloads. See Handling case conflicts for details. Valid values are: ``error`` - Raise an error and abort downloads.``warn`` - Emit a warning and download the object.``skip`` - Skip downloading the object.``ignore`` - The default value. Ignore the conflict and download the object",
          args: {
            name: "string",
            suggestions: ["ignore", "skip", "warn", "error"],
          },
        },
        {
          name: "--no-overwrite",
          description:
            "This flag prevents overwriting of files at the destination. With this flag, only files not present at the destination will be transferred",
        },
      ],
      args: [
        {
          name: "source",
          generators: [
            generators.listRemoteFilesGenerator,
            generators.listFilesGenerator,
          ],
        },
        {
          name: "destination",
          generators: [
            generators.listRemoteFilesGenerator,
            generators.listFilesGenerator,
          ],
        },
      ],
    },
    {
      name: "mv",
      description:
        "Moves a local file or S3 object to another location locally or in S3. \nThe ``mv`` command copies the source object or file to the specified \ndestination and then deletes the source object or file.\n\n.. WARNING::\n    If you are using any type of access point ARNs or access point aliases \n    in your S3 URIs, you must take extra care to make sure that your source \n    and destination S3 URIs resolve to different underlying buckets. If the \n    source and destination buckets are the same, the source file or object \n    can be moved onto itself, which can result in accidental deletion of \n    your source file or object.\n\n    To verify that the source and destination buckets are not the same, \n    use the ``--validate-same-s3-paths`` parameter, or set the environment\n    variable ``AWS_CLI_S3_MV_VALIDATE_SAME_S3_PATHS`` to ``true``",
      options: [
        {
          name: "--dryrun",
          description:
            "Displays the operations that would be performed using the specified command without actually running them",
        },
        {
          name: "--quiet",
          description:
            "Does not display the operations performed from the specified command",
        },
        {
          name: "--include",
          description:
            "Don't exclude files or objects in the command that match the specified pattern. See Use of Exclude and Include Filters for details",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclude",
          description:
            "Exclude all files or objects from the command that matches the specified pattern",
          args: {
            name: "string",
          },
        },
        {
          name: "--acl",
          description:
            'Sets the ACL for the object when the command is performed.  If you use this parameter you must have the "s3:PutObjectAcl" permission included in the list of actions for your IAM policy. Only accepts values of ``private``, ``public-read``, ``public-read-write``, ``authenticated-read``, ``aws-exec-read``, ``bucket-owner-read``, ``bucket-owner-full-control`` and ``log-delivery-write``. See Canned ACL for details',
          args: {
            name: "string",
            suggestions: acl,
          },
        },
        {
          name: "--follow-symlinks",
          description:
            "Symbolic links are followed when uploading to S3 from the local filesystem. Note that S3 does not support symbolic links, so the contents of the link target are uploaded under the name of the link. When downloading from S3, ``--no-follow-symlinks`` skips any object whose destination is a symbolic link, or is located under one, starting at the destination you specified. Symbolic links in the path leading up to that destination are still followed. When neither ``--follow-symlinks`` nor ``--no-follow-symlinks`` is specified, the default is to follow symlinks",
        },
        {
          name: "--no-follow-symlinks",
        },
        {
          name: "--no-guess-mime-type",
          description:
            "Do not try to guess the mime type for uploaded files.  By default the mime type of a file is guessed when it is uploaded",
        },
        {
          name: "--sse",
          description:
            "Specifies server-side encryption of the object in S3. Valid values are ``AES256`` and ``aws:kms``. If the parameter is specified but no value is provided, ``AES256`` is used",
          args: {
            name: "string",
            suggestions: sse,
            isOptional: true,
          },
        },
        {
          name: "--sse-c",
          description:
            "Specifies server-side encryption using customer provided keys of the the object in S3. ``AES256`` is the only valid value. If the parameter is specified but no value is provided, ``AES256`` is used. If you provide this value, ``--sse-c-key`` must be specified as well",
          args: {
            name: "string",
            suggestions: sseC,
            isOptional: true,
          },
        },
        {
          name: "--sse-c-key",
          description:
            "The customer-provided encryption key to use to server-side encrypt the object in S3. If you provide this value, ``--sse-c`` must be specified as well. The key provided should **not** be base64 encoded",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--sse-kms-key-id",
          description:
            "The customer-managed AWS Key Management Service (KMS) key ID that should be used to server-side encrypt the object in S3. You should only provide this parameter if you are using a customer managed customer master key (CMK) and not the AWS managed KMS CMK",
          args: {
            name: "string",
            generators: generators.kmsKeyIdGenerator,
          },
        },
        {
          name: "--sse-c-copy-source",
          description:
            "This parameter should only be specified when copying an S3 object that was encrypted server-side with a customer-provided key. It specifies the algorithm to use when decrypting the source object. ``AES256`` is the only valid value. If the parameter is specified but no value is provided, ``AES256`` is used. If you provide this value, ``--sse-c-copy-source-key`` must be specified as well",
          args: {
            name: "string",
            suggestions: sseC,
            isOptional: true,
          },
        },
        {
          name: "--sse-c-copy-source-key",
          description:
            "This parameter should only be specified when copying an S3 object that was encrypted server-side with a customer-provided key. Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided must be one that was used when the source object was created. If you provide this value, ``--sse-c-copy-source`` be specified as well. The key provided should **not** be base64 encoded",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--storage-class",
          description:
            "The type of storage to use for the object. Valid choices are: STANDARD | REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | GLACIER_IR. Defaults to 'STANDARD'",
          args: {
            name: "string",
            suggestions: storageClasses,
          },
        },
        {
          name: "--tags",
          description:
            "Tags to set on objects, in the format of ``--tags key value``. You can specify this flag multiple times, once for each tag. This parameter is only supported when transferring from a local path to S3. For a ``sync``, tags are only set on objects that are transferred",
          args: {
            name: "string",
          },
        },
        {
          name: "--grants",
          description:
            "Grant specific permissions to individual users or groups. You can supply a list of grants of the form--grants Permission=Grantee_Type=Grantee_ID [Permission=Grantee_Type=Grantee_ID ...]To specify the same permission type for multiple grantees, specify the permission as such as --grants Permission=Grantee_Type=Grantee_ID,Grantee_Type=Grantee_ID,...Each value contains the following elements:Permission - Specifies the granted permissions, and can be set to read, readacl, writeacl, or full.Grantee_Type - Specifies how the grantee is to be identified, and can be set to uri or id.Grantee_ID - Specifies the grantee based on Grantee_Type. The Grantee_ID value can be one of:uri - The group's URI. For more information, see Who Is a Grantee?id - The account's canonical IDFor more information on Amazon S3 access control, see Access Control",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--website-redirect",
          description:
            "If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "Specify an explicit content type for this operation.  This value overrides any guessed mime types",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-control",
          description:
            "Specifies caching behavior along the request/reply chain",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-disposition",
          description: "Specifies presentational information for the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-encoding",
          description:
            "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-language",
          description: "The language the content is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires",
          description:
            "The date and time at which the object is no longer cacheable",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-region",
          description:
            "When transferring objects from an s3 bucket to an s3 bucket, this specifies the region of the source bucket. Note the region specified by ``--region`` or through configuration of the CLI refers to the region of the destination bucket.  If ``--source-region`` is not specified the region of the source will be the same as the region of the destination bucket",
          args: {
            name: "string",
            suggestions: awsRegions,
          },
        },
        {
          name: "--only-show-errors",
          description:
            "Only errors and warnings are displayed. All other output is suppressed",
        },
        {
          name: "--no-progress",
          description:
            "File transfer progress is not displayed. This flag is only applied when the quiet and only-show-errors flags are not provided",
        },
        {
          name: "--progress-frequency",
          description:
            "Number of seconds to wait before updating file transfer progress. This flag is only applied when the quiet and only-show-errors flags are not provided",
          args: {
            name: "integer",
          },
        },
        {
          name: "--progress-multiline",
          description: "Show progress on multiple lines",
        },
        {
          name: "--page-size",
          description:
            "The number of results to return in each response to a list operation. The default value is 1000 (the maximum allowed). Using a lower value may help if an operation times out",
          args: {
            name: "integer",
            description: "The default & max is 1000",
          },
        },
        {
          name: "--ignore-glacier-warnings",
          description:
            "Turns off glacier warnings. Warnings about an operation that cannot be performed because it involves copying, downloading, or moving a glacier object will no longer be printed to standard error and will no longer cause the return code of the command to be ``2``",
        },
        {
          name: "--force-glacier-transfer",
          description:
            "Forces a transfer request on all Glacier objects in a sync or recursive copy",
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html",
          args: {
            name: "string",
            suggestions: requester,
            isOptional: true,
          },
        },
        {
          name: "--checksum-mode",
          description:
            "To retrieve the checksum, this mode must be enabled. If the object has a checksum, it will be verified",
          args: {
            name: "string",
            suggestions: ["ENABLED"],
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object",
          args: {
            name: "string",
            suggestions: [
              "CRC64NVME",
              "CRC32",
              "SHA256",
              "SHA1",
              "CRC32C",
              "SHA512",
              "XXHASH64",
              "XXHASH3",
              "XXHASH128",
            ],
          },
        },
        {
          name: "--metadata",
          description:
            "A map of metadata to store with the objects in S3. This will be applied to every object which is part of this request. In a sync, this means that files which haven't changed won't receive the new metadata",
          args: {
            name: "map",
            description: "KeyName1=string,KeyName2=string",
          },
        },
        {
          name: "--copy-props",
          description:
            "Determines which properties are copied from the source S3 object. This parameter only applies for S3 to S3 copies. Valid values are: ``none`` - Do not copy any of the properties from the source S3 object.``metadata-directive`` - Copies the following properties from the source S3 object: ``content-type``, ``content-language``, ``content-encoding``, ``content-disposition``, ``cache-control``, ``--expires``, and ``metadata````default`` - The default value. Copies tags and properties covered under the ``metadata-directive`` value from the source S3 object.``all`` - Copies annotations in addition to the tags and properties covered under the ``default`` value from the source S3 object.In order to copy the appropriate properties for multipart copies, some of the options may require additional API calls if a multipart copy is involved. Specifically:``metadata-directive`` may require additional ``HeadObject`` API calls.``default`` may require additional ``HeadObject``, ``GetObjectTagging``, and ``PutObjectTagging`` API calls.``all`` may require the additional API calls covered under the ``default`` value, as well as ``ListObjectAnnotations``, ``GetObjectAnnotation``, and ``PutObjectAnnotation`` API calls. Note this list of API calls may grow in the future in order to ensure multipart copies preserve the exact properties a ``CopyObject`` API call would preserve.If you want to guarantee no additional API calls are made other than than the ones needed to perform the actual copy, set this option to ``none``",
          args: {
            name: "string",
            suggestions: ["none", "metadata-directive", "default", "all"],
          },
        },
        {
          name: "--metadata-directive",
          description:
            "Sets the ``x-amz-metadata-directive`` header for CopyObject operations. It is recommended to use the ``--copy-props`` parameter instead to control copying of metadata properties. If ``--metadata-directive`` is set, the ``--copy-props`` parameter will be disabled and will have no affect on the transfer",
          args: {
            name: "string",
            suggestions: metadataDirective,
          },
        },
        {
          name: "--recursive",
          description:
            "Command is performed on all files or objects under the specified directory or prefix",
        },
        {
          name: "--validate-same-s3-paths",
          description:
            "Resolves the source and destination S3 URIs to their underlying buckets and verifies that the file or object is not being moved onto itself. If you are using any type of access point ARNs or access point aliases in your S3 URIs, we strongly recommended using this parameter to help prevent accidental deletions of the source file or object. This parameter resolves the underlying buckets of S3 access point ARNs and aliases, S3 on Outposts access point ARNs, and Multi-Region Access Point ARNs. S3 on Outposts access point aliases are not supported. Instead of using this parameter, you can set the environment variable ``AWS_CLI_S3_MV_VALIDATE_SAME_S3_PATHS`` to ``true``. NOTE: Path validation requires making additional API calls. Future updates to this path-validation mechanism might change which API calls are made",
        },
        {
          name: "--case-conflict",
          description:
            "Configures behavior when attempting to download multiple objects whose keys differ only by case, which can cause undefined behavior on case-insensitive filesystems. This parameter only applies for commands that perform multiple S3 to local downloads. See Handling case conflicts for details. Valid values are: ``error`` - Raise an error and abort downloads.``warn`` - Emit a warning and download the object.``skip`` - Skip downloading the object.``ignore`` - The default value. Ignore the conflict and download the object",
          args: {
            name: "string",
            suggestions: ["ignore", "skip", "warn", "error"],
          },
        },
        {
          name: "--no-overwrite",
          description:
            "This flag prevents overwriting of files at the destination. With this flag, only files not present at the destination will be transferred",
        },
      ],
      args: [
        {
          name: "source",
          generators: [
            generators.listRemoteFilesGenerator,
            generators.listFilesGenerator,
          ],
        },
        {
          name: "destination",
          generators: [
            generators.listRemoteFilesGenerator,
            generators.listFilesGenerator,
          ],
        },
      ],
    },
    {
      name: "rm",
      description: "Deletes an S3 object",
      options: [
        {
          name: "--dryrun",
          description:
            "Displays the operations that would be performed using the specified command without actually running them",
        },
        {
          name: "--quiet",
          description:
            "Does not display the operations performed from the specified command",
        },
        {
          name: "--recursive",
          description:
            "Command is performed on all files or objects under the specified directory or prefix",
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html",
          args: {
            name: "string",
            suggestions: requester,
            isOptional: true,
          },
        },
        {
          name: "--include",
          description:
            "Don't exclude files or objects in the command that match the specified pattern. See Use of Exclude and Include Filters for details",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclude",
          description:
            "Exclude all files or objects from the command that matches the specified pattern",
          args: {
            name: "string",
          },
        },
        {
          name: "--only-show-errors",
          description:
            "Only errors and warnings are displayed. All other output is suppressed",
        },
        {
          name: "--page-size",
          description:
            "The number of results to return in each response to a list operation. The default value is 1000 (the maximum allowed). Using a lower value may help if an operation times out",
          args: {
            name: "integer",
            description: "The default & max is 1000",
          },
        },
      ],
      args: {
        name: "paths",
        generators: generators.listRemoteFilesGenerator,
      },
    },
    {
      name: "sync",
      description:
        "Syncs directories and S3 prefixes. Recursively copies new and updated files from the source directory to the destination. Only creates folders in the destination if they contain one or more files",
      options: [
        {
          name: "--dryrun",
          description:
            "Displays the operations that would be performed using the specified command without actually running them",
        },
        {
          name: "--quiet",
          description:
            "Does not display the operations performed from the specified command",
        },
        {
          name: "--include",
          description:
            "Don't exclude files or objects in the command that match the specified pattern. See Use of Exclude and Include Filters for details",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclude",
          description:
            "Exclude all files or objects from the command that matches the specified pattern",
          args: {
            name: "string",
          },
        },
        {
          name: "--acl",
          description:
            'Sets the ACL for the object when the command is performed.  If you use this parameter you must have the "s3:PutObjectAcl" permission included in the list of actions for your IAM policy. Only accepts values of ``private``, ``public-read``, ``public-read-write``, ``authenticated-read``, ``aws-exec-read``, ``bucket-owner-read``, ``bucket-owner-full-control`` and ``log-delivery-write``. See Canned ACL for details',
          args: {
            name: "string",
            suggestions: acl,
          },
        },
        {
          name: "--follow-symlinks",
          description:
            "Symbolic links are followed when uploading to S3 from the local filesystem. Note that S3 does not support symbolic links, so the contents of the link target are uploaded under the name of the link. When downloading from S3, ``--no-follow-symlinks`` skips any object whose destination is a symbolic link, or is located under one, starting at the destination you specified. Symbolic links in the path leading up to that destination are still followed. When neither ``--follow-symlinks`` nor ``--no-follow-symlinks`` is specified, the default is to follow symlinks",
        },
        {
          name: "--no-follow-symlinks",
        },
        {
          name: "--no-guess-mime-type",
          description:
            "Do not try to guess the mime type for uploaded files.  By default the mime type of a file is guessed when it is uploaded",
        },
        {
          name: "--sse",
          description:
            "Specifies server-side encryption of the object in S3. Valid values are ``AES256`` and ``aws:kms``. If the parameter is specified but no value is provided, ``AES256`` is used",
          args: {
            name: "string",
            suggestions: sse,
            isOptional: true,
          },
        },
        {
          name: "--sse-c",
          description:
            "Specifies server-side encryption using customer provided keys of the the object in S3. ``AES256`` is the only valid value. If the parameter is specified but no value is provided, ``AES256`` is used. If you provide this value, ``--sse-c-key`` must be specified as well",
          args: {
            name: "string",
            suggestions: sseC,
            isOptional: true,
          },
        },
        {
          name: "--sse-c-key",
          description:
            "The customer-provided encryption key to use to server-side encrypt the object in S3. If you provide this value, ``--sse-c`` must be specified as well. The key provided should **not** be base64 encoded",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--sse-kms-key-id",
          description:
            "The customer-managed AWS Key Management Service (KMS) key ID that should be used to server-side encrypt the object in S3. You should only provide this parameter if you are using a customer managed customer master key (CMK) and not the AWS managed KMS CMK",
          args: {
            name: "string",
            generators: generators.kmsKeyIdGenerator,
          },
        },
        {
          name: "--sse-c-copy-source",
          description:
            "This parameter should only be specified when copying an S3 object that was encrypted server-side with a customer-provided key. It specifies the algorithm to use when decrypting the source object. ``AES256`` is the only valid value. If the parameter is specified but no value is provided, ``AES256`` is used. If you provide this value, ``--sse-c-copy-source-key`` must be specified as well",
          args: {
            name: "string",
            suggestions: sseC,
            isOptional: true,
          },
        },
        {
          name: "--sse-c-copy-source-key",
          description:
            "This parameter should only be specified when copying an S3 object that was encrypted server-side with a customer-provided key. Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided must be one that was used when the source object was created. If you provide this value, ``--sse-c-copy-source`` be specified as well. The key provided should **not** be base64 encoded",
          args: {
            name: "blob",
            generators: generators.listBlobsGenerator,
          },
        },
        {
          name: "--storage-class",
          description:
            "The type of storage to use for the object. Valid choices are: STANDARD | REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | GLACIER_IR. Defaults to 'STANDARD'",
          args: {
            name: "string",
            suggestions: storageClasses,
          },
        },
        {
          name: "--tags",
          description:
            "Tags to set on objects, in the format of ``--tags key value``. You can specify this flag multiple times, once for each tag. This parameter is only supported when transferring from a local path to S3. For a ``sync``, tags are only set on objects that are transferred",
          args: {
            name: "string",
          },
        },
        {
          name: "--grants",
          description:
            "Grant specific permissions to individual users or groups. You can supply a list of grants of the form--grants Permission=Grantee_Type=Grantee_ID [Permission=Grantee_Type=Grantee_ID ...]To specify the same permission type for multiple grantees, specify the permission as such as --grants Permission=Grantee_Type=Grantee_ID,Grantee_Type=Grantee_ID,...Each value contains the following elements:Permission - Specifies the granted permissions, and can be set to read, readacl, writeacl, or full.Grantee_Type - Specifies how the grantee is to be identified, and can be set to uri or id.Grantee_ID - Specifies the grantee based on Grantee_Type. The Grantee_ID value can be one of:uri - The group's URI. For more information, see Who Is a Grantee?id - The account's canonical IDFor more information on Amazon S3 access control, see Access Control",
          args: {
            name: "string",
            isVariadic: true,
          },
        },
        {
          name: "--website-redirect",
          description:
            "If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description:
            "Specify an explicit content type for this operation.  This value overrides any guessed mime types",
          args: {
            name: "string",
          },
        },
        {
          name: "--cache-control",
          description:
            "Specifies caching behavior along the request/reply chain",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-disposition",
          description: "Specifies presentational information for the object",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-encoding",
          description:
            "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-language",
          description: "The language the content is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--expires",
          description:
            "The date and time at which the object is no longer cacheable",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-region",
          description:
            "When transferring objects from an s3 bucket to an s3 bucket, this specifies the region of the source bucket. Note the region specified by ``--region`` or through configuration of the CLI refers to the region of the destination bucket.  If ``--source-region`` is not specified the region of the source will be the same as the region of the destination bucket",
          args: {
            name: "string",
            suggestions: awsRegions,
          },
        },
        {
          name: "--only-show-errors",
          description:
            "Only errors and warnings are displayed. All other output is suppressed",
        },
        {
          name: "--no-progress",
          description:
            "File transfer progress is not displayed. This flag is only applied when the quiet and only-show-errors flags are not provided",
        },
        {
          name: "--progress-frequency",
          description:
            "Number of seconds to wait before updating file transfer progress. This flag is only applied when the quiet and only-show-errors flags are not provided",
          args: {
            name: "integer",
          },
        },
        {
          name: "--progress-multiline",
          description: "Show progress on multiple lines",
        },
        {
          name: "--page-size",
          description:
            "The number of results to return in each response to a list operation. The default value is 1000 (the maximum allowed). Using a lower value may help if an operation times out",
          args: {
            name: "integer",
            description: "The default & max is 1000",
          },
        },
        {
          name: "--ignore-glacier-warnings",
          description:
            "Turns off glacier warnings. Warnings about an operation that cannot be performed because it involves copying, downloading, or moving a glacier object will no longer be printed to standard error and will no longer cause the return code of the command to be ``2``",
        },
        {
          name: "--force-glacier-transfer",
          description:
            "Forces a transfer request on all Glacier objects in a sync or recursive copy",
        },
        {
          name: "--request-payer",
          description:
            "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html",
          args: {
            name: "string",
            suggestions: requester,
            isOptional: true,
          },
        },
        {
          name: "--checksum-mode",
          description:
            "To retrieve the checksum, this mode must be enabled. If the object has a checksum, it will be verified",
          args: {
            name: "string",
            suggestions: ["ENABLED"],
          },
        },
        {
          name: "--checksum-algorithm",
          description:
            "Indicates the algorithm used to create the checksum for the object",
          args: {
            name: "string",
            suggestions: [
              "CRC64NVME",
              "CRC32",
              "SHA256",
              "SHA1",
              "CRC32C",
              "SHA512",
              "XXHASH64",
              "XXHASH3",
              "XXHASH128",
            ],
          },
        },
        {
          name: "--metadata",
          description:
            "A map of metadata to store with the objects in S3. This will be applied to every object which is part of this request. In a sync, this means that files which haven't changed won't receive the new metadata",
          args: {
            name: "map",
            description: "KeyName1=string,KeyName2=string",
          },
        },
        {
          name: "--copy-props",
          description:
            "Determines which properties are copied from the source S3 object. This parameter only applies for S3 to S3 copies. Valid values are: ``none`` - Do not copy any of the properties from the source S3 object.``metadata-directive`` - Copies the following properties from the source S3 object: ``content-type``, ``content-language``, ``content-encoding``, ``content-disposition``, ``cache-control``, ``--expires``, and ``metadata````default`` - The default value. Copies tags and properties covered under the ``metadata-directive`` value from the source S3 object.``all`` - Copies annotations in addition to the tags and properties covered under the ``default`` value from the source S3 object.In order to copy the appropriate properties for multipart copies, some of the options may require additional API calls if a multipart copy is involved. Specifically:``metadata-directive`` may require additional ``HeadObject`` API calls.``default`` may require additional ``HeadObject``, ``GetObjectTagging``, and ``PutObjectTagging`` API calls.``all`` may require the additional API calls covered under the ``default`` value, as well as ``ListObjectAnnotations``, ``GetObjectAnnotation``, and ``PutObjectAnnotation`` API calls. Note this list of API calls may grow in the future in order to ensure multipart copies preserve the exact properties a ``CopyObject`` API call would preserve.If you want to guarantee no additional API calls are made other than than the ones needed to perform the actual copy, set this option to ``none``",
          args: {
            name: "string",
            suggestions: ["none", "metadata-directive", "default", "all"],
          },
        },
        {
          name: "--metadata-directive",
          description:
            "Sets the ``x-amz-metadata-directive`` header for CopyObject operations. It is recommended to use the ``--copy-props`` parameter instead to control copying of metadata properties. If ``--metadata-directive`` is set, the ``--copy-props`` parameter will be disabled and will have no affect on the transfer",
          args: {
            name: "string",
            suggestions: metadataDirective,
          },
        },
        {
          name: "--case-conflict",
          description:
            "Configures behavior when attempting to download multiple objects whose keys differ only by case, which can cause undefined behavior on case-insensitive filesystems. This parameter only applies for commands that perform multiple S3 to local downloads. See Handling case conflicts for details. Valid values are: ``error`` - Raise an error and abort downloads.``warn`` - Emit a warning and download the object.``skip`` - Skip downloading the object.``ignore`` - The default value. Ignore the conflict and download the object",
          args: {
            name: "string",
            suggestions: ["ignore", "skip", "warn", "error"],
          },
        },
        {
          name: "--no-overwrite",
          description:
            "This flag prevents overwriting of files at the destination. With this flag, only files not present at the destination will be transferred",
        },
      ],
      args: [
        {
          name: "source",
          generators: [
            generators.listRemoteFilesGenerator,
            generators.listFilesGenerator,
          ],
        },
        {
          name: "destination",
          generators: [
            generators.listRemoteFilesGenerator,
            generators.listFilesGenerator,
          ],
        },
      ],
    },
    {
      name: "mb",
      description: "Creates an S3 bucket",
      options: [
        {
          name: "--tags",
          description:
            "This flag specifies tags to be added to the bucket in the format of ``--tags key value``. You can specify this flag multiple times, once for each tag",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "path",
        generators: generators.listBuckets,
      },
    },
    {
      name: "rb",
      description:
        "Deletes an empty S3 bucket. A bucket must be completely empty of objects and versioned objects before it can be deleted. However, the ``--force`` parameter can be used to delete the non-versioned objects in the bucket before the bucket is deleted",
      options: [
        {
          name: "--force",
          description:
            "Deletes all objects in the bucket including the bucket itself. Note that versioned objects will not be deleted in this process which would cause the bucket deletion to fail because the bucket would not be empty. To delete versioned objects use the ``s3api delete-object`` command with the ``--version-id`` parameter",
        },
      ],
      args: {
        name: "path",
        generators: generators.listBuckets,
      },
    },
    {
      name: "presign",
      description:
        "Generate a pre-signed URL for an Amazon S3 object. This allows anyone who receives the pre-signed URL to retrieve the S3 object with an HTTP GET request. All presigned URL's now use sigv4 so the region needs to be configured explicitly",
      options: [
        {
          name: "--expires-in",
          description:
            "Number of seconds until the pre-signed URL expires.  Default is 3600 seconds. Maximum is 604800 seconds",
          args: {
            name: "integer",
          },
        },
      ],
      args: {
        name: "path",
        generators: generators.listRemoteFilesGenerator,
      },
    },
  ],
};

export default completionSpec;
