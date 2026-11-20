// Tangram (no tagged release; upstream main e84d2007, 2026-11-19). NOT synced to a current release: tangramdotdev/tangram was rewritten into a different product (a build system and package manager, binary tangram/tg with build, run, checkin, tag, ...) that no longer has app, migrate, predict or train.
// No git tags exist, the canary release assets return 404 and the CLI could not be built or run here, so no authoritative current version or flag set was obtained; the commands below are the legacy Tangram ML CLI (v0.x) and are kept unchanged.
const completionSpec: Fig.Spec = {
  name: "tangram",
  description: "",
  subcommands: [
    {
      name: "app",
      description: "Run the app",
      options: [
        {
          name: ["-c", "--config"],
          description: "The path to a config file",
          args: {
            name: "CONFIG",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate your app database",
      options: [
        {
          name: "--database-url",
          args: {
            name: "DATABASE_URL",
          },
        },
      ],
    },
    {
      name: "predict",
      description: "Make predictions with a model",
      options: [
        {
          name: ["-f", "--file"],
          description: "The path to read examples from, defaults to stdin",
          args: { name: "FILE", template: "filepaths" },
        },
        {
          name: ["-m", "--model"],
          description: "The path to the model to make predictions with",
          args: { name: "MODEL", template: "filepaths" },
        },
        {
          name: ["-o", "--output"],
          description:
            "The path to write the predictions to, defaults to stdout",
          args: { name: "OUTPUT", template: "filepaths" },
        },
        {
          name: ["-p", "--probabilities"],
          description:
            "Output probabilities instead of class labels, only relevant for classifier models",
          args: { name: "PROBABILITIES" },
        },
      ],
    },
    {
      name: "train",
      description: "Train a model",
      options: [
        {
          name: ["-c", "--config"],
          description: "The path to a config file",
          args: {
            name: "CONFIG",
            template: "filepaths",
          },
        },
        {
          name: ["-f", "--file"],
          description: "The path to your .csv file",
          args: { name: "FILE", template: "filepaths" },
        },
        {
          name: "--file-test",
          description: "The path to your .csv file used for testing",
          args: { name: "FILE_TEST", template: "filepaths" },
        },
        {
          name: "--file-train",
          description: "The path to your .csv file used for training",
          args: { name: "FILE_TRAIN", template: "filepaths" },
        },
        {
          name: ["-o", "--output"],
          description: "The path to write the .tangram file to",
          args: { name: "OUTPUT", template: "filepaths" },
        },
        {
          name: ["-t", "--target"],
          description: "The name of the column to predict",
          args: { name: "TARGET" },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help information",
    },
    {
      name: ["--version", "-v"],
      description: "Print version information",
    },
  ],
  // Only uncomment if tangram takes an argument
  // args: {}
};
export default completionSpec;
