// Assimp v6.0.6 (latest git tag of assimp/assimp, 2026-11-19). Source: tools/assimp_cmd/code/*.cpp at tag v6.0.6 (verbs, per-verb help
// text and ProcessStandardArguments); the binary was not built or run. Short options that take a value (-f<fmt>, -t<n>, -lo<file>)
// must have the value attached to the flag in the real CLI, so only the long "--opt=value" forms are modelled with arguments.
const helpOptions: Fig.Option[] = [
  {
    name: ["-h", "--help", "-?"],
    description: "Detailed help on a command",
  },
];

const presetOptions: Fig.Option[] = [
  {
    name: "-cfast",
    description: "Fast post processing preset, runs just a few important steps",
  },
  {
    name: "-cdefault",
    description: "Default post processing: runs all recommended steps",
  },
  {
    name: "-cfull",
    description: "Fires almost all post processing steps",
  },
  {
    name: "--config",
    description: "Post processing preset",
    requiresSeparator: true,
    args: {
      name: "preset",
      suggestions: ["fast", "default", "full"],
    },
  },
];

const postProcessingOptions: Fig.Option[] = [
  {
    name: ["-ptv", "--pretransform-vertices"],
    description: "Pre-transform all vertices and remove the node graph",
  },
  {
    name: ["-gsn", "--gen-smooth-normals"],
    description: "Generate smooth normals for all vertices",
  },
  {
    name: ["-dn", "--drop-normals"],
    description: "Drop all normals from all meshes",
  },
  {
    name: ["-gn", "--gen-normals"],
    description: "Generate flat normals for all faces",
  },
  {
    name: ["-jiv", "--join-identical-vertices"],
    description: "Join identical vertices",
  },
  {
    name: ["-rrm", "--remove-redundant-materials"],
    description: "Remove unreferenced or duplicate materials",
  },
  {
    name: ["-fd", "--find-degenerates"],
    description: "Convert degenerate primitives to proper lines or points",
  },
  {
    name: ["-slm", "--split-large-meshes"],
    description: "Split large meshes into smaller sub-meshes",
  },
  {
    name: ["-lbw", "--limit-bone-weights"],
    description: "Limit the number of bones that influence a single vertex",
  },
  {
    name: ["-vds", "--validate-data-structure"],
    description: "Validate the imported data structure",
  },
  {
    name: ["-icl", "--improve-cache-locality"],
    description: "Reorder triangles for better vertex cache locality",
  },
  {
    name: ["-sbpt", "--sort-by-ptype"],
    description:
      "Split meshes with more than one primitive type into homogeneous sub-meshes",
  },
  {
    name: ["-lh", "--left-handed"],
    description: "Convert to a left-handed coordinate system",
  },
  {
    name: ["-fuv", "--flip-uv"],
    description: "Flip UV coordinates along the Y axis",
  },
  {
    name: ["-fwo", "--flip-winding-order"],
    description: "Flip the face winding order",
  },
  {
    name: ["-tuv", "--transform-uv-coords"],
    description: "Apply UV transformations to the UV coordinates",
  },
  {
    name: ["-guv", "--gen-uvcoords"],
    description:
      "Convert non-UV mappings (sphere, cylinder, ...) to proper UV coordinates",
  },
  {
    name: ["-fid", "--find-invalid-data"],
    description: "Remove or fix invalid data, such as zeroed normals",
  },
  {
    name: ["-fixn", "--fix-normals"],
    description: "Fix inward-facing normals",
  },
  {
    name: ["-tri", "--triangulate"],
    description: "Triangulate all faces",
  },
  {
    name: ["-cts", "--calc-tangent-space"],
    description: "Calculate tangents and bitangents",
  },
  {
    name: ["-fi", "--find-instances"],
    description: "Find and replace duplicated meshes with instances",
  },
  {
    name: ["-og", "--optimize-graph"],
    description: "Optimize the scene node hierarchy",
  },
  {
    name: ["-om", "--optimize-meshes"],
    description: "Join small meshes to reduce the number of draw calls",
  },
  {
    name: ["-db", "--debone"],
    description: "Remove bones that are not needed",
  },
  {
    name: ["-sbc", "--split-by-bone-count"],
    description: "Split meshes by the number of bones that influence them",
  },
  {
    name: ["-embtex", "--embed-textures"],
    description: "Embed external textures into the scene",
  },
  {
    name: ["-gs", "--global-scale"],
    description: "Apply the global scale factor to the scene",
  },
  {
    name: ["-ram", "--read-all-materials"],
    description: "Read all materials of FBX files, even unreferenced ones",
  },
];

