// YoMo v2.1.7 (GitHub tag yomorun/yomo, 2026-10-24; its Cargo.toml still says 2.1.6, 2026-11-19). Source: src/bin/yomo.rs (clap definitions) and README.md read statically at tag v2.1.7 (binary not run).
// YoMo v2 is a Rust rewrite: the v1 Go commands `build` and the `--rx`, `--target`, `--modfile` flags no longer exist; `serve` is new.

const toolLanguages = ["node", "go"];

const completionSpec: Fig.Spec = {
  name: "yomo",
  description:
    "A QUIC-based runtime for AI LLM tool routing and serverless execution",
  subcommands: [
    {
      name: "serve",
      description: "Serve a YoMo Service (Zipper)",
      options: [
        {
          name: ["-c", "--config"],
          description: "Path to the YoMo server configuration file",
          args: {
            name: "config",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "init",
      description: "Initialize a YoMo Tool project",
      options: [
        {
          name: ["-l", "--language"],
          description: "Tool language template",
          args: {
            name: "language",
            default: "node",
            suggestions: toolLanguages,
          },
        },
      ],
      args: {
        name: "output_dir",
        description: "Directory to initialize the tool project",
        default: "./app",
        isOptional: true,
        template: "folders",
      },
    },
    {
      name: "run",
      description: "Run a YoMo Tool",
      options: [
        {
          name: ["-n", "--name"],
          description: "The serverless tool name",
          isRequired: true,
          args: {
            name: "name",
          },
        },
        {
          name: ["-z", "--zipper"],
          description: "YoMo-Zipper endpoint address",
          args: {
            name: "zipper",
            default: "127.0.0.1:9000",
          },
        },
        {
          name: ["-c", "--credential"],
          description: "Client credential payload",
          args: {
            name: "credential",
          },
        },
        {
          name: "--tls-ca-cert-file",
          description: "Path to the TLS CA certificate file",
          args: {
            name: "tls_ca_cert_file",
            template: "filepaths",
          },
        },
        {
          name: "--tls-cert-file",
          description:
            "Path to the TLS client certificate file (for mutual TLS mode)",
          args: {
            name: "tls_cert_file",
            template: "filepaths",
          },
        },
        {
          name: "--tls-key-file",
          description: "Path to the TLS client key file (for mutual TLS mode)",
          args: {
            name: "tls_key_file",
            template: "filepaths",
          },
        },
        {
          name: "--tls-mutual",
          description: "Enable mutual TLS mode",
        },
        {
          name: ["-l", "--language"],
          description: "Tool language (auto-detect when omitted)",
          args: {
            name: "language",
            suggestions: toolLanguages,
          },
        },
      ],
      args: {
        name: "serverless_dir",
        description: "Directory to the tool source file",
        default: ".",
        isOptional: true,
        template: "folders",
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Print help",
      isPersistent: true,
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};
export default completionSpec;
