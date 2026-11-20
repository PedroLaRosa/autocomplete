// Black v26.10.1 (PyPI latest, 2026-11-19). Source: `black --help` of the PyPI 26.10.1 release (installed in a venv) and the Black source (src/black/__init__.py).
// https://github.com/psf/black
const blackVersions: Fig.Generator = {
  script: ["gh", "release", "list", "--repo", "psf/black"],
  cache: {
    ttl: 1000 * 60 * 60 * 24 * 2, // 2 days
  },
  postProcess: (output) => {
    if (!output.includes("Latest")) {
      return [];
    }

    return output.split("\n").map((line) => {
      return { name: line.split("\t")[0], description: "Version" };
    });
  },
};

const UNSTABLE_FEATURES = [
  "string_processing",
  "hug_parens_with_braces_and_square_brackets",
  "wrap_comprehension_in",
  "simplify_power_operator_hugging",
  "wrap_long_dict_values_in_parens",
  "fix_if_guard_explosion_in_case_statement",
  "pyi_overload_group_blank_lines",
  "fix_unnecessary_parens_in_indexed_assignment",
  "pyi_blank_line_before_decorated_class",
  "pyi_blank_line_after_function_docstring",
  "hug_comparator",
  "parenthesize_tuple_in_yield",
  "fmt_off_class_blank_lines",
  "remove_redundant_generator_parentheses",
  "normalize_tstring_prefix",
  "remove_redundant_unpacking_parentheses",
  "fix_magic_trailing_comma_trailer_split",
  "keep_dict_keys_with_operators",
  "blank_line_after_stub_method",
  "keep_commented_expressions_together",
  "avoid_parens_for_unbreakable_rhs_in_assignments",
  "parenthesize_expressions_with_comments",
  "keep_trailers_on_bracket_comment_overflow",
];

const completionSpec: Fig.Spec = {
  name: "black",
  description: "Python code formatter",
  args: {
    name: "file or directory",
    template: "filepaths",
    isVariadic: true,
  },
  options: [
    {
      name: ["--code", "-c"],
      description: "Format the code passed in as a string",
      args: {
        name: "string",
      },
    },
    {
      name: ["--line-length", "-l"],
      description: "How many characters per line to allow",
      args: {
        name: "line length",
        default: "88",
      },
    },
    {
      name: ["--target-version", "-t"],
      description: "Python versions that should be supported by Black's output",
      isRepeatable: true,
      args: {
        name: "python version",
        suggestions: [
          "py33",
          "py34",
          "py35",
          "py36",
          "py37",
          "py38",
          "py39",
          "py310",
          "py311",
          "py312",
          "py313",
          "py314",
          "py315",
        ],
        default: "Inferred from pyproject.toml, else per-file auto-detection",
      },
    },
    {
      name: "--pyi",
      description:
        "Format all input files like typing stubs regardless of file extension",
    },
    {
      name: "--ipynb",
      description:
        "Format all input files like Jupyter Notebooks regardless of file extension",
    },
    {
      name: "--python-cell-magics",
      description: "Add the given magic to the list of known python-magics",
      isRepeatable: true,
      args: {
        name: "python-magic",
        suggestions: [
          "python",
          "python3",
          "timeit",
          "prun",
          "time",
          "pypy",
          "capture",
        ],
      },
    },
    {
      name: ["--skip-source-first-line", "-x"],
      description: "Skip the first line of the source code",
    },
    {
      name: ["--skip-string-normalization", "-S"],
      description: "Don't normalize string quotes or prefixes",
    },
    {
      name: ["--skip-magic-trailing-comma", "-C"],
      description: "Don't use trailing commas as a reason to split lines",
    },
    {
      name: "--preview",
      description: "Enable potentially disruptive style changes",
    },
    {
      name: "--unstable",
      description:
        "Enable potentially disruptive style changes that have known bugs or are not expected to make it into the stable style (implies --preview)",
    },
    {
      name: "--enable-unstable-feature",
      description:
        "Enable specific features included in the --unstable style (requires --preview or --unstable)",
      isRepeatable: true,
      args: {
        name: "feature",
        suggestions: UNSTABLE_FEATURES,
      },
    },
    {
      name: "--check",
      description: "Don't write the files back, just return the status",
    },
    {
      name: "--diff",
      description:
        "Don't write the files back, just output a diff for each file on stdout",
    },
    {
      name: "--line-ranges",
      description:
        "Only format the given 1-based, inclusive line ranges (can be given multiple times)",
      isRepeatable: true,
      args: {
        name: "START-END",
      },
    },
    {
      name: "--color",
      description: "Show colored diff",
      exclusiveOn: ["--no-color"],
      dependsOn: ["--diff"],
    },
    {
      name: "--no-color",
      description: "Show uncolored diff",
      exclusiveOn: ["--color"],
      dependsOn: ["--diff"],
    },
    {
      name: "--fast",
      description: "Skip temporary sanity checks",
      exclusiveOn: ["--safe"],
    },
    {
      name: "--safe",
      description: "Run temporary sanity checks",
      exclusiveOn: ["--fast"],
    },
    {
      name: "--required-version",
      description: "Require a specific version of Black",
      args: {
        name: "version",
        generators: blackVersions,
      },
    },
    {
      name: "--include",
      description:
        "Regex that matches files and directories that should be included on recursive searches (overrides all exclusions)",
      args: {
        name: "Regex",
      },
    },
    {
      name: "--exclude",
      description:
        "Regex that matches files and directories that should be excluded on recursive searches",
      args: {
        name: "Regex",
      },
    },
    {
      name: "--extend-exclude",
      description:
        "Like --exclude, but adds additional exclusions on top of the default values",
      args: {
        name: "Regex",
      },
    },
    {
      name: "--force-exclude",
      description:
        "Exclude matching files and folders even when passed explicitly",
      args: {
        name: "Regex",
      },
    },
    {
      name: "--stdin-filename",
      description: "The name of the file when passing it through stdin",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: ["--workers", "-W"],
      description: "Number of parallel workers",
      args: {
        name: "integer",
        default: "Number of CPUs",
      },
    },
    {
      name: ["--quiet", "-q"],
      description: "Don't emit non-error messages to stderr",
    },
    {
      name: ["--verbose", "-v"],
      description:
        "Also emit messages about files that were not changed or were ignored due to exclusion patterns",
    },
    {
      name: "--version",
      description: "Show the version",
    },
    {
      name: "--config",
      description: "Read configuration from filepath",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "--cache-dir",
      description:
        "Store the cache in this directory (takes precedence over BLACK_CACHE_DIR)",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--no-cache",
      description: "Skip reading and writing the cache (overrides --cache-dir)",
    },
    {
      name: ["--help", "-h"],
      description: "Show usage information",
    },
  ],
};

export default completionSpec;
