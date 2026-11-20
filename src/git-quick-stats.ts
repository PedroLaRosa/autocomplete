// git-quick-stats 2.11.0 (latest tag of git-quick-stats/git-quick-stats via git ls-remote, matches the Homebrew formula, 2026-11-19).
// Source: usage() text, the non-interactive option parser in the git-quick-stats shell script, and git-quick-stats.1
// read statically from a shallow clone of tag 2.11.0 (the script was not run). The man page also lists
// --activity-calendar, but the script only implements -k/--commits-calendar-by-author, so only the latter is included.
const completionSpec: Fig.Spec = {
  name: "git-quick-stats",
  description:
    "Git quick statistics is a simple and efficient way to access various statistics in git repository",
  options: [
    {
      name: ["--help", "-h", "-?"],
      description: "Show help for git-quick-stats",
    },
    {
      name: ["--detailed-git-stats", "-T"],
      description: "Give a detailed list of git stats",
    },
    {
      name: ["--git-stats-by-branch", "-R"],
      description: "Show detailed list of git stats by branch",
    },
    {
      name: ["--changelogs", "-c"],
      description: "Show changelogs",
    },
    {
      name: ["--changelogs-by-author", "-L"],
      description: "Show changelogs by author",
    },
    {
      name: ["--my-daily-stats", "-S"],
      description: "Show your current daily stats",
    },
    {
      name: ["--csv-output-by-branch", "-V"],
      description: "Output daily stats by branch in CSV format",
    },
    {
      name: ["--json-output", "-j"],
      description: "Save git log as a JSON formatted file to a specified area",
    },
    {
      name: ["--branch-tree", "-b"],
      description: "Show an ASCII graph of the git repo branch history",
    },
    {
      name: ["--branches-by-date", "-D"],
      description: "Show branches by date",
    },
    {
      name: ["--contributors", "-C"],
      description: "See a list of everyone who contributed to the repo",
    },
    {
      name: ["--new-contributors", "-n"],
      description:
        "List everyone who made their first contribution since a specified date",
    },
    {
      name: ["--new-contributors-since-tag", "-N"],
      description:
        "List everyone who made their first contribution since a specified tag",
    },
    {
      name: ["--commits-per-author", "-a"],
      description: "Displays a list of commits per author",
    },
    {
      name: ["--commits-per-day", "-d"],
      description: "Displays a list of commits per day",
    },
    {
      name: ["--commits-by-month", "-m"],
      description: "Displays a list of commits per month",
    },
    {
      name: ["--commits-by-year", "-Y"],
      description: "Displays a list of commits per year",
    },
    {
      name: ["--commits-by-weekday", "-w"],
      description: "Displays a list of commits per weekday",
    },
    {
      name: ["--commits-by-author-by-weekday", "-W"],
      description: "Displays a list of commits per weekday by author",
    },
    {
      name: ["--commits-by-hour", "-o"],
      description: "Displays a list of commits per hour",
    },
    {
      name: ["--commits-by-author-by-hour", "-A"],
      description: "Displays a list of commits per hour by author",
    },
    {
      name: ["--commits-by-timezone", "-z"],
      description: "Displays a list of commits per timezone",
    },
    {
      name: ["--commits-by-author-by-timezone", "-Z"],
      description: "Displays a list of commits per timezone by author",
    },
    {
      name: ["--commits-calendar-by-author", "-k"],
      description:
        "Shows a calendar heatmap of commits per day-of-week per month for a given author",
    },
    {
      name: ["--commits-heatmap", "-H"],
      description:
        "Shows a heatmap of commits per day-of-week per month for the last 30 days",
    },
    {
      name: ["--suggest-reviewers", "-r"],
      description: "Show the best people to contact to review code",
    },
  ],
  // Only uncomment if git-quick-stats takes an argument
  // args: {}
};
export default completionSpec;
