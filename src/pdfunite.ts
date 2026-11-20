// pdfunite (poppler) v26.11.0 (brew, 2026-11-19). Source: utils/pdfunite.cc argDesc on
// poppler master, cross-checked with `pdfunite -h` (26.04.0)
import { filepaths } from "@tabsmith/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "pdfunite",
  description: "Combine multiple pdfs",
  options: [
    { name: "-v", description: "Print copyright and version info" },
    {
      name: ["-h", "-help", "--help", "-?"],
      description: "Print usage information",
    },
  ],
  args: {
    generators: filepaths({ extensions: ["pdf"] }),
    isVariadic: true,
  },
};

export default completionSpec;
