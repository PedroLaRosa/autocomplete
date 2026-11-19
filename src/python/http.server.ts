const completionSpec: Fig.Spec = {
  name: "http.server",
  description: "Serve files from a directory over HTTP",
  options: [
    {
      name: ["-b", "--bind"],
      description: "Bind to this address (default: all interfaces)",
      args: {
        name: "address",
        description: "E.g. 127.0.0.1",
      },
    },
    {
      name: ["-d", "--directory"],
      description: "Serve this directory (default: current directory)",
      args: {
        template: "folders",
      },
    },
    {
      name: ["-p", "--protocol"],
      description: "Conform to this HTTP version (default: HTTP/1.0)",
      args: {
        name: "version",
        suggestions: ["HTTP/1.0", "HTTP/1.1"],
      },
    },
    {
      name: "--content-type",
      description:
        "Default content type for unknown extensions (default: application/octet-stream)",
      args: {
        name: "content type",
      },
    },
    {
      name: "--tls-cert",
      description: "Path to the TLS certificate chain file",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--tls-key",
      description: "Path to the TLS key file (requires --tls-cert)",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--tls-password-file",
      description:
        "Path to the password file for the TLS key (requires --tls-cert)",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: ["-H", "--header"],
      description: "Add a custom response header",
      isRepeatable: true,
      args: [{ name: "header" }, { name: "value" }],
    },
  ],
  args: {
    name: "port",
    description: "Bind to this port (default: 8000)",
    isOptional: true,
  },
};

export default completionSpec;
