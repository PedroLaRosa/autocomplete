// codesign (macOS Xcode 27.2 (27B52) man page, 2026-11-19). Source: codesign(1) from the keith/xcode-man-pages mirror (commit 03c4382, identical in the 27.3 beta); man page only, not run on macOS.
// The tool source is not published by Apple, so undocumented options are not covered. Options whose value is optional (--timestamp, --strict, --preserve-metadata, --extract-certificates, --verbose) are modelled with an "=" separator as the man page requires.
// --resource-rules is no longer documented in the current man page and is kept as deprecated.
import { valueList, filepaths } from "@tabsmith/autocomplete-generators";

const signingFlags: Fig.Suggestion[] = [
  {
    name: "kill",
    description: "Code dies when it becomes dynamically invalid",
  },
  {
    name: "hard",
    description:
      "Hint that the code prefers to be denied resources that would invalidate its identity",
  },
  {
    name: "host",
    description: "Code can host guest code",
  },
  {
    name: "expires",
    description: "Validation considers expiration of the certificates involved",
  },
  {
    name: "library",
    description: "Enable library validation",
  },
  {
    name: "runtime",
    description: "Opt into the hardened runtime",
  },
  {
    name: "linker-signed",
    description: "Identify the signature as made by the linker",
  },
];

const preservedMetadata: Fig.Suggestion[] = [
  {
    name: "identifier",
    description: "Preserve the signing identifier (--identifier)",
  },
  {
    name: "entitlements",
    description: "Preserve the entitlement data (--entitlements)",
  },
  {
    name: "requirements",
    description: "Preserve the internal requirements (--requirements)",
  },
  { name: "flags", description: "Preserve the option flags (-o)" },
  {
    name: "runtime",
    description: "Preserve the hardened runtime version",
  },
  {
    name: "launch-constraints",
    description: "Preserve existing launch constraints",
  },
  {
    name: "library-constraints",
    description: "Preserve existing library load constraints",
  },
];

const strictChecks: Fig.Suggestion[] = [
  {
    name: "symlinks",
    description:
      "Check that symbolic links point to sealed files in the bundle",
  },
  {
    name: "sideband",
    description:
      "Check that no resource forks or Finder attributes are present",
  },
  { name: "all", description: "Apply every strictness check" },
];

const constraintFile = (what: string): Fig.Arg => ({
  name: "path",
  description: `Plist file describing the ${what}`,
  template: "filepaths",
});

