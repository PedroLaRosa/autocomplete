const optAccessTokenFile: Fig.Option = {
  name: "--access-token-file",
  description:
    "A file path to read the access token. Use this flag to authenticate `gcloud` with an access token. The credentials of the active account (if exists) will be ignored. The file should only contain an access token with no other information. Overrides the default *auth/access_token_file* property value for this command invocation",
  args: {
    name: "ACCESS_TOKEN_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optAccount: Fig.Option = {
  name: "--account",
  description:
    "Google Cloud user account to use for invocation. Overrides the default *core/account* property value for this command invocation",
  args: {
    name: "ACCOUNT",
    description: "String",
  },
};

const optBillingProject: Fig.Option = {
  name: "--billing-project",
  description:
    "The Google Cloud project that will be charged quota for operations performed in `gcloud`. If you need to operate on one project, but need quota against a different project, you can use this flag to specify the billing project. If both `billing/quota_project` and `--billing-project` are specified, `--billing-project` takes precedence. Run `$ gcloud config set --help` to see more information about `billing/quota_project`",
  args: {
    name: "BILLING_PROJECT",
    description: "String",
  },
};

const optConfiguration: Fig.Option = {
  name: "--configuration",
  description:
    "File name of the configuration to use for this command invocation. For more information on how to use configurations, run: `gcloud topic configurations`. You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME environment variable to set the equivalent of this flag for a terminal session",
  args: {
    name: "CONFIGURATION",
    description: "String",
  },
};

const optFilter: Fig.Option = {
  name: "--filter",
  description:
    "Apply a Boolean filter _EXPRESSION_ to each resource item to be listed. If the expression evaluates `True`, then that item is listed. For more details and examples of filter expressions, run $ gcloud topic filters. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "EXPRESSION",
    description: "String",
  },
};

const optFlagsFile: Fig.Option = {
  name: "--flags-file",
  description:
    "A YAML or JSON file that specifies a *--flag*:*value* dictionary. Useful for specifying complex flag values with special characters that work with any command interpreter. Additionally, each *--flags-file* arg is replaced by its constituent flags. See $ gcloud topic flags-file for more information",
  args: {
    name: "YAML_FILE",
    description: "String",
    template: "filepaths",
  },
};

const optFlatten: Fig.Option = {
  name: "--flatten",
  description:
    "Flatten _name_[] output resource slices in _KEY_ into separate records for each item in each slice. Multiple keys and slices may be specified. This also flattens keys for *--format* and *--filter*. For example, *--flatten=abc.def* flattens *abc.def[].ghi* references to *abc.def.ghi*. A resource record containing *abc.def[]* with N elements will expand to N records in the flattened output. This allows us to specify what `resource-key` the `filter` will operate on. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "KEY",
    description: "List",
  },
};

const optFormat: Fig.Option = {
  name: "--format",
  description:
    "Sets the format for printing command output resources. The default is a command-specific human-friendly output format. If both `core/format` and `--format` are specified, `--format` takes precedence. `--format` and `core/format` both take precedence over `core/default_format`. The supported formats are limited to: `config`, `csv`, `default`, `diff`, `disable`, `flattened`, `get`, `json`, `list`, `multi`, `none`, `object`, `table`, `text`, `value`, `yaml`. For more details run $ gcloud topic formats. Run `$ gcloud config set --help` to see more information about `core/format`",
  args: {
    name: "FORMAT",
    description: "String",
  },
};

const optImpersonateServiceAccount: Fig.Option = {
  name: "--impersonate-service-account",
  description:
    "For this `gcloud` invocation, all API requests will be made as the given service account or target service account in an impersonation delegation chain instead of the currently selected account. You can specify either a single service account as the impersonator, or a comma-separated list of service accounts to create an impersonation delegation chain. The impersonation is done without needing to create, download, and activate a key for the service account or accounts",
  args: {
    name: "SERVICE_ACCOUNT_EMAILS",
    description: "String",
  },
};

const optLimit: Fig.Option = {
  name: "--limit",
  description:
    "Maximum number of resources to list. The default is *unlimited*. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "LIMIT",
  },
};

