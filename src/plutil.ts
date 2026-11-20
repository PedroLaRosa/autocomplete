// plutil (macOS built-in tool, no standalone version; man page bundled with Xcode 27.3 beta 2, 2026-11-19).
// Source: plutil(1) from the keith/xcode-man-pages mirror (commit 6ddd0b2, man page dated 2021-03-29) cross-checked with the
// open-source Swift port in swiftlang/swift-corelibs-foundation (Sources/plutil, 2026-11-18 main); NOT a live run on macOS.
// Added -insert/-replace/-remove/-extract/-type/-create commands, -append/-expect/-header/-n options and swift/objc formats.

const plistTypeSuggestions: Fig.Suggestion[] = [
  { name: "-bool", description: 'YES if passed "YES" or "true", otherwise NO' },
  { name: "-integer", description: "Any valid 64 bit integer" },
  { name: "-float", description: "Any valid 64 bit float" },
  { name: "-string", description: "UTF8 encoded string" },
  {
    name: "-date",
    description: "Date in XML property list format (not supported for JSON)",
  },
  { name: "-data", description: "Base-64 encoded string" },
  {
    name: "-xml",
    description: "XML property list, useful for inserting compound values",
  },
  {
    name: "-json",
    description: "JSON fragment, useful for inserting compound values",
  },
  { name: "-array", description: "Empty array (takes no value)" },
  { name: "-dictionary", description: "Empty dictionary (takes no value)" },
];

const expectTypeSuggestions: Fig.Suggestion[] = [
  "bool",
  "integer",
  "float",
  "string",
  "date",
  "data",
  "array",
  "dictionary",
].map((name) => ({ name }));

const keypathArg: Fig.Arg = {
  name: "keypath",
  description:
    "Key-value coding key path. A numerical component on an array acts on that index, or inserts at it when last",
};

const expectOption: Fig.Option = {
  name: "-expect",
  description: "Fail if the value at keypath is not of this type",
  args: {
    name: "expect_type",
    suggestions: expectTypeSuggestions,
  },
};

const completionSpec: Fig.Spec = {
  name: "plutil",
  description:
    "Check the syntax of property list files, or convert a plist file from one format to another. Specifying - as an input file reads from stdin",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
    optionsMustPrecedeArguments: true,
  },
  args: {
    name: "file",
    description: "File to check the syntax of or convert",
    template: "filepaths",
    isVariadic: true,
  },
  options: [
    {
      name: "-help",
      description: "Show the usage information for the command and exit",
    },
    {
      name: "-p",
      description:
        "Print the property list in a human-readable fashion (the output format is not stable and not for machine parsing)",
    },
    {
      name: "-lint",
      description:
        "Check the named property list files for syntax errors. This is the default command option if none is specified",
    },
    {
      name: "-convert",
      description:
        "Convert the named file to the indicated format and write back to the file system",
      args: {
        name: "format",
        description: "Format to convert the named file to",
        suggestions: [
          {
            name: "xml1",
            description: "For version 1 of the XML plist format",
          },
          {
            name: "binary1",
            description: "For version 1 of the binary plist",
          },
          {
            name: "json",
            description: "For the JSON format",
          },
          {
            name: "swift",
            description: "To convert from plist to Swift literal syntax",
          },
          {
            name: "objc",
            description: "To convert from plist to Obj-C literal syntax",
          },
        ],
      },
    },
    {
      name: "-header",
      description:
        "With -convert objc, also create a .h file (useful for first time conversions to literal syntax)",
    },
    {
      name: "-insert",
      description:
        "Insert a value into the property list before writing it out (the value is required unless the type is -array or -dictionary)",
      args: [
        keypathArg,
        {
          name: "type",
          description: "Type of the value to insert",
          suggestions: plistTypeSuggestions,
        },
        {
          name: "value",
          description: "Value to insert",
          isOptional: true,
        },
      ],
    },
    {
      name: "-append",
      description:
        "With -insert, append the value to the end of the array that keypath references",
    },
    {
      name: "-replace",
      description:
        "Overwrite an existing value in the property list before writing it out",
      args: [
        keypathArg,
        {
          name: "type",
          description: "Type of the new value",
          suggestions: plistTypeSuggestions,
        },
        {
          name: "value",
          description: "New value",
          isOptional: true,
        },
      ],
    },
    {
      name: "-remove",
      description:
        "Remove the value at keypath from the property list before writing it out",
      args: keypathArg,
    },
    {
      name: "-extract",
      description:
        "Output the value at keypath in the property list as a new plist of the given format",
      args: [
        keypathArg,
        {
          name: "format",
          description: "Format of the output",
          suggestions: [
            {
              name: "xml1",
              description: "For version 1 of the XML plist format",
            },
            {
              name: "binary1",
              description: "For version 1 of the binary plist",
            },
            {
              name: "json",
              description: "For the JSON format",
            },
            {
              name: "raw",
              description:
                "Print the unencapsulated value at keypath (to stdout unless -o is specified)",
            },
          ],
        },
      ],
    },
    {
      name: "-type",
      description:
        "Output the type of the value at keypath in the property list",
      args: keypathArg,
    },
    expectOption,
    {
      name: "-create",
      description: "Create an empty plist of the specified format",
      args: {
        name: "format",
        description: "Format of the new plist",
        suggestions: ["xml1", "binary1", "json"],
      },
    },
    {
      name: "--",
      description: "Specifies that all further arguments are file names",
    },
    {
      name: "-n",
      description:
        "With -extract raw, do not print a terminating newline character",
    },
    {
      name: "-s",
      description: "Don't print anything on success",
    },
    {
      name: "-r",
      description:
        "For JSON, add whitespace and indentation to make the output more human-readable and sort the keys like -p does",
    },
    {
      name: "-o",
      description:
        "Specify an alternate path name for the result of the -convert operation; this option is only useful with a single file to be converted. Specifying - as the path outputs to stdout",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "-e",
      description:
        "Specify an alternate extension for converted files, and the output file names are otherwise the same",
      args: {
        name: "extension",
      },
    },
  ],
};
export default completionSpec;
