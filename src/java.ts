// java (OpenJDK 27 launcher; GA tag jdk-27-ga of openjdk/jdk, Homebrew openjdk is 27.0.1.1; the current feature release on 2026-11-19, next LTS is 29).
// Source: usage text in src/java.base/share/classes/sun/launcher/resources/launcher.properties (java --help / java -X), the man page source src/java.base/share/man/java.md
// and option parsing in src/java.base/share/native/libjli/java.c at tag jdk-27-ga; read statically, the JDK 27 launcher was not run.
// Changes vs the previous spec: dropped the invalid --classpath (the real names are --class-path, -classpath and -cp), split -version/--version, -showversion/--show-version and -h/-help/--help by output stream,
// and added -m/--module, the module-system options (--add-modules, --add-exports, --add-opens, --add-reads, --enable-native-access, --enable-final-field-mutation, ...), assertions, agents, -verbose, -X options
// and a curated set of the documented -XX: options (memory, GC, diagnostics, AOT cache). Undocumented/hidden launcher flags (-fullversion, --show-resolved-modules, ...) and the full -XX: list are not modelled.
import { filepaths } from "@tabsmith/autocomplete-generators";

const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;

// Observable modules of the runtime image, one "name@version" per line
const modulesGenerator: Fig.Generator = {
  script: ["java", "--list-modules"],
  postProcess: (out) =>
    out
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => ({ name: line.trim().split("@")[0] })),
  cache: {
    strategy: "stale-while-revalidate",
    ttl: HOUR_IN_MILLISECONDS,
  },
};

const allModuleSuggestions: Fig.Suggestion[] = [
  { name: "ALL-DEFAULT", description: "All default root modules" },
  { name: "ALL-SYSTEM", description: "All system modules" },
  { name: "ALL-MODULE-PATH", description: "All modules on the module path" },
];

const nativeAccessValues: Fig.Suggestion[] = [
  { name: "allow", description: "Allow without warnings" },
  { name: "warn", description: "Warn on the first occurrence (default)" },
  { name: "deny", description: "Throw an exception" },
];

// -XX:+Flag / -XX:-Flag (boolean options, listed in the form the man page uses)
const xxFlag = (name: string, description: string): Fig.Option => ({
  name: `-XX:${name}`,
  description,
});

// -XX:Name=value
const xxValue = (
  name: string,
  argName: string,
  description: string,
  arg: Partial<Fig.Arg> = {}
): Fig.Option => ({
  name: `-XX:${name}`,
  description,
  requiresSeparator: "=",
  args: { name: argName, ...arg },
});

