// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const optFromJson: Fig.Option = {
  name: "--from-json",
  description:
    "Provide input to this command as a JSON document from a file (file://path)",
  args: { name: "file://path" },
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
    "A token representing the position at which to start retrieving results",
  args: { name: "page" },
};
const optPageSize: Fig.Option = {
  name: "--page-size",
  description: "When fetching results, the number of results to fetch per call",
  args: { name: "integer" },
};
const optSortOrder: Fig.Option = {
  name: "--sort-order",
  description: "The sort order to use, either 'ASC' or 'DESC'",
  args: { suggestions: ["ASC", "DESC"] },
};
const optIfMatch: Fig.Option = {
  name: "--if-match",
  description: "For optimistic concurrency control",
  args: { name: "if-match" },
};
const optMaxWaitSeconds: Fig.Option = {
  name: "--max-wait-seconds",
  description:
    "Maximum time to wait for the --wait-for-state state (default 1200)",
  args: { name: "integer" },
};
const optWaitIntervalSeconds: Fig.Option = {
  name: "--wait-interval-seconds",
  description: "Check interval for --wait-for-state in seconds (default 30)",
  args: { name: "integer" },
};
const optCompartmentId: Fig.Option = {
  name: "--compartment-id",
  description:
    "The ocid of the compartment or tenancy in which resources are to be listed",
  args: { name: "compartment-id" },
  isRequired: true,
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
const optOccCustomerGroupId: Fig.Option = {
  name: "--occ-customer-group-id",
  description: "The customer group ocid by which we would filter the list",
  args: { name: "occ-customer-group-id" },
  isRequired: true,
};
const optDisplayName: Fig.Option = {
  name: "--display-name",
  description:
    "A filter to return only the resources that match the entire display name",
  args: { name: "display-name" },
};
const optForce: Fig.Option = {
  name: "--force",
  description: "Perform deletion without prompting for confirmation",
};
const optOccCustomerGroupId2: Fig.Option = {
  name: "--occ-customer-group-id",
  description: "The OCID of the customer group",
  args: { name: "occ-customer-group-id" },
  isRequired: true,
};
const optForce2: Fig.Option = {
  name: "--force",
  description: "Perform update without prompting for confirmation",
};
const optOccAvailabilityCatalogId: Fig.Option = {
  name: "--occ-availability-catalog-id",
  description: "The OCID of the availability catalog",
  args: { name: "occ-availability-catalog-id" },
  isRequired: true,
};
const optOccCapacityRequestId: Fig.Option = {
  name: "--occ-capacity-request-id",
  description: "The OCID of the capacity request",
  args: { name: "occ-capacity-request-id" },
  isRequired: true,
};
const optWaitForState2: Fig.Option = {
  name: "--wait-for-state",
  description:
    "Wait until the resource or work request reaches the given state",
  args: {
    suggestions: [
      "CREATING",
      "ACTIVE",
      "UPDATING",
      "DELETED",
      "DELETING",
      "FAILED",
    ],
  },
  isRepeatable: true,
};
const optDsId: Fig.Option = {
  name: "--ds-id",
  description: "The OCID of the demand signal",
  args: { name: "ds-id" },
  isRequired: true,
};
const optNamespace: Fig.Option = {
  name: "--namespace",
  description: "The namespace by which we would filter the list",
  args: { suggestions: ["COMPUTE"] },
};
const optId: Fig.Option = {
  name: "--id",
  description:
    "A query parameter to filter the list of demand signals based on it's OCID",
  args: { name: "id" },
};
const optSortBy: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["displayName", "timeCreated"] },
};
const optSortBy2: Fig.Option = {
  name: "--sort-by",
  description: "The field to sort by",
  args: { suggestions: ["handoverDate"] },
};
const optCompartmentId2: Fig.Option = {
  name: "--compartment-id",
  description:
    "Since all resources are at tenancy level hence this will be the ocid of the tenancy where operation is to",
  args: { name: "compartment-id" },
  isRequired: true,
};
const optDsDeliveryId: Fig.Option = {
  name: "--ds-delivery-id",
  description: "The OCID of the demand signal delivery",
  args: { name: "ds-delivery-id" },
  isRequired: true,
};
const optDsItemId: Fig.Option = {
  name: "--ds-item-id",
  description: "The OCID of the demand signal item",
  args: { name: "ds-item-id" },
  isRequired: true,
};
const optLifecycleDetails: Fig.Option = {
  name: "--lifecycle-details",
  description: "A message describing the current state in more detail",
  args: { name: "lifecycle-details" },
};
const optStatus: Fig.Option = {
  name: "--status",
  description: "To determine whether the customer group is enabled/disabled",
  args: { suggestions: ["ENABLED", "DISABLED"] },
};
const optWorkloadType: Fig.Option = {
  name: "--workload-type",
  description:
    "Workload type using the resources in an availability catalog can be filtered",
  args: { name: "workload-type" },
};
const completionSpec: Fig.Spec = {
  name: "capacity-management",
  description: "OCI Control Center Capacity Management",
  subcommands: [
    {
      name: "occ-customer-group-collection",
      description: "A list of customer groups",
      subcommands: [
        {
          name: "list",
          description: "Lists all the customer groups",
          options: [
            optCompartmentId,
            {
              name: "--status",
              description:
                "A query filter to return the list result based on status",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            optDisplayName,
            {
              name: "--id",
              description:
                "A query filter to return the list result based on the customer group OCID",
              args: { name: "id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["compartmentId", "name", "timeCreated"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "occ-capacity-request",
      description:
        "A single request of some quantity of a specific server type",
      subcommands: [
        {
          name: "create",
          description: "Create Capacity Request",
          options: [
            optCompartmentId2,
            {
              name: "--namespace",
              description: "The name of the OCI service in consideration",
              args: { suggestions: ["COMPUTE"] },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "An user-friendly name for the capacity request",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--date-expected-capacity-handover",
              description:
                "The date by which the capacity requested by customers before dateFinalCustomerOrder needs to be fulfilled",
              args: { name: "datetime" },
              isRequired: true,
            },
            {
              name: "--details",
              description:
                "A list of different resources requested by the user",
              args: { name: "json" },
              isRequired: true,
            },
            {
              name: "--occ-availability-catalog-id",
              description:
                "The OCID of the availability catalog against which capacity request is made",
              args: { name: "occ-availability-catalog-id" },
            },
            {
              name: "--request-type",
              description: "Type of Capacity Request(New or Transfer)",
              args: { name: "request-type" },
            },
            {
              name: "--description",
              description: "Meaningful text about the capacity request",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optLifecycleDetails,
            {
              name: "--availability-domain",
              description:
                "The availability domain (AD) in which the new resource is to be placed",
              args: { name: "availability-domain" },
            },
            {
              name: "--request-state",
              description:
                "The subset of request states available for creating the capacity request",
              args: { suggestions: ["CREATED", "SUBMITTED"] },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            {
              name: "--target-region",
              description:
                "The name of the region for which the capacity request is made. required",
              args: { name: "target-region" },
              isRequired: true,
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the capacity request resource",
          options: [
            optOccCapacityRequestId,
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
          description: "Get details about the capacity request",
          options: [optOccCapacityRequestId, optFromJson],
        },
        {
          name: "patch-internal",
          description:
            "Updates the OccCapacityRequest by evaluating a sequence of instructions",
          options: [
            optOccCapacityRequestId,
            {
              name: "--items",
              description: "List of patch instructions",
              args: { name: "json" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "patch",
          description:
            "Updates the OccCapacityRequest by evaluating a sequence of instructions",
          options: [
            optOccCapacityRequestId,
            {
              name: "--items",
              description: "List of patch instructions",
              args: { name: "json" },
            },
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update-internal",
          description: "The internal api to update the capacity request",
          options: [
            optOccCapacityRequestId,
            {
              name: "--request-state",
              description:
                "The subset of request states available internally for updating the capacity request",
              args: { suggestions: ["RESOLVED", "REJECTED", "IN_PROGRESS"] },
            },
            optLifecycleDetails,
            optIfMatch,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "The request to update the capacity request",
          options: [
            optOccCapacityRequestId,
            {
              name: "--display-name",
              description: "The display name of the capacity request",
              args: { name: "display-name" },
            },
            optFreeformTags,
            optDefinedTags,
            {
              name: "--request-state",
              description:
                "The subset of request states available for updating the capacity request",
              args: { suggestions: ["SUBMITTED", "CANCELLED"] },
            },
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
      name: "occ-availability-catalog",
      description: "Details of the availability catalog resource",
      subcommands: [
        {
          name: "create",
          description: "Create availability catalog",
          options: [
            optOccCustomerGroupId2,
            {
              name: "--namespace",
              description: "The name of the OCI service in consideration",
              args: { suggestions: ["COMPUTE"] },
              isRequired: true,
            },
            optCompartmentId2,
            {
              name: "--base64-encoded-catalog-details",
              description:
                "The base 64 encoded string corresponding to the catalog file contents",
              args: { name: "base64-encoded-catalog-details" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the availability catalog",
              args: { name: "display-name" },
              isRequired: true,
            },
            { name: "--metadata-details", args: { name: "json" } },
            {
              name: "--description",
              description:
                "Additional information about the availability catalog",
              args: { name: "description" },
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
          description: "Deletes the availability catalog resource",
          options: [
            optOccAvailabilityCatalogId,
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
          description: "Get details about availability catalog",
          options: [optOccAvailabilityCatalogId, optFromJson],
        },
        {
          name: "publish",
          description:
            "Publishes the version of availability catalog specified by the operator",
          options: [optOccAvailabilityCatalogId, optIfMatch, optFromJson],
        },
        {
          name: "update",
          description: "The request to update the availability catalog",
          options: [
            optOccAvailabilityCatalogId,
            {
              name: "--display-name",
              description: "The display name of the availability catalog",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description:
                "Additional information about the availability catalog",
              args: { name: "description" },
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
        {
          name: "get-catalog-content",
          description:
            "Returns the binary contents of the availability catalog",
          options: [
            optOccAvailabilityCatalogId,
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "occ-capacity-request-collection",
      description: "A list of capacity requests",
      subcommands: [
        {
          name: "list",
          description: "Lists all capacity requests",
          options: [
            optCompartmentId,
            {
              name: "--occ-availability-catalog-id",
              description:
                "A filter to return the list of capacity requests based on the OCID of the availability catalog against",
              args: { name: "occ-availability-catalog-id" },
            },
            optNamespace,
            {
              name: "--request-type",
              description:
                "A filter to return only the resources that match the request type",
              args: { suggestions: ["NEW", "TRANSFER"] },
            },
            optDisplayName,
            {
              name: "--id",
              description:
                "A filter to return the list of capacity requests based on the OCID of the capacity request",
              args: { name: "id" },
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
        {
          name: "list-internal",
          description: "An internal api to list all capacity requests",
          options: [
            optCompartmentId,
            optOccCustomerGroupId,
            {
              name: "--occ-availability-catalog-id",
              description:
                "A filter to return the list of capacity requests based on the OCID of the availability catalog against",
              args: { name: "occ-availability-catalog-id" },
            },
            optNamespace,
            optDisplayName,
            {
              name: "--request-type",
              description:
                "A filter to return only the resources that match the request type",
              args: { suggestions: ["NEW", "TRANSFER"] },
            },
            {
              name: "--id",
              description:
                "A filter to return the list of capacity requests based on the OCID of the capacity request",
              args: { name: "id" },
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
      name: "occ-handover-resource-block-collection",
      description: "A list of occ handover resource blocks",
      subcommands: [
        {
          name: "list-internal",
          description: "List Occ Handover Resource blocks",
          options: [
            {
              name: "--namespace",
              description:
                "The namespace enum value that needs to be passed as a required query parameter",
              args: { suggestions: ["COMPUTE"] },
              isRequired: true,
            },
            optCompartmentId,
            optOccCustomerGroupId,
            {
              name: "--handover-resource-name",
              description:
                "A filter to return only the list of resources that match the name provided in this filter",
              args: { name: "handover-resource-name" },
            },
            {
              name: "--handover-date-greater-than-or-equal-to",
              description:
                "This filter helps in fetching all handed over resources for which the recordDate is greater than or equal",
              args: { name: "datetime" },
            },
            {
              name: "--handover-date-less-than-or-equal-to",
              description:
                "This filter helps in fetching all handed over resources for which the recordDate is less than or equal to",
              args: { name: "datetime" },
            },
            {
              name: "--occ-handover-resource-block-id",
              description:
                "This filter helps in fetching the handed over resource for which the occHandoverResourceId is equal to",
              args: { name: "occ-handover-resource-block-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "List Occ Handover Resource blocks",
          options: [
            optNamespace,
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment or tenancy in which resources are to be listed",
              args: { name: "compartment-id" },
            },
            {
              name: "--handover-resource-name",
              description:
                "A filter to return only the list of resources that match the name provided in this filter",
              args: { name: "handover-resource-name" },
            },
            {
              name: "--handover-date-greater-than-or-equal-to",
              description:
                "This filter helps in fetching all handed over resources for which the recordDate is greater than or equal",
              args: { name: "datetime" },
            },
            {
              name: "--handover-date-less-than-or-equal-to",
              description:
                "This filter helps in fetching all handed over resources for which the recordDate is less than or equal to",
              args: { name: "datetime" },
            },
            {
              name: "--occ-handover-resource-block-id",
              description:
                "This filter helps in fetching the handed over resource for which the occHandoverResourceId is equal to",
              args: { name: "occ-handover-resource-block-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "occ-availability-catalog-collection",
      description: "A list of availability catalogs",
      subcommands: [
        {
          name: "list",
          description: "Lists all availability catalogs",
          options: [
            optCompartmentId,
            optNamespace,
            {
              name: "--id",
              description:
                "The OCID of the availability catalog to filter the list of availability catalogs",
              args: { name: "id" },
            },
            optDisplayName,
            {
              name: "--catalog-state",
              description:
                "Filter the list of availability catalogs based on the catalog state",
              args: {
                suggestions: [
                  "NOT_UPLOADED",
                  "UPLOAD_FAILED",
                  "STAGED",
                  "PUBLISHED",
                  "OUTDATED",
                  "DELETED",
                ],
              },
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
        {
          name: "list-internal",
          description: "An internal api to list availability catalogs",
          options: [
            optCompartmentId,
            optOccCustomerGroupId,
            optNamespace,
            {
              name: "--id",
              description:
                "The OCID of the availability catalog to filter the list of availability catalogs",
              args: { name: "id" },
            },
            optDisplayName,
            {
              name: "--catalog-state",
              description:
                "Filter the list of availability catalogs based on the catalog state",
              args: {
                suggestions: [
                  "NOT_UPLOADED",
                  "UPLOAD_FAILED",
                  "STAGED",
                  "PUBLISHED",
                  "OUTDATED",
                  "DELETED",
                ],
              },
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
      name: "occ-customer",
      description: "The details about the customer",
      subcommands: [
        {
          name: "create",
          description: "Create customer",
          options: [
            {
              name: "--tenancy-id",
              description: "The OCID of the tenancy belonging to the customer",
              args: { name: "tenancy-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name for the customer",
              args: { name: "display-name" },
              isRequired: true,
            },
            optOccCustomerGroupId2,
            {
              name: "--description",
              description: "The description about the customer group",
              args: { name: "description" },
            },
            {
              name: "--status",
              description:
                "To determine whether the customer is enabled/disabled",
              args: { suggestions: ["ENABLED", "DISABLED"] },
            },
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the customer resource",
          options: [
            optOccCustomerGroupId2,
            {
              name: "--occ-customer-id",
              description: "The tenancy id of the customer",
              args: { name: "occ-customer-id" },
              isRequired: true,
            },
            optIfMatch,
            optForce,
            optFromJson,
          ],
        },
        {
          name: "update",
          description: "The request to update the customer",
          options: [
            optOccCustomerGroupId2,
            {
              name: "--occ-customer-id",
              description: "The tenancy id of the customer",
              args: { name: "occ-customer-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "The display name of the customer",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Additional information about the customer",
              args: { name: "description" },
            },
            optStatus,
            optIfMatch,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "occ-customer-group",
      description: "Details of the customer group resource",
      subcommands: [
        {
          name: "create",
          description: "Create customer group",
          options: [
            optCompartmentId2,
            {
              name: "--display-name",
              description: "The name of the customer group",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description about the customer group",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optLifecycleDetails,
            optStatus,
            {
              name: "--customers-list",
              description:
                "A list containing all the customers that belong to this customer group",
              args: { name: "json" },
            },
            optWaitForState,
            optMaxWaitSeconds,
            optWaitIntervalSeconds,
            optFromJson,
          ],
        },
        {
          name: "delete",
          description: "Deletes the customer group resource",
          options: [
            optOccCustomerGroupId2,
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
          description: "Gets information about the specified customer group",
          options: [optOccCustomerGroupId2, optFromJson],
        },
        {
          name: "update",
          description: "The request to update the customer group",
          options: [
            optOccCustomerGroupId2,
            {
              name: "--display-name",
              description: "The display name of the customer group",
              args: { name: "display-name" },
            },
            {
              name: "--description",
              description: "Additional information about the customer group",
              args: { name: "description" },
            },
            optFreeformTags,
            optDefinedTags,
            optStatus,
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
      name: "occ-handover-resource-block-detail-collection",
      description: "A list of occResourceHandoverDetails",
      subcommands: [
        {
          name: "list-internal",
          description: "List details about a given occHandoverResourceBlock",
          options: [
            {
              name: "--occ-handover-resource-block-id",
              description:
                "The OCID of the OccHandoverResource which is a required query parameter for listing",
              args: { name: "occ-handover-resource-block-id" },
              isRequired: true,
            },
            {
              name: "--host-id",
              description:
                "This fiter is applicable only for COMPUTE namespace",
              args: { name: "host-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description: "List details about a given occHandoverResourceBlock",
          options: [
            {
              name: "--occ-handover-resource-block-id",
              description:
                "The OCID of the OccHandoverResource which is a required query parameter for listing",
              args: { name: "occ-handover-resource-block-id" },
              isRequired: true,
            },
            {
              name: "--host-id",
              description:
                "This fiter is applicable only for COMPUTE namespace",
              args: { name: "host-id" },
            },
            optLimit,
            optPage,
            optSortOrder,
            optSortBy2,
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "occ-overview-collection",
      description: "A list representing response of overview API",
      subcommands: [
        {
          name: "list-internal-namespace-occ-overviews",
          description:
            "Lists an overview of all resources in that namespace in a given time interval",
          options: [
            {
              name: "--namespace",
              description: "The namespace by which we would filter the list",
              args: { suggestions: ["COMPUTE"] },
              isRequired: true,
            },
            optCompartmentId,
            optOccCustomerGroupId,
            optWorkloadType,
            {
              name: "---from",
              description:
                "The month corresponding to this date would be considered as the starting point of the time period against",
              args: { name: "datetime" },
            },
            {
              name: "--to",
              description:
                "The month corresponding to this date would be considered as the ending point of the time period against",
              args: { name: "datetime" },
            },
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["periodValue"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
        {
          name: "list",
          description:
            "Lists an overview of all resources in that namespace in a given time interval",
          options: [
            {
              name: "--namespace",
              description: "The namespace by which we would filter the list",
              args: { suggestions: ["COMPUTE"] },
              isRequired: true,
            },
            optCompartmentId,
            {
              name: "---from",
              description:
                "The month corresponding to this date would be considered as the starting point of the time period against",
              args: { name: "datetime" },
            },
            {
              name: "--to",
              description:
                "The month corresponding to this date would be considered as the ending point of the time period against",
              args: { name: "datetime" },
            },
            optWorkloadType,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: { suggestions: ["periodValue"] },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "occ-availability-collection",
      description: "A list of capacity constraints",
      subcommands: [
        {
          name: "list",
          description:
            "Lists availabilities for a particular availability catalog",
          options: [
            optOccAvailabilityCatalogId,
            {
              name: "--date-expected-capacity-handover",
              description:
                "The capacity handover date of the capacity constraint to filter the list of capacity constraints",
              args: { name: "date-expected-capacity-handover" },
            },
            {
              name: "--resource-name",
              description:
                "The name of the resource to filter the list of capacity constraints",
              args: { name: "resource-name" },
            },
            {
              name: "--resource-type",
              description:
                "Resource type using which the capacity constraints of an availability catalog can be filtered",
              args: { name: "resource-type" },
            },
            optWorkloadType,
            optLimit,
            optPage,
            optSortOrder,
            {
              name: "--sort-by",
              description: "The field to sort by",
              args: {
                suggestions: ["dateExpectedCapacityHandover", "resourceName"],
              },
            },
            optAll,
            optPageSize,
            optFromJson,
          ],
        },
      ],
    },
    {
      name: "demand-signal",
      description:
        "OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI",
      subcommands: [
        {
          name: "occm-demand-signal-item",
          description:
            "An occm demand signal item is a resource that is used to communicate the forecasting need for a particular",
          subcommands: [
            {
              name: "bulk-create",
              description:
                "This API will help in bulk creation of demand signal items",
              options: [
                {
                  name: "--ds-id",
                  description:
                    "The OCID of the demand signal in which we want to bulk create these demand signal item resources",
                  args: { name: "ds-id" },
                  isRequired: true,
                },
                {
                  name: "--create-items",
                  description:
                    "A list of demand signal items that we want to bulk create",
                  args: { name: "json" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "create",
              description:
                "This API will create a demand signal item representing a resource request",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the tenancy from which the demand signal item was created",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--ds-id",
                  description:
                    "The OCID of the demand signal under which we need to create this item",
                  args: { name: "ds-id" },
                  isRequired: true,
                },
                {
                  name: "--ds-catalog-resource-id",
                  description:
                    "The OCID of the correponding demand signal catalog resource",
                  args: { name: "ds-catalog-resource-id" },
                  isRequired: true,
                },
                {
                  name: "--request-type",
                  description:
                    "The type of request (DEMAND or RETURN) that you want to make for this demand signal item",
                  args: { suggestions: ["DEMAND"] },
                  isRequired: true,
                },
                {
                  name: "--demand-quantity",
                  description:
                    "The quantity of the resource that you want to demand from OCI",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--time-needed-before",
                  description:
                    "The date before which you would ideally like the OCI resource to be delivered to you",
                  args: { name: "datetime" },
                  isRequired: true,
                },
                {
                  name: "--resource-properties",
                  description:
                    "A map of various properties associated with the OCI resource",
                  args: { name: "json" },
                  isRequired: true,
                },
                {
                  name: "--ad",
                  description:
                    "The name of the availability domain for which you want to request the OCI resource",
                  args: { name: "ad" },
                },
                {
                  name: "--target-compartment-id",
                  description:
                    "The OCID of the tenancy for which you want to request the OCI resource for",
                  args: { name: "target-compartment-id" },
                },
                {
                  name: "--notes",
                  description: "This field will serve as notes section for you",
                  args: { name: "notes" },
                },
                optFreeformTags,
                optDefinedTags,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--target-region",
                  description:
                    "The name of region for which you want to request the OCI resource. required",
                  args: { name: "target-region" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
            {
              name: "delete",
              description:
                "This is a DELETE API which deletes a demand signal item with the provided demand signal item ocid",
              options: [
                optDsItemId,
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
                "This is a GET API to get the details of a demand signal item resource representing the details of",
              options: [optDsItemId, optFromJson],
            },
            {
              name: "list",
              description:
                "This API will list the detailed information about the resources demanded as part of the demand signal",
              options: [
                optCompartmentId,
                {
                  name: "--ds-id",
                  description:
                    "A query parameter to filter the list of demand signal items based on a demand signal id",
                  args: { name: "ds-id" },
                },
                {
                  name: "--resource-name",
                  description:
                    "A query parameter to filter the list of demand signal details based on the resource name",
                  args: { name: "resource-name" },
                },
                {
                  name: "--namespace",
                  description:
                    "A query parameter to filter the list of demand signal details based on the namespace",
                  args: {
                    suggestions: ["COMPUTE", "NETWORK", "GPU", "STORAGE"],
                  },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description:
                    "The field to sort the response of List Demand Signal Details API",
                  args: { suggestions: ["resourceName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "This is a PUT API which can be used to update the demand signal item resource",
              options: [
                optDsItemId,
                {
                  name: "--ad",
                  description:
                    "The name of the availability domain for which you want to request the OCI resource",
                  args: { name: "ad" },
                },
                {
                  name: "--target-compartment-id",
                  description:
                    "The OCID of the tenancy for which you want to request the OCI resource for",
                  args: { name: "target-compartment-id" },
                },
                {
                  name: "--demand-quantity",
                  description:
                    "The quantity of the resource that you want to demand from OCI",
                  args: { name: "integer" },
                },
                {
                  name: "--time-needed-before",
                  description:
                    "The date before which you would ideally like the OCI resource to be delivered to you",
                  args: { name: "datetime" },
                },
                {
                  name: "--resource-properties",
                  description:
                    "A map of various properties associated with the OCI resource",
                  args: { name: "json" },
                },
                {
                  name: "--notes",
                  description: "This field will serve as notes section for you",
                  args: { name: "notes" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                {
                  name: "--target-region",
                  description:
                    "The region for which you want to request the resource for",
                  args: { name: "target-region" },
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "occm-demand-signal",
          description:
            "An occm demand signal is a resource that communicates the forecasting needs of a customer to OCI in advance",
          subcommands: [
            {
              name: "create",
              description: "This is a post API to create occm demand signal",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the tenancy where we would like to create a demand signal",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "The user-friendly name of the demand signal",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "A short description of the demand signal",
                  args: { name: "description" },
                },
                optFreeformTags,
                optDefinedTags,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description:
                "This is a DELETE API which deletes a demand signal with the provided demand signal ocid",
              options: [
                optDsId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "This is a GET API which gets the detailed information about a specific demand signal",
              options: [optDsId, optFromJson],
            },
            {
              name: "list",
              description:
                "This GET call is used to list all demand signals within the compartment passed as a query parameter",
              options: [
                optCompartmentId,
                optId,
                {
                  name: "--lifecycle-details",
                  description:
                    "A query parameter to filter the list of demand signals based on its state",
                  args: { name: "lifecycle-details" },
                },
                optDisplayName,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description:
                    "The field to sort the response of List Demand Signal API",
                  args: { suggestions: ["timeCreated", "displayName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "This is a PUT API which shall be used to update the metadata of the demand signal",
              options: [
                optDsId,
                {
                  name: "--display-name",
                  description:
                    "Use this field to update the display name of the demand signal",
                  args: { name: "display-name" },
                },
                optFreeformTags,
                optDefinedTags,
                {
                  name: "--description",
                  description:
                    "Use this field to update the description of the demand signal",
                  args: { name: "description" },
                },
                {
                  name: "--lifecycle-details",
                  description:
                    "The subset of demand signal states available for updating the demand signal",
                  args: { suggestions: ["SUBMITTED"] },
                },
                optIfMatch,
                optForce2,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "occm-demand-signal-catalog-resource",
          description:
            "A model containing information about the details of a demand signal catalog resource",
          subcommands: [
            {
              name: "list",
              description:
                "This API will list all the resources across all demand signal catalogs for a given namespace and customer",
              options: [
                optCompartmentId,
                {
                  name: "--name",
                  description:
                    "A query parameter to filter the list of demand signal catalog resource based on the resource name",
                  args: { name: "name" },
                },
                {
                  name: "--namespace",
                  description:
                    "A query parameter to filter the list of demand signal catalog resources based on the namespace",
                  args: {
                    suggestions: ["COMPUTE", "NETWORK", "GPU", "STORAGE"],
                  },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description:
                    "The field to sort the response of List Demand catalog resources API",
                  args: { suggestions: ["name"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "occm-demand-signal-delivery-collection",
          description:
            "A list containing detailed delivery information about different resource demanded as part of the demand",
          subcommands: [
            {
              name: "list",
              description:
                "This GET call is used to list all demand signals delivery resources within the compartment passed as a query",
              options: [
                optCompartmentId,
                optId,
                {
                  name: "--ds-item-id",
                  description:
                    "A query parameter to filter the list of demand signal items based on it's OCID",
                  args: { name: "ds-item-id" },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description:
                    "The field to sort the response of List Demand Signal Delivery API",
                  args: { suggestions: ["resourceName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "internal-demand-signal",
      description:
        "OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI",
      subcommands: [
        {
          name: "internal-occm-demand-signal-delivery",
          description:
            "An internal model that contains information about the demand signal item delivery from OCI to customers",
          subcommands: [
            {
              name: "create",
              description:
                "This is a post API which is used to create a demand signal delivery resource. operationId",
              options: [
                {
                  name: "--compartment-id",
                  description:
                    "The OCID of the tenancy from which the demand signal delivery resource is created",
                  args: { name: "compartment-id" },
                  isRequired: true,
                },
                {
                  name: "--occ-customer-group-id",
                  description:
                    "The OCID of the corresponding customer group to which this demand signal delivery resource belongs to",
                  args: { name: "occ-customer-group-id" },
                  isRequired: true,
                },
                {
                  name: "--ds-id",
                  description:
                    "The OCID of the demand signal under which this delivery will be grouped",
                  args: { name: "ds-id" },
                  isRequired: true,
                },
                {
                  name: "--ds-item-id",
                  description:
                    "The OCID of the demand signal item corresponding to which this delivery is made",
                  args: { name: "ds-item-id" },
                  isRequired: true,
                },
                {
                  name: "--accepted-quantity",
                  description:
                    "The quantity of the resource that OCI will supply to the customer",
                  args: { name: "integer" },
                  isRequired: true,
                },
                {
                  name: "--justification",
                  description:
                    "This field could be used by OCI to communicate the reason for declining the request",
                  args: { name: "justification" },
                },
                {
                  name: "--notes",
                  description:
                    "This field acts as a notes section for operators",
                  args: { name: "notes" },
                },
                optFreeformTags,
                optDefinedTags,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "delete",
              description:
                "This is an internal DELETE API which is used to delete a demand signal delivery resource",
              options: [
                optDsDeliveryId,
                optIfMatch,
                optForce,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
            {
              name: "get",
              description:
                "This is an internal GET API to get the details of a demand signal delivery resource corresponding to a demand",
              options: [optDsDeliveryId, optFromJson],
            },
            {
              name: "list",
              description:
                "This GET call is used to list all demand signal delivery resources within the customer group passed as",
              options: [
                optCompartmentId,
                optOccCustomerGroupId,
                optId,
                {
                  name: "--ds-item-id",
                  description:
                    "A query parameter to filter the list of demand signal items based on it's OCID",
                  args: { name: "ds-item-id" },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description:
                    "The field to sort the response of List Demand Signal Delivery API",
                  args: { suggestions: ["resourceName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "This is an internal PUT API which is used to update the demand signal delivery resource",
              options: [
                optDsDeliveryId,
                {
                  name: "--accepted-quantity",
                  description:
                    "The quantity of the resource that OCI will supply to the customer",
                  args: { name: "integer" },
                },
                {
                  name: "--lifecycle-details",
                  description:
                    "The state in which we want to transition the demand signal delivery resource",
                  args: { name: "lifecycle-details" },
                },
                {
                  name: "--time-delivered",
                  description:
                    "The date on which the OCI delivered the resource to the customers",
                  args: { name: "datetime" },
                },
                {
                  name: "--justification",
                  description:
                    "This field could be used by OCI to communicate the reason for declining the request",
                  args: { name: "justification" },
                },
                {
                  name: "--notes",
                  description:
                    "This field acts as a notes section for operators",
                  args: { name: "notes" },
                },
                optFreeformTags,
                optDefinedTags,
                optIfMatch,
                optForce2,
                optWaitForState2,
                optMaxWaitSeconds,
                optWaitIntervalSeconds,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "occm-demand-signal-catalog",
          description: "A model for the demand signal catalog",
          subcommands: [
            {
              name: "list-internal",
              description:
                "This API will list demand signal catalogs for a given customer group",
              options: [
                optCompartmentId,
                optOccCustomerGroupId,
                optDisplayName,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description:
                    "The field to sort the response of List Demand catalog API",
                  args: { suggestions: ["name"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "internal-occm-demand-signal-item-collection",
          description:
            "A list containing detailed information about different resources demanded as part of a given demand signal",
          subcommands: [
            {
              name: "list-internal",
              description:
                "This internal API will list the detailed information about the resources demanded as part of the demand",
              options: [
                optCompartmentId,
                optOccCustomerGroupId,
                {
                  name: "--ds-id",
                  description:
                    "A query parameter to filter the list of demand signal items based on a demand signal id",
                  args: { name: "ds-id" },
                },
                {
                  name: "--resource-name",
                  description:
                    "A query parameter to filter the list of demand signal details based on the resource name",
                  args: { name: "resource-name" },
                },
                {
                  name: "--namespace",
                  description:
                    "A query parameter to filter the list of demand signal details based on the namespace",
                  args: {
                    suggestions: ["COMPUTE", "NETWORK", "GPU", "STORAGE"],
                  },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description:
                    "The field to sort the response of List Demand Signal Details API",
                  args: { suggestions: ["resourceName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "internal-occm-demand-signal",
          description: "An internal model describing the demand signal",
          subcommands: [
            {
              name: "get",
              description:
                "This is an internal GET API which gets the detailed information about a specific demand signal",
              options: [optDsId, optFromJson],
            },
            {
              name: "list",
              description:
                "This is an internal GET call is used to list all demand signals within the compartment passed as a query",
              options: [
                optCompartmentId,
                optOccCustomerGroupId,
                optId,
                {
                  name: "--lifecycle-details",
                  description:
                    "A query parameter to filter the list of demand signals based on its state",
                  args: { name: "lifecycle-details" },
                },
                optDisplayName,
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description:
                    "The field to sort the response of List Demand Signal API",
                  args: { suggestions: ["timeCreated", "displayName"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
            {
              name: "update",
              description:
                "This is a internal PUT API which shall be used to update the metadata of the demand signal",
              options: [
                optDsId,
                {
                  name: "--lifecycle-details",
                  description:
                    "The subset of demand signal states available for operators for updating the demand signal",
                  args: {
                    suggestions: ["IN_PROGRESS", "COMPLETED", "REJECTED"],
                  },
                },
                optIfMatch,
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "occm-demand-signal-catalog-resource",
          description:
            "A model containing information about the details of a demand signal catalog resource",
          subcommands: [
            {
              name: "get",
              description:
                "This API helps in getting the details about a specific occm demand signal catalog",
              options: [
                {
                  name: "--ds-catalog-id",
                  description: "The OCID of the demand signal catalog",
                  args: { name: "ds-catalog-id" },
                  isRequired: true,
                },
                optFromJson,
              ],
            },
          ],
        },
        {
          name: "internal-occm-demand-signal-catalog-resource",
          description:
            "A model containing information about the details of a demand signal catalog resource",
          subcommands: [
            {
              name: "list",
              description:
                "This API will list all the resources across all demand signal catalogs for a given namespace and customer",
              options: [
                optCompartmentId,
                optOccCustomerGroupId,
                {
                  name: "--ds-catalog-id",
                  description: "The ocid of demand signal catalog id",
                  args: { name: "ds-catalog-id" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description:
                    "A query parameter to filter the list of demand signal catalog resource based on the resource name",
                  args: { name: "name" },
                },
                {
                  name: "--namespace",
                  description:
                    "A query parameter to filter the list of demand signal catalog resources based on the namespace",
                  args: {
                    suggestions: ["COMPUTE", "NETWORK", "GPU", "STORAGE"],
                  },
                },
                optLimit,
                optPage,
                optSortOrder,
                {
                  name: "--sort-by",
                  description:
                    "The field to sort the response of List Demand catalog resources API",
                  args: { suggestions: ["name"] },
                },
                optAll,
                optPageSize,
                optFromJson,
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
