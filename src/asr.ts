// asr(8) from macOS (Xcode 27.3 beta 2 man page mirror keith/xcode-man-pages, 2026-11-19; asr.8 itself is dated 2020-12-10). Source: man page only, read statically
// (macOS tool, not run on macOS; Apple does not publish asr source). Legacy single-dash spellings (-source, -target, -server, ...) are not modelled: only -s/-t from
// the man page EXAMPLES and the deprecated -nocheck/-blockonly from COMPATIBILITY.
import { filepaths } from "@tabsmith/autocomplete-generators";

// Needed so that the deprecated single-dash multi-letter options (-nocheck, -blockonly) are parsed as one flag
const restoreParserDirectives: Fig.Subcommand["parserDirectives"] = {
  flagsArePosixNoncompliant: true,
};

const imageSourceOption = (description: string): Fig.Option => ({
  name: "--source",
  description,
  isRequired: true,
  args: {
    name: "source",
    description: "Disk image",
    template: "filepaths",
    suggestCurrentToken: true,
  },
});

const restoreRestoreExactOptions: Fig.Option[] = [
  {
    name: ["--source", "-s"],
    description:
      "Can be a disk image, /dev entry, volume mountpoint, or an asr:// URL for a multicast source",
    isRequired: true,
    args: {
      name: "source",
      description: "Disk image, /dev entry, or volume mountpoint",
      template: "filepaths",
      suggestCurrentToken: true,
    },
  },
  {
    name: ["--target", "-t"],
    description: "Can be a /dev entry, or volume mountpoint",
    exclusiveOn: ["--file"],
    args: {
      name: "target",
      description: "/dev entry, or volume mountpoint",
      template: "filepaths",
      suggestCurrentToken: true,
    },
  },
  {
    name: "--file",
    description:
      "When performing a multicast restore, --file can be specified instead of --target",
    exclusiveOn: ["--target"],
    dependsOn: ["--erase"],
    args: {
      name: "file",
      description: "Path to a local file or directory for the disk image",
      template: "filepaths",
      suggestCurrentToken: true,
    },
  },
  {
    name: "--erase",
    description:
      "Erases target and is required. --erase must always be used, as file copies are no longer supported by asr",
    isRequired: true,
  },
  {
    name: "--format",
    description:
      "Specifies the destination filesystem format, when --erase is also given",
    args: {
      name: "format",
      description: "Destination filesystem format",
      suggestions: ["HFS+", "HFSX"],
    },
  },
  {
    name: "--noprompt",
    description: "Suppresses the prompt which usually occurs before target",
  },
  {
    name: "--timeout",
    description:
      "Specifies num seconds that a multicast client should wait when no payload data has been received over a multicast stream before exiting",
    args: {
      name: "num",
      description: "Number of seconds that a multicast client should wait",
      default: "0",
      suggestions: ["0"],
    },
  },
  {
    name: "--puppetstrings",
    description:
      "Provide progress output that is easy for another program to parse",
  },
  {
    name: "--noverify",
    description:
      "Skips the verification steps normally taken to ensure that a volume has been properly restored",
  },
  {
    name: "--allowfragmentedcatalog",
    description:
      "Allows restores to proceed even if the source's catalog file is fragmented",
  },
  {
    name: "--corestorageconvert",
    description:
      "Converts the target to a Core Storage logical volume group at the end of the restore",
  },
  {
    name: "--SHA1",
    description:
      "Forces the restore to use the SHA-1 hash in the image during verification",
  },
  {
    name: "--SHA256",
    description:
      "Forces the restore to use the SHA-256 hash in the image during verification",
  },
  {
    name: "--sourcevolumename",
    description:
      "Tells asr which volume in the source container to invert when doing an APFS restore, selected by name",
    args: {
      name: "name",
      description: "Name of the volume in the source container",
    },
  },
  {
    name: "--sourcevolumeUUID",
    description:
      "Tells asr which volume in the source container to invert when doing an APFS restore, selected by UUID",
    args: {
      name: "UUID",
      description: "UUID of the volume in the source container",
    },
  },
  {
    name: "--useReplication",
    description: "Forces asr to use replication for restoring APFS volumes",
  },
  {
    name: "--useInverter",
    description: "Forces asr to use the inverter for restoring APFS volumes",
  },
  {
    name: "--toSnapshot",
    description:
      "Specifies the snapshot on the source APFS volume to restore to the target APFS volume",
    args: {
      name: "snapshot",
      description: "Name or UUID of a snapshot on the source",
    },
  },
  {
    name: "--fromSnapshot",
    description:
      "Names a snapshot on the source APFS volume to use in combination with --toSnapshot to specify a snapshot delta to restore to the target APFS volume",
    args: {
      name: "snapshot",
      description: "Name or UUID of a snapshot on both source and target",
    },
  },
  {
    name: "-nocheck",
    description: "Skips verification (deprecated, use --noverify instead)",
    deprecated: true,
  },
  {
    name: "-blockonly",
    description:
      "Compatibility option, on by default (deprecated, kept for script compatibility)",
    deprecated: true,
  },
];

