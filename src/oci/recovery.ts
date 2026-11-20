// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "ACCEPTED",
      "WAITING",
      "IN_PROGRESS",
      "FAILED",
      "SUCCEEDED",
      "CANCELING",
      "CANCELED",
    ],
  },
  isRepeatable: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "Defined tags for this resource",
  args: { name: "json" },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description:
    "Simple key-value pair that is applied without any predefined name, type or scope",
  args: { name: "json" },
};
const optProtectedDatabaseId: Fig.Option = {
  name: "--protected-database-id",
  description: "The protected database OCID",
  args: { name: "protected-database-id" },
  isRequired: true,
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optPage: Fig.Option = {
  name: "--page",
  description:
    "The page token representing the page at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description:
    "The sort order to use, either ascending (ASC) or descending (DESC)",
  args: { suggestions: ["ASC", "DESC"] },
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return per page",
  args: { name: "integer" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The compartment OCID",
  args: { name: "compartment-id" },
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only resources that match the entire 'displayname' given",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optLongTermBackupId: Fig.Option = {
  name: "--long-term-backup-id",
  description: "The long term backup OCID",
  args: { name: "long-term-backup-id" },
  isRequired: true,
};
const optProtectionPolicyId: Fig.Option = {
  name: "--protection-policy-id",
  description: "The protection policy OCID",
  args: { name: "protection-policy-id" },
  isRequired: true,
};
const optRecoveryServiceSubnetId: Fig.Option = {
  name: "--recovery-service-subnet-id",
  description: "The recovery service subnet OCID",
  args: { name: "recovery-service-subnet-id" },
  isRequired: true,
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description:
    "A filter to return only the resources that match the specified lifecycle state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "DELETE_SCHEDULED",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
};
const optWorkRequestId: Fig.Option = {
  name: "--work-request-id",
  description: "The OCID of the work request",
  args: { name: "work-request-id" },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "recovery",
  description: "Oracle Database Autonomous Recovery Service",
  subcommands: [
    {
      name: "protection-policy",
      description:
        "The details of a protection policy.A policy defines the exact number of days to retain protected database",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a protection policy resource from the existing compartment to the specified compartment",
          options: [
            optProtectionPolicyId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the Protection Policy should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Protection Policy",
          options: [
            {
              name: "--display-name",
              description: "A user provided name for the protection policy",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--backup-retention-period-in-days",
              description:
                "The maximum number of days to retain backups for a protected database",
              args: { name: "integer" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "Compartment Identifier",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--must-enforce-cloud-locality",
              description:
                "Indicates whether the protection policy enforces Recovery Service to retain backups in the same cloud service",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--policy-locked-date-time",
              description:
                "An RFC3339 formatted datetime string that specifies the exact date and time for the retention lock to take",
              args: { name: "policy-locked-date-time" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specified protection policy",
          options: [
            optProtectionPolicyId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a specified protection policy",
          options: [optProtectionPolicyId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified protection policy",
          options: [
            optProtectionPolicyId,
            {
              name: "--display-name",
              description: "A user provided name for the protection policy",
              args: { name: "display-name" },
            },
            {
              name: "--backup-retention-period-in-days",
              description:
                "The maximum number of days to retain backups for a protected database",
              args: { name: "integer" },
            },
            {
              name: "--policy-locked-date-time",
              description:
                "An RFC3339 formatted datetime string that specifies the exact date and time for the retention lock to take",
              args: { name: "policy-locked-date-time" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "long-term-backup",
      description: "The details of a Long Term Backup",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancels a long-term backup that is being created or scheduled to be created",
          options: [
            optLongTermBackupId,
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description:
            "Creates a long-term backup of a specified protected database",
          options: [
            {
              name: "--protected-database-id",
              description:
                "The OCID of the protected database for which you want to create the long-term backup",
              args: { name: "protected-database-id" },
              isRequired: true,
            },
            {
              name: "--retention-period",
              description: "The maximum period to retain the long-term backup",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "A user provided name for the long term backup",
              args: { name: "display-name" },
            },
            {
              name: "--retention-scn",
              description:
                "The desired target point (SCN) at which you want to create the long-term backup of the database.For example",
              args: { name: "integer" },
            },
            {
              name: "--retention-point-in-time",
              description:
                "An RFC3339 formatted datetime string that indicates the desired target point in time in the database at",
              args: { name: "datetime" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a long-term backup",
          options: [
            optLongTermBackupId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Retrieves information regarding a long-term backup",
          options: [optLongTermBackupId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified long term backup",
          options: [
            optLongTermBackupId,
            {
              name: "--display-name",
              description: "A user provided name for the long term backup",
              args: { name: "display-name" },
            },
            {
              name: "--retention-period",
              description: "The maximum period to retain the long-term backup",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-error-collection",
      description: "Results of a workRequestError search",
      subcommands: [
        {
          name: "list-work-request-errors",
          description:
            "Return a (paginated) list of errors for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-summary-collection",
      description: "Results of a workRequest search",
      subcommands: [
        {
          name: "list-work-requests",
          description: "Lists the work requests in a compartment",
          options: [
            optCompartmentId,
            {
              name: "--work-request-id",
              description:
                "Unique Oracle-assigned identifier of the work request",
              args: { name: "work-request-id" },
            },
            {
              name: "--status",
              description:
                "A filter to return only resources their lifecycleState matches the given OperationStatus",
              args: {
                suggestions: [
                  "ACCEPTED",
                  "WAITING",
                  "IN_PROGRESS",
                  "FAILED",
                  "SUCCEEDED",
                  "CANCELING",
                  "CANCELED",
                ],
              },
            },
            {
              name: "--resource-id",
              description:
                "The ID of the resource affected by the work request",
              args: { name: "resource-id" },
            },
            optPage,
            optLimit,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeAccepted"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "recovery-service-subnet",
      description: "The details of a recovery service subnet",
      subcommands: [
        {
          name: "change-compartment",
          description:
            "Moves a recovery service subnet resource from the existing compartment to the specified compartment",
          options: [
            optRecoveryServiceSubnetId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the Recovery Service subnet should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Recovery Service Subnet",
          options: [
            {
              name: "--display-name",
              description:
                "A user-provided name for the recovery service subnet",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--vcn-id",
              description:
                "The OCID of the virtual cloud network (VCN) that contains the recovery service subnet",
              args: { name: "vcn-id" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description: "The compartment OCID",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--subnet-id",
              description: "Deprecated",
              args: { name: "subnet-id" },
              deprecated: true,
            },
            {
              name: "--subnets",
              description:
                "A list of OCIDs of the subnets associated with the Recovery Service subnet",
              args: { name: "json" },
            },
            {
              name: "--nsg-ids",
              description:
                "A list of network security group (NSG) OCIDs that are associated with the Recovery Service subnet",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a specified recovery service subnet",
          options: [
            optRecoveryServiceSubnetId,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "get",
          description:
            "Gets information about a specified recovery service subnet",
          options: [optRecoveryServiceSubnetId, optFromJson],
        },
        {
          name: "update",
          description: "Updates the specified recovery service subnet",
          options: [
            optRecoveryServiceSubnetId,
            {
              name: "--display-name",
              description:
                "A user-provided name for the recovery service subnet",
              args: { name: "display-name" },
            },
            {
              name: "--subnets",
              description:
                "A list of OCIDs of the subnets associated with the recovery service subnet",
              args: { name: "json" },
            },
            {
              name: "--nsg-ids",
              description:
                "A list of network security group (NSG) OCIDs that are associated with the Recovery Service subnet",
              args: { name: "json" },
            },
            {
              name: "--security-attributes",
              description: "Security attributes for this resource",
              args: { name: "json" },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "protection-policy-collection",
      description: "Results of a Protection Policy search",
      subcommands: [
        {
          name: "list-protection-policies",
          description:
            "Gets a list of protection policies based on the specified parameters",
          options: [
            optCompartmentId,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETE_SCHEDULED",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optDisplayName,
            {
              name: "--protection-policy-id",
              description: "The protection policy OCID",
              args: { name: "protection-policy-id" },
            },
            {
              name: "--owner",
              description:
                "A filter to return only the policies that match the owner as 'Customer' or 'Oracle'",
              args: { suggestions: ["oracle", "customer"] },
            },
            {
              name: "--must-enforce-cloud-locality",
              description:
                "A filter to return only the protection policies that enforce backup colocation",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--limit",
              description: "The maximum number of items to return",
              args: { name: "integer" },
            },
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "long-term-backup-collection",
      description: "Results of a long term backup search",
      subcommands: [
        {
          name: "list-long-term-backups",
          description:
            "Lists the long-term backups associated with a protected database",
          options: [
            optCompartmentId,
            {
              name: "--id",
              description: "The long-term backup OCID",
              args: { name: "id" },
            },
            optDisplayName,
            {
              name: "--protected-database-id",
              description: "The protected database OCID",
              args: { name: "protected-database-id" },
            },
            optLifecycleState,
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "protected-database",
      description:
        "A protected database is an Oracle Cloud Database whose backups are managed by Oracle Database Autonomous",
      subcommands: [
        {
          name: "cancel-protected-database-deletion",
          description:
            "Cancels the scheduled deletion of a protected database, and returns the protected database to an ACTIVE state",
          options: [optProtectedDatabaseId, optIfMatch, optFromJson],
        },
        {
          name: "change-compartment",
          description:
            "Moves a protected database resource from the existing compartment to the specified compartment",
          options: [
            optProtectedDatabaseId,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment into which the protected database should be moved",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "change-protected-database-subscription",
          description:
            "Associates the protected database with a new cloud service environment, such as Microsoft Azure",
          options: [
            optProtectedDatabaseId,
            {
              name: "--subscription-id",
              description:
                "The OCID of the new cloud service subscription to which you want to link the protected database",
              args: { name: "subscription-id" },
            },
            {
              name: "--is-default",
              description:
                "Indicates whether it is a Universal Credit Model (UCM) subscription",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "create",
          description: "Creates a new Protected Database",
          options: [
            {
              name: "--display-name",
              description: "The protected database name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--db-unique-name",
              description:
                "The dbUniqueName of the protected database in Recovery Service",
              args: { name: "db-unique-name" },
              isRequired: true,
            },
            {
              name: "--password",
              description:
                "Password credential which can be used to connect to Protected Database",
              args: { name: "password" },
              isRequired: true,
            },
            {
              name: "--protection-policy-id",
              description:
                "The OCID of the protection policy associated with the protected database",
              args: { name: "protection-policy-id" },
              isRequired: true,
            },
            {
              name: "--recovery-service-subnets",
              description:
                "List of recovery service subnet resources associated with the protected database",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the protected database",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--database-size",
              description: "The size of the protected database",
              args: { suggestions: ["XS", "S", "M", "L", "XL", "XXL", "AUTO"] },
            },
            {
              name: "--database-id",
              description: "The OCID of the protected database",
              args: { name: "database-id" },
            },
            {
              name: "--database-size-in-gbs",
              description: "The size of the database, in gigabytes",
              args: { name: "integer" },
            },
            {
              name: "--change-rate",
              description:
                "The percentage of data changes that exist in the database between successive incremental backups",
              args: { name: "change-rate" },
            },
            {
              name: "--compression-ratio",
              description: "The compression ratio of the protected database",
              args: { name: "compression-ratio" },
            },
            {
              name: "--is-redo-logs-shipped",
              description:
                "The value TRUE indicates that the protected database is configured to use Real-time data protection",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--subscription-id",
              description:
                "The OCID of the cloud service subscription to which you want to link the protected database",
              args: { name: "subscription-id" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--opc-dry-run",
              description:
                "Indicates if the request is to test the preparedness for creating a protected database",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a protected database based on the specified protected database ID",
          options: [
            optProtectedDatabaseId,
            {
              name: "--deletion-schedule",
              description:
                "Defines a preferred schedule to delete a protected database after you terminate the source database. * The",
              args: {
                suggestions: [
                  "DELETE_AFTER_RETENTION_PERIOD",
                  "DELETE_AFTER_72_HOURS",
                ],
              },
            },
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "fetch-protected-database-configuration",
          description:
            "Downloads the network service configuration file 'tnsnames.ora' for a specified protected database",
          options: [
            optProtectedDatabaseId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--configuration-type",
              description:
                "Currently has four config options ALL, TNSNAMES, HOSTS and CABUNDLE",
              args: {
                suggestions: [
                  "CABUNDLE",
                  "TNSNAMES",
                  "HOSTS",
                  "RCVCONF",
                  "ALL",
                ],
              },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "get",
          description: "Gets information about a specified protected database",
          options: [optProtectedDatabaseId, optFromJson],
        },
        {
          name: "schedule-protected-database-deletion",
          description:
            "Defines a preferred schedule to delete a protected database after you terminate the source database",
          options: [
            optProtectedDatabaseId,
            {
              name: "--deletion-schedule",
              description:
                "Defines a preferred schedule to delete a protected database after you terminate the source database. * The",
              args: {
                suggestions: [
                  "DELETE_AFTER_RETENTION_PERIOD",
                  "DELETE_AFTER_72_HOURS",
                ],
              },
            },
            optIfMatch,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the Protected Database",
          options: [
            optProtectedDatabaseId,
            {
              name: "--display-name",
              description: "The protected database name",
              args: { name: "display-name" },
            },
            {
              name: "--database-size",
              description:
                "The size of the database is allowed to be decreased",
              args: { suggestions: ["XS", "S", "M", "L", "XL", "XXL", "AUTO"] },
            },
            {
              name: "--database-size-in-gbs",
              description: "The size of the database, in gigabytes",
              args: { name: "integer" },
            },
            {
              name: "--password",
              description:
                "Password credential which can be used to connect to Protected Database",
              args: { name: "password" },
            },
            {
              name: "--protection-policy-id",
              description:
                "The OCID of the protection policy associated with the protected database",
              args: { name: "protection-policy-id" },
            },
            {
              name: "--recovery-service-subnets",
              description:
                "List of recovery service subnet resources associated with the protected database",
              args: { name: "json" },
            },
            {
              name: "--is-redo-logs-shipped",
              description:
                "The value TRUE indicates that the protected database is configured to use Real-time data protection",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            optFreeformTags,
            optDefinedTags,
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request",
      description: "A description of workrequest status",
      subcommands: [
        {
          name: "get",
          description:
            "Gets the status of the work request based on the specified ID",
          options: [optWorkRequestId, optFromJson],
        },
      ],
    },
    {
      name: "protected-database-collection",
      description: "Results of a protected database search operation",
      subcommands: [
        {
          name: "list-protected-databases",
          description:
            "Lists the protected databases based on the specified parameters",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName,
            {
              name: "--id",
              description: "The protected database OCID",
              args: { name: "id" },
            },
            {
              name: "--protection-policy-id",
              description: "The protection policy OCID",
              args: { name: "protection-policy-id" },
            },
            {
              name: "--recovery-service-subnet-id",
              description: "The recovery service subnet OCID",
              args: { name: "recovery-service-subnet-id" },
            },
            {
              name: "--backup-cloud-location",
              description: "Filter for cloud location of protected database",
              args: { suggestions: ["AZURE", "OCI", "GCP", "AWS"] },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "recovery-service-subnet-collection",
      description: "Results of a recovery service subnet search operation",
      subcommands: [
        {
          name: "list-recovery-service-subnets",
          description: "Returns a list of Recovery Service Subnets",
          options: [
            optCompartmentId,
            optLifecycleState,
            optDisplayName,
            {
              name: "--id",
              description: "The recovery service subnet OCID",
              args: { name: "id" },
            },
            {
              name: "--vcn-id",
              description:
                "The OCID of the virtual cloud network (VCN) associated with the recovery service subnet",
              args: { name: "vcn-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "work-request-log-entry-collection",
      description: "Results of a workRequestLog search",
      subcommands: [
        {
          name: "list-work-request-logs",
          description:
            "Return a (paginated) list of logs for a given work request",
          options: [
            optWorkRequestId,
            optPage,
            optLimit,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["timeCreated"] },
            },
            optSortOrder,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
