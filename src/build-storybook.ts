// build-storybook v6.5.16 (npm @storybook/core-server + @storybook/react, last release of the 6.x line that shipped this binary; current Storybook is v10.6.7, 2026-11-20).
// Source: read statically, not run: @storybook/core-server@6.5.16 dist/cjs/cli/{prod,utils}.js (commander option definitions),
// @storybook/react@6.5.16 bin/build.js, and docs/api/cli-options.md + MIGRATION.md at tag v6.5.16; -w/--watch checked against 6.3.12 vs 6.4.22 (dropped in 6.4).
// Upstream removed the start-storybook and build-storybook binaries in Storybook 7.0 (MIGRATION.md at v10.6.7, "start-storybook / build-storybook binaries removed");
// current releases use `storybook dev` / `storybook build` instead, which this spec does not cover.
import { storybookCommonOptions } from "./start-storybook";

const completionSpec: Fig.Spec = {
  name: "build-storybook",
  description:
    "Storybook build CLI tools (removed in Storybook 7, use `storybook build`)",
  options: [
    {
      name: ["-o", "--output-dir"],
      description: "Directory where to store built files",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--docs",
      description: "Builds Storybook in documentation mode",
    },
    ...storybookCommonOptions,
  ],
};

export default completionSpec;
