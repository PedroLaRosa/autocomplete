// sips (macOS built-in tool, no standalone version; man page bundled with Xcode 27.3 beta 2, 2026-11-19).
// Source: sips(1) from the keith/xcode-man-pages mirror (commit 6ddd0b2) plus the existing spec; NOT a live run on macOS.
// Added -1/--oneLine, --cropOffset, --optimizeColorForSharing, -o/--out, -j/--js; renamed -padColor to --padColor; -i/--addIcon takes no argument.
// Property key suggestions now carry the value types from the man page's OPTIONS section.
const propertySuggestions: Fig.Suggestion[] = [
  {
    name: "all",
    description: "Binary data (special key)",
  },
  {
    name: "allxml",
    description: "Binary data (special key)",
  },
  {
    name: "dpiHeight",
    description: "Float (image)",
  },
  {
    name: "dpiWidth",
    description: "Float (image)",
  },
  {
    name: "pixelHeight",
    description: "Integer, read-only (image)",
  },
  {
    name: "pixelWidth",
    description: "Integer, read-only (image)",
  },
  {
    name: "typeIdentifier",
    description: "String, read-only (image)",
  },
  {
    name: "format",
    description:
      "String: jpeg | tiff | png | gif | jp2 | pict | bmp | qtif | psd | sgi | tga (image)",
  },
  {
    name: "formatOptions",
    description:
      "String: default | low | normal | high | best | <percent> | lzw | packbits (image)",
  },
  {
    name: "space",
    description: "String, read-only (image and profile)",
  },
  {
    name: "samplesPerPixel",
    description: "Integer, read-only (image)",
  },
  {
    name: "bitsPerSample",
    description: "Integer, read-only (image)",
  },
  {
    name: "creation",
    description: "String, read-only for images (image and profile)",
  },
  {
    name: "make",
    description: "String (image)",
  },
  {
    name: "model",
    description: "String (image)",
  },
  {
    name: "software",
    description: "String, read-only (image)",
  },
  {
    name: "description",
    description: "String (image and profile)",
  },
  {
    name: "copyright",
    description: "String (image and profile)",
  },
  {
    name: "artist",
    description: "String (image)",
  },
  {
    name: "profile",
    description: "Binary data (image)",
  },
  {
    name: "hasAlpha",
    description: "Boolean, read-only (image)",
  },
  {
    name: "size",
    description: "Integer, read-only (profile)",
  },
  {
    name: "cmm",
    description: "String (profile)",
  },
  {
    name: "version",
    description: "String (profile)",
  },
  {
    name: "class",
    description: "String, read-only (profile)",
  },
  {
    name: "pcs",
    description: "String, read-only (profile)",
  },
  {
    name: "platform",
    description: "String (profile)",
  },
  {
    name: "quality",
    description: "String: normal | draft | best (profile)",
  },
  {
    name: "deviceManufacturer",
    description: "String (profile)",
  },
  {
    name: "deviceModel",
    description: "Integer (profile)",
  },
  {
    name: "deviceAttributes0",
    description: "Integer (profile)",
  },
  {
    name: "deviceAttributes1",
    description: "Integer (profile)",
  },
  {
    name: "renderingIntent",
    description:
      "String: perceptual | relative | saturation | absolute (profile)",
  },
  {
    name: "creator",
    description: "String (profile)",
  },
  {
    name: "md5",
    description: "String, read-only (profile)",
  },
];

