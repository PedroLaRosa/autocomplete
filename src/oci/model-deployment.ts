// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const completionSpec: Fig.Spec = {
  name: "model-deployment",
  description: "Model Deployment Data Plane",
  subcommands: [
    {
      name: "inference-result",
      description:
        "A model used in x-related-resource for grouping actions with no returned body",
      subcommands: [
        {
          name: "predict",
          description:
            "Invoking a model deployment calls the predict endpoint of the model deployment URI",
          options: [
            {
              name: "--model-deployment-id",
              description: "The OCID of the model deployment",
              args: { name: "model-deployment-id" },
              isRequired: true,
            },
            {
              name: "--request-body",
              description: "Input data details for making a prediction call",
              args: { name: "request-body" },
              isRequired: true,
            },
            {
              name: "--from-json",
              description:
                "Provide input to this command as a JSON document from a file (file://path)",
              args: { name: "file://path" },
            },
          ],
        },
        {
          name: "predict-with-response-stream",
          description:
            "Invoking a model deployment calls the predictWithResponseStream endpoint of the model deployment URI to get",
          options: [
            {
              name: "--model-deployment-id",
              description: "The OCID of the model deployment",
              args: { name: "model-deployment-id" },
              isRequired: true,
            },
            {
              name: "--request-body",
              description: "Input data details for making a prediction call",
              args: { name: "request-body" },
              isRequired: true,
            },
            {
              name: "--file",
              description:
                "The name of the file that will receive the response data, or '-' to write to STDOUT",
              args: { name: "file", template: "filepaths" },
              isRequired: true,
            },
            {
              name: "--from-json",
              description:
                "Provide input to this command as a JSON document from a file (file://path)",
              args: { name: "file://path" },
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
