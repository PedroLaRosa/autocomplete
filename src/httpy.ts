// httpy v1.1.0 (PyPI httpy-cli, latest release; GitHub knid/httpy, last commit 2023-07-06, 2026-11-19). Source: static read of httpy/arguments.py, httpy/core.py and README.md in the 1.1.0 sdist (identical to the GitHub main branch; binary not run).
// The METHOD and REQUEST_ITEM words are not argparse positionals: httpy takes them from the leftover arguments after the URL.
const completionSpec: Fig.Spec = {
  name: "httpy",
  description:
    "Modern, user-friendly, programmable command-line HTTP client for the API",
  args: [
    {
      name: "URL",
      description:
        "The scheme defaults to 'http://' if the URL does not include one. Variables written as {name} are filled in by --exec",
    },
    {
      name: "METHOD",
      isOptional: true,
      suggestions: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      default: "GET",
      description: "The HTTP method to be used for the request",
    },
    {
      name: "REQUEST_ITEM",
      isOptional: true,
      isVariadic: true,
      description:
        "Optional key-value pairs to be included in the request: Name:Value (HTTP header), name==value (URL parameter), field=value (body field)",
    },
  ],
  options: [
    {
      name: ["--exec", "-X"],
      args: {
        name: "CMD",
        description:
          "VARIABLE:OPERATION[:MAX_RUN], where OPERATION is ++, --, rand(MIN,MAX), read(FILE), a comma-separated list or plain text",
      },
      description:
        "Execute a command that fills the {variable} placeholders of the request, running it once per value",
    },
    {
      name: ["--status", "-S"],
      description: "Show only the response status",
    },
    {
      name: ["--header", "-H"],
      description: "Show only the response headers",
    },
    {
      name: ["--body", "-B"],
      description: "Show only the response body",
    },
    {
      name: ["--allow-redirect", "-r"],
      description: "Allow requests to be redirected",
    },
    {
      name: ["--verbose", "-V"],
      description: "Show request and response in verbose",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for httpy",
    },
    {
      name: ["--version", "-v"],
      description: "Show version for httpy",
    },
  ],
};
export default completionSpec;
