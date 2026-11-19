// cal (macOS 15.5 BSD, man page dated 2019-03-07, synced 2026-11-19). Source: `man cal`
import { monthSuggestions } from "./ncal";

const completionSpec: Fig.Spec = {
  name: "cal",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  description: "Displays a calendar and the date of Easter",
  args: [
    {
      name: "month",
      description:
        "Month as a number or name; given alone, a number is read as the year",
      isOptional: true,
      suggestions: monthSuggestions,
    },
    {
      name: "year",
      description: "Year (1-9999) to print calendar of",
      isOptional: true,
    },
  ],
  options: [
    {
      name: "-3",
      description:
        "Display the previous, current and next month surrounding today",
    },
    {
      name: "-A",
      description: "Display the number of months after the current month",
      args: {
        name: "number",
        description: "Number of months to display",
      },
    },
    {
      name: "-B",
      description: "Display the number of months before the current month",
      args: {
        name: "number",
        description: "Number of months to display",
      },
    },
    {
      name: "-h",
      description: "Turns off highlighting of today",
    },
    {
      name: "-j",
      description:
        "Display Julian days (days one-based, numbered from January 1)",
    },
    {
      name: "-m",
      description:
        "Display the specified month.  If month is specified as a decimal number, it may be followed by the letter ‘f’ or ‘p’ to indicate the following or preceding month of that number, respectively",
      exclusiveOn: ["-y"],
      args: {
        name: "month",
        suggestions: monthSuggestions,
      },
    },
    {
      name: "-y",
      description: "Display a calendar for the specified year",
      exclusiveOn: ["-m"],
    },
  ],
};
export default completionSpec;
