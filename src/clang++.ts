// Clang++ v23.1.6 (latest stable tag llvmorg-23.1.6 of llvm/llvm-project via git ls-remote, 2026-11-19). Source: shares the option list of
// src/clang.ts (clang/include/clang/Options/Options.td at that tag); only -std differs, built from the C++/OpenCL C++/HLSL entries of
// clang/include/clang/Basic/LangStandards.def (-std=cuda and -std=hip are no longer language standards). The 23.1.6 binary was not run.
import {
  clangBase,
  stdCPPSuggestions,
  stdOpenCLCPPSuggestions,
  stdHLSLSuggestions,
} from "./clang";

const completionSpec: Fig.Spec = {
  ...clangBase,
  name: "clang++",
  description: "Clang LLVM compiler for C++",
  options: [
    ...(clangBase as Fig.Subcommand).options,
    {
      name: ["-std", "--std"],
      description: "Language standard to compile for",
      args: {
        name: "value",
        suggestions: [
          ...stdCPPSuggestions,
          ...stdOpenCLCPPSuggestions,
          ...stdHLSLSuggestions,
        ],
      },
      requiresSeparator: true,
    },
  ],
};
export default completionSpec;