const logOptions: Fig.Option[] = [
  {
    name: ["-l", "--show-log"],
    description: "Show the import log on stderr",
  },
  {
    name: "--log-out",
    description: "Write the log to a file (assimp-log.txt if empty)",
    requiresSeparator: true,
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  {
    name: "-lo",
    description:
      "Write the log to a file; attach the file name to the flag, e.g. -lolog.txt (assimp-log.txt if omitted)",
  },
];

const verboseOption: Fig.Option = {
  name: ["-v", "--verbose"],
  description: "Enable verbose logging",
};

// Common parameters shared by the info, export, extract and dump verbs
const commonOptions: Fig.Option[] = [
  ...postProcessingOptions,
  ...presetOptions,
  ...logOptions,
];

const rotationOption = (axis: "x" | "y" | "z"): Fig.Option => ({
  name: [`-r${axis}`, `--rotation-${axis}`],
  description: `Rotate the exported model around the ${axis.toUpperCase()} axis`,
  requiresSeparator: true,
  args: {
    name: "angle",
    description: "Rotation in radians",
  },
});

const importExtGenerator: Fig.Generator = {
  script: ["assimp", "listext"],
  postProcess: function (out) {
    return out
      .split(";")
      .map((ext) => ext.trim())
      .filter(Boolean)
      .map((ext) => {
        return {
          name: ext,
          description: "Extension",
        };
      });
  },
};

const exportExtGenerator: Fig.Generator = {
  script: ["assimp", "listexport"],
  postProcess: function (out) {
    return out
      .split("\n")
      .map((ext) => ext.trim())
      .filter(Boolean)
      .map((ext) => {
        return {
          name: ext,
          description: "Format id",
        };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "assimp",
  description: "Open Asset Import Library",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  subcommands: [
    {
      name: "listext",
      description: "List all known file extensions available for import",
    },
    {
      name: "listexport",
      description: "List all supported export formats",
    },
    {
      name: "knowext",
      description: "Check whether a file extension is recognized by Assimp",
      args: {
        name: "extension",
        description: "File extension to check",
        generators: importExtGenerator,
      },
    },
    {
      name: "exportinfo",
      description: "Show basic information on a specific export format",
      args: {
        name: "format",
        description: "Export format id",
        generators: exportExtGenerator,
      },
    },
    {
      name: "info",
      description:
        "Load a model file and print basic statistics. Full postprocessing is applied unless the `-r` switch is specified",
      args: {
        name: "file",
        description: "Print basic structure of a 3D model",
        template: "filepaths",
      },
      options: [
        {
          name: ["-r", "--raw"],
          description: "No postprocessing, do a raw import",
        },
        {
          name: ["-v", "--verbose"],
          description: "Print verbose info such as node transform data",
        },
        {
          name: ["-s", "--silent"],
          description: "Print only minimal info",
        },
        ...commonOptions,
        ...helpOptions,
      ],
    },
    {
      name: "export",
      description: "Export a file to one of the supported output formats",
      args: [
        {
          name: "model",
          description: "Relative or absolute path to the input model",
          template: "filepaths",
        },
        {
          name: "out",
          description:
            "Relative or absolute path to write the output export to. The file format is derived from its extension unless a format is given",
          template: "filepaths",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--format",
          description: "Export file format supported by Assimp",
          requiresSeparator: true,
          args: {
            name: "format",
            generators: exportExtGenerator,
          },
        },
        {
          name: "-f",
          description:
            "Export file format; attach the format id to the flag, e.g. -fobj",
        },
        rotationOption("x"),
        rotationOption("y"),
        rotationOption("z"),
        verboseOption,
        ...commonOptions,
        ...helpOptions,
      ],
    },
    {
      name: "extract",
      description: "Extract embedded texture images",
      args: [
        {
          name: "model",
          description: "Relative or absolute path to the input model",
          template: "filepaths",
        },
        {
          name: "out",
          description:
            "Relative or absolute path to write the output images to",
          template: "filepaths",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--texture",
          description: "Zero-based index of the texture to be extracted",
          requiresSeparator: true,
          args: {
            name: "index",
          },
        },
        {
          name: "-t",
          description:
            "Zero-based index of the texture to be extracted; attach the index to the flag, e.g. -t0",
        },
        {
          name: ["-ba", "--bmp-with-alpha"],
          description:
            "Specifies whether output BMPs contain an alpha channel or not",
        },
        {
          name: "--format",
          description:
            "Specifies the output file format if the output file is omitted. Supported formats are BMP and TGA. The default value is BMP",
          requiresSeparator: true,
          args: {
            name: "format",
            suggestions: ["bmp", "tga"],
          },
        },
        {
          name: "-f",
          description:
            "Specifies the output file format if the output file is omitted; attach the format to the flag, e.g. -ftga",
        },
        {
          name: ["-s", "--nosuffix"],
          description:
            "Prevents the tool from adding the _img<n> suffix to all filenames. This option must be specified together with -t to ensure that just one image is written",
        },
        verboseOption,
        ...commonOptions,
        ...helpOptions,
      ],
    },
    {
      name: "dump",
      description: "Convert models to a binary or textual dump (ASSBIN/ASSXML)",
      args: [
        {
          name: "model",
          description: "Relative or absolute path to the input model",
          template: "filepaths",
        },
        {
          name: "out",
          description:
            "Relative or absolute path to write the output dump to. If it is omitted, the dump is written to '<model>.assxml' ('<model>.assbin' with -b)",
          template: "filepaths",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["-b", "--binary"],
          description: "Write the dump in binary format (ASSBIN)",
        },
        {
          name: ["-s", "--short"],
          description:
            "Shorten the dump to include only min/max values for all vertex components and animation channels",
        },
        {
          name: ["-z", "--compressed"],
          description: "Compress the binary dump",
        },
        verboseOption,
        ...commonOptions,
        ...helpOptions,
      ],
    },
    {
      name: "cmpdump",
      description: "Compare dumps created using 'assimp dump <file> -s ...'",
      args: [
        {
          name: "actual",
          description: "Mini dump now",
          template: "filepaths",
        },
        {
          name: "expected",
          description: "Archived dump from some point in the past",
          template: "filepaths",
        },
      ],
      options: helpOptions,
    },
    {
      name: "testbatchload",
      description:
        "Load a list of files with a single importer instance (used by Assimp's own tests)",
      hidden: true,
      args: {
        name: "file",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "version",
      description: "Display Assimp version",
    },
    {
      name: "help",
      description: "Display some basic help",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Display some basic help",
    },
  ],
};

export default completionSpec;
