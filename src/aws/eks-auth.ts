const completionSpec: Fig.Spec = {
  name: "eks-auth",
  description:
    "The Amazon EKS Auth API and the AssumeRoleForPodIdentity action are only used by the EKS Pod Identity Agent",
  subcommands: [
    {
      name: "assume-role-for-pod-identity",
      description:
        "The Amazon EKS Auth API and the AssumeRoleForPodIdentity action are only used by the EKS Pod Identity Agent. We recommend that applications use the Amazon Web Services SDKs to connect to Amazon Web Services services; if credentials from an EKS Pod Identity association are available in the pod, the latest versions of the SDKs use them automatically",
      options: [
        {
          name: "--cluster-name",
          description: "The name of the cluster for the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--token",
          description:
            "The token of the Kubernetes service account for the pod",
          args: {
            name: "string",
          },
        },
        {
          name: "--eks-node-name",
          description:
            "The Kubernetes node name of the worker node where the pod is running",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The Amazon EC2 instance ID of the worker node where the pod is running",
          args: {
            name: "string",
          },
        },
        {
          name: "--zone",
          description:
            "The Availability Zone ID of the worker node where the pod is running",
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
  ],
};

export default completionSpec;
