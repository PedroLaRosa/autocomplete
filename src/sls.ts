// sls: alias of the serverless spec, synced with Serverless Framework v4.46.0 (npm "serverless" latest, 2026-11-20).
// The npm package ships `sls` as a second bin of `serverless` (package.json "bin"); see src/serverless.ts for sources.
import serverless from "./serverless";
const completionSpec: Fig.Spec = {
  ...serverless,
  name: "sls",
};
export default completionSpec;
