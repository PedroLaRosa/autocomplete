// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optGenerateFullCommandJsonInput: Fig.Option = {
  name: "--generate-full-command-json-input",
  description:
    "Provide input to this command as a JSON document from a file using the file://path-to/file syntax",
};
const optEdgeType: Fig.Option = {
  name: "--edge-type",
  description:
    "If provided, it sets the target path to either a Rover RED or PCA device. (red/pca)",
  args: { name: "edge-type" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optNodeId: Fig.Option = {
  name: "--node-id",
  description: "Unique RoverNode identifier",
  args: { name: "node-id" },
  isRequired: true,
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optClusterId: Fig.Option = {
  name: "--cluster-id",
  description: "Unique RoverStandalone Cluster identifier",
  args: { name: "cluster-id" },
  isRequired: true,
};
const optClusterId2: Fig.Option = {
  name: "--cluster-id",
  description: "Unique RoverStation Cluster identifier",
  args: { name: "cluster-id" },
  isRequired: true,
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optRoverNodeId: Fig.Option = {
  name: "--rover-node-id",
  description: "Unique RoverNode identifier",
  args: { name: "rover-node-id" },
  isRequired: true,
};
const optWaitForState: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optAddress1: Fig.Option = {
  name: "--address1",
  description: "Address line 1",
  args: { name: "address1" },
};
const optAddress2: Fig.Option = {
  name: "--address2",
  description: "Optional address line 2",
  args: { name: "address2" },
};
const optAddress3: Fig.Option = {
  name: "--address3",
  description: "Optional address line 3",
  args: { name: "address3" },
};
const optAddress4: Fig.Option = {
  name: "--address4",
  description: "Optional address line 4",
  args: { name: "address4" },
};
const optAddressee: Fig.Option = {
  name: "--addressee",
  description: "Company or person to send the appliance",
  args: { name: "addressee" },
};
const optCareOf: Fig.Option = {
  name: "--care-of",
  description: "Place/person to direct the package to",
  args: { name: "care-of" },
};
const optCityOrLocality: Fig.Option = {
  name: "--city-or-locality",
  description: "City or Locality",
  args: { name: "city-or-locality" },
};
const optCountry: Fig.Option = {
  name: "--country",
  description: "Country",
  args: { name: "country" },
};
const optDefinedTags: Fig.Option = {
  name: "--defined-tags",
  description: "The defined tags associated with this resource, if any",
  args: { name: "json" },
};
const optEmail: Fig.Option = {
  name: "--email",
  description: "Email address",
  args: { name: "email" },
};
const optEnclosureType: Fig.Option = {
  name: "--enclosure-type",
  description:
    "The type of enclosure rover nodes in this cluster are shipped in",
  args: { suggestions: ["RUGGADIZED", "NON_RUGGADIZED"] },
};
const optFreeformTags: Fig.Option = {
  name: "--freeform-tags",
  description: "The freeform tags associated with this resource, if any",
  args: { name: "json" },
};
const optLifecycleStateDetails: Fig.Option = {
  name: "--lifecycle-state-details",
  description: "A property that can contain details on the lifecycle",
  args: { name: "lifecycle-state-details" },
};
const optPhoneNumber: Fig.Option = {
  name: "--phone-number",
  description: "Phone number",
  args: { name: "phone-number" },
};
const optPointOfContact: Fig.Option = {
  name: "--point-of-contact",
  description:
    "Name of point of contact for this order if customer is picking up",
  args: { name: "point-of-contact" },
};
const optPointOfContactPhoneNumber: Fig.Option = {
  name: "--point-of-contact-phone-number",
  description:
    "Phone number of point of contact for this order if customer is picking up",
  args: { name: "point-of-contact-phone-number" },
};
const optShippingPreference: Fig.Option = {
  name: "--shipping-preference",
  description: "Preference for device delivery",
  args: { suggestions: ["ORACLE_SHIPPED", "CUSTOMER_PICKUP"] },
};
const optStateProvinceRegion: Fig.Option = {
  name: "--state-province-region",
  description: "State or Province or Region",
  args: { name: "state-province-region" },
};
const optSystemTags: Fig.Option = {
  name: "--system-tags",
  description: "The system tags associated with this resource, if any",
  args: { name: "json" },
};
const optZipPostalCode: Fig.Option = {
  name: "--zip-postal-code",
  description: "Zip or Postal Code",
  args: { name: "zip-postal-code" },
};
const optAll: Fig.Option = {
  name: "--all",
  description: "Fetches all pages of results",
};
const optLimit: Fig.Option = {
  name: "--limit",
  description: "The maximum number of items to return",
  args: { name: "integer" },
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
  description: "The sort order to use, either 'asc' or 'desc'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optUseBasicAuth: Fig.Option = {
  name: "--use-basic-auth",
  description:
    "Use Basic Authentication for Diagnostic Requets - Retrieved from Serial Console",
};
const optLifecycleState: Fig.Option = {
  name: "--lifecycle-state",
  description: "The current state of the RoverCluster",
  args: {
    suggestions: [
      "CREATING",
      "UPDATING",
      "ACTIVE",
      "DELETING",
      "DELETED",
      "FAILED",
    ],
  },
};
const optNodeName: Fig.Option = {
  name: "--node-name",
  description: "Rover Node Name",
  args: { name: "node-name" },
};
const optRoverClusterId: Fig.Option = {
  name: "--rover-cluster-id",
  description: "Unique RoverCluster identifier",
  args: { name: "rover-cluster-id" },
  isRequired: true,
};
const optSubscriptionId: Fig.Option = {
  name: "--subscription-id",
  description:
    "ID provided to customer after successful subscription to Rover Stations",
  args: { name: "subscription-id" },
};
const optBucketName: Fig.Option = {
  name: "--bucket-name",
  description: "Object Store Bucket name for the workload",
  args: { name: "bucket-name" },
};
const optCertKeyAlgorithm: Fig.Option = {
  name: "--cert-key-algorithm",
  description: "Key algorithm for issuing leaf certificate",
  args: { suggestions: ["RSA2048", "RSA4096", "ECDSA_P256", "ECDSA_P384"] },
};
const optCertSignatureAlgorithm: Fig.Option = {
  name: "--cert-signature-algorithm",
  description: "Signature algorithm for issuing leaf certificate",
  args: {
    suggestions: [
      "SHA256_WITH_RSA",
      "SHA384_WITH_RSA",
      "SHA512_WITH_RSA",
      "SHA256_WITH_ECDSA",
      "SHA384_WITH_ECDSA",
      "SHA512_WITH_ECDSA",
    ],
  },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description: "The OCID of the compartment in which to list resources",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "The OCID of the compartment into which the resources should be moved",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
  isRequired: true,
};
const optDisplayName2: Fig.Option = {
  name: "--display-name",
  description: "A user-friendly name",
  args: { name: "display-name" },
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optImageId: Fig.Option = {
  name: "--image-id",
  description: "Object Store Image OCID for the workload",
  args: { name: "image-id" },
};
const optMasterKeyId: Fig.Option = {
  name: "--master-key-id",
  description: "Customer provided master key ID to encrypt secret information",
  args: { name: "master-key-id" },
};
const optOutputFilePath: Fig.Option = {
  name: "--output-file-path",
  description: "Save the CA certificate in specified location",
  args: { name: "output-file-path", template: "filepaths" },
  isRequired: true,
};
const optPolicyCompartmentId: Fig.Option = {
  name: "--policy-compartment-id",
  description:
    "Compartment ID where the master key policy (if master key provided) would be created",
  args: { name: "policy-compartment-id" },
};
const optPolicyName: Fig.Option = {
  name: "--policy-name",
  description:
    "Display name for the policy to be created for the master key (if provided)",
  args: { name: "policy-name" },
};
const optPrefix: Fig.Option = {
  name: "--prefix",
  description:
    "List of objects with names matching this prefix would be part of this export job",
  args: { name: "prefix" },
};
const optRangeEnd: Fig.Option = {
  name: "--range-end",
  description:
    "Object names returned by a list query must be strictly less than this parameter",
  args: { name: "range-end" },
};
const optRangeStart: Fig.Option = {
  name: "--range-start",
  description:
    "Object names returned by a list query must be greater or equal to this parameter",
  args: { name: "range-start" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["timeCreated", "displayName"] },
};
const optType: Fig.Option = {
  name: "--type",
  description: "Type of workload",
  args: { suggestions: ["BUCKET", "IMAGE"] },
  isRequired: true,
};
const completionSpec: Fig.Spec = {
  name: "rover",
  description: "RoverCloudService",
  subcommands: [
    {
      name: "device",
      description: "Rover Physical Device",
      subcommands: [
        {
          name: "system-upgrade",
          description: "System Upgrade of Rover Physical Device",
          subcommands: [
            {
              name: "upload-bundle",
              description:
                "Uploads the system bundle to Object Storage bucket 'rover-system-upgrade-staging'",
              options: [
                {
                  name: "--file",
                  description: "File path of the bundle to be uploaded",
                  args: { name: "file", template: "filepaths" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "import-bundle",
              description: "Starts Validation and imports the upgrade bundle",
              options: [
                {
                  name: "--object-name",
                  description:
                    "Name of the upgrade bundle which has to be imported",
                  args: { name: "object-name" },
                  isRequired: true,
                },
                {
                  name: "--wait",
                  description:
                    "Whether or not the call should poll until the import is successful",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFromJson,
              ],
            },
            {
              name: "get-import-status",
              description: "Checks the import progress status",
              options: [
                {
                  name: "--task-id",
                  description:
                    "Task-ID for which the status needs to be checked",
                  args: { name: "task-id" },
                  isRequired: true,
                },
                {
                  name: "--wait",
                  description:
                    "Whether or not the call should poll until the import is successful",
                  args: { name: "boolean", suggestions: ["true", "false"] },
                },
                optFromJson,
              ],
            },
            {
              name: "get-import-history",
              description: "Shows history of all import tasks",
              options: [optFromJson],
            },
          ],
        },
        {
          name: "data-sync",
          description: "Data Sync Service CLI",
          subcommands: [
            {
              name: "task-definition",
              description: "Data Sync TaskDefinition CRUD operations",
              subcommands: [
                {
                  name: "create",
                  description: "Create TaskDefinition",
                  options: [
                    {
                      name: "--source",
                      description:
                        "Provide the details about the source datastore in JSON structure either in-line or via a local file",
                      args: { name: "json" },
                      isRequired: true,
                    },
                    {
                      name: "--destination",
                      description:
                        "Provide the details about the destination datastore in JSON structure either in-line or via a local file",
                      args: { name: "json" },
                      isRequired: true,
                    },
                    {
                      name: "--schedule",
                      description:
                        "Provide the details about how the task execution is scheduled in JSON structure either in-line or via a local",
                      args: { name: "json" },
                    },
                    {
                      name: "--name",
                      description: "Short description of the Task Definition",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    optEdgeType,
                    {
                      name: "--compartment-id",
                      description: "CompartmentId for Converged Data Sync Task",
                      args: { name: "compartment-id" },
                    },
                    {
                      name: "--rate-limit",
                      description:
                        "If provided, it sets the data transfer rate limit for this task",
                      args: { name: "rate-limit" },
                    },
                    {
                      name: "--sync-on-create",
                      description:
                        "If present, the task will started right after its creation regardless if it's a scheduled task or not",
                      args: { name: "sync-on-create" },
                    },
                    optGenerateFullCommandJsonInput,
                  ],
                },
                {
                  name: "update",
                  description: "Update TaskDefinition",
                  options: [
                    {
                      name: "--task-definition-id",
                      description:
                        "The ocid of the Task Definition to be updated",
                      args: { name: "task-definition-id" },
                      isRequired: true,
                    },
                    optEdgeType,
                    {
                      name: "--name",
                      description: "Short description of the Task Definition",
                      args: { name: "name" },
                    },
                    {
                      name: "--source",
                      description:
                        "Provide the details about the source datastore in JSON structure either in-line or via a local file",
                      args: { name: "json" },
                    },
                    {
                      name: "--destination",
                      description:
                        "Provide the details about the destination datastore in JSON structure either in-line or via a local file",
                      args: { name: "json" },
                    },
                    {
                      name: "--schedule",
                      description:
                        "Provide the details about how the task execution is scheduled in JSON structure either in-line or via a local",
                      args: { name: "json" },
                    },
                    {
                      name: "--rate-limit",
                      description:
                        "If provided, it sets the data transfer rate limit for this task",
                      args: { name: "rate-limit" },
                    },
                    optGenerateFullCommandJsonInput,
                  ],
                },
                {
                  name: "get",
                  description: "Get TaskDefinition",
                  options: [
                    {
                      name: "--task-definition-id",
                      description:
                        "Get the Task Definition specified by its ocid",
                      args: { name: "task-definition-id" },
                      isRequired: true,
                    },
                    optEdgeType,
                    optGenerateFullCommandJsonInput,
                  ],
                },
                {
                  name: "list",
                  description: "List TaskDefinitions",
                  options: [
                    {
                      name: "--limit",
                      description:
                        "Specify the number of task definitions to be retrieved",
                      args: { name: "limit" },
                    },
                    {
                      name: "--page",
                      description:
                        "If provided, this specifies the ocid of the first task definition returned in the list",
                      args: { name: "page" },
                    },
                    {
                      name: "--sort-by",
                      description:
                        "One of the supported sort-by columns: name | timeCreated | sourceDataStore | sourceBucket | destinationBucket",
                      args: { name: "sort-by" },
                    },
                    {
                      name: "--sort-order",
                      description:
                        "Specifies how the returned list is sorted, ASC | DESC",
                      args: { name: "sort-order" },
                    },
                    {
                      name: "--compartment-id",
                      description: "CompartmentId for Data Sync Task",
                      args: { name: "compartment-id" },
                    },
                    optEdgeType,
                    optGenerateFullCommandJsonInput,
                  ],
                },
                {
                  name: "delete",
                  description: "Delete TaskDefinition",
                  options: [
                    {
                      name: "--task-definition-id",
                      description:
                        "Get the Task Definition specified by its ocid",
                      args: { name: "task-definition-id" },
                      isRequired: true,
                    },
                    {
                      name: "--edge-type",
                      description:
                        "If provided, it sets the target path to either a Rover RED or PCA device. (red/pca)]",
                      args: { name: "edge-type" },
                    },
                    optGenerateFullCommandJsonInput,
                  ],
                },
                {
                  name: "change-state",
                  description: "Change TaskDefinition State",
                  options: [
                    {
                      name: "--is-enabled",
                      description:
                        "Set whether task definition enablement to true or false",
                      args: { name: "is-enabled" },
                      isRequired: true,
                    },
                    {
                      name: "--task-definition-id",
                      description:
                        "Change the Task Definition specified by its ocid",
                      args: { name: "task-definition-id" },
                      isRequired: true,
                    },
                    optEdgeType,
                    optGenerateFullCommandJsonInput,
                  ],
                },
                {
                  name: "change-compartment",
                  description: "Change TaskDefinition CompartmentId",
                  options: [
                    {
                      name: "--compartment-id",
                      description: "CompartmentId for Converged Data Sync Task",
                      args: { name: "compartment-id" },
                      isRequired: true,
                    },
                    {
                      name: "--task-definition-id",
                      description:
                        "Change the Task Definition specified by its ocid",
                      args: { name: "task-definition-id" },
                      isRequired: true,
                    },
                    optEdgeType,
                    optGenerateFullCommandJsonInput,
                  ],
                },
              ],
            },
            {
              name: "task",
              description: "Data Sync Task Execution",
              subcommands: [
                {
                  name: "start",
                  description: "Start Task",
                  options: [
                    {
                      name: "--task-definition-id",
                      description:
                        "The OCID of the Task Definition that is to be executed",
                      args: { name: "task-definition-id" },
                      isRequired: true,
                    },
                    {
                      name: "--threads",
                      description:
                        "Number of threads to copy files concurrently",
                      args: { name: "threads" },
                    },
                    {
                      name: "--multipart-threads",
                      description:
                        "Number of threads to process multiparts per file",
                      args: { name: "multipart-threads" },
                    },
                    optEdgeType,
                    optGenerateFullCommandJsonInput,
                  ],
                },
                {
                  name: "list",
                  description: "List Task",
                  options: [
                    {
                      name: "--task-definition-id",
                      description:
                        "Get the Task list executed from Task Definition specified by its ocid",
                      args: { name: "task-definition-id" },
                      isRequired: true,
                    },
                    {
                      name: "--limit",
                      description:
                        "Specify the number of tasks to be retrieved",
                      args: { name: "limit" },
                    },
                    {
                      name: "--page",
                      description:
                        "If provided, this specifies the ocid of the first task returned in the list",
                      args: { name: "page" },
                    },
                    {
                      name: "--sort-order",
                      description:
                        "Specifies how the returned list is sorted, ASC | DESC",
                      args: { name: "sort-order" },
                    },
                    optEdgeType,
                    optGenerateFullCommandJsonInput,
                  ],
                },
                {
                  name: "get",
                  description: "Get/Monitor task execution progress",
                  options: [
                    {
                      name: "--task-id",
                      description: "Task ocid",
                      args: { name: "task-id" },
                      isRequired: true,
                    },
                    {
                      name: "--no-wait",
                      description:
                        "By default, this command monitors the task execution progress continuously till the task completes",
                      args: { name: "no-wait" },
                    },
                    optEdgeType,
                    optGenerateFullCommandJsonInput,
                  ],
                },
                {
                  name: "get-snapshot",
                  description:
                    "Get task snapshot - the snapshot of the Task Definition at the time of execution and the execution status",
                  options: [
                    {
                      name: "--task-id",
                      description: "Task ocid",
                      args: { name: "task-id" },
                      isRequired: true,
                    },
                    optEdgeType,
                    optGenerateFullCommandJsonInput,
                  ],
                },
                {
                  name: "cancel",
                  description: "Cancel Task",
                  options: [
                    {
                      name: "--task-id",
                      description: "Cancel a running Task by its ocid",
                      args: { name: "task-id" },
                      isRequired: true,
                    },
                    optEdgeType,
                    optGenerateFullCommandJsonInput,
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "diagnostics",
          description: "Rover Diagnostic Service",
          subcommands: [
            {
              name: "bundle",
              description: "Rover Diagnostic Service Bundle",
              subcommands: [
                {
                  name: "create",
                  description: "Create a diag bundle",
                  options: [
                    {
                      name: "--display-name",
                      description: "Displayed name of diagnostic bundle",
                      args: { name: "display-name" },
                    },
                    optNodeName,
                    {
                      name: "--wait-for-state",
                      description:
                        "Wait until the resource or work request reaches the given state",
                      args: {
                        suggestions: [
                          "ACCEPTED",
                          "IN_PROGRESS",
                          "COMPLETED",
                          "FAILED",
                        ],
                      },
                      isRepeatable: true,
                    },
                    {
                      name: "--wait-interval-seconds",
                      description:
                        "Check interval for --wait-for-state in seconds (default 30)",
                      args: { name: "wait-interval-seconds" },
                    },
                    {
                      name: "--max-wait-seconds",
                      description:
                        "Maximum time to wait for the --wait-for-state state (default 1200)",
                      args: { name: "max-wait-seconds" },
                    },
                    optUseBasicAuth,
                    optFromJson,
                  ],
                },
                {
                  name: "view-summary",
                  description: "View diagnostic bundle status",
                  options: [
                    {
                      name: "--bundle-id",
                      description: '"Bundle Identifier (OCID)',
                      args: { name: "bundle-id" },
                      isRequired: true,
                    },
                    optNodeName,
                    optUseBasicAuth,
                    optFromJson,
                  ],
                },
                {
                  name: "cancel",
                  description: "Cancel a diagnostic bundle execution",
                  options: [
                    {
                      name: "--bundle-id",
                      description: '"Bundle Identifier (OCID)',
                      args: { name: "bundle-id" },
                      isRequired: true,
                    },
                    optNodeName,
                    optUseBasicAuth,
                    {
                      name: "--wait-for-state",
                      description:
                        "Wait until the resource or work request reaches the given state",
                      args: { suggestions: ["CANCELED"] },
                    },
                    {
                      name: "--wait-interval-seconds",
                      description:
                        "Check interval for --wait-for-state in seconds (default 30)",
                      args: { name: "wait-interval-seconds" },
                    },
                    {
                      name: "--max-wait-seconds",
                      description:
                        "Maximum time to wait for the --wait-for-state state (default 1200)",
                      args: { name: "max-wait-seconds" },
                    },
                    optFromJson,
                  ],
                },
                {
                  name: "get",
                  description: "Downloads a Specific Diag Bundle",
                  options: [
                    {
                      name: "--bundle-id",
                      description: "Bundle Identifier (OCID)",
                      args: { name: "bundle-id" },
                      isRequired: true,
                    },
                    {
                      name: "--file",
                      description:
                        "Filename for the downloaded diagnostics bundle archive",
                      args: { name: "file", template: "filepaths" },
                      isRequired: true,
                    },
                    {
                      name: "--encryption-key-file",
                      description: "Encryption Key File for the Bundle",
                      args: {
                        name: "encryption-key-file",
                        template: "filepaths",
                      },
                    },
                    optNodeName,
                    optUseBasicAuth,
                    optFromJson,
                  ],
                },
                {
                  name: "list",
                  description: "Returns a list of DiagBundles",
                  options: [
                    {
                      name: "--node-name",
                      description: "Node Hostname",
                      args: { name: "node-name" },
                    },
                    {
                      name: "--lifecycle-state",
                      description:
                        "Filter Bundle Requests according to one of the Lifecycle States: ACCEPTED, IN_PROGRESS, COMPLETED, FAILED",
                      args: { name: "lifecycle-state" },
                    },
                    optUseBasicAuth,
                    {
                      name: "--sort-by",
                      description: "The field to sort by",
                      args: { name: "sort-by" },
                    },
                    {
                      name: "--sort-order",
                      description:
                        "The sort order to use, either 'ASC' or 'DESC'",
                      args: { suggestions: ["ASC", "DESC"] },
                    },
                    {
                      name: "--limit",
                      description: "The maximum number of items to return",
                      args: { name: "limit" },
                    },
                    {
                      name: "--page",
                      description:
                        "A token representing the position at which to start retrieving results",
                      args: { name: "page" },
                    },
                    optFromJson,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "create-master-key-policy",
      description: "Create Policy for Master key",
      options: [
        {
          name: "--master-key-id",
          description: "Unique RoverStandalone Cluster identifier",
          args: { name: "master-key-id" },
          isRequired: true,
        },
        {
          name: "--policy-compartment-id",
          description: "Compartment ID where the policy should be created",
          args: { name: "policy-compartment-id" },
        },
        {
          name: "--policy-name",
          description: "Display name for the policy to be created",
          args: { name: "policy-name" },
        },
      ],
    },
    {
      name: "standalone-cluster",
      description: "Description of RoverCluster",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a cluster into a different compartment",
          options: [optCompartmentId2, optIfMatch, optClusterId, optFromJson],
        },
        {
          name: "create",
          description: "Creates a new RoverCluster",
          options: [
            optDisplayName,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the RoverCluster",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--cluster-type",
              description: "Type of cluster",
              args: { suggestions: ["STANDALONE", "STATION"] },
            },
            optEnclosureType,
            optPointOfContact,
            optPointOfContactPhoneNumber,
            optShippingPreference,
            optSubscriptionId,
            optLifecycleState,
            optLifecycleStateDetails,
            optMasterKeyId,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--cluster-size",
              description:
                "Number of nodes desired in the RoverStandalone cluster, between 5 and 15",
              args: { name: "integer" },
              isRequired: true,
            },
            optAddressee,
            optCareOf,
            optAddress1,
            optAddress2,
            optAddress3,
            optAddress4,
            optCityOrLocality,
            optStateProvinceRegion,
            optCountry,
            optZipPostalCode,
            optPhoneNumber,
            optEmail,
            optPolicyCompartmentId,
            optPolicyName,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a RoverCluster resource by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optClusterId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the RoverCluster",
          options: [
            optDisplayName2,
            {
              name: "--cluster-size",
              description:
                "Number of nodes desired in the cluster, in standalone clusters, between 5 and 15 inclusive",
              args: { name: "integer" },
            },
            optLifecycleState,
            optLifecycleStateDetails,
            optEnclosureType,
            optPointOfContact,
            optPointOfContactPhoneNumber,
            optShippingPreference,
            optSubscriptionId,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optClusterId,
            optAddressee,
            optCareOf,
            optAddress1,
            optAddress2,
            optAddress3,
            optAddress4,
            optCityOrLocality,
            optStateProvinceRegion,
            optCountry,
            optZipPostalCode,
            optPhoneNumber,
            optEmail,
            optFromJson,
          ],
        },
        {
          name: "show",
          description: "Gets a RoverCluster by identifier",
          options: [optClusterId, optFromJson],
        },
        {
          name: "list",
          description: "Returns a list of RoverClusters",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--cluster-type",
              description:
                "A filter to return only Clusters of type matched with the given cluster type",
              args: { suggestions: ["STANDALONE", "STATION"] },
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-certificate",
          description: "Get the certificate for a rover cluster",
          options: [optClusterId, optOutputFilePath, optFromJson],
        },
        {
          name: "rover-bundle-request",
          description: "Rover Bundle Requests for Cluster",
          subcommands: [
            {
              name: "list",
              description:
                "List all the roverBundleRequests for a given roverClusterId",
              options: [
                optRoverClusterId,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timeTaskCreated"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "rover-bundle",
          description: "Rover Bundle for Cluster",
          subcommands: [
            {
              name: "copy-to-customer",
              description:
                "Request to get rover bundle to the bucket in customer's tenancy",
              options: [
                {
                  name: "--destination-compartment-id",
                  description:
                    "The compartment OCID of destination compartment that the bundle will be copied to",
                  args: { name: "destination-compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--destination-bucket-name",
                  description:
                    "The destination bucket name the bundle will be copied to",
                  args: { name: "destination-bucket-name" },
                  isRequired: true,
                },
                {
                  name: "--bundle-version",
                  description:
                    "The bundle version that customer wants to upgrade to",
                  args: { name: "bundle-version" },
                  isRequired: true,
                },
                optRoverClusterId,
                {
                  name: "--wait-for-state",
                  description:
                    "Wait until the resource or work request reaches the given state",
                  args: {
                    suggestions: [
                      "ACCEPTED",
                      "IN_PROGRESS",
                      "WAITING",
                      "NEEDS_ATTENTION",
                      "FAILED",
                      "SUCCEEDED",
                      "CANCELING",
                      "CANCELED",
                    ],
                  },
                  isRepeatable: true,
                },
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get-status",
              description:
                "Retrieve the status and progress of a rover bundle copy request",
              options: [
                {
                  name: "--work-request-id",
                  description:
                    "The workRequestId for an async copyObject operation",
                  args: { name: "work-request-id" },
                  isRequired: true,
                },
                optRoverClusterId,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "rover-bundle-version",
          description: "Rover Bundle Version for Cluster",
          subcommands: [
            {
              name: "get",
              description:
                "Retrieve the latest available rover bundle version that can be upgraded to based on current bundle version",
              options: [
                {
                  name: "--current-rover-bundle-version",
                  description:
                    "The version of current rover bundle on customer's roverNode or roverCluster device",
                  args: { name: "current-rover-bundle-version" },
                  isRequired: true,
                },
                optRoverClusterId,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "request-approval",
          description: "Submit request for Rover Cluster",
          options: [optClusterId, optFromJson],
        },
        {
          name: "set-secrets",
          description:
            "Assign super-user-password and unlock-password for Rover Cluster",
          options: [
            optClusterId,
            {
              name: "--super-user-password",
              description:
                "Assign super-user-password for RoverCluster Identifier",
            },
            {
              name: "--unlock-passphrase",
              description:
                "Assign unlock-passphrase for RoverCluster Identifier",
            },
          ],
        },
        {
          name: "add-workload",
          description: "Add workload information to Rover Cluster",
          options: [
            optClusterId,
            optType,
            optImageId,
            optBucketName,
            optPrefix,
            optRangeStart,
            optRangeEnd,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "delete-workload",
          description: "Delete workload information from Rover Cluster",
          options: [optClusterId, optForce, optFromJson],
        },
        {
          name: "list-workloads",
          description: "List workload information of Rover Cluster",
          options: [optClusterId, optFromJson],
        },
      ],
    },
    {
      name: "station-cluster",
      description: "Description of RoverStation",
      subcommands: [
        {
          name: "create",
          description: "Creates a new RoverStation Cluster",
          options: [
            optDisplayName,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the RoverCluster",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--cluster-type",
              description: "Type of cluster",
              args: { suggestions: ["STANDALONE", "STATION"] },
            },
            optEnclosureType,
            optPointOfContact,
            optPointOfContactPhoneNumber,
            optShippingPreference,
            optSubscriptionId,
            optLifecycleState,
            optLifecycleStateDetails,
            {
              name: "--is-import-requested",
              description:
                "The flag indicating that customer requests data to be imported to OCI upon Rover cluster return",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--import-compartment-id",
              description:
                "An OCID of a compartment where data will be imported to upon Rover cluster return",
              args: { name: "import-compartment-id" },
            },
            {
              name: "--import-file-bucket",
              description:
                "Name of a bucket where files from NFS share will be imported to upon Rover cluster return",
              args: { name: "import-file-bucket" },
            },
            {
              name: "--data-validation-code",
              description: "Validation code returned by data validation tool",
              args: { name: "data-validation-code" },
            },
            optMasterKeyId,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--cluster-size",
              description:
                "Number of nodes desired in the RoverStation Cluster, between 15 and 30",
              args: { name: "integer" },
              isRequired: true,
            },
            optAddressee,
            optCareOf,
            optAddress1,
            optAddress2,
            optAddress3,
            optAddress4,
            optCityOrLocality,
            optStateProvinceRegion,
            optCountry,
            optZipPostalCode,
            optPhoneNumber,
            optEmail,
            optPolicyCompartmentId,
            optPolicyName,
            optFromJson,
          ],
        },
        {
          name: "show",
          description: "Get a RoverStation",
          options: [optClusterId2, optFromJson],
        },
        {
          name: "update",
          description: "Update a RoverStation",
          options: [
            optDisplayName2,
            {
              name: "--cluster-size",
              description:
                "Number of nodes desired in the cluster, in standalone clusters, between 5 and 15 inclusive",
              args: { name: "integer" },
            },
            optLifecycleState,
            optLifecycleStateDetails,
            optEnclosureType,
            optPointOfContact,
            optPointOfContactPhoneNumber,
            optShippingPreference,
            optSubscriptionId,
            {
              name: "--is-import-requested",
              description:
                "The flag indicating that customer requests data to be imported to OCI upon Rover cluster return",
              args: { name: "boolean", suggestions: ["true", "false"] },
            },
            {
              name: "--import-compartment-id",
              description:
                "An OCID of a compartment where data will be imported to upon Rover cluster return",
              args: { name: "import-compartment-id" },
            },
            {
              name: "--import-file-bucket",
              description:
                "Name of a bucket where files from NFS share will be imported to upon Rover cluster return",
              args: { name: "import-file-bucket" },
            },
            {
              name: "--data-validation-code",
              description: "Validation code returned by data validation tool",
              args: { name: "data-validation-code" },
            },
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optClusterId2,
            optAddressee,
            optCareOf,
            optAddress1,
            optAddress2,
            optAddress3,
            optAddress4,
            optCityOrLocality,
            optStateProvinceRegion,
            optCountry,
            optZipPostalCode,
            optPhoneNumber,
            optEmail,
            optFromJson,
          ],
        },
        {
          name: "request-approval",
          description: "Submit request for Rover Station",
          options: [
            optClusterId2,
            {
              name: "--subscription-id",
              description: "Subscription ID of RoverStation Cluster",
              args: { name: "subscription-id" },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a RoverCluster resource by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optClusterId2,
            optFromJson,
          ],
        },
        {
          name: "set-secrets",
          description:
            "Assign super-user-password and unlock-password for Rover Station",
          options: [
            optClusterId2,
            {
              name: "--super-user-password",
              description:
                "Assign super-user-password for RoverStation Identifier",
            },
            {
              name: "--unlock-passphrase",
              description:
                "Assign unlock-passphrase for RoverStation Identifier",
            },
          ],
        },
        {
          name: "change-compartment",
          description: "Moves a cluster into a different compartment",
          options: [optCompartmentId2, optIfMatch, optClusterId2, optFromJson],
        },
        {
          name: "add-workload",
          description: "Add workload information to Rover Station",
          options: [
            optClusterId2,
            optType,
            optImageId,
            optBucketName,
            optPrefix,
            optRangeStart,
            optRangeEnd,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "delete-workload",
          description: "Delete workload information from Rover Station",
          options: [optClusterId2, optForce, optFromJson],
        },
        {
          name: "list-workloads",
          description: "List workload information of Rover Cluster",
          options: [optClusterId2, optFromJson],
        },
        {
          name: "get-certificate",
          description: "Get the certificate for a rover cluster",
          options: [
            {
              name: "--cluster-id",
              description: "Unique RoverCluster identifier",
              args: { name: "cluster-id" },
              isRequired: true,
            },
            optOutputFilePath,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "node",
      description: "Information about a RoverNode",
      subcommands: [
        {
          name: "change-compartment",
          description: "Moves a rover node into a different compartment",
          options: [optCompartmentId2, optIfMatch, optNodeId, optFromJson],
        },
        {
          name: "create",
          description: "Creates a new RoverNode",
          options: [
            optDisplayName,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment containing the RoverNode",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--shape",
              description: "The shape of the node",
              args: { name: "shape" },
            },
            optPointOfContact,
            optPointOfContactPhoneNumber,
            optShippingPreference,
            {
              name: "--time-return-window-starts",
              description:
                "Start time for the window to pickup the device from customer",
              args: { name: "datetime" },
            },
            {
              name: "--time-return-window-ends",
              description:
                "End time for the window to pickup the device from customer",
              args: { name: "datetime" },
            },
            {
              name: "--lifecycle-state",
              description: "The current state of the RoverNode",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optEnclosureType,
            optLifecycleStateDetails,
            optMasterKeyId,
            {
              name: "--time-cert-validity-end",
              description: "The time after which leaf certificate will invalid",
              args: { name: "datetime" },
            },
            {
              name: "--common-name",
              description: "The common name for the leaf certificate",
              args: { name: "common-name" },
            },
            {
              name: "--cert-compartment-id",
              description: "The compartmentId of the leaf certificate",
              args: { name: "cert-compartment-id" },
            },
            optCertKeyAlgorithm,
            optCertSignatureAlgorithm,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--issuer-certificate-authority-id",
              description:
                "The certificateAuthorityId of subordinate/intermediate certificate authority",
              args: { name: "issuer-certificate-authority-id" },
            },
            optAddressee,
            optCareOf,
            optAddress1,
            optAddress2,
            optAddress3,
            optAddress4,
            optCityOrLocality,
            optStateProvinceRegion,
            optCountry,
            optZipPostalCode,
            optPhoneNumber,
            optEmail,
            {
              name: "--setup-identity",
              description:
                "Creating dynamic group and Assigning Policies for Rover node",
            },
            optPolicyCompartmentId,
            optPolicyName,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes a RoverNode resource by identifier",
          options: [
            optIfMatch,
            optForce2,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optNodeId,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "Updates the RoverNode",
          options: [
            optDisplayName2,
            {
              name: "--shape",
              description: "The shape of workloads in the node",
              args: { name: "shape" },
            },
            optPointOfContact,
            optPointOfContactPhoneNumber,
            optShippingPreference,
            {
              name: "--lifecycle-state",
              description: "The current state of the RoverNode",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optEnclosureType,
            optLifecycleStateDetails,
            {
              name: "--time-return-window-starts",
              description:
                "Start time for the window to pickup the device from customer",
              args: { name: "datetime" },
            },
            {
              name: "--time-return-window-ends",
              description:
                "End time for the window to pickup the device from customer",
              args: { name: "datetime" },
            },
            {
              name: "--certificate-authority-id",
              description:
                "The certificateAuthorityId of subordinate/intermediate certificate authority",
              args: { name: "certificate-authority-id" },
            },
            {
              name: "--time-cert-validity-end",
              description: "The time after which leaf certificate will invalid",
              args: { name: "datetime" },
            },
            {
              name: "--common-name",
              description: "The common name for the leaf certificate",
              args: { name: "common-name" },
            },
            {
              name: "--cert-compartment-id",
              description: "The compartmentId of the leaf certificate",
              args: { name: "cert-compartment-id" },
            },
            optCertKeyAlgorithm,
            optCertSignatureAlgorithm,
            optFreeformTags,
            optDefinedTags,
            optSystemTags,
            optIfMatch,
            optForce,
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optNodeId,
            optAddressee,
            optCareOf,
            optAddress1,
            optAddress2,
            optAddress3,
            optAddress4,
            optCityOrLocality,
            optStateProvinceRegion,
            optCountry,
            optZipPostalCode,
            optPhoneNumber,
            optEmail,
            optFromJson,
          ],
        },
        {
          name: "ca-bundle",
          description: "Rover Node Certificate Bundle",
          subcommands: [
            {
              name: "get",
              description: "Retrieve Ca Bundle for a rover node",
              options: [optRoverNodeId, optIfMatch, optFromJson],
            },
          ],
        },
        {
          name: "certificate",
          description: "Rover Node Certificate",
          subcommands: [
            {
              name: "create",
              description: "Request to generate certificate for a roverNode",
              options: [
                {
                  name: "--csr",
                  description:
                    "The certificate signing request (in PEM format), max size 10240",
                  args: { name: "csr" },
                  isRequired: true,
                },
                {
                  name: "--time-cert-validity-end",
                  description:
                    "Time when the generated certificate's validity will end",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                optRoverNodeId,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "update",
              description: "Request to renew certificate for a roverNode",
              options: [
                {
                  name: "--csr",
                  description:
                    "The certificate signing request (in PEM format), max size 10240",
                  args: { name: "csr" },
                  isRequired: true,
                },
                {
                  name: "--time-cert-validity-end",
                  description:
                    "Time when the renewed certificate's validity will end",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                optRoverNodeId,
                optIfMatch,
                optFromJson,
              ],
            },
            {
              name: "get-leaf-certificate",
              description:
                "Retrieve the leaf certificate info for a rover node",
              options: [optRoverNodeId, optIfMatch, optFromJson],
            },
          ],
        },
        {
          name: "certificate-authority",
          description: "Rover Node Certificate Authority",
          subcommands: [
            {
              name: "update-root-ca",
              description:
                "Request to replace certificate authority for a roverNode",
              options: [
                {
                  name: "--certificate-authority-id",
                  description: "The certificate authority id",
                  args: { name: "certificate-authority-id" },
                  isRequired: true,
                },
                optRoverNodeId,
                optCertKeyAlgorithm,
                optCertSignatureAlgorithm,
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "rover-bundle-request",
          description: "Rover Bundle Requests for Node",
          subcommands: [
            {
              name: "list",
              description:
                "List all the roverBundleRequests for a given roverNodeId",
              options: [
                optRoverNodeId,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description: "The field to sort by",
                  args: { suggestions: ["timeTaskCreated"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "rover-bundle",
          description: "Rover Bundle for Node",
          subcommands: [
            {
              name: "copy-to-customer",
              description:
                "Request to get rover bundle to the bucket in customer's tenancy",
              options: [
                {
                  name: "--destination-compartment-id",
                  description:
                    "The compartment OCID of destination compartment that the bundle will be copied to",
                  args: { name: "destination-compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--destination-bucket-name",
                  description:
                    "The destination bucket name the bundle will be copied to",
                  args: { name: "destination-bucket-name" },
                  isRequired: true,
                },
                {
                  name: "--bundle-version",
                  description:
                    "The bundle version that customer wants to upgrade to",
                  args: { name: "bundle-version" },
                  isRequired: true,
                },
                optRoverNodeId,
                {
                  name: "--wait-for-state",
                  description:
                    "Wait until the resource or work request reaches the given state",
                  args: {
                    suggestions: [
                      "ACCEPTED",
                      "IN_PROGRESS",
                      "WAITING",
                      "NEEDS_ATTENTION",
                      "FAILED",
                      "SUCCEEDED",
                      "CANCELING",
                      "CANCELED",
                    ],
                  },
                  isRepeatable: true,
                },
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get-status",
              description:
                "Retrieve the status and progress of a rover bundle copy request",
              options: [
                {
                  name: "--work-request-id",
                  description:
                    "The workRequestId for an async copyObject operation",
                  args: { name: "work-request-id" },
                  isRequired: true,
                },
                optRoverNodeId,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "rover-bundle-version",
          description: "Rover Bundle Version for Cluster",
          subcommands: [
            {
              name: "get",
              description:
                "Retrieve the latest available rover bundle version that can be upgraded to based on current bundle version",
              options: [
                {
                  name: "--current-rover-bundle-version",
                  description:
                    "The version of current rover bundle on customer's roverNode or roverCluster device",
                  args: { name: "current-rover-bundle-version" },
                  isRequired: true,
                },
                optRoverNodeId,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "show",
          description: "Gets a RoverNode by identifier",
          options: [
            {
              name: "--node-id",
              description: "Unique RoverCluster identifier",
              args: { name: "node-id" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "Returns a list of RoverNodes",
          options: [
            optCompartmentId,
            {
              name: "--display-name",
              description:
                "A filter to return only resources that match the entire display name given",
              args: { name: "display-name" },
            },
            {
              name: "--node-type",
              description:
                "A filter to return only Nodes of type matched with the given node type",
              args: { suggestions: ["STANDALONE", "CLUSTERED", "STATION"] },
            },
            {
              name: "--shape",
              description:
                "A filter to return only Nodes of type matched with the given node shape",
              args: { name: "shape" },
            },
            optLimit,
            optPage,
            {
              name: "--lifecycle-state",
              description:
                "A filter to return only resources their lifecycleState matches the given lifecycleState",
              args: {
                suggestions: [
                  "CREATING",
                  "UPDATING",
                  "ACTIVE",
                  "DELETING",
                  "DELETED",
                  "FAILED",
                ],
              },
            },
            optSortOrder,
            optSortBy,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "get-encryption-key",
          description: "Get the data encryption key for a rover node",
          options: [optNodeId, optFromJson],
        },
        {
          name: "get-certificate",
          description: "Get the certificate for a rover node",
          options: [optNodeId, optOutputFilePath, optFromJson],
        },
        {
          name: "request-approval",
          description: "Submit request for Rover Node",
          options: [optNodeId, optFromJson],
        },
        {
          name: "add-workload",
          description: "Add workload information to Rover Node",
          options: [
            optNodeId,
            optType,
            optImageId,
            optBucketName,
            optPrefix,
            optRangeStart,
            optRangeEnd,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "delete-workload",
          description: "Delete workload information from Rover Node",
          options: [optNodeId, optForce, optFromJson],
        },
        {
          name: "list-workload",
          description: "List workload information of Rover Node",
          options: [optNodeId, optFromJson],
        },
        {
          name: "set-secrets",
          description:
            "Assign super-user-password and unlock-password for Rover Node",
          options: [
            optNodeId,
            {
              name: "--super-user-password",
              description:
                "Assign super-user-password for RoverNode Identifier",
            },
            {
              name: "--unlock-passphrase",
              description: "Assign unlock-passphrase for RoverNode Identifier",
            },
            optFromJson,
          ],
        },
        {
          name: "setup-identity",
          description:
            "Creating dynamic group and Assigning Policies for Rover node",
          options: [optNodeId, optFromJson],
        },
      ],
    },
    {
      name: "shape",
      description: "A description of the RoverCloudService CLI",
      subcommands: [
        {
          name: "list",
          description: "Returns a list of Shapes",
          options: [
            optCompartmentId,
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
  ],
};

export default completionSpec;