const optLogHttp: Fig.Option = {
  name: "--log-http",
  description:
    "Log all HTTP server requests and responses to stderr. Overrides the default *core/log_http* property value for this command invocation",
};

const optPageSize: Fig.Option = {
  name: "--page-size",
  description:
    "Some services group resource list output into pages. This flag specifies the maximum number of resources per page. The default is determined by the service if it supports paging, otherwise it is *unlimited* (no paging). Paging may be applied before or after *--filter* and *--limit* depending on the service",
  args: {
    name: "PAGE_SIZE",
  },
};

const optProject: Fig.Option = {
  name: "--project",
  description:
    "The Google Cloud project ID to use for this invocation. If omitted, then the current project is assumed; the current project can be listed using `gcloud config list --format='text(core.project)'` and can be set using `gcloud config set project PROJECTID`",
  args: {
    name: "PROJECT_ID",
    description: "String",
  },
};

const optQuiet: Fig.Option = {
  name: "--quiet",
  description:
    "Disable all interactive prompts when running `gcloud` commands. If input is required, defaults will be used, or an error will be raised",
};

const optSortBy: Fig.Option = {
  name: "--sort-by",
  description:
    "Comma-separated list of resource field key names to sort by. The default order is ascending. Prefix a field with ``~'' for descending order on that field. This flag interacts with other flags that are applied in this order: *--flatten*, *--sort-by*, *--filter*, *--limit*",
  args: {
    name: "FIELD",
    description: "List",
  },
};

const optTraceToken: Fig.Option = {
  name: "--trace-token",
  description:
    "Token used to route traces of service requests for investigation of issues. Overrides the default *core/trace_token* property value for this command invocation",
  args: {
    name: "TRACE_TOKEN",
    description: "String",
  },
};

const optUserOutputEnabled: Fig.Option = {
  name: "--user-output-enabled",
  description:
    "Print user intended output to the console. Overrides the default *core/user_output_enabled* property value for this command invocation. Use *--no-user-output-enabled* to disable",
};

const optVerbosity: Fig.Option = {
  name: "--verbosity",
  description:
    "Override the default verbosity for this command. Overrides the default *core/verbosity* property value for this command invocation. _VERBOSITY_ must be one of: *debug*, *info*, *warning*, *error*, *critical*, *none*",
  args: {
    name: "VERBOSITY",
    description: "String",
    suggestions: ["debug", "info", "warning", "error", "critical", "none"],
  },
};

