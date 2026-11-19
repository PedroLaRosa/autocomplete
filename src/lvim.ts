// LunarVim v1.4.0 (LunarVim/LunarVim latest release tag 1.4.0, 2024-05-14; master last commit 2025-06-05; checked 2026-11-19). Source: shallow clone at tag 1.4.0, read statically (not run): utils/bin/lvim.template, which is `exec -a lvim nvim -u <base-dir>/init.lua "$@"`, so lvim takes exactly the Neovim command line.
// Options are shared with src/nvim.ts, which is synced to Neovim v0.12.6.
import nvim from "./nvim";

const completionSpec: Fig.Spec = {
  ...nvim,
  name: "lvim",
  description: "IDE layer for Neovim with sane defaults",
};

export default completionSpec;
