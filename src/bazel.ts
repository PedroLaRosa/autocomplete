// Bazel v9.3.3 (newest stable git tag of bazelbuild/bazel via git ls-remote, 2026-11-20). Source: static read of the 9.3.3 sources (release of 2026-11-19), no binary was run.
// Commands come from the @Command annotations (lib/runtime/commands, lib/bazel/commands, lib/runtime/mobileinstall) and
// BuiltinCommandModule/BazelBuiltinCommandModule. Options come from the @Option annotations of every options class that
// BlazeCommandUtils.getOptions() assembles for a command (startup/common/command options of the modules listed in
// lib/bazel/Bazel.java plus the configuration fragments registered in BazelRuleClassProvider); only documented options are
// listed (not UNDOCUMENTED, HIDDEN or INTERNAL). Startup flags were cross-checked against src/main/cpp/startup_options.cc.
// Not covered: Starlark-defined flags (--@repo//pkg:flag) and rc-file syntax.

const bazelBuildFiles: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `FILES=( $(find ./ -name BUILD) ); for f in $FILES; do echo "----$f"; \\cat "$f"; done`,
  ],
  // returns filepaths and contents in the form below, note the "----" to indicate the filepath
  // ----.//lib/BUILD
  // load("@rules_cc//cc:defs.bzl", "cc_library")

  // cc_library(
  //     name = "hello-time",
  //     srcs = ["hello-time.cc"],
  //     hdrs = ["hello-time.h"],
  //     visibility = ["//main:__pkg__"],
  // )

  postProcess: function (out) {
    const lines = out.split("\n");
    // return lines
    const targets = [];
    let currPath = "";
    for (let i = 0; i < lines.length; i++) {
      const isFilepath = lines[i].match("----.(.*)/BUILD");
      const isBazelTarget = lines[i].match('name = "(.*)"');
      if (isFilepath) {
        currPath = isFilepath[1] + ":";
      } else if (isBazelTarget) {
        targets.push({
          name: currPath + isBazelTarget[1],
          description: "Bazel target",
          icon: "🎯",
          priority: 80,
        });
      }
    }
    return targets;
  },
};

// Bazel boolean options are written as --flag, --noflag or --flag=<value>
const booleanOption = (
  name: string,
  description: string,
  extra: { abbrev?: string; deprecated?: boolean; values?: string[] } = {}
): Fig.Option[] => [
  {
    name: extra.abbrev ? [`--${name}`, `-${extra.abbrev}`] : `--${name}`,
    description,
    exclusiveOn: [`--no${name}`],
    ...(extra.values && {
      requiresSeparator: true,
      args: { name: "value", suggestions: extra.values, isOptional: true },
    }),
    ...(extra.deprecated && { deprecated: true }),
  },
  {
    name: `--no${name}`,
    description: `Equivalent to --${name}=false`,
    exclusiveOn: [`--${name}`],
    ...(extra.deprecated && { deprecated: true }),
  },
];

// Startup options: given before the command, e.g. `bazel --output_base=/tmp/x build //...`
const startupOptions: Fig.Option[] = [
  // BlazeServerStartupOptions
  ...booleanOption(
    "autodetect_server_javabase",
    "When --noautodetect_server_javabase is passed, Bazel does not fall back to the local JDK for running the bazel server and instead exits"
  ),
  ...booleanOption(
    "batch",
    "If set, Bazel will be run as just a client process without a server, instead of in the standard client/server mode",
    { deprecated: true }
  ),
  ...booleanOption(
    "batch_cpu_scheduling",
    "Only on Linux; use 'batch' CPU scheduling for Bazel. This policy is useful for workloads that are non-interactive, but do not want to lower their nice value"
  ),
  ...booleanOption(
    "block_for_lock",
    "When --noblock_for_lock is passed, Bazel does not wait for a running command to complete, but instead exits immediately"
  ),
  ...booleanOption(
    "client_debug",
    "If true, log debug information from the client to stderr. Changing this option will not cause the server to restart"
  ),
  {
    name: "--connect_timeout_secs",
    description:
      "The amount of time the client waits for each attempt to connect to the server",
    args: { name: "integer", default: "30" },
  },
  {
    name: "--digest_function",
    description: "The hash function to use when computing file digests",
    args: { name: "hash function", suggestions: ["SHA256", "SHA1", "BLAKE3"] },
  },
  {
    name: "--experimental_cgroup_parent",
    description:
      "The cgroup where to start the bazel server as an absolute path. The server process will be started in the specified cgroup for each supported controller",
    args: { name: "path" },
  },
  ...booleanOption(
    "experimental_run_in_user_cgroup",
    "If true, the Bazel server will be run with systemd-run, and the user will own the cgroup. This flag only takes effect on Linux"
  ),
  {
    name: "--extra_classpath",
    description:
      "A colon-separated list of classpath entries to be added to the classpath of the Bazel server",
    args: { name: "classpath" },
  },
  {
    name: "--failure_detail_out",
    description:
      "If set, specifies a location to write a failure_detail protobuf message if the server experiences a failure and cannot report it via gRPC, as normal",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "idle_server_tasks",
    "Run System.gc() when the server is idle"
  ),
  ...booleanOption(
    "ignore_all_rc_files",
    "Disables all rc files, regardless of the values of other rc-modifying flags, even if these flags come later in the list of startup options"
  ),
  {
    name: "--io_nice_level",
    description:
      "Only on Linux; set a level from 0-7 for best-effort IO scheduling using the sys_ioprio_set system call. 0 is highest priority, 7 is lowest",
    args: {
      name: "integer",
      suggestions: ["-1", "0", "1", "2", "3", "4", "5", "6", "7"],
      default: "-1",
    },
  },
  {
    name: "--local_startup_timeout_secs",
    description:
      "The maximum amount of time the client waits to connect to the server",
    args: { name: "integer", default: "120" },
  },
  {
    name: "--macos_qos_class",
    description:
      "Sets the QoS service class of the Bazel server when running on macOS. This flag has no effect on all other platforms but is supported to ensure rc files can be shared among them without changes",
    args: {
      name: "QoS service class",
      suggestions: [
        "user-interactive",
        "user-initiated",
        "default",
        "utility",
        "background",
      ],
      default: "default",
    },
  },
  {
    name: "--max_idle_secs",
    description:
      "The number of seconds the build server will wait idling before shutting down. Zero means that the server will never shutdown",
    args: { name: "integer", default: "10800" },
  },
  {
    name: "--output_base",
    description:
      "If set, specifies the output location to which all build output will be written. Otherwise, the location will be ${OUTPUT_ROOT}/_bazel_${USER}/${MD5_OF_WORKSPACE_ROOT}",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--output_user_root",
    description:
      "The user-specific directory beneath which all build outputs are written; by default, this is a function of $USER, but by specifying a constant, build outputs can be shared between collaborating users",
    args: { name: "path", template: "folders" },
  },
  ...booleanOption(
    "preemptible",
    "If true, the command can be preempted if another command is started"
  ),
  ...booleanOption(
    "quiet",
    "If true, no informational messages are emitted on the console, only errors. Changing this option will not cause the server to restart"
  ),
  {
    name: "--server_jvm_out",
    description:
      "The location to write the server's JVM's output. If unset then defaults to a location in output_base",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "shutdown_on_low_sys_mem",
    "If max_idle_secs is set and the build server has been idle for a while, shut down the server when the system is low on free RAM"
  ),
  ...booleanOption(
    "unlimit_coredumps",
    "Raises the soft coredump limit to the hard limit to make coredumps of the server (including the JVM) and the client possible under common conditions"
  ),
  ...booleanOption(
    "windows_enable_symlinks",
    "If true, real symbolic links will be created on Windows instead of file copying. Requires Windows developer mode to be enabled and Windows 10 version 1703 or greater"
  ),
  // HostJvmStartupOptions
  {
    name: "--host_jvm_args",
    description: "Flags to pass to the JVM executing Bazel",
    args: { name: "jvm_arg" },
    isRepeatable: true,
  },
  {
    name: "--host_jvm_debug",
    description:
      "Convenience option to add some additional JVM startup flags, which cause the JVM to wait during startup until you connect from a JDWP-compliant debugger (like Eclipse) to port 5005",
  },
  {
    name: "--server_javabase",
    description: "Path to the JVM used to execute Bazel itself",
    args: { name: "jvm path", template: "folders" },
  },
  // BazelStartupOptionsModule.Options
  {
    name: "--bazelrc",
    description:
      "The location of the user .bazelrc file containing default values of Bazel options. /dev/null indicates that all further --bazelrcs will be ignored, which is useful to disable the search for a user rc file, e.g. in release builds",
    args: { name: "path", template: "filepaths" },
    isRepeatable: true,
  },
  ...booleanOption(
    "home_rc",
    "Whether or not to look for the home bazelrc file at $HOME/.bazelrc"
  ),
  ...booleanOption(
    "system_rc",
    "Whether or not to look for the system-wide bazelrc"
  ),
  ...booleanOption(
    "workspace_rc",
    "Whether or not to look for the workspace bazelrc file at $workspace/.bazelrc"
  ),
  // RemoteStartupOptions
  ...booleanOption(
    "experimental_remote_repo_contents_cache",
    "If enabled, the remote cache will be used to store the results of reproducible repository rules"
  ),
];

