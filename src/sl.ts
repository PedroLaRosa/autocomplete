// sl v5.02 (mtoyoda/sl latest tagged release, Homebrew stable 5.02; synced 2026-11-19).
// Source: sl.c option parsing (flags a, F, l, c) and the sl.1 man page at tag 5.02 and master (5.03 source comment), read statically.
// Debian/Ubuntu's sl 5.02-1 package adds a distro-only -e flag (allow interrupt with Ctrl+C) that upstream does not have; not included.
const completionSpec: Fig.Spec = {
  name: "sl",
  description:
    "A highly advanced animation program for curing your bad habit of mistyping",
  options: [
    {
      name: "-a",
      description: "An accident is occurring; people cry for help",
    },
    { name: "-l", description: "Little version" },
    {
      name: "-F",
      description: "It flies like the galaxy express 999",
    },
    {
      name: "-c",
      description: "C51 appears instead of D51",
    },
  ],
};
export default completionSpec;
