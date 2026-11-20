// Generated from the oci-cli 3.96.3 command tree (see src/oci.ts header).
const completionSpec: Fig.Spec = {
  name: "email-data-plane",
  description: "Email Delivery Submission",
  subcommands: [
    {
      name: "email-submitted-response",
      description:
        "Response object that is returned to sender upon successfully submitting the email request",
      subcommands: [
        {
          name: "submit-email",
          description: "Submits a formatted email",
          options: [
            { name: "--sender", args: { name: "json" }, isRequired: true },
            { name: "--recipients", args: { name: "json" }, isRequired: true },
            {
              name: "--subject",
              description:
                "A short summary of the content, which will appear in the recipient's inbox",
              args: { name: "subject" },
              isRequired: true,
            },
            {
              name: "--message-id",
              description:
                "The unique ID for the email's Message-ID header used for service log correlation",
              args: { name: "message-id" },
            },
            {
              name: "--body-html",
              description: "HTML body content in UTF-8",
              args: { name: "body-html" },
            },
            {
              name: "--body-text",
              description: "Text body content",
              args: { name: "body-text" },
            },
            {
              name: "--reply-to",
              description: "The email address for the recipient to reply to",
              args: { name: "json" },
            },
            {
              name: "--header-fields",
              description: "The header used by the customer for the email sent",
              args: { name: "json" },
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
    {
      name: "email-raw-submitted-response",
      description:
        "Response object that is returned to sender upon successfully submitting the email request",
      subcommands: [
        {
          name: "submit-raw-email",
          description: "Submits a raw email",
          options: [
            {
              name: "--content-type",
              description: "The media type of the body",
              args: { suggestions: ["message/rfc822", "message/global"] },
              isRequired: true,
            },
            {
              name: "--compartment-id",
              description:
                "The OCID of the compartment that contains the approved sender resource",
              args: { name: "compartment-id" },
              isRequired: true,
            },
            {
              name: "--sender",
              description:
                "The envelope and the header from email address, that is sending the email",
              args: { name: "sender" },
              isRequired: true,
            },
            {
              name: "--recipients",
              description:
                "The destination for the email, all recipients including to, cc and bcc addresses",
              args: { name: "recipients" },
              isRequired: true,
              isRepeatable: true,
            },
            {
              name: "--raw-message",
              description: "This should be formatted in valid MIME format",
              args: { name: "raw-message" },
              isRequired: true,
            },
            {
              name: "--content-length",
              description: "The content length of the body",
              args: { name: "integer" },
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
