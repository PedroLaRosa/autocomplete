const completionSpec: Fig.Spec = {
  name: "guardduty",
  description:
    "Amazon GuardDuty is a continuous security monitoring service that analyzes and processes the following foundational data sources - VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event logs, EKS audit logs, DNS logs, Amazon EBS volume data, runtime activity belonging to container workloads, such as Amazon EKS, Amazon ECS (including Amazon Web Services Fargate), and Amazon EC2 instances. It uses threat intelligence feeds, such as lists of malicious IPs and domains, and machine learning to identify unexpected, potentially unauthorized, and malicious activity within your Amazon Web Services environment. This can include issues like escalations of privileges, uses of exposed credentials, or communication with malicious IPs, domains, or presence of malware on your Amazon EC2 instances and container workloads. For example, GuardDuty can detect compromised EC2 instances and container workloads serving malware, or mining bitcoin.  GuardDuty also monitors Amazon Web Services account access behavior for signs of compromise, such as unauthorized infrastructure deployments like EC2 instances deployed in a Region that has never been used, or unusual API calls like a password policy change to reduce password strength.  GuardDuty informs you about the status of your Amazon Web Services environment by producing security findings that you can view in the GuardDuty console or through Amazon EventBridge. For more information, see the  Amazon GuardDuty User Guide",
  subcommands: [
    {
      name: "accept-administrator-invitation",
      description:
        "Accepts the invitation to be a member account and get monitored by a GuardDuty administrator account that sent the invitation",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account",
          args: {
            name: "string",
          },
        },
        {
          name: "--administrator-id",
          description:
            "The account ID of the GuardDuty administrator account whose invitation you're accepting",
          args: {
            name: "string",
          },
        },
        {
          name: "--invitation-id",
          description:
            "The value that is used to validate the administrator account to the member account",
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
      name: "accept-invitation",
      description:
        "Accepts the invitation to be monitored by a GuardDuty administrator account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--master-id",
          description:
            "The account ID of the GuardDuty administrator account whose invitation you're accepting",
          args: {
            name: "string",
          },
        },
        {
          name: "--invitation-id",
          description:
            "The value that is used to validate the administrator account to the member account",
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
      name: "archive-findings",
      description:
        "Archives GuardDuty findings that are specified by the list of finding IDs.  Only the administrator account can archive findings. Member accounts don't have permission to archive findings from their accounts",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that specifies the GuardDuty service whose findings you want to archive. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-ids",
          description: "The IDs of the findings that you want to archive",
          args: {
            name: "list",
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
      name: "create-custom-detection-rule-association",
      description:
        "Enables a custom detection rule for your account by creating an association. You specify the rule and the mode in which it operates",
      options: [
        {
          name: "--rule-id",
          description: "The unique identifier for the custom detection rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description: "The rule execution mode. Valid values: LIVE | DRY_RUN",
          args: {
            name: "string",
            suggestions: ["LIVE", "DRY_RUN"],
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure that the operation completes no more than one time. Maximum 64 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be added to the new custom detection rule association resource",
          args: {
            name: "map",
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
      name: "create-custom-detection-rule-org-configuration",
      description:
        "Creates an organization-level configuration that enables a custom detection rule across your organization. This operation is available only to the delegated administrator account",
      options: [
        {
          name: "--rule-id",
          description: "The unique identifier for the custom detection rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "The execution mode of the organization configuration. Valid values: LIVE | DRY_RUN",
          args: {
            name: "string",
            suggestions: ["LIVE", "DRY_RUN"],
          },
        },
        {
          name: "--include-account-ids",
          description:
            "The account IDs to include in the organization configuration. Mutually exclusive with ExcludeAccountIds",
          args: {
            name: "list",
          },
        },
        {
          name: "--exclude-account-ids",
          description:
            "The account IDs to exclude from the organization configuration. Mutually exclusive with IncludeAccountIds",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure that the operation completes no more than one time",
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
      name: "create-detector",
      description:
        "Creates a single GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region. All data sources are enabled in a new detector by default.   When you don't specify any features, with an exception to RUNTIME_MONITORING, all the optional features are enabled by default.   When you specify some of the features, any feature that is not specified in the API call gets enabled by default, with an exception to RUNTIME_MONITORING.    Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--enable",
          description:
            "A Boolean value that specifies whether the detector is to be enabled",
        },
        {
          name: "--no-enable",
          description:
            "A Boolean value that specifies whether the detector is to be enabled",
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-publishing-frequency",
          description:
            "A value that specifies how frequently updated findings are exported",
          args: {
            name: "string",
            suggestions: ["FIFTEEN_MINUTES", "ONE_HOUR", "SIX_HOURS"],
          },
        },
        {
          name: "--data-sources",
          description:
            "Describes which data sources will be enabled for the detector. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags to be added to a new detector resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--features",
          description:
            "A list of features that will be configured for the detector",
          args: {
            name: "list",
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
      name: "create-filter",
      description:
        "Creates a filter using the specified finding criteria. The maximum number of saved filters per Amazon Web Services account per Region is 100. For more information, see Quotas for GuardDuty",
      options: [
        {
          name: "--detector-id",
          description:
            "The detector ID associated with the GuardDuty account for which you want to create a filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the filter. Valid characters include period (.), underscore (_), dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses ({ }, [ ], and ( )), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description:
            "Specifies the action that is to be applied to the findings that match the filter. Default: NOOP",
          args: {
            name: "string",
            suggestions: ["NOOP", "ARCHIVE"],
          },
        },
        {
          name: "--rank",
          description:
            "Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings",
          args: {
            name: "integer",
          },
        },
        {
          name: "--finding-criteria",
          description:
            'Represents the criteria to be used in the filter for querying findings. The following fields are available for filtering:   accountId   arn   associatedAttackSequenceArn   confidence   createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   id   partition   region   resource.accessKeyDetails.accessKeyId   resource.accessKeyDetails.principalId   resource.accessKeyDetails.userIdentity.accessKeyId   resource.accessKeyDetails.userIdentity.accountId   resource.accessKeyDetails.userIdentity.arn   resource.accessKeyDetails.userIdentity.principalId   resource.accessKeyDetails.userIdentity.sessionContext.attributes.mfaAuthenticated   resource.accessKeyDetails.userIdentity.sessionContext.ec2RoleDelivery   resource.accessKeyDetails.userIdentity.sessionContext.invokedBy   resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.accountId   resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.arn   resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.principalId   resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.type   resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.userName   resource.accessKeyDetails.userIdentity.sessionContext.sourceIdentity   resource.accessKeyDetails.userIdentity.sessionContext.webIdFederationData.attributes   resource.accessKeyDetails.userIdentity.sessionContext.webIdFederationData.federatedProvider   resource.accessKeyDetails.userIdentity.type   resource.accessKeyDetails.userIdentity.userName   resource.accessKeyDetails.userName   resource.accessKeyDetails.userType   resource.bedrockGuardrailDetails.guardrailArn   resource.bedrockGuardrailDetails.guardrailVersion   resource.containerDetails.containerRuntime   resource.containerDetails.id   resource.containerDetails.image   resource.containerDetails.imagePrefix   resource.containerDetails.name   resource.containerDetails.securityContext.allowPrivilegeEscalation   resource.containerDetails.securityContext.privileged   resource.containerDetails.volumeMounts.mountPath   resource.containerDetails.volumeMounts.name   resource.ebsSnapshotDetails.snapshotArn   resource.ebsVolumeDetails.scannedVolumeDetails.deviceName   resource.ebsVolumeDetails.scannedVolumeDetails.encryptionType   resource.ebsVolumeDetails.scannedVolumeDetails.kmsKeyArn   resource.ebsVolumeDetails.scannedVolumeDetails.snapshotArn   resource.ebsVolumeDetails.scannedVolumeDetails.volumeArn   resource.ebsVolumeDetails.scannedVolumeDetails.volumeSizeInGB   resource.ebsVolumeDetails.scannedVolumeDetails.volumeType   resource.ebsVolumeDetails.skippedVolumeDetails.deviceName   resource.ebsVolumeDetails.skippedVolumeDetails.encryptionType   resource.ebsVolumeDetails.skippedVolumeDetails.kmsKeyArn   resource.ebsVolumeDetails.skippedVolumeDetails.snapshotArn   resource.ebsVolumeDetails.skippedVolumeDetails.volumeArn   resource.ebsVolumeDetails.skippedVolumeDetails.volumeSizeInGB   resource.ebsVolumeDetails.skippedVolumeDetails.volumeType   resource.ec2ImageDetails.imageArn   resource.ecsClusterDetails.activeServicesCount   resource.ecsClusterDetails.arn   resource.ecsClusterDetails.name   resource.ecsClusterDetails.registeredContainerInstancesCount   resource.ecsClusterDetails.runningTasksCount   resource.ecsClusterDetails.status   resource.ecsClusterDetails.tags.key   resource.ecsClusterDetails.tags.value   resource.ecsClusterDetails.taskDetails.arn   resource.ecsClusterDetails.taskDetails.containers.containerRuntime   resource.ecsClusterDetails.taskDetails.containers.id   resource.ecsClusterDetails.taskDetails.containers.image   resource.ecsClusterDetails.taskDetails.containers.imagePrefix   resource.ecsClusterDetails.taskDetails.containers.name   resource.ecsClusterDetails.taskDetails.containers.securityContext.allowPrivilegeEscalation   resource.ecsClusterDetails.taskDetails.containers.securityContext.privileged   resource.ecsClusterDetails.taskDetails.containers.volumeMounts.mountPath   resource.ecsClusterDetails.taskDetails.containers.volumeMounts.name   resource.ecsClusterDetails.taskDetails.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.ecsClusterDetails.taskDetails.definitionArn   resource.ecsClusterDetails.taskDetails.group   resource.ecsClusterDetails.taskDetails.launchType   resource.ecsClusterDetails.taskDetails.startedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.ecsClusterDetails.taskDetails.startedBy   resource.ecsClusterDetails.taskDetails.tags.key   resource.ecsClusterDetails.taskDetails.tags.value   resource.ecsClusterDetails.taskDetails.version   resource.ecsClusterDetails.taskDetails.volumes.hostPath.path   resource.ecsClusterDetails.taskDetails.volumes.name   resource.eksClusterDetails.arn   resource.eksClusterDetails.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.eksClusterDetails.name   resource.eksClusterDetails.status   resource.eksClusterDetails.tags.key   resource.eksClusterDetails.tags.value   resource.eksClusterDetails.vpcId   resource.instanceDetails.availabilityZone   resource.instanceDetails.iamInstanceProfile.arn   resource.instanceDetails.iamInstanceProfile.id   resource.instanceDetails.imageDescription   resource.instanceDetails.imageId   resource.instanceDetails.instanceId   resource.instanceDetails.instanceState   resource.instanceDetails.instanceType   resource.instanceDetails.launchTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.instanceDetails.networkInterfaces.ipv6Addresses   resource.instanceDetails.networkInterfaces.networkInterfaceId   resource.instanceDetails.networkInterfaces.privateDnsName   resource.instanceDetails.networkInterfaces.privateIpAddress   resource.instanceDetails.networkInterfaces.privateIpAddresses.privateDnsName   resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress   resource.instanceDetails.networkInterfaces.publicDnsName   resource.instanceDetails.networkInterfaces.publicIp   resource.instanceDetails.networkInterfaces.securityGroups.groupId   resource.instanceDetails.networkInterfaces.securityGroups.groupName   resource.instanceDetails.networkInterfaces.subnetId   resource.instanceDetails.networkInterfaces.vpcId   resource.instanceDetails.outpostArn   resource.instanceDetails.platform   resource.instanceDetails.productCodes.productCodeId   resource.instanceDetails.productCodes.productCodeType   resource.instanceDetails.tags.key   resource.instanceDetails.tags.value   resource.kubernetesDetails.kubernetesUserDetails.groups   resource.kubernetesDetails.kubernetesUserDetails.impersonatedUser.groups   resource.kubernetesDetails.kubernetesUserDetails.impersonatedUser.username   resource.kubernetesDetails.kubernetesUserDetails.sessionName   resource.kubernetesDetails.kubernetesUserDetails.uid   resource.kubernetesDetails.kubernetesUserDetails.username   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.containerRuntime   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.id   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.image   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.imagePrefix   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.name   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.securityContext.allowPrivilegeEscalation   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.securityContext.privileged   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.volumeMounts.mountPath   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.volumeMounts.name   resource.kubernetesDetails.kubernetesWorkloadDetails.hostIpc   resource.kubernetesDetails.kubernetesWorkloadDetails.hostNetwork   resource.kubernetesDetails.kubernetesWorkloadDetails.hostPid   resource.kubernetesDetails.kubernetesWorkloadDetails.name   resource.kubernetesDetails.kubernetesWorkloadDetails.namespace   resource.kubernetesDetails.kubernetesWorkloadDetails.serviceAccountName   resource.kubernetesDetails.kubernetesWorkloadDetails.type   resource.kubernetesDetails.kubernetesWorkloadDetails.uid   resource.kubernetesDetails.kubernetesWorkloadDetails.volumes.hostPath.path   resource.kubernetesDetails.kubernetesWorkloadDetails.volumes.name   resource.lambdaDetails.description   resource.lambdaDetails.functionArn   resource.lambdaDetails.functionName   resource.lambdaDetails.functionVersion   resource.lambdaDetails.lastModifiedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.lambdaDetails.revisionId   resource.lambdaDetails.role   resource.lambdaDetails.tags.key   resource.lambdaDetails.tags.value   resource.lambdaDetails.vpcConfig.securityGroups.groupId   resource.lambdaDetails.vpcConfig.securityGroups.groupName   resource.lambdaDetails.vpcConfig.subnetIds   resource.lambdaDetails.vpcConfig.vpcId   resource.rdsDbInstanceDetails.dbClusterIdentifier   resource.rdsDbInstanceDetails.dbInstanceArn   resource.rdsDbInstanceDetails.dbInstanceIdentifier   resource.rdsDbInstanceDetails.dbSecurityGroups.name   resource.rdsDbInstanceDetails.dbSecurityGroups.status   resource.rdsDbInstanceDetails.dbiResourceId   resource.rdsDbInstanceDetails.engine   resource.rdsDbInstanceDetails.engineVersion   resource.rdsDbInstanceDetails.iamDatabaseAuthenticationEnabled   resource.rdsDbInstanceDetails.publiclyAccessible   resource.rdsDbInstanceDetails.vpcId   resource.rdsDbInstanceDetails.vpcSecurityGroups.status   resource.rdsDbInstanceDetails.vpcSecurityGroups.vpcSecurityGroupId   resource.rdsDbUserDetails.application   resource.rdsDbUserDetails.authMethod   resource.rdsDbUserDetails.database   resource.rdsDbUserDetails.ssl   resource.rdsDbUserDetails.user   resource.rdsLimitlessDbDetails.dbClusterIdentifier   resource.rdsLimitlessDbDetails.dbShardGroupArn   resource.rdsLimitlessDbDetails.dbShardGroupIdentifier   resource.rdsLimitlessDbDetails.dbShardGroupResourceId   resource.rdsLimitlessDbDetails.engine   resource.rdsLimitlessDbDetails.engineVersion   resource.rdsLimitlessDbDetails.tags.key   resource.rdsLimitlessDbDetails.tags.value   resource.recoveryPointDetails.backupVaultName   resource.recoveryPointDetails.recoveryPointArn   resource.resourceType   resource.s3BucketDetails.arn   resource.s3BucketDetails.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.s3BucketDetails.defaultServerSideEncryption.encryptionType   resource.s3BucketDetails.defaultServerSideEncryption.kmsMasterKeyArn   resource.s3BucketDetails.name   resource.s3BucketDetails.owner.id   resource.s3BucketDetails.publicAccess.effectivePermission   resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.blockPublicAcls   resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.blockPublicPolicy   resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.ignorePublicAcls   resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.restrictPublicBuckets   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.accessControlList.allowsPublicReadAccess   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.accessControlList.allowsPublicWriteAccess   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.blockPublicAcls   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.blockPublicPolicy   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.ignorePublicAcls   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.restrictPublicBuckets   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.bucketPolicy.allowsPublicReadAccess   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.bucketPolicy.allowsPublicWriteAccess   resource.s3BucketDetails.s3ObjectDetails.eTag   resource.s3BucketDetails.s3ObjectDetails.hash   resource.s3BucketDetails.s3ObjectDetails.key   resource.s3BucketDetails.s3ObjectDetails.objectArn   resource.s3BucketDetails.s3ObjectDetails.versionId   resource.s3BucketDetails.tags.key   resource.s3BucketDetails.tags.value   resource.s3BucketDetails.type   schemaVersion   service.action.actionType   service.action.awsApiCallAction.api   service.action.awsApiCallAction.callerType   service.action.awsApiCallAction.domainDetails.domain   service.action.awsApiCallAction.errorCode   service.action.awsApiCallAction.remoteAccountDetails.accountId   service.action.awsApiCallAction.remoteAccountDetails.affiliated   service.action.awsApiCallAction.remoteAccountDetails.awsServiceName   service.action.awsApiCallAction.remoteIpDetails.city.cityName   service.action.awsApiCallAction.remoteIpDetails.country.countryCode   service.action.awsApiCallAction.remoteIpDetails.country.countryName   service.action.awsApiCallAction.remoteIpDetails.geoLocation.lat   service.action.awsApiCallAction.remoteIpDetails.geoLocation.lon   service.action.awsApiCallAction.remoteIpDetails.ipAddressV4   service.action.awsApiCallAction.remoteIpDetails.ipAddressV6   service.action.awsApiCallAction.remoteIpDetails.organization.asn   service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg   service.action.awsApiCallAction.remoteIpDetails.organization.isp   service.action.awsApiCallAction.remoteIpDetails.organization.org   service.action.awsApiCallAction.serviceName   service.action.awsApiCallAction.userAgent   service.action.dnsRequestAction.blocked   service.action.dnsRequestAction.domain   service.action.dnsRequestAction.domainWithSuffix   service.action.dnsRequestAction.protocol   service.action.dnsRequestAction.vpcOwnerAccountId   service.action.kubernetesApiCallAction.namespace   service.action.kubernetesApiCallAction.parameters   service.action.kubernetesApiCallAction.remoteIpDetails.city.cityName   service.action.kubernetesApiCallAction.remoteIpDetails.country.countryCode   service.action.kubernetesApiCallAction.remoteIpDetails.country.countryName   service.action.kubernetesApiCallAction.remoteIpDetails.geoLocation.lat   service.action.kubernetesApiCallAction.remoteIpDetails.geoLocation.lon   service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV4   service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV6   service.action.kubernetesApiCallAction.remoteIpDetails.organization.asn   service.action.kubernetesApiCallAction.remoteIpDetails.organization.asnOrg   service.action.kubernetesApiCallAction.remoteIpDetails.organization.isp   service.action.kubernetesApiCallAction.remoteIpDetails.organization.org   service.action.kubernetesApiCallAction.requestUri   service.action.kubernetesApiCallAction.resource   service.action.kubernetesApiCallAction.resourceName   service.action.kubernetesApiCallAction.sourceIPs   service.action.kubernetesApiCallAction.statusCode   service.action.kubernetesApiCallAction.subresource   service.action.kubernetesApiCallAction.userAgent   service.action.kubernetesApiCallAction.verb   service.action.kubernetesPermissionCheckedDetails.allowed   service.action.kubernetesPermissionCheckedDetails.namespace   service.action.kubernetesPermissionCheckedDetails.resource   service.action.kubernetesPermissionCheckedDetails.verb   service.action.kubernetesRoleBindingDetails.kind   service.action.kubernetesRoleBindingDetails.name   service.action.kubernetesRoleBindingDetails.roleRefKind   service.action.kubernetesRoleBindingDetails.roleRefName   service.action.kubernetesRoleBindingDetails.uid   service.action.kubernetesRoleDetails.kind   service.action.kubernetesRoleDetails.name   service.action.kubernetesRoleDetails.uid   service.action.networkConnectionAction.blocked   service.action.networkConnectionAction.connectionDirection   service.action.networkConnectionAction.localIpDetails.ipAddressV4   service.action.networkConnectionAction.localIpDetails.ipAddressV6   service.action.networkConnectionAction.localNetworkInterface   service.action.networkConnectionAction.localPortDetails.port   service.action.networkConnectionAction.localPortDetails.portName   service.action.networkConnectionAction.protocol   service.action.networkConnectionAction.remoteIpDetails.city.cityName   service.action.networkConnectionAction.remoteIpDetails.country.countryCode   service.action.networkConnectionAction.remoteIpDetails.country.countryName   service.action.networkConnectionAction.remoteIpDetails.geoLocation.lat   service.action.networkConnectionAction.remoteIpDetails.geoLocation.lon   service.action.networkConnectionAction.remoteIpDetails.ipAddressV4   service.action.networkConnectionAction.remoteIpDetails.ipAddressV6   service.action.networkConnectionAction.remoteIpDetails.organization.asn   service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg   service.action.networkConnectionAction.remoteIpDetails.organization.isp   service.action.networkConnectionAction.remoteIpDetails.organization.org   service.action.networkConnectionAction.remotePortDetails.port   service.action.networkConnectionAction.remotePortDetails.portName   service.action.portProbeAction.blocked   service.action.portProbeAction.portProbeDetails.localIpDetails.ipAddressV4   service.action.portProbeAction.portProbeDetails.localIpDetails.ipAddressV6   service.action.portProbeAction.portProbeDetails.localPortDetails.port   service.action.portProbeAction.portProbeDetails.localPortDetails.portName   service.action.portProbeAction.portProbeDetails.remoteIpDetails.city.cityName   service.action.portProbeAction.portProbeDetails.remoteIpDetails.country.countryCode   service.action.portProbeAction.portProbeDetails.remoteIpDetails.country.countryName   service.action.portProbeAction.portProbeDetails.remoteIpDetails.geoLocation.lat   service.action.portProbeAction.portProbeDetails.remoteIpDetails.geoLocation.lon   service.action.portProbeAction.portProbeDetails.remoteIpDetails.ipAddressV4   service.action.portProbeAction.portProbeDetails.remoteIpDetails.ipAddressV6   service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.asn   service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.asnOrg   service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.isp   service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.org   service.action.rdsLoginAttemptAction.loginAttributes.application   service.action.rdsLoginAttemptAction.loginAttributes.failedLoginAttempts   service.action.rdsLoginAttemptAction.loginAttributes.successfulLoginAttempts   service.action.rdsLoginAttemptAction.loginAttributes.user   service.action.rdsLoginAttemptAction.remoteIpDetails.city.cityName   service.action.rdsLoginAttemptAction.remoteIpDetails.country.countryCode   service.action.rdsLoginAttemptAction.remoteIpDetails.country.countryName   service.action.rdsLoginAttemptAction.remoteIpDetails.geoLocation.lat   service.action.rdsLoginAttemptAction.remoteIpDetails.geoLocation.lon   service.action.rdsLoginAttemptAction.remoteIpDetails.ipAddressV4   service.action.rdsLoginAttemptAction.remoteIpDetails.ipAddressV6   service.action.rdsLoginAttemptAction.remoteIpDetails.organization.asn   service.action.rdsLoginAttemptAction.remoteIpDetails.organization.asnOrg   service.action.rdsLoginAttemptAction.remoteIpDetails.organization.isp   service.action.rdsLoginAttemptAction.remoteIpDetails.organization.org   service.additionalInfo.agentDetails.agentId   service.additionalInfo.agentDetails.agentVersion   service.additionalInfo.anomalies.anomalousAPIs   service.additionalInfo.authenticationMethod   service.additionalInfo.averagePacketSizeIn   service.additionalInfo.averagePacketSizeOut   service.additionalInfo.context   service.additionalInfo.domain   service.additionalInfo.inBytes   service.additionalInfo.localNetworkInterfaceOwner   service.additionalInfo.localPort   service.additionalInfo.outBytes   service.additionalInfo.packetsIn   service.additionalInfo.packetsOut   service.additionalInfo.policyArn   service.additionalInfo.policyName   service.additionalInfo.remotePort   service.additionalInfo.sample   service.additionalInfo.scannedPort   service.additionalInfo.threatFileSha256   service.additionalInfo.threatListName   service.additionalInfo.threatName   service.additionalInfo.totalBytesIn   service.additionalInfo.totalBytesOut   service.additionalInfo.type   service.additionalInfo.unusual.asnOrg   service.additionalInfo.unusual.port   service.additionalInfo.unusualProtocol   service.additionalInfo.userAgent.fullUserAgent   service.additionalInfo.userAgent.userAgentCategory   service.additionalInfo.value   service.additionalInfo.vpcOwnerAccountId   service.archived   service.count   service.detection.sequence.actors.id   service.detection.sequence.actors.process.name   service.detection.sequence.actors.process.path   service.detection.sequence.actors.process.sha256   service.detection.sequence.actors.session.createdTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.actors.session.issuer   service.detection.sequence.actors.session.mfaStatus   service.detection.sequence.actors.session.uid   service.detection.sequence.actors.user.account.account   service.detection.sequence.actors.user.account.uid   service.detection.sequence.actors.user.credentialUid   service.detection.sequence.actors.user.name   service.detection.sequence.actors.user.type   service.detection.sequence.actors.user.uid   service.detection.sequence.additionalSequenceTypes   service.detection.sequence.description   service.detection.sequence.endpoints.autonomousSystem.name   service.detection.sequence.endpoints.autonomousSystem.number   service.detection.sequence.endpoints.connection.direction   service.detection.sequence.endpoints.domain   service.detection.sequence.endpoints.id   service.detection.sequence.endpoints.ip   service.detection.sequence.endpoints.location.city   service.detection.sequence.endpoints.location.country   service.detection.sequence.endpoints.location.lat   service.detection.sequence.endpoints.location.lon   service.detection.sequence.endpoints.port   service.detection.sequence.resources.accountId   service.detection.sequence.resources.cloudPartition   service.detection.sequence.resources.data.accessKey.principalId   service.detection.sequence.resources.data.accessKey.userName   service.detection.sequence.resources.data.accessKey.userType   service.detection.sequence.resources.data.autoscalingAutoScalingGroup.ec2InstanceUids   service.detection.sequence.resources.data.cloudformationStack.ec2InstanceUids   service.detection.sequence.resources.data.container.image   service.detection.sequence.resources.data.container.imageUid   service.detection.sequence.resources.data.ec2Image.ec2InstanceUids   service.detection.sequence.resources.data.ec2Instance.availabilityZone   service.detection.sequence.resources.data.ec2Instance.ec2NetworkInterfaceUids   service.detection.sequence.resources.data.ec2Instance.iamInstanceProfile.arn   service.detection.sequence.resources.data.ec2Instance.iamInstanceProfile.id   service.detection.sequence.resources.data.ec2Instance.imageDescription   service.detection.sequence.resources.data.ec2Instance.instanceState   service.detection.sequence.resources.data.ec2Instance.instanceType   service.detection.sequence.resources.data.ec2Instance.outpostArn   service.detection.sequence.resources.data.ec2Instance.platform   service.detection.sequence.resources.data.ec2Instance.productCodes.productCodeId   service.detection.sequence.resources.data.ec2Instance.productCodes.productCodeType   service.detection.sequence.resources.data.ec2LaunchTemplate.ec2InstanceUids   service.detection.sequence.resources.data.ec2LaunchTemplate.version   service.detection.sequence.resources.data.ec2NetworkInterface.ipv6Addresses   service.detection.sequence.resources.data.ec2NetworkInterface.privateIpAddresses.privateDnsName   service.detection.sequence.resources.data.ec2NetworkInterface.privateIpAddresses.privateIpAddress   service.detection.sequence.resources.data.ec2NetworkInterface.publicIp   service.detection.sequence.resources.data.ec2NetworkInterface.securityGroups.groupId   service.detection.sequence.resources.data.ec2NetworkInterface.securityGroups.groupName   service.detection.sequence.resources.data.ec2NetworkInterface.subNetId   service.detection.sequence.resources.data.ec2NetworkInterface.vpcId   service.detection.sequence.resources.data.ec2Vpc.ec2InstanceUids   service.detection.sequence.resources.data.ecsCluster.ec2InstanceUids   service.detection.sequence.resources.data.ecsCluster.status   service.detection.sequence.resources.data.ecsTask.containerUids   service.detection.sequence.resources.data.ecsTask.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.resources.data.ecsTask.launchType   service.detection.sequence.resources.data.ecsTask.taskDefinitionArn   service.detection.sequence.resources.data.eksCluster.arn   service.detection.sequence.resources.data.eksCluster.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.resources.data.eksCluster.ec2InstanceUids   service.detection.sequence.resources.data.eksCluster.status   service.detection.sequence.resources.data.eksCluster.vpcId   service.detection.sequence.resources.data.iamInstanceProfile.ec2InstanceUids   service.detection.sequence.resources.data.iamInstanceProfile.id   service.detection.sequence.resources.data.kubernetesWorkload.containerUids   service.detection.sequence.resources.data.kubernetesWorkload.namespace   service.detection.sequence.resources.data.kubernetesWorkload.type   service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicAclAccess   service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicAclIgnoreBehavior   service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicBucketRestrictBehavior   service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicPolicyAccess   service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicAclAccess   service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicAclIgnoreBehavior   service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicBucketRestrictBehavior   service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicPolicyAccess   service.detection.sequence.resources.data.s3Bucket.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.resources.data.s3Bucket.effectivePermission   service.detection.sequence.resources.data.s3Bucket.encryptionKeyArn   service.detection.sequence.resources.data.s3Bucket.encryptionType   service.detection.sequence.resources.data.s3Bucket.ownerId   service.detection.sequence.resources.data.s3Bucket.publicReadAccess   service.detection.sequence.resources.data.s3Bucket.publicWriteAccess   service.detection.sequence.resources.data.s3Bucket.s3ObjectUids   service.detection.sequence.resources.data.s3Object.eTag   service.detection.sequence.resources.data.s3Object.key   service.detection.sequence.resources.data.s3Object.versionId   service.detection.sequence.resources.name   service.detection.sequence.resources.region   service.detection.sequence.resources.resourceType   service.detection.sequence.resources.service   service.detection.sequence.resources.tags.key   service.detection.sequence.resources.tags.value   service.detection.sequence.resources.uid   service.detection.sequence.sequenceIndicators.key   service.detection.sequence.sequenceIndicators.title   service.detection.sequence.sequenceIndicators.values   service.detection.sequence.signals.actorIds   service.detection.sequence.signals.count   service.detection.sequence.signals.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.signals.description   service.detection.sequence.signals.endpointIds   service.detection.sequence.signals.firstSeenAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.signals.lastSeenAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.signals.name   service.detection.sequence.signals.resourceUids   service.detection.sequence.signals.severity   service.detection.sequence.signals.signalIndicators.key   service.detection.sequence.signals.signalIndicators.title   service.detection.sequence.signals.signalIndicators.values   service.detection.sequence.signals.type   service.detection.sequence.signals.uid   service.detection.sequence.signals.updatedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.uid   service.detectorId   service.ebsVolumeScanDetails.scanCompletedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.count   service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.severity   service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.threatName   service.ebsVolumeScanDetails.scanDetections.scannedItemCount.files   service.ebsVolumeScanDetails.scanDetections.scannedItemCount.totalGb   service.ebsVolumeScanDetails.scanDetections.scannedItemCount.volumes   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.itemCount   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.shortened   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.fileName   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.filePath   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.hash   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.volumeArn   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.itemCount   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.name   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.severity   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.uniqueThreatNameCount   service.ebsVolumeScanDetails.scanDetections.threatsDetectedItemCount.files   service.ebsVolumeScanDetails.scanId   service.ebsVolumeScanDetails.scanStartedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.ebsVolumeScanDetails.scanType   service.ebsVolumeScanDetails.sources   service.ebsVolumeScanDetails.triggerFindingId   service.eventFirstSeen Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.eventLastSeen Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.evidence.threatIntelligenceDetails.threatFileSha256   service.evidence.threatIntelligenceDetails.threatListName   service.evidence.threatIntelligenceDetails.threatNames   service.featureName   service.malwareScanDetails.scanCategory   service.malwareScanDetails.scanConfiguration.incrementalScanDetails.baselineResourceArn   service.malwareScanDetails.scanConfiguration.triggerType   service.malwareScanDetails.scanId   service.malwareScanDetails.scanType   service.malwareScanDetails.threats.count   service.malwareScanDetails.threats.hash   service.malwareScanDetails.threats.itemDetails.additionalInfo.deviceName   service.malwareScanDetails.threats.itemDetails.additionalInfo.versionId   service.malwareScanDetails.threats.itemDetails.hash   service.malwareScanDetails.threats.itemDetails.itemPath   service.malwareScanDetails.threats.itemDetails.resourceArn   service.malwareScanDetails.threats.itemPaths.hash   service.malwareScanDetails.threats.itemPaths.nestedItemPath   service.malwareScanDetails.threats.name   service.malwareScanDetails.threats.source   service.malwareScanDetails.uniqueThreatCount   service.resourceRole   service.runtimeDetails.context.addressFamily   service.runtimeDetails.context.commandLineExample   service.runtimeDetails.context.fileOperation   service.runtimeDetails.context.filePath   service.runtimeDetails.context.fileSystemType   service.runtimeDetails.context.flags   service.runtimeDetails.context.ianaProtocolNumber   service.runtimeDetails.context.ldPreloadValue   service.runtimeDetails.context.libraryPath   service.runtimeDetails.context.memoryRegions   service.runtimeDetails.context.modifiedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.context.modifyingProcess.euid   service.runtimeDetails.context.modifyingProcess.executablePath   service.runtimeDetails.context.modifyingProcess.executableSha256   service.runtimeDetails.context.modifyingProcess.lineage.euid   service.runtimeDetails.context.modifyingProcess.lineage.executablePath   service.runtimeDetails.context.modifyingProcess.lineage.name   service.runtimeDetails.context.modifyingProcess.lineage.namespacePid   service.runtimeDetails.context.modifyingProcess.lineage.parentUuid   service.runtimeDetails.context.modifyingProcess.lineage.pid   service.runtimeDetails.context.modifyingProcess.lineage.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.context.modifyingProcess.lineage.userId   service.runtimeDetails.context.modifyingProcess.lineage.uuid   service.runtimeDetails.context.modifyingProcess.name   service.runtimeDetails.context.modifyingProcess.namespacePid   service.runtimeDetails.context.modifyingProcess.parentUuid   service.runtimeDetails.context.modifyingProcess.pid   service.runtimeDetails.context.modifyingProcess.pwd   service.runtimeDetails.context.modifyingProcess.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.context.modifyingProcess.user   service.runtimeDetails.context.modifyingProcess.userId   service.runtimeDetails.context.modifyingProcess.uuid   service.runtimeDetails.context.moduleFilePath   service.runtimeDetails.context.moduleName   service.runtimeDetails.context.moduleSha256   service.runtimeDetails.context.mountSource   service.runtimeDetails.context.mountTarget   service.runtimeDetails.context.relatedFilePaths   service.runtimeDetails.context.releaseAgentPath   service.runtimeDetails.context.runcBinaryPath   service.runtimeDetails.context.scriptPath   service.runtimeDetails.context.serviceName   service.runtimeDetails.context.shellHistoryFilePath   service.runtimeDetails.context.socketPath   service.runtimeDetails.context.targetProcess.euid   service.runtimeDetails.context.targetProcess.executablePath   service.runtimeDetails.context.targetProcess.executableSha256   service.runtimeDetails.context.targetProcess.lineage.euid   service.runtimeDetails.context.targetProcess.lineage.executablePath   service.runtimeDetails.context.targetProcess.lineage.name   service.runtimeDetails.context.targetProcess.lineage.namespacePid   service.runtimeDetails.context.targetProcess.lineage.parentUuid   service.runtimeDetails.context.targetProcess.lineage.pid   service.runtimeDetails.context.targetProcess.lineage.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.context.targetProcess.lineage.userId   service.runtimeDetails.context.targetProcess.lineage.uuid   service.runtimeDetails.context.targetProcess.name   service.runtimeDetails.context.targetProcess.namespacePid   service.runtimeDetails.context.targetProcess.parentUuid   service.runtimeDetails.context.targetProcess.pid   service.runtimeDetails.context.targetProcess.pwd   service.runtimeDetails.context.targetProcess.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.context.targetProcess.user   service.runtimeDetails.context.targetProcess.userId   service.runtimeDetails.context.targetProcess.uuid   service.runtimeDetails.context.threatFilePath   service.runtimeDetails.context.toolCategory   service.runtimeDetails.context.toolName   service.runtimeDetails.process.euid   service.runtimeDetails.process.executablePath   service.runtimeDetails.process.executableSha256   service.runtimeDetails.process.lineage.euid   service.runtimeDetails.process.lineage.executablePath   service.runtimeDetails.process.lineage.name   service.runtimeDetails.process.lineage.namespacePid   service.runtimeDetails.process.lineage.parentUuid   service.runtimeDetails.process.lineage.pid   service.runtimeDetails.process.lineage.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.process.lineage.userId   service.runtimeDetails.process.lineage.uuid   service.runtimeDetails.process.name   service.runtimeDetails.process.namespacePid   service.runtimeDetails.process.parentUuid   service.runtimeDetails.process.pid   service.runtimeDetails.process.pwd   service.runtimeDetails.process.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.process.user   service.runtimeDetails.process.userId   service.runtimeDetails.process.uuid   service.serviceName   service.userFeedback   severity To configure severity based filters, use the following for the FindingCriteria condition:    Low: ["1", "2", "3"]     Medium: ["4", "5", "6"]     High: ["7", "8"]     Critical: ["9", "10"]    For more information, see Findings severity levels in the Amazon GuardDuty User Guide.   type   updatedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000',
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be added to a new filter resource",
          args: {
            name: "map",
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
      name: "create-ip-set",
      description:
        "Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with Amazon Web Services infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the administrator account can use this operation",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account for which you want to create an IPSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The user-friendly name to identify the IPSet.  Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description: "The format of the file that contains the IPSet",
          args: {
            name: "string",
            suggestions: [
              "TXT",
              "STIX",
              "OTX_CSV",
              "ALIEN_VAULT",
              "PROOF_POINT",
              "FIRE_EYE",
            ],
          },
        },
        {
          name: "--location",
          description: "The URI of the file that contains the IPSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet",
        },
        {
          name: "--no-activate",
          description:
            "A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet",
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be added to a new IP set resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the location parameter",
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
      name: "create-investigation",
      description:
        "This API is currently available as a preview. During the preview, you can initiate up to 10 investigations per account per day, with a total limit of 100 investigations per account. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo). Initiates a GuardDuty investigation that automatically analyzes security findings, correlates related activity, performs account-level analysis, and produces a structured investigation summary with recommended next steps. Only the administrator account can create an investigation. Member accounts don't have permission to create investigations from their accounts. To use this operation, the AI_ANALYST feature must be enabled on your detector. This feature uses Amazon Bedrock models that leverage Cross-Region Inference (CRIS), which automatically selects the optimal Amazon Web Services Region within your geography to process the investigation analysis and generate the investigation report. This maximizes available compute resources, model availability, and delivers the best customer experience. Your data remains stored only in the Region where the investigation request originates, however, investigation data and summary results may be processed outside that Region. All data is transmitted encrypted across Amazon's secure network. For more information, see GuardDuty Investigation",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector for the account in which the investigation is created. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--trigger-prompt",
          description:
            'A natural-language description of what to investigate. For example:    "Investigate finding 1ab2c3d4e5f6a7b8c9d0e1f2a3b4c5d6 in account 123456789012"     "Analyze findings in account with id 123456789012"     "Analyze findings in my organization"',
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
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
      name: "create-malware-protection-plan",
      description:
        "Creates a new Malware Protection plan for the protected resource. When you create a Malware Protection plan, the Amazon Web Services service terms for GuardDuty Malware Protection apply. For more information, see Amazon Web Services service terms for GuardDuty Malware Protection",
      options: [
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "Amazon Resource Name (ARN) of the IAM role that has the permissions to scan and add tags to the associated protected resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--protected-resource",
          description:
            "Information about the protected resource that is associated with the created Malware Protection plan. Presently, S3Bucket is the only supported protected resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--actions",
          description:
            "Information about whether the tags will be added to the S3 object after scanning",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Tags added to the Malware Protection plan resource",
          args: {
            name: "map",
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
      name: "create-members",
      description:
        "Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account IDs. This step is a prerequisite for managing the associated member accounts either by invitation or through an organization. As a delegated administrator, using CreateMembers will enable GuardDuty in the added member accounts, with the exception of the organization delegated administrator account. A delegated administrator must enable GuardDuty prior to being added as a member. When you use CreateMembers as an Organizations delegated administrator, GuardDuty applies your organization's auto-enable settings to the member accounts in this request, irrespective of the accounts being new or existing members. For more information about the existing auto-enable settings for your organization, see DescribeOrganizationConfiguration. If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.  When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account for which you want to associate member accounts. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-details",
          description:
            "A list of account ID and email address pairs of the accounts that you want to associate with the GuardDuty administrator account",
          args: {
            name: "list",
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
      name: "create-publishing-destination",
      description:
        "Creates a publishing destination where you can export your GuardDuty findings. Before you start exporting the findings, the destination resource must exist",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the GuardDuty detector associated with the publishing destination. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-type",
          description:
            "The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported",
          args: {
            name: "string",
            suggestions: ["S3"],
          },
        },
        {
          name: "--destination-properties",
          description:
            "The properties of the publishing destination, including the ARNs for the destination and the KMS key used for encryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description: "The idempotency token for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be added to a new publishing destination resource",
          args: {
            name: "map",
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
      name: "create-sample-findings",
      description:
        "Generates sample findings of types specified by the list of finding types. If 'NULL' is specified for findingTypes, the API generates sample findings of all supported finding types",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector for which you need to create sample findings. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-types",
          description: "The types of sample findings to generate",
          args: {
            name: "list",
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
      name: "create-threat-entity-set",
      description:
        "Creates a new threat entity set. In a threat entity set, you can provide known malicious threat entities for your Amazon Web Services environment. GuardDuty generates findings based on the entries in the threat entity sets. Only users of the administrator account can manage entity sets, which automatically apply to member accounts",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account for which you want to create a threat entity set. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A user-friendly name to identify the threat entity set. The name of your list can include lowercase letters, uppercase letters, numbers, dash (-), and underscore (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description:
            "The format of the file that contains the threat entity set",
          args: {
            name: "string",
            suggestions: [
              "TXT",
              "STIX",
              "OTX_CSV",
              "ALIEN_VAULT",
              "PROOF_POINT",
              "FIRE_EYE",
            ],
          },
        },
        {
          name: "--location",
          description:
            "The URI of the file that contains the threat entity set. The format of the Location URL must be a valid Amazon S3 URL format. Invalid URL formats will result in an error, regardless of whether you activate the entity set or not. For more information about format of the location URLs, see Format of location URL under Step 2: Adding trusted or threat intelligence data in the Amazon GuardDuty User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the location parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "A boolean value that indicates whether GuardDuty should start using the uploaded threat entity set to generate findings",
        },
        {
          name: "--no-activate",
          description:
            "A boolean value that indicates whether GuardDuty should start using the uploaded threat entity set to generate findings",
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be added to a new threat entity set resource",
          args: {
            name: "map",
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
      name: "create-threat-intel-set",
      description:
        "Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator account can use this operation",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account for which you want to create a threatIntelSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description:
            "The format of the file that contains the ThreatIntelSet",
          args: {
            name: "string",
            suggestions: [
              "TXT",
              "STIX",
              "OTX_CSV",
              "ALIEN_VAULT",
              "PROOF_POINT",
              "FIRE_EYE",
            ],
          },
        },
        {
          name: "--location",
          description: "The URI of the file that contains the ThreatIntelSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet",
        },
        {
          name: "--no-activate",
          description:
            "A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet",
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be added to a new threat list resource",
          args: {
            name: "map",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the location parameter",
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
      name: "create-trusted-entity-set",
      description:
        "Creates a new trusted entity set. In the trusted entity set, you can provide IP addresses and domains that you believe are secure for communication in your Amazon Web Services environment. GuardDuty will not generate findings for the entries that are specified in a trusted entity set. At any given time, you can have only one trusted entity set.  Only users of the administrator account can manage the entity sets, which automatically apply to member accounts",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account for which you want to create a trusted entity set. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A user-friendly name to identify the trusted entity set. The name of your list can include lowercase letters, uppercase letters, numbers, dash (-), and underscore (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description:
            "The format of the file that contains the trusted entity set",
          args: {
            name: "string",
            suggestions: [
              "TXT",
              "STIX",
              "OTX_CSV",
              "ALIEN_VAULT",
              "PROOF_POINT",
              "FIRE_EYE",
            ],
          },
        },
        {
          name: "--location",
          description:
            "The URI of the file that contains the threat entity set. The format of the Location URL must be a valid Amazon S3 URL format. Invalid URL formats will result in an error, regardless of whether you activate the entity set or not. For more information about format of the location URLs, see Format of location URL under Step 2: Adding trusted or threat intelligence data in the Amazon GuardDuty User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the location parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "A boolean value that indicates whether GuardDuty is to start using the uploaded trusted entity set",
        },
        {
          name: "--no-activate",
          description:
            "A boolean value that indicates whether GuardDuty is to start using the uploaded trusted entity set",
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be added to a new trusted entity set resource",
          args: {
            name: "map",
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
      name: "decline-invitations",
      description:
        "Declines invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs",
      options: [
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to decline invitations from",
          args: {
            name: "list",
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
      name: "delete-custom-detection-rule-association",
      description:
        "Disables a custom detection rule by deleting its association. This operation is idempotent",
      options: [
        {
          name: "--rule-id",
          description: "The unique identifier for the custom detection rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-id",
          description: "The unique identifier for the association to delete",
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
      name: "delete-custom-detection-rule-org-configuration",
      description:
        "Deletes the organization-level configuration for a custom detection rule. This operation is available only to the delegated administrator account",
      options: [
        {
          name: "--rule-id",
          description: "The unique identifier for the custom detection rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "The execution mode of the organization configuration to delete. Valid values: LIVE | DRY_RUN",
          args: {
            name: "string",
            suggestions: ["LIVE", "DRY_RUN"],
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
      name: "delete-detector",
      description:
        "Deletes an Amazon GuardDuty detector that is specified by the detector ID",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that you want to delete. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
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
      name: "delete-filter",
      description: "Deletes the filter specified by the filter name",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description: "The name of the filter that you want to delete",
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
      name: "delete-ip-set",
      description:
        "Deletes the IPSet specified by the ipSetId. IPSets are called trusted IP lists in the console user interface",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the IPSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-set-id",
          description: "The unique ID of the IPSet to delete",
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
      name: "delete-invitations",
      description:
        "Deletes invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs",
      options: [
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to delete invitations from",
          args: {
            name: "list",
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
      name: "delete-malware-protection-plan",
      description:
        "Deletes the Malware Protection plan ID associated with the Malware Protection plan resource. Use this API only when you no longer want to protect the resource associated with this Malware Protection plan ID",
      options: [
        {
          name: "--malware-protection-plan-id",
          description:
            "A unique identifier associated with Malware Protection plan resource",
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
      name: "delete-members",
      description:
        "Deletes GuardDuty member accounts (to the current GuardDuty administrator account) specified by the account IDs. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disable GuardDuty for a member account in your organization",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account whose members you want to delete. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the GuardDuty member accounts that you want to delete",
          args: {
            name: "list",
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
      name: "delete-publishing-destination",
      description:
        "Deletes the publishing definition with the specified destinationId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the publishing destination to delete. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-id",
          description: "The ID of the publishing destination to delete",
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
      name: "delete-threat-entity-set",
      description:
        "Deletes the threat entity set that is associated with the specified threatEntitySetId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the threat entity set resource. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--threat-entity-set-id",
          description:
            "The unique ID that helps GuardDuty identify which threat entity set needs to be deleted",
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
      name: "delete-threat-intel-set",
      description:
        "Deletes the ThreatIntelSet specified by the ThreatIntelSet ID",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the threatIntelSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--threat-intel-set-id",
          description:
            "The unique ID of the threatIntelSet that you want to delete",
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
      name: "delete-trusted-entity-set",
      description:
        "Deletes the trusted entity set that is associated with the specified trustedEntitySetId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the trusted entity set resource. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--trusted-entity-set-id",
          description:
            "The unique ID that helps GuardDuty identify which trusted entity set needs to be deleted",
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
      name: "describe-malware-scans",
      description:
        "Returns a list of malware scans. Each member account can view the malware scans for their own accounts. An administrator can view the malware scans for all the member accounts. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that the request is associated with. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter-criteria",
          description:
            "Represents the criteria to be used in the filter for describing scan entries",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-criteria",
          description:
            "Represents the criteria used for sorting scan entries. The  attributeName  is required and it must be scanStartTime",
          args: {
            name: "structure",
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
      name: "describe-organization-configuration",
      description:
        "Returns information about the account selected as the delegated administrator for GuardDuty. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The detector ID of the delegated administrator for which you need to retrieve the information. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
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
      name: "describe-publishing-destination",
      description:
        "Returns information about the publishing destination specified by the provided destinationId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the publishing destination to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-id",
          description: "The ID of the publishing destination to retrieve",
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
      name: "disable-organization-admin-account",
      description:
        "Removes the existing GuardDuty delegated administrator of the organization. Only the organization's management account can run this API operation",
      options: [
        {
          name: "--admin-account-id",
          description:
            "The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated administrator",
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
      name: "disassociate-from-administrator-account",
      description:
        "Disassociates the current GuardDuty member account from its administrator account. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.  With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disable GuardDuty in a member account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account",
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
      name: "disassociate-from-master-account",
      description:
        "Disassociates the current GuardDuty member account from its administrator account. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account",
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
      name: "disassociate-members",
      description:
        "Disassociates GuardDuty member accounts (from the current administrator account) specified by the account IDs. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.  With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disassociate a member account before removing them from your organization. If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.  When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account whose members you want to disassociate from the administrator account",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the GuardDuty member accounts that you want to disassociate from the administrator account",
          args: {
            name: "list",
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
      name: "enable-organization-admin-account",
      description:
        "Designates an Amazon Web Services account within the organization as your GuardDuty delegated administrator. Only the organization's management account can run this API operation",
      options: [
        {
          name: "--admin-account-id",
          description:
            "The Amazon Web Services account ID for the organization account to be enabled as a GuardDuty delegated administrator",
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
      name: "get-administrator-account",
      description:
        "Provides the details of the GuardDuty administrator account associated with the current GuardDuty member account. Based on the type of account that runs this API, the following list shows how the API behavior varies:   When the GuardDuty administrator account runs this API, it will return success (HTTP 200) but no content.   When a member account runs this API, it will return the details of the GuardDuty administrator account that is associated with this calling member account.   When an individual account (not associated with an organization) runs this API, it will return success (HTTP 200) but no content",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account",
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
      name: "get-coverage-statistics",
      description:
        "Retrieves aggregated statistics for your account. If you are a GuardDuty administrator, you can retrieve the statistics for all the resources associated with the active member accounts in your organization who have enabled Runtime Monitoring and have the GuardDuty security agent running on their resources",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-criteria",
          description:
            "Represents the criteria used to filter the coverage statistics",
          args: {
            name: "structure",
          },
        },
        {
          name: "--statistics-type",
          description:
            "Represents the statistics type used to aggregate the coverage details",
          args: {
            name: "list",
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
      name: "get-custom-detection-rule",
      description:
        "Returns details for a custom detection rule in GuardDuty, including its detection logic",
      options: [
        {
          name: "--rule-id",
          description: "The unique identifier for the custom detection rule",
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
      name: "get-custom-detection-rule-association",
      description: "Returns details for a custom detection rule association",
      options: [
        {
          name: "--rule-id",
          description: "The unique identifier for the custom detection rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-id",
          description: "The unique identifier for the association",
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
      name: "get-custom-detection-rule-org-configuration",
      description:
        "Returns the organization-level configuration for a custom detection rule",
      options: [
        {
          name: "--rule-id",
          description: "The unique identifier for the custom detection rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "The execution mode of the organization configuration to retrieve. Valid values: LIVE | DRY_RUN",
          args: {
            name: "string",
            suggestions: ["LIVE", "DRY_RUN"],
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
      name: "get-detector",
      description:
        "Retrieves a GuardDuty detector specified by the detectorId. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that you want to get. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
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
      name: "get-filter",
      description:
        "Returns the details of the filter specified by the filter name",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with this filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description: "The name of the filter you want to get",
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
      name: "get-findings",
      description:
        "Describes Amazon GuardDuty findings specified by finding IDs",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-ids",
          description: "The IDs of the findings that you want to retrieve",
          args: {
            name: "list",
          },
        },
        {
          name: "--sort-criteria",
          description: "Represents the criteria used for sorting findings",
          args: {
            name: "structure",
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
      name: "get-findings-statistics",
      description:
        "Lists GuardDuty findings statistics for the specified detector ID. You must provide either findingStatisticTypes or groupBy parameter, and not both. You can use the maxResults and orderBy parameters only when using groupBy. There might be regional differences because some flags might not be available in all the Regions where GuardDuty is currently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector whose findings statistics you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-statistic-types",
          description: "The types of finding statistics to retrieve",
          args: {
            name: "list",
          },
        },
        {
          name: "--finding-criteria",
          description:
            "Represents the criteria that is used for querying findings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description:
            "Displays the findings statistics grouped by one of the listed valid values",
          args: {
            name: "string",
            suggestions: [
              "ACCOUNT",
              "DATE",
              "FINDING_TYPE",
              "RESOURCE",
              "SEVERITY",
            ],
          },
        },
        {
          name: "--order-by",
          description:
            "Displays the sorted findings in the requested order. The default value of orderBy is DESC. You can use this parameter only with the groupBy parameter",
          args: {
            name: "string",
            suggestions: ["ASC", "DESC"],
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned in the response. The default value is 25. You can use this parameter only with the groupBy parameter",
          args: {
            name: "integer",
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
      name: "get-ip-set",
      description: "Retrieves the IPSet specified by the ipSetId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the IPSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-set-id",
          description: "The unique ID of the IPSet to retrieve",
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
      name: "get-investigation",
      description:
        "This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo). Retrieves the results and status of a specific GuardDuty investigation. GuardDuty returns the results, including the summary and the scope of the investigation, only when the investigation status is COMPLETED. By default, GuardDuty returns the summary as text in Summary. To return a typed summary in SummaryData instead, set SummaryFormat to STRUCTURED. An administrator account can retrieve any investigation within the organization. Member accounts can only retrieve investigations that belong to them",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector associated with the investigation. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--investigation-id",
          description: "The unique identifier of the investigation to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--summary-format",
          description:
            "The format in which to return the investigation summary. Possible values:    STRING – (Default) Returns the summary as text in Summary.    STRUCTURED – Returns a typed summary in SummaryData.   GuardDuty returns a summary only when the investigation status is COMPLETED",
          args: {
            name: "string",
            suggestions: ["STRING", "STRUCTURED"],
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
      name: "get-invitations-count",
      description:
        "Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation",
      options: [
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
      name: "get-malware-protection-plan",
      description:
        "Retrieves the Malware Protection plan details associated with a Malware Protection plan ID",
      options: [
        {
          name: "--malware-protection-plan-id",
          description:
            "A unique identifier associated with Malware Protection plan resource",
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
      name: "get-malware-scan",
      description:
        "Retrieves the detailed information for a specific malware scan. Each member account can view the malware scan details for their own account. An administrator can view malware scan details for all accounts in the organization. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--scan-id",
          description:
            "A unique identifier that gets generated when you invoke the API without any error. Each malware scan has a corresponding scan ID. Using this scan ID, you can monitor the status of your malware scan",
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
      name: "get-malware-scan-settings",
      description:
        "Returns the details of the malware scan settings. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with this scan. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
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
      name: "get-master-account",
      description:
        "Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
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
      name: "get-member-detectors",
      description:
        "Describes which data sources are enabled for the member account's detector. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The detector ID for the administrator account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description: "A list of member account IDs",
          args: {
            name: "list",
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
      name: "get-members",
      description:
        "Retrieves GuardDuty member accounts (of the current GuardDuty administrator account) specified by the account IDs",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account whose members you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the GuardDuty member accounts that you want to describe",
          args: {
            name: "list",
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
      name: "get-organization-statistics",
      description:
        "Retrieves how many active member accounts have each feature enabled within GuardDuty. Only a delegated GuardDuty administrator of an organization can run this API. When you create a new organization, it might take up to 24 hours to generate the statistics for the entire organization",
      options: [
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
      name: "get-remaining-free-trial-days",
      description:
        "Provides the number of days left for each data source used in the free trial period",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty member account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account identifiers of the GuardDuty member account",
          args: {
            name: "list",
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
      name: "get-threat-entity-set",
      description:
        "Retrieves the threat entity set associated with the specified threatEntitySetId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the threat entity set resource. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--threat-entity-set-id",
          description:
            "The unique ID that helps GuardDuty identify the threat entity set",
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
      name: "get-threat-intel-set",
      description:
        "Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the threatIntelSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--threat-intel-set-id",
          description:
            "The unique ID of the threatIntelSet that you want to get",
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
      name: "get-trusted-entity-set",
      description:
        "Retrieves the trusted entity set associated with the specified trustedEntitySetId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector associated with this trusted entity set",
          args: {
            name: "string",
          },
        },
        {
          name: "--trusted-entity-set-id",
          description:
            "The unique ID that helps GuardDuty identify the trusted entity set",
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
      name: "get-usage-statistics",
      description:
        "Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector ID. For newly enabled detectors or data sources, the cost returned will include only the usage so far under 30 days. This may differ from the cost metrics in the console, which project usage over 30 days to provide a monthly cost estimate. For more information, see Understanding How Usage Costs are Calculated",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that specifies the GuardDuty service whose usage statistics you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--usage-statistic-type",
          description: "The type of usage statistics to retrieve",
          args: {
            name: "string",
            suggestions: [
              "SUM_BY_ACCOUNT",
              "SUM_BY_DATA_SOURCE",
              "SUM_BY_RESOURCE",
              "TOP_RESOURCES",
              "SUM_BY_FEATURES",
              "TOP_ACCOUNTS_BY_FEATURE",
            ],
          },
        },
        {
          name: "--usage-criteria",
          description: "Represents the criteria used for querying usage",
          args: {
            name: "structure",
          },
        },
        {
          name: "--unit",
          description:
            "The currency unit you would like to view your usage statistics in. Current valid values are USD",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page",
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
      name: "invite-members",
      description:
        "Invites Amazon Web Services accounts to become members of an organization administered by the Amazon Web Services account that invokes this API. If you are using Amazon Web Services Organizations to manage your GuardDuty environment, this step is not needed. For more information, see Managing accounts with organizations. To invite Amazon Web Services accounts, the first step is to ensure that GuardDuty has been enabled in the potential member accounts. You can now invoke this API to add accounts by invitation. The invited accounts can either accept or decline the invitation from their GuardDuty accounts. Each invited Amazon Web Services account can choose to accept the invitation from only one Amazon Web Services account. For more information, see Managing GuardDuty accounts by invitation. After the invite has been accepted and you choose to disassociate a member account (by using DisassociateMembers) from your account, the details of the member account obtained by invoking CreateMembers, including the associated email addresses, will be retained. This is done so that you can invoke InviteMembers without the need to invoke CreateMembers again. To remove the details associated with a member account, you must also invoke DeleteMembers.  If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.  When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty account with which you want to invite members. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the accounts that you want to invite to GuardDuty as members",
          args: {
            name: "list",
          },
        },
        {
          name: "--disable-email-notification",
          description:
            "A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members",
        },
        {
          name: "--no-disable-email-notification",
          description:
            "A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members",
        },
        {
          name: "--message",
          description:
            "The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members",
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
      name: "list-coverage",
      description:
        "Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can retrieve all resources associated with the active member accounts in your organization. Make sure the accounts have Runtime Monitoring enabled and GuardDuty agent running on their resources",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector whose coverage details you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter-criteria",
          description:
            "Represents the criteria used to filter the coverage details",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-criteria",
          description:
            "Represents the criteria used to sort the coverage details",
          args: {
            name: "structure",
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
      name: "list-custom-detection-rule-associations",
      description:
        "Returns all custom detection rule associations for your account. You can filter by rule ID and mode",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single page. Minimum value of 1, maximum value of 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token from a previous response. Use this token to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-id",
          description:
            "The unique identifier for the custom detection rule to filter associations by",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description: "The rule execution mode to filter associations by",
          args: {
            name: "string",
            suggestions: ["LIVE", "DRY_RUN"],
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
      name: "list-custom-detection-rule-org-configurations",
      description:
        "Returns all organization-level configurations for custom detection rules. You can filter the results by status",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single page. Minimum value of 1, maximum value of 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token from a previous response. Use this token to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The configuration status to filter by",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "PROCESSING", "FAILED"],
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
      name: "list-custom-detection-rules",
      description:
        "Returns all available custom detection rules in GuardDuty. You can filter the results by data source, severity, tactic, technique, and service",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single page. Minimum value of 1, maximum value of 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token from a previous response. Use this token to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A list of filter criteria to apply when listing custom detection rules",
          args: {
            name: "list",
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
      name: "list-detectors",
      description:
        "Lists detectorIds of all the existing Amazon GuardDuty detector resources",
      options: [
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
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
      name: "list-filters",
      description: "Returns a paginated list of the current filters",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
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
      name: "list-findings",
      description:
        "Lists GuardDuty findings for the specified detector ID. There might be regional differences because some flags might not be available in all the Regions where GuardDuty is currently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that specifies the GuardDuty service whose findings you want to list. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-criteria",
          description:
            "Represents the criteria used for querying findings. Valid values include:   JSON field name   accountId   region   confidence   id   resource.accessKeyDetails.accessKeyId   resource.accessKeyDetails.principalId   resource.accessKeyDetails.userName   resource.accessKeyDetails.userType   resource.instanceDetails.iamInstanceProfile.id   resource.instanceDetails.imageId   resource.instanceDetails.instanceId   resource.instanceDetails.networkInterfaces.ipv6Addresses   resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress   resource.instanceDetails.networkInterfaces.publicDnsName   resource.instanceDetails.networkInterfaces.publicIp   resource.instanceDetails.networkInterfaces.securityGroups.groupId   resource.instanceDetails.networkInterfaces.securityGroups.groupName   resource.instanceDetails.networkInterfaces.subnetId   resource.instanceDetails.networkInterfaces.vpcId   resource.instanceDetails.tags.key   resource.instanceDetails.tags.value   resource.resourceType   service.action.actionType   service.action.awsApiCallAction.api   service.action.awsApiCallAction.callerType   service.action.awsApiCallAction.remoteIpDetails.city.cityName   service.action.awsApiCallAction.remoteIpDetails.country.countryName   service.action.awsApiCallAction.remoteIpDetails.ipAddressV4   service.action.awsApiCallAction.remoteIpDetails.organization.asn   service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg   service.action.awsApiCallAction.serviceName   service.action.dnsRequestAction.domain   service.action.dnsRequestAction.domainWithSuffix   service.action.networkConnectionAction.blocked   service.action.networkConnectionAction.connectionDirection   service.action.networkConnectionAction.localPortDetails.port   service.action.networkConnectionAction.protocol   service.action.networkConnectionAction.remoteIpDetails.country.countryName   service.action.networkConnectionAction.remoteIpDetails.ipAddressV4   service.action.networkConnectionAction.remoteIpDetails.organization.asn   service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg   service.action.networkConnectionAction.remotePortDetails.port   service.additionalInfo.threatListName   service.archived When this attribute is set to 'true', only archived findings are listed. When it's set to 'false', only unarchived findings are listed. When this attribute is not set, all existing findings are listed.   service.ebsVolumeScanDetails.scanId   service.resourceRole   severity   type   updatedAt Type: Timestamp in Unix Epoch millisecond format: 1486685375000",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-criteria",
          description: "Represents the criteria used for sorting findings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
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
      name: "list-ip-sets",
      description:
        "Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated administrator account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with IPSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
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
      name: "list-investigation-records",
      description:
        "This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo). Returns the records for a specific GuardDuty investigation. Each record is one step in the reasoning that GuardDuty followed to reach the results of the investigation. An administrator account can list the records of any investigation within the organization. Member accounts can only list the records of investigations that belong to them",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector associated with the investigation. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--investigation-id",
          description:
            "The unique identifier of the investigation whose records you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--record-types",
          description:
            "The types of records to return. Possible values are UPDATE, FETCH, OBSERVATION, ANALYSIS, and METADATA. If you don't specify this parameter, GuardDuty returns records of all types",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of records to return in a single response. Valid values are 1 to 50. The default value is 20. A response can contain fewer records than this value, or no records, and still include a NextToken",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. Use the same InvestigationId and RecordTypes values that you used in the previous request. If you specify this parameter for an investigation whose status isn't COMPLETED, the operation returns a BadRequestException. A NextToken expires 24 hours after it's returned",
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
      name: "list-investigations",
      description:
        "This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo). Returns a list of investigations associated with the specified GuardDuty detector. You can filter the investigations by status, risk level, confidence, finding ID, and investigation type, and sort them by start time, end time, status, risk level, or confidence. An administrator account sees all investigations across the organization. Member accounts see only the investigations that belong to them",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector whose investigations you want to list. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-criteria",
          description:
            "The criteria used to filter investigations. GuardDuty returns only the investigations that match all of the specified criteria",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-criteria",
          description:
            "Represents the criteria used for sorting investigations",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
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
      name: "list-invitations",
      description:
        "Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
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
      name: "list-malware-protection-plans",
      description:
        "Lists the Malware Protection plan IDs associated with the protected resources in your Amazon Web Services account",
      options: [
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. The default page size is 100 plans",
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
      name: "list-malware-scans",
      description:
        "Returns a list of malware scans. Each member account can view the malware scans for their own accounts. An administrator can view the malware scans for all of its members' accounts",
      options: [
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing results",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-criteria",
          description:
            "Represents the criteria used to filter the malware scan entries",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-criteria",
          description:
            "Represents the criteria used for sorting malware scan entries",
          args: {
            name: "structure",
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
      name: "list-members",
      description:
        "Lists details about all member accounts for the current GuardDuty administrator account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the member. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
          args: {
            name: "string",
          },
        },
        {
          name: "--only-associated",
          description:
            "Specifies whether to only return associated members or to return all members (including members who haven't been invited yet or have been disassociated). Member accounts must have been previously associated with the GuardDuty administrator account using  Create Members",
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
      name: "list-organization-admin-accounts",
      description:
        "Lists the accounts designated as GuardDuty delegated administrators. Only the organization's management account can run this API operation",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page",
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
      name: "list-publishing-destinations",
      description:
        "Returns a list of publishing destinations associated with the specified detectorId",
      options: [
        {
          name: "--detector-id",
          description:
            "The detector ID for which you want to retrieve the publishing destination. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page",
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
      name: "list-tags-for-resource",
      description:
        "Lists tags for a resource. Tagging is currently supported for detectors, finding filters, IP sets, threat intel sets, and publishing destination, with a limit of 50 tags per resource. When invoked, this operation returns all assigned tags for a given resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the given GuardDuty resource",
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
      name: "list-threat-entity-sets",
      description:
        "Lists the threat entity sets associated with the specified GuardDuty detector ID. If you use this operation from a member account, the threat entity sets that are returned as a response, belong to the administrator account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector that is associated with this threat entity set. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
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
      name: "list-threat-intel-sets",
      description:
        "Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the ThreatIntelSets associated with the administrator account are returned",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that is associated with the threatIntelSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter to paginate results in the response. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
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
      name: "list-trusted-entity-sets",
      description:
        "Lists the trusted entity sets associated with the specified GuardDuty detector ID. If you use this operation from a member account, the trusted entity sets that are returned as a response, belong to the administrator account",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector that is associated with this threat entity set. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data",
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
      name: "send-object-malware-scan",
      description:
        "Initiates a malware scan for a specific S3 object. This API allows you to perform on-demand malware scanning of individual objects in S3 buckets that have Malware Protection for S3 enabled. When you use this API, the Amazon Web Services service terms for GuardDuty Malware Protection apply. For more information, see Amazon Web Services service terms for GuardDuty Malware Protection",
      options: [
        {
          name: "--s3-object",
          description:
            "The S3 object information for the object you want to scan. The bucket must have a Malware Protection plan configured to use this API",
          args: {
            name: "structure",
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
      name: "start-malware-scan",
      description:
        "Initiates the malware scan. Invoking this API will automatically create the Service-linked role in the corresponding account if the resourceArn belongs to an EC2 instance. When the malware scan starts, you can use the associated scan ID to track the status of the scan. For more information, see ListMalwareScans and GetMalwareScan. When you use this API, the Amazon Web Services service terms for GuardDuty Malware Protection apply. For more information, see Amazon Web Services service terms for GuardDuty Malware Protection",
      options: [
        {
          name: "--resource-arn",
          description:
            "Amazon Resource Name (ARN) of the resource for which you invoked the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "The idempotency token for the create request",
          args: {
            name: "string",
          },
        },
        {
          name: "--scan-configuration",
          description:
            "Contains information about the configuration to be used for the malware scan",
          args: {
            name: "structure",
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
      name: "start-monitoring-members",
      description:
        "Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the StopMonitoringMembers operation",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector of the GuardDuty administrator account associated with the member accounts to monitor. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs of the GuardDuty member accounts to start monitoring",
          args: {
            name: "list",
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
      name: "stop-monitoring-members",
      description:
        "Stops GuardDuty monitoring for the specified member accounts. Use the StartMonitoringMembers operation to restart monitoring for those accounts. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to stop monitoring the member accounts in your organization",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector associated with the GuardDuty administrator account that is monitoring member accounts. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "A list of account IDs for the member accounts to stop monitoring",
          args: {
            name: "list",
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
      description: "Adds tags to a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be added to a resource",
          args: {
            name: "map",
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
      name: "unarchive-findings",
      description: "Unarchives GuardDuty findings specified by the findingIds",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector associated with the findings to unarchive. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-ids",
          description: "The IDs of the findings to unarchive",
          args: {
            name: "list",
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
      description: "Removes tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) for the resource to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys to remove from the resource",
          args: {
            name: "list",
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
      name: "update-custom-detection-rule-association",
      description:
        "Updates the mode of an existing custom detection rule association",
      options: [
        {
          name: "--rule-id",
          description: "The unique identifier for the custom detection rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-id",
          description: "The unique identifier for the association to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description: "The rule execution mode. Valid values: LIVE | DRY_RUN",
          args: {
            name: "string",
            suggestions: ["LIVE", "DRY_RUN"],
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
      name: "update-custom-detection-rule-org-configuration",
      description:
        "Updates the organization-level configuration for a custom detection rule, including the mode and include/exclude account lists",
      options: [
        {
          name: "--rule-id",
          description: "The unique identifier for the custom detection rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "The execution mode of the organization configuration. Valid values: LIVE | DRY_RUN",
          args: {
            name: "string",
            suggestions: ["LIVE", "DRY_RUN"],
          },
        },
        {
          name: "--include-account-ids",
          description:
            "The account IDs to include in the organization configuration. Mutually exclusive with ExcludeAccountIds",
          args: {
            name: "list",
          },
        },
        {
          name: "--exclude-account-ids",
          description:
            "The account IDs to exclude from the organization configuration. Mutually exclusive with IncludeAccountIds",
          args: {
            name: "list",
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
      name: "update-detector",
      description:
        "Updates the GuardDuty detector specified by the detector ID. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector to update. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable",
          description:
            "Specifies whether the detector is enabled or not enabled",
        },
        {
          name: "--no-enable",
          description:
            "Specifies whether the detector is enabled or not enabled",
        },
        {
          name: "--finding-publishing-frequency",
          description:
            "An enum value that specifies how frequently findings are exported, such as to CloudWatch Events",
          args: {
            name: "string",
            suggestions: ["FIFTEEN_MINUTES", "ONE_HOUR", "SIX_HOURS"],
          },
        },
        {
          name: "--data-sources",
          description:
            "Describes which data sources will be updated. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
          args: {
            name: "structure",
          },
        },
        {
          name: "--features",
          description:
            "Provides the features that will be updated for the detector",
          args: {
            name: "list",
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
      name: "update-filter",
      description: "Updates the filter specified by the filter name",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that specifies the GuardDuty service where you want to update a filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description: "The name of the filter",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses ({ }, [ ], and ( )), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description:
            "Specifies the action that is to be applied to the findings that match the filter. Default: NOOP",
          args: {
            name: "string",
            suggestions: ["NOOP", "ARCHIVE"],
          },
        },
        {
          name: "--rank",
          description:
            "Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings",
          args: {
            name: "integer",
          },
        },
        {
          name: "--finding-criteria",
          description:
            'Represents the criteria to be used in the filter for querying findings. The following fields are available for filtering:   accountId   arn   associatedAttackSequenceArn   confidence   createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   id   partition   region   resource.accessKeyDetails.accessKeyId   resource.accessKeyDetails.principalId   resource.accessKeyDetails.userIdentity.accessKeyId   resource.accessKeyDetails.userIdentity.accountId   resource.accessKeyDetails.userIdentity.arn   resource.accessKeyDetails.userIdentity.principalId   resource.accessKeyDetails.userIdentity.sessionContext.attributes.mfaAuthenticated   resource.accessKeyDetails.userIdentity.sessionContext.ec2RoleDelivery   resource.accessKeyDetails.userIdentity.sessionContext.invokedBy   resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.accountId   resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.arn   resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.principalId   resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.type   resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.userName   resource.accessKeyDetails.userIdentity.sessionContext.sourceIdentity   resource.accessKeyDetails.userIdentity.sessionContext.webIdFederationData.attributes   resource.accessKeyDetails.userIdentity.sessionContext.webIdFederationData.federatedProvider   resource.accessKeyDetails.userIdentity.type   resource.accessKeyDetails.userIdentity.userName   resource.accessKeyDetails.userName   resource.accessKeyDetails.userType   resource.bedrockGuardrailDetails.guardrailArn   resource.bedrockGuardrailDetails.guardrailVersion   resource.containerDetails.containerRuntime   resource.containerDetails.id   resource.containerDetails.image   resource.containerDetails.imagePrefix   resource.containerDetails.name   resource.containerDetails.securityContext.allowPrivilegeEscalation   resource.containerDetails.securityContext.privileged   resource.containerDetails.volumeMounts.mountPath   resource.containerDetails.volumeMounts.name   resource.ebsSnapshotDetails.snapshotArn   resource.ebsVolumeDetails.scannedVolumeDetails.deviceName   resource.ebsVolumeDetails.scannedVolumeDetails.encryptionType   resource.ebsVolumeDetails.scannedVolumeDetails.kmsKeyArn   resource.ebsVolumeDetails.scannedVolumeDetails.snapshotArn   resource.ebsVolumeDetails.scannedVolumeDetails.volumeArn   resource.ebsVolumeDetails.scannedVolumeDetails.volumeSizeInGB   resource.ebsVolumeDetails.scannedVolumeDetails.volumeType   resource.ebsVolumeDetails.skippedVolumeDetails.deviceName   resource.ebsVolumeDetails.skippedVolumeDetails.encryptionType   resource.ebsVolumeDetails.skippedVolumeDetails.kmsKeyArn   resource.ebsVolumeDetails.skippedVolumeDetails.snapshotArn   resource.ebsVolumeDetails.skippedVolumeDetails.volumeArn   resource.ebsVolumeDetails.skippedVolumeDetails.volumeSizeInGB   resource.ebsVolumeDetails.skippedVolumeDetails.volumeType   resource.ec2ImageDetails.imageArn   resource.ecsClusterDetails.activeServicesCount   resource.ecsClusterDetails.arn   resource.ecsClusterDetails.name   resource.ecsClusterDetails.registeredContainerInstancesCount   resource.ecsClusterDetails.runningTasksCount   resource.ecsClusterDetails.status   resource.ecsClusterDetails.tags.key   resource.ecsClusterDetails.tags.value   resource.ecsClusterDetails.taskDetails.arn   resource.ecsClusterDetails.taskDetails.containers.containerRuntime   resource.ecsClusterDetails.taskDetails.containers.id   resource.ecsClusterDetails.taskDetails.containers.image   resource.ecsClusterDetails.taskDetails.containers.imagePrefix   resource.ecsClusterDetails.taskDetails.containers.name   resource.ecsClusterDetails.taskDetails.containers.securityContext.allowPrivilegeEscalation   resource.ecsClusterDetails.taskDetails.containers.securityContext.privileged   resource.ecsClusterDetails.taskDetails.containers.volumeMounts.mountPath   resource.ecsClusterDetails.taskDetails.containers.volumeMounts.name   resource.ecsClusterDetails.taskDetails.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.ecsClusterDetails.taskDetails.definitionArn   resource.ecsClusterDetails.taskDetails.group   resource.ecsClusterDetails.taskDetails.launchType   resource.ecsClusterDetails.taskDetails.startedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.ecsClusterDetails.taskDetails.startedBy   resource.ecsClusterDetails.taskDetails.tags.key   resource.ecsClusterDetails.taskDetails.tags.value   resource.ecsClusterDetails.taskDetails.version   resource.ecsClusterDetails.taskDetails.volumes.hostPath.path   resource.ecsClusterDetails.taskDetails.volumes.name   resource.eksClusterDetails.arn   resource.eksClusterDetails.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.eksClusterDetails.name   resource.eksClusterDetails.status   resource.eksClusterDetails.tags.key   resource.eksClusterDetails.tags.value   resource.eksClusterDetails.vpcId   resource.instanceDetails.availabilityZone   resource.instanceDetails.iamInstanceProfile.arn   resource.instanceDetails.iamInstanceProfile.id   resource.instanceDetails.imageDescription   resource.instanceDetails.imageId   resource.instanceDetails.instanceId   resource.instanceDetails.instanceState   resource.instanceDetails.instanceType   resource.instanceDetails.launchTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.instanceDetails.networkInterfaces.ipv6Addresses   resource.instanceDetails.networkInterfaces.networkInterfaceId   resource.instanceDetails.networkInterfaces.privateDnsName   resource.instanceDetails.networkInterfaces.privateIpAddress   resource.instanceDetails.networkInterfaces.privateIpAddresses.privateDnsName   resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress   resource.instanceDetails.networkInterfaces.publicDnsName   resource.instanceDetails.networkInterfaces.publicIp   resource.instanceDetails.networkInterfaces.securityGroups.groupId   resource.instanceDetails.networkInterfaces.securityGroups.groupName   resource.instanceDetails.networkInterfaces.subnetId   resource.instanceDetails.networkInterfaces.vpcId   resource.instanceDetails.outpostArn   resource.instanceDetails.platform   resource.instanceDetails.productCodes.productCodeId   resource.instanceDetails.productCodes.productCodeType   resource.instanceDetails.tags.key   resource.instanceDetails.tags.value   resource.kubernetesDetails.kubernetesUserDetails.groups   resource.kubernetesDetails.kubernetesUserDetails.impersonatedUser.groups   resource.kubernetesDetails.kubernetesUserDetails.impersonatedUser.username   resource.kubernetesDetails.kubernetesUserDetails.sessionName   resource.kubernetesDetails.kubernetesUserDetails.uid   resource.kubernetesDetails.kubernetesUserDetails.username   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.containerRuntime   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.id   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.image   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.imagePrefix   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.name   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.securityContext.allowPrivilegeEscalation   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.securityContext.privileged   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.volumeMounts.mountPath   resource.kubernetesDetails.kubernetesWorkloadDetails.containers.volumeMounts.name   resource.kubernetesDetails.kubernetesWorkloadDetails.hostIpc   resource.kubernetesDetails.kubernetesWorkloadDetails.hostNetwork   resource.kubernetesDetails.kubernetesWorkloadDetails.hostPid   resource.kubernetesDetails.kubernetesWorkloadDetails.name   resource.kubernetesDetails.kubernetesWorkloadDetails.namespace   resource.kubernetesDetails.kubernetesWorkloadDetails.serviceAccountName   resource.kubernetesDetails.kubernetesWorkloadDetails.type   resource.kubernetesDetails.kubernetesWorkloadDetails.uid   resource.kubernetesDetails.kubernetesWorkloadDetails.volumes.hostPath.path   resource.kubernetesDetails.kubernetesWorkloadDetails.volumes.name   resource.lambdaDetails.description   resource.lambdaDetails.functionArn   resource.lambdaDetails.functionName   resource.lambdaDetails.functionVersion   resource.lambdaDetails.lastModifiedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.lambdaDetails.revisionId   resource.lambdaDetails.role   resource.lambdaDetails.tags.key   resource.lambdaDetails.tags.value   resource.lambdaDetails.vpcConfig.securityGroups.groupId   resource.lambdaDetails.vpcConfig.securityGroups.groupName   resource.lambdaDetails.vpcConfig.subnetIds   resource.lambdaDetails.vpcConfig.vpcId   resource.rdsDbInstanceDetails.dbClusterIdentifier   resource.rdsDbInstanceDetails.dbInstanceArn   resource.rdsDbInstanceDetails.dbInstanceIdentifier   resource.rdsDbInstanceDetails.dbSecurityGroups.name   resource.rdsDbInstanceDetails.dbSecurityGroups.status   resource.rdsDbInstanceDetails.dbiResourceId   resource.rdsDbInstanceDetails.engine   resource.rdsDbInstanceDetails.engineVersion   resource.rdsDbInstanceDetails.iamDatabaseAuthenticationEnabled   resource.rdsDbInstanceDetails.publiclyAccessible   resource.rdsDbInstanceDetails.vpcId   resource.rdsDbInstanceDetails.vpcSecurityGroups.status   resource.rdsDbInstanceDetails.vpcSecurityGroups.vpcSecurityGroupId   resource.rdsDbUserDetails.application   resource.rdsDbUserDetails.authMethod   resource.rdsDbUserDetails.database   resource.rdsDbUserDetails.ssl   resource.rdsDbUserDetails.user   resource.rdsLimitlessDbDetails.dbClusterIdentifier   resource.rdsLimitlessDbDetails.dbShardGroupArn   resource.rdsLimitlessDbDetails.dbShardGroupIdentifier   resource.rdsLimitlessDbDetails.dbShardGroupResourceId   resource.rdsLimitlessDbDetails.engine   resource.rdsLimitlessDbDetails.engineVersion   resource.rdsLimitlessDbDetails.tags.key   resource.rdsLimitlessDbDetails.tags.value   resource.recoveryPointDetails.backupVaultName   resource.recoveryPointDetails.recoveryPointArn   resource.resourceType   resource.s3BucketDetails.arn   resource.s3BucketDetails.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   resource.s3BucketDetails.defaultServerSideEncryption.encryptionType   resource.s3BucketDetails.defaultServerSideEncryption.kmsMasterKeyArn   resource.s3BucketDetails.name   resource.s3BucketDetails.owner.id   resource.s3BucketDetails.publicAccess.effectivePermission   resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.blockPublicAcls   resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.blockPublicPolicy   resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.ignorePublicAcls   resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.restrictPublicBuckets   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.accessControlList.allowsPublicReadAccess   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.accessControlList.allowsPublicWriteAccess   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.blockPublicAcls   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.blockPublicPolicy   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.ignorePublicAcls   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.restrictPublicBuckets   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.bucketPolicy.allowsPublicReadAccess   resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.bucketPolicy.allowsPublicWriteAccess   resource.s3BucketDetails.s3ObjectDetails.eTag   resource.s3BucketDetails.s3ObjectDetails.hash   resource.s3BucketDetails.s3ObjectDetails.key   resource.s3BucketDetails.s3ObjectDetails.objectArn   resource.s3BucketDetails.s3ObjectDetails.versionId   resource.s3BucketDetails.tags.key   resource.s3BucketDetails.tags.value   resource.s3BucketDetails.type   schemaVersion   service.action.actionType   service.action.awsApiCallAction.api   service.action.awsApiCallAction.callerType   service.action.awsApiCallAction.domainDetails.domain   service.action.awsApiCallAction.errorCode   service.action.awsApiCallAction.remoteAccountDetails.accountId   service.action.awsApiCallAction.remoteAccountDetails.affiliated   service.action.awsApiCallAction.remoteAccountDetails.awsServiceName   service.action.awsApiCallAction.remoteIpDetails.city.cityName   service.action.awsApiCallAction.remoteIpDetails.country.countryCode   service.action.awsApiCallAction.remoteIpDetails.country.countryName   service.action.awsApiCallAction.remoteIpDetails.geoLocation.lat   service.action.awsApiCallAction.remoteIpDetails.geoLocation.lon   service.action.awsApiCallAction.remoteIpDetails.ipAddressV4   service.action.awsApiCallAction.remoteIpDetails.ipAddressV6   service.action.awsApiCallAction.remoteIpDetails.organization.asn   service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg   service.action.awsApiCallAction.remoteIpDetails.organization.isp   service.action.awsApiCallAction.remoteIpDetails.organization.org   service.action.awsApiCallAction.serviceName   service.action.awsApiCallAction.userAgent   service.action.dnsRequestAction.blocked   service.action.dnsRequestAction.domain   service.action.dnsRequestAction.domainWithSuffix   service.action.dnsRequestAction.protocol   service.action.dnsRequestAction.vpcOwnerAccountId   service.action.kubernetesApiCallAction.namespace   service.action.kubernetesApiCallAction.parameters   service.action.kubernetesApiCallAction.remoteIpDetails.city.cityName   service.action.kubernetesApiCallAction.remoteIpDetails.country.countryCode   service.action.kubernetesApiCallAction.remoteIpDetails.country.countryName   service.action.kubernetesApiCallAction.remoteIpDetails.geoLocation.lat   service.action.kubernetesApiCallAction.remoteIpDetails.geoLocation.lon   service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV4   service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV6   service.action.kubernetesApiCallAction.remoteIpDetails.organization.asn   service.action.kubernetesApiCallAction.remoteIpDetails.organization.asnOrg   service.action.kubernetesApiCallAction.remoteIpDetails.organization.isp   service.action.kubernetesApiCallAction.remoteIpDetails.organization.org   service.action.kubernetesApiCallAction.requestUri   service.action.kubernetesApiCallAction.resource   service.action.kubernetesApiCallAction.resourceName   service.action.kubernetesApiCallAction.sourceIPs   service.action.kubernetesApiCallAction.statusCode   service.action.kubernetesApiCallAction.subresource   service.action.kubernetesApiCallAction.userAgent   service.action.kubernetesApiCallAction.verb   service.action.kubernetesPermissionCheckedDetails.allowed   service.action.kubernetesPermissionCheckedDetails.namespace   service.action.kubernetesPermissionCheckedDetails.resource   service.action.kubernetesPermissionCheckedDetails.verb   service.action.kubernetesRoleBindingDetails.kind   service.action.kubernetesRoleBindingDetails.name   service.action.kubernetesRoleBindingDetails.roleRefKind   service.action.kubernetesRoleBindingDetails.roleRefName   service.action.kubernetesRoleBindingDetails.uid   service.action.kubernetesRoleDetails.kind   service.action.kubernetesRoleDetails.name   service.action.kubernetesRoleDetails.uid   service.action.networkConnectionAction.blocked   service.action.networkConnectionAction.connectionDirection   service.action.networkConnectionAction.localIpDetails.ipAddressV4   service.action.networkConnectionAction.localIpDetails.ipAddressV6   service.action.networkConnectionAction.localNetworkInterface   service.action.networkConnectionAction.localPortDetails.port   service.action.networkConnectionAction.localPortDetails.portName   service.action.networkConnectionAction.protocol   service.action.networkConnectionAction.remoteIpDetails.city.cityName   service.action.networkConnectionAction.remoteIpDetails.country.countryCode   service.action.networkConnectionAction.remoteIpDetails.country.countryName   service.action.networkConnectionAction.remoteIpDetails.geoLocation.lat   service.action.networkConnectionAction.remoteIpDetails.geoLocation.lon   service.action.networkConnectionAction.remoteIpDetails.ipAddressV4   service.action.networkConnectionAction.remoteIpDetails.ipAddressV6   service.action.networkConnectionAction.remoteIpDetails.organization.asn   service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg   service.action.networkConnectionAction.remoteIpDetails.organization.isp   service.action.networkConnectionAction.remoteIpDetails.organization.org   service.action.networkConnectionAction.remotePortDetails.port   service.action.networkConnectionAction.remotePortDetails.portName   service.action.portProbeAction.blocked   service.action.portProbeAction.portProbeDetails.localIpDetails.ipAddressV4   service.action.portProbeAction.portProbeDetails.localIpDetails.ipAddressV6   service.action.portProbeAction.portProbeDetails.localPortDetails.port   service.action.portProbeAction.portProbeDetails.localPortDetails.portName   service.action.portProbeAction.portProbeDetails.remoteIpDetails.city.cityName   service.action.portProbeAction.portProbeDetails.remoteIpDetails.country.countryCode   service.action.portProbeAction.portProbeDetails.remoteIpDetails.country.countryName   service.action.portProbeAction.portProbeDetails.remoteIpDetails.geoLocation.lat   service.action.portProbeAction.portProbeDetails.remoteIpDetails.geoLocation.lon   service.action.portProbeAction.portProbeDetails.remoteIpDetails.ipAddressV4   service.action.portProbeAction.portProbeDetails.remoteIpDetails.ipAddressV6   service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.asn   service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.asnOrg   service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.isp   service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.org   service.action.rdsLoginAttemptAction.loginAttributes.application   service.action.rdsLoginAttemptAction.loginAttributes.failedLoginAttempts   service.action.rdsLoginAttemptAction.loginAttributes.successfulLoginAttempts   service.action.rdsLoginAttemptAction.loginAttributes.user   service.action.rdsLoginAttemptAction.remoteIpDetails.city.cityName   service.action.rdsLoginAttemptAction.remoteIpDetails.country.countryCode   service.action.rdsLoginAttemptAction.remoteIpDetails.country.countryName   service.action.rdsLoginAttemptAction.remoteIpDetails.geoLocation.lat   service.action.rdsLoginAttemptAction.remoteIpDetails.geoLocation.lon   service.action.rdsLoginAttemptAction.remoteIpDetails.ipAddressV4   service.action.rdsLoginAttemptAction.remoteIpDetails.ipAddressV6   service.action.rdsLoginAttemptAction.remoteIpDetails.organization.asn   service.action.rdsLoginAttemptAction.remoteIpDetails.organization.asnOrg   service.action.rdsLoginAttemptAction.remoteIpDetails.organization.isp   service.action.rdsLoginAttemptAction.remoteIpDetails.organization.org   service.additionalInfo.agentDetails.agentId   service.additionalInfo.agentDetails.agentVersion   service.additionalInfo.anomalies.anomalousAPIs   service.additionalInfo.authenticationMethod   service.additionalInfo.averagePacketSizeIn   service.additionalInfo.averagePacketSizeOut   service.additionalInfo.context   service.additionalInfo.domain   service.additionalInfo.inBytes   service.additionalInfo.localNetworkInterfaceOwner   service.additionalInfo.localPort   service.additionalInfo.outBytes   service.additionalInfo.packetsIn   service.additionalInfo.packetsOut   service.additionalInfo.policyArn   service.additionalInfo.policyName   service.additionalInfo.remotePort   service.additionalInfo.sample   service.additionalInfo.scannedPort   service.additionalInfo.threatFileSha256   service.additionalInfo.threatListName   service.additionalInfo.threatName   service.additionalInfo.totalBytesIn   service.additionalInfo.totalBytesOut   service.additionalInfo.type   service.additionalInfo.unusual.asnOrg   service.additionalInfo.unusual.port   service.additionalInfo.unusualProtocol   service.additionalInfo.userAgent.fullUserAgent   service.additionalInfo.userAgent.userAgentCategory   service.additionalInfo.value   service.additionalInfo.vpcOwnerAccountId   service.archived   service.count   service.detection.sequence.actors.id   service.detection.sequence.actors.process.name   service.detection.sequence.actors.process.path   service.detection.sequence.actors.process.sha256   service.detection.sequence.actors.session.createdTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.actors.session.issuer   service.detection.sequence.actors.session.mfaStatus   service.detection.sequence.actors.session.uid   service.detection.sequence.actors.user.account.account   service.detection.sequence.actors.user.account.uid   service.detection.sequence.actors.user.credentialUid   service.detection.sequence.actors.user.name   service.detection.sequence.actors.user.type   service.detection.sequence.actors.user.uid   service.detection.sequence.additionalSequenceTypes   service.detection.sequence.description   service.detection.sequence.endpoints.autonomousSystem.name   service.detection.sequence.endpoints.autonomousSystem.number   service.detection.sequence.endpoints.connection.direction   service.detection.sequence.endpoints.domain   service.detection.sequence.endpoints.id   service.detection.sequence.endpoints.ip   service.detection.sequence.endpoints.location.city   service.detection.sequence.endpoints.location.country   service.detection.sequence.endpoints.location.lat   service.detection.sequence.endpoints.location.lon   service.detection.sequence.endpoints.port   service.detection.sequence.resources.accountId   service.detection.sequence.resources.cloudPartition   service.detection.sequence.resources.data.accessKey.principalId   service.detection.sequence.resources.data.accessKey.userName   service.detection.sequence.resources.data.accessKey.userType   service.detection.sequence.resources.data.autoscalingAutoScalingGroup.ec2InstanceUids   service.detection.sequence.resources.data.cloudformationStack.ec2InstanceUids   service.detection.sequence.resources.data.container.image   service.detection.sequence.resources.data.container.imageUid   service.detection.sequence.resources.data.ec2Image.ec2InstanceUids   service.detection.sequence.resources.data.ec2Instance.availabilityZone   service.detection.sequence.resources.data.ec2Instance.ec2NetworkInterfaceUids   service.detection.sequence.resources.data.ec2Instance.iamInstanceProfile.arn   service.detection.sequence.resources.data.ec2Instance.iamInstanceProfile.id   service.detection.sequence.resources.data.ec2Instance.imageDescription   service.detection.sequence.resources.data.ec2Instance.instanceState   service.detection.sequence.resources.data.ec2Instance.instanceType   service.detection.sequence.resources.data.ec2Instance.outpostArn   service.detection.sequence.resources.data.ec2Instance.platform   service.detection.sequence.resources.data.ec2Instance.productCodes.productCodeId   service.detection.sequence.resources.data.ec2Instance.productCodes.productCodeType   service.detection.sequence.resources.data.ec2LaunchTemplate.ec2InstanceUids   service.detection.sequence.resources.data.ec2LaunchTemplate.version   service.detection.sequence.resources.data.ec2NetworkInterface.ipv6Addresses   service.detection.sequence.resources.data.ec2NetworkInterface.privateIpAddresses.privateDnsName   service.detection.sequence.resources.data.ec2NetworkInterface.privateIpAddresses.privateIpAddress   service.detection.sequence.resources.data.ec2NetworkInterface.publicIp   service.detection.sequence.resources.data.ec2NetworkInterface.securityGroups.groupId   service.detection.sequence.resources.data.ec2NetworkInterface.securityGroups.groupName   service.detection.sequence.resources.data.ec2NetworkInterface.subNetId   service.detection.sequence.resources.data.ec2NetworkInterface.vpcId   service.detection.sequence.resources.data.ec2Vpc.ec2InstanceUids   service.detection.sequence.resources.data.ecsCluster.ec2InstanceUids   service.detection.sequence.resources.data.ecsCluster.status   service.detection.sequence.resources.data.ecsTask.containerUids   service.detection.sequence.resources.data.ecsTask.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.resources.data.ecsTask.launchType   service.detection.sequence.resources.data.ecsTask.taskDefinitionArn   service.detection.sequence.resources.data.eksCluster.arn   service.detection.sequence.resources.data.eksCluster.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.resources.data.eksCluster.ec2InstanceUids   service.detection.sequence.resources.data.eksCluster.status   service.detection.sequence.resources.data.eksCluster.vpcId   service.detection.sequence.resources.data.iamInstanceProfile.ec2InstanceUids   service.detection.sequence.resources.data.iamInstanceProfile.id   service.detection.sequence.resources.data.kubernetesWorkload.containerUids   service.detection.sequence.resources.data.kubernetesWorkload.namespace   service.detection.sequence.resources.data.kubernetesWorkload.type   service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicAclAccess   service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicAclIgnoreBehavior   service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicBucketRestrictBehavior   service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicPolicyAccess   service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicAclAccess   service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicAclIgnoreBehavior   service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicBucketRestrictBehavior   service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicPolicyAccess   service.detection.sequence.resources.data.s3Bucket.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.resources.data.s3Bucket.effectivePermission   service.detection.sequence.resources.data.s3Bucket.encryptionKeyArn   service.detection.sequence.resources.data.s3Bucket.encryptionType   service.detection.sequence.resources.data.s3Bucket.ownerId   service.detection.sequence.resources.data.s3Bucket.publicReadAccess   service.detection.sequence.resources.data.s3Bucket.publicWriteAccess   service.detection.sequence.resources.data.s3Bucket.s3ObjectUids   service.detection.sequence.resources.data.s3Object.eTag   service.detection.sequence.resources.data.s3Object.key   service.detection.sequence.resources.data.s3Object.versionId   service.detection.sequence.resources.name   service.detection.sequence.resources.region   service.detection.sequence.resources.resourceType   service.detection.sequence.resources.service   service.detection.sequence.resources.tags.key   service.detection.sequence.resources.tags.value   service.detection.sequence.resources.uid   service.detection.sequence.sequenceIndicators.key   service.detection.sequence.sequenceIndicators.title   service.detection.sequence.sequenceIndicators.values   service.detection.sequence.signals.actorIds   service.detection.sequence.signals.count   service.detection.sequence.signals.createdAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.signals.description   service.detection.sequence.signals.endpointIds   service.detection.sequence.signals.firstSeenAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.signals.lastSeenAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.signals.name   service.detection.sequence.signals.resourceUids   service.detection.sequence.signals.severity   service.detection.sequence.signals.signalIndicators.key   service.detection.sequence.signals.signalIndicators.title   service.detection.sequence.signals.signalIndicators.values   service.detection.sequence.signals.type   service.detection.sequence.signals.uid   service.detection.sequence.signals.updatedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.detection.sequence.uid   service.detectorId   service.ebsVolumeScanDetails.scanCompletedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.count   service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.severity   service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.threatName   service.ebsVolumeScanDetails.scanDetections.scannedItemCount.files   service.ebsVolumeScanDetails.scanDetections.scannedItemCount.totalGb   service.ebsVolumeScanDetails.scanDetections.scannedItemCount.volumes   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.itemCount   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.shortened   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.fileName   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.filePath   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.hash   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.volumeArn   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.itemCount   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.name   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.severity   service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.uniqueThreatNameCount   service.ebsVolumeScanDetails.scanDetections.threatsDetectedItemCount.files   service.ebsVolumeScanDetails.scanId   service.ebsVolumeScanDetails.scanStartedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.ebsVolumeScanDetails.scanType   service.ebsVolumeScanDetails.sources   service.ebsVolumeScanDetails.triggerFindingId   service.eventFirstSeen Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.eventLastSeen Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.evidence.threatIntelligenceDetails.threatFileSha256   service.evidence.threatIntelligenceDetails.threatListName   service.evidence.threatIntelligenceDetails.threatNames   service.featureName   service.malwareScanDetails.scanCategory   service.malwareScanDetails.scanConfiguration.incrementalScanDetails.baselineResourceArn   service.malwareScanDetails.scanConfiguration.triggerType   service.malwareScanDetails.scanId   service.malwareScanDetails.scanType   service.malwareScanDetails.threats.count   service.malwareScanDetails.threats.hash   service.malwareScanDetails.threats.itemDetails.additionalInfo.deviceName   service.malwareScanDetails.threats.itemDetails.additionalInfo.versionId   service.malwareScanDetails.threats.itemDetails.hash   service.malwareScanDetails.threats.itemDetails.itemPath   service.malwareScanDetails.threats.itemDetails.resourceArn   service.malwareScanDetails.threats.itemPaths.hash   service.malwareScanDetails.threats.itemPaths.nestedItemPath   service.malwareScanDetails.threats.name   service.malwareScanDetails.threats.source   service.malwareScanDetails.uniqueThreatCount   service.resourceRole   service.runtimeDetails.context.addressFamily   service.runtimeDetails.context.commandLineExample   service.runtimeDetails.context.fileOperation   service.runtimeDetails.context.filePath   service.runtimeDetails.context.fileSystemType   service.runtimeDetails.context.flags   service.runtimeDetails.context.ianaProtocolNumber   service.runtimeDetails.context.ldPreloadValue   service.runtimeDetails.context.libraryPath   service.runtimeDetails.context.memoryRegions   service.runtimeDetails.context.modifiedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.context.modifyingProcess.euid   service.runtimeDetails.context.modifyingProcess.executablePath   service.runtimeDetails.context.modifyingProcess.executableSha256   service.runtimeDetails.context.modifyingProcess.lineage.euid   service.runtimeDetails.context.modifyingProcess.lineage.executablePath   service.runtimeDetails.context.modifyingProcess.lineage.name   service.runtimeDetails.context.modifyingProcess.lineage.namespacePid   service.runtimeDetails.context.modifyingProcess.lineage.parentUuid   service.runtimeDetails.context.modifyingProcess.lineage.pid   service.runtimeDetails.context.modifyingProcess.lineage.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.context.modifyingProcess.lineage.userId   service.runtimeDetails.context.modifyingProcess.lineage.uuid   service.runtimeDetails.context.modifyingProcess.name   service.runtimeDetails.context.modifyingProcess.namespacePid   service.runtimeDetails.context.modifyingProcess.parentUuid   service.runtimeDetails.context.modifyingProcess.pid   service.runtimeDetails.context.modifyingProcess.pwd   service.runtimeDetails.context.modifyingProcess.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.context.modifyingProcess.user   service.runtimeDetails.context.modifyingProcess.userId   service.runtimeDetails.context.modifyingProcess.uuid   service.runtimeDetails.context.moduleFilePath   service.runtimeDetails.context.moduleName   service.runtimeDetails.context.moduleSha256   service.runtimeDetails.context.mountSource   service.runtimeDetails.context.mountTarget   service.runtimeDetails.context.relatedFilePaths   service.runtimeDetails.context.releaseAgentPath   service.runtimeDetails.context.runcBinaryPath   service.runtimeDetails.context.scriptPath   service.runtimeDetails.context.serviceName   service.runtimeDetails.context.shellHistoryFilePath   service.runtimeDetails.context.socketPath   service.runtimeDetails.context.targetProcess.euid   service.runtimeDetails.context.targetProcess.executablePath   service.runtimeDetails.context.targetProcess.executableSha256   service.runtimeDetails.context.targetProcess.lineage.euid   service.runtimeDetails.context.targetProcess.lineage.executablePath   service.runtimeDetails.context.targetProcess.lineage.name   service.runtimeDetails.context.targetProcess.lineage.namespacePid   service.runtimeDetails.context.targetProcess.lineage.parentUuid   service.runtimeDetails.context.targetProcess.lineage.pid   service.runtimeDetails.context.targetProcess.lineage.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.context.targetProcess.lineage.userId   service.runtimeDetails.context.targetProcess.lineage.uuid   service.runtimeDetails.context.targetProcess.name   service.runtimeDetails.context.targetProcess.namespacePid   service.runtimeDetails.context.targetProcess.parentUuid   service.runtimeDetails.context.targetProcess.pid   service.runtimeDetails.context.targetProcess.pwd   service.runtimeDetails.context.targetProcess.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.context.targetProcess.user   service.runtimeDetails.context.targetProcess.userId   service.runtimeDetails.context.targetProcess.uuid   service.runtimeDetails.context.threatFilePath   service.runtimeDetails.context.toolCategory   service.runtimeDetails.context.toolName   service.runtimeDetails.process.euid   service.runtimeDetails.process.executablePath   service.runtimeDetails.process.executableSha256   service.runtimeDetails.process.lineage.euid   service.runtimeDetails.process.lineage.executablePath   service.runtimeDetails.process.lineage.name   service.runtimeDetails.process.lineage.namespacePid   service.runtimeDetails.process.lineage.parentUuid   service.runtimeDetails.process.lineage.pid   service.runtimeDetails.process.lineage.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.process.lineage.userId   service.runtimeDetails.process.lineage.uuid   service.runtimeDetails.process.name   service.runtimeDetails.process.namespacePid   service.runtimeDetails.process.parentUuid   service.runtimeDetails.process.pid   service.runtimeDetails.process.pwd   service.runtimeDetails.process.startTime Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000   service.runtimeDetails.process.user   service.runtimeDetails.process.userId   service.runtimeDetails.process.uuid   service.serviceName   service.userFeedback   severity To configure severity based filters, use the following for the FindingCriteria condition:    Low: ["1", "2", "3"]     Medium: ["4", "5", "6"]     High: ["7", "8"]     Critical: ["9", "10"]    For more information, see Findings severity levels in the Amazon GuardDuty User Guide.   type   updatedAt Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000',
          args: {
            name: "structure",
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
      name: "update-findings-feedback",
      description:
        "Marks the specified GuardDuty findings as useful or not useful",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that is associated with the findings for which you want to update the feedback. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--finding-ids",
          description:
            "The IDs of the findings that you want to mark as useful or not useful",
          args: {
            name: "list",
          },
        },
        {
          name: "--feedback",
          description: "The feedback for the finding",
          args: {
            name: "string",
            suggestions: ["USEFUL", "NOT_USEFUL"],
          },
        },
        {
          name: "--comments",
          description: "Additional feedback about the GuardDuty findings",
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
      name: "update-ip-set",
      description: "Updates the IPSet specified by the IPSet ID",
      options: [
        {
          name: "--detector-id",
          description:
            "The detectorID that specifies the GuardDuty service whose IPSet you want to update. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-set-id",
          description:
            "The unique ID that specifies the IPSet that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The unique ID that specifies the IPSet that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description: "The updated URI of the file that contains the IPSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "The updated Boolean value that specifies whether the IPSet is active or not",
        },
        {
          name: "--no-activate",
          description:
            "The updated Boolean value that specifies whether the IPSet is active or not",
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the location parameter",
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
      name: "update-malware-protection-plan",
      description: "Updates an existing Malware Protection plan resource",
      options: [
        {
          name: "--malware-protection-plan-id",
          description:
            "A unique identifier associated with the Malware Protection plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "Amazon Resource Name (ARN) of the IAM role with permissions to scan and add tags to the associated protected resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions",
          description:
            "Information about whether the tags will be added to the S3 object after scanning",
          args: {
            name: "structure",
          },
        },
        {
          name: "--protected-resource",
          description:
            "Information about the protected resource that is associated with the created Malware Protection plan. Presently, S3Bucket is the only supported protected resource",
          args: {
            name: "structure",
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
      name: "update-malware-scan-settings",
      description:
        "Updates the malware scan settings. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the detector that specifies the GuardDuty service where you want to update scan settings. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--scan-resource-criteria",
          description:
            "Represents the criteria to be used in the filter for selecting resources to scan",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ebs-snapshot-preservation",
          description:
            "An enum value representing possible snapshot preservation settings",
          args: {
            name: "string",
            suggestions: ["NO_RETENTION", "RETENTION_WITH_FINDING"],
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
      name: "update-member-detectors",
      description:
        "Contains information on member accounts to be updated. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The detector ID of the administrator account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description: "A list of member account IDs to be updated",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-sources",
          description: "Describes which data sources will be updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--features",
          description:
            "A list of features that will be updated for the specified member accounts",
          args: {
            name: "list",
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
      name: "update-organization-configuration",
      description:
        "Configures the delegated administrator account with the provided values. You must provide a value for either autoEnableOrganizationMembers or autoEnable, but not both.  Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector that configures the delegated administrator. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-enable",
          description:
            "Represents whether to automatically enable member accounts in the organization. This applies to only new member accounts, not the existing member accounts. When a new account joins the organization, the chosen features will be enabled for them by default. Even though this is still supported, we recommend using AutoEnableOrganizationMembers to achieve the similar results. You must provide a value for either autoEnableOrganizationMembers or autoEnable",
        },
        {
          name: "--no-auto-enable",
          description:
            "Represents whether to automatically enable member accounts in the organization. This applies to only new member accounts, not the existing member accounts. When a new account joins the organization, the chosen features will be enabled for them by default. Even though this is still supported, we recommend using AutoEnableOrganizationMembers to achieve the similar results. You must provide a value for either autoEnableOrganizationMembers or autoEnable",
        },
        {
          name: "--data-sources",
          description: "Describes which data sources will be updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--features",
          description:
            "A list of features that will be configured for the organization",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-enable-organization-members",
          description:
            "Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. You must provide a value for either autoEnableOrganizationMembers or autoEnable.  Use one of the following configuration values for autoEnableOrganizationMembers:    NEW: Indicates that when a new account joins the organization, they will have GuardDuty enabled automatically.     ALL: Indicates that all accounts in the organization have GuardDuty enabled automatically. This includes NEW accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty. It may take up to 24 hours to update the configuration for all the member accounts.    NONE: Indicates that GuardDuty will not be automatically enabled for any account in the organization. The administrator must manage GuardDuty for each account in the organization individually. When you update the auto-enable setting from ALL or NEW to NONE, this action doesn't disable the corresponding option for your existing accounts. This configuration will apply to the new accounts that join the organization. After you update the auto-enable settings, no new account will have the corresponding option as enabled",
          args: {
            name: "string",
            suggestions: ["NEW", "ALL", "NONE"],
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
      name: "update-publishing-destination",
      description:
        "Updates information about the publishing destination specified by the destinationId",
      options: [
        {
          name: "--detector-id",
          description:
            "The ID of the detector associated with the publishing destinations to update. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-id",
          description: "The ID of the publishing destination to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-properties",
          description:
            "A DestinationProperties object that includes the DestinationArn and KmsKeyArn of the publishing destination",
          args: {
            name: "structure",
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
      name: "update-threat-entity-set",
      description:
        "Updates the threat entity set associated with the specified threatEntitySetId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector associated with the threat entity set that you want to update. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--threat-entity-set-id",
          description:
            "The ID returned by GuardDuty after updating the threat entity set resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A user-friendly name to identify the trusted entity set. The name of your list can include lowercase letters, uppercase letters, numbers, dash (-), and underscore (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The URI of the file that contains the trusted entity set",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the location parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "A boolean value that indicates whether GuardDuty is to start using this updated threat entity set. After you update an entity set, you will need to activate it again. It might take up to 15 minutes for the updated entity set to be effective",
        },
        {
          name: "--no-activate",
          description:
            "A boolean value that indicates whether GuardDuty is to start using this updated threat entity set. After you update an entity set, you will need to activate it again. It might take up to 15 minutes for the updated entity set to be effective",
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
      name: "update-threat-intel-set",
      description:
        "Updates the ThreatIntelSet specified by the ThreatIntelSet ID",
      options: [
        {
          name: "--detector-id",
          description:
            "The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--threat-intel-set-id",
          description:
            "The unique ID that specifies the ThreatIntelSet that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The unique ID that specifies the ThreatIntelSet that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The updated URI of the file that contains the ThreateIntelSet",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "The updated Boolean value that specifies whether the ThreateIntelSet is active or not",
        },
        {
          name: "--no-activate",
          description:
            "The updated Boolean value that specifies whether the ThreateIntelSet is active or not",
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the location parameter",
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
      name: "update-trusted-entity-set",
      description:
        "Updates the trusted entity set associated with the specified trustedEntitySetId",
      options: [
        {
          name: "--detector-id",
          description:
            "The unique ID of the GuardDuty detector associated with the threat entity set that you want to update. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API",
          args: {
            name: "string",
          },
        },
        {
          name: "--trusted-entity-set-id",
          description:
            "The ID returned by GuardDuty after updating the trusted entity set resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A user-friendly name to identify the trusted entity set. The name of your list can include lowercase letters, uppercase letters, numbers, dash (-), and underscore (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--location",
          description:
            "The URI of the file that contains the trusted entity set",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-bucket-owner",
          description:
            "The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the location parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--activate",
          description:
            "A boolean value that indicates whether GuardDuty is to start using this updated trusted entity set. After you update an entity set, you will need to activate it again. It might take up to 15 minutes for the updated entity set to be effective",
        },
        {
          name: "--no-activate",
          description:
            "A boolean value that indicates whether GuardDuty is to start using this updated trusted entity set. After you update an entity set, you will need to activate it again. It might take up to 15 minutes for the updated entity set to be effective",
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
