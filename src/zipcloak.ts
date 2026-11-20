// zipcloak 3.0 (Info-ZIP Zip 3.0 of 2008-07-05, the final upstream release, as shipped in macOS 15; apple-oss-distributions/zip tag zip-27, 2026-11-19). Source: zip30/zipcloak.c options table, zip30/man/zipcloak.1 and `zipcloak -h` (not a live run on macOS).
// -q/--quiet is documented in the man page and help but is missing from the 3.0 option table, so zipcloak rejects it ("short option 'q' not supported"); it is therefore not listed. -l is an undocumented short alias of -L.
const completionSpec: Fig.Spec = {
  name: "zipcloak",
  description: "Encrypt entries in a zipfile",
  args: {
    name: "zipfile",
    description: "Zipped file to encrypt entries into",
    template: ["filepaths"],
    suggestCurrentToken: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show a short help for zipcloak",
    },
    {
      name: ["--decrypt", "-d"],
      description: "Decrypt encrypted entries (copy if given wrong password)",
    },
    {
      name: ["--license", "-L", "-l"],
      description: "Show software license",
    },
    {
      name: ["--version", "-v"],
      description: "Show version information",
    },
    {
      name: ["--output-file", "-O"],
      description:
        "Write output to new archive zipfile, leaving original archive as is",
      args: {
        name: "zipfile",
        description: "New zipfile that will be written to",
        template: ["filepaths"],
        suggestCurrentToken: true,
      },
    },
    {
      name: ["--temp-path", "-b"],
      description: "Use the directory given by path for the temporary zip file",
      args: {
        name: "directory",
        description: "Directory for the temporary zip file",
        template: ["folders"],
      },
    },
  ],
};
export default completionSpec;
