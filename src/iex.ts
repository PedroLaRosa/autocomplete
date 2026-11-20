// IEx v1.20.5 (ships with Elixir, latest stable tag elixir-lang/elixir; Homebrew elixir formula agrees, 2026-11-19).
// Source: usage text of bin/iex and bin/iex.bat plus the IEx argument parsing in lib/elixir/lib/kernel/cli.ex at tag v1.20.5, not a live run.
// Changes vs the previous spec: added --dbg (new IEx-exclusive option); all other options still come from the elixir spec ("It accepts all other options listed by elixir --help").
import elixir from "./elixir";

const completionSpec: Fig.Spec = {
  ...elixir,
  name: "iex",
  description: "Elixir Interactive Shell",
  options: [
    ...elixir.options,
    {
      name: "--dbg",
      description: "Sets the backend for Kernel.dbg/2",
      args: {
        name: "BACKEND",
        suggestions: [
          { name: "pry", description: "Use IEx.pry/0 as the dbg backend" },
          {
            name: "kernel",
            description: "Use the default Kernel.dbg/2 backend",
          },
        ],
      },
    },
    {
      name: "--dot-iex",
      description:
        "Evaluates FILE, line by line, to set up IEx's environment (defaults to .iex.exs or ~/.iex.exs; if empty, no file is loaded)",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--remsh",
      description: "Connects to a node using a remote shell",
      args: {
        name: "NAME",
      },
    },
  ],
};

export default completionSpec;
