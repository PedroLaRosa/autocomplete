// Heroku CLI versioned spec. Latest: v11.14.0 (npm heroku latest, Homebrew formula agrees, 2026-11-20).
// Source of 11.14.0.ts: oclif.manifest.json of heroku@11.14.0 and its bundled @oclif plugins (see header there).
import { createVersionedSpec } from "@tabsmith/autocomplete-helpers";

const versionRegex = /heroku\/([0-9]+\.[0-9]+\.[0-9]+)/;
const versionFiles = ["8.0.0", "8.6.0", "11.14.0"];

export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const { stdout } = await executeShellCommand({
    command: "heroku",
    // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
    args: ["--version"],
  });

  const regexResult = versionRegex.exec(stdout);
  if (regexResult) {
    return regexResult[1];
  } else {
    return "8.0.0";
  }
};

export default createVersionedSpec("heroku", versionFiles);