const completionSpec: Fig.Spec = {
  name: "java",
  description: "Launch a Java application",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
    optionsMustPrecedeArguments: true,
    optionArgSeparators: "=",
  },
  args: [
    {
      name: "mainclass",
      description: "Main class or source file to launch",
      generators: filepaths({ extensions: ["java", "class"] }),
    },
    {
      name: "args",
      description: "Arguments passed to the main class",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    {
      name: "-jar",
      priority: 99,
      description: "Launch the main class in a JAR file",
      args: {
        name: "JAR file",
        generators: filepaths({ extensions: ["jar"] }),
      },
    },
    {
      name: "-D",
      priority: 98,
      description: "Set a system property, -D<NAME>=<VALUE>",
      isRepeatable: true,
    },
    {
      name: ["-m", "--module"],
      description: "Launch the main class in a module",
      args: {
        name: "module[/mainclass]",
      },
    },
    {
      name: ["--class-path", "-classpath", "-cp"],
      description: "Class search path of directories and zip/jar files",
      args: {
        name: "class path",
        template: "filepaths",
      },
    },
    {
      name: ["-p", "--module-path"],
      description: "Search path of directories, modular JARs and modules",
      args: {
        name: "module path",
        template: "filepaths",
      },
    },
    {
      name: "--upgrade-module-path",
      description:
        "Search path of modules that replace upgradeable modules in the runtime image",
      args: {
        name: "module path",
        template: "filepaths",
      },
    },
    {
      name: "--add-modules",
      description: "Root modules to resolve in addition to the initial module",
      isRepeatable: true,
      args: {
        name: "module",
        generators: modulesGenerator,
        suggestions: allModuleSuggestions,
      },
    },
    {
      name: "--limit-modules",
      description: "Limit the universe of observable modules",
      args: {
        name: "module",
        generators: modulesGenerator,
      },
    },
    {
      name: "--enable-native-access",
      description:
        "Allow code in the modules to access code and data outside the Java runtime",
      isRepeatable: true,
      args: {
        name: "module",
        suggestions: [
          { name: "ALL-UNNAMED", description: "Code on the class path" },
        ],
      },
    },
    {
      name: "--illegal-native-access",
      description:
        "Allow or deny native access by modules that have not enabled it (will be removed)",
      args: {
        name: "value",
        suggestions: nativeAccessValues,
      },
    },
    {
      name: "--enable-final-field-mutation",
      description: "Allow code in the modules to mutate final instance fields",
      isRepeatable: true,
      args: {
        name: "module",
        suggestions: [
          { name: "ALL-UNNAMED", description: "Code on the class path" },
        ],
      },
    },
    {
      name: "--illegal-final-field-mutation",
      description:
        "Allow or deny final field mutation by modules that have not enabled it (will be removed)",
      args: {
        name: "value",
        suggestions: [
          { name: "allow", description: "Allow without warnings" },
          { name: "warn", description: "Warn on the first occurrence (default)" },
          {
            name: "debug",
            description: "Warn with a stack trace on every occurrence",
          },
          { name: "deny", description: "Throw an exception" },
        ],
      },
    },
    {
      name: "--list-modules",
      description: "List observable modules and exit",
    },
    {
      name: ["-d", "--describe-module"],
      description: "Describe a module and exit",
      args: {
        name: "module",
        generators: modulesGenerator,
      },
    },
    {
      name: "--validate-modules",
      description: "Validate all modules and exit",
    },
    {
      name: "--dry-run",
      description:
        "Create VM and load main class but do not execute main method",
    },
    {
      name: "--show-module-resolution",
      description: "Show module resolution output during startup",
    },
    {
      name: "--add-reads",
      description: "Make a module read another module, regardless of declaration",
      isRepeatable: true,
      args: {
        name: "module=target-module(,target-module)*",
      },
    },
    {
      name: "--add-exports",
      description:
        "Export a package of a module to other modules, regardless of declaration",
      isRepeatable: true,
      args: {
        name: "module/package=target-module(,target-module)*",
      },
    },
    {
      name: "--add-opens",
      description:
        "Open a package of a module to other modules, regardless of declaration",
      isRepeatable: true,
      args: {
        name: "module/package=target-module(,target-module)*",
      },
    },
    {
      name: "--patch-module",
      description:
        "Override or augment a module with classes and resources in JAR files or directories",
      isRepeatable: true,
      args: {
        name: "module=file(:file)*",
      },
    },
    {
      name: "--source",
      description: "Set the version of the source in source-file mode",
      args: {
        name: "version",
      },
    },
    {
      name: "--enable-preview",
      description: "Allow classes to depend on preview features of this release",
    },
    {
      name: "--finalization",
      description: "Control whether the JVM performs finalization of objects",
      args: {
        name: "value",
        suggestions: [
          { name: "enabled", description: "Finalization is enabled (default)" },
          { name: "disabled", description: "No finalizers are invoked" },
        ],
      },
    },
    {
      name: "--sun-misc-unsafe-memory-access",
      description: "Allow or deny usage of the unsupported API sun.misc.Unsafe",
      args: {
        name: "value",
        suggestions: [
          { name: "allow", description: "Allow without warnings" },
          { name: "warn", description: "Warn on first use (default)" },
          {
            name: "debug",
            description: "Warn with a stack trace on every use",
          },
          { name: "deny", description: "Throw an exception on every use" },
        ],
      },
    },
    {
      name: "--disable-@files",
      description: "Prevent further @argfile expansion",
    },
    {
      name: ["-ea", "-enableassertions"],
      description:
        "Enable assertions, -ea[:<packagename>...|:<classname>]",
      isRepeatable: true,
    },
    {
      name: ["-da", "-disableassertions"],
      description:
        "Disable assertions, -da[:<packagename>...|:<classname>]",
      isRepeatable: true,
    },
    {
      name: ["-esa", "-enablesystemassertions"],
      description: "Enable system assertions",
    },
    {
      name: ["-dsa", "-disablesystemassertions"],
      description: "Disable system assertions",
    },
    {
      name: "-agentlib:",
      description:
        "Load a native agent library, -agentlib:<libname>[=<options>]",
      isRepeatable: true,
    },
    {
      name: "-agentpath:",
      description:
        "Load a native agent library by full pathname, -agentpath:<pathname>[=<options>]",
      isRepeatable: true,
    },
    {
      name: "-javaagent:",
      description:
        "Load a Java programming language agent, -javaagent:<jarpath>[=<options>]",
      isRepeatable: true,
    },
    {
      name: "-splash:",
      description: "Show a splash screen with the specified image, -splash:<imagepath>",
    },
    {
      name: "-verbose:class",
      description: "Display information about each loaded class",
    },
    {
      name: "-verbose:module",
      description: "Display information about the modules in use",
    },
    {
      name: "-verbose:gc",
      description: "Display information about each garbage collection event",
    },
    {
      name: "-verbose:jni",
      description: "Display information about native methods and JNI activity",
    },
    {
      name: "-version",
      description: "Print product version to the error stream and exit",
    },
    {
      name: "--version",
      description: "Print product version to the output stream and exit",
    },
    {
      name: "-showversion",
      description: "Print product version to the error stream and continue",
    },
    {
      name: "--show-version",
      description: "Print product version to the output stream and continue",
    },
    {
      name: ["-?", "-h", "-help"],
      description: "Print the help message to the error stream",
    },
    {
      name: "--help",
      description: "Print the help message to the output stream",
    },
    {
      name: "-X",
      description: "Print help on extra options to the error stream",
    },
    {
      name: "--help-extra",
      description: "Print help on extra options to the output stream",
    },
    // Extra options (-X)
    {
      name: "-Xbatch",
      description: "Disable background compilation",
    },
    {
      name: "-Xbootclasspath/a:",
      description:
        "Append directories and zip/jar files to the end of the bootstrap class path",
    },
    {
      name: "-Xcheck:jni",
      description: "Perform additional checks for JNI functions",
    },
    {
      name: "-Xcomp",
      description: "Force compilation of methods on first invocation (testing only)",
    },
    {
      name: "-Xdebug",
      description: "Does nothing",
      deprecated: true,
    },
    {
      name: "-Xdiag",
      description: "Show additional diagnostic messages",
    },
    {
      name: "-Xint",
      description: "Interpreted mode execution only",
    },
    {
      name: "-Xinternalversion",
      description:
        "Display more detailed JVM version information than -version and exit",
    },
    {
      name: "-Xlog:",
      description:
        "Configure or enable JVM unified logging, -Xlog:<opts> (-Xlog:help for details)",
    },
    {
      name: "-Xloggc:",
      description:
        "Log GC status to a file with time stamps, replaced by -Xlog:gc:<file>",
      deprecated: true,
    },
    {
      name: "-Xmixed",
      description: "Mixed mode execution (default)",
    },
    {
      name: "-Xmn",
      description:
        "Set the initial and maximum size of the young generation heap, -Xmn<size>",
    },
    {
      name: "-Xms",
      description: "Set the minimum and initial Java heap size, -Xms<size>",
    },
    {
      name: "-Xmx",
      description: "Set the maximum Java heap size, -Xmx<size>",
    },
    {
      name: "-Xnoclassgc",
      description: "Disable class garbage collection",
    },
    {
      name: "-Xrs",
      description: "Reduce use of operating system signals by the JVM",
    },
    {
      name: "-Xshare:auto",
      description: "Use shared class data if possible (default)",
    },
    {
      name: "-Xshare:on",
      description:
        "Require shared class data, otherwise fail (testing only)",
    },
    {
      name: "-Xshare:off",
      description: "Do not attempt to use shared class data",
    },
    {
      name: "-XshowSettings",
      description: "Show all settings and continue",
    },
    {
      name: "-XshowSettings:all",
      description: "Show all categories of settings in verbose detail",
    },
    {
      name: "-XshowSettings:locale",
      description: "Show locale related settings",
    },
    {
      name: "-XshowSettings:properties",
      description: "Show system property settings",
    },
    {
      name: "-XshowSettings:vm",
      description: "Show JVM related settings",
    },
    {
      name: "-XshowSettings:security",
      description: "Show all security settings",
    },
    {
      name: "-XshowSettings:security:all",
      description: "Show all security settings",
    },
    {
      name: "-XshowSettings:security:properties",
      description: "Show security properties",
    },
    {
      name: "-XshowSettings:security:providers",
      description: "Show static security provider settings",
    },
    {
      name: "-XshowSettings:security:tls",
      description: "Show TLS related security settings",
    },
    {
      name: "-XshowSettings:system",
      description: "Show host system or container configuration (Linux only)",
    },
    {
      name: "-Xss",
      description: "Set the Java thread stack size, -Xss<size>",
    },
    {
      name: "-Xverify",
      description: "Set the mode of the bytecode verifier",
    },
    // Extra options for macOS
    {
      name: "-XstartOnFirstThread",
      description: "Run the main() method on the first (AppKit) thread (macOS)",
    },
    {
      name: "-Xdock:name",
      description:
        "Override the application name displayed in the dock (macOS)",
      requiresSeparator: "=",
      args: {
        name: "application name",
      },
    },
    {
      name: "-Xdock:icon",
      description: "Override the icon displayed in the dock (macOS)",
      requiresSeparator: "=",
      args: {
        name: "path to icon file",
        template: "filepaths",
      },
    },
    // Advanced options (-XX)
    xxFlag(
      "+UnlockDiagnosticVMOptions",
      "Unlock the options intended for diagnosing the JVM"
    ),
    xxFlag(
      "+UnlockExperimentalVMOptions",
      "Unlock the options that provide experimental features in the JVM"
    ),
    xxValue(
      "ActiveProcessorCount",
      "count",
      "Override the number of CPUs the VM uses to size its thread pools"
    ),
    xxFlag("-CompactStrings", "Disable the Compact Strings feature"),
    xxValue(
      "ErrorFile",
      "filename",
      "Path and file name to which error data is written on an irrecoverable error",
      { template: "filepaths" }
    ),
    xxFlag(
      "+ExtensiveErrorReports",
      "Report more extensive error information in the error file"
    ),
    xxFlag(
      "FlightRecorderOptions",
      "Set the parameters that control Java Flight Recorder, -XX:FlightRecorderOptions:<parameter>=<value>"
    ),
    xxFlag(
      "StartFlightRecording",
      "Start a Java Flight Recorder recording, -XX:StartFlightRecording:<parameter>=<value>"
    ),
    xxValue(
      "MaxDirectMemorySize",
      "size",
      "Maximum total size of java.nio direct-buffer allocations"
    ),
    xxValue(
      "NativeMemoryTracking",
      "mode",
      "Mode for tracking JVM native memory usage",
      {
        suggestions: [
          { name: "off", description: "Do not track native memory (default)" },
          {
            name: "summary",
            description: "Track memory usage by JVM subsystem",
          },
          {
            name: "detail",
            description:
              "Also track memory usage by call site and virtual memory region",
          },
        ],
      }
    ),
    xxFlag(
      "+PrintNMTStatistics",
      "Print native memory tracking data at JVM exit"
    ),
    xxValue(
      "TrimNativeHeapInterval",
      "millis",
      "Interval at which the JVM trims the native heap, 0 disables (Linux glibc only)"
    ),
    xxValue(
      "ObjectAlignmentInBytes",
      "alignment",
      "Memory alignment of Java objects in bytes, a power of 2 from 8 to 256"
    ),
    xxValue(
      "OnError",
      "string",
      "Commands to run when an irrecoverable error occurs"
    ),
    xxValue(
      "OnOutOfMemoryError",
      "string",
      "Commands to run when an OutOfMemoryError is first thrown"
    ),
    xxFlag(
      "+PrintCommandLineFlags",
      "Print ergonomically selected JVM flags that appeared on the command line"
    ),
    xxValue(
      "SharedArchiveFile",
      "path",
      "Path and name of the class data sharing (CDS) archive file",
      { template: "filepaths" }
    ),
    xxFlag(
      "+AutoCreateSharedArchive",
      "Automatically create or use a dynamic CDS archive (with -XX:SharedArchiveFile)"
    ),
    xxFlag(
      "+ShowCodeDetailsInExceptionMessages",
      "Print improved NullPointerException messages"
    ),
    xxFlag(
      "+ShowMessageBoxOnError",
      "Show a dialog box on an irrecoverable error so a debugger can be attached"
    ),
    xxValue(
      "ThreadStackSize",
      "size",
      "Java thread stack size in kilobytes"
    ),
    xxFlag("-UseCompactObjectHeaders", "Disable compact object headers"),
    xxFlag("-UseCompressedOops", "Disable the use of compressed pointers"),
    xxFlag(
      "-UseContainerSupport",
      "Disable automatic container detection (Linux only)"
    ),
    xxFlag("+UseLargePages", "Enable the use of large page memory"),
    xxFlag(
      "+UseTransparentHugePages",
      "Enable the use of transparent huge pages (Linux only)"
    ),
    xxFlag(
      "+AllowUserSignalHandlers",
      "Allow the application to install signal handlers (non-Windows)"
    ),
    xxValue("VMOptionsFile", "filename", "Read VM options from a file", {
      template: "filepaths",
    }),
    xxValue("AOTCache", "cachefile", "Location of the AOT cache", {
      template: "filepaths",
    }),
    xxValue(
      "AOTCacheOutput",
      "cachefile",
      "Location of the AOT cache to write",
      { template: "filepaths" }
    ),
    xxValue(
      "AOTConfiguration",
      "configfile",
      "AOT configuration file to write to or read from",
      { template: "filepaths" }
    ),
    xxValue("AOTMode", "mode", "AOT mode for this run", {
      suggestions: ["auto", "off", "record", "create", "on", "required"],
    }),
    xxFlag(
      "+AOTClassLinking",
      "Perform more advanced optimizations when creating the AOT cache"
    ),
    xxValue(
      "CICompilerCount",
      "threads",
      "Number of compiler threads to use for compilation"
    ),
    xxValue(
      "CompileCommand",
      "command,method[,option]",
      "Specify a command to perform on a method"
    ),
    xxValue(
      "CompileCommandFile",
      "filename",
      "File from which JIT compiler commands are read",
      { template: "filepaths" }
    ),
    xxValue(
      "CompileOnly",
      "methods",
      "Comma-separated list of methods to which compilation is restricted"
    ),
    xxValue(
      "CompileThresholdScaling",
      "scale",
      "Scale when methods are first compiled, a floating point value"
    ),
    xxValue(
      "ReservedCodeCacheSize",
      "size",
      "Maximum code cache size"
    ),
    xxFlag("-TieredCompilation", "Disable tiered compilation"),
    xxFlag(
      "+PrintCompilation",
      "Print a message every time a method is compiled"
    ),
    xxFlag(
      "+LogCompilation",
      "Log compilation activity to hotspot.log (see -XX:LogFile)"
    ),
    xxValue("LogFile", "path", "Path and file name where log data is written", {
      template: "filepaths",
    }),
    xxFlag(
      "+DisableAttachMechanism",
      "Disable the mechanism that lets tools such as jcmd attach to the JVM"
    ),
    xxFlag(
      "+HeapDumpOnOutOfMemoryError",
      "Dump the Java heap to a file when an OutOfMemoryError is thrown"
    ),
    xxValue(
      "HeapDumpPath",
      "path",
      "Path and file name for the heap dump written on OutOfMemoryError",
      { template: "filepaths" }
    ),
    xxFlag(
      "+PrintClassHistogram",
      "Print a class instance histogram on SIGQUIT (Ctrl+\\) or Ctrl+C on Windows"
    ),
    xxFlag(
      "+PrintConcurrentLocks",
      "Print java.util.concurrent locks on SIGQUIT (Ctrl+\\) or Ctrl+C on Windows"
    ),
    xxFlag("+PrintFlagsRanges", "Print the allowed ranges of the JVM flags"),
    xxFlag(
      "-UsePerfData",
      "Disable the perfdata feature (no hsperfdata_userid directories)"
    ),
    // Garbage collection and heap sizing
    xxFlag("+UseG1GC", "Use the garbage-first (G1) garbage collector"),
    xxFlag("+UseZGC", "Use the Z garbage collector (low latency)"),
    xxFlag(
      "+UseParallelGC",
      "Use the parallel (throughput) garbage collector"
    ),
    xxFlag("+UseSerialGC", "Use the serial garbage collector"),
    xxFlag(
      "+UseShenandoahGC",
      "Use the Shenandoah garbage collector (low pause time)"
    ),
    xxValue("ShenandoahGCMode", "mode", "GC mode for Shenandoah GC", {
      suggestions: [
        { name: "satb", description: "Snapshot-at-the-beginning (default)" },
        {
          name: "generational",
          description: "Generational snapshot-at-the-beginning",
        },
      ],
    }),
    xxValue(
      "ShenandoahGCHeuristics",
      "heuristics",
      "Heuristics for Shenandoah GC",
      {
        suggestions: [
          {
            name: "adaptive",
            description: "Maintain the given amount of free heap (default)",
          },
          {
            name: "static",
            description: "Trigger GC when free heap falls below a threshold",
          },
          {
            name: "compact",
            description: "Run GC more frequently with deeper targets",
          },
        ],
      }
    ),
    xxValue(
      "InitialHeapSize",
      "size",
      "Initial size of the memory allocation pool"
    ),
    xxValue(
      "MaxHeapSize",
      "size",
      "Maximum size of the memory allocation pool"
    ),
    xxValue(
      "MinHeapSize",
      "size",
      "Minimum size of the memory allocation pool"
    ),
    xxValue(
      "InitialRAMPercentage",
      "percent",
      "Initial Java heap size as a percentage of the available memory"
    ),
    xxValue(
      "MaxRAMPercentage",
      "percent",
      "Maximum Java heap size as a percentage of the available memory (default: 25)"
    ),
    xxValue(
      "MinRAMPercentage",
      "percent",
      "Maximum Java heap size as a percentage of the available memory for small heaps"
    ),
    xxValue(
      "MaxMetaspaceSize",
      "size",
      "Maximum native memory for class metadata"
    ),
    xxValue(
      "MetaspaceSize",
      "size",
      "Class metadata space size that triggers the first garbage collection"
    ),
    xxValue(
      "MaxNewSize",
      "size",
      "Maximum size of the young generation heap"
    ),
    xxValue("NewSize", "size", "Initial size of the young generation heap"),
    xxValue(
      "NewRatio",
      "ratio",
      "Ratio between young and old generation sizes (default: 2)"
    ),
    xxValue(
      "SurvivorRatio",
      "ratio",
      "Ratio between eden and survivor space sizes (default: 8)"
    ),
    xxValue(
      "TargetSurvivorRatio",
      "percent",
      "Desired percentage of survivor space used after young collection (default: 50)"
    ),
    xxValue(
      "MaxTenuringThreshold",
      "threshold",
      "Maximum tenuring threshold for adaptive GC sizing"
    ),
    xxValue(
      "MaxHeapFreeRatio",
      "percent",
      "Maximum allowed percentage of free heap after a GC event (default: 70)"
    ),
    xxValue(
      "MinHeapFreeRatio",
      "percent",
      "Minimum allowed percentage of free heap after a GC event (default: 40)"
    ),
    xxValue(
      "MaxGCPauseMillis",
      "time",
      "Target for the maximum GC pause time in milliseconds (G1 and Parallel)"
    ),
    xxValue(
      "G1HeapRegionSize",
      "size",
      "Size of the heap regions used by G1, a power of 2 from 1 MB to 32 MB"
    ),
    xxValue(
      "ParallelGCThreads",
      "threads",
      "Number of stop-the-world GC worker threads"
    ),
    xxValue("ConcGCThreads", "threads", "Number of threads used for concurrent GC"),
    xxValue(
      "SoftRefLRUPolicyMSPerMB",
      "time",
      "Milliseconds a softly reachable object is kept per free megabyte of heap"
    ),
    xxValue("TLABSize", "size", "Initial size of a thread-local allocation buffer"),
    xxValue(
      "ZCollectionInterval",
      "seconds",
      "Maximum interval between two GC cycles in ZGC, 0 disables"
    ),
    xxValue(
      "ZUncommitDelay",
      "seconds",
      "Seconds heap memory must be unused before ZGC uncommits it (default: 300)"
    ),
    xxFlag("+AlwaysPreTouch", "Touch every page of the Java heap at startup"),
    xxFlag("+DisableExplicitGC", "Ignore calls to System.gc()"),
    xxFlag(
      "+ExplicitGCInvokesConcurrent",
      "Run a concurrent GC for System.gc() requests (G1 only)"
    ),
    xxFlag(
      "+UseStringDeduplication",
      "Enable string deduplication (requires G1)"
    ),
    xxFlag("+UseNUMA", "Optimize for machines with non-uniform memory architecture"),
    xxFlag(
      "-UseTLAB",
      "Disable thread-local allocation blocks in the young generation"
    ),
    xxFlag(
      "-UseGCOverheadLimit",
      "Disable the GC time limit that triggers an OutOfMemoryError"
    ),
    xxFlag("-UseAdaptiveSizePolicy", "Disable adaptive generation sizing"),
    xxFlag("+PrintAdaptiveSizePolicy", "Print information about adaptive-generation sizing"),
    // Deprecated
    {
      name: "-XX:+FlightRecorder",
      description:
        "Enable Java Flight Recorder (not needed since JDK 8u40)",
      deprecated: true,
    },
    {
      name: "-XX:+ParallelRefProcEnabled",
      description: "Enable parallel reference processing",
      deprecated: true,
    },
  ],
};
export default completionSpec;
