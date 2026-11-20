// create-web3-frontend v2.2.0 (npm latest, 2026-11-20). Source: index.ts at upstream default-branch commit 181b88c "2.2.0" (commander 2.x definition; no git tag exists past v2.0.2) cross-checked against the published npm tarball (dist bundle); read statically, binary not run.
// The 1.x flags --ts/--typescript, --use-npm and --use-pnpm no longer exist since the 2.0.0 rewrite; the CLI now only takes an optional project directory (prompts for it when omitted).
// Last npm release 2.2.0 was published 2024-02-24; upstream appears unmaintained since.

const completionSpec: Fig.Spec = {
  name: "create-web3-frontend",
  description:
    "Create a web3 frontend with Next.js, wagmi, RainbowKit and Tailwind CSS",
  options: [
    {
      name: ["-V", "--version"],
      description: "Output the version number",
    },
    {
      name: ["-h", "--help"],
      description: "Output usage information",
      priority: 49,
    },
  ],
  args: {
    name: "project-directory",
    description: "Directory to create the project in (prompted when omitted)",
    isOptional: true,
    template: "folders",
  },
};
export default completionSpec;