const completionSpec: Fig.Spec = {
  name: "codesign",
  description: "Create and manipulate code signatures",
  options: [
    {
      name: "--all-architectures",
      description:
        "When verifying a code signature on code that has a universal ('fat') Mach-O binary, separately verify each architecture contained. This is the default unless overridden with the -a (--architecture) option",
    },
    {
      name: ["-a", "--architecture"],
      description:
        "When verifying or displaying signatures, explicitly select the Mach-O architecture given",
      args: {
        name: "architecture",
      },
    },
    {
      name: "--bundle-version",
      description:
        "When handling versioned bundles such as frameworks, explicitly specify the version to operate on",
      args: {
        name: "version-string",
      },
    },
    {
      name: "--check-notarization",
      description:
        "When verifying, force an online notarization check to see if a notarization ticket is available",
    },
    {
      name: ["-d", "--display"],
      description: "Display information about the code at the path(s) given",
    },
    {
      name: ["-D", "--detached"],
      description:
        "When signing, designates that a detached signature should be written to the specified file. When verifying, designates a file containing a detached signature to be used for verification",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--deep",
      description:
        "Deprecated for signing as of macOS 13.0. When signing a bundle, recursively sign nested code content such as helpers, frameworks, and plug-ins. When verifying, recursively verify nested code in full. When displaying, list the directly nested code",
    },
    {
      name: "--detached-database",
      description:
        "When signing, specifies that a detached signature should be generated as with the --detached option, but that the resulting signature should be written into a system database, from where it is made automatically available whenever apparently unsigned code is validated on the system",
    },
    {
      name: "--input-detached-certificates",
      description:
        "When verifying or merging, specify a file containing detached certificates (can be given multiple times)",
      isRepeatable: true,
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--output-detached-certificates",
      description:
        "When signing with hybrid PQC signatures, write the certificate chain to this file instead of embedding it in the CMS signature. With --merge-detached-certificates, the destination file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--keep-root-detached-certificates",
      description:
        "Include the root certificate in detached certificate files (with --output-detached-certificates) or preserve root certificates in the merged file (with --merge-detached-certificates)",
    },
    {
      name: "--merge-detached-certificates",
      description:
        "Merge the files given with --input-detached-certificates into the single file given with --output-detached-certificates",
    },
    {
      name: "--use-software-signing-cert",
      description: "Use the software update policy when validating the object",
    },
    {
      name: ["-f", "--force"],
      description:
        "When signing, causes codesign to replace any existing signature on the path(s) given",
    },
    {
      name: "--force-library-entitlements",
      description:
        "When signing, forcefully embed the supplied entitlements in the signature of libraries (non-main-executables)",
    },
    {
      name: "--generate-entitlement-der",
      description:
        "When signing, convert the supplied entitlements XML data to DER and embed the entitlements as both XML and DER in the signature",
    },
    {
      name: ["-h", "--hosting"],
      description:
        "Constructs and prints the hosting chain of a running program",
    },
    {
      name: ["-i", "--identifier"],
      description:
        "During signing, explicitly specify the unique identifier string that is embedded in code signatures",
      args: {
        name: "identifier",
      },
    },
    {
      name: ["-o", "--options"],
      description:
        "During signing, specifies a set of option flags to be embedded in the code signature",
      args: {
        name: "flags",
        description: "Comma-separated list of option flags, or a numeric mask",
        generators: valueList({
          delimiter: ",",
          insertDelimiter: true,
          values: signingFlags,
        }),
      },
    },
    {
      name: ["-P", "--pagesize"],
      description:
        "Indicates the granularity of code signing. Pagesize must be a power of two",
      args: {
        name: "size",
      },
    },
    {
      name: "--remove-signature",
      description: "Remove the current code signature from the path(s) given",
    },
    {
      name: ["-r", "--requirements"],
      description:
        "During signing, indicates that internal requirements should be embedded in the code path(s) as specified. During display, indicates where to write the code's internal requirements (use -r- for standard output)",
      args: {
        name: "requirements",
      },
    },
    {
      name: ["-R", "--test-requirement"],
      description:
        "During verification, indicates that the path(s) given should be verified against the code requirement specified",
      args: {
        name: "requirement",
      },
    },
    {
      name: ["-s", "--sign"],
      description: "Sign the code at the path(s) given using this identity",
      args: {
        name: "identity",
        description:
          "Identity name, identity preference, SHA-1 certificate hash, or - for ad-hoc signing",
        suggestions: [{ name: "-", description: "Ad-hoc signing" }],
      },
    },
    {
      name: "--verbose",
      description:
        "Set (with a numeric value) or increment the verbosity level of output",
      requiresSeparator: true,
      args: {
        name: "level",
        isOptional: true,
      },
    },
    {
      name: ["-v", "--verify"],
      description:
        "Requests verification of code signatures. If other actions are also requested, -v means --verbose",
      isRepeatable: true,
    },
    {
      name: "--continue",
      description:
        "Instructs codesign to continue processing path arguments even if processing one fails",
    },
    {
      name: "--dryrun",
      description:
        "During signing, performs almost all signing operations, but does not actually write the result anywhere",
    },
    {
      name: "--entitlements",
      description:
        "When signing, take the file at the given path and embed its contents in the signature as entitlement data. When displaying, write the signature's entitlement data to the path given (use - for standard output)",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--xml",
      description:
        "When displaying entitlements, output them in XML form (--der takes precedence if both are given)",
    },
    {
      name: "--der",
      description: "When displaying entitlements, output them in DER form",
    },
    {
      name: "--enforce-constraint-validity",
      description:
        "When signing, require that any supplied constraints are structurally valid and contain only keys known on this version of macOS or wrapped in the $optional operator",
    },
    {
      name: "--extract-certificates",
      description:
        "When displaying a signature, extract the certificates in the embedded certificate chain and write them to individual files (default prefix: codesign in the current directory)",
      requiresSeparator: true,
      args: {
        name: "prefix",
        isOptional: true,
      },
    },
    {
      name: "--file-list",
      description:
        "When signing or displaying a signature, codesign writes to the given path a list of files that may have been modified as part of the signing process",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--ignore-resources",
      description:
        "During static validation, do not validate the contents of the code's resources",
    },
    {
      name: "--keychain",
      description:
        "During signing, only search for the signing identity in the keychain file specified",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: "--prefix",
      description:
        "If no explicit unique identifier is specified (using the -i option), and if the implicitly generated identifier does not contain any dot (.) characters, then the given string is prefixed to the identifier before use",
      args: {
        name: "prefix",
      },
    },
    {
      name: "--preserve-metadata",
      description:
        "When re-signing code that is already signed, reuse some information from the old signature. Without a value all items are preserved, which is deprecated",
      requiresSeparator: true,
      args: {
        name: "list",
        description: "Comma-separated list of items to preserve",
        isOptional: true,
        generators: valueList({
          delimiter: ",",
          insertDelimiter: true,
          values: preservedMetadata,
        }),
      },
    },
    {
      name: "--resource-rules",
      args: {
        name: "file",
        generators: filepaths({ extensions: ["plist"] }),
      },
      deprecated: true,
      description:
        "Override the default rules for identifying and collecting bundle resources and nested code to be sealed into the signature (no longer documented in the current man page)",
    },
    {
      name: "--strict",
      description:
        "When validating code, apply additional restrictions beyond the defaults (all checks when given without a value)",
      requiresSeparator: true,
      args: {
        name: "options",
        description: "Comma-separated list of strictness checks",
        isOptional: true,
        generators: valueList({
          delimiter: ",",
          insertDelimiter: true,
          values: strictChecks,
        }),
      },
    },
    {
      name: "--timestamp",
      description:
        "During signing, requests that a timestamp authority server be contacted to authenticate the time of signing",
      requiresSeparator: true,
      args: {
        name: "URL",
        description:
          "Timestamp server URL (a default Apple server if omitted, or none to disable timestamping)",
        isOptional: true,
        suggestions: ["none"],
      },
    },
    {
      name: "--runtime-version",
      description:
        "During signing, when the runtime option flag is set, explicitly specify the hardened runtime version stored in the code signature",
      args: {
        name: "version",
      },
    },
    {
      name: "--launch-constraint-self",
      description:
        "When signing, embed the plist at the given path as a launch constraint on this executable",
      args: constraintFile("launch constraint on this executable"),
    },
    {
      name: "--launch-constraint-parent",
      description:
        "When signing, embed the plist at the given path as a launch constraint on this executable's parent",
      args: constraintFile("launch constraint on the parent process"),
    },
    {
      name: "--launch-constraint-responsible",
      description:
        "When signing, embed the plist at the given path as a launch constraint on this executable's responsible process",
      args: constraintFile("launch constraint on the responsible process"),
    },
    {
      name: "--library-constraint",
      description:
        "When signing, embed the plist at the given path as a constraint on the libraries this process can load",
      args: constraintFile("library load constraint"),
    },
    {
      name: "--strip-disallowed-xattrs",
      description:
        "When signing, strip xattrs (such as com.apple.FinderInfo and com.apple.ResourceFork) that could interfere with code signing",
    },
    {
      name: "--single-threaded-signing",
      description:
        "When signing, use one thread for building the resource seal",
    },
    {
      name: "--validate-constraint",
      description:
        "Validate that the constraint plist(s) given are structurally valid and contain only keys known on this OS version",
    },
    {
      name: "--signature-slot",
      description:
        "When verifying or displaying signatures, explicitly select the signature slot (the OS-preferred slot by default)",
      args: {
        name: "slot",
        suggestions: [
          { name: "1", description: "First signature slot" },
          { name: "2", description: "Second signature slot" },
        ],
      },
    },
  ],
  args: {
    name: "path",
    description: "Code to operate on (a path, or a pid when verifying)",
    template: "filepaths",
    isVariadic: true,
    isOptional: true,
  },
};
export default completionSpec;
