import { disableBuildServersOption, msbuildTargetOption } from "./shared";

const completionSpec: Fig.Spec = {
  name: "msbuild",
  description:
    ".NET Builder. Gives access to a fully functional MSBuild; all arguments are passed through to MSBuild",
  args: {
    name: "arguments",
    description: "Arguments passed to MSBuild",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
  options: [disableBuildServersOption, msbuildTargetOption()],
};

export default completionSpec;
