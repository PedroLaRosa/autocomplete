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
