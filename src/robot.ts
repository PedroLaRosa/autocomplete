// Robot Framework v7.5.1 (PyPI robotframework 7.5.1, 2026-11-20). Source: USAGE text in src/robot/run.py
// of the 7.5.1 sdist, read statically (the downloaded package was not executed).
import { filepaths } from "@tabsmith/autocomplete-generators";

const tagsGenerator: Fig.Generator = {
  script: [
    "bash",
    "-c",
    'for i in $(find -E . -regex ".*.robot" -type f); do cat -s $i ; done',
  ],
  postProcess: (out) => {
    // find all lines with tags
    // regex: line that starts with 2+ spaces, than '[Tags]  ' and words
    const iter = out.matchAll(/(?:^\s\s+\[Tags\])\s\s+(\w+ *)*(?!.\#.*)/gm);

    const seen: Set<string> = new Set();
    const suggestions: Fig.Suggestion[] = [];

    for (const [line] of iter) {
      // original line: "   [Tags]  first tag  dev tag    some tag   "
      // desired line: ["first tag", "dev tag", "some tag"]
      for (const tag of line.trim().substring(6).trim().split(/\s\s+/)) {
        if (seen.has(tag)) continue;
        seen.add(tag);
        suggestions.push({
          name: tag,
          description: "Tag",
          icon: "🏷",
        });
      }
    }
    return suggestions;
  },
};

const variablesGenerator: Fig.Generator = {
  trigger: ":",
  custom: async (tokens, executeShellCommand) => {
    const finalToken = tokens[tokens.length - 1];
    const isKey = !finalToken.includes(":");
    if (!isKey) return [];
    const { stdout } = await executeShellCommand({
      command: "bash",
      args: [
        "-c",
        'for i in $(find -E . -regex ".*.(robot|resource)" -type f); do cat -s $i ; done',
      ],
    });
    const iter = stdout.matchAll(/^\$\{(.*?)\}/gm);
    return [...iter]
      .map((item) => item[1])
      .map((variable) => ({
        name: variable,
        description: "Variable",
      }));
  },
};

const testCasesGenerator: Fig.Generator = {
  script: [
    "bash",
    "-c",
    'for i in $(find -E . -regex ".*.robot" -type f); do cat -s $i ; done',
  ],
  postProcess: (out) => {
    // find all parts of the code with test cases
    // regex: everything after '***Test Cases***' until '***???***')
    const iter = out.matchAll(
      /(?:\*{3} ?Test Cases ?\*{3})([\S\s]*)(?:\*{3}(\w+\s?)+\*{3})*/gim
    );

    const seen: Set<string> = new Set();
    const suggestions: Fig.Suggestion[] = [];

    // go through ***Test Cases** blocks
    for (const [_, block] of iter) {
      // get every test case name
      // regex: word/s at the start of a line until '#'
      const lines = block.matchAll(/^(\w+( |-)*)+(?!.\#.*)(?!.\#.*)/gm);
      // go through all the test cases names found
      for (let [testCase] of lines) {
        testCase = testCase.trim();
        // validate if the test case name isn't divided by more than one space
        if (testCase.search(/\s\s+/) != -1) continue;

        if (seen.has(testCase)) continue;
        seen.add(testCase);

        suggestions.push({
          name: testCase,
          description: "Test case",
        });
      }
    }

    return suggestions;
  },
};

const completionSpec: Fig.Spec = {
  name: "robot",
  description: "CLI for running Robot Framework automation tests",
  args: {
    name: "robot script",
    isScript: true,
    isVariadic: true,
    generators: filepaths({
      extensions: ["robot"],
      editFileSuggestions: { priority: 76, icon: "fig://icon?type=txt" },
    }),
  },
  options: [
    {
      name: ["-h", "-?", "--help"],
      description: "Print usage instructions",
    },
    {
      name: "--rpa",
      description:
        'Turn on the generic automation mode. Mainly affects terminology so that "test" is replaced with "task" in logs and reports. By default the mode is got from test/task header in data files',
    },
    {
      name: "--language",
      isRepeatable: true,
      description:
        "Activate localization. The value can be a name or a code of a built-in language, or a path or a module name of a custom language file",
      args: {
        name: "lang",
      },
    },
    {
      name: ["-F", "--extension"],
      description:
        "Parse only files with this extension when executing a directory. Has no effect when running individual files or when using resource files. Only `*.robot` files are parsed by default",
      args: {
        name: "extension",
        description: "File extensions divided by colon",
        suggestions: ["txt", "robot:txt"],
      },
    },
    {
      name: ["-I", "--parseinclude"],
      isRepeatable: true,
      description:
        "Parse only files matching the pattern. It can be a file name or pattern, a file path, or a directory path to parse all files in that directory recursively",
      args: {
        name: "pattern",
        template: ["filepaths", "folders"],
      },
    },
    {
      name: ["-N", "--name"],
      description: "Set a name of the top level suite",
      args: {
        name: "name",
      },
    },
    {
      name: ["-D", "--doc"],
      insertValue: "-D '{cursor}'",
      description:
        "Set a documentation of the top level suite. Simple formatting is supported. If the value is a path to an existing file, the documentation is read from that file",
      args: {
        name: "documentation",
      },
    },
    {
      name: ["-M", "--metadata"],
      isRepeatable: true,
      insertValue: "-M {cursor}:",
      description: "Set metadata of the top level suite",
      args: {
        name: "name:value",
      },
    },
    {
      name: ["-G", "--settag"],
      isRepeatable: true,
      description: "Sets given tag to all executed tests",
      args: {
        name: "tag",
      },
    },
    {
      name: ["-t", "--test"],
      isRepeatable: true,
      description:
        "Select tests by name or by long name containing also parent suite name like `Parent.Test`",
      args: {
        name: "name",
        generators: testCasesGenerator,
      },
    },
    {
      name: "--task",
      isRepeatable: true,
      description: "Alias to --test. Especially applicable with --rpa",
      args: {
        name: "name",
        generators: testCasesGenerator,
      },
    },
    {
      name: ["-s", "--suite"],
      isRepeatable: true,
      description: "Select suites by name",
      args: {
        name: "name",
      },
    },
    {
      name: ["-i", "--include"],
      isRepeatable: true,
      description: "Select test cases by tag",
      args: {
        name: "tag",
        generators: tagsGenerator,
      },
    },
    {
      name: ["-e", "--exclude"],
      isRepeatable: true,
      description: "Select test cases not to run by tag",
      args: {
        name: "tag",
        generators: tagsGenerator,
      },
    },
    {
      name: ["-R", "--rerunfailed"],
      description:
        "Select failed tests from an earlier output file to be re-executed",
      args: {
        name: "output file",
        generators: filepaths({
          extensions: ["xml"],
        }),
      },
    },
    {
      name: ["-S", "--rerunfailedsuites"],
      description:
        "Select failed suites from an earlier output file to be re-executed",
      args: {
        name: "output file",
        generators: filepaths({
          extensions: ["xml"],
        }),
      },
    },
    {
      name: "--runemptysuite",
      description: "Executes suite even if it contains no tests",
    },
    {
      name: "--skip",
      isRepeatable: true,
      description: "Tests having given tag will be skipped",
      args: {
        name: "tag",
        generators: tagsGenerator,
      },
    },
    {
      name: "--skiponfailure",
      isRepeatable: true,
      description: "Tests having given tag will be skipped if they fail",
      args: {
        name: "tag",
        generators: tagsGenerator,
      },
    },
    {
      name: ["-v", "--variable"],
      isRepeatable: true,
      description: "Set variables in the test data",
      args: {
        name: "variable",
        generators: variablesGenerator,
      },
    },
    {
      name: ["-V", "--variablefile"],
      isRepeatable: true,
      description: "Python or YAML file file to read variables from",
      args: {
        name: "file",
        generators: filepaths({
          extensions: ["py", "yaml"],
        }),
      },
    },
    {
      name: ["-d", "--outputdir"],
      description:
        "Where to create output files. The default is the directory where tests are run from",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: ["-o", "--output"],
      description:
        "XML output file relative to --outputdir unless given as an absolute path. Can be disabled by giving a special value `NONE`. Default: output.xml",
      args: {
        name: "file",
        suggestions: ["output.xml", "NONE"],
      },
    },
    {
      name: "--legacyoutput",
      description:
        "Create XML output file in format compatible with Robot Framework 6.x and earlier",
    },
    {
      name: ["-l", "--log"],
      description:
        "HTML log file. Can be disabled by giving a special value `NONE`. Default: log.html",
      args: {
        name: "file",
        suggestions: ["log.html", "NONE"],
      },
    },
    {
      name: ["-r", "--report"],
      description:
        "HTML report file. Can be disabled with `NONE` similarly as --log. Default: report.html",
      args: {
        name: "file",
        suggestions: ["report.html", "NONE"],
      },
    },
    {
      name: ["-x", "--xunit"],
      description:
        "XUnit compatible result file. Not created unless this option is specified",
      args: {
        name: "file",
        suggestions: ["xunit.xml"],
      },
    },
    {
      name: ["-b", "--debugfile"],
      description:
        "Debug file written during execution. Not created unless this option is specified",
      args: {
        name: "file",
      },
    },
    {
      name: ["-T", "--timestampoutputs"],
      description:
        "Adds timestamp in a format `YYYYMMDD-hhmmss` to all generated output files between their basename and extension",
    },
    {
      name: "--splitlog",
      description:
        "Split the log file into smaller pieces that open in browsers transparently",
    },
    {
      name: "--logtitle",
      description:
        "Title for the generated log file. The default title is `<SuiteName> Log.`",
      args: {
        name: "title",
      },
    },
    {
      name: "--reporttitle",
      description:
        "Title for the generated report file. The default title is `<SuiteName> Report`",
      args: {
        name: "title",
      },
    },
    {
      name: "--reportbackground",
      description:
        "Background colors to use in the report file. Given in format `passed:failed:skipped` where the `:skipped` part can be omitted",
      args: {
        name: "colors",
      },
    },
    {
      name: "--maxerrorlines",
      description:
        "Maximum number of error message lines to show in report when tests fail. Default is 40, minimum is 10 and `NONE` can be used to show the full message",
      args: {
        name: "lines",
        suggestions: [
          {
            name: "40",
            displayName: "40 (default)",
            priority: 76,
            description: "Default number of lines",
          },
          {
            name: "10",
            displayName: "10 (minimum)",
            description: "Minimum number of lines",
          },
          {
            name: "NONE",
            description: "Unlimited number of lines. Shows the full message",
          },
        ],
      },
    },
    {
      name: "--maxassignlength",
      description:
        "Maximum number of characters to show in log when variables are assigned. Zero or negative values can be used to avoid showing assigned values at all. Default is 200",
      args: {
        name: "characters",
        suggestions: [
          {
            name: "200",
            displayName: "200 (default)",
            priority: 76,
            description: "Default number of characters",
          },
          {
            name: "0",
            description: "No values at all",
          },
        ],
      },
    },
    {
      name: ["-L", "--loglevel"],
      description:
        "Threshold level for logging. Use syntax `LOGLEVEL:DEFAULT` to define the default visible log level in log files",
      args: {
        name: "level",
        suggestions: [
          { name: "TRACE", type: "option" },
          { name: "DEBUG", type: "option" },
          {
            name: "INFO",
            displayName: "INFO (default)",
            priority: 76,
            type: "option",
          },
          { name: "WARN", type: "option" },
          {
            name: "NONE",
            displayName: "NONE (no logging)",
            type: "option",
          },
        ],
      },
    },
    {
      name: "--suitestatlevel",
      description:
        "How many levels to show in `Statistics by Suite` in log and report",
      args: {
        name: "level",
      },
    },
    {
      name: "--tagstatinclude",
      isRepeatable: true,
      description:
        "Include only matching tags in `Statistics by Tag` in log and report",
      args: {
        name: "tag",
        generators: tagsGenerator,
      },
    },
    {
      name: "--tagstatexclude",
      isRepeatable: true,
      description: "Exclude matching tags from `Statistics by Tag`",
      args: {
        name: "tag",
        generators: tagsGenerator,
      },
    },
    {
      name: "--tagstatcombine",
      isRepeatable: true,
      description:
        "Create combined statistics based on tags. These statistics are added into `Statistics by Tag`",
      args: {
        name: "tags:name",
        generators: tagsGenerator,
      },
    },
    {
      name: "--tagdoc",
      isRepeatable: true,
      description: "Add documentation to tags matching the given pattern",
      args: {
        name: "pattern:doc",
        generators: tagsGenerator,
      },
    },
    {
      name: "--tagstatlink",
      isRepeatable: true,
      description:
        "Add external links into `Statistics by Tag`. Pattern can use `*`, `?` and `[]` as wildcards",
      args: {
        name: "pattern:link:title",
        generators: tagsGenerator,
      },
    },
    {
      name: "--expandkeywords",
      isRepeatable: true,
      description:
        "Matching keywords will be automatically expanded in the log file",
      args: {
        name: "pattern",
        suggestions: [
          {
            name: "name:<pattern>",
            insertValue: "name:{cursor}",
            type: "option",
          },
          {
            name: "tag:<pattern>",
            insertValue: "tag:{cursor}",
            type: "option",
          },
        ],
      },
    },
    {
      name: "--removekeywords",
      isRepeatable: true,
      description:
        "Remove keyword data from the generated log file. Keywords containing warnings are not removed except in the `all` mode",
      args: {
        name: "pattern",
        suggestions: [
          {
            name: "all",
            description: "Remove data from all keywords",
            type: "option",
          },
          {
            name: "passed",
            description:
              "Remove data only from keywords in passed test cases and suites",
            type: "option",
          },
          {
            name: "for",
            description: "Remove passed iterations from for loops",
            type: "option",
          },
          {
            name: "while",
            description: "Remove passed iterations from while loops",
            type: "option",
          },
          {
            name: "wuks",
            description:
              "Remove all but the last failing keyword inside `BuiltIn.Wait Until Keyword Succeeds`",
            type: "option",
          },
          {
            name: "name:<pattern>",
            insertValue: "name:{cursor}",
            type: "option",
          },
          {
            name: "tag:<pattern>",
            insertValue: "tag:{cursor}",
            type: "option",
          },
        ],
      },
    },
    {
      name: "--flattenkeywords",
      isRepeatable: true,
      description: "Flattens matching keywords in the generated log file",
      args: {
        name: "pattern",
        suggestions: [
          {
            name: "for",
            description: "Flatten FOR loops fully",
            type: "option",
          },
          {
            name: "while",
            description: "Flatten WHILE loops fully",
            type: "option",
          },
          {
            name: "iteration",
            description: "Flatten FOR/WHILE loop iterations",
            type: "option",
          },
          {
            name: "foritem",
            description: "Deprecated alias for `iteration`",
            type: "option",
            deprecated: true,
          },
          {
            name: "name:<pattern>",
            insertValue: "name:{cursor}",
            type: "option",
          },
          {
            name: "tag:<pattern>",
            insertValue: "tag:{cursor}",
            type: "option",
          },
        ],
      },
    },
    {
      name: "--listener",
      isRepeatable: true,
      description:
        "A class for monitoring test execution. Gets notifications e.g. when tests start and end",
      args: {
        name: "class",
      },
    },
    {
      name: "--nostatusrc",
      description:
        "Sets the return code to zero regardless of failures in test cases. Error codes are returned normally",
    },
    {
      name: "--dryrun",
      description:
        "Verifies test data and runs tests so that library keywords are not executed",
    },
    {
      name: ["-X", "--exitonfailure"],
      description: "Stops test execution if any test fails",
    },
    {
      name: "--exitonerror",
      description:
        "Stops test execution if any error occurs when parsing test data, importing libraries, and so on",
    },
    {
      name: "--skipteardownonexit",
      description:
        "Causes teardowns to be skipped if test execution is stopped prematurely",
    },
    {
      name: "--randomize",
      description:
        "Randomizes the test execution order. Use syntax `VALUE:SEED` to give a custom random seed, which must be an integer",
      args: {
        name: "type",
        suggestions: [
          {
            name: "all",
            description: "Randomizes both suites and tests",
            type: "option",
          },
          { name: "suites", description: "Randomizes suites", type: "option" },
          { name: "tests", description: "Randomizes tests", type: "option" },
          {
            name: "none",
            displayName: "none (default)",
            priority: 76,
            description: "No randomization (default)",
            type: "option",
          },
        ],
      },
    },
    {
      name: "--prerunmodifier",
      isRepeatable: true,
      description:
        "Class to programmatically modify the suite structure before execution",
      args: {
        name: "class",
      },
    },
    {
      name: "--prerebotmodifier",
      isRepeatable: true,
      description:
        "Class to programmatically modify the result model before creating reports and logs",
      args: {
        name: "class",
      },
    },
    {
      name: "--parser",
      isRepeatable: true,
      description:
        "Custom parser class or module. Parser classes accept arguments the same way as with --listener",
      args: {
        name: "parser",
      },
    },
    {
      name: "--console",
      description:
        "How to report execution on the console. Values other than the built-in ones are interpreted as a custom console class or module",
      args: {
        name: "type",
        suggestions: [
          {
            name: "verbose",
            displayName: "verbose (default)",
            priority: 76,
            description: "Report every suite and test (default)",
            type: "option",
          },
          {
            name: "dotted",
            description:
              "Only show `.` for passed test, `s` for skipped tests, and `F` for failed tests",
            type: "option",
          },
          {
            name: "quiet",
            description: "No output except for errors and warnings",
            type: "option",
          },
          {
            name: "none",
            description: "No output whatsoever",
            type: "option",
          },
        ],
      },
    },
    {
      name: ["-.", "--dotted"],
      description: "Shortcut for `--console dotted`",
    },
    {
      name: "--quiet",
      description: "Shortcut for `--console quiet`",
    },
    {
      name: ["-W", "--consolewidth"],
      description: "Width of the console output. Default is 78",
      args: {
        name: "chars",
        suggestions: [
          {
            name: "78",
            displayName: "78 (default)",
            priority: 76,
          },
        ],
      },
    },
    {
      name: ["-C", "--consolecolors"],
      description: "Use colors on console output or not",
      args: {
        name: "option",
        suggestions: [
          {
            name: "auto",
            displayName: "auto (default)",
            priority: 76,
            description: "Use colors when output not redirected (default)",
            type: "option",
          },
          {
            name: "on",
            description: "Always use colors",
            type: "option",
          },
          {
            name: "ansi",
            description: "Like `on` but use ANSI colors also on Windows",
            type: "option",
          },
          {
            name: "off",
            description: "Disable colors altogether",
            type: "option",
          },
        ],
      },
    },
    {
      name: "--consolelinks",
      description: "Control making paths to results files hyperlinks",
      args: {
        name: "option",
        suggestions: [
          {
            name: "auto",
            displayName: "auto (default)",
            priority: 76,
            description: "Use links when colors are enabled (default)",
            type: "option",
          },
          {
            name: "off",
            description: "Disable links unconditionally",
            type: "option",
          },
        ],
      },
    },
    {
      name: ["-K", "--consolemarkers"],
      description:
        "Show markers on the console when top level keywords in a test case end",
      args: {
        name: "option",
        suggestions: [
          {
            name: "auto",
            type: "option",
          },
          {
            name: "on",
            type: "option",
          },
          {
            name: "off",
            type: "option",
          },
        ],
      },
    },
    {
      name: ["-P", "--pythonpath"],
      isRepeatable: true,
      description:
        "Additional locations (directories, ZIPs) where to search libraries and other extensions when they are imported",
      args: {
        name: "path",
        generators: filepaths({
          extensions: ["zip"],
        }),
      },
    },
    {
      name: ["-A", "--argumentfile"],
      isRepeatable: true,
      description:
        "Text file to read more arguments from. Use special path `STDIN` to read contents from the standard input stream",
      args: {
        name: "path",
        template: "filepaths",
        suggestions: ["STDIN"],
      },
    },
    {
      name: "--version",
      description: "Print version information",
    },
  ],
};
export default completionSpec;