// Options accepted by every command (UiOptions, CommonCommandOptions, remote, BES, repository, ...)
const commonOptions: Fig.Option[] = [
  // UiOptions
  ...booleanOption(
    "attempt_to_print_relative_paths",
    "When printing the location part of messages, attempt to use a path relative to the workspace directory or one of the directories specified by --package_path"
  ),
  {
    name: "--color",
    description: "Use terminal controls to colorize output",
    args: {
      name: "setting",
      suggestions: ["yes", "no", "auto"],
      default: "auto",
    },
  },
  {
    name: "--curses",
    description: "Use terminal cursor controls to minimize scrolling output",
    args: {
      name: "setting",
      suggestions: ["yes", "no", "auto"],
      default: "auto",
    },
  },
  {
    name: "--experimental_ui_max_stdouterr_bytes",
    description:
      "The maximum size of the stdout / stderr files that will be printed to the console. -1 implies no limit",
    args: { name: "integer", default: "1048576" },
  },
  ...booleanOption(
    "progress_in_terminal_title",
    "Show the command progress in the terminal title. Useful to see what bazel is doing when having multiple terminal tabs"
  ),
  ...booleanOption("show_progress", "Display progress messages during a build"),
  {
    name: "--show_progress_rate_limit",
    description:
      "Minimum number of seconds between progress messages in the output",
    args: { name: "number", default: "0.2" },
  },
  ...booleanOption("show_timestamps", "Include timestamps in messages"),
  {
    name: "--ui_actions_shown",
    description:
      "Number of concurrent actions shown in the detailed progress bar; each action is shown on a separate line. The progress bar always shows at least one one, all numbers less than 1 are mapped to 1",
    args: { name: "integer", default: "8" },
  },
  {
    name: "--ui_event_filters",
    description:
      "Specifies which events to show in the UI. It is possible to add or remove events to the default ones using leading +/-, or override the default set completely with direct assignment",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  // CommonCommandOptions
  ...booleanOption("announce_rc", "Whether to announce rc options"),
  {
    name: "--build_metadata",
    description: "Custom key-value string pairs to supply in a build event",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  {
    name: "--config",
    description:
      "Selects additional config sections from the rc files; for every <command>, it also pulls in the options from <command>:<config> if such a section exists; if this section doesn't exist in any .rc file, Bazel fails with an error",
    args: { name: "config" },
    isRepeatable: true,
  },
  ...booleanOption(
    "enable_platform_specific_config",
    "If true, Bazel picks up host-OS-specific config lines from bazelrc files. For example, if the host OS is Linux and you run bazel build, Bazel picks up lines starting with build:linux"
  ),
  {
    name: "--experimental_action_cache_gc_idle_delay",
    description:
      "How long the server must remain idle before a garbage collection of the action cache is attempted. Ineffectual unless --experimental_action_cache_gc_max_age is nonzero",
    args: { name: "duration", default: "5m" },
  },
  {
    name: "--experimental_action_cache_gc_max_age",
    description:
      "If set to a nonzero value, the action cache will be periodically garbage collected to remove entries older than this age",
    args: { name: "duration", default: "0" },
  },
  {
    name: "--experimental_action_cache_gc_threshold",
    description:
      "The percentage of stale action cache entries required for garbage collection to be triggered. Ineffectual unless --experimental_action_cache_gc_max_age is nonzero",
    args: { name: "percentage", default: "10" },
  },
  ...booleanOption(
    "experimental_collect_load_average_in_profiler",
    "If enabled, the profiler collects the system's overall load average"
  ),
  ...booleanOption(
    "experimental_collect_pressure_stall_indicators",
    "If enabled, the profiler collects the Linux PSI data"
  ),
  ...booleanOption(
    "experimental_collect_resource_estimation",
    "If enabled, the profiler collects CPU and memory usage estimation for local actions"
  ),
  ...booleanOption(
    "experimental_collect_skyframe_counts_in_profiler",
    "If enabled, the profiler collects SkyFunction counts in the Skyframe graph over time for key function types, like configured targets and action executions"
  ),
  ...booleanOption(
    "experimental_collect_system_network_usage",
    "If enabled, the profiler collects the system's network usage"
  ),
  ...booleanOption(
    "experimental_collect_worker_data_in_profiler",
    "If enabled, the profiler collects worker's aggregated resource data"
  ),
  ...booleanOption(
    "experimental_enable_thread_dump",
    "Whether to enable thread dumps"
  ),
  {
    name: "--experimental_install_base_gc_max_age",
    description:
      "How long an install base must go unused before it's eligible for garbage collection. If nonzero, the server will attempt to garbage collect other install bases when idle",
    args: { name: "duration", default: "30d" },
  },
  {
    name: "--experimental_profile_additional_tasks",
    description:
      "Specifies additional profile tasks to be included in the profile",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  ...booleanOption(
    "experimental_profile_include_primary_output",
    'Includes the extra "out" attribute in action events that contains the exec path to the action\'s primary output'
  ),
  ...booleanOption(
    "experimental_profile_include_target_configuration",
    "Includes target configuration hash in action events' JSON profile data"
  ),
  ...booleanOption(
    "experimental_profile_include_target_label",
    "Includes target label in action events' JSON profile data"
  ),
  ...booleanOption(
    "experimental_strict_repo_env",
    "If true, repository rules and module extensions will only inherit PATH, PATHEXT (on Windows), and environment variables explicitly specified by --repo_env"
  ),
  {
    name: "--experimental_thread_dump_action_execution_inactivity_duration",
    description:
      "Dump the threads when action execution being inactive for this duration. If zero, no thread dumps are written for action execution being inactive",
    args: { name: "duration", default: "0" },
  },
  {
    name: "--experimental_thread_dump_interval",
    description:
      "How often to dump the threads periodically. If zero, no thread dumps are written periodically",
    args: { name: "duration", default: "0" },
  },
  ...booleanOption(
    "generate_json_trace_profile",
    "If enabled, Bazel profiles the build and writes a JSON-format profile into a file in the output base. View profile by loading into chrome://tracing",
    { values: ["auto", "yes", "no"] }
  ),
  ...booleanOption(
    "heap_dump_on_oom",
    "Whether to manually output a heap dump if an OOM is thrown (including manual OOMs due to reaching --gc_thrashing_limits)"
  ),
  ...booleanOption(
    "heuristically_drop_nodes",
    "If true, Bazel will remove FileState and DirectoryListingState nodes after related File and DirectoryListing node is done to save memory"
  ),
  {
    name: "--http_connector_attempts",
    description: "The maximum number of attempts for http downloads",
    args: { name: "integer", default: "8" },
  },
  {
    name: "--http_connector_retry_max_timeout",
    description:
      "The maximum timeout for http download retries. With a value of 0, no timeout maximum is defined",
    args: { name: "duration", default: "0s" },
  },
  {
    name: "--http_max_parallel_downloads",
    description: "The maximum number parallel http downloads",
    args: { name: "integer", default: "8" },
  },
  {
    name: "--http_timeout_scaling",
    description:
      "Scale all timeouts related to http downloads by the given factor",
    args: { name: "number", default: "1.0" },
  },
  ...booleanOption(
    "incompatible_repo_env_ignores_action_env",
    "If true, --action_env=NAME=VALUE will no longer affect repository rule and module extension environments"
  ),
  {
    name: "--invocation_id",
    description:
      "Unique identifier, in UUID format, for the command being run. If explicitly specified uniqueness must be ensured by the caller",
    args: { name: "uuid" },
  },
  ...booleanOption(
    "keep_state_after_build",
    "If false, Bazel will discard the inmemory state from this build when the build finishes. Subsequent builds will not have any incrementality with respect to this one"
  ),
  {
    name: "--logging",
    description: "The logging level",
    args: {
      name: "level",
      suggestions: ["0", "1", "2", "3", "4", "5", "6"],
      default: "3",
    },
  },
  {
    name: "--memory_profile",
    description:
      "If set, write memory usage data to the specified file at phase ends and stable heap to master log at end of build",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--memory_profile_stable_heap_parameters",
    description:
      "Tune memory profile's computation of stable heap at end of build. Should be and even number of integers separated by commas",
    args: { name: "comma-separated integers" },
  },
  {
    name: "--profile",
    description:
      "If set, profile Bazel and write data to the specified file. See https://bazel.build/advanced/performance/json-trace-profile for more information",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--profiles_to_retain",
    description:
      "Number of profiles to retain in the output base. If there are more than this number of profiles in the output base, the oldest are deleted until the total is under the limit",
    args: { name: "integer", default: "5" },
  },
  ...booleanOption(
    "record_full_profiler_data",
    "By default, Bazel profiler will record only aggregated data for fast but numerous events (such as statting the file)"
  ),
  ...booleanOption(
    "redirect_local_instrumentation_output_writes",
    "If true and supported, instrumentation output is redirected to be written locally on a different machine than where bazel is running on"
  ),
  {
    name: "--repo_env",
    description:
      "Specifies additional environment variables to be available only for repository rules. Note that repository rules see the full environment anyway, but in this way variables can be set via command-line flags and .bazelrc entries",
    args: { name: "name[=value]" },
    isRepeatable: true,
  },
  ...booleanOption(
    "slim_profile",
    "Slims down the size of the JSON profile by merging events if the profile gets too large"
  ),
  {
    name: "--starlark_cpu_profile",
    description:
      "Writes into the specified file a pprof profile of CPU usage by all Starlark threads",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--tool_tag",
    description: "A tool name to attribute this Bazel invocation to",
    args: { name: "tag" },
  },
  ...booleanOption(
    "track_incremental_state",
    "If false, Bazel will not persist data that allows for invalidation and re-evaluation on incremental builds in order to save memory on this build"
  ),
  ...booleanOption(
    "write_command_log",
    "Whether or not to write the command.log file"
  ),
  // BuildLanguageOptions
  ...booleanOption(
    "allow_experimental_loads",
    "If enabled, issue only a warning instead of an error for loads of experimental .bzls"
  ),
  ...booleanOption(
    "check_bzl_visibility",
    "If disabled, .bzl load visibility errors are demoted to warnings"
  ),
  ...booleanOption(
    "experimental_bzl_visibility",
    "If enabled, adds a visibility() function that .bzl files may call during top-level evaluation to set their visibility for the purpose of load() statements"
  ),
  ...booleanOption(
    "experimental_cc_shared_library",
    "If set to true, rule attributes and Starlark API methods needed for the rule cc_shared_library will be available"
  ),
  ...booleanOption(
    "experimental_disable_external_package",
    "If set to true, the auto-generated //external package will not be available anymore. Bazel will still be unable to parse the file 'external/BUILD', but globs reaching into external/ from the unnamed package will work"
  ),
  ...booleanOption(
    "experimental_dormant_deps",
    "If set to true, attr.label(materializer=), attr(for_dependency_resolution=), attr.dormant_label(), attr.dormant_label_list() and rule(for_dependency_resolution=) are allowed"
  ),
  ...booleanOption(
    "experimental_enable_android_migration_apis",
    "If set to true, enables the APIs required to support the Android Starlark migration"
  ),
  ...booleanOption(
    "experimental_enable_first_class_macros",
    "If set to true, enables the macro() construct for defining symbolic macros"
  ),
  ...booleanOption(
    "experimental_enable_scl_dialect",
    "If set to true, .scl files may be used in load() statements"
  ),
  ...booleanOption(
    "experimental_enable_starlark_set",
    "If true, enable the set data type and set() constructor in Starlark"
  ),
  ...booleanOption(
    "experimental_google_legacy_api",
    "If set to true, exposes a number of experimental pieces of Starlark build API pertaining to Google legacy code"
  ),
  ...booleanOption(
    "experimental_isolated_extension_usages",
    "If true, enables the isolate parameter in the use_extension function"
  ),
  ...booleanOption(
    "experimental_platforms_api",
    "If set to true, enables a number of platform-related Starlark APIs useful for debugging"
  ),
  ...booleanOption(
    "experimental_repo_remote_exec",
    "If set to true, repository_rule gains some remote execution capabilities"
  ),
  ...booleanOption(
    "experimental_repository_ctx_execute_wasm",
    "If true enables the repository_ctx load_wasm and execute_wasm methods"
  ),
  ...booleanOption(
    "experimental_rule_extension_api",
    "Enable experimental rule extension API and subrule APIs"
  ),
  ...booleanOption(
    "experimental_sibling_repository_layout",
    "If set to true, non-main repositories are planted as symlinks to the main repository in the execution root. That is, all repositories are direct children of the $output_base/execution_root directory"
  ),
  ...booleanOption(
    "experimental_single_package_toolchain_binding",
    "If enabled, the register_toolchain function may not include target patterns which may refer to more than one package"
  ),
  ...booleanOption(
    "experimental_starlark_type_checking",
    "Enables type checking in files and functions that contain type annotations or related syntax. (When this flag is disabled, Bazel is more forgiving of invalid types in type annotations.)"
  ),
  ...booleanOption(
    "experimental_starlark_type_syntax",
    "Enables type annotations and related syntax in .bzl files. Locations of files where these are allowed is further restricted by --experimental_starlark_types_allowed_paths"
  ),
  {
    name: "--experimental_starlark_types_allowed_paths",
    description:
      "List of canonical Label prefixes under which Starlark type annotations are allowed",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "force_starlark_stack_trace",
    "If --force_starlark_stack_trace=true, Starlark stace traces will always be printed from calls to fail(), including those normally supressed with fail(..., stack_trace = False)"
  ),
  ...booleanOption(
    "incompatible_allow_tags_propagation",
    "If set to true, tags will be propagated from a target to the actions' execution requirements; otherwise tags are not propagated"
  ),
  ...booleanOption(
    "incompatible_always_check_depset_elements",
    "Check the validity of elements added to depsets, in all constructors. Elements must be immutable, but historically the depset(direct=...) constructor forgot to check"
  ),
  {
    name: "--incompatible_autoload_externally",
    description:
      "A comma-separated list of rules (or other symbols) that were previously part of Bazel and which are now to be retrieved from their respective external repositories",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "incompatible_check_external_repo_source_dir_package_boundary",
    "If true, a source directory in an external repository fails the build if it crosses a package boundary into a sub-package, matching the behavior that already applies to source directories in the main repository"
  ),
  ...booleanOption(
    "incompatible_disable_autoloads_in_main_repo",
    "Controls if the autoloads (set by --incompatible_autoload_externally) are enabled in themain repository. When enabled the rules (or other symbols) that were previously part of Bazel need to have load statements"
  ),
  ...booleanOption(
    "incompatible_disable_non_executable_java_binary",
    "If true, java_binary is always executable. create_executable attribute is removed"
  ),
  ...booleanOption(
    "incompatible_disable_objc_library_transition",
    "Disable objc_library's custom transition and inherit from the top level target instead (No-op in Bazel)"
  ),
  ...booleanOption(
    "incompatible_disable_starlark_host_transitions",
    "If set to true, rule attributes cannot set 'cfg = \"host\"'. Rules should set 'cfg = \"exec\"' instead"
  ),
  ...booleanOption(
    "incompatible_disable_target_default_provider_fields",
    "If set to true, disable the ability to utilize the default provider via field syntax. Use provider-key syntax instead"
  ),
  {
    name: "--incompatible_disable_transitions_on",
    description:
      "A comma-separated list of flags that cannot be used in transitions inputs or outputs",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "incompatible_disallow_ctx_resolve_tools",
    "If set to true, calling the deprecated ctx.resolve_tools API always fails. Uses of this API should be replaced by an executable or tools argument to ctx.actions.run or ctx.actions.run_shell"
  ),
  ...booleanOption(
    "incompatible_disallow_empty_glob",
    "If set to true, the default value of the allow_empty argument of glob() is False"
  ),
  ...booleanOption(
    "incompatible_do_not_split_linking_cmdline",
    "When true, Bazel no longer modifies command line flags used for linking, and also doesn't selectively decide which flags go to the param file and which don't"
  ),
  ...booleanOption(
    "incompatible_enable_deprecated_label_apis",
    "If enabled, certain deprecated APIs (native.repository_name, Label.workspace_name, Label.workspace_root, Label.relative) can be used"
  ),
  ...booleanOption(
    "incompatible_enable_proto_toolchain_resolution",
    "If true, proto lang rules define toolchains from protobuf repository"
  ),
  ...booleanOption(
    "incompatible_enforce_starlark_utf8",
    "If enabled (or set to 'error'), fail if Starlark files are not UTF-8 encoded. If set to 'warning', emit a warning instead",
    { values: ["off", "warning", "error"] }
  ),
  ...booleanOption(
    "incompatible_fail_on_unknown_attributes",
    "If enabled, targets that have unknown attributes set to None fail"
  ),
  ...booleanOption(
    "incompatible_fix_package_group_reporoot_syntax",
    'In package_group\'s packages attribute, changes the meaning of the value "//..." to refer to all packages in the current repository instead of all packages in any repository'
  ),
  ...booleanOption(
    "incompatible_locations_prefers_executable",
    "Whether a target that provides an executable expands to the executable rather than the files in DefaultInfo.files under $(locations ...) expansion if the number of files is not 1"
  ),
  ...booleanOption(
    "incompatible_no_attr_license",
    "If set to true, disables the function attr.license"
  ),
  ...booleanOption(
    "incompatible_no_implicit_file_export",
    "If set, (used) source files are package private unless exported explicitly. See https://github.com/bazelbuild/proposals/blob/master/designs/2019-10-24-file-visibility.md"
  ),
  ...booleanOption(
    "incompatible_no_implicit_watch_label",
    'If true, then methods on repository_ctx that are passed a Label will no longer automatically watch the file under that label for changes even if watch = "no", and repository_ctx.path no longer causes the returned path to be watched'
  ),
  ...booleanOption(
    "incompatible_no_rule_outputs_param",
    "If set to true, disables the outputs parameter of the rule() Starlark function"
  ),
  ...booleanOption(
    "incompatible_package_group_has_public_syntax",
    'In package_group\'s packages attribute, allows writing "public" or "private" to refer to all packages or no packages respectively'
  ),
  ...booleanOption(
    "incompatible_resolve_select_keys_eagerly",
    "If enabled, string keys in dicts passed to select() in .bzl files are immediately resolved to Labels relative to the file instead of being interpreted relative to the BUILD file they are ultimately loaded from"
  ),
  ...booleanOption(
    "incompatible_run_shell_command_string",
    "If set to true, the command parameter of actions.run_shell will only accept string"
  ),
  ...booleanOption(
    "incompatible_simplify_unconditional_selects_in_rule_attrs",
    'If true, simplify configurable rule attributes which contain only unconditional selects; for example, if ["a"] + select("//conditions:default", ["b"]) is assigned to a rule attribute, it is stored as ["a", "b"]'
  ),
  ...booleanOption(
    "incompatible_stop_exporting_build_file_path",
    "If set to true, deprecated ctx.build_file_path will not be available. ctx.label.package + '/BUILD' can be used instead"
  ),
  ...booleanOption(
    "incompatible_stop_exporting_language_modules",
    "If enabled, certain language-specific modules (such as cc_common) are unavailable in user .bzl files and may only be called from their respective rules repositories"
  ),
  ...booleanOption(
    "incompatible_unambiguous_label_stringification",
    "When true, Bazel will stringify the label @//foo:bar to @//foo:bar, instead of //foo:bar. This only affects the behavior of str(), the % operator, and so on; the behavior of repr() is unchanged"
  ),
  ...booleanOption(
    "incompatible_use_cc_configure_from_rules_cc",
    "When true, Bazel will no longer allow using cc_configure from @bazel_tools. Please see https://github.com/bazelbuild/bazel/issues/10134 for details and migration instructions"
  ),
  {
    name: "--max_computation_steps",
    description:
      "The maximum number of Starlark computation steps that may be executed by a BUILD file (zero means no limit)",
    args: { name: "integer", default: "0" },
  },
  {
    name: "--nested_set_depth_limit",
    description:
      "The maximum depth of the graph internal to a depset (also known as NestedSet), above which the depset() constructor will fail",
    args: { name: "integer", default: "3500" },
  },
  {
    name: "--repositories_without_autoloads",
    description:
      "A list of additional repositories (beyond the hardcoded ones Bazel knows about) where autoloads are not to be added",
    args: { name: "comma-separated list" },
  },
  // MemoryPressureOptions
  {
    name: "--gc_churning_threshold",
    description:
      "At any point after an invocation has been running for at least one minute, if Bazel has spent at least this percentage of the invocation's wall time doing full GCs, Bazel will give up and fail with an OOM",
    args: { name: "percentage", default: "100" },
  },
  {
    name: "--gc_churning_threshold_if_multiple_top_level_targets",
    description:
      "If set to a value in [0, 100] and this is a command that takes top-level targets (e.g. build but not query) and there are multiple such top-level targets, overrides --gc_churning_threshold",
    args: { name: "percentage" },
  },
  {
    name: "--gc_thrashing_limits",
    description:
      "Limits which, if reached, cause GcThrashingDetector to crash Bazel with an OOM. Each limit is specified as <period>:<count> where period is a duration and count is a positive integer",
    args: { name: "period:count" },
  },
  {
    name: "--gc_thrashing_threshold",
    description:
      "The percent of tenured space occupied (0-100) above which GcThrashingDetector considers memory pressure events against its limits (--gc_thrashing_limits)",
    args: { name: "percentage", default: "100" },
  },
  {
    name: "--jvm_heap_histogram_internal_object_pattern",
    description:
      "Regex for overriding the matching logic for JDK21+ JVM heap memory collection",
    args: { name: "regex" },
  },
  {
    name: "--skyframe_high_water_mark_full_gc_drops_per_invocation",
    description:
      "Flag for advanced configuration of Bazel's internal Skyframe engine",
    args: { name: "integer", default: "10" },
  },
  {
    name: "--skyframe_high_water_mark_minor_gc_drops_per_invocation",
    description:
      "Flag for advanced configuration of Bazel's internal Skyframe engine",
    args: { name: "integer", default: "10" },
  },
  {
    name: "--skyframe_high_water_mark_threshold",
    description:
      "Flag for advanced configuration of Bazel's internal Skyframe engine. If Bazel detects its retained heap percentage usage is at least this threshold, it will drop unnecessary temporary Skyframe state",
    args: { name: "integer", default: "85" },
  },
  // AuthAndTLSOptions
  {
    name: "--credential_helper",
    description:
      "Configures a credential helper conforming to the Credential Helper Specification to use for retrieving authorization credentials for repository fetching, remote caching and execution, and the build event service",
    args: { name: "[scope=]helper" },
    isRepeatable: true,
  },
  {
    name: "--credential_helper_cache_duration",
    description:
      "How long to cache credentials for if the credential helper doesn't return an expiration time. Changing the value of this flag clears the cache",
    args: { name: "duration", default: "30m" },
  },
  {
    name: "--credential_helper_timeout",
    description:
      "Configures the timeout for a credential helper. Credential helpers failing to respond within this timeout will fail the invocation",
    args: { name: "duration", default: "10s" },
  },
  {
    name: "--google_auth_scopes",
    description: "A comma-separated list of Google Cloud authentication scopes",
    args: { name: "comma-separated list" },
  },
  {
    name: "--google_credentials",
    description:
      "Specifies the file to get authentication credentials from. See https://cloud.google.com/docs/authentication for details",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "google_default_credentials",
    "Whether to use 'Google Application Default Credentials' for authentication. See Authentication methods at Google - Google Cloud for details"
  ),
  {
    name: "--grpc_keepalive_time",
    description:
      "Configures keep-alive pings for outgoing gRPC connections. If this is set, then Bazel sends pings after this much time of no read operations on the connection, but only if there is at least one pending gRPC call",
    args: { name: "duration", default: "60s" },
  },
  {
    name: "--grpc_keepalive_timeout",
    description:
      "Configures a keep-alive timeout for outgoing gRPC connections. If keep-alive pings are enabled with --grpc_keepalive_time, then Bazel times out a connection if it does not receive a ping reply after this much time",
    args: { name: "duration", default: "20s" },
  },
  ...booleanOption(
    "grpc_tcp_keepalive",
    "Whether to enable TCP keep-alive (the SO_KEEPALIVE socket option) for outgoing gRPC connections. This operates at the transport layer and is independent of the application-level keep-alive pings configured with --grpc_keepalive_time"
  ),
  {
    name: "--grpc_tcp_keepalive_count",
    description:
      "When --grpc_tcp_keepalive is enabled, the number of unacknowledged TCP keep-alive probes to send before considering the connection dead (TCP_KEEPCNT)",
    args: { name: "integer", default: "3" },
  },
  {
    name: "--grpc_tcp_keepalive_interval",
    description:
      "When --grpc_tcp_keepalive is enabled, the amount of time between successive TCP keep-alive probes (TCP_KEEPINTVL)",
    args: { name: "duration", default: "10s" },
  },
  {
    name: "--grpc_tcp_keepalive_time",
    description:
      "When --grpc_tcp_keepalive is enabled, the amount of idle time on a gRPC connection before the first TCP keep-alive probe is sent (TCP_KEEPIDLE)",
    args: { name: "duration", default: "60s" },
  },
  {
    name: "--tls_certificate",
    description:
      "Specify a path to a TLS certificate that is trusted to sign server certificates",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--tls_client_certificate",
    description:
      "Specify the TLS client certificate to use; you also need to provide a client key to enable client authentication",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--tls_client_key",
    description:
      "Specify the TLS client key to use; you also need to provide a client certificate to enable client authentication",
    args: { name: "path", template: "filepaths" },
  },
  // LocalDiffAwareness.Options
  ...booleanOption(
    "experimental_windows_watchfs",
    "If true, experimental Windows support for --watchfs is enabled. Otherwise --watchfsis a non-op on Windows. Make sure to also enable --watchfs"
  ),
  ...booleanOption(
    "watchfs",
    "On Linux/macOS: If true, Bazel tries to use the operating system's file watch service for local changes instead of scanning every file for a change"
  ),
  // RepositoryOptions
  {
    name: "--allow_yanked_versions",
    description:
      "Specified the module versions in the form of {module1}@{version1},module2@{version2} that will be allowed in the resolved dependency graph even if they are declared yanked in the registry where they come from (if they are not coming from a [NonRegistryOverride])",
    args: { name: "string" },
    isRepeatable: true,
  },
  {
    name: "--check_bazel_compatibility",
    description:
      "Check bazel version compatibility of Bazel modules. Valid values are error to escalate it to a resolution failure, off to disable the check, or warning to print a warning when mismatch detected",
    args: {
      name: "value",
      suggestions: ["error", "warning", "off"],
      default: "error",
    },
  },
  {
    name: "--check_direct_dependencies",
    description:
      "Check if the direct bazel_dep dependencies declared in the root module are the same versions you get in the resolved dependency graph",
    args: {
      name: "value",
      suggestions: ["off", "warning", "error"],
      default: "warning",
    },
  },
  {
    name: "--distdir",
    description:
      "Additional places to search for archives before accessing the network to download them",
    args: { name: "path", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--downloader_config",
    description: "Specify a file to configure the remote downloader with",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "experimental_repository_cache_hardlinks",
    "If set, the repository cache will hardlink the file in case of a cache hit, rather than copying. This is intended to save disk space"
  ),
  {
    name: "--experimental_repository_downloader_retries",
    description:
      "The maximum number of attempts to retry a download error. If set to 0, retries are disabled",
    args: { name: "integer", default: "5" },
  },
  {
    name: "--experimental_scale_timeouts",
    description:
      "Scale all timeouts in Starlark repository rules by this factor. In this way, external repositories can be made working on machines that are slower than the rule author expected, without changing the source code",
    args: { name: "number", default: "1.0" },
  },
  ...booleanOption(
    "ignore_dev_dependency",
    "If true, Bazel ignores bazel_dep, use_extension, and include declared as dev_dependency in the MODULE.bazel of the root module"
  ),
  ...booleanOption(
    "incompatible_require_repo_extension_metadata",
    "Require repository rules and module extensions to return explicit metadata. Valid values are false to disable the check, all to require metadata everywhere, or root to require metadata only for repo rules and extensions defined in the root module",
    { values: ["all", "root", "false"] }
  ),
  {
    name: "--inject_repository",
    description:
      "Adds a new repository with a local path in the form of {repository name}={path}. This only takes effect with --enable_bzlmod and is equivalent to adding a corresponding local_repository to the root module's MODULE.bazel file via use_repo_rule",
    args: { name: "name=path" },
    isRepeatable: true,
  },
  {
    name: "--lockfile_mode",
    description: "Specifies how and whether or not to use the lockfile",
    args: {
      name: "value",
      suggestions: ["off", "update", "refresh", "error"],
      default: "update",
    },
  },
  {
    name: "--module_mirrors",
    description:
      "Specifies URLs under which the source URLs of Bazel modules can be found, in addition to and taking precedence over any registry-provided mirror URLs",
    args: { name: "key=value[,value...]" },
    isRepeatable: true,
  },
  {
    name: "--override_module",
    description:
      "Override a module with a local path in the form of {module name}={path}. If the given path is an absolute path, it will be used as it is",
    args: { name: "module=path" },
    isRepeatable: true,
  },
  {
    name: "--override_repository",
    description:
      "Override a repository with a local path in the form of {repository name}={path}, where the repository name can be either a canonical name or an apparent name from the point of view of the main repository",
    args: { name: "name=path" },
    isRepeatable: true,
  },
  {
    name: "--registry",
    description:
      "Specifies the registries to use to locate Bazel module dependencies. The order is important: modules will be looked up in earlier registries first, and only fall back to later registries when they're missing from the earlier ones",
    args: { name: "url" },
    isRepeatable: true,
  },
  {
    name: "--repo_contents_cache",
    description:
      "Specifies the location of the repo contents cache, which contains fetched repo directories shareable across workspaces",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--repo_contents_cache_gc_idle_delay",
    description:
      "Specifies the amount of time the server must remain idle before garbage collection happens to the repo contents cache",
    args: { name: "duration", default: "5m" },
  },
  {
    name: "--repo_contents_cache_gc_max_age",
    description:
      "Specifies the amount of time an entry in the repo contents cache can stay unused before it's garbage collected",
    args: { name: "duration", default: "14d" },
  },
  {
    name: "--repository_cache",
    description:
      "Specifies the cache location of the downloaded values obtained during the fetching of external repositories. An empty string as argument requests the cache to be disabled, otherwise the default of {--output_user_root}/cache/repos/v1 is used",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "repository_disable_download",
    "If set, downloading using ctx.download{,_and_extract} is not allowed during repository fetching. Note that network access is not completely disabled; ctx.execute could still run an arbitrary executable that accesses the Internet"
  ),
  {
    name: "--vendor_dir",
    description:
      "Specifies the directory that should hold the external repositories in vendor mode, whether for the purpose of fetching them into it or using them while building",
    args: { name: "path", template: "folders" },
  },
  // DebuggingOptions
  {
    name: "--experimental_workspace_rules_log_file",
    description:
      "Log certain Workspace Rules events into this file as delimited WorkspaceEvent protos",
    args: { name: "path", template: "filepaths" },
  },
  // MetricsModule.Options
  ...booleanOption(
    "experimental_record_metrics_for_all_mnemonics",
    "Controls the output of BEP ActionSummary and BuildGraphMetrics, limiting the number of mnemonics in ActionData and number of entries reported in BuildGraphMetrics.AspectCount/RuleClassCount"
  ),
  ...booleanOption(
    "experimental_record_skyframe_metrics",
    "Controls the output of BEP BuildGraphMetrics, including expensiveto compute skyframe metrics about Skykeys, RuleClasses and Aspects.With this flag set to false BuildGraphMetrics.rule_count and aspectfields will not be populated in the BEP"
  ),
  // CommandProfilerModule.Options
  {
    name: "--experimental_command_profile",
    description:
      "Records a Java Flight Recorder profile for the duration of the command. One of the supported profiling event types (cpu, wall, alloc or lock) must be given as an argument",
    args: { name: "value", suggestions: ["cpu", "wall", "alloc", "lock"] },
  },
  // CommonRemoteOptions
  {
    name: "--experimental_remote_cache_ttl",
    description:
      "The guaranteed minimal TTL of blobs in the remote cache after their digests are recently referenced e.g. by an ActionResult or FindMissingBlobs",
    args: { name: "duration", default: "3h" },
  },
  {
    name: "--remote_download_regex",
    description:
      "Force remote build outputs whose path matches this pattern to be downloaded, irrespective of --remote_download_outputs",
    args: { name: "regex" },
    isRepeatable: true,
  },
  // RemoteOptions
  {
    name: "--bep_maximum_open_remote_upload_files",
    description:
      "Maximum number of open files allowed during BEP artifact upload",
    args: { name: "integer", default: "-1" },
  },
  {
    name: "--disk_cache",
    description:
      "A path to a directory where Bazel can read and write actions and action outputs. If the directory does not exist, it will be created",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--experimental_circuit_breaker_strategy",
    description:
      'Specifies the strategy for the circuit breaker to use. Available strategies are "failure". On invalid value for the option the behavior same as the option is not set',
    args: { name: "value", suggestions: ["failure"] },
  },
  {
    name: "--experimental_disk_cache_gc_idle_delay",
    description:
      "How long the server must remain idle before a garbage collection of the disk cache occurs. To specify the garbage collection policy, set --experimental_disk_cache_gc_max_size and/or --experimental_disk_cache_gc_max_age",
    args: { name: "duration", default: "5m" },
  },
  {
    name: "--experimental_disk_cache_gc_max_age",
    description:
      "If set to a positive value, the disk cache will be periodically garbage collected to remove entries older than this age",
    args: { name: "duration", default: "0" },
  },
  {
    name: "--experimental_disk_cache_gc_max_size",
    description:
      "If set to a positive value, the disk cache will be periodically garbage collected to stay under this size. If set in conjunction with --experimental_disk_cache_gc_max_age, both criteria are applied",
    args: { name: "size", default: "0" },
  },
  ...booleanOption(
    "experimental_remote_cache_chunking",
    "If enabled, large blobs are split into content-defined chunks and uploaded/downloaded in chunks, enabling deduplication across blobs"
  ),
  {
    name: "--experimental_remote_cache_chunking_function",
    description:
      "The content-defined chunking function used to split large blobs when --experimental_remote_cache_chunking is enabled",
    args: {
      name: "function",
      suggestions: ["auto", "fast_cdc_2020", "rep_max_cdc"],
      default: "auto",
    },
  },
  {
    name: "--experimental_remote_cache_compression_threshold",
    description:
      "The minimum blob size required to compress/decompress with zstd. Ineffectual unless --remote_cache_compression is set",
    args: { name: "integer", default: "100" },
  },
  ...booleanOption(
    "experimental_remote_cache_lease_extension",
    "If set to true, Bazel will extend the lease for outputs of remote actions during the build by sending FindMissingBlobs calls periodically to remote cache"
  ),
  {
    name: "--experimental_remote_capture_corrupted_outputs",
    description:
      "A path to a directory where the corrupted outputs will be captured to",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "experimental_remote_discard_merkle_trees",
    "If set to true, discard in-memory copies of the input root's Merkle tree and associated input mappings during calls to GetActionResult() and Execute()"
  ),
  {
    name: "--experimental_remote_downloader",
    description:
      "A Remote Asset API endpoint URI, to be used as a remote download proxy. The supported schemas are grpc, grpcs (grpc with TLS enabled) and unix (local UNIX sockets)",
    args: { name: "string" },
  },
  ...booleanOption(
    "experimental_remote_downloader_local_fallback",
    "Whether to fall back to the local downloader if remote downloader fails"
  ),
  ...booleanOption(
    "experimental_remote_downloader_propagate_credentials",
    "Whether to propagate credentials from netrc and credential helper to the remote downloader server"
  ),
  {
    name: "--experimental_remote_failure_rate_threshold",
    description:
      "Sets the allowed number of failure rate in percentage for a specific time window after which it stops calling to the remote cache/executor",
    args: { name: "percentage", default: "10" },
  },
  {
    name: "--experimental_remote_failure_window_interval",
    description:
      "The interval in which the failure rate of the remote requests are computed",
    args: { name: "duration", default: "60s" },
  },
  ...booleanOption(
    "experimental_remote_mark_tool_inputs",
    "If set to true, Bazel will mark inputs as tool inputs for the remote executor. This can be used to implement remote persistent workers"
  ),
  {
    name: "--experimental_remote_output_service",
    description:
      "HOST or HOST:PORT of a remote output service endpoint. The supported schemas are grpc, grpcs (grpc with TLS enabled) and unix (local UNIX sockets)",
    args: { name: "string" },
  },
  {
    name: "--experimental_remote_output_service_output_path_prefix",
    description:
      "The path under which the contents of output directories managed by the --experimental_remote_output_service are placed",
    args: { name: "string" },
  },
  ...booleanOption(
    "experimental_remote_require_cached",
    "If set to true, enforce that all actions that can run remotely are cached, or else fail the build"
  ),
  {
    name: "--experimental_remote_scrubbing_config",
    description:
      "Enables remote cache key scrubbing with the supplied configuration file, which must be a protocol buffer in text format (see src/main/protobuf/remote_scrubbing.proto)",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "guard_against_concurrent_changes",
    "Set this to 'full' to enable checking the ctime of all input files of an action before uploading it to a remote cache",
    { values: ["off", "lite", "full"] }
  ),
  ...booleanOption(
    "incompatible_remote_local_fallback_for_remote_cache",
    "Whether --remote_local_fallback applies to --remote_cache"
  ),
  ...booleanOption(
    "remote_accept_cached",
    "Whether to accept remotely cached action results"
  ),
  {
    name: "--remote_build_event_upload",
    description:
      "If set to 'all', all local outputs referenced by BEP are uploaded to remote cache",
    args: {
      name: "value",
      suggestions: ["all", "minimal"],
      default: "minimal",
    },
  },
  {
    name: "--remote_bytestream_uri_prefix",
    description:
      "The hostname and instance name to be used in bytestream:// URIs that are written into build event streams",
    args: { name: "prefix" },
  },
  {
    name: "--remote_cache",
    description:
      "A URI of a caching endpoint. The supported schemas are http, https, grpc, grpcs (grpc with TLS enabled) and unix (local UNIX sockets)",
    args: { name: "uri" },
  },
  ...booleanOption(
    "remote_cache_async",
    "If true, uploading of action results to a disk or remote cache will happen in the background instead of blocking the completion of an action"
  ),
  ...booleanOption(
    "remote_cache_compression",
    "If enabled, compress/decompress cache blobs with zstd when their size is at least --experimental_remote_cache_compression_threshold"
  ),
  {
    name: "--remote_cache_header",
    description:
      "Specify a header that will be included in cache requests: --remote_cache_header=Name=Value. Multiple headers can be passed by specifying the flag multiple times",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  {
    name: "--remote_default_exec_properties",
    description:
      "Set the default exec properties to be used as the remote execution platform if an execution platform does not already set exec_properties",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  {
    name: "--remote_download_all",
    description:
      "Downloads all remote outputs to the local machine. This flag is an alias for --remote_download_outputs=all",
  },
  {
    name: "--remote_download_minimal",
    description:
      "Does not download any remote build outputs to the local machine. This flag is an alias for --remote_download_outputs=minimal",
  },
  {
    name: "--remote_download_outputs",
    description:
      "If set to 'minimal' doesn't download any remote build outputs to the local machine, except the ones required by local actions",
    args: {
      name: "value",
      suggestions: ["all", "minimal", "toplevel"],
      default: "toplevel",
    },
  },
  {
    name: "--remote_download_symlink_template",
    description:
      "Instead of downloading remote build outputs to the local machine, create symbolic links. The target of the symbolic links can be specified in the form of a template string",
    args: { name: "string" },
  },
  {
    name: "--remote_download_toplevel",
    description:
      "Only downloads remote outputs of top level targets to the local machine. This flag is an alias for --remote_download_outputs=toplevel",
  },
  {
    name: "--remote_downloader_header",
    description:
      "Specify a header that will be included in remote downloader requests: --remote_downloader_header=Name=Value. Multiple headers can be passed by specifying the flag multiple times",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  {
    name: "--remote_exec_header",
    description:
      "Specify a header that will be included in execution requests: --remote_exec_header=Name=Value. Multiple headers can be passed by specifying the flag multiple times",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  {
    name: "--remote_execution_priority",
    description:
      "The relative priority of actions to be executed remotely. The semantics of the particular priority values are server-dependent",
    args: { name: "integer", default: "0" },
  },
  {
    name: "--remote_executor",
    description:
      "HOST or HOST:PORT of a remote execution endpoint. The supported schemas are grpc, grpcs (grpc with TLS enabled) and unix (local UNIX sockets)",
    args: { name: "uri" },
  },
  {
    name: "--remote_grpc_download_idle_timeout",
    description:
      "The maximum amount of time a remote gRPC download may go without receiving response data before Bazel cancels and retries the download",
    args: { name: "duration", default: "60s" },
  },
  {
    name: "--remote_grpc_log",
    description:
      "If specified, a path to a file to log gRPC call related details",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--remote_grpc_service_config",
    description:
      "Path to a gRPC service config JSON file for remote gRPC channels. This replaces the service config Bazel generates from --remote_timeout",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--remote_header",
    description:
      "Specify a header that will be included in requests: --remote_header=Name=Value. Multiple headers can be passed by specifying the flag multiple times",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  {
    name: "--remote_instance_name",
    description: "Value to pass as instance_name in the remote execution API",
    args: { name: "string" },
  },
  ...booleanOption(
    "remote_local_fallback",
    "Whether to fall back to standalone local execution strategy if remote execution fails"
  ),
  {
    name: "--remote_local_fallback_strategy",
    description:
      "Deprecated. See https://github.com/bazelbuild/bazel/issues/7480 for details",
    args: { name: "string", default: "local" },
    deprecated: true,
  },
  {
    name: "--remote_max_concurrency_per_connection",
    description:
      "Limit the max number of concurrent requests per gRPC connection. By default the value is 100",
    args: { name: "integer", default: "100" },
  },
  {
    name: "--remote_max_connections",
    description:
      "Limit the max number of concurrent connections to remote cache/executor. By default the value is 100. Setting this to 0 means no limitation",
    args: { name: "integer", default: "100" },
  },
  {
    name: "--remote_print_execution_messages",
    description:
      "Choose when to print remote execution messages. Valid values are failure, to print only on failures, success to print only on successes and all to print always",
    args: {
      name: "value",
      suggestions: ["failure", "success", "all"],
      default: "failure",
    },
  },
  {
    name: "--remote_proxy",
    description:
      "Connect to the remote cache through a proxy. Currently this flag can only be used to configure a Unix domain socket (unix:/path/to/socket)",
    args: { name: "uri" },
  },
  {
    name: "--remote_result_cache_priority",
    description:
      "The relative priority of remote actions to be stored in remote cache. The semantics of the particular priority values are server-dependent",
    args: { name: "integer", default: "0" },
  },
  {
    name: "--remote_retries",
    description:
      "The maximum number of attempts to retry a transient error. If set to 0, retries are disabled",
    args: { name: "integer", default: "5" },
  },
  {
    name: "--remote_retry_max_delay",
    description:
      "The maximum backoff delay between remote retry attempts. Following units can be used: Days (d), hours (h), minutes (m), seconds (s), and milliseconds (ms)",
    args: { name: "duration", default: "5s" },
  },
  {
    name: "--remote_timeout",
    description:
      "The maximum amount of time to wait for remote execution and cache calls. For the REST cache, this is both the connect and the read timeout",
    args: { name: "duration", default: "60s" },
  },
  ...booleanOption(
    "remote_upload_local_results",
    "Whether to upload locally executed action results to the remote cache if the remote cache supports it and the user is authorized to do so"
  ),
  ...booleanOption(
    "remote_verify_downloads",
    "If set to true, Bazel will compute the hash sum of all remote downloads and discard the remotely cached values if they don't match the expected value"
  ),
  // BuildEventStreamOptions
  {
    name: "--build_event_binary_file",
    description:
      "If non-empty, write a varint delimited binary representation of representation of the build event protocol to that file",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "build_event_binary_file_path_conversion",
    "Convert paths in the binary file representation of the build event protocol to more globally valid URIs whenever possible; if disabled, the file:// uri scheme will always be used"
  ),
  {
    name: "--build_event_binary_file_upload_mode",
    description:
      "Specifies whether the Build Event Service upload for --build_event_binary_file should block the build completion or should end the invocation immediately and finish the upload in the background",
    args: {
      name: "value",
      suggestions: [
        "wait_for_upload_complete",
        "nowait_for_upload_complete",
        "fully_async",
      ],
      default: "wait_for_upload_complete",
    },
  },
  {
    name: "--build_event_json_file",
    description:
      "If non-empty, write a JSON serialisation of the build event protocol to that file. This option implies --bes_upload_mode=wait_for_upload_complete",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "build_event_json_file_path_conversion",
    "Convert paths in the json file representation of the build event protocol to more globally valid URIs whenever possible; if disabled, the file:// uri scheme will always be used"
  ),
  {
    name: "--build_event_json_file_upload_mode",
    description:
      "Specifies whether the Build Event Service upload for --build_event_json_file should block the build completion or should end the invocation immediately and finish the upload in the background",
    args: {
      name: "value",
      suggestions: [
        "wait_for_upload_complete",
        "nowait_for_upload_complete",
        "fully_async",
      ],
      default: "wait_for_upload_complete",
    },
  },
  {
    name: "--build_event_max_named_set_of_file_entries",
    description:
      "The maximum number of entries for a single named_set_of_files event; values smaller than 2 are ignored and no event splitting is performed",
    args: { name: "integer", default: "5000" },
  },
  ...booleanOption(
    "build_event_publish_all_actions",
    "Whether all actions should be published"
  ),
  {
    name: "--build_event_text_file",
    description:
      "If non-empty, write a textual representation of the build event protocol to that file",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "build_event_text_file_path_conversion",
    "Convert paths in the text file representation of the build event protocol to more globally valid URIs whenever possible; if disabled, the file:// uri scheme will always be used"
  ),
  {
    name: "--build_event_text_file_upload_mode",
    description:
      "Specifies whether the Build Event Service upload for --build_event_text_file should block the build completion or should end the invocation immediately and finish the upload in the background",
    args: {
      name: "value",
      suggestions: [
        "wait_for_upload_complete",
        "nowait_for_upload_complete",
        "fully_async",
      ],
      default: "wait_for_upload_complete",
    },
  },
  // BuildEventProtocolOptions
  {
    name: "--build_event_upload_max_retries",
    description:
      "The maximum number of times Bazel should retry uploading a build event",
    args: { name: "integer", default: "4" },
  },
  ...booleanOption(
    "experimental_bep_target_summary",
    "Whether to publish TargetSummary events"
  ),
  ...booleanOption(
    "experimental_build_event_expand_filesets",
    "If true, expand Filesets in the BEP when presenting output files"
  ),
  {
    name: "--experimental_build_event_output_group_mode",
    description:
      "Specify how an output group's files will be represented in TargetComplete/AspectComplete BEP events. Values are an assignment of an output group name to one of NAMED_SET_OF_FILES_ONLY, INLINE_ONLY, or BOTH",
    args: { name: "output group=mode" },
    isRepeatable: true,
  },
  {
    name: "--experimental_build_event_upload_retry_minimum_delay",
    description:
      "Initial, minimum delay for exponential backoff retries when BEP upload fails. (exponent: 1.6)",
    args: { name: "duration", default: "1s" },
  },
  {
    name: "--experimental_build_event_upload_strategy",
    description:
      "Selects how to upload artifacts referenced in the build event protocol. In Bazel the valid options include local and remote",
    args: { name: "string" },
  },
  ...booleanOption(
    "experimental_run_bep_event_include_residue",
    "Whether to include the command-line residue in run build events which could contain the residue. By default, the residue is not included in run command build events that could contain the residue"
  ),
  ...booleanOption(
    "experimental_stream_log_file_uploads",
    "Stream log file uploads directly to the remote storage rather than writing them to disk"
  ),
  ...booleanOption(
    "legacy_important_outputs",
    "Use this to suppress generation of the legacy important_outputs field in the TargetComplete event. important_outputs are required for Bazel to ResultStore/BTX integration"
  ),
  // BuildEventServiceOptions
  {
    name: "--bes_backend",
    description:
      "Specifies the build event service (BES) backend endpoint in the form [SCHEME://]HOST[:PORT]. The default is to disable BES uploads",
    args: { name: "uri" },
  },
  ...booleanOption(
    "bes_check_preceding_lifecycle_events",
    "Sets the field check_preceding_lifecycle_events_present on PublishBuildToolEventStreamRequest which tells BES to check whether it previously received InvocationAttemptStarted and BuildEnqueued events matching the current tool event"
  ),
  {
    name: "--bes_header",
    description:
      "Specify a header in NAME=VALUE form that will be included in BES requests. Multiple headers can be passed by specifying the flag multiple times",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  {
    name: "--bes_instance_name",
    description:
      "Specifies the instance name under which the BES will persist uploaded BEP. Defaults to null",
    args: { name: "string" },
  },
  {
    name: "--bes_keywords",
    description:
      "Specifies a list of notification keywords to be added the default set of keywords published to BES (command_name={command_name}, protocol_name=BEP)",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  ...booleanOption(
    "bes_lifecycle_events",
    "Specifies whether to publish BES lifecycle events. (defaults to 'true')"
  ),
  {
    name: "--bes_oom_finish_upload_timeout",
    description:
      "Specifies how long bazel should wait for the BES/BEP upload to complete while OOMing. This flag ensures termination when the JVM is severely GC thrashing and cannot make progress on any user thread",
    args: { name: "duration", default: "10m" },
  },
  {
    name: "--bes_outerr_buffer_size",
    description:
      "Specifies the maximal size of stdout or stderr to be buffered in BEP, before it is reported as a progress event",
    args: { name: "integer", default: "10240" },
  },
  {
    name: "--bes_outerr_chunk_size",
    description:
      "Specifies the maximal size of stdout or stderr to be sent to BEP in a single message",
    args: { name: "integer", default: "1048576" },
  },
  {
    name: "--bes_proxy",
    description:
      "Connect to the Build Event Service through a proxy. Currently this flag can only be used to configure a Unix domain socket (unix:/path/to/socket)",
    args: { name: "uri" },
  },
  {
    name: "--bes_results_url",
    description:
      "Specifies the base URL where a user can view the information streamed to the BES backend. Bazel will output the URL appended by the invocation id to the terminal",
    args: { name: "url" },
  },
  {
    name: "--bes_system_keywords",
    description:
      "Specifies a list of notification keywords to be included directly, without the user_keyword= prefix included for keywords supplied via --bes_keywords",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  {
    name: "--bes_timeout",
    description:
      "Specifies how long bazel should wait for the BES/BEP upload to complete after the build and tests have finished",
    args: { name: "duration", default: "0s" },
  },
  {
    name: "--bes_upload_mode",
    description:
      "Specifies whether the Build Event Service upload should block the build completion or should end the invocation immediately and finish the upload in the background",
    args: {
      name: "mode",
      suggestions: [
        "wait_for_upload_complete",
        "nowait_for_upload_complete",
        "fully_async",
      ],
      default: "wait_for_upload_complete",
    },
  },
];

// Shared by the build family of commands and by query / mod
const coreOptions: Fig.Option[] = [
  // CoreOptions
  {
    name: "--action_env",
    description:
      "Specifies the set of environment variables available to actions with target configuration",
    args: { name: "name[=value]" },
    isRepeatable: true,
  },
  ...booleanOption(
    "allow_analysis_failures",
    "If true, an analysis failure of a rule target results in the target's propagation of an instance of AnalysisFailureInfo containing the error description, instead of resulting in a build failure"
  ),
  {
    name: "--allowed_cpu_values",
    description: "Allowed values for the --cpu flag",
    args: { name: "comma-separated list" },
  },
  {
    name: "--analysis_testing_deps_limit",
    description:
      "Sets the maximum number of transitive dependencies through a rule attribute with a for_analysis_testing configuration transition",
    args: { name: "integer", default: "2000" },
  },
  ...booleanOption(
    "build_runfile_links",
    "If true, build runfiles symlink forests for all targets. If false, write them only when required by a local action, test or run command"
  ),
  ...booleanOption(
    "build_runfile_manifests",
    "If true, write runfiles manifests for all targets. If false, omit them. Local tests will fail to run when false"
  ),
  ...booleanOption(
    "check_visibility",
    "If disabled, visibility errors in target dependencies are demoted to warnings"
  ),
  ...booleanOption(
    "collect_code_coverage",
    "If specified, Bazel will instrument code (using offline instrumentation where possible) and will collect coverage information during tests"
  ),
  {
    name: ["--compilation_mode", "-c"],
    description:
      "Specify the mode the binary will be built in. Values: fastbuild, dbg, opt",
    args: {
      name: "mode",
      suggestions: ["fastbuild", "dbg", "opt"],
      default: "fastbuild",
    },
  },
  {
    name: "--cpu",
    description:
      "Deprecated: this flag is not used internally by Bazel although there are legacy platform mappings to allow for backwards compatibility",
    args: { name: "string" },
    deprecated: true,
  },
  {
    name: "--define",
    description:
      "Each --define option specifies an assignment for a build variable. In case of multiple values for a variable, the last one wins",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  ...booleanOption(
    "enable_runfiles",
    "Enable runfiles symlink tree; By default, it's off on Windows, on on other platforms",
    { values: ["auto", "yes", "no"] }
  ),
  ...booleanOption(
    "enforce_constraints",
    "Checks the environments each target is compatible with and reports errors if any target has dependencies that don't support the same environments"
  ),
  {
    name: "--exec_aspects",
    description:
      "Comma-separated list of aspects to be applied to exec-configured targets, regardless of whether or not they are top-level targets",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  {
    name: "--experimental_action_listener",
    description:
      "Deprecated in favor of aspects. Use action_listener to attach an extra_action to existing build actions",
    args: { name: "labels" },
    isRepeatable: true,
    deprecated: true,
  },
  ...booleanOption(
    "experimental_collect_code_coverage_for_generated_files",
    "If specified, Bazel will also generate collect coverage information for generated files"
  ),
  ...booleanOption(
    "experimental_enforce_transitive_visibility",
    "If true, enable package()s to set the transitive_visibility attribute to restrict which packages may depend on them"
  ),
  {
    name: "--experimental_output_paths",
    description:
      "Which model to use for where in the output tree rules write their outputs, particularly for multi-platform / multi-configuration builds",
    args: { name: "value", suggestions: ["off", "strip"], default: "off" },
  },
  {
    name: "--experimental_override_platform_cpu_name",
    description:
      "Each entry should be of the form label=value where label refers to a platform and values is the desired shortname to override the platform's CPU name in $(TARGET_CPU) make variable and output path",
    args: { name: "label=value" },
    isRepeatable: true,
  },
  ...booleanOption(
    "experimental_platform_in_output_dir",
    "If true, a shortname for the target platform is used in the output directory name instead of the CPU",
    { values: ["auto", "yes", "no"] }
  ),
  ...booleanOption(
    "experimental_remotable_source_manifests",
    "Whether to make source manifest actions remotable"
  ),
  ...booleanOption(
    "experimental_strict_fileset_output",
    "If this option is enabled, filesets will treat all output artifacts as regular files. They will not traverse directories or be sensitive to symlinks"
  ),
  ...booleanOption(
    "experimental_use_platforms_in_output_dir_legacy_heuristic",
    "Please only use this flag as part of a suggested migration or testing strategy. Note that the heuristic has known deficiencies and it is suggested to migrate to relying on just --experimental_override_name_platform_in_output_dir"
  ),
  {
    name: "--features",
    description:
      "The given features will be enabled or disabled by default for targets built in the target configuration. Specifying -{feature} will disable the feature",
    args: { name: "feature" },
    isRepeatable: true,
  },
  {
    name: "--flag_alias",
    description:
      "Sets a shorthand name for a Starlark flag. It takes a single key-value pair in the form {key}={value} as an argument",
    args: { name: "name=label" },
    isRepeatable: true,
  },
  {
    name: "--host_action_env",
    description:
      "Specifies the set of environment variables available to actions with execution configurations",
    args: { name: "name[=value]" },
    isRepeatable: true,
  },
  {
    name: "--host_compilation_mode",
    description:
      "Specify the mode the tools used during the build will be built in. Values: fastbuild, dbg, opt",
    args: {
      name: "mode",
      suggestions: ["fastbuild", "dbg", "opt"],
      default: "opt",
    },
  },
  {
    name: "--host_cpu",
    description: "The host CPU",
    args: { name: "cpu" },
  },
  {
    name: "--host_features",
    description:
      "The given features will be enabled or disabled by default for targets built in the exec configuration. Specifying -{feature} will disable the feature",
    args: { name: "feature" },
    isRepeatable: true,
  },
  ...booleanOption(
    "incompatible_always_include_files_in_data",
    "If true, native rules add DefaultInfo.files of data dependencies to their runfiles, which matches the recommended behavior for Starlark rules ([runfiles features to avoid])"
  ),
  ...booleanOption(
    "incompatible_auto_exec_groups",
    "When enabled, an exec groups is automatically created for each toolchain used by a rule. For this to work rule needs to specify toolchain parameter on its actions"
  ),
  ...booleanOption(
    "incompatible_bazel_test_exec_run_under",
    "If enabled, bazel test --run_under=//:runner builds //:runner in the exec configuration. If disabled, it builds //:runner in the target configuration"
  ),
  ...booleanOption(
    "incompatible_check_testonly_for_output_files",
    "If enabled, check testonly for prerequisite targets that are output files by looking up the testonly of the generating rule"
  ),
  ...booleanOption(
    "incompatible_compact_repo_mapping_manifest",
    "If enabled, the {binary}.repo_mapping file emits a module extension's repo mapping only once instead of once for each repo generated by the extension that contributes runfiles"
  ),
  {
    name: "--incompatible_disable_select_on",
    description: "List of flags for which the use in select() is disabled",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "incompatible_filegroup_runfiles_for_data",
    "If true, runfiles of targets listed in the srcs attribute are available to targets that consume the filegroup as a data dependency"
  ),
  ...booleanOption(
    "incompatible_merge_genfiles_directory",
    "If true, the genfiles directory is folded into the bin directory"
  ),
  ...booleanOption(
    "incompatible_modify_execution_info_additive",
    "When enabled, passing multiple --modify_execution_info flags is additive. When disabled, only the last flag is taken into account"
  ),
  ...booleanOption(
    "incompatible_target_cpu_from_platform",
    "If specified, the value of the cpu constraint (@platforms//cpu:cpu) of the target platform is used to set the $(TARGET_CPU) make variable"
  ),
  ...booleanOption(
    "instrument_test_targets",
    "When coverage is enabled, specifies whether to consider instrumenting test rules. When set, test rules included by --instrumentation_filter are instrumented"
  ),
  {
    name: "--instrumentation_filter",
    description:
      "When coverage is enabled, only rules with names included by the specified regex-based filter will be instrumented",
    args: { name: "regex" },
  },
  {
    name: "--modify_execution_info",
    description:
      "Add or remove keys from an action's execution info based on action mnemonic. Applies only to actions which support execution info",
    args: { name: "regex=[+-]key,..." },
    isRepeatable: true,
  },
  {
    name: "--platform_suffix",
    description:
      "Specifies a suffix to be added to the configuration directory",
    args: { name: "suffix" },
  },
  {
    name: "--run_under",
    description:
      "Prefix to insert before the executables for the test and run commands. If the value is foo -bar, and the execution command line is test_binary -baz, then the final command line is foo -bar test_binary -baz",
    args: { name: "command prefix" },
  },
  ...booleanOption(
    "stamp",
    "Stamp binaries with the date, username, hostname, workspace information, etc"
  ),
  ...booleanOption(
    "strict_filesets",
    "If this option is enabled, filesets crossing package boundaries are reported as errors"
  ),
  {
    name: "--target_environment",
    description:
      "Declares this build's target environment. Must be a label reference to an [environment rule]. If specified, all top-level targets must be compatible with this environment",
    args: { name: "labels" },
    isRepeatable: true,
  },
  ...booleanOption(
    "use_target_platform_for_tests",
    "If true, use the target platform for running tests rather than the test exec group",
    { deprecated: true }
  ),
  ...booleanOption(
    "verbose_visibility_errors",
    "If enabled, visibility errors include additional diagnostic information"
  ),
];
const packageOptions: Fig.Option[] = [
  // PackageOptions
  {
    name: "--deleted_packages",
    description:
      "A comma-separated list of names of packages which the build system will consider non-existent, even if they are visible somewhere on the package path",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  ...booleanOption(
    "fetch",
    "Allows the command to fetch external dependencies. If set to false, the command will utilize any cached version of the dependency, and if none exists, the command will result in failure"
  ),
  ...booleanOption(
    "incompatible_config_setting_private_default_visibility",
    "If incompatible_enforce_config_setting_visibility=false, this is a noop. Else, if this flag is false, any config_setting without an explicit visibility attribute is //visibility:public"
  ),
  ...booleanOption(
    "incompatible_enforce_config_setting_visibility",
    "If true, enforce config_setting visibility restrictions. If false, every config_setting is visible to every target"
  ),
  {
    name: "--package_path",
    description:
      "A colon-separated list of where to look for packages. Elements beginning with '%workspace%' are relative to the enclosing workspace",
    args: { name: "colon-separated list" },
  },
  ...booleanOption(
    "show_loading_progress",
    'If enabled, causes Bazel to print "Loading package:" messages'
  ),
];
const keepGoingOptions: Fig.Option[] = [
  // KeepGoingOption
  ...booleanOption(
    "keep_going",
    "Continue as much as possible after an error. While the target that failed and those that depend on it cannot be analyzed, other prerequisites of these targets can be",
    { abbrev: "k" }
  ),
];
const loadingPhaseThreadsOptions: Fig.Option[] = [
  // LoadingPhaseThreadsOption
  {
    name: "--loading_phase_threads",
    description:
      'Number of parallel threads to use for the loading/analysis phase.Takes an integer, or a keyword ("auto", "HOST_CPUS", "HOST_RAM"), optionally followed by an operation ([-|*]<float>), for example "auto" or "HOST_CPUS*.5"',
    args: {
      name: "threads",
      suggestions: ["auto", "HOST_CPUS", "HOST_RAM"],
      default: "auto",
    },
  },
];

// Options of build and of every command that inherits them (test, run, cquery, info, ...)
const buildOptions: Fig.Option[] = [
  ...coreOptions,
  ...packageOptions,
  ...keepGoingOptions,
  ...loadingPhaseThreadsOptions,
  // BuildRequestOptions
  {
    name: "--aspects",
    description:
      "Comma-separated list of aspects to be applied to top-level targets",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  {
    name: "--aspects_parameters",
    description:
      "Specifies the values of the command-line aspects parameters. Each parameter value is specified via <param_name>=<param_value>, for example my_param=my_val where my_param is a parameter of some aspect in --aspects list or required by an aspect in the list",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  ...booleanOption(
    "build",
    "Execute the build; this is the usual behaviour. Specifying --nobuild causes the build to stop before executing the build actions, returning zero if the package loading and analysis phases completed successfully; this mode is useful for testing those phases"
  ),
  ...booleanOption(
    "experimental_async_execution",
    "If set to true, Bazel is allowed to run action in a virtual thread. The number of actions in flight is still capped with --jobs"
  ),
  {
    name: "--experimental_async_execution_max_concurrent_actions",
    description:
      "The number of maximum concurrent actions to run with async execution. If the value is less than --jobs, it is clamped to --jobs",
    args: { name: "integer", default: "5000" },
  },
  ...booleanOption(
    "experimental_convenience_symlinks",
    "This flag controls how the convenience symlinks (the symlinks that appear in the workspace after the build) will be managed",
    { values: ["normal", "clean", "ignore", "log_only"] }
  ),
  ...booleanOption(
    "experimental_convenience_symlinks_bep_event",
    "This flag controls whether or not we will post the build event ConvenienceSymlinksIdentified to the Build Event Protocol"
  ),
  ...booleanOption(
    "experimental_use_validation_aspect",
    "Whether to run validation actions using aspect (for parallelism with tests)"
  ),
  {
    name: "--explain",
    description:
      "Causes the build system to explain each executed step of the build. The explanation is written to the specified log file",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: ["--jobs", "-j"],
    description:
      'The number of concurrent jobs to run. Takes an integer, or a keyword ("auto", "HOST_CPUS", "HOST_RAM"), optionally followed by an operation ([-|*]<float>), for example "auto" or "HOST_CPUS*.5"',
    args: {
      name: "jobs",
      suggestions: ["auto", "HOST_CPUS", "HOST_RAM"],
      default: "auto",
    },
  },
  {
    name: "--output_filter",
    description:
      "Only shows warnings and action outputs for rules with a name matching the provided regular expression",
    args: { name: "regex" },
  },
  {
    name: "--output_groups",
    description:
      "A list of comma-separated output group names, each of which optionally prefixed by a + or a -. A group prefixed by + is added to the default set of output groups, while a group prefixed by - is removed from the default set",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  {
    name: "--progress_report_interval",
    description:
      "The number of seconds to wait between reports on still running jobs. The default value 0 means the first report will be printed after 10 seconds, then 30 seconds and after that progress is reported once every minute",
    args: { name: "integer", default: "0" },
  },
  ...booleanOption(
    "rewind_lost_inputs",
    "Whether to use action rewinding to recover from lost inputs"
  ),
  ...booleanOption(
    "run_validations",
    "Whether to run validation actions as part of the build. See [Validation Actions]. [Validation Actions]: https://bazel.build/extending/rules#validation_actions"
  ),
  {
    name: "--show_result",
    description:
      "Show the results of the build. For each target, state whether or not it was brought up-to-date, and if so, a list of output files that were built",
    args: { name: "integer", default: "1" },
  },
  {
    name: "--symlink_prefix",
    description:
      "The prefix that is prepended to any of the convenience symlinks that are created after a build. If omitted, the default value is the name of the build tool followed by a hyphen",
    args: { name: "prefix" },
  },
  {
    name: "--target_pattern_file",
    description:
      "If set, build will read patterns from the file named here, rather than on the command line. It is an error to specify a file here as well as command-line patterns",
    args: { name: "path", template: "filepaths" },
  },
  // ExecutionOptions
  ...booleanOption(
    "allow_one_action_on_resource_unavailable",
    "If set, allow at least one action to run even if the resource is not enough or unavailable"
  ),
  {
    name: "--allowed_strategies_by_exec_platform",
    description:
      "Filters spawn strategies by the execution platform without affecting order",
    args: { name: "label=value[,value...]" },
    isRepeatable: true,
  },
  {
    name: "--cache_computed_file_digests",
    description:
      "If greater than 0, configures Bazel to cache file digests in memory based on their metadata instead of recomputing the digests from disk every time they are needed",
    args: { name: "integer", default: "50000" },
  },
  ...booleanOption(
    "check_tests_up_to_date",
    "Don't run tests, just check if they are up-to-date. If all tests results are up-to-date, the testing completes successfully"
  ),
  ...booleanOption(
    "check_up_to_date",
    "Don't perform the build, just check if it is up-to-date. If all targets are up-to-date, the build completes successfully"
  ),
  {
    name: "--execution_log_binary_file",
    description:
      "Log the executed spawns into this file as length-delimited SpawnExec protos, according to src/main/protobuf/spawn.proto",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--execution_log_compact_file",
    description:
      "Log the executed spawns into this file as length-delimited ExecLogEntry protos, according to src/main/protobuf/spawn.proto",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--execution_log_json_file",
    description:
      "Log the executed spawns into this file as newline-delimited JSON representations of SpawnExec protos, according to src/main/protobuf/spawn.proto",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "execution_log_sort",
    "Whether to sort the execution log, making it easier to compare logs across invocations. Set to false to avoid potentially significant CPU and memory usage at the end of the invocation, at the cost of producing the log in nondeterministic execution order"
  ),
  ...booleanOption(
    "experimental_cpu_load_scheduling",
    "Enables the experimental local execution scheduling based on CPU load, not estimation of actions one by one. Experimental scheduling have showed the large benefit on a large local builds on a powerful machines with the large number of cores"
  ),
  ...booleanOption(
    "experimental_materialize_param_files_directly",
    "If materializing param files, do so with direct writes to disk"
  ),
  {
    name: "--experimental_remote_cache_eviction_retries",
    description:
      "The maximum number of attempts to retry if the build encountered a transient remote cache error that would otherwise fail the build",
    args: { name: "integer", default: "5" },
  },
  {
    name: "--flaky_test_attempts",
    description:
      "Each test will be retried up to the specified number of times in case of any test failure. Tests that required more than one attempt to pass are marked as 'FLAKY' in the test summary",
    args: { name: "[regex@]number" },
    isRepeatable: true,
  },
  {
    name: "--genrule_strategy",
    description:
      "Specify how to execute genrules. This flag will be phased out. Instead, use --spawn_strategy=<value> to control all actions or --strategy=Genrule=<value> to control genrules only",
    args: { name: "comma-separated list" },
  },
  {
    name: "--local_resources",
    description:
      "Set the number of resources available to Bazel. Takes in an assignment to a float or HOST_RAM/HOST_CPUS, optionally followed by [-|*]<float> (eg. memory=HOST_RAM*.5 to use half the available RAM)",
    args: { name: "resource=value" },
    isRepeatable: true,
  },
  {
    name: "--local_test_jobs",
    description:
      'The max number of local test jobs to run concurrently. Takes an integer, or a keyword ("auto", "HOST_CPUS", "HOST_RAM"), optionally followed by an operation ([-|*]<float>), for example "auto" or "HOST_CPUS*.5"',
    args: {
      name: "jobs",
      suggestions: ["auto", "HOST_CPUS", "HOST_RAM"],
      default: "auto",
    },
  },
  ...booleanOption(
    "materialize_param_files",
    "Writes intermediate parameter files to output tree even when using remote action execution or caching. Useful when debugging actions"
  ),
  {
    name: "--max_test_output_bytes",
    description:
      "Specifies maximum per-test-log size that can be emitted when --test_output is 'errors' or 'all'. Useful for avoiding overwhelming the output with excessively noisy test output",
    args: { name: "integer", default: "-1" },
  },
  {
    name: "--spawn_strategy",
    description:
      "Specify how spawn actions are executed by default. Accepts a comma-separated list of strategies from highest to lowest priority",
    args: { name: "comma-separated list" },
  },
  {
    name: "--strategy",
    description:
      "Specify how to distribute compilation of other spawn actions. Accepts a comma-separated list of strategies from highest to lowest priority",
    args: { name: "key=value[,value...]" },
    isRepeatable: true,
  },
  {
    name: "--strategy_regexp",
    description:
      "Override which spawn strategy should be used to execute spawn actions that have descriptions matching a certain regex_filter",
    args: { name: "regex=value[,value...]" },
    isRepeatable: true,
  },
  ...booleanOption(
    "subcommands",
    "Display the subcommands executed during a build. Related flags: --execution_log_json_file, --execution_log_binary_file (for logging subcommands to a file in a tool-friendly format)",
    { abbrev: "s", values: ["true", "pretty_print", "false"] }
  ),
  ...booleanOption(
    "test_keep_going",
    "When disabled, any non-passing test will cause the entire build to stop. By default all tests are run, even if some do not pass"
  ),
  {
    name: "--test_output",
    description:
      "Specifies desired output mode. Not to be confused with --test_summary which controls the test summary printed on command completion",
    args: {
      name: "mode",
      suggestions: ["summary", "errors", "all", "streamed"],
      default: "summary",
    },
  },
  {
    name: "--test_strategy",
    description: "Specifies which strategy to use when running tests",
    args: { name: "strategy" },
  },
  {
    name: "--test_summary",
    description:
      "Specifies the desired format of the test summary. Valid values are; - short to list all tests that ran to completion",
    args: {
      name: "format",
      suggestions: [
        "short",
        "short_uncached",
        "terse",
        "detailed",
        "detailed_uncached",
        "none",
        "testcase",
      ],
      default: "short",
    },
  },
  {
    name: "--test_tmpdir",
    description:
      "Specifies the base temporary directory for 'bazel test' to use",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "verbose_failures",
    "If a command fails, print out the full command line"
  ),
  // LocalExecutionOptions
  {
    name: "--local_termination_grace_seconds",
    description:
      "Time to wait between terminating a local process due to timeout and forcefully shutting it down",
    args: { name: "integer", default: "15" },
  },
  // AnalysisOptions
  ...booleanOption(
    "allow_analysis_cache_discard",
    "If discarding the analysis cache due to a change in the build system, setting this option to false will cause bazel to exit, rather than continuing with the build"
  ),
  ...booleanOption(
    "discard_analysis_cache",
    "Discard the analysis cache immediately after the analysis phase completes. Reduces memory usage by ~10%, but makes further incremental builds slower"
  ),
  {
    name: "--experimental_extra_action_filter",
    description:
      "Deprecated in favor of aspects. Filters set of targets to schedule extra_actions for",
    args: { name: "regex" },
    deprecated: true,
  },
  ...booleanOption(
    "experimental_extra_action_top_level_only",
    "Deprecated in favor of aspects. Only schedules extra_actions for top level targets",
    { deprecated: true }
  ),
  {
    name: "--max_config_changes_to_show",
    description:
      "When discarding the analysis cache due to a change in the build options, displays up to the given number of changed option names",
    args: { name: "integer", default: "3" },
  },
  ...booleanOption(
    "skip_incompatible_explicit_targets",
    "Skip incompatible targets that are explicitly listed on the command line. By default, building such targets results in an error but they are silently skipped when this option is enabled"
  ),
  // LoadingOptions
  ...booleanOption(
    "build_manual_tests",
    "Forces test targets tagged 'manual' to be built. 'manual' tests are excluded from processing. This option forces them to be built (but not executed)"
  ),
  {
    name: "--build_tag_filters",
    description:
      "Specifies a comma-separated list of tags. Each tag can be optionally preceded with '-' to specify excluded tags",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "build_tests_only",
    "If specified, only *_test and test_suite rules will be built and other targets specified on the command line will be ignored"
  ),
  ...booleanOption(
    "compile_one_dependency",
    "Compile a single dependency of the argument files. This is useful for syntax checking source files in IDEs, for example, by rebuilding a single target that depends on the source file to detect errors as early as possible in the edit/build/test cycle"
  ),
  ...booleanOption(
    "expand_test_suites",
    "Expand test_suite targets into their constituent tests before analysis. When this flag is turned on (the default), negative target patterns will apply to the tests belonging to the test suite, otherwise they will not"
  ),
  {
    name: "--test_lang_filters",
    description:
      "Specifies a comma-separated list of test languages. Each language can be optionally preceded with '-' to specify excluded languages",
    args: { name: "comma-separated list" },
  },
  {
    name: "--test_size_filters",
    description:
      "Specifies a comma-separated list of test sizes. Each size can be optionally preceded with '-' to specify excluded sizes",
    args: { name: "comma-separated list" },
  },
  {
    name: "--test_tag_filters",
    description:
      "Specifies a comma-separated list of test tags. Each tag can be optionally preceded with '-' to specify excluded tags",
    args: { name: "comma-separated list" },
  },
  {
    name: "--test_timeout_filters",
    description:
      "Specifies a comma-separated list of test timeouts. Each timeout can be optionally preceded with '-' to specify excluded timeouts",
    args: { name: "comma-separated list" },
  },
  // SkyfocusOptions
  {
    name: "--experimental_active_directories",
    description:
      "Active directories for Skyfocus and remote analysis caching. Specify as comma-separated workspace root-relative paths",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "experimental_enable_skyfocus",
    "If true, enable the use of --experimental_active_directories to reduce Bazel's memory footprint for incremental builds"
  ),
  {
    name: "--experimental_frontier_violation_check",
    description:
      "Strategies to handle potential incorrectness from changes beyond the frontier (i.e. outside the active directories)",
    args: {
      name: "value",
      suggestions: ["strict", "warn", "disabled_for_testing"],
      default: "strict",
    },
  },
  ...booleanOption(
    "experimental_frontier_violation_verbose",
    "If true, Bazel will print instructions for fixing Skycache violations"
  ),
  {
    name: "--experimental_skyfocus_dump_keys",
    description:
      "For debugging Skyfocus. Dump the focused SkyKeys (roots, leafs, focused deps, focused rdeps)",
    args: {
      name: "value",
      suggestions: ["none", "count", "verbose"],
      default: "none",
    },
  },
  ...booleanOption(
    "experimental_skyfocus_dump_post_gc_stats",
    "For debugging Skyfocus. If enabled, trigger manual GC before/after focusing to report heap sizes reductions. This will increase the Skyfocus latency"
  ),
  // RemoteAnalysisCachingOptions
  {
    name: "--remote_analysis_json_log",
    description:
      "If set, a JSON file is written to this location that contains a detailed log of the behavior of remote analysis caching",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--serialized_frontier_profile",
    description:
      "Dump a profile of serialized frontier bytes. Specifies the output path",
    args: { name: "path", template: "filepaths" },
  },
  // ShellConfiguration.Options
  {
    name: "--shell_executable",
    description:
      "Absolute path to the shell executable for Bazel to use. If this is unset, but the BAZEL_SH environment variable is set on the first Bazel invocation (that starts up a Bazel server), Bazel uses that",
    args: { name: "path", template: "filepaths" },
  },
  // PlatformOptions
  {
    name: "--extra_execution_platforms",
    description:
      "The platforms that are available as execution platforms to run actions. Platforms can be specified by exact target, or as a target pattern",
    args: { name: "comma-separated list" },
  },
  {
    name: "--extra_toolchains",
    description:
      "The toolchain rules to be considered during toolchain resolution. Toolchains can be specified by exact target, or as a target pattern",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  {
    name: "--host_platform",
    description: "The label of a platform rule that describes the host system",
    args: { name: "label" },
  },
  {
    name: "--platform_mappings",
    description:
      "The location of a mapping file that describes which platform to use if none is set or which flags to set when a platform already exists",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--platforms",
    description:
      "The labels of the platform rules describing the target platforms for the current command",
    args: { name: "labels" },
  },
  {
    name: "--toolchain_resolution_debug",
    description:
      "Print debug information during toolchain resolution. The flag takes a regex, which is checked against toolchain types and specific targets to see which to debug",
    args: { name: "regex" },
  },
  // BazelRuleClassProvider.StrictActionEnvOptions
  ...booleanOption(
    "incompatible_strict_action_env",
    "If true, Bazel uses an environment with a static value for PATH and does not inherit LD_LIBRARY_PATH"
  ),
  // ProtoConfiguration.Options
  {
    name: "--cc_proto_library_header_suffixes",
    description:
      "Sets the suffixes of header files that a cc_proto_library creates",
    args: { name: "comma-separated list" },
  },
  {
    name: "--cc_proto_library_source_suffixes",
    description:
      "Sets the suffixes of source files that a cc_proto_library creates",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "experimental_proto_descriptor_sets_include_source_info",
    "Run extra actions for alternative Java api versions in a proto_library"
  ),
  {
    name: "--proto_compiler",
    description: "The label of the proto-compiler",
    args: { name: "label" },
  },
  {
    name: "--proto_toolchain_for_cc",
    description:
      "Label of proto_lang_toolchain() which describes how to compile C++ protos",
    args: { name: "label" },
  },
  {
    name: "--proto_toolchain_for_j2objc",
    description:
      "Label of proto_lang_toolchain() which describes how to compile j2objc protos",
    args: { name: "label" },
  },
  {
    name: "--proto_toolchain_for_java",
    description:
      "Label of proto_lang_toolchain() which describes how to compile Java protos",
    args: { name: "label" },
  },
  {
    name: "--proto_toolchain_for_javalite",
    description:
      "Label of proto_lang_toolchain() which describes how to compile JavaLite protos",
    args: { name: "label" },
  },
  {
    name: "--protocopt",
    description: "Additional options to pass to the protobuf compiler",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--strict_proto_deps",
    description:
      "Unless OFF, checks that a proto_library target explicitly declares all directly used targets as dependencies",
    args: {
      name: "value",
      suggestions: ["off", "warn", "error", "strict", "default"],
      default: "error",
    },
  },
  {
    name: "--strict_public_imports",
    description:
      "Unless OFF, checks that a proto_library target explicitly declares all targets used in 'import public' as exported",
    args: {
      name: "value",
      suggestions: ["off", "warn", "error", "strict", "default"],
      default: "off",
    },
  },
  // AndroidConfiguration.Options
  {
    name: "--android_compiler",
    description: "The Android target compiler",
    args: { name: "compiler" },
  },
  ...booleanOption(
    "android_databinding_use_androidx",
    "Generate AndroidX-compatible data-binding files. This is only used with databinding v2. This flag is a no-op"
  ),
  ...booleanOption(
    "android_databinding_use_v3_4_args",
    "Use android databinding v2 with 3.4.0 argument. This flag is a no-op"
  ),
  {
    name: "--android_dynamic_mode",
    description:
      "Determines whether C++ deps of Android rules will be linked dynamically when a cc_binary does not explicitly create a shared library",
    args: {
      name: "value",
      suggestions: ["off", "default", "fully"],
      default: "off",
    },
  },
  {
    name: "--android_manifest_merger",
    description:
      "Selects the manifest merger to use for android_binary rules. Flag to help the transition to the Android manifest merger from the legacy merger",
    args: {
      name: "value",
      suggestions: ["legacy", "android", "force_android"],
      default: "android",
    },
  },
  {
    name: "--android_manifest_merger_order",
    description:
      "Sets the order of manifests passed to the manifest merger for Android binaries. ALPHABETICAL means manifests are sorted by path relative to the execroot",
    args: {
      name: "value",
      suggestions: [
        "alphabetical",
        "alphabetical_by_configuration",
        "dependency",
      ],
      default: "alphabetical",
    },
  },
  {
    name: "--android_platforms",
    description:
      "Sets the platforms that android_binary targets use. If multiple platforms are specified, then the binary is a fat APKs, which contains native binaries for each specified target platform",
    args: { name: "labels" },
  },
  ...booleanOption(
    "android_resource_shrinking",
    "Enables resource shrinking for android_binary APKs that use ProGuard"
  ),
  {
    name: "--apk_signing_method",
    description: "Implementation to use to sign APKs",
    args: {
      name: "value",
      suggestions: ["v1", "v2", "v1_v2", "v4"],
      default: "v1_v2",
    },
  },
  ...booleanOption(
    "break_build_on_parallel_dex2oat_failure",
    "If true dex2oat action failures will cause the build to break instead of executing dex2oat during test runtime"
  ),
  ...booleanOption(
    "desugar_for_android",
    "Whether to desugar Java 8 bytecode before dexing"
  ),
  ...booleanOption(
    "desugar_java8_libs",
    "Whether to include supported Java 8 libraries in apps for legacy devices"
  ),
  ...booleanOption(
    "experimental_android_compress_java_resources",
    "Compress Java resources in APKs"
  ),
  ...booleanOption(
    "experimental_android_databinding_v2",
    "Use android databinding v2. This flag is a no-op"
  ),
  ...booleanOption(
    "experimental_android_resource_shrinking",
    "Enables resource shrinking for android_binary APKs that use ProGuard"
  ),
  ...booleanOption(
    "experimental_android_rewrite_dexes_with_rex",
    "Use rex tool to rewrite dex files"
  ),
  ...booleanOption(
    "experimental_android_use_parallel_dex2oat",
    "Use dex2oat in parallel to possibly speed up android_test"
  ),
  ...booleanOption(
    "experimental_check_desugar_deps",
    "Whether to double-check correct desugaring at Android binary level"
  ),
  ...booleanOption(
    "experimental_filter_library_jar_with_program_jar",
    "Filter the ProGuard ProgramJar to remove any classes also present in the LibraryJar"
  ),
  ...booleanOption(
    "experimental_persistent_aar_extractor",
    "Enable persistent aar extractor by using workers"
  ),
  ...booleanOption(
    "fat_apk_hwasan",
    "No-op flag. Will be removed in a future release",
    { deprecated: true }
  ),
  ...booleanOption(
    "incompatible_disable_native_android_rules",
    "If enabled, direct usage of the native Android rules is disabled. Please use the Starlark Android rules from https://github.com/bazelbuild/rules_android"
  ),
  ...booleanOption(
    "incremental_dexing",
    "Does most of the work for dexing separately for each Jar file"
  ),
  {
    name: "--legacy_main_dex_list_generator",
    description:
      "Specifies a binary to use to generate the list of classes that must be in the main dex when compiling legacy multidex",
    args: { name: "label" },
  },
  {
    name: "--optimizing_dexer",
    description: "Specifies a binary to use to do dexing without sharding",
    args: { name: "label" },
  },
  {
    name: "--persistent_android_dex_desugar",
    description:
      "Enable persistent Android dex and desugar actions by using workers",
  },
  {
    name: "--persistent_android_resource_processor",
    description:
      "Enable persistent Android resource processor by using workers",
  },
  {
    name: "--persistent_multiplex_android_dex_desugar",
    description:
      "Enable persistent multiplexed Android dex and desugar actions by using workers",
  },
  {
    name: "--persistent_multiplex_android_resource_processor",
    description:
      "Enable persistent multiplexed Android resource processor by using workers",
  },
  {
    name: "--persistent_multiplex_android_tools",
    description:
      "Enable persistent and multiplexed Android tools (dexing, desugaring, resource processing)",
  },
  // PythonOptions
  ...booleanOption(
    "experimental_py_binaries_include_label",
    "Py_binary targets include their label even when stamping is disabled"
  ),
  ...booleanOption(
    "incompatible_default_to_explicit_init_py",
    "This flag changes the default behavior so that __init__.py files are no longer automatically created in the runfiles of Python targets"
  ),
  ...booleanOption(
    "incompatible_python_disallow_native_rules",
    "When true, an error occurs when using the builtin py_* rules; instead the rule_python rules should be used. See https://github.com/bazelbuild/bazel/issues/17773 for more information and migration instructions"
  ),
  {
    name: "--python_native_rules_allowlist",
    description:
      "An allowlist (package_group target) to use when enforcing --incompatible_python_disallow_native_rules",
    args: { name: "label" },
  },
  // BazelPythonConfiguration.Options
  {
    name: "--python_path",
    description:
      "The absolute path of the Python interpreter invoked to run Python targets on the target platform. Deprecated; disabled by --incompatible_use_python_toolchains",
    args: { name: "path", template: "filepaths" },
  },
  // ObjcCommandLineOptions
  ...booleanOption(
    "device_debug_entitlements",
    "If set, and compilation mode is not 'opt', objc apps will include debug entitlements when signing"
  ),
  {
    name: "--experimental_objc_fastbuild_options",
    description: "Uses these strings as objc fastbuild compiler options",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "incompatible_builtin_objc_strip_action",
    "Whether to emit a strip action as part of objc linking"
  ),
  ...booleanOption(
    "incompatible_disable_native_apple_binary_rule",
    "No-op. Kept here for backwards compatibility"
  ),
  ...booleanOption(
    "incompatible_disallow_sdk_frameworks_attributes",
    "If true, disallow sdk_frameworks and weak_sdk_frameworks attributes in objc_library andobjc_import"
  ),
  ...booleanOption(
    "incompatible_objc_alwayslink_by_default",
    "If true, make the default value true for alwayslink attributes in objc_library and objc_import"
  ),
  ...booleanOption(
    "incompatible_strip_executable_safely",
    "If true, strip action for executables will use flag -x, which does not break dynamic symbol resolution"
  ),
  ...booleanOption(
    "ios_memleaks",
    "Enable checking for memory leaks in ios_test targets"
  ),
  {
    name: "--ios_signing_cert_name",
    description:
      "Certificate name to use for iOS signing. If not set will fall back to provisioning profile. May be the certificate's keychain identity preference or (substring) of the certificate's common name, as per codesign's man page (SIGNING IDENTITIES)",
    args: { name: "name" },
  },
  {
    name: "--ios_simulator_device",
    description:
      "The device to simulate when running an iOS application in the simulator, e.g. 'iPhone 6'. You can get a list of devices by running 'xcrun simctl list devicetypes' on the machine the simulator will be run on",
    args: { name: "device" },
  },
  {
    name: "--ios_simulator_version",
    description:
      "The version of iOS to run on the simulator when running or testing. This is ignored for ios_test rules if a target device is specified in the rule",
    args: { name: "version" },
  },
  ...booleanOption(
    "objc_debug_with_GLIBCXX",
    "If set, and compilation mode is set to 'dbg', define GLIBCXX_DEBUG, GLIBCXX_DEBUG_PEDANTIC and GLIBCPP_CONCEPT_CHECKS"
  ),
  // AppleCommandLineOptions
  {
    name: "--catalyst_cpus",
    description:
      "Comma-separated list of architectures for which to build Apple Catalyst binaries",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  ...booleanOption(
    "experimental_include_xcode_execution_requirements",
    'If set, add a "requires-xcode:{version}" execution requirement to every Xcode action. If the Xcode version has a hyphenated label, also add a "requires-xcode-label:{version_label}" execution requirement'
  ),
  ...booleanOption(
    "experimental_prefer_mutual_xcode",
    "If true, use the most recent Xcode that is available both locally and remotely. If false, or if there are no mutual available versions, use the local Xcode version selected via xcode-select"
  ),
  {
    name: "--host_macos_minimum_os",
    description:
      "Minimum compatible macOS version for host targets. If unspecified, uses 'macos_sdk_version'",
    args: { name: "version" },
  },
  ...booleanOption(
    "incompatible_enable_apple_toolchain_resolution",
    "Use toolchain resolution to select the Apple SDK for apple rules (Starlark and native)"
  ),
  {
    name: "--ios_minimum_os",
    description:
      "Minimum compatible iOS version for target simulators and devices. If unspecified, uses 'ios_sdk_version'",
    args: { name: "version" },
  },
  {
    name: "--ios_multi_cpus",
    description:
      "Comma-separated list of architectures to build an ios_application with. The result is a universal binary containing all specified architectures",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  {
    name: "--ios_sdk_version",
    description:
      "Specifies the version of the iOS SDK to use to build iOS applications. If unspecified, uses the default iOS SDK version from 'xcode_version'",
    args: { name: "version" },
  },
  {
    name: "--macos_cpus",
    description:
      "Comma-separated list of architectures for which to build Apple macOS binaries",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  {
    name: "--macos_minimum_os",
    description:
      "Minimum compatible macOS version for targets. If unspecified, uses 'macos_sdk_version'",
    args: { name: "version" },
  },
  {
    name: "--macos_sdk_version",
    description:
      "Specifies the version of the macOS SDK to use to build macOS applications. If unspecified, uses the default macOS SDK version from 'xcode_version'",
    args: { name: "version" },
  },
  {
    name: "--tvos_cpus",
    description:
      "Comma-separated list of architectures for which to build Apple tvOS binaries",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  {
    name: "--tvos_minimum_os",
    description:
      "Minimum compatible tvOS version for target simulators and devices. If unspecified, uses 'tvos_sdk_version'",
    args: { name: "version" },
  },
  {
    name: "--tvos_sdk_version",
    description:
      "Specifies the version of the tvOS SDK to use to build tvOS applications. If unspecified, uses the default tvOS SDK version from 'xcode_version'",
    args: { name: "version" },
  },
  ...booleanOption(
    "use_platforms_in_apple_crosstool_transition",
    "Makes apple_crosstool_transition fall back to using the value of --platforms flag instead of legacy --cpu when needed"
  ),
  {
    name: "--visionos_cpus",
    description:
      "Comma-separated list of architectures for which to build Apple visionOS binaries",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  {
    name: "--watchos_cpus",
    description:
      "Comma-separated list of architectures for which to build Apple watchOS binaries",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  {
    name: "--watchos_minimum_os",
    description:
      "Minimum compatible watchOS version for target simulators and devices. If unspecified, uses 'watchos_sdk_version'",
    args: { name: "version" },
  },
  {
    name: "--watchos_sdk_version",
    description:
      "Specifies the version of the watchOS SDK to use to build watchOS applications. If unspecified, uses the default watchOS SDK version from 'xcode_version'",
    args: { name: "version" },
  },
  {
    name: "--xcode_version",
    description:
      "If specified, uses Xcode of the given version for relevant build actions. If unspecified, uses the executor default version of Xcode",
    args: { name: "version" },
  },
  {
    name: "--xcode_version_config",
    description:
      "The label of the xcode_config rule to be used for selecting the Xcode version in the build configuration",
    args: { name: "label" },
  },
  // J2ObjcCommandLineOptions
  {
    name: "--j2objc_translation_flags",
    description: "Additional options to pass to the J2ObjC tool",
    args: { name: "comma-separated list" },
    isRepeatable: true,
  },
  // CppOptions
  ...booleanOption(
    "apple_generate_dsym",
    "Whether to generate debug symbol(.dSYM) file(s)"
  ),
  ...booleanOption(
    "build_test_dwp",
    "If enabled, when building C++ tests statically and with fission the .dwp file for the test binary will be automatically built as well"
  ),
  ...booleanOption("cc_dotd_files", "Whether to generate and analyze .d files"),
  ...booleanOption(
    "cc_include_scanning",
    "Whether to narrow inputs to C/C++ compilation by parsing #include lines from input files. This can improve performance and incrementality by decreasing the size of compilation input trees"
  ),
  {
    name: "--cc_output_directory_tag",
    description:
      "Specifies a suffix to be added to the configuration directory",
    args: { name: "tag" },
  },
  {
    name: "--compiler",
    description: "The C++ compiler to use for compiling the target",
    args: { name: "compiler" },
  },
  {
    name: "--conlyopt",
    description:
      "Additional option to pass to gcc when compiling C source files",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--copt",
    description: "Additional options to pass to gcc",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--cs_fdo_absolute_path",
    description:
      "Use CSFDO profile information to optimize compilation. Specify the absolute path name of the zip file containing the profile file, a raw or an indexed LLVM profile file",
    args: { name: "path" },
  },
  {
    name: "--cs_fdo_instrument",
    description:
      "Generate binaries with context sensitive FDO instrumentation. With Clang/LLVM compiler, it also accepts the directory name under which the raw profile file(s) will be dumped at runtime",
    args: { name: "path" },
  },
  {
    name: "--cs_fdo_profile",
    description:
      "The cs_fdo_profile representing the context sensitive profile to be used for optimization",
    args: { name: "label" },
  },
  {
    name: "--custom_malloc",
    description:
      "Specifies a custom malloc implementation. This setting overrides malloc attributes in build rules",
    args: { name: "label" },
  },
  {
    name: "--cxxopt",
    description:
      "Additional option to pass to gcc when compiling C++ source files",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--dynamic_mode",
    description:
      "Determines whether C++ binaries will be linked dynamically. 'default' means Bazel will choose whether to link dynamically",
    args: {
      name: "value",
      suggestions: ["off", "default", "fully"],
      default: "default",
    },
  },
  ...booleanOption(
    "enable_propeller_optimize_absolute_paths",
    "If set, any use of absolute paths for propeller optimize will raise an error"
  ),
  ...booleanOption(
    "enable_remaining_fdo_absolute_paths",
    "If set, any use of absolute paths for FDO will raise an error"
  ),
  ...booleanOption(
    "experimental_generate_llvm_lcov",
    "If true, coverage for clang will generate an LCOV report"
  ),
  ...booleanOption(
    "experimental_inmemory_dotd_files",
    "If enabled, C++ .d files will be passed through in memory directly from the remote build nodes instead of being written to disk"
  ),
  ...booleanOption(
    "experimental_omitfp",
    "If true, use libunwind for stack unwinding, and compile with -fomit-frame-pointer and -fasynchronous-unwind-tables"
  ),
  ...booleanOption(
    "experimental_save_feature_state",
    "Save the state of enabled and requested feautres as an output of compilation"
  ),
  ...booleanOption(
    "experimental_unsupported_and_brittle_include_scanning",
    "Whether to narrow inputs to C/C++ compilation by parsing #include lines from input files. This can improve performance and incrementality by decreasing the size of compilation input trees"
  ),
  ...booleanOption(
    "experimental_use_llvm_covmap",
    "If specified, Bazel will generate llvm-cov coverage map information rather than gcov when collect_code_coverage is enabled"
  ),
  {
    name: "--fdo_instrument",
    description:
      "Generate binaries with FDO instrumentation. With Clang/LLVM compiler, it also accepts the directory name under which the raw profile file(s) will be dumped at runtime",
    args: { name: "path" },
  },
  {
    name: "--fdo_optimize",
    description:
      "Use FDO profile information to optimize compilation. Specify the name of a zip file containing a .gcda file tree, an afdo file containing an auto profile, or an LLVM profile file",
    args: { name: "path" },
  },
  {
    name: "--fdo_prefetch_hints",
    description: "Use cache prefetch hints",
    args: { name: "label" },
  },
  {
    name: "--fdo_profile",
    description:
      "The fdo_profile representing the profile to be used for optimization",
    args: { name: "label" },
  },
  {
    name: "--fission",
    description:
      "Specifies which compilation modes use fission for C++ compilations and links. May be any combination of {'fastbuild', 'dbg', 'opt'} or the special values 'yes' to enable all modes and 'no' to disable all modes",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "force_pic",
    'If enabled, all C++ compilations produce position-independent code ("-fPIC"), links prefer PIC pre-built libraries over non-PIC libraries, and links produce position-independent executables ("-pie")'
  ),
  {
    name: "--grte_top",
    description:
      "A label to a checked-in libc library. The default value is selected by the crosstool toolchain, and you almost never need to override it",
    args: { name: "label" },
  },
  {
    name: "--host_compiler",
    description: "No-op flag. Will be removed in a future release",
    args: { name: "string" },
    deprecated: true,
  },
  {
    name: "--host_conlyopt",
    description:
      "Additional option to pass to the C compiler when compiling C (but not C++) source files in the exec configurations",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--host_copt",
    description:
      "Additional options to pass to the C compiler for tools built in the exec configurations",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--host_cxxopt",
    description:
      "Additional options to pass to C++ compiler for tools built in the exec configurations",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--host_grte_top",
    description:
      "If specified, this setting overrides the libc top-level directory (--grte_top) for the exec configuration",
    args: { name: "label" },
  },
  {
    name: "--host_linkopt",
    description:
      "Additional option to pass to linker when linking tools in the exec configurations",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--host_per_file_copt",
    description:
      "Additional options to selectively pass to the C/C++ compiler when compiling certain files in the exec configurations",
    args: { name: "regex@option[,option...]" },
    isRepeatable: true,
  },
  ...booleanOption(
    "incompatible_dont_enable_host_nonhost_crosstool_features",
    "If true, Bazel will not enable 'host' and 'nonhost' features in the c++ toolchain (see https://github.com/bazelbuild/bazel/issues/7407 for more information)"
  ),
  ...booleanOption(
    "incompatible_make_thinlto_command_lines_standalone",
    "This flag is a noop and scheduled for removal",
    { deprecated: true }
  ),
  ...booleanOption(
    "incompatible_remove_legacy_whole_archive",
    "If true, Bazel will not link library dependencies as whole archive by default (see https://github.com/bazelbuild/bazel/issues/7362 for migration instructions)"
  ),
  ...booleanOption(
    "incompatible_require_ctx_in_configure_features",
    "This flag is a noop and scheduled for removal",
    { deprecated: true }
  ),
  ...booleanOption(
    "incompatible_validate_top_level_header_inclusions",
    "This flag is a noop and scheduled for removal",
    { deprecated: true }
  ),
  ...booleanOption(
    "interface_shared_objects",
    "Use interface shared objects if supported by the toolchain. All ELF toolchains currently support this setting"
  ),
  ...booleanOption(
    "legacy_whole_archive",
    "Deprecated, superseded by --incompatible_remove_legacy_whole_archive (see https://github.com/bazelbuild/bazel/issues/7362 for details)",
    { deprecated: true }
  ),
  {
    name: "--linkopt",
    description: "Additional option to pass to gcc when linking",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--ltobackendopt",
    description:
      "Additional option to pass to the LTO backend step (under --features=thin_lto)",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--ltoindexopt",
    description:
      "Additional option to pass to the LTO indexing step (under --features=thin_lto)",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--memprof_profile",
    description: "Use memprof profile",
    args: { name: "label" },
  },
  {
    name: "--minimum_os_version",
    description: "The minimum OS version which your compilation targets",
    args: { name: "version" },
  },
  ...booleanOption(
    "objc_enable_binary_stripping",
    "Whether to perform symbol and dead-code strippings on linked binaries. Binary strippings will be performed if both this flag and --compilation_mode=opt are specified"
  ),
  ...booleanOption(
    "objc_generate_linkmap",
    "Specifies whether to generate a linkmap file"
  ),
  ...booleanOption(
    "objc_use_dotd_pruning",
    "If set, .d files emitted by clang will be used to prune the set of inputs passed into objc compiles"
  ),
  {
    name: "--objccopt",
    description:
      "Additional options to pass to gcc when compiling Objective-C/C++ source files",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--per_file_copt",
    description:
      "Additional options to selectively pass to gcc when compiling certain files. This option can be passed multiple times",
    args: { name: "regex@option[,option...]" },
    isRepeatable: true,
  },
  {
    name: "--per_file_ltobackendopt",
    description:
      "Additional options to selectively pass to LTO backend (under --features=thin_lto) when compiling certain backend objects",
    args: { name: "regex@option[,option...]" },
    isRepeatable: true,
  },
  ...booleanOption(
    "process_headers_in_dependencies",
    "When building a target //a:a, process headers in all targets that //a:a depends on (if header processing is enabled for the toolchain)"
  ),
  {
    name: "--propeller_optimize",
    description:
      "Use Propeller profile information to optimize the build target.A propeller profile must consist of at least one of two files, a cc profile and a ld profile",
    args: { name: "label" },
  },
  {
    name: "--propeller_optimize_absolute_cc_profile",
    description:
      "Absolute path name of cc_profile file for Propeller Optimized builds",
    args: { name: "path" },
    deprecated: true,
  },
  {
    name: "--propeller_optimize_absolute_ld_profile",
    description:
      "Absolute path name of ld_profile file for Propeller Optimized builds",
    args: { name: "path" },
    deprecated: true,
  },
  ...booleanOption(
    "proto_profile",
    "Whether to pass profile_path to the proto compiler"
  ),
  {
    name: "--proto_profile_path",
    description:
      "The profile to pass to the proto compiler as profile_path. If unset, but --proto_profile is true (the default), infers the path from --fdo_optimize",
    args: { name: "label" },
  },
  ...booleanOption(
    "save_temps",
    "If set, temporary outputs from gcc will be saved. These include .s files (assembler code), .i files (preprocessed C) and .ii files (preprocessed C++)"
  ),
  ...booleanOption(
    "share_native_deps",
    "If true, native libraries that contain identical functionality will be shared among different targets"
  ),
  ...booleanOption(
    "strict_system_includes",
    "If true, headers found through system include paths (-isystem) are also required to be declared"
  ),
  {
    name: "--strip",
    description:
      "Specifies whether to strip binaries and shared libraries (using \"-Wl,--strip-debug\"). The default value of 'sometimes' means strip iff --compilation_mode=fastbuild",
    args: {
      name: "mode",
      suggestions: ["always", "sometimes", "never"],
      default: "sometimes",
    },
  },
  {
    name: "--stripopt",
    description:
      "Additional options to pass to strip when generating a '<name>.stripped' binary",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--xbinary_fdo",
    description:
      "Use XbinaryFDO profile information to optimize compilation. Specify the name of default cross binary profile",
    args: { name: "label" },
  },
  // JavaOptions
  ...booleanOption(
    "experimental_inmemory_jdeps_files",
    "If enabled, the dependency (.jdeps) files generated from Java compilations will be passed through in memory directly from the remote build nodes instead of being written to disk"
  ),
  {
    name: "--experimental_java_classpath",
    description: "Enables reduced classpaths for Java compilations",
    args: {
      name: "value",
      suggestions: ["off", "javabuilder", "bazel", "bazel_no_fallback"],
      default: "bazel",
    },
  },
  {
    name: "--experimental_one_version_enforcement",
    description:
      "When enabled, enforce that a java_binary rule can't contain more than one version of the same class file on the classpath",
    args: { name: "value", suggestions: ["off", "warning", "error"] },
  },
  ...booleanOption(
    "experimental_run_android_lint_on_java_rules",
    "Whether to validate java_* sources"
  ),
  {
    name: "--experimental_strict_java_deps",
    description:
      "If true, checks that a Java target explicitly declares all directly used targets as dependencies",
    args: {
      name: "value",
      suggestions: ["off", "warn", "error", "strict", "default"],
      default: "default",
    },
  },
  ...booleanOption(
    "explicit_java_test_deps",
    "Explicitly specify a dependency to JUnit or Hamcrest in a java_test instead of accidentally obtaining from the TestRunner's deps"
  ),
  {
    name: "--host_java_launcher",
    description:
      "The Java launcher used by tools that are executed during a build",
    args: { name: "label" },
  },
  {
    name: "--host_javacopt",
    description:
      "Additional options to pass to javac when building tools that are executed during a build",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--host_jvmopt",
    description:
      "Additional options to pass to the Java VM when building tools that are executed during the build. These options will get added to the VM startup options of each java_binary target",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--java_debug",
    description:
      "Causes the Java virtual machine of a java test to wait for a connection from a JDWP-compliant debugger (such as jdb) before starting the test",
  },
  ...booleanOption(
    "java_deps",
    "Generate dependency information (for now, compile-time classpath) per Java target"
  ),
  ...booleanOption(
    "java_header_compilation",
    "Compile ijars directly from source"
  ),
  {
    name: "--java_language_version",
    description: "The Java language version",
    args: { name: "version" },
  },
  {
    name: "--java_launcher",
    description:
      "The Java launcher to use when building Java binaries. If this flag is set to the empty string, the JDK launcher is used",
    args: { name: "label" },
  },
  {
    name: "--java_runtime_version",
    description: "The Java runtime version",
    args: { name: "version", default: "local_jdk" },
  },
  {
    name: "--javacopt",
    description: "Additional options to pass to javac",
    args: { name: "option" },
    isRepeatable: true,
  },
  {
    name: "--jvmopt",
    description:
      "Additional options to pass to the Java VM. These options will get added to the VM startup options of each java_binary target",
    args: { name: "option" },
    isRepeatable: true,
  },
  ...booleanOption(
    "one_version_enforcement_on_java_tests",
    "When enabled, and with experimental_one_version_enforcement set to a non-NONE value, enforce one version on java_test targets"
  ),
  {
    name: "--plugin",
    description:
      "Plugins to use in the build. Currently works with java_plugin",
    args: { name: "labels" },
    isRepeatable: true,
  },
  {
    name: "--proguard_top",
    description:
      "Specifies which version of ProGuard to use for code removal when building a Java binary",
    args: { name: "label" },
  },
  {
    name: "--tool_java_language_version",
    description:
      "The Java language version used to execute the tools that are needed during a build",
    args: { name: "version" },
  },
  {
    name: "--tool_java_runtime_version",
    description:
      "The Java runtime version used to execute tools during the build",
    args: { name: "version", default: "remotejdk_11" },
  },
  ...booleanOption(
    "use_ijars",
    "If enabled, this option causes Java compilation to use interface jars. This will result in faster incremental compilation, but error messages can be different"
  ),
  // TestConfiguration.TestOptions
  ...booleanOption(
    "cache_test_results",
    "If set to auto, Bazel reruns a test if and only if: 1. Bazel detects changes in the test or its dependencies, 2. The test is marked as external, 3. Multiple test runs were requested with --runs_per_test, or 4. The test previously failed",
    { abbrev: "t", values: ["auto", "yes", "no"] }
  ),
  {
    name: "--coverage_support",
    description:
      "Location of support files that are required on the inputs of every test action that collects code coverage. Defaults to //tools/test:coverage_support",
    args: { name: "label" },
  },
  {
    name: "--default_test_resources",
    description:
      "Override the default resources amount for tests. The expected format is {resource}={value}. If a single positive number is specified as {value} it will override the default resources for all test sizes",
    args: { name: "resource=value" },
    isRepeatable: true,
  },
  ...booleanOption(
    "experimental_cancel_concurrent_tests",
    "If on_failed or on_passed, then Bazel will cancel concurrently running tests on the first successful run with that result",
    { values: ["never", "on_failed", "on_passed"] }
  ),
  ...booleanOption(
    "experimental_fetch_all_coverage_outputs",
    "If true, then Bazel fetches the entire coverage data directory for each test during a coverage run"
  ),
  ...booleanOption(
    "experimental_retain_test_configuration_across_testonly",
    "When enabled, --trim_test_configuration will not trim the test configuration for rules marked testonly=1. This is meant to reduce action conflict issues when non-test rules depend on cc_test rules"
  ),
  ...booleanOption(
    "experimental_split_coverage_postprocessing",
    "If true, then Bazel will run coverage postprocessing for test in a new spawn"
  ),
  ...booleanOption(
    "incompatible_check_sharding_support",
    "If true, Bazel will fail a sharded test if the test runner does not indicate that it supports sharding by touching the file at the path in TEST_SHARD_STATUS_FILE"
  ),
  ...booleanOption(
    "incompatible_exclusive_test_sandboxed",
    "If true, exclusive tests will run with sandboxed strategy. Add local tag to force an exclusive test run locally"
  ),
  {
    name: "--runs_per_test",
    description:
      "Specifies number of times to run each test. If any of those attempts fail for any reason, the whole test is considered failed",
    args: { name: "[regex@]number" },
    isRepeatable: true,
  },
  ...booleanOption(
    "runs_per_test_detects_flakes",
    "If true, any shard in which at least one run/attempt passes and at least one run/attempt fails gets a FLAKY status"
  ),
  {
    name: "--test_arg",
    description:
      "Specifies additional options and arguments that should be passed to the test executable. Can be used multiple times to specify several arguments",
    args: { name: "argument" },
    isRepeatable: true,
  },
  {
    name: "--test_env",
    description:
      "Specifies additional environment variables to be injected into the test runner environment. Variables can be either specified by name, in which case its value will be read from the Bazel client environment, or by the name=value pair",
    args: { name: "name[=value]" },
    isRepeatable: true,
  },
  {
    name: "--test_filter",
    description:
      "Specifies a filter to forward to the test framework. Used to limit the tests run. Note that this does not affect which targets are built",
    args: { name: "filter" },
  },
  {
    name: "--test_result_expiration",
    description: "This option is deprecated and has no effect",
    args: { name: "integer", default: "-1" },
    deprecated: true,
  },
  ...booleanOption(
    "test_runner_fail_fast",
    "Forwards fail fast option to the test runner. The test runner should stop execution upon first failure"
  ),
  {
    name: "--test_sharding_strategy",
    description:
      "Specify strategy for test sharding: - explicit to only use sharding if the shard_count BUILD attribute is present",
    args: {
      name: "strategy",
      suggestions: ["explicit", "disabled"],
      default: "explicit",
    },
  },
  {
    name: "--test_timeout",
    description:
      "Override the default test timeout values for test timeouts (in secs). If a single positive integer value is specified it will override all categories",
    args: { name: "seconds" },
  },
  ...booleanOption(
    "trim_test_configuration",
    "When enabled, test-related options will be cleared below the top level of the build. When this flag is active, tests cannot be built as dependencies of non-test rules, but changes to test-related options will not cause non-test rules to be re-analyzed"
  ),
  ...booleanOption(
    "zip_undeclared_test_outputs",
    "If true, undeclared test outputs will be archived in a zip file"
  ),
  // CoverageConfiguration.CoverageOptions
  {
    name: "--coverage_output_generator",
    description:
      "Location of the binary that is used to postprocess raw coverage reports. This must be a binary target. Defaults to @bazel_tools//tools/test:lcov_merger",
    args: { name: "label" },
  },
  {
    name: "--coverage_report_generator",
    description:
      "Location of the binary that is used to generate coverage reports. This must be a binary target. Defaults to @bazel_tools//tools/test:coverage_report_generator",
    args: { name: "label" },
  },
  // SandboxOptions
  {
    name: "--experimental_docker_image",
    description:
      'Specify a Docker image name (e.g. "ubuntu:latest") that should be used to execute a sandboxed action when using the docker strategy and the action itself doesn\'t already have a container-image attribute in its remote_execution_properties in the platform description',
    args: { name: "string" },
  },
  ...booleanOption(
    "experimental_docker_privileged",
    "If enabled, Bazel will pass the --privileged flag to 'docker run' when running actions. This might be required by your build, but it might also result in reduced hermeticity"
  ),
  ...booleanOption(
    "experimental_docker_use_customized_images",
    "If enabled, injects the uid and gid of the current user into the Docker image before using it. This is required if your build / tests depend on the user having a name and home directory inside the container"
  ),
  ...booleanOption(
    "experimental_docker_verbose",
    "If enabled, Bazel will print more verbose messages about the Docker sandbox strategy"
  ),
  ...booleanOption(
    "experimental_enable_docker_sandbox",
    "Enable Docker-based sandboxing. This option has no effect if Docker is not installed"
  ),
  ...booleanOption(
    "experimental_inmemory_sandbox_stashes",
    "If set to true, the contents of stashed sandboxes for reuse_sandbox_directories will be tracked in memory. This reduces the amount of I/O needed during reuse"
  ),
  {
    name: "--experimental_sandbox_async_tree_delete_idle_threads",
    description:
      "If 0, sandboxes are deleted as soon as actions finish, blocking action completion. If greater than 0, sandboxes are deleted asynchronously in the background without blocking action completion",
    args: { name: "integer", default: "4" },
  },
  {
    name: "--experimental_sandbox_enforce_resources_regexp",
    description:
      "If true, actions whose mnemonic matches the input regex will have their resources request enforced as limits, overriding the value of --experimental_sandbox_limits, if the resource type supports it",
    args: { name: "regex" },
  },
  {
    name: "--experimental_sandbox_limits",
    description:
      "If > 0, each Linux sandbox will be limited to the given amount for the specified resource. Requires --incompatible_use_new_cgroup_implementation and overrides --experimental_sandbox_memory_limit_mb",
    args: { name: "resource=value" },
    isRepeatable: true,
  },
  {
    name: "--experimental_sandbox_memory_limit_mb",
    description:
      "If > 0, each Linux sandbox will be limited to the given amount of memory (in MB). Requires cgroups v1 or v2 and permissions for the users to the cgroups dir",
    args: { name: "megabytes", suggestions: ["HOST_RAM"] },
  },
  ...booleanOption("experimental_sandboxfs_map_symlink_targets", "No-op"),
  ...booleanOption(
    "experimental_use_hermetic_linux_sandbox",
    "If set to true, do not mount root, only mount whats provided with sandbox_add_mount_pair. Input files will be hardlinked to the sandbox instead of symlinked to from the sandbox"
  ),
  ...booleanOption(
    "experimental_use_windows_sandbox",
    'Use Windows sandbox to run actions. If "yes", the binary provided by --experimental_windows_sandbox_path must be valid and correspond to a supported version of sandboxfs',
    { values: ["auto", "yes", "no"] }
  ),
  {
    name: "--experimental_windows_sandbox_path",
    description:
      "Path to the Windows sandbox binary to use when --experimental_use_windows_sandbox is true. If a bare name, use the first binary of that name found in the PATH",
    args: { name: "string", default: "BazelSandbox.exe" },
  },
  ...booleanOption(
    "incompatible_use_new_cgroup_implementation",
    "If true, use the new implementation for cgroups. The old implementation only supports the memory controller and ignores the value of --experimental_sandbox_limits"
  ),
  ...booleanOption(
    "reuse_sandbox_directories",
    "If set to true, directories used by sandboxed non-worker execution may be reused to avoid unnecessary setup costs"
  ),
  {
    name: "--sandbox_add_mount_pair",
    description: "Add additional path pair to mount in sandbox",
    args: { name: "source:target" },
    isRepeatable: true,
  },
  {
    name: "--sandbox_base",
    description:
      "Lets the sandbox create its sandbox directories underneath this path. Specify a path on tmpfs (like /run/shm) to possibly improve performance a lot when your build / tests have many input files",
    args: { name: "path", template: "folders" },
  },
  {
    name: "--sandbox_block_path",
    description: "For sandboxed actions, disallow access to this path",
    args: { name: "path", template: "filepaths" },
    isRepeatable: true,
  },
  ...booleanOption(
    "sandbox_debug",
    "Enables debugging features for the sandboxing feature. This includes two things: first, the sandbox root contents are left untouched after a build; and second, prints extra debugging information on execution"
  ),
  ...booleanOption(
    "sandbox_default_allow_network",
    "Allow network access by default for actions; this may not work with all sandboxing implementations"
  ),
  ...booleanOption(
    "sandbox_enable_loopback_device",
    "If true, a loopback device will be set up in the linux-sandbox network namespace for local actions"
  ),
  ...booleanOption(
    "sandbox_explicit_pseudoterminal",
    "Explicitly enable the creation of pseudoterminals for sandboxed actions. Some linux distributions require setting the group id of the process to 'tty' inside the sandbox in order for pseudoterminals to function"
  ),
  ...booleanOption(
    "sandbox_fake_hostname",
    "Change the current hostname to 'localhost' for sandboxed actions"
  ),
  ...booleanOption(
    "sandbox_fake_username",
    "Change the current username to 'nobody' for sandboxed actions"
  ),
  {
    name: "--sandbox_tmpfs_path",
    description:
      "For sandboxed actions, mount an empty, writable directory at this absolute path (if supported by the sandboxing implementation, ignored otherwise)",
    args: { name: "path", template: "filepaths" },
    isRepeatable: true,
  },
  {
    name: "--sandbox_writable_path",
    description:
      "For sandboxed actions, make an existing directory writable in the sandbox (if supported by the sandboxing implementation, ignored otherwise)",
    args: { name: "path", template: "filepaths" },
    isRepeatable: true,
  },
  // WorkspaceStatusAction.Options
  {
    name: "--embed_label",
    description: "Embed source control revision or release label in binary",
    args: { name: "label" },
  },
  {
    name: "--workspace_status_command",
    description:
      "A command invoked at the beginning of the build to provide status information about the workspace in the form of key/value pairs",
    args: { name: "path", template: "filepaths" },
  },
  // BazelCoverageReportModule.Options
  {
    name: "--combined_report",
    description:
      "Specifies desired cumulative coverage report type. At this point only LCOV is supported",
    args: { name: "value", suggestions: ["none", "lcov"], default: "lcov" },
  },
  // OutputFilteringModule.Options
  {
    name: "--auto_output_filter",
    description:
      "If --output_filter is not specified, then the value for this option is used create a filter automatically",
    args: {
      name: "value",
      suggestions: ["none", "all", "packages", "subpackages"],
      default: "none",
    },
  },
  // WorkerOptions
  ...booleanOption(
    "experimental_shrink_worker_pool",
    "If enabled, could shrink worker pool if worker memory pressure is high. This flag works only when flag experimental_total_worker_memory_limit_mb is enabled"
  ),
  {
    name: "--experimental_total_worker_memory_limit_mb",
    description:
      "If this limit is greater than zero idle workers might be killed if the total memory usage of all workers exceed the limit",
    args: { name: "megabytes", suggestions: ["HOST_RAM"] },
  },
  {
    name: "--experimental_worker_allowlist",
    description:
      "If non-empty, only allow using persistent workers with the given worker key mnemonic",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "experimental_worker_cancellation",
    "If enabled, Bazel may send cancellation requests to workers that support them"
  ),
  {
    name: "--experimental_worker_memory_limit_mb",
    description:
      "If this limit is greater than zero, workers might be killed if the memory usage of the worker exceeds the limit",
    args: { name: "megabytes", suggestions: ["HOST_RAM"] },
  },
  {
    name: "--experimental_worker_metrics_poll_interval",
    description:
      "The interval between collecting worker metrics and possibly attempting evictions. Cannot effectively be less than 1s for performance reasons",
    args: { name: "duration", default: "5s" },
  },
  ...booleanOption(
    "experimental_worker_multiplex_sandboxing",
    "If enabled, multiplex workers with a 'supports-multiplex-sandboxing' execution requirement will run in a sandboxed environment, using a separate sandbox directory per work request"
  ),
  ...booleanOption(
    "experimental_worker_sandbox_hardening",
    "If enabled, workers are run in a hardened sandbox, if the implementation allows it. If hardening is enabled then tmp directories are distinct for different workers"
  ),
  {
    name: "--experimental_worker_sandbox_inmemory_tracking",
    description:
      "A worker key mnemonic for which the contents of the sandbox directory are tracked in memory. This may improve build performance at the cost of additional memory usage",
    args: { name: "string" },
    isRepeatable: true,
  },
  ...booleanOption(
    "experimental_worker_strict_flagfiles",
    "If enabled, actions arguments for workers that do not follow the worker specification will cause an error. Worker arguments must have exactly one @flagfile argument as the last of its list of arguments"
  ),
  {
    name: "--worker_extra_flag",
    description:
      "Extra command-flags that will be passed to worker processes in addition to --persistent_worker, keyed by mnemonic (e.g. --worker_extra_flag=Javac=--debug",
    args: { name: "key=value" },
    isRepeatable: true,
  },
  {
    name: "--worker_max_instances",
    description:
      "How many instances of each kind of persistent worker may be launched if you use the 'worker' strategy. May be specified as [name=value] to give a different value per mnemonic",
    args: { name: "[name=]value" },
    isRepeatable: true,
  },
  {
    name: "--worker_max_multiplex_instances",
    description:
      "How many WorkRequests a multiplex worker process may receive in parallel if you use the 'worker' strategy with --worker_multiplex",
    args: { name: "[name=]value" },
    isRepeatable: true,
  },
  ...booleanOption(
    "worker_multiplex",
    "If enabled, workers will use multiplexing if they support it"
  ),
  ...booleanOption(
    "worker_quit_after_build",
    "If enabled, all workers quit after a build is done"
  ),
  ...booleanOption(
    "worker_sandboxing",
    "If enabled, singleplex workers will run in a sandboxed environment. Singleplex workers are always sandboxed when running under the dynamic execution strategy, irrespective of this flag"
  ),
  ...booleanOption(
    "worker_verbose",
    "If enabled, prints verbose messages when workers are started, shutdown,"
  ),
  // DynamicExecutionOptions
  ...booleanOption("debug_spawn_scheduler", "debug_spawn_scheduler"),
  {
    name: "--dynamic_local_execution_delay",
    description:
      "How many milliseconds should local execution be delayed, if remote execution was faster during a build at least once?",
    args: { name: "integer", default: "1000" },
  },
  {
    name: "--dynamic_local_strategy",
    description:
      "The local strategies, in order, to use for the given mnemonic - the first applicable strategy is used. For example, worker,sandboxed runs actions that support persistent workers using the worker strategy, and all others using the sandboxed strategy",
    args: { name: "key=value[,value...]" },
    isRepeatable: true,
  },
  {
    name: "--dynamic_remote_strategy",
    description:
      "The remote strategies, in order, to use for the given mnemonic - the first applicable strategy is used. If no mnemonic is given, the list of strategies is used as the fallback for all mnemonics",
    args: { name: "key=value[,value...]" },
    isRepeatable: true,
  },
  ...booleanOption(
    "experimental_dynamic_exclude_tools",
    'When set, targets that are build "for tool" are not subject to dynamic execution. Such targets are extremely unlikely to be built incrementally and thus not worth spending local cycles on'
  ),
  {
    name: "--experimental_dynamic_ignore_local_signals",
    description:
      "Takes a list of OS signal numbers. If a local branch of dynamic execution gets killed with any of these signals, the remote branch will be allowed to finish instead",
    args: { name: "comma-separated list" },
  },
  {
    name: "--experimental_dynamic_local_load_factor",
    description:
      "Controls how much load from dynamic execution to put on the local machine. This flag adjusts how many actions in dynamic execution we will schedule concurrently",
    args: { name: "number", default: "0" },
  },
  {
    name: "--experimental_dynamic_slow_remote_time",
    description:
      "If >0, the time a dynamically run action must run remote-only before we prioritize its local execution to avoid remote timeouts",
    args: { name: "duration", default: "0" },
  },
  {
    name: "--experimental_spawn_scheduler",
    description:
      "Enable dynamic execution by running actions locally and remotely in parallel. Bazel spawns each action locally and remotely and picks the one that completes first",
    deprecated: true,
  },
  ...booleanOption(
    "internal_spawn_scheduler",
    "Placeholder option so that we can tell in Bazel whether the spawn scheduler was enabled"
  ),
];

// Command specific options
const testSummaryOptions: Fig.Option[] = [
  // TestSummaryOptions
  ...booleanOption(
    "print_relative_test_log_paths",
    "If true, when printing the path to a test log, use relative path that makes use of the 'testlogs' convenience symlink"
  ),
  ...booleanOption(
    "test_verbose_timeout_warnings",
    "If true, print additional warnings when the actual test execution time does not match the timeout defined by the test (whether implied or explicit)"
  ),
  ...booleanOption(
    "verbose_test_summary",
    "If true, print additional information (timing, number of failed runs, etc) in the test summary"
  ),
];
const runOptions: Fig.Option[] = [
  // RunCommand.RunOptions
  ...booleanOption(
    "omit_run_args",
    "Specifies whether the arguments passed to the runnable target will be omitted from the output for privacy reasons"
  ),
  ...booleanOption(
    "portable_paths",
    "If true, includes paths to replace in ExecRequest to make the resulting paths portable"
  ),
  ...booleanOption(
    "run",
    "If false, skip running the command line constructed for the built target. Note that this flag is ignored for all --script_path builds"
  ),
  {
    name: "--run_env",
    description:
      "Specifies the set of environment variables available to the target to run",
    args: { name: "name[=value]" },
    isRepeatable: true,
  },
  ...booleanOption(
    "run_in_cwd",
    "If true, runs the target in the current working directory instead of the runfile tree"
  ),
  {
    name: "--script_path",
    description:
      "If set, write a shell script to the given file which invokes the target. If this option is set, the target is not run from Bazel",
    args: { name: "path", template: "filepaths" },
  },
];
const cleanOptions: Fig.Option[] = [
  // CleanCommand.Options
  ...booleanOption(
    "async",
    "If true, output cleaning is asynchronous. When this command completes, it will be safe to execute new commands in the same client, even though the deletion may continue in the background"
  ),
  ...booleanOption(
    "expunge",
    "If true, clean removes the entire working tree for this Bazel instance, which includes all Bazel-created temporary and build output files, and stops the Bazel server if it is running"
  ),
  {
    name: "--expunge_async",
    description:
      "If specified, clean asynchronously removes the entire working tree for this Bazel instance, which includes all Bazel-created temporary and build output files, and stops the Bazel server if it is running",
  },
];
const commonQueryOptions: Fig.Option[] = [
  // CommonQueryOptions
  {
    name: "--aspect_deps",
    description:
      "How to resolve aspect dependencies when the output format is one of {xml,proto,record}",
    args: {
      name: "value",
      suggestions: ["off", "conservative", "precise"],
      default: "conservative",
    },
  },
  ...booleanOption(
    "consistent_labels",
    "If enabled, every query command emits labels as if by the Starlark str function applied to a Label instance. This is useful for tools that need to match the output of different query commands and/or labels emitted by rules"
  ),
  ...booleanOption(
    "experimental_explicit_aspects",
    "Aquery, cquery: whether to include aspect-generated actions in the output. query: no-op (aspects are always followed)"
  ),
  ...booleanOption(
    "graph:factored",
    "If true, then the graph will be emitted 'factored', i.e. topologically-equivalent nodes will be merged together and their labels concatenated"
  ),
  {
    name: "--graph:node_limit",
    description:
      "The maximum length of the label string for a graph node in the output. Longer labels will be truncated; -1 means no truncation",
    args: { name: "integer", default: "512" },
  },
  ...booleanOption(
    "implicit_deps",
    "If enabled, implicit dependencies will be included in the dependency graph over which the query operates. An implicit dependency is one that is not explicitly specified in the BUILD file but added by bazel"
  ),
  ...booleanOption(
    "include_aspects",
    "Aquery, cquery: whether to include aspect-generated actions in the output. query: no-op (aspects are always followed)"
  ),
  ...booleanOption(
    "incompatible_package_group_includes_double_slash",
    "If enabled, when outputting package_group's packages attribute, the leading // will not be omitted"
  ),
  ...booleanOption(
    "infer_universe_scope",
    "If set and --universe_scope is unset, then a value of --universe_scope will be inferred as the list of unique target patterns in the query expression"
  ),
  ...booleanOption(
    "line_terminator_null",
    "Whether each format is terminated with \\\\0 instead of newline"
  ),
  ...booleanOption(
    "nodep_deps",
    'If enabled, deps from "nodep" attributes will be included in the dependency graph over which the query operates'
  ),
  {
    name: "--output_file",
    description:
      "When specified, query results will be written directly to this file, and nothing will be printed to Bazel's standard output stream (stdout)",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "proto:default_values",
    "If true, attributes whose value is not explicitly specified in the BUILD file are included; otherwise they are omitted"
  ),
  ...booleanOption(
    "proto:definition_stack",
    "Populate the definition_stack proto field, which records for each rule instance the Starlark call stack at the moment the rule's class was defined"
  ),
  ...booleanOption(
    "proto:flatten_selects",
    "If enabled, configurable attributes created by select() are flattened. For list types the flattened representation is a list containing each value of the select map exactly once"
  ),
  ...booleanOption(
    "proto:include_attribute_source_aspects",
    "Populate the source_aspect_name proto field of each Attribute with the source aspect that the attribute came from (empty string if it did not)"
  ),
  ...booleanOption(
    "proto:include_starlark_rule_env",
    "Use the starlark environment in the value of the generated $internal_attr_hash attribute. This ensures that the starlark rule definition (and its transitive imports) are part of this identifier"
  ),
  ...booleanOption(
    "proto:include_synthetic_attribute_hash",
    "Whether or not to calculate and populate the $internal_attr_hash attribute"
  ),
  ...booleanOption(
    "proto:instantiation_stack",
    "Populate the instantiation call stack of each rule. Note that this requires the stack to be present"
  ),
  ...booleanOption(
    "proto:locations",
    "Whether to output location information in proto output at all"
  ),
  {
    name: "--proto:output_rule_attrs",
    description:
      "Comma separated list of attributes to include in output. Defaults to all attributes. Set to empty string to not output any attribute",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "proto:rule_classes",
    "Populate the rule_class_key field of each rule; and for the first rule with a given rule_class_key, also populate its rule_class_info proto field"
  ),
  ...booleanOption(
    "proto:rule_inputs_and_outputs",
    "Whether or not to populate the rule_input and rule_output fields"
  ),
  {
    name: "--query_file",
    description:
      "If set, query will read the query from the file named here, rather than on the command line. It is an error to specify a file here as well as a command-line query",
    args: { name: "path", template: "filepaths" },
  },
  ...booleanOption(
    "relative_locations",
    "If true, the location of BUILD files in xml and proto outputs will be relative. By default, the location output is an absolute path and will not be consistent across machines"
  ),
  ...booleanOption(
    "tool_deps",
    "Query: If disabled, dependencies on 'exec configuration' will not be included in the dependency graph over which the query operates"
  ),
  {
    name: "--universe_scope",
    description:
      "A comma-separated set of target patterns (additive and subtractive). The query may be performed in the universe defined by the transitive closure of the specified targets",
    args: { name: "comma-separated list" },
  },
];
const queryOptions: Fig.Option[] = [
  // QueryOptions
  ...booleanOption(
    "experimental_graphless_query",
    "If true, uses a Query implementation that does not make a copy of the graph. The new implementation only supports --order_output=no, as well as only a subset of output formatters",
    { values: ["auto", "yes", "no"] }
  ),
  {
    name: "--graph:conditional_edges_limit",
    description:
      "The maximum number of condition labels to show. -1 means no truncation and 0 means no annotation. This option is only applicable to --output=graph",
    args: { name: "integer", default: "4" },
  },
  ...booleanOption(
    "incompatible_lexicographical_output",
    "If this option is set, sorts --order_output=auto output in lexicographical order"
  ),
  {
    name: "--noorder_results",
    description:
      "Output the results in dependency-ordered (default) or unordered fashion. The unordered output is faster but only supported when --output is not minrank, maxrank, or graph",
    deprecated: true,
  },
  {
    name: "--null",
    description:
      "Whether each format is terminated with \\\\0 instead of newline",
  },
  {
    name: "--order_output",
    description:
      "Output the results unordered (no), dependency-ordered (deps), or fully ordered (full)",
    args: {
      name: "mode",
      suggestions: ["no", "deps", "auto", "full"],
      default: "auto",
    },
  },
  {
    name: "--order_results",
    description:
      "Output the results in dependency-ordered (default) or unordered fashion. The unordered output is faster but only supported when --output is not minrank, maxrank, or graph",
    deprecated: true,
  },
  {
    name: "--output",
    description:
      "The format in which the query results should be printed. Allowed values for query are: build, graph, streamed_jsonproto, label, label_kind, location, maxrank, minrank, package, proto, streamed_proto, xml",
    args: {
      name: "format",
      suggestions: [
        "build",
        "graph",
        "streamed_jsonproto",
        "label",
        "label_kind",
        "location",
        "maxrank",
        "minrank",
        "package",
        "proto",
        "streamed_proto",
        "xml",
      ],
      default: "label",
    },
  },
  ...booleanOption(
    "strict_test_suite",
    "If true, the tests() expression gives an error if it encounters a test_suite containing non-test targets"
  ),
  ...booleanOption(
    "xml:default_values",
    "If true, rule attributes whose value is not explicitly specified in the BUILD file are printed; otherwise they are omitted"
  ),
  ...booleanOption(
    "xml:line_numbers",
    "If true, XML output contains line numbers. Disabling this option may make diffs easier to read. This option is only applicable to --output=xml"
  ),
];
const aqueryOptions: Fig.Option[] = [
  // AqueryOptions
  ...booleanOption(
    "include_artifacts",
    "Includes names of the action inputs and outputs in the output (potentially large)"
  ),
  ...booleanOption(
    "include_commandline",
    "Includes the content of the action command lines in the output (potentially large)"
  ),
  ...booleanOption(
    "include_file_write_contents",
    "Include the file contents for the FileWrite, SourceSymlinkManifest, and RepoMappingManifest actions (potentially large)"
  ),
  ...booleanOption(
    "include_param_files",
    "Include the content of the param files used in the command (potentially large). Note: Enabling this flag will automatically enable the --include_commandline flag"
  ),
  ...booleanOption(
    "include_pruned_inputs",
    "Includes action inputs that were pruned during action execution. Only affects actions that discover inputs and have been executed in a previous invocation"
  ),
  {
    name: "--output",
    description:
      "The format in which the aquery results should be printed. Allowed values for aquery are: text, textproto, proto, streamed_proto, jsonproto",
    args: {
      name: "format",
      suggestions: [
        "text",
        "textproto",
        "proto",
        "streamed_proto",
        "jsonproto",
      ],
      default: "text",
    },
  },
  ...booleanOption(
    "skyframe_state",
    "Without performing extra analysis, dump the current Action Graph from Skyframe. Note: Specifying a target with --skyframe_state is currently not supported"
  ),
];
const cqueryOptions: Fig.Option[] = [
  // CqueryOptions
  {
    name: "--output",
    description:
      "The format in which the cquery results should be printed. Allowed values for cquery are: label, label_kind, textproto, transitions, proto, streamed_proto, jsonproto",
    args: {
      name: "format",
      suggestions: [
        "label",
        "label_kind",
        "textproto",
        "transitions",
        "proto",
        "streamed_proto",
        "jsonproto",
      ],
      default: "label",
    },
  },
  ...booleanOption(
    "proto:include_configurations",
    "If enabled, proto output will include information about configurations. When disabled,cquery proto output format resembles query output format"
  ),
  {
    name: "--show_config_fragments",
    description:
      "Shows the configuration fragments required by a rule and its transitive dependencies. This can be useful for evaluating how much a configured target graph can be trimmed",
    args: {
      name: "value",
      suggestions: ["off", "direct", "transitive"],
      default: "off",
    },
  },
  {
    name: "--starlark:expr",
    description:
      "A Starlark expression to format each configured target in cquery's --output=starlark mode. The configured target is bound to 'target'",
    args: { name: "expression" },
  },
  {
    name: "--starlark:file",
    description:
      "The name of a file that defines a Starlark function called 'format', of one argument, that is applied to each configured target to format it as a string",
    args: { name: "path" },
  },
  {
    name: "--transitions",
    description: "The format in which cquery will print transition information",
    args: {
      name: "value",
      suggestions: ["full", "lite", "none"],
      default: "none",
    },
  },
];
const printActionOptions: Fig.Option[] = [
  // PrintActionCommand.PrintActionOptions
  {
    name: "--print_action_mnemonics",
    description:
      "Lists which mnemonics to filter print_action data by, no filtering takes place when left empty",
    args: { name: "string" },
    isRepeatable: true,
  },
];
const configOptions: Fig.Option[] = [
  // ConfigCommand.ConfigOptions
  ...booleanOption(
    "dump_all",
    "If set, dump all known configurations instead of just the ids"
  ),
  {
    name: "--output",
    description:
      "Formats the output of displayed results. Can be one of: 'text', 'json'",
    args: { name: "format", suggestions: ["text", "json"], default: "text" },
  },
];
const canonicalizeFlagsOptions: Fig.Option[] = [
  // CanonicalizeCommand.Options
  ...booleanOption(
    "canonicalize_policy",
    "Output the canonical policy, after expansion and filtering. To keep the output clean, the canonicalized command arguments will NOT be shown when this option is set to true"
  ),
  ...booleanOption(
    "experimental_include_default_values",
    "Whether Starlark options set to their default values are included in the output"
  ),
  {
    name: "--for_command",
    description: "The command for which the options should be canonicalized",
    args: { name: "command", default: "build" },
  },
  {
    name: "--invocation_policy",
    description:
      "Applies an invocation policy to the options to be canonicalized",
    args: { name: "policy" },
  },
];
const mobileInstallOptions: Fig.Option[] = [
  // MobileInstallCommand.Options
  ...booleanOption(
    "incremental",
    "Whether to do an incremental install. If true, try to avoid unnecessary additional work by reading the state of the device the code is to be installed on and using that information to avoid unnecessary work"
  ),
  {
    name: "--mode",
    description:
      "Deprecated no-effect flag. Only skylark mode is still supported",
    args: {
      name: "value",
      suggestions: ["classic", "skylark"],
      default: "skylark",
    },
    deprecated: true,
  },
  ...booleanOption(
    "split_apks",
    "Whether to use split apks to install and update the application on the device. Works only with devices with Marshmallow or later"
  ),
  // WriteAdbArgsAction.Options
  {
    name: "--adb",
    description:
      "Adb binary to use for the 'mobile-install' command. If unspecified, the one in the Android SDK specified by the --android_sdk_channel command line option (or the default SDK if --android_sdk_channel is not specified) is used",
    args: { name: "path", template: "filepaths" },
  },
  {
    name: "--adb_arg",
    description:
      "Extra arguments to pass to adb. Usually used to designate a device to install to",
    args: { name: "argument" },
    isRepeatable: true,
  },
  {
    name: "--debug_app",
    description: "Whether to wait for the debugger before starting the app",
  },
  {
    name: "--device",
    description:
      "The adb device serial number. If not specified, the first device will be used",
    args: { name: "device" },
  },
  {
    name: "--incremental_install_verbosity",
    description:
      "The verbosity for incremental install. Set to 1 for debug logging",
    args: { name: "verbosity" },
  },
  {
    name: "--start",
    description:
      "How the app should be started after installing it. Set to WARM to preserve and restore application state on incremental installs",
    args: { name: "value", suggestions: ["no", "cold", "warm", "debug"] },
  },
  {
    name: "--start_app",
    description: "Whether to start the app after installing it",
  },
];
const fetchOptions: Fig.Option[] = [
  // FetchOptions
  ...booleanOption(
    "all",
    "Fetches all external repositories necessary for building any target or repository. This is the default if no other flags and arguments are provided"
  ),
  ...booleanOption(
    "configure",
    "Only fetches repositories marked as configure for system-configuration purpose. Only works when --enable_bzlmod is on"
  ),
  ...booleanOption(
    "force",
    "Ignore existing repository if any and force fetch the repository again. Only works when --enable_bzlmod is on"
  ),
  {
    name: "--repo",
    description:
      "Only fetches the specified repository, which can be either @apparent_repo_name or @@canonical_repo_name. Only works when --enable_bzlmod is on",
    args: { name: "repo" },
    isRepeatable: true,
  },
];
const vendorOptions: Fig.Option[] = [
  // VendorOptions
  {
    name: "--repo",
    description:
      "Only vendors the specified repository, which can be either @apparent_repo_name or @@canonical_repo_name. This option can be set multiple times",
    args: { name: "repo" },
    isRepeatable: true,
  },
];
const modOptions: Fig.Option[] = [
  // ModOptions
  ...booleanOption(
    "all_repos",
    "For mod show_repo: display all repos in the entire workspace"
  ),
  ...booleanOption(
    "all_visible_repos",
    "For mod show_repo: display all repos visible to the chosen base module, under their apparent names"
  ),
  {
    name: "--base_module",
    description:
      "Specify a module relative to which the specified target repos will be interpreted",
    args: { name: "module" },
  },
  {
    name: "--charset",
    description:
      "Chooses the character set to use for the tree. Only affects text output. Valid values are utf8 or ascii. Default is utf8",
    args: { name: "charset", suggestions: ["utf8", "ascii"], default: "utf8" },
  },
  ...booleanOption(
    "cycles",
    "Points out dependency cycles inside the displayed tree"
  ),
  {
    name: "--depth",
    description:
      "Maximum display depth of the dependency tree. A depth of 1 displays the direct dependencies, for example",
    args: { name: "integer", default: "-1" },
  },
  {
    name: "--extension_filter",
    description:
      "Only display the usages of these module extensions and the repos generated by them if their respective flags are set",
    args: { name: "comma-separated list" },
  },
  {
    name: "--extension_info",
    description:
      "Specify how much detail about extension usages to include in the query result. - hidden will not show any extension information",
    args: {
      name: "value",
      suggestions: ["hidden", "usages", "repos", "all"],
      default: "hidden",
    },
  },
  {
    name: "--extension_usages",
    description:
      "Specify modules whose extension usages will be displayed in the show_extension query",
    args: { name: "comma-separated list" },
  },
  {
    name: "--from",
    description:
      "The module(s) starting from which the dependency graph query will be displayed. Check each query’s description for the exact semantics",
    args: { name: "comma-separated list" },
  },
  ...booleanOption(
    "include_builtin",
    "Include built-in modules in the dependency graph. Disabled by default because it is quite noisy"
  ),
  ...booleanOption(
    "include_unused",
    "The queries will also take into account and display the unused modules, which are not present in the module resolution graph after selection (due to the Minimal-Version Selection or override rules)"
  ),
  {
    name: "--output",
    description:
      "The format in which the query results should be printed. Allowed values for query are: text, json, graph",
    args: {
      name: "format",
      suggestions: ["text", "json", "graph"],
      default: "text",
    },
  },
  ...booleanOption(
    "verbose",
    "The queries will also display the reason why modules were resolved to their current version (if changed). Defaults to true only for the explain query"
  ),
];
const dumpOptions: Fig.Option[] = [
  // DumpCommand.DumpOptions
  ...booleanOption("action_cache", "Dump action cache content"),
  {
    name: "--memory",
    description: "Dump the memory use of the given Skyframe node",
    args: { name: "mode" },
  },
  ...booleanOption("packages", "Dump package cache content"),
  ...booleanOption("rule_classes", "Dump rule classes"),
  ...booleanOption(
    "rules",
    "Dump rules, including counts and memory usage (if memory is tracked)"
  ),
  {
    name: "--skyframe",
    description: "Dump the Skyframe graph",
    args: {
      name: "value",
      suggestions: [
        "off",
        "summary",
        "count",
        "value",
        "deps",
        "rdeps",
        "function_graph",
        "active_directories",
        "active_directories_frontier_deps",
      ],
      default: "off",
    },
  },
  {
    name: "--skykey_filter",
    description:
      "Regex filter of SkyKey names to output. Only used with --skyframe=deps, rdeps, function_graph",
    args: { name: "regex" },
  },
  {
    name: "--skylark_memory",
    description:
      "Dumps a pprof-compatible memory profile to the specified path. To learn more please see https://github.com/google/pprof",
    args: { name: "path", template: "filepaths" },
  },
];
const infoOptions: Fig.Option[] = [
  // InfoCommand.Options
  {
    name: "--info_output_type",
    description:
      "If stdout, results are directly printed to the console. If response_proto, the info command results are packed in response extensions",
    args: {
      name: "type",
      suggestions: ["stdout", "response_proto"],
      default: "stdout",
    },
  },
  ...booleanOption(
    "show_make_env",
    'Include the "Make" environment in the output'
  ),
];
const helpOptions: Fig.Option[] = [
  // HelpCommand.Options
  {
    name: "--help_verbosity",
    description: "Select the verbosity of the help command",
    args: {
      name: "verbosity",
      suggestions: ["long", "medium", "short"],
      default: "medium",
    },
  },
  {
    name: ["--long", "-l"],
    description:
      "Show full description of each option, instead of just its name",
  },
  {
    name: "--short",
    description:
      "Show only the names of the options, not their types or meanings",
  },
];
const shutdownOptions: Fig.Option[] = [
  // ShutdownCommand.Options
  {
    name: "--iff_heap_size_greater_than",
    description:
      "Iff non-zero, then shutdown will only shut down the server if the total memory (in MB) consumed by the JVM exceeds this value",
    args: { name: "integer", default: "0" },
  },
];
const versionOptions: Fig.Option[] = [
  // VersionCommand.VersionOptions
  ...booleanOption(
    "gnu_format",
    "If set, write the version to stdout using the conventions described in the GNU standards"
  ),
];

const targetsArg: Fig.Arg = {
  name: "targets",
  isVariadic: true,
  generators: bazelBuildFiles,
};

const runArgs: Fig.Arg[] = [
  { name: "target", generators: bazelBuildFiles },
  {
    name: "arguments",
    description: "Arguments passed to the target, after --",
    isOptional: true,
    isVariadic: true,
  },
];

const infoArg: Fig.Arg = {
  name: "key",
  description: "Only print the value of these keys",
  isOptional: true,
  isVariadic: true,
  suggestions: [
    {
      name: "bazel-bin",
      description: "Configuration dependent directory for binaries",
    },
    {
      name: "bazel-genfiles",
      description: "Configuration dependent directory for generated files",
    },
    {
      name: "bazel-testlogs",
      description: "Configuration dependent directory for logs from a test run",
    },
    {
      name: "character-encoding",
      description:
        "Information about the character encoding used by the running JVM",
    },
    {
      name: "committed-heap-size",
      description:
        "The amount of memory in bytes that is committed for the Java virtual machine to use",
    },
    {
      name: "execution_root",
      description:
        "A directory that makes all input and output files visible to the build",
    },
    { name: "gc-count", description: "Number of garbage collection runs" },
    {
      name: "gc-time",
      description:
        "The approximate accumulated time spend on garbage collection",
    },
    { name: "install_base", description: "The installation base directory" },
    { name: "java-home", description: "Location of the current Java runtime" },
    {
      name: "java-runtime",
      description: "Name and version of the current Java runtime environment",
    },
    {
      name: "java-vm",
      description: "Name and version of the current Java virtual machine",
    },
    { name: "local_resources", description: "Auto detected local resources" },
    {
      name: "max-heap-size",
      description:
        "The maximum amount of memory in bytes that can be used for memory management",
    },
    {
      name: "output_base",
      description:
        "A directory for shared Bazel state as well as tool and strategy specific subdirectories",
    },
    { name: "output_path", description: "Output directory" },
    {
      name: "package_path",
      description: "The search path for resolving package labels",
    },
    { name: "release", description: "Bazel release identifier" },
    { name: "server_log", description: "Bazel server log path" },
    { name: "server_pid", description: "Bazel process id" },
    {
      name: "used-heap-size",
      description: "The amount of used memory in bytes",
    },
    { name: "workspace", description: "The working directory of the server" },
  ],
};

const helpArg: Fig.Arg = {
  name: "topic",
  isOptional: true,
  suggestions: [
    "aquery",
    "build",
    "canonicalize-flags",
    "clean",
    "coverage",
    "cquery",
    "dump",
    "fetch",
    "help",
    "info",
    "license",
    "mobile-install",
    "mod",
    "print_action",
    "query",
    "run",
    "shutdown",
    "test",
    "vendor",
    "version",
    { name: "startup_options", description: "Describes the startup options" },
    {
      name: "target-syntax",
      description: "Explains the syntax for specifying targets",
    },
    {
      name: "info-keys",
      description: "Displays a list of keys used by the info command",
    },
    { name: "completion", description: "Prints the bash completion script" },
  ],
};

const modArgs: Fig.Arg[] = [
  {
    name: "subcommand",
    suggestions: [
      {
        name: "deps",
        description: "Displays the direct dependencies of the target module(s)",
      },
      { name: "graph", description: "Displays the full dependency graph" },
      {
        name: "all_paths",
        description:
          "Displays all dependency paths from the --from modules to the target modules",
      },
      {
        name: "path",
        description:
          "Displays the shortest path found in the dependency graph from the --from module(s) to the target modules",
      },
      {
        name: "explain",
        description:
          "Prints all the places where the module is requested as a direct dependency and why its version was selected",
      },
      {
        name: "show_repo",
        description: "Prints the rule that generated the specified repos",
      },
      {
        name: "show_extension",
        description: "Prints information about the given module extension(s)",
      },
      {
        name: "dump_repo_mapping",
        description:
          "Prints the mappings from apparent repo names to canonical repo names in NDJSON format",
      },
      {
        name: "tidy",
        description:
          "Formats the MODULE.bazel file and updates use_repo calls for supported module extensions",
      },
    ],
  },
  {
    name: "arguments",
    description: "Modules, extensions or repos the subcommand applies to",
    isOptional: true,
    isVariadic: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "bazel",
  description: "Bazel the build system!",
  subcommands: [
    {
      name: "aquery",
      description: "Analyzes the given targets and queries the action graph",
      args: { name: "query expression", generators: bazelBuildFiles },
      options: [
        ...commonOptions,
        ...buildOptions,
        ...commonQueryOptions,
        ...aqueryOptions,
      ],
    },
    {
      name: "build",
      description: "Builds the specified targets",
      args: targetsArg,
      options: [...commonOptions, ...buildOptions],
    },
    {
      name: "canonicalize-flags",
      description: "Canonicalizes a list of Bazel options",
      options: [...commonOptions, ...buildOptions, ...canonicalizeFlagsOptions],
    },
    {
      name: "clean",
      description: "Removes output files and optionally stops the server",
      options: [...commonOptions, ...buildOptions, ...cleanOptions],
    },
    {
      name: "config",
      description: "Displays details of configurations",
      hidden: true,
      args: { name: "config id", isOptional: true, isVariadic: true },
      options: [...commonOptions, ...buildOptions, ...configOptions],
    },
    {
      name: "coverage",
      description: "Generates code coverage report for specified test targets",
      args: targetsArg,
      options: [...commonOptions, ...buildOptions, ...testSummaryOptions],
    },
    {
      name: "cquery",
      description:
        "Loads, analyzes, and queries the specified targets w/ configurations",
      args: { name: "query expression", generators: bazelBuildFiles },
      options: [
        ...commonOptions,
        ...buildOptions,
        ...testSummaryOptions,
        ...commonQueryOptions,
        ...cqueryOptions,
      ],
    },
    {
      name: "dump",
      description: "Dumps the internal state of the Bazel server process",
      options: [...commonOptions, ...dumpOptions],
    },
    {
      name: "fetch",
      description:
        "Fetches external repositories that are prerequisites to the targets",
      args: targetsArg,
      options: [
        ...commonOptions,
        ...buildOptions,
        ...testSummaryOptions,
        ...fetchOptions,
      ],
    },
    {
      name: "help",
      description: "Prints help for commands, or the index",
      args: helpArg,
      options: [...commonOptions, ...helpOptions],
    },
    {
      name: "info",
      description: "Displays runtime info about the Bazel server",
      args: infoArg,
      options: [...commonOptions, ...buildOptions, ...infoOptions],
    },
    {
      name: "license",
      description: "Prints the license of this software",
      options: commonOptions,
    },
    {
      name: "mobile-install",
      description: "Installs targets to mobile devices",
      args: { name: "target", generators: bazelBuildFiles },
      options: [...commonOptions, ...buildOptions, ...mobileInstallOptions],
    },
    {
      name: "mod",
      description: "Queries the Bzlmod external dependency graph",
      args: modArgs,
      options: [
        ...commonOptions,
        ...coreOptions,
        ...packageOptions,
        ...loadingPhaseThreadsOptions,
        ...modOptions,
      ],
    },
    {
      name: "print_action",
      description: "Prints the command line args for compiling a file",
      args: { name: "files", isVariadic: true, template: "filepaths" },
      options: [...commonOptions, ...buildOptions, ...printActionOptions],
    },
    {
      name: "query",
      description: "Executes a dependency graph query",
      args: { name: "query expression" },
      options: [
        ...commonOptions,
        ...coreOptions,
        ...packageOptions,
        ...keepGoingOptions,
        ...loadingPhaseThreadsOptions,
        ...commonQueryOptions,
        ...queryOptions,
      ],
    },
    {
      name: "run",
      description: "Runs the specified target",
      args: runArgs,
      options: [...commonOptions, ...buildOptions, ...runOptions],
    },
    {
      name: "shutdown",
      description: "Stops the Bazel server",
      options: [...commonOptions, ...shutdownOptions],
    },
    {
      name: "test",
      description: "Builds and runs the specified test targets",
      args: targetsArg,
      options: [...commonOptions, ...buildOptions, ...testSummaryOptions],
    },
    {
      name: "vendor",
      description:
        "Fetches external repositories into a folder specified by the flag --vendor_dir",
      args: targetsArg,
      options: [
        ...commonOptions,
        ...buildOptions,
        ...testSummaryOptions,
        ...vendorOptions,
      ],
    },
    {
      name: "version",
      description: "Prints version information for Bazel",
      options: [...commonOptions, ...versionOptions],
    },
  ],
  options: startupOptions,
};

export default completionSpec;