const bufferingOptions: Fig.Option[] = [
  {
    name: "--buffers",
    description: "One of the options that control how asr uses memory",
    args: {
      name: "num",
      description: "Specifies the num buffers should be used",
    },
  },
  {
    name: "--buffersize",
    description: "One of the options that control how asr uses memory",
    args: {
      name: "size",
      description: "Specifies the size of each buffer",
    },
  },
  {
    name: "--csumbuffers",
    description: "One of the options that control how asr uses memory",
    args: {
      name: "num",
      description:
        "Specifies that num buffers should be used for checksumming operations",
    },
  },
  {
    name: "--csumbuffersize",
    description: "One of the options that control how asr uses memory",
    args: {
      name: "size",
      description: "Specifies the size of each buffer used for checksumming",
    },
  },
];

const otherOptions: Fig.Option[] = [
  {
    name: "--verbose",
    description: "Enables verbose progress and error messages",
  },
  {
    name: "--debug",
    description: "Enables other progress and error messages",
  },
];

const completionSpec: Fig.Spec = {
  name: "asr",
  description:
    "Asr efficiently copies disk images onto volumes, either directly or via a multicast network stream",
  subcommands: [
    {
      name: "help",
      description: "Displays asr usage information",
    },
    {
      name: "version",
      description: "Displays asr version",
    },
    {
      name: "restore",
      description: "Restores a disk image or volume to another volume",
      parserDirectives: restoreParserDirectives,
      options: restoreRestoreExactOptions,
    },
    {
      name: "restoreexact",
      description:
        "Same as restore verb, except that for an HFS Plus volume, the target partition is resized to match the size of the source partition/ volume (not allowed with APFS volumes)",
      parserDirectives: restoreParserDirectives,
      options: restoreRestoreExactOptions,
      displayName: "restore[exact]",
      deprecated: true,
    },
    {
      name: "server",
      description: "Multicasts source over the network",
      options: [
        {
          name: "--source",
          description: "Source has to be a UDIF disk image",
          isRequired: true,
          args: {
            name: "source",
            description:
              "UDIF disk image local/remote path, or an http:// URL to one",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        {
          name: "--interface",
          description: "The network interface to be used for multicasting",
          args: {
            name: "interface",
            description: "Network interface (e.g. en0)",
          },
        },
        {
          name: "--config",
          description: "Server requires a configuration file to be passed",
          isRequired: true,
          args: {
            name: "configuration",
            description: "Configuration file in standard property list format",
            generators: filepaths({
              extensions: ["plist"],
            }),
          },
        },
      ],
    },
    {
      name: "imagescan",
      description:
        "Calculate checksums of the data in the provided image and store them in the image",
      options: [
        imageSourceOption("The disk image to scan"),
        {
          name: "--nostream",
          description:
            "Bypasses the check/reordering of a disk image file for multicasting",
        },
        {
          name: "--allowfragmentedcatalog",
          description: "Bypasses the check for a fragmented catalog file",
        },
      ],
    },
    {
      name: "info",
      description:
        "Report the image metadata which was placed in the image by a previous use of the imagescan verb",
      options: [
        imageSourceOption("The disk image to report on"),
        {
          name: "--plist",
          description: "Writes its output as an XML-formatted plist",
        },
      ],
    },
  ],
  options: [...bufferingOptions, ...otherOptions],
  // Only uncomment if asr takes an argument
  // args: {}
};

export default completionSpec;
