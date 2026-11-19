// example/ holds spec-authoring samples, not a real CLI (git_push.ts mirrors the `git push` synopsis, checked against git v2.56.1 = latest tag of git/git, 2026-11-19). Source: Documentation/git-push.adoc and builtin/push.c at tag v2.56.1; trigger.ts is a generic generator demo with no upstream and is unchanged
// WORK IN PROGRESS

// This is taken straight from the top of `git push --help`

// SYNOPSIS
// git push [--all | --branches | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=<git-receive-pack>]
//            [--repo=<repository>] [-f | --force] [-d | --delete] [--prune] [-q | --quiet] [-v | --verbose]
//            [-u | --set-upstream] [-o <string> | --push-option=<string>]
//            [--[no-]signed | --signed=(true|false|if-asked)]
//            [--force-with-lease[=<refname>[:<expect>]] [--force-if-includes]]
//            [--no-verify] [<repository> [<refspec>...]]

// In your head think:
// 1. is this value an option or an argument? And what is it's parent?
// 2. If it's an argument is isOptional and/or variadic?

// [<arg1> <arg2>] -> arg1 is optional, arg2 is mandatory
// Why is this the case? Inputting arguments is optional but if you input the first one, you must input the secon

// <arg1> [arg2...] -> This is just one argument that is NOT optional and is variadic

const completionSpec: Fig.Spec = {
  name: "git_push_example",
  description: "",

  // [<repository> [<refspec>...]]

  // This is tricky. The arguments are surrounded by square brackets.
  // Even though there are triangular brackets around repository is a strange git syntax. indicating the first arg is optional
  //
  //

  args: [
    { name: "repository", isOptional: true },
    { name: "refspec", isOptional: true, isVariadic: true },
  ],
  options: [
    // [--follow-tags]

    // Despite the square brackets, Fig does not currently have a syntax to support optional options
    { name: "--all" },

    // [--all | --branches | --mirror | --tags]

    // The | symbol means mutually exclusive. Fig currently doesn't support mutually exclusive options.
    // so you should list each option on their own.
    { name: "--branches" },
    { name: "--mirror" },
    { name: "--tags" },

    // [-n | --dry-run]
    { name: ["-n", "--dry-run"] },

    // [-q | --quiet]
    { name: ["-q", "--quiet"] },

    // [--force-with-lease[=<refname>[:<expect>]] [--force-if-includes]]
    { name: "--force-if-includes" },
    { name: "--receive-pack", args: { name: "git-receive-pack" } }, // No `=` sign, arg is mandatory
    // ...
    { name: ["-u", "--set-upstream"] },
    { name: "-o", args: { name: "string" } }, // arg is mandatory
    { name: "--push-option", args: { name: "string" } }, // arg is mandatory

    // [--[no-]signed|--signed=(true|false|if-asked)]
  ],
};

export default completionSpec;
