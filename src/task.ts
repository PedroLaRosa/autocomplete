// task: go-task v3.54.0 and Taskwarrior v3.5.0 (latest GitHub tags + Homebrew formulae, checked 2026-11-20). Source: go-task
// internal/flags/flags.go, completion.go and the CLI docs at v3.54.0; Taskwarrior src/commands/Cmd*.cpp, src/Context.cpp and
// doc/man/task.1.in at v3.5.0. This file only picks one of the two specs by the output of `task --version`.
import goTask from "./task/go-task";
import taskWarrior from "./task/taskwarrior";

const completionSpec: Fig.Spec = {
  name: "task",
  // loadSpec doesn't work for root commands (https://github.com/withfig/autocomplete/issues/223)
  generateSpec: async (_tokens, executeShellCommand) => {
    const { stdout } = await executeShellCommand({
      command: "task",
      // eslint-disable-next-line @tabsmith/fig-linter/no-useless-arrays
      args: ["--version"],
    });
    // go-task before 3.43 printed "Task version: v3.x"; both now print a bare semver.
    // ponytail: go-task is on 3.10+ since 2022 and Taskwarrior on 3.0-3.5, revisit if Taskwarrior reaches 3.10
    const [major, minor] = stdout
      .trim()
      .replace(/^v/, "")
      .split(".")
      .map(Number);
    return stdout.includes("Task") || (major === 3 && minor >= 10)
      ? goTask
      : taskWarrior;
  },
};

export default completionSpec;
