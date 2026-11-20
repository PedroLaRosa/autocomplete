// top (macOS 26 Darwin top, apple-oss-distributions/top tag top-144, 2026-11-19). Source: top.1 (dated 2020-02-10), options.c option table + usage text and preferences.c stat key table; not run on macOS.
// The previous spec described Linux procps-ng top; only -b (procps-ng, checked against `top -h` of procps-ng 4.0.4) is kept as a Linux extra, the other Linux flags clash with the macOS ones.
import { valueList } from "@tabsmith/autocomplete-generators";

const sortKeys: Fig.Suggestion[] = [
  { name: "pid", description: "Process ID" },
  { name: "command", description: "Command name" },
  { name: "cpu", description: "CPU usage" },
  { name: "cpu_me", description: "CPU time charged to me by other processes" },
  {
    name: "cpu_others",
    description: "CPU time charged to other processes by me",
  },
  { name: "csw", description: "Number of context switches" },
  { name: "time", description: "Execution time" },
  { name: "threads", description: "Number of threads (total/running)" },
  { name: "ports", description: "Number of Mach ports" },
  { name: "mregion", description: "Number of memory regions" },
  { name: "mem", description: "Physical memory footprint of the process" },
  { name: "rprvt", description: "Resident private address space size" },
  { name: "purg", description: "Purgeable memory size" },
  { name: "compressed", description: "Compressed memory size" },
  { name: "vsize", description: "Total memory size" },
  { name: "vprvt", description: "Private address space size" },
  { name: "kprvt", description: "Private kernel memory size" },
  { name: "kshrd", description: "Shared kernel memory size" },
  { name: "pgrp", description: "Process group ID" },
  { name: "ppid", description: "Parent process ID" },
  { name: "state", description: "Process state" },
  { name: "uid", description: "User ID" },
  { name: "wq", description: "Workqueue total/running" },
  { name: "faults", description: "Number of page faults" },
  { name: "cow", description: "Number of copy-on-write faults" },
  { name: "user", description: "Username" },
  { name: "msgsent", description: "Total number of Mach messages sent" },
  { name: "msgrecv", description: "Total number of Mach messages received" },
  { name: "sysbsd", description: "Total BSD syscalls" },
  { name: "sysmach", description: "Total Mach syscalls" },
  { name: "pageins", description: "Total pageins" },
  { name: "boosts", description: "Number of boosts held by the process" },
  {
    name: "instrs",
    description: "Number of instructions retired by the process",
  },
  {
    name: "cycles",
    description: "Number of cycles spent executing instructions",
  },
  { name: "jetpri", description: "Jetsam priority of the process" },
  { name: "idlew", description: "Idle wakeups" },
  { name: "power", description: "Power score" },
];

const completionSpec: Fig.Spec = {
  name: "top",
  description: "Display sorted information about processes",
  options: [
    {
      name: "-a",
      description: "Accumulative event counting mode (same as -c a)",
    },
    {
      name: "-d",
      description: "Delta event counting mode (same as -c d)",
    },
    {
      name: "-e",
      description: "Absolute event counting mode (same as -c e)",
    },
    {
      name: "-c",
      description: "Set event counting mode",
      args: {
        name: "mode",
        suggestions: [
          {
            name: "a",
            description:
              "Accumulative: count events cumulatively since top was launched",
          },
          {
            name: "d",
            description: "Delta: count events relative to the previous sample",
          },
          { name: "e", description: "Absolute: use absolute counters" },
          {
            name: "n",
            description:
              "Non-event: calculate CPU usage since the previous sample (default)",
          },
        ],
      },
    },
    {
      name: "-F",
      description:
        "Do not calculate statistics on shared libraries (frameworks)",
    },
    {
      name: "-f",
      description:
        "Calculate statistics on shared libraries (frameworks) (default)",
    },
    {
      name: "-h",
      description: "Print command line usage information and exit",
    },
    {
      name: "-i",
      description: "Update framework (-f) info every interval samples",
      args: {
        name: "interval",
      },
    },
    {
      name: "-l",
      description:
        "Use logging mode and display the given number of samples (0 means infinity), even if standard output is a terminal",
      args: {
        name: "samples",
      },
    },
    {
      name: "-ncols",
      description: "Display the given number of columns in logging mode",
      args: {
        name: "columns",
      },
    },
    {
      name: "-n",
      description: "Only display up to the given number of processes",
      args: {
        name: "nprocs",
      },
    },
    {
      name: "-O",
      description:
        "Use the given key as a secondary key when ordering the process display",
      args: {
        name: "skey",
        suggestions: sortKeys,
      },
    },
    {
      name: "-o",
      description:
        "Order the process display by sorting on key in descending order (prefix with + for ascending or - for descending)",
      args: {
        name: "key",
        suggestions: sortKeys,
      },
    },
    {
      name: "-R",
      description:
        "Do not traverse and report the memory object map for each process (default)",
    },
    {
      name: "-r",
      description: "Traverse and report the memory object map for each process",
    },
    {
      name: "-S",
      description:
        "Display the global statistics for swap and purgeable memory",
    },
    {
      name: "-s",
      description: "Set the delay between updates in seconds (default 1)",
      args: {
        name: "delay-secs",
      },
    },
    {
      name: "-stats",
      description: "Only display the comma separated statistics",
      args: {
        name: "keys",
        generators: valueList({
          delimiter: ",",
          insertDelimiter: true,
          values: sortKeys,
        }),
      },
    },
    {
      name: "-pid",
      description: "Only display the given process ID",
      isRepeatable: true,
      args: {
        name: "processid",
      },
    },
    {
      name: ["-user", "-U"],
      description: "Only display processes owned by the given user",
      args: {
        name: "user",
      },
    },
    {
      name: "-u",
      description: "Alias for -o cpu -O time",
    },
    {
      name: "-W",
      description:
        "Show involuntary wait time (ivw) in the CPU usage line (listed in the usage text but not in top.1)",
    },
    {
      name: "-b",
      description: "Run in non-interactive batch mode (Linux procps-ng only)",
    },
  ],
};

export default completionSpec;
