// create-remix v2.17.5 (npm latest, released 2026-06-01, 2026-11-19). Source: unpacked the npm tarball and read dist/cli.js, dist/index.js, package.json and CHANGELOG.md statically (not executed).
// Since v2.17.0 create-remix no longer scaffolds projects: it ignores flags (there is no --help/--version handling), prints that Remix v2 is in maintenance mode
// and suggests running `npx create-react-router@latest` with the same arguments. The former -h/--help and -v/--version options were removed.
const completionSpec: Fig.Spec = {
  name: "create-remix",
  description:
    "Deprecated: prints a notice pointing to create-react-router instead of creating a project",
  icon: "https://remix.run/favicon-light.1.png",
};

export default completionSpec;
