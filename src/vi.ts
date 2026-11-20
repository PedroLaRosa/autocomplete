// Vi (Vim v9.2.1373 invoked as vi; newest vim/vim release tag v9.2.1373, 2026-11-18; checked 2026-11-19). Source: vim source at tag v9.2.1373 read statically (not run): usage() and option parsing in src/main.c and runtime/doc/vim.1. Vim parses the same options whatever its executable is called (macOS and most Linux distributions ship vi as Vim), so the options are shared with src/vim.ts. Traditional Unix vi / nvi / busybox vi were not checked and may support fewer options.
import vim from "./vim";

const completionSpec: Fig.Spec = {
  ...vim,
  name: "vi",
  description:
    "Vi[m] is one of two powerhouse text editors in the Unix world, the other being EMACS",
};

export default completionSpec;
