// gltfjsx v6.5.3 (npm view gltfjsx version, 2026-11-19). Source: cli.js meow flags in pmndrs/gltfjsx
const number = (name: string, defaultValue: string): Fig.Arg => ({
  name,
  default: defaultValue,
});

const completionSpec: Fig.Spec = {
  name: "gltfjsx",
  description: "GLTF to JSX converter",
  args: {
    name: "model",
    description: "The .gltf or .glb file to convert",
    template: "filepaths",
  },
  options: [
    {
      name: ["-o", "--output"],
      description: "Output file name/path",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: ["-t", "--types"],
      description: "Add Typescript definitions",
    },
    {
      name: ["-k", "--keepnames"],
      description: "Keep original names",
    },
    {
      name: ["-K", "--keepgroups"],
      description: "Keep (empty) groups, disable pruning",
    },
    {
      name: ["-b", "--bones"],
      description: "Lay out bones declaratively",
    },
    {
      name: ["-m", "--meta"],
      description: "Include metadata (as userData)",
    },
    {
      name: ["-s", "--shadows"],
      description: "Let meshes cast and receive shadows",
    },
    {
      // ponytail: upstream help lists `w`, but meow only registers the long flag (its `p` short collides with --precision)
      name: "--printwidth",
      description: "Prettier printWidth",
      args: number("width", "1000"),
    },
    {
      name: ["-p", "--precision"],
      description: "Number of fractional digits",
      args: number("digits", "3"),
    },
    {
      name: ["-d", "--draco"],
      description: "Draco binary path",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: ["-r", "--root"],
      description: "Sets directory from which .gltf file is served",
      args: { name: "root", template: "folders" },
    },
    {
      name: ["-i", "--instance"],
      description: "Instance re-occurring geometry",
    },
    {
      name: ["-I", "--instanceall"],
      description: "Instance every geometry (for cheaper re-use)",
    },
    {
      name: ["-E", "--exportdefault"],
      description: "Use default export",
    },
    {
      name: ["-T", "--transform"],
      description: "Transform the asset for the web (draco, prune, resize)",
    },
    {
      name: ["-R", "--resolution"],
      description: "Resolution for texture resizing",
      dependsOn: ["--transform"],
      args: number("pixels", "1024"),
    },
    {
      name: ["-j", "--keepmeshes"],
      description: "Do not join compatible meshes",
      dependsOn: ["--transform"],
    },
    {
      name: ["-M", "--keepmaterials"],
      description: "Do not palette join materials",
      dependsOn: ["--transform"],
    },
    {
      name: ["-f", "--format"],
      description: "Texture format",
      dependsOn: ["--transform"],
      args: {
        name: "format",
        default: "webp",
        suggestions: ["webp", "avif", "png", "jpeg"],
      },
    },
    {
      name: ["-S", "--simplify"],
      description: "Mesh simplification",
      dependsOn: ["--transform"],
    },
    {
      name: "--ratio",
      description: "Simplifier ratio",
      dependsOn: ["--simplify"],
      args: number("ratio", "0.75"),
    },
    {
      name: "--error",
      description: "Simplifier error threshold",
      dependsOn: ["--simplify"],
      args: number("threshold", "0.001"),
    },
    {
      name: ["-q", "--degrade"],
      description: "Regex of texture names to resize to --degraderesolution",
      dependsOn: ["--transform"],
      hidden: true,
      args: { name: "pattern" },
    },
    {
      name: ["-Q", "--degraderesolution"],
      description: "Resolution for degraded textures",
      dependsOn: ["--degrade"],
      hidden: true,
      args: number("pixels", "512"),
    },
    {
      name: ["-c", "--console"],
      description: "Log JSX to console, won't produce a file",
    },
    {
      name: ["-D", "--debug"],
      description: "Debug output",
    },
  ],
};

export default completionSpec;
