const completionSpec: Fig.Spec = {
  name: "connect-contact-lens",
  description:
    "Contact Lens actions     Contact Lens data types    Amazon Connect Contact Lens enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts. Amazon Connect Contact Lens provides both real-time and post-call analytics of customer-agent conversations. For more information, see Analyze conversations using speech analytics in the Amazon Connect Administrator Guide",
  subcommands: [
    {
      name: "list-realtime-contact-analysis-segments",
      description:
        "Provides a list of analysis segments for a real-time analysis session for voice.  Voice data is retained for 24 hours. You must invoke this API during that time",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--list-filter",
          description:
            "A filter that limits the category segments returned by the operation. When provided, use CategoriesAttributeFilter to return only the category segments whose rules have tags that match the filter. This enforces tag-based access control on the categories that the caller can view",
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
  ],
};

export default completionSpec;