const completionSpec: Fig.Spec = {
  name: "firebase",
  description: "Work with Google Firebase",
  subcommands: [
    {
      name: "test",
      description: "Interact with Firebase Test Lab",
      subcommands: [
        {
          name: "android",
          description: "Command group for Android application testing",
          subcommands: [
            {
              name: "list-device-capacities",
              description:
                "List capacity information for Android models & versions",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "locales",
              description: "Explore Android locales available for testing",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an Android locale",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "LOCALE",
                    description:
                      "The locale to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description:
                    "List all Android locales available for testing internationalized apps",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
              ],
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "models",
              description:
                "Explore Android models available in the Test Environment catalog",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an Android model",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "MODEL_ID",
                    description:
                      "ID of the model to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description: "List all Android models available for testing",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
              ],
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "run",
              description:
                "Invoke a test in Firebase Test Lab for Android and view test results",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--additional-apks",
                  description:
                    "A list of up to 100 additional APKs to install, in addition to those being directly tested. The path may be in the local filesystem or in Google Cloud Storage using gs:// notation",
                  args: {
                    name: "APK",
                    description: "List",
                  },
                },
                {
                  name: "--app",
                  description:
                    "The path to the application binary file. The path may be in the local filesystem or in Google Cloud Storage using gs:// notation. Android App Bundles are specified as .aab, all other files are assumed to be APKs",
                  args: {
                    name: "APP",
                    description: "String",
                  },
                },
                {
                  name: "--app-package",
                  description:
                    "(REMOVED) The Java package of the application under test. By default, the application package name is parsed from the APK manifest",
                  args: {
                    name: "APP_PACKAGE",
                    description: "String",
                  },
                },
                {
                  name: "--async",
                  description:
                    "Invoke a test asynchronously without waiting for test results",
                },
                {
                  name: "--auto-google-login",
                  description:
                    "Automatically log into the test device using a preconfigured Google account before beginning the test. Enabled by default, use --no-auto-google-login to disable",
                },
                optBillingProject,
                {
                  name: "--client-details",
                  description:
                    "Comma-separated, KEY=VALUE map of additional details to attach to the test matrix. Arbitrary KEY=VALUE pairs may be attached to a test matrix to provide additional context about the tests being run. When consuming the test results, such as in Cloud Functions or a CI system, these details can add additional context such as a link to the corresponding pull request",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optConfiguration,
                {
                  name: "--device",
                  description:
                    "A list of ``DIMENSION=VALUE'' pairs which specify a target device to test against. This flag may be repeated to specify multiple devices. The four device dimensions are: *model*, *version*, *locale*, and *orientation*. If any dimensions are omitted, they will use a default value. The default value, and all possible values, for each dimension can be found with the ``list'' command for that dimension, such as `$ {parent_command} models list`. *--device* is now the preferred way to specify test devices and may not be used in conjunction with *--devices-ids*, *--os-version-ids*, *--locales*, or *--orientations*. Omitting all of the preceding dimension-related flags will run tests against a single device using defaults for all four device dimensions",
                  isRepeatable: true,
                  args: {
                    name: "DIMENSION=VALUE",
                    description: "Dict",
                  },
                },
                {
                  name: ["--device-ids", "-d"],
                  description:
                    "The list of MODEL_IDs to test against (default: one device model determined by the Firebase Test Lab device catalog; see TAGS listed by the `$ {parent_command} models list` command)",
                  args: {
                    name: "MODEL_ID",
                    description: "List",
                  },
                },
                {
                  name: "--directories-to-pull",
                  description:
                    "A list of paths that will be copied from the device's storage to the designated results bucket after the test is complete. These must be absolute paths under `/sdcard`, `/storage`, or `/data/local/tmp` (for example, `--directories-to-pull /sdcard/tempDir1,/data/local/tmp/tempDir2`). Path names are restricted to the characters ```a-zA-Z0-9_-./+```. The paths `/sdcard` and `/data` will be made available and treated as implicit path substitutions. E.g. if `/sdcard` on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device. Note that access to some directories on API levels 29 and later may also be limited by scoped storage rules",
                  args: {
                    name: "DIR_TO_PULL",
                    description: "List",
                  },
                },
                {
                  name: "--environment-variables",
                  description:
                    "A comma-separated, key=value map of environment variables and their desired values. The environment variables are mirrored as extra options to the `am instrument -e KEY1 VALUE1 ...` command and passed to your test runner (typically AndroidJUnitRunner). Examples:",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                {
                  name: ["--locales", "-l"],
                  description:
                    "The list of LOCALEs to test against (default: a single locale determined by the Firebase Test Lab device catalog)",
                  args: {
                    name: "LOCALE",
                    description: "List",
                  },
                },
                optLogHttp,
                {
                  name: "--network-profile",
                  description:
                    "The name of the network traffic profile, for example `--network-profile=LTE`, which consists of a set of parameters to emulate network conditions when running the test (default: no network shaping; see available profiles listed by the $ {grandparent_command} network-profiles list command). This feature only works on physical devices",
                  args: {
                    name: "PROFILE_ID",
                    description: "String",
                  },
                },
                {
                  name: "--no-async",
                  description:
                    "Invoke a test asynchronously without waiting for test results",
                  hidden: true,
                },
                {
                  name: "--no-auto-google-login",
                  description:
                    "Automatically log into the test device using a preconfigured Google account before beginning the test. Enabled by default, use --no-auto-google-login to disable",
                  hidden: true,
                },
                {
                  name: "--no-performance-metrics",
                  description:
                    "Monitor and record performance metrics: CPU, memory, network usage, and FPS (game-loop only). Enabled by default, use --no-performance-metrics to disable",
                  hidden: true,
                },
                {
                  name: "--no-record-video",
                  description:
                    "Enable video recording during the test. Enabled by default, use --no-record-video to disable",
                  hidden: true,
                },
                {
                  name: "--no-resign",
                  description:
                    "Make Robo re-sign the app-under-test APK for a higher quality crawl. If your app cannot properly function when re-signed, disable this feature. When an app-under-test APK is not re-signed, Robo crawl is slower and Robo has access to less information about the state of the crawled app, which reduces crawl quality. Consequently, if your Roboscript has actions on elements of RecyclerView or AdapterView, and you disable APK re-signing, those actions might require manual tweaking because Robo does not identify RecyclerView and AdapterView in this mode. Enabled by default, use `--no-resign` to disable",
                  hidden: true,
                },
                {
                  name: "--no-use-orchestrator",
                  description:
                    "Whether each test runs in its own Instrumentation instance with the Android Test Orchestrator (default: Orchestrator is not used, same as specifying --no-use-orchestrator). Orchestrator is only compatible with AndroidJUnitRunner v1.1 or higher. See https://developer.android.com/training/testing/junit-runner.html#using-android-test-orchestrator for more information about Android Test Orchestrator",
                  hidden: true,
                },
                {
                  name: "--num-flaky-test-attempts",
                  description:
                    "Specifies the number of times a test execution should be reattempted if one or more of its test cases fail for any reason. An execution that initially fails but succeeds on any reattempt is reported as FLAKY",
                  args: {
                    name: "int",
                  },
                },
                {
                  name: "--obb-files",
                  description:
                    "A list of one or two Android OBB file names which will be copied to each test device before the tests will run (default: None). Each OBB file name must conform to the format as specified by Android (e.g. [main|patch].0300110.com.example.android.obb) and will be installed into <shared-storage>/Android/obb/<package-name>/ on the test device",
                  args: {
                    name: "OBB_FILE",
                    description: "List",
                    template: "filepaths",
                  },
                },
                {
                  name: ["--orientations", "-o"],
                  description:
                    "The device orientation(s) to test against (default: portrait). Specifying 'default' will pick the preferred orientation for the app. _ORIENTATION_ must be one of: *portrait*, *landscape*, *default*",
                  args: {
                    name: "ORIENTATION",
                    description: "List",
                  },
                },
                {
                  name: ["--os-version-ids", "-v"],
                  description:
                    "The list of OS_VERSION_IDs to test against (default: a version ID determined by the Firebase Test Lab device catalog)",
                  args: {
                    name: "OS_VERSION_ID",
                    description: "List",
                  },
                },
                {
                  name: "--other-files",
                  description:
                    "A list of device-path=file-path pairs that indicate the device paths to push files to the device before starting tests, and the paths of files to push",
                  args: {
                    name: "DEVICE_PATH=FILE_PATH",
                    description: "Dict",
                  },
                },
                optPageSize,
                {
                  name: "--performance-metrics",
                  description:
                    "Monitor and record performance metrics: CPU, memory, network usage, and FPS (game-loop only). Enabled by default, use --no-performance-metrics to disable",
                },
                optProject,
                optQuiet,
                {
                  name: "--record-video",
                  description:
                    "Enable video recording during the test. Enabled by default, use --no-record-video to disable",
                },
                {
                  name: "--resign",
                  description:
                    "Make Robo re-sign the app-under-test APK for a higher quality crawl. If your app cannot properly function when re-signed, disable this feature. When an app-under-test APK is not re-signed, Robo crawl is slower and Robo has access to less information about the state of the crawled app, which reduces crawl quality. Consequently, if your Roboscript has actions on elements of RecyclerView or AdapterView, and you disable APK re-signing, those actions might require manual tweaking because Robo does not identify RecyclerView and AdapterView in this mode. Enabled by default, use `--no-resign` to disable",
                },
                {
                  name: "--results-bucket",
                  description:
                    'The name of a Google Cloud Storage bucket where raw test results will be stored (default: "test-lab-<random-UUID>"). Note that the bucket must be owned by a billing-enabled project, and that using a non-default bucket will result in billing charges for the storage used',
                  args: {
                    name: "RESULTS_BUCKET",
                    description: "String",
                  },
                },
                {
                  name: "--results-dir",
                  description:
                    "The name of a *unique* Google Cloud Storage object within the results bucket where raw test results will be stored (default: a timestamp with a random suffix). Caution: if specified, this argument *must be unique* for each test matrix you create, otherwise results from multiple test matrices will be overwritten or intermingled",
                  args: {
                    name: "RESULTS_DIR",
                    description: "String",
                  },
                },
                {
                  name: "--results-history-name",
                  description:
                    "The history name for your test results (an arbitrary string label; default: the application's label from the APK manifest). All tests which use the same history name will have their results grouped together in the Firebase console in a time-ordered test history list",
                  args: {
                    name: "RESULTS_HISTORY_NAME",
                    description: "String",
                  },
                },
                {
                  name: "--robo-directives",
                  description:
                    "A comma-separated (`<type>:<key>=<value>`) map of `robo_directives` that you can use to customize the behavior of Robo test. The `type` specifies the action type of the directive, which may take on values `click`, `text` or `ignore`. If no `type` is provided, `text` will be used by default. Each key should be the Android resource name of a target UI element and each value should be the text input for that element. Values are only permitted for `text` type elements, so no value should be specified for `click` and `ignore` type elements. No more than one `click` element is allowed",
                  args: {
                    name: "TYPE:RESOURCE_NAME=INPUT",
                    description: "Dict",
                  },
                },
                {
                  name: "--robo-script",
                  description:
                    "The path to a Robo Script JSON file. The path may be in the local filesystem or in Google Cloud Storage using gs:// notation. You can guide the Robo test to perform specific actions by recording a Robo Script in Android Studio and then specifying this argument. Learn more at https://firebase.google.com/docs/test-lab/robo-ux-test#scripting",
                  args: {
                    name: "ROBO_SCRIPT",
                    description: "String",
                  },
                },
                {
                  name: "--scenario-labels",
                  description:
                    "A list of game-loop scenario labels (default: None). Each game-loop scenario may be labeled in the APK manifest file with one or more arbitrary strings, creating logical groupings (e.g. GPU_COMPATIBILITY_TESTS). If *--scenario-numbers* and *--scenario-labels* are specified together, Firebase Test Lab will first execute each scenario from *--scenario-numbers*. It will then expand each given scenario label into a list of scenario numbers marked with that label, and execute those scenarios",
                  args: {
                    name: "LABEL",
                    description: "List",
                  },
                },
                {
                  name: "--scenario-numbers",
                  description:
                    "A list of game-loop scenario numbers which will be run as part of the test (default: all scenarios). A maximum of 1024 scenarios may be specified in one test matrix, but the maximum number may also be limited by the overall test *--timeout* setting",
                  args: {
                    name: "int",
                    description: "List",
                  },
                },
                optSortBy,
                {
                  name: "--test",
                  description:
                    "The path to the binary file containing instrumentation tests. The given path may be in the local filesystem or in Google Cloud Storage using a URL beginning with `gs://`",
                  args: {
                    name: "TEST",
                    description: "String",
                  },
                },
                {
                  name: "--test-package",
                  description:
                    "(REMOVED) The Java package name of the instrumentation test. By default, the test package name is parsed from the APK manifest",
                  args: {
                    name: "TEST_PACKAGE",
                    description: "String",
                  },
                },
                {
                  name: "--test-runner-class",
                  description:
                    "The fully-qualified Java class name of the instrumentation test runner (default: the last name extracted from the APK manifest)",
                  args: {
                    name: "TEST_RUNNER_CLASS",
                    description: "String",
                  },
                },
                {
                  name: "--test-targets",
                  description:
                    "A list of one or more test target filters to apply (default: run all test targets). Each target filter must be fully qualified with the package name, class name, or test annotation desired. Any test filter supported by `am instrument -e ...` is supported. See https://developer.android.com/reference/androidx/test/runner/AndroidJUnitRunner for more information. Examples:",
                  args: {
                    name: "TEST_TARGET",
                    description: "List",
                  },
                },
                {
                  name: "--timeout",
                  description:
                    "The max time this test execution can run before it is cancelled (default: 15m). It does not include any time necessary to prepare and clean up the target device. The maximum possible testing time is 45m on physical devices and 60m on virtual devices. The _TIMEOUT_ units can be h, m, or s. If no unit is given, seconds are assumed. Examples: - *--timeout 1h* is 1 hour - *--timeout 5m* is 5 minutes - *--timeout 200s* is 200 seconds - *--timeout 100* is 100 seconds",
                  args: {
                    name: "TIMEOUT",
                  },
                },
                optTraceToken,
                {
                  name: "--type",
                  description:
                    "The type of test to run. _TYPE_ must be one of: *instrumentation*, *robo*, *game-loop*",
                  args: {
                    name: "TYPE",
                    description: "String",
                    suggestions: ["instrumentation", "robo", "game-loop"],
                  },
                },
                {
                  name: "--use-orchestrator",
                  description:
                    "Whether each test runs in its own Instrumentation instance with the Android Test Orchestrator (default: Orchestrator is not used, same as specifying --no-use-orchestrator). Orchestrator is only compatible with AndroidJUnitRunner v1.1 or higher. See https://developer.android.com/training/testing/junit-runner.html#using-android-test-orchestrator for more information about Android Test Orchestrator",
                },
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "ARGSPEC",
                description:
                  "An ARG_FILE:ARG_GROUP_NAME pair, where ARG_FILE is the path to a file containing groups of test arguments in yaml format, and ARG_GROUP_NAME is the particular yaml object holding a group of arg:value pairs to use. Run *$ gcloud topic arg-files* for more information and examples",
                isOptional: true,
              },
            },
            {
              name: "versions",
              description: "Explore Android versions available for testing",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an Android OS version",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "VERSION_ID",
                    description:
                      "The version ID to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description:
                    "List all Android OS versions available for testing",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
              ],
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
          ],
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "ios",
          description: "Command group for iOS application testing",
          subcommands: [
            {
              name: "list-device-capacities",
              description:
                "List capacity information for iOS models & versions",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "locales",
              description: "Explore iOS locales available for testing",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an iOS locale",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "LOCALE",
                    description:
                      "The locale to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description:
                    "List all iOS locales available for testing internationalized apps",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
              ],
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "models",
              description:
                "Explore iOS models available in the Test Environment catalog",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an iOS model",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "MODEL_ID",
                    description:
                      "ID of the model to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description: "List all iOS models available for testing",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
              ],
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
            {
              name: "run",
              description:
                "Invoke a test in Firebase Test Lab for iOS and view test results",
              options: [
                optAccessTokenFile,
                optAccount,
                {
                  name: "--app",
                  description:
                    "The path to the application archive (.ipa file) for game-loop testing. The path may be in the local filesystem or in Google Cloud Storage using gs:// notation. This flag is only valid when *--type* is *game-loop* or *robo*",
                  args: {
                    name: "APP",
                    description: "String",
                  },
                },
                {
                  name: "--async",
                  description:
                    "Invoke a test asynchronously without waiting for test results",
                },
                optBillingProject,
                {
                  name: "--client-details",
                  description:
                    "Comma-separated, KEY=VALUE map of additional details to attach to the test matrix. Arbitrary KEY=VALUE pairs may be attached to a test matrix to provide additional context about the tests being run. When consuming the test results, such as in Cloud Functions or a CI system, these details can add additional context such as a link to the corresponding pull request",
                  args: {
                    name: "KEY=VALUE",
                    description: "Dict",
                  },
                },
                optConfiguration,
                {
                  name: "--device",
                  description:
                    "A list of ``DIMENSION=VALUE'' pairs which specify a target device to test against. This flag may be repeated to specify multiple devices. The device dimensions are: *model*, *version*, *locale*, and *orientation*. If any dimensions are omitted, they will use a default value. The default value, and all possible values, for each dimension can be found with the ``list'' command for that dimension, such as `$ {parent_command} models list`. Omitting this flag entirely will run tests against a single device using defaults for every dimension",
                  isRepeatable: true,
                  args: {
                    name: "DIMENSION=VALUE",
                    description: "Dict",
                  },
                },
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                {
                  name: "--no-async",
                  description:
                    "Invoke a test asynchronously without waiting for test results",
                  hidden: true,
                },
                {
                  name: "--no-record-video",
                  description:
                    "Enable video recording during the test. Enabled by default, use --no-record-video to disable",
                  hidden: true,
                },
                {
                  name: "--no-test-special-entitlements",
                  description:
                    "Enables testing special app entitlements. Re-signs an app having special entitlements with a new application-identifier. This currently supports testing Push Notifications (aps-environment) entitlement for up to one app in a project",
                  hidden: true,
                },
                {
                  name: "--num-flaky-test-attempts",
                  description:
                    "Specifies the number of times a test execution should be reattempted if one or more of its test cases fail for any reason. An execution that initially fails but succeeds on any reattempt is reported as FLAKY",
                  args: {
                    name: "int",
                  },
                },
                optPageSize,
                optProject,
                optQuiet,
                {
                  name: "--record-video",
                  description:
                    "Enable video recording during the test. Enabled by default, use --no-record-video to disable",
                },
                {
                  name: "--results-bucket",
                  description:
                    'The name of a Google Cloud Storage bucket where raw test results will be stored (default: "test-lab-<random-UUID>"). Note that the bucket must be owned by a billing-enabled project, and that using a non-default bucket will result in billing charges for the storage used',
                  args: {
                    name: "RESULTS_BUCKET",
                    description: "String",
                  },
                },
                {
                  name: "--results-dir",
                  description:
                    "The name of a *unique* Google Cloud Storage object within the results bucket where raw test results will be stored (default: a timestamp with a random suffix). Caution: if specified, this argument *must be unique* for each test matrix you create, otherwise results from multiple test matrices will be overwritten or intermingled",
                  args: {
                    name: "RESULTS_DIR",
                    description: "String",
                  },
                },
                {
                  name: "--results-history-name",
                  description:
                    "The history name for your test results (an arbitrary string label; default: the bundle ID for the iOS application). All tests which use the same history name will have their results grouped together in the Firebase console in a time-ordered test history list",
                  args: {
                    name: "RESULTS_HISTORY_NAME",
                    description: "String",
                  },
                },
                optSortBy,
                {
                  name: "--test",
                  description:
                    "The path to the test package (a zip file containing the iOS app and XCTest files). The given path may be in the local filesystem or in Google Cloud Storage using a URL beginning with `gs://`. Note: any .xctestrun file in this zip file will be ignored if *--xctestrun-file* is specified",
                  args: {
                    name: "XCTEST_ZIP",
                    description: "String",
                  },
                },
                {
                  name: "--test-special-entitlements",
                  description:
                    "Enables testing special app entitlements. Re-signs an app having special entitlements with a new application-identifier. This currently supports testing Push Notifications (aps-environment) entitlement for up to one app in a project",
                },
                {
                  name: "--timeout",
                  description:
                    "The max time this test execution can run before it is cancelled (default: 15m). It does not include any time necessary to prepare and clean up the target device. The maximum possible testing time is 45m on physical devices and 60m on virtual devices. The _TIMEOUT_ units can be h, m, or s. If no unit is given, seconds are assumed. Examples: - *--timeout 1h* is 1 hour - *--timeout 5m* is 5 minutes - *--timeout 200s* is 200 seconds - *--timeout 100* is 100 seconds",
                  args: {
                    name: "TIMEOUT",
                  },
                },
                optTraceToken,
                {
                  name: "--type",
                  description:
                    "The type of iOS test to run. _TYPE_ must be one of: *xctest*, *game-loop*, *robo*",
                  args: {
                    name: "TYPE",
                    description: "String",
                    suggestions: ["xctest", "game-loop", "robo"],
                  },
                },
                optUserOutputEnabled,
                optVerbosity,
                {
                  name: "--xcode-version",
                  description:
                    "The version of Xcode that should be used to run an XCTest. Defaults to the latest Xcode version supported in Firebase Test Lab. This Xcode version must be supported by all iOS versions selected in the test matrix. The list of Xcode versions supported by each version of iOS can be viewed by running `$ {parent_command} versions list`",
                  args: {
                    name: "XCODE_VERSION",
                    description: "String",
                  },
                },
                {
                  name: "--xctestrun-file",
                  description:
                    "The path to an .xctestrun file that will override any .xctestrun file contained in the *--test* package. Because the .xctestrun file contains environment variables along with test methods to run and/or ignore, this can be useful for customizing or sharding test suites. The given path may be in the local filesystem or in Google Cloud Storage using a URL beginning with `gs://`",
                  args: {
                    name: "XCTESTRUN_FILE",
                    description: "String",
                    template: "filepaths",
                  },
                },
              ],
              args: {
                name: "ARGSPEC",
                description:
                  "An ARG_FILE:ARG_GROUP_NAME pair, where ARG_FILE is the path to a file containing groups of test arguments in yaml format, and ARG_GROUP_NAME is the particular yaml object holding a group of arg:value pairs to use. Run *$ gcloud topic arg-files* for more information and examples",
                isOptional: true,
              },
            },
            {
              name: "versions",
              description: "Explore iOS versions available for testing",
              subcommands: [
                {
                  name: "describe",
                  description: "Describe an iOS operating system version",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLogHttp,
                    optProject,
                    optQuiet,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                  args: {
                    name: "VERSION_ID",
                    description:
                      "The version ID to describe, found using $ {parent_command} list",
                  },
                },
                {
                  name: "list",
                  description: "List all iOS versions available for testing",
                  options: [
                    optAccessTokenFile,
                    optAccount,
                    optBillingProject,
                    optConfiguration,
                    optFilter,
                    optFlagsFile,
                    optFlatten,
                    optFormat,
                    {
                      name: "--help",
                      description: "Display detailed help",
                    },
                    optImpersonateServiceAccount,
                    optLimit,
                    optLogHttp,
                    optPageSize,
                    optProject,
                    optQuiet,
                    optSortBy,
                    optTraceToken,
                    optUserOutputEnabled,
                    optVerbosity,
                  ],
                },
              ],
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
          ],
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
        {
          name: "network-profiles",
          description: "Explore network profiles available for testing",
          subcommands: [
            {
              name: "describe",
              description: "Describe a network profile",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLogHttp,
                optProject,
                optQuiet,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
              args: {
                name: "PROFILE_ID",
                description:
                  "The network profile to describe, found using $ {parent_command} list",
              },
            },
            {
              name: "list",
              description: "List all network profiles available for testing",
              options: [
                optAccessTokenFile,
                optAccount,
                optBillingProject,
                optConfiguration,
                optFilter,
                optFlagsFile,
                optFlatten,
                optFormat,
                {
                  name: "--help",
                  description: "Display detailed help",
                },
                optImpersonateServiceAccount,
                optLimit,
                optLogHttp,
                optPageSize,
                optProject,
                optQuiet,
                optSortBy,
                optTraceToken,
                optUserOutputEnabled,
                optVerbosity,
              ],
            },
          ],
          options: [
            optAccessTokenFile,
            optAccount,
            optBillingProject,
            optConfiguration,
            optFlagsFile,
            optFlatten,
            optFormat,
            {
              name: "--help",
              description: "Display detailed help",
            },
            optImpersonateServiceAccount,
            optLogHttp,
            optProject,
            optQuiet,
            optTraceToken,
            optUserOutputEnabled,
            optVerbosity,
          ],
        },
      ],
      options: [
        optAccessTokenFile,
        optAccount,
        optBillingProject,
        optConfiguration,
        optFlagsFile,
        optFlatten,
        optFormat,
        {
          name: "--help",
          description: "Display detailed help",
        },
        optImpersonateServiceAccount,
        optLogHttp,
        optProject,
        optQuiet,
        optTraceToken,
        optUserOutputEnabled,
        optVerbosity,
      ],
    },
  ],
  options: [
    optAccessTokenFile,
    optAccount,
    optBillingProject,
    optConfiguration,
    optFlagsFile,
    optFlatten,
    optFormat,
    {
      name: "--help",
      description: "Display detailed help",
    },
    optImpersonateServiceAccount,
    optLogHttp,
    optProject,
    optQuiet,
    optTraceToken,
    optUserOutputEnabled,
    optVerbosity,
  ],
};

export default completionSpec;
