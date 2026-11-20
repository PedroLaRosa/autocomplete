// lima v2.3.0 (GitHub tag lima-vm/lima v2.3.0, same as Homebrew core lima 2.3.0, 2026-11-20).
// Source: static read of the cmd/lima shell wrapper script at tag v2.3.0 (its -h/--help and -v/--version handling,
// LIMA_INSTANCE/LIMA_SHELL/LIMA_WORKDIR/LIMACTL variables); not run, since executing cloned code is not allowed in this sandbox.
const completionSpec: Fig.Spec = {
  name: "lima",
  description: 'Lima is an alias for "limactl shell $LIMA_INSTANCE"',
  args: {
    name: "COMMAND",
    isVariadic: true,
    isOptional: true,
    isCommand: true,
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for lima",
    },
    {
      name: ["-v", "--version"],
      description: "Version for limactl",
    },
  ],
};

export default completionSpec;