const completionSpec: Fig.Spec = {
  name: "sips",
  description: "Scriptable image processing system",
  args: {
    name: "file",
    template: "filepaths",
  },
  options: [
    {
      name: ["-g", "--getProperty"],
      description: "Output the property value for key to stdout",
      args: {
        name: "key",
        suggestions: propertySuggestions,
      },
    },
    {
      name: ["-s", "--setProperty"],
      description: "Set a property value for key to value",
      args: [
        {
          name: "key",
          suggestions: propertySuggestions,
        },
        {
          name: "value",
        },
      ],
    },
    {
      name: ["-d", "--deleteProperty"],
      description: "Remove a property value for key",
      args: {
        name: "key",
        suggestions: propertySuggestions,
      },
    },
    {
      name: ["-X", "--extractTag"],
      description: "Extract a profile tag element to tagFile",
      args: [
        {
          name: "tag",
        },
        {
          name: "tagFile",
          template: "filepaths",
        },
      ],
    },
    {
      name: ["-1", "--oneLine"],
      description:
        "Output for each file on a single line (profiles: pipe-delimited values, images: tab-delimited values)",
    },
    {
      name: "--verify",
      description: "Verify any profile problems and log output to stdout",
    },
    {
      name: ["-x", "--extractProfile"],
      description:
        "Get the embedded profile from image and write it to profile",
      args: {
        name: "profile",
        template: "filepaths",
      },
    },
    {
      name: "--deleteTag",
      args: { name: "tag" },
      description: "Remove the tag element from a profile",
    },
    {
      name: "--copyTag",
      description: "Copy the srcTag element of a profile to dstTag",
      args: [
        {
          name: "srcTag",
        },
        {
          name: "dstTag",
        },
      ],
    },
    {
      name: "--loadTag",
      description:
        "Set the tag element of a profile to the contents of tagFile",
      args: [
        {
          name: "tag",
        },
        {
          name: "tagFile",
          template: "filepaths",
        },
      ],
    },
    {
      name: "--repair",
      description: "Repair any profile problems and log output to stdout",
    },
    {
      name: ["-e", "--embedProfile"],
      description: "Embed profile in image",
      args: {
        name: "profile",
      },
    },
    {
      name: ["-E", "--embedProfileIfNone"],
      description:
        "Embed profile in image only if image doesn't have a profile",
      args: {
        name: "profile",
      },
    },
    {
      name: ["-m", "--matchTo"],
      description: "Color match image to profile",
      args: {
        name: "profile",
      },
    },
    {
      name: ["-M", "--matchToWithIntent"],
      description:
        "Color match image to profile with rendering intent perceptual | relative | saturation | absolute",
      args: [
        {
          name: "profile",
        },
        {
          name: "intent",
          suggestions: ["perceptual", "relative", "saturation", "absolute"],
        },
      ],
    },
    {
      name: "--deleteColorManagementProperties",
      description:
        "Delete color management properties in TIFF, PNG, and EXIF dictionaries",
    },
    {
      name: ["-r", "--rotate"],
      description: "Rotate image clockwise by the specified degrees",
      args: {
        name: "degreesCW",
      },
    },
    {
      name: ["-f", "--flip"],
      description: "Flip image horizontally or vertically",
      args: {
        name: "axis",
        suggestions: ["horizontal", "vertical"],
      },
    },
    {
      name: ["-c", "--cropToHeightWidth"],
      description: "Crop image to fit specified size",
      args: [
        {
          name: "pixelsH",
        },
        {
          name: "pixelsW",
        },
      ],
    },
    {
      name: "--cropOffset",
      description: "Crop offset from top left corner",
      args: [
        {
          name: "offsetY",
        },
        {
          name: "offsetH",
        },
      ],
    },
    {
      name: ["-p", "--padToHeightWidth"],
      description: "Pad image with pixels to fit specified size",
      args: [
        {
          name: "pixelsH",
        },
        {
          name: "pixelsW",
        },
      ],
    },
    {
      name: "--padColor",
      description:
        "Use this color when padding. White=FFFFFF, Red=FF0000, Default=Black=000000",
      args: {
        name: "hexcolor",
      },
    },
    {
      name: ["-z", "--resampleHeightWidth"],
      description:
        "Resample image at specified size. Image aspect ratio may be altered",
      args: [
        {
          name: "pixelsH",
        },
        {
          name: "pixelsW",
        },
      ],
    },
    {
      name: "--resampleWidth",
      description: "Resample image to specified width",
      args: {
        name: "pixelsW",
      },
    },
    {
      name: "--resampleHeight",
      description: "Resample image to specified height",
      args: {
        name: "pixelsH",
      },
    },
    {
      name: ["-Z", "--resampleHeightWidthMax"],
      description:
        "Resample image so height and width aren't greater than specified size",
      args: {
        name: "pixelsWH",
      },
    },
    {
      name: ["-i", "--addIcon"],
      description: "Add a Finder icon to image file",
    },
    {
      name: "--optimizeColorForSharing",
      description: "Optimize color for sharing",
    },
    {
      name: ["-o", "--out"],
      description: "Write the result to the given file or directory",
      args: {
        name: "file-or-directory",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: ["-j", "--js"],
      description: "Execute a JavaScript file to modify or generate images",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--debug",
      description: "Enable debugging output",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: ["-H", "--helpProperties"],
      description: "Show help for properties",
    },
    {
      name: "--man",
      description: "Generate man pages",
    },
    {
      name: ["-v", "--version"],
      description: "Show the version",
    },
    {
      name: "--formats",
      description: "Show the read/write formats",
    },
  ],
};

export default completionSpec;
