// Premake v5.0.0-beta8 (latest git tag of premake/premake-core, checked 2026-11-19). Source: the Lua scripts at tag
// v5.0.0-beta8 read statically (src/_premake_init.lua for the options, src/base/help.lua, src/base/option.lua,
// src/_modules.lua plus the newaction() calls of the preloaded modules for the actions). The binary was not run.
// Only the built-in actions and options are covered: raw and self-test (not preloaded) and options added by
// external modules or by a project's premake5.lua (for example --dc from premake-dlang) are left out.
const options: Fig.Option[] = [
  {
    name: "--file",
    description: "Read FILE as a Premake script, default is premake5.lua",
    args: {
      name: "file",
      description: "Path to the premake5.lua file",
      template: "filepaths",
    },
  },
  {
    name: "--debugger",
    description: "Start MobDebug remote debugger. Works with ZeroBrane Studio",
  },
  {
    name: "--fatal",
    description: "Treat warnings from project scripts as errors",
  },
  {
    name: "--insecure",
    description: "Forfeit SSH certification checks",
  },
  {
    name: "--interactive",
    description: "Interactive command prompt",
  },
  {
    name: "--arch",
    description: "Generate files for a different architecture",
    args: {
      name: "arch",
      description: "The target architecture",
      suggestions: [
        "universal",
        "x86",
        "x86_64",
        "arm",
        "aarch64",
        "riscv64",
        "loongarch64",
        "ppc",
        "ppc64",
        "wasm32",
        "wasm64",
        "e2k",
        "mips64el",
      ],
    },
  },
  {
    name: "--os",
    description: "Generate files for a different operating system",
    args: {
      name: "os",
      description: "The operating system",
      suggestions: [
        { name: "aix", description: "IBM AIX" },
        { name: "bsd", description: "OpenBSD, NetBSD, or FreeBSD" },
        { name: "emscripten", description: "Emscripten" },
        { name: "haiku", description: "Haiku" },
        { name: "hurd", description: "GNU/Hurd" },
        { name: "ios", description: "Apple iOS" },
        { name: "linux", description: "Linux" },
        { name: "macosx", description: "Apple Mac OS X" },
        { name: "solaris", description: "Solaris" },
        { name: "tvos", description: "Apple tvOS" },
        { name: "uwp", description: "Microsoft Universal Windows Platform" },
        { name: "windows", description: "Microsoft Windows" },
      ],
    },
  },
  {
    name: "--scripts",
    description: "Search for additional scripts on the given path",
    args: {
      name: "path",
      description: "The path to the scripts",
      template: "folders",
    },
  },
  {
    name: "--shell",
    description: "Select shell (for command token substitution)",
    args: {
      name: "shell",
      description: "The shell",
      suggestions: [
        { name: "cmd", description: "Windows command shell" },
        { name: "posix", description: "For posix shells" },
      ],
    },
  },
  {
    name: "--systemscript",
    description: "Override default system script (premake5-system.lua)",
    args: {
      name: "script",
      description: "The system script",
      template: "filepaths",
    },
  },
  {
    name: "--verbose",
    description: "Generate extra debug text output",
  },
  {
    name: "--cc",
    description: "Choose a C/C++ compiler set",
    args: {
      name: "cc",
      description: "The C/C++ compiler set",
      suggestions: [
        { name: "clang", description: "Clang (clang)" },
        { name: "gcc", description: "GNU GCC (gcc/g++)" },
        {
          name: "mingw",
          description: "MinGW GCC (gcc/g++), deprecated, use gcc",
        },
        {
          name: "msc-v80",
          description: "Microsoft compiler (Visual Studio 2005)",
        },
        {
          name: "msc-v90",
          description: "Microsoft compiler (Visual Studio 2008)",
        },
        {
          name: "msc-v100",
          description: "Microsoft compiler (Visual Studio 2010)",
        },
        {
          name: "msc-v110",
          description: "Microsoft compiler (Visual Studio 2012)",
        },
        {
          name: "msc-v120",
          description: "Microsoft compiler (Visual Studio 2013)",
        },
        {
          name: "msc-v140",
          description: "Microsoft compiler (Visual Studio 2015)",
        },
        {
          name: "msc-v141",
          description: "Microsoft compiler (Visual Studio 2017)",
        },
        {
          name: "msc-v142",
          description: "Microsoft compiler (Visual Studio 2019)",
        },
        {
          name: "msc-v143",
          description: "Microsoft compiler (Visual Studio 2022)",
        },
        {
          name: "msc-v145",
          description: "Microsoft compiler (Visual Studio 2026)",
        },
      ],
    },
  },
  {
    name: "--dotnet",
    description: "Choose a .NET compiler set",
    args: {
      name: "dotnet",
      description: "The .NET compiler set",
      suggestions: [
        { name: "msnet", description: "Microsoft .NET (csc)" },
        { name: "mono", description: "Novell Mono (mcs)" },
        { name: "pnet", description: "Portable.NET (cscc)" },
      ],
    },
  },
];

const action = (name: string, description: string): Fig.Subcommand => ({
  name,
  description,
  options,
});

const visualStudioAction = (year: string): Fig.Subcommand =>
  action(`vs${year}`, `Generate Visual Studio ${year} project files`);

const completionSpec: Fig.Spec = {
  name: "premake",
  description: "Premake CLI",
  subcommands: [
    action("clean", "Remove all binaries and generated files"),
    visualStudioAction("2026"),
    visualStudioAction("2022"),
    visualStudioAction("2019"),
    visualStudioAction("2017"),
    visualStudioAction("2015"),
    visualStudioAction("2013"),
    visualStudioAction("2012"),
    visualStudioAction("2010"),
    visualStudioAction("2008"),
    visualStudioAction("2005"),
    action("gmake", "Generate GNU makefiles for POSIX, MinGW, and Cygwin"),
    {
      ...action(
        "gmake2",
        "Generate GNU makefiles (renamed to gmake, use gmake instead)"
      ),
      deprecated: true,
    },
    action(
      "gmakelegacy",
      "Generate GNU makefiles for POSIX, MinGW, and Cygwin (legacy generator)"
    ),
    action("ninja", "Generate Ninja build files"),
    action("xcode4", "Generate Apple Xcode 4 project files"),
    action("codelite", "Generate CodeLite project files"),
  ],
  options: [
    {
      name: "--help",
      description: "Display this information",
    },
    {
      name: "--version",
      description: "Display version information",
    },
  ],
};

export default completionSpec;
