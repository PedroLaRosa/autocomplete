// Podman v6.2.0 (latest stable tag of podman-container-tools/podman, formerly containers/podman; checked 2026-11-19).
// Source: v6.2.0 source tree, not a live run of the binary. Command tree, flags and arguments come from the man page sources
// (docs/source/markdown/podman*.md[.in] with the options/*.md includes expanded; aliases from the links/ directory),
// command aliases, hidden commands and positional arguments from the cobra definitions in cmd/podman/**,
// and the global flags from cmd/podman/root.go. Hidden commands and flags are left out.

const postProcessDockerPs: Fig.Generator["postProcess"] = (out) => {
  return out.split("\n").map((i) => {
    try {
      const parsedJSON: Record<string, string> = JSON.parse(i);
      return {
        name: parsedJSON.Names,
        displayName: `${parsedJSON.Names} (${parsedJSON.Image})`,
        icon: "fig://icon?type=docker",
      };
    } catch (error) {
      console.error(error);
    }
  });
};

const sharedPostProcess: Fig.Generator["postProcess"] = (out) => {
  return out
    .split("\n")
    .map((line) => JSON.parse(line))
    .map((i) => ({
      name: i.name || i.Name, //Added for backwards compatibility
      description: i.id || i.ID, //Added for backwards compatibility
      icon: "fig://icon?type=docker",
    }));
};

const dockerGenerators: Record<string, Fig.Generator> = {
  runningDockerContainers: {
    script: ["podman", "ps", "--format", "{{ json . }}"],
    postProcess: postProcessDockerPs,
  },
  allDockerContainers: {
    script: ["podman", "ps", "-a", "--format", "{{ json . }}"],
    postProcess: postProcessDockerPs,
  },
  pausedDockerContainers: {
    script: [
      "podman",
      "ps",
      "--filter",
      "status=paused",
      "--format",
      "{{ json . }}",
    ],
    postProcess: postProcessDockerPs,
  },
  allLocalImages: {
    script: ["podman", "image", "ls", "--format", "{{ json . }}"],
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: `${i.Id}`,
          displayName: `${i.repository} - ${i.Id}`,
          icon: "fig://icon?type=docker",
        }));
    },
  },
  allLocalImagesWithRepository: {
    script: ["podman", "image", "ls", "--format", "{{ json . }}"],
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: i.repository,
          displayName: `${i.repository} - ${i.Id}`,
          icon: "fig://icon?type=docker",
        }));
    },
  },
  dockerHubSearch: {
    script: function (context) {
      if (context[context.length - 1] === "") return undefined;
      const searchTerm = context[context.length - 1];
      return ["podman", "search", searchTerm, "--format", "{{ json . }}"];
    },
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: `${i.Name}`,
          icon: "fig://icon?type=docker",
        }));
    },
    trigger: function () {
      return true;
    },
  },
  listDockerNetworks: {
    script: ["podman", "network", "list", "--format", "{{ json . }}"],
    postProcess: sharedPostProcess,
  },
  listDockerSecrets: {
    script: ["podman", "secret", "list", "--format", "{{ json . }}"],
    postProcess: sharedPostProcess,
  },
  listDockerVolumes: {
    script: ["podman", "volume", "list", "--format", "{{ json . }}"],
    postProcess: function (out) {
      return out
        .split("\n")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: i.Name,
          icon: "fig://icon?type=docker",
        }));
    },
  },
  listDockerPods: {
    script: ["podman", "pod", "ps", "--format", "{{ json . }}"],
    postProcess: function (out) {
      return out
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map((line) => JSON.parse(line))
        .map((i) => ({
          name: i.Name,
          description: i.Id,
          icon: "fig://icon?type=docker",
        }));
    },
  },
};

const runImageGenerator: Fig.Generator = {
  script: [
    "podman",
    "images",
    "--format",
    "{{.Repository}} {{.Size}} {{.Tag}} {{.ID}}",
  ],
  postProcess: function (out) {
    return out
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((image) => {
        const [repo, size, tag, id] = image.split(" ");
        return {
          name: repo,
          description: `${id}@${tag} - ${size}`,
          icon: "fig://icon?type=docker",
        };
      });
  },
};

const optAnnotation: Fig.Option = {
  name: "--annotation",
  description:
    "Set an annotation on the entry for the specified image or artifact",
  args: { name: "value" },
  isRepeatable: true,
};

const optFormat: Fig.Option = {
  name: ["-f", "--format"],
  description: "Format the output using the given Go template",
  args: { name: "format" },
};

const optFormat2: Fig.Option = {
  name: "--format",
  description: "Print results with a Go template",
  args: { name: "string" },
};

const optNoTrunc: Fig.Option = {
  name: "--no-trunc",
  description: "Do not truncate the output (default false)",
};

const optNoheading: Fig.Option = {
  name: ["-n", "--noheading"],
  description: "Omit the table headings from the listing",
};

const optAuthfile: Fig.Option = {
  name: "--authfile",
  description: "Path of the authentication file",
  args: { name: "path", template: "filepaths" },
};

const optCertDir: Fig.Option = {
  name: "--cert-dir",
  description:
    "Use certificates at path (.crt, .cert, *.key) to connect to the registry",
  args: { name: "path", template: "folders" },
};

const optCreds: Fig.Option = {
  name: "--creds",
  description:
    "The [username[:password]] to use to authenticate with the registry, if required",
  args: { name: "value" },
};

const optDecryptionKey: Fig.Option = {
  name: "--decryption-key",
  description: "The [key[:passphrase]] to be used for decryption of images",
  args: { name: "value" },
  isRepeatable: true,
};

const optQuiet: Fig.Option = {
  name: ["-q", "--quiet"],
  description: "Suppress the output",
};

const optRetry: Fig.Option = {
  name: "--retry",
  description:
    "Number of times to retry in case of failure when performing push/pull",
  args: { name: "attempts" },
};

const optRetryDelay: Fig.Option = {
  name: "--retry-delay",
  description: "Delay between retries in case of push/pull failures",
  args: { name: "duration" },
};

const optTlsVerify: Fig.Option = {
  name: "--tls-verify",
  description:
    "Require HTTPS and verify certificates when contacting registries (default: true)",
};

const optDigestfile: Fig.Option = {
  name: "--digestfile",
  description:
    "After copying the image, write the digest of the resulting image to the file",
  args: { name: "digestfile", template: "filepaths" },
};

const optSignBy: Fig.Option = {
  name: "--sign-by",
  description:
    'Add a "simple signing" signature at the destination using the specified key',
  args: { name: "key" },
};

const optSignBySigstore: Fig.Option = {
  name: "--sign-by-sigstore",
  description: "Sign the image using a sigstore parameter file at PATH",
  args: { name: "param-file", template: "filepaths" },
};

const optSignBySigstorePrivateKey: Fig.Option = {
  name: "--sign-by-sigstore-private-key",
  description:
    "Add a sigstore signature at the destination using a private key at the specified path",
  args: { name: "path", template: "filepaths" },
};

const optSignBySqFingerprint: Fig.Option = {
  name: "--sign-by-sq-fingerprint",
  description:
    'Add a "simple signing" signature using a Sequoia-PGP key with the specified fingerprint',
  args: { name: "fingerprint" },
};

const optSignPassphraseFile: Fig.Option = {
  name: "--sign-passphrase-file",
  description: "Read a passphrase for signing an image from PATH",
  args: { name: "path", template: "filepaths" },
};

const optIgnore: Fig.Option = {
  name: ["-i", "--ignore"],
  description: "Do not error for Quadlets that do not exist",
};

const optDetachKeys: Fig.Option = {
  name: "--detach-keys",
  description: "Specify the key sequence for detaching a container",
  args: { name: "sequence" },
};

const optLatest: Fig.Option = {
  name: ["-l", "--latest"],
  description:
    "Instead of providing the container name or ID, use the last created container",
};

const optSigProxy: Fig.Option = {
  name: "--sig-proxy",
  description: "Proxy received signals to the container process",
};

const optFilter: Fig.Option = {
  name: ["-f", "--filter"],
  description: "Filter containers based on conditions given",
  args: { name: "filter" },
  isRepeatable: true,
};

const optFormat3: Fig.Option = {
  name: "--format",
  description: "Change the default output format",
  args: { name: "format" },
};

const optAddHost: Fig.Option = {
  name: "--add-host",
  description:
    "Add a custom host-to-IP mapping to the container's /etc/hosts file",
  args: { name: "value" },
  isRepeatable: true,
};

const optAnnotation2: Fig.Option = {
  name: "--annotation",
  description:
    "Add an image annotation (e.g. annotation=value) to the image metadata",
  args: { name: "value" },
  isRepeatable: true,
};

const optBuildArg: Fig.Option = {
  name: "--build-arg",
  description: "Argument=value to supply to the builder",
  args: { name: "value" },
  isRepeatable: true,
};

const optBuildArgFile: Fig.Option = {
  name: "--build-arg-file",
  description:
    "Specifies a file containing lines of build arguments of the form arg=value",
  args: { name: "path", template: "filepaths" },
  isRepeatable: true,
};

const optBuildContext: Fig.Option = {
  name: "--build-context",
  description:
    "Specify an additional build context using its short name and its location",
  args: { name: "value" },
  isRepeatable: true,
};

const optCacheFrom: Fig.Option = {
  name: "--cache-from",
  description: "Repository to utilize as a potential cache source",
  args: { name: "image" },
  isRepeatable: true,
};

const optCacheTo: Fig.Option = {
  name: "--cache-to",
  description:
    "Set this flag to specify a remote repository that is used to store cache images",
  args: { name: "image" },
  isRepeatable: true,
};

const optCacheTtl: Fig.Option = {
  name: "--cache-ttl",
  description: "Only consider cache images under specified duration",
  args: { name: "string" },
};

const optCapAdd: Fig.Option = {
  name: "--cap-add",
  description: "Add the specified capability when running",
  args: { name: "cap-xxx" },
  isRepeatable: true,
};

const optCapDrop: Fig.Option = {
  name: "--cap-drop",
  description: "Drop the specified capability when running",
  args: { name: "cap-xxx" },
  isRepeatable: true,
};

const optCgroupParent: Fig.Option = {
  name: "--cgroup-parent",
  description:
    "Path to cgroups under which the cgroup for the container is created",
  args: { name: "path", template: "filepaths" },
};

const optCgroupns: Fig.Option = {
  name: "--cgroupns",
  description:
    "Sets the configuration for cgroup namespaces when handling RUN instructions",
  args: { name: "how", suggestions: ["host", "private"] },
};

const optCompatVolumes: Fig.Option = {
  name: "--compat-volumes",
  description: "Preserve the contents of VOLUMEs during RUN instructions",
};

const optCompressionFormat: Fig.Option = {
  name: "--compression-format",
  description: "Specifies the compression format to use",
  args: { name: "value", suggestions: ["gzip", "zstd", "zstd:chunked"] },
};

const optCompressionLevel: Fig.Option = {
  name: "--compression-level",
  description: "Specifies the compression level to use",
  args: { name: "level" },
};

const optCppFlag: Fig.Option = {
  name: "--cpp-flag",
  description: "Set additional flags to pass to the C Preprocessor cpp(1)",
  args: { name: "flags" },
  isRepeatable: true,
};

const optCpuPeriod: Fig.Option = {
  name: "--cpu-period",
  description:
    "Set the CPU period for the Completely Fair Scheduler (CFS), which is a duration in microseconds",
  args: { name: "limit" },
};

const optCpuQuota: Fig.Option = {
  name: "--cpu-quota",
  description: "Limit the CPU Completely Fair Scheduler (CFS) quota",
  args: { name: "limit" },
};

const optCpuShares: Fig.Option = {
  name: ["-c", "--cpu-shares"],
  description: "CPU shares (relative weight)",
  args: { name: "shares" },
};

const optCpusetCpus: Fig.Option = {
  name: "--cpuset-cpus",
  description: "CPUs in which to allow execution",
  args: { name: "number" },
};

const optCpusetMems: Fig.Option = {
  name: "--cpuset-mems",
  description: "Memory nodes (MEMs) in which to allow execution (0-3, 0,1)",
  args: { name: "nodes" },
};

const optCreatedAnnotation: Fig.Option = {
  name: "--created-annotation",
  description:
    'Set an "org.opencontainers.image.created" annotation in the image',
};

const optDevice: Fig.Option = {
  name: "--device",
  description: "Add a host device to the container",
  args: { name: "value" },
  isRepeatable: true,
};

const optDisableCompression: Fig.Option = {
  name: ["-D", "--disable-compression"],
  description: "Don't compress layers by default",
};

const optDisableContentTrust: Fig.Option = {
  name: "--disable-content-trust",
  description: "This is a Docker specific option and is a NOOP",
};

const optDns: Fig.Option = {
  name: "--dns",
  description: "Set custom DNS servers",
  args: { name: "ipaddr" },
  isRepeatable: true,
};

const optDnsOption: Fig.Option = {
  name: "--dns-option",
  description: "Set custom DNS options to be used during the build",
  args: { name: "option" },
  isRepeatable: true,
};

const optDnsSearch: Fig.Option = {
  name: "--dns-search",
  description: "Set custom DNS search domains to be used during the build",
  args: { name: "domain" },
  isRepeatable: true,
};

const optEnv: Fig.Option = {
  name: "--env",
  description: "Add a value (e.g. env=value) to the built image",
  args: { name: "value" },
  isRepeatable: true,
};

const optFile: Fig.Option = {
  name: ["-f", "--file"],
  description:
    "Specifies a Containerfile which contains instructions for building the image, either a local file or an http or https URL",
  args: { name: "containerfile", template: "filepaths" },
};

const optForceCompression: Fig.Option = {
  name: "--force-compression",
  description:
    "Use the specified compression algorithm even if the destination contains a differently-compressed variant already",
};

const optForceRm: Fig.Option = {
  name: "--force-rm",
  description:
    "Always remove intermediate containers after a build, even if the build fails (default true)",
};

const optFormat4: Fig.Option = {
  name: "--format",
  description:
    "Control the format for the built image's manifest and configuration data",
  args: { name: "string", suggestions: ["oci", "docker"] },
};

const optFrom: Fig.Option = {
  name: "--from",
  description: "Overrides the first FROM instruction within the Containerfile",
  args: { name: "string" },
};

const optGroupAdd: Fig.Option = {
  name: "--group-add",
  description:
    "Assign additional groups to the primary user running within the container process",
  args: { name: "value" },
  isRepeatable: true,
};

const optHooksDir: Fig.Option = {
  name: "--hooks-dir",
  description:
    "Each *.json file in the path configures a hook for buildah build containers",
  args: { name: "path", template: "folders" },
  isRepeatable: true,
};

const optHttpProxy: Fig.Option = {
  name: "--http-proxy",
  description:
    "By default proxy environment variables are passed into the container if set for the Podman process",
};

const optIdentityLabel: Fig.Option = {
  name: "--identity-label",
  description: "Adds default identity label io.buildah.version if set",
};

const optIgnorefile: Fig.Option = {
  name: "--ignorefile",
  description: "Path to an alternative .containerignore file",
  args: { name: "string", template: "filepaths" },
};

const optIidfile: Fig.Option = {
  name: "--iidfile",
  description: "Write the built image's ID to the file",
  args: { name: "imageidfile", template: "filepaths" },
  isRepeatable: true,
};

const optIidfileRaw: Fig.Option = {
  name: "--iidfile-raw",
  description:
    "Write the built image's ID to the file without the algorithm prefix (e.g., sha256:)",
  args: { name: "imageidfile", template: "filepaths" },
  isRepeatable: true,
};

const optInheritAnnotations: Fig.Option = {
  name: "--inherit-annotations",
  description: "Inherit the annotations from the base image or base stages",
};

const optInheritLabels: Fig.Option = {
  name: "--inherit-labels",
  description: "Inherit the labels from the base image or base stages",
};

const optIpc: Fig.Option = {
  name: "--ipc",
  description:
    "Sets the configuration for IPC namespaces when handling RUN instructions",
  args: { name: "how" },
};

const optIsolation: Fig.Option = {
  name: "--isolation",
  description:
    "Controls what type of isolation is used for running processes as part of RUN instructions",
  args: { name: "type", suggestions: ["oci", "rootless", "chroot"] },
};

const optJobs: Fig.Option = {
  name: "--jobs",
  description: "Run up to N concurrent stages in parallel",
  args: { name: "number" },
};

const optLabel: Fig.Option = {
  name: "--label",
  description: "Add an image label (e.g. label=value) to the image metadata",
  args: { name: "label" },
  isRepeatable: true,
};

const optLayerLabel: Fig.Option = {
  name: "--layer-label",
  description:
    "Add an intermediate image label (e.g. label=value) to the intermediate image metadata",
  args: { name: "value" },
  isRepeatable: true,
};

const optLayers: Fig.Option = {
  name: "--layers",
  description:
    "Cache intermediate images during the build process (Default is true)",
};

const optLogfile: Fig.Option = {
  name: "--logfile",
  description: "Log to file instead of stdout/stderr",
  args: { name: "filename", template: "filepaths" },
};

const optMemory: Fig.Option = {
  name: ["-m", "--memory"],
  description: "Memory limit",
  args: { name: "value" },
};

const optMemorySwap: Fig.Option = {
  name: "--memory-swap",
  description: "A limit value equal to memory plus swap",
  args: { name: "value" },
};

const optMount: Fig.Option = {
  name: "--mount",
  description:
    "Adds this mount to each RUN command in a Containerfile before executing",
  args: { name: "mount-specification" },
  isRepeatable: true,
};

const optNetwork: Fig.Option = {
  name: ["--network", "--net"],
  description:
    "Sets the configuration for network namespaces when handling RUN instructions",
  args: { name: "mode" },
  isRepeatable: true,
};

const optNoCache: Fig.Option = {
  name: "--no-cache",
  description: "Do not use existing cached images for the container build",
};

const optNoHostname: Fig.Option = {
  name: "--no-hostname",
  description: "Do not create the /etc/hostname file in the containers",
};

const optNoHosts: Fig.Option = {
  name: "--no-hosts",
  description: "Do not modify the /etc/hosts file in the container",
};

const optOmitHistory: Fig.Option = {
  name: "--omit-history",
  description: "Omit build history information in the built image",
};

const optOsFeature: Fig.Option = {
  name: "--os-feature",
  description:
    "Set the name of a required operating system feature for the image which is built",
  args: { name: "feature" },
  isRepeatable: true,
};

const optOsVersion: Fig.Option = {
  name: "--os-version",
  description:
    "Set the exact required operating system version for the image which is built",
  args: { name: "version" },
};

const optPid: Fig.Option = {
  name: "--pid",
  description:
    "Sets the configuration for PID namespaces when handling RUN instructions",
  args: { name: "pid" },
};

const optPull: Fig.Option = {
  name: "--pull",
  description: "Pull image policy",
  args: {
    name: "policy",
    suggestions: ["always", "missing", "never", "newer"],
  },
};

const optRewriteTimestamp: Fig.Option = {
  name: "--rewrite-timestamp",
  description:
    "Set timestamps in layers to no later than the value for --source-date-epoch",
};

const optRm: Fig.Option = {
  name: "--rm",
  description:
    "Remove intermediate containers after a successful build (default true)",
};

const optRuntime: Fig.Option = {
  name: "--runtime",
  description: "Path to the OCI-compatible binary used to run containers",
  args: { name: "path", template: "filepaths" },
};

const optRuntimeFlag: Fig.Option = {
  name: "--runtime-flag",
  description: "Adds global flags for the container runtime",
  args: { name: "flag" },
  isRepeatable: true,
};

const optSaveStages: Fig.Option = {
  name: "--save-stages",
  description: "Save intermediate stage images",
};

const optSbom: Fig.Option = {
  name: "--sbom",
  description: "Scan working container using preset configuration",
  args: { name: "preset" },
};

const optSbomImageOutput: Fig.Option = {
  name: "--sbom-image-output",
  description:
    "When generating SBOMs, store the generated SBOM in the specified path in the output image",
  args: { name: "path", template: "filepaths" },
};

const optSbomImagePurlOutput: Fig.Option = {
  name: "--sbom-image-purl-output",
  description: "Add scan results to image as path",
  args: { name: "path", template: "filepaths" },
};

const optSbomMergeStrategy: Fig.Option = {
  name: "--sbom-merge-strategy",
  description: "Merge scan results using strategy",
  args: { name: "method" },
};

const optSbomOutput: Fig.Option = {
  name: "--sbom-output",
  description:
    "When generating SBOMs, store the generated SBOM in the named file on the local filesystem",
  args: { name: "file", template: "filepaths" },
};

const optSbomPurlOutput: Fig.Option = {
  name: "--sbom-purl-output",
  description: "Save scan results to file",
  args: { name: "file", template: "filepaths" },
};

const optSbomScannerCommand: Fig.Option = {
  name: "--sbom-scanner-command",
  description:
    "Generate SBOMs by running the specified command from the scanner image",
  args: { name: "image" },
  isRepeatable: true,
};

const optSbomScannerImage: Fig.Option = {
  name: "--sbom-scanner-image",
  description: "Generate SBOMs using the specified scanner image",
  args: { name: "image" },
};

const optSecret: Fig.Option = {
  name: "--secret",
  description:
    "Pass secret information to be used in the Containerfile for building images in a safe way",
  args: { name: "value" },
  isRepeatable: true,
};

const optSecurityOpt: Fig.Option = {
  name: "--security-opt",
  description: "Security Options",
  args: { name: "option" },
  isRepeatable: true,
};

const optShmSize: Fig.Option = {
  name: "--shm-size",
  description: "Size of /dev/shm",
  args: { name: "value" },
};

const optSkipUnusedStages: Fig.Option = {
  name: "--skip-unused-stages",
  description:
    "Skip stages in multi-stage builds which don't affect the target stage",
};

const optSourceDateEpoch: Fig.Option = {
  name: "--source-date-epoch",
  description:
    'Set the "created" timestamp for the built image to this number of seconds since the epoch',
  args: { name: "seconds" },
};

const optSourcePolicyFile: Fig.Option = {
  name: "--source-policy-file",
  description:
    "Specifies the path to a BuildKit-compatible source policy JSON file",
  args: { name: "pathname", template: "filepaths" },
};

const optSquash: Fig.Option = {
  name: "--squash",
  description: "Squash all image layers into a single layer",
};

const optSquashAll: Fig.Option = {
  name: "--squash-all",
  description: "Squash all layers into a single layer",
};

const optSsh: Fig.Option = {
  name: "--ssh",
  description: "SSH agent socket or keys to expose to the build",
  args: { name: "value" },
  isRepeatable: true,
};

const optStageLabels: Fig.Option = {
  name: "--stage-labels",
  description:
    "Add metadata labels to intermediate stage images (requires --save-stages)",
};

const optTag: Fig.Option = {
  name: ["-t", "--tag"],
  description: "Tagged name to apply to the built image",
  args: { name: "imagename" },
  isRepeatable: true,
};

const optTarget: Fig.Option = {
  name: "--target",
  description: "Set the target build stage to build",
  args: { name: "stagename" },
};

const optTimestamp: Fig.Option = {
  name: "--timestamp",
  description:
    "Set new timestamps in image info and layer to seconds after the epoch, defaults to current times",
  args: { name: "seconds" },
};

const optUlimit: Fig.Option = {
  name: "--ulimit",
  description:
    "Specifies resource limits to apply to processes launched when processing RUN instructions",
  args: { name: "value" },
  isRepeatable: true,
};

const optUnsetannotation: Fig.Option = {
  name: "--unsetannotation",
  description:
    "Unset the image annotation, causing the annotation not to be inherited from the base image",
  args: { name: "annotation" },
  isRepeatable: true,
};

const optUnsetenv: Fig.Option = {
  name: "--unsetenv",
  description: "Unset environment variables from the final image",
  args: { name: "env" },
  isRepeatable: true,
};

const optUnsetlabel: Fig.Option = {
  name: "--unsetlabel",
  description:
    "Unset the image label, causing the label not to be inherited from the base image",
  args: { name: "label" },
  isRepeatable: true,
};

const optUserns: Fig.Option = {
  name: "--userns",
  description:
    "Sets the configuration for user namespaces when handling RUN instructions",
  args: { name: "how" },
};

const optUsernsGidMap: Fig.Option = {
  name: "--userns-gid-map",
  description:
    "ContainerGID:hostGID:length GID mapping to use in user namespace",
  args: { name: "mapping" },
  isRepeatable: true,
};

const optUsernsGidMapGroup: Fig.Option = {
  name: "--userns-gid-map-group",
  description:
    "Name of entries from /etc/subgid to use to set user namespace GID mapping",
  args: { name: "group" },
};

const optUsernsUidMap: Fig.Option = {
  name: "--userns-uid-map",
  description:
    "ContainerUID:hostUID:length UID mapping to use in user namespace",
  args: { name: "mapping" },
  isRepeatable: true,
};

const optUsernsUidMapUser: Fig.Option = {
  name: "--userns-uid-map-user",
  description:
    "Name of entries from /etc/subuid to use to set user namespace UID mapping",
  args: { name: "user" },
};

const optUts: Fig.Option = {
  name: "--uts",
  description:
    "Sets the configuration for UTS namespaces when handling RUN instructions",
  args: { name: "how" },
};

const optVolume: Fig.Option = {
  name: ["-v", "--volume"],
  description:
    "Mount a host directory into containers when executing RUN instructions during the build",
  args: { name: "value" },
  isRepeatable: true,
};

const optIgnoreRootfs: Fig.Option = {
  name: "--ignore-rootfs",
  description:
    "Do not apply root file-system changes when importing from exported checkpoint",
};

const optLatest2: Fig.Option = {
  name: ["-l", "--latest"],
  description:
    "Instead of providing the container ID or name, use the last created container",
};

const optBlkioWeight: Fig.Option = {
  name: "--blkio-weight",
  description: "Block IO relative weight",
  args: { name: "weight" },
};

const optBlkioWeightDevice: Fig.Option = {
  name: "--blkio-weight-device",
  description: "Block IO relative device weight",
  args: { name: "value" },
  isRepeatable: true,
};

const optDeviceReadBps: Fig.Option = {
  name: "--device-read-bps",
  description:
    "Limit read rate (in bytes per second) from a device (e.g. --device-read-bps=/dev/sda:1mb)",
  args: { name: "value" },
  isRepeatable: true,
};

const optDeviceWriteBps: Fig.Option = {
  name: "--device-write-bps",
  description:
    "Limit write rate (in bytes per second) to a device (e.g. --device-write-bps=/dev/sda:1mb)",
  args: { name: "value" },
  isRepeatable: true,
};

const optMemoryReservation: Fig.Option = {
  name: "--memory-reservation",
  description: "Memory soft limit",
  args: { name: "value" },
};

const optMemorySwappiness: Fig.Option = {
  name: "--memory-swappiness",
  description: "Tune a container's memory swappiness behavior",
  args: { name: "number" },
};

const optFormat5: Fig.Option = {
  name: "--format",
  description: "Alter the output into a different format",
  args: { name: "string" },
};

const optSize: Fig.Option = {
  name: ["-s", "--size"],
  description:
    "In addition to normal output, display the total file size if the type is a container",
};

const optFilter2: Fig.Option = {
  name: "--filter",
  description: "Provide filter values",
  args: { name: "filters" },
  isRepeatable: true,
};

const optForce: Fig.Option = {
  name: ["-f", "--force"],
  description: "Do not provide an interactive prompt for container removal",
};

const optQuiet2: Fig.Option = {
  name: ["-q", "--quiet"],
  description: "Suppress output information when pulling images",
};

const optAnnotation3: Fig.Option = {
  name: "--annotation",
  description: "Add an annotation to the container",
  args: { name: "value" },
  isRepeatable: true,
};

const optArch: Fig.Option = {
  name: "--arch",
  description:
    "Override the architecture, defaults to the host, of the image to be pulled",
  args: { name: "arch" },
};

const optAttach: Fig.Option = {
  name: ["-a", "--attach"],
  description: "Attach to STDIN, STDOUT or STDERR",
  args: { name: "value", suggestions: ["stdin", "stdout", "stderr"] },
  isRepeatable: true,
};

const optCapAdd2: Fig.Option = {
  name: "--cap-add",
  description: "Add Linux capabilities",
  args: { name: "capability" },
  isRepeatable: true,
};

const optCapDrop2: Fig.Option = {
  name: "--cap-drop",
  description:
    "Drop these capabilities from the default podman capability set, or all to drop all capabilities",
  args: { name: "capability" },
  isRepeatable: true,
};

const optCgroupConf: Fig.Option = {
  name: "--cgroup-conf",
  description:
    "When running on cgroup v2, specify the cgroup file to write to and its value",
  args: { name: "value" },
  isRepeatable: true,
};

const optCgroupns2: Fig.Option = {
  name: "--cgroupns",
  description: "Set the cgroup namespace mode for the container",
  args: { name: "mode", suggestions: ["host", "private"] },
};

const optCgroups: Fig.Option = {
  name: "--cgroups",
  description: "Determines whether the container creates cgroups",
  args: {
    name: "how",
    suggestions: ["enabled", "disabled", "no-conmon", "split"],
  },
};

const optChrootdirs: Fig.Option = {
  name: "--chrootdirs",
  description:
    "Path to a directory inside the container that is treated as a chroot directory",
  args: { name: "path", template: "filepaths" },
  isRepeatable: true,
};

const optCidfile: Fig.Option = {
  name: "--cidfile",
  description: "Write the container ID to file",
  args: { name: "file", template: "filepaths" },
};

const optConmonPidfile: Fig.Option = {
  name: "--conmon-pidfile",
  description: "Write the pid of the conmon process to a file",
  args: { name: "file", template: "filepaths" },
};

const optCpus: Fig.Option = {
  name: "--cpus",
  description: "Number of CPUs",
  args: { name: "number" },
};

const optDeviceCgroupRule: Fig.Option = {
  name: "--device-cgroup-rule",
  description: "Add a rule to the cgroup allowed devices list",
  args: { name: "value" },
  isRepeatable: true,
};

const optDeviceReadIops: Fig.Option = {
  name: "--device-read-iops",
  description:
    "Limit read rate (in IO operations per second) from a device (e.g. --device-read-iops=/dev/sda:1000)",
  args: { name: "value" },
  isRepeatable: true,
};

const optDeviceWriteIops: Fig.Option = {
  name: "--device-write-iops",
  description:
    "Limit write rate (in IO operations per second) to a device (e.g. --device-write-iops=/dev/sda:1000)",
  args: { name: "value" },
  isRepeatable: true,
};

const optDnsOption2: Fig.Option = {
  name: "--dns-option",
  description: "Set custom DNS options",
  args: { name: "option" },
  isRepeatable: true,
};

const optDnsSearch2: Fig.Option = {
  name: "--dns-search",
  description: "Set custom DNS search domains",
  args: { name: "domain" },
  isRepeatable: true,
};

const optEntrypoint: Fig.Option = {
  name: "--entrypoint",
  description: "Override the default ENTRYPOINT from the image",
  args: { name: "value" },
};

const optEnv2: Fig.Option = {
  name: ["-e", "--env"],
  description: "Set environment variables",
  args: { name: "env" },
  isRepeatable: true,
};

const optEnvFile: Fig.Option = {
  name: "--env-file",
  description: "Read in a line-delimited file of environment variables",
  args: { name: "file", template: "filepaths" },
  isRepeatable: true,
};

const optEnvHost: Fig.Option = {
  name: "--env-host",
  description: "Use host environment inside of the container",
};

const optEnvMerge: Fig.Option = {
  name: "--env-merge",
  description: "Preprocess default environment variables for the containers",
  args: { name: "env" },
  isRepeatable: true,
};

const optExpose: Fig.Option = {
  name: "--expose",
  description: "Expose a port or a range of ports (e.g. --expose=3300-3310)",
  args: { name: "value" },
  isRepeatable: true,
};

const optGidmap: Fig.Option = {
  name: "--gidmap",
  description:
    "Run the container in a new user namespace using the supplied GID mapping",
  args: { name: "value" },
  isRepeatable: true,
};

const optGpus: Fig.Option = {
  name: "--gpus",
  description: "Start the container with GPU support",
  args: { name: "entry" },
  isRepeatable: true,
};

const optGroupEntry: Fig.Option = {
  name: "--group-entry",
  description:
    "Customize the entry that is written to the /etc/group file within the container when --user is used",
  args: { name: "entry" },
};

const optHealthCmd: Fig.Option = {
  name: "--health-cmd",
  description: "Set or alter a healthcheck command for a container",
  args: { name: "value" },
};

const optHealthInterval: Fig.Option = {
  name: "--health-interval",
  description: "Set an interval for the healthchecks",
  args: { name: "interval" },
};

const optHealthLogDestination: Fig.Option = {
  name: "--health-log-destination",
  description: "Set the destination of the HealthCheck log",
  args: { name: "directory-path" },
};

const optHealthMaxLogCount: Fig.Option = {
  name: "--health-max-log-count",
  description: "Set maximum number of attempts in the HealthCheck log file",
  args: { name: "number-of-stored-logs" },
};

const optHealthMaxLogSize: Fig.Option = {
  name: "--health-max-log-size",
  description: "Set maximum length in characters of stored HealthCheck log",
  args: { name: "size-of-stored-logs" },
};

const optHealthOnFailure: Fig.Option = {
  name: "--health-on-failure",
  description:
    "Action to take once the container transitions to an unhealthy state",
  args: { name: "action" },
};

const optHealthRetries: Fig.Option = {
  name: "--health-retries",
  description:
    "The number of retries allowed before a healthcheck is considered to be unhealthy",
  args: { name: "retries" },
};

const optHealthStartInterval: Fig.Option = {
  name: "--health-start-interval",
  description:
    "This is an alias for --health-startup-interval option made for Docker compatibility",
  args: { name: "interval" },
};

const optHealthStartPeriod: Fig.Option = {
  name: "--health-start-period",
  description: "The initialization time needed for a container to bootstrap",
  args: { name: "period" },
};

const optHealthStartupCmd: Fig.Option = {
  name: "--health-startup-cmd",
  description: "Set a startup healthcheck command for a container",
  args: { name: "value" },
};

const optHealthStartupInterval: Fig.Option = {
  name: "--health-startup-interval",
  description: "Set an interval for the startup healthcheck",
  args: { name: "interval" },
};

const optHealthStartupRetries: Fig.Option = {
  name: "--health-startup-retries",
  description:
    "The number of attempts allowed before the startup healthcheck restarts the container",
  args: { name: "retries" },
};

const optHealthStartupSuccess: Fig.Option = {
  name: "--health-startup-success",
  description:
    "The number of successful runs required before the startup healthcheck succeeds and the regular healthcheck begins",
  args: { name: "retries" },
};

const optHealthStartupTimeout: Fig.Option = {
  name: "--health-startup-timeout",
  description:
    "The maximum time a startup healthcheck command has to complete before it is marked as failed",
  args: { name: "timeout" },
};

const optHealthTimeout: Fig.Option = {
  name: "--health-timeout",
  description:
    "The maximum time allowed to complete the healthcheck before an interval is considered failed",
  args: { name: "timeout" },
};

const optHostname: Fig.Option = {
  name: ["-h", "--hostname"],
  description: "Set the container's hostname inside the container",
  args: { name: "name" },
};

const optHostsFile: Fig.Option = {
  name: "--hosts-file",
  description: "Base file to create the /etc/hosts file inside the container",
  args: { name: "value", suggestions: ["image", "none"] },
};

const optHostuser: Fig.Option = {
  name: "--hostuser",
  description:
    "Add a user account to /etc/passwd from the host to the container",
  args: { name: "name" },
  isRepeatable: true,
};

const optImageVolume: Fig.Option = {
  name: "--image-volume",
  description: "Tells Podman how to handle the builtin image volumes",
  args: { name: "value", suggestions: ["anonymous", "tmpfs", "ignore"] },
};

const optInit: Fig.Option = {
  name: "--init",
  description:
    "Run an init inside the container that forwards signals and reaps processes",
};

const optInitPath: Fig.Option = {
  name: "--init-path",
  description: "Path to the container-init binary",
  args: { name: "path", template: "filepaths" },
};

const optInteractive: Fig.Option = {
  name: ["-i", "--interactive"],
  description:
    "When set to true, make stdin available to the contained process",
};

const optIp: Fig.Option = {
  name: "--ip",
  description:
    "Specify a static IPv4 address for the container, for example 10.88.64.128",
  args: { name: "ipv4" },
  isRepeatable: true,
};

const optIp6: Fig.Option = {
  name: "--ip6",
  description:
    "Specify a static IPv6 address for the container, for example fd46:db93:aa76:ac37::10",
  args: { name: "ipv6" },
  isRepeatable: true,
};

const optIpc2: Fig.Option = {
  name: "--ipc",
  description: "Set the IPC namespace mode for a container",
  args: { name: "ipc" },
};

const optLabel2: Fig.Option = {
  name: ["-l", "--label"],
  description: "Add metadata to a container",
  args: { name: "value" },
  isRepeatable: true,
};

const optLabelFile: Fig.Option = {
  name: "--label-file",
  description: "Read in a line-delimited file of labels",
  args: { name: "file", template: "filepaths" },
  isRepeatable: true,
};

const optLinkLocalIp: Fig.Option = {
  name: "--link-local-ip",
  description: "Not implemented",
  args: { name: "ip" },
};

const optLogDriver: Fig.Option = {
  name: "--log-driver",
  description: "Logging driver for the container",
  args: {
    name: "driver",
    suggestions: [
      "k8s-file",
      "journald",
      "none",
      "passthrough",
      "passthrough-tty",
    ],
  },
};

const optLogOpt: Fig.Option = {
  name: "--log-opt",
  description: "Logging driver specific options",
  args: { name: "value" },
  isRepeatable: true,
};

const optMacAddress: Fig.Option = {
  name: "--mac-address",
  description: "Set a static mac address for this container network",
  args: { name: "address" },
  isRepeatable: true,
};

const optMount2: Fig.Option = {
  name: "--mount",
  description: "Attach a filesystem mount to the container",
  args: { name: "value" },
  isRepeatable: true,
};

const optName: Fig.Option = {
  name: "--name",
  description: "Assign a name to the container",
  args: { name: "name" },
};

const optNetwork2: Fig.Option = {
  name: ["--network", "--net"],
  description: "Set the network mode for the container",
  args: { name: "mode" },
  isRepeatable: true,
};

const optNetworkAlias: Fig.Option = {
  name: "--network-alias",
  description:
    "Add a network-scoped alias for the container, setting the alias for all networks that the container joins",
  args: { name: "alias" },
  isRepeatable: true,
};

const optNoHealthcheck: Fig.Option = {
  name: "--no-healthcheck",
  description: "Disable any defined healthchecks for container",
};

const optOomKillDisable: Fig.Option = {
  name: "--oom-kill-disable",
  description: "Whether to disable OOM Killer for the container or not",
};

const optOomScoreAdj: Fig.Option = {
  name: "--oom-score-adj",
  description:
    "Tune the host's OOM preferences for containers (accepts values from -1000 to 1000)",
  args: { name: "num" },
};

const optOs: Fig.Option = {
  name: "--os",
  description:
    "Override the OS, defaults to the host, of the image to be pulled",
  args: { name: "os" },
};

const optPasswd: Fig.Option = {
  name: "--passwd",
  description: "Add entries to /etc/passwd and /etc/group",
};

const optPasswdEntry: Fig.Option = {
  name: "--passwd-entry",
  description: "Entry to write to /etc/passwd",
  args: { name: "entry" },
};

const optPersonality: Fig.Option = {
  name: "--personality",
  description: "Personality sets the execution domain via Linux personality(2)",
  args: { name: "persona" },
};

const optPid2: Fig.Option = {
  name: "--pid",
  description: "Set the PID namespace mode for the container",
  args: { name: "mode" },
};

const optPidfile: Fig.Option = {
  name: "--pidfile",
  description:
    "When the pidfile location is specified, the container process' PID is written to the pidfile",
  args: { name: "path", template: "filepaths" },
};

const optPidsLimit: Fig.Option = {
  name: "--pids-limit",
  description: "Tune the container's pids limit",
  args: { name: "limit" },
};

const optPlatform: Fig.Option = {
  name: "--platform",
  description: "Specify the platform for selecting the image",
  args: { name: "value" },
};

const optPod: Fig.Option = {
  name: "--pod",
  description: "Run container in an existing pod",
  args: { name: "name" },
};

const optPodIdFile: Fig.Option = {
  name: "--pod-id-file",
  description:
    "Run container in an existing pod and read the pod's ID from the specified file",
  args: { name: "file", template: "filepaths" },
};

const optPrivileged: Fig.Option = {
  name: "--privileged",
  description: "Give extended privileges to this container",
};

const optPublish: Fig.Option = {
  name: ["-p", "--publish"],
  description: "Publish a container's port, or range of ports, to the host",
  args: { name: "value" },
  isRepeatable: true,
};

const optPublishAll: Fig.Option = {
  name: ["-P", "--publish-all"],
  description:
    "Publish all exposed ports to random ports on the host interfaces",
};

const optRdtClass: Fig.Option = {
  name: "--rdt-class",
  description:
    "Rdt-class sets the class of service (CLOS or COS) for the container to run in",
  args: { name: "intel-rdt-class-of-service" },
};

const optReadOnly: Fig.Option = {
  name: "--read-only",
  description: "Mount the container's root filesystem as read-only",
};

const optReadOnlyTmpfs: Fig.Option = {
  name: "--read-only-tmpfs",
  description:
    "When running --read-only containers mount read-write tmpfs on /dev, /dev/shm, /run, /tmp and /var/tmp",
};

const optReplace: Fig.Option = {
  name: "--replace",
  description:
    "If another container with the same name already exists, replace and remove it",
};

const optRequires: Fig.Option = {
  name: "--requires",
  description: "Specify one or more requirements",
  args: { name: "container" },
  isRepeatable: true,
};

const optRestart: Fig.Option = {
  name: "--restart",
  description: "Restart policy to follow when containers exit",
  args: {
    name: "policy",
    suggestions: ["no", "never", "on-failure", "always", "unless-stopped"],
  },
};

const optRm2: Fig.Option = {
  name: "--rm",
  description:
    "Remove container and any anonymous unnamed volume associated with the container after exit",
};

const optRootfs: Fig.Option = {
  name: "--rootfs",
  description:
    "If specified, the first argument refers to an exploded container on the file system",
};

const optSdnotify: Fig.Option = {
  name: "--sdnotify",
  description:
    "Determines how to use the NOTIFY_SOCKET, as passed with systemd and Type=notify",
  args: {
    name: "value",
    suggestions: ["container", "conmon", "healthy", "ignore"],
  },
};

const optSeccompPolicy: Fig.Option = {
  name: "--seccomp-policy",
  description: "Specify the policy to select the seccomp profile",
  args: { name: "policy" },
};

const optSecret2: Fig.Option = {
  name: "--secret",
  description: "Give the container access to a secret",
  args: { name: "value" },
  isRepeatable: true,
};

const optShmSizeSystemd: Fig.Option = {
  name: "--shm-size-systemd",
  description:
    "Size of systemd-specific tmpfs mounts such as /run, /run/lock, /var/log/journal and /tmp",
  args: { name: "value" },
};

const optStopSignal: Fig.Option = {
  name: "--stop-signal",
  description: "Signal to stop a container",
  args: { name: "signal" },
};

const optStopTimeout: Fig.Option = {
  name: "--stop-timeout",
  description: "Timeout to stop a container",
  args: { name: "seconds" },
};

const optSubgidname: Fig.Option = {
  name: "--subgidname",
  description:
    "Run the container in a new user namespace using the map with name in the /etc/subgid file",
  args: { name: "name" },
};

const optSubuidname: Fig.Option = {
  name: "--subuidname",
  description:
    "Run the container in a new user namespace using the map with name in the /etc/subuid file",
  args: { name: "name" },
};

const optSysctl: Fig.Option = {
  name: "--sysctl",
  description: "Configure namespaced kernel parameters at runtime",
  args: { name: "value" },
  isRepeatable: true,
};

const optSystemd: Fig.Option = {
  name: "--systemd",
  description: "Run container in systemd mode",
  args: { name: "value", suggestions: ["true", "false", "always"] },
};

const optTimeout: Fig.Option = {
  name: "--timeout",
  description:
    "Maximum time a container is allowed to run before conmon sends it the kill signal",
  args: { name: "seconds" },
};

const optTmpfs: Fig.Option = {
  name: "--tmpfs",
  description: "Create a tmpfs mount",
  args: { name: "fs" },
  isRepeatable: true,
};

const optTty: Fig.Option = {
  name: ["-t", "--tty"],
  description: "Allocate a pseudo-TTY",
};

const optTz: Fig.Option = {
  name: "--tz",
  description: "Set timezone in container",
  args: { name: "timezone" },
};

const optUidmap: Fig.Option = {
  name: "--uidmap",
  description:
    "Run the container in a new user namespace using the supplied UID mapping",
  args: { name: "value" },
  isRepeatable: true,
};

const optUlimit2: Fig.Option = {
  name: "--ulimit",
  description: "Ulimit options",
  args: { name: "option" },
  isRepeatable: true,
};

const optUmask: Fig.Option = {
  name: "--umask",
  description: "Set the umask inside the container",
  args: { name: "umask" },
};

const optUnsetenv2: Fig.Option = {
  name: "--unsetenv",
  description: "Unset default environment variables for the container",
  args: { name: "env" },
  isRepeatable: true,
};

const optUnsetenvAll: Fig.Option = {
  name: "--unsetenv-all",
  description: "Unset all default environment variables for the container",
};

const optUser: Fig.Option = {
  name: ["-u", "--user"],
  description:
    "Sets the username or UID used and, optionally, the groupname or GID for the specified command",
  args: { name: "value" },
};

const optUserns2: Fig.Option = {
  name: "--userns",
  description: "Set the user namespace mode for the container",
  args: { name: "mode" },
};

const optUts2: Fig.Option = {
  name: "--uts",
  description: "Set the UTS namespace mode for the container",
  args: { name: "mode" },
};

const optVariant: Fig.Option = {
  name: "--variant",
  description:
    "Use VARIANT instead of the default architecture variant of the container image",
  args: { name: "variant" },
};

const optVolume2: Fig.Option = {
  name: ["-v", "--volume"],
  description: "Create a bind mount",
  args: { name: "value" },
  isRepeatable: true,
};

const optVolumesFrom: Fig.Option = {
  name: "--volumes-from",
  description: "Mount volumes from the specified container(s)",
  args: { name: "value" },
  isRepeatable: true,
};

const optWorkdir: Fig.Option = {
  name: ["-w", "--workdir"],
  description: "Working directory inside the container",
  args: { name: "dir" },
};

const optPreserveFd: Fig.Option = {
  name: "--preserve-fd",
  description:
    "Pass down to the process the additional file descriptors specified in the comma separated list",
  args: { name: "value" },
  isRepeatable: true,
};

const optPreserveFds: Fig.Option = {
  name: "--preserve-fds",
  description:
    "Pass down to the process N additional file descriptors (in addition to 0, 1, 2)",
  args: { name: "n" },
};

const optFilter3: Fig.Option = {
  name: ["-f", "--filter"],
  description: "Provide filter values",
  args: { name: "filter" },
  isRepeatable: true,
};

const optFormat6: Fig.Option = {
  name: ["-f", "--format"],
  description: 'Change output format to "json" or a Go template',
  args: { name: "format" },
};

const optCidfile2: Fig.Option = {
  name: "--cidfile",
  description: "Read the container ID from the file",
  args: { name: "file", template: "filepaths" },
  isRepeatable: true,
};

const optNetwork3: Fig.Option = {
  name: ["--network", "--net"],
  description: "Set the network mode for the pod",
  args: { name: "mode" },
  isRepeatable: true,
};

const optNoHosts2: Fig.Option = {
  name: "--no-hosts",
  description: "Do not modify the /etc/hosts file in the pod",
};

const optCompatAuthFile: Fig.Option = {
  name: "--compat-auth-file",
  description:
    "Instead of updating the default credentials file, update the one at path, and use a Docker-compatible format",
  args: { name: "path", template: "filepaths" },
};

const optColor: Fig.Option = {
  name: "--color",
  description: "Output the containers with different colors in the log",
};

const optFollow: Fig.Option = {
  name: ["-f", "--follow"],
  description: "Follow log output",
};

const optNames: Fig.Option = {
  name: ["-n", "--names"],
  description:
    "Output the container names instead of the container IDs in the log",
};

const optSince: Fig.Option = {
  name: "--since",
  description: "Show logs since TIMESTAMP",
  args: { name: "timestamp" },
};

const optTail: Fig.Option = {
  name: "--tail",
  description: "Output the specified number of LINES at the end of the logs",
  args: { name: "lines" },
};

const optTimestamps: Fig.Option = {
  name: ["-t", "--timestamps"],
  description: "Show timestamps in the log outputs",
};

const optUntil: Fig.Option = {
  name: "--until",
  description: "Show logs until TIMESTAMP",
  args: { name: "timestamp" },
};

const optImportNativeCa: Fig.Option = {
  name: "--import-native-ca",
  description: "Import the host's trusted CA certificates into the machine",
};

const optRootful: Fig.Option = {
  name: "--rootful",
  description:
    "Whether this machine prefers rootful (true) or rootless (false) container execution",
};

const optUpdateConnection: Fig.Option = {
  name: ["-u", "--update-connection"],
  description: "Set default system connection for this machine",
};

const optUserModeNetworking: Fig.Option = {
  name: "--user-mode-networking",
  description: "This option can only be used for the WSL provider on Windows",
};

const optRestart2: Fig.Option = {
  name: "--restart",
  description: "Restart VM after applying changes",
};

const optNoInfo: Fig.Option = {
  name: "--no-info",
  description: "Suppress informational tips",
};

const optArch2: Fig.Option = {
  name: "--arch",
  description:
    "Override the architecture which the list or index records as a requirement for the image",
  args: { name: "architecture" },
};

const optFeatures: Fig.Option = {
  name: "--features",
  description:
    "Specify the features list which the list or index records as requirements for the image",
  args: { name: "feature" },
  isRepeatable: true,
};

const optOs2: Fig.Option = {
  name: "--os",
  description:
    "Override the OS which the list or index records as a requirement for the image",
  args: { name: "os" },
};

const optOsVersion2: Fig.Option = {
  name: "--os-version",
  description:
    "Specify the OS version which the list or index records as a requirement for the image",
  args: { name: "version" },
};

const optVariant2: Fig.Option = {
  name: "--variant",
  description:
    "Specify the variant which the list or index records for the image",
  args: { name: "string" },
};

const optOpt: Fig.Option = {
  name: ["-o", "--opt"],
  description: "Set driver specific options",
  args: { name: "option" },
  isRepeatable: true,
};

const optFilter4: Fig.Option = {
  name: "--filter",
  description: "Provide filter values",
  args: { name: "string" },
  isRepeatable: true,
};

const optForce2: Fig.Option = {
  name: ["-f", "--force"],
  description: "Do not prompt for confirmation",
};

const optCgroupParent2: Fig.Option = {
  name: "--cgroup-parent",
  description: "Path to cgroups under which the cgroup for the pod is created",
  args: { name: "path", template: "filepaths" },
};

const optDevice2: Fig.Option = {
  name: "--device",
  description: "Add a host device to the pod",
  args: { name: "value" },
  isRepeatable: true,
};

const optGidmap2: Fig.Option = {
  name: "--gidmap",
  description:
    "Run all containers in the pod in a new user namespace using the supplied GID mapping",
  args: { name: "value" },
  isRepeatable: true,
};

const optHostname2: Fig.Option = {
  name: "--hostname",
  description: "Set the pod's hostname inside all containers",
  args: { name: "name" },
};

const optInfraCommand: Fig.Option = {
  name: "--infra-command",
  description: "The command that is run to start the infra container",
  args: { name: "command" },
};

const optInfraConmonPidfile: Fig.Option = {
  name: "--infra-conmon-pidfile",
  description:
    "Write the pid of the infra container's conmon process to a file",
  args: { name: "file", template: "filepaths" },
};

const optInfraName: Fig.Option = {
  name: "--infra-name",
  description: "The name that is used for the pod's infra container",
  args: { name: "name" },
};

const optLabel3: Fig.Option = {
  name: ["-l", "--label"],
  description: "Add metadata to a pod",
  args: { name: "value" },
  isRepeatable: true,
};

const optPid3: Fig.Option = {
  name: "--pid",
  description: "Set the PID mode for the pod",
  args: { name: "pid" },
};

const optSysctl2: Fig.Option = {
  name: "--sysctl",
  description:
    "Configure namespaced kernel parameters for all containers in the pod",
  args: { name: "value" },
  isRepeatable: true,
};

const optUidmap2: Fig.Option = {
  name: "--uidmap",
  description:
    "Run all containers in the pod in a new user namespace using the supplied mapping",
  args: { name: "value" },
  isRepeatable: true,
};

const optUserns3: Fig.Option = {
  name: "--userns",
  description: "Set the user namespace mode for all the containers in a pod",
  args: { name: "mode" },
};

const optUts3: Fig.Option = {
  name: "--uts",
  description: "Set the UTS namespace mode for the pod",
  args: { name: "mode" },
};

const optFormat7: Fig.Option = {
  name: ["-f", "--format"],
  description: "Change the default output format",
  args: { name: "format" },
};

const optLatest3: Fig.Option = {
  name: ["-l", "--latest"],
  description:
    "Instead of providing the pod name or ID, use the last created pod",
};

const optFormat8: Fig.Option = {
  name: "--format",
  description: "Pretty-print containers to JSON or using a Go template",
  args: { name: "format" },
};

const optIgnore2: Fig.Option = {
  name: ["-i", "--ignore"],
  description:
    "Ignore errors when specified pods are not in the container store",
};

const optPodIdFile2: Fig.Option = {
  name: "--pod-id-file",
  description: "Read the pod ID from the file",
  args: { name: "file", template: "filepaths" },
  isRepeatable: true,
};

const optTime: Fig.Option = {
  name: ["-t", "--time"],
  description:
    "Seconds to wait before forcibly stopping running containers within the pod",
  args: { name: "seconds" },
};

const optAll: Fig.Option = {
  name: ["-a", "--all"],
  description: "Show all containers",
};

const optFormat9: Fig.Option = {
  name: "--format",
  description:
    "Pretty-print container statistics to JSON or using a Go template",
  args: { name: "template" },
};

const optNoReset: Fig.Option = {
  name: "--no-reset",
  description:
    "Do not clear the terminal/screen in between reporting intervals",
};

const optCompress: Fig.Option = {
  name: "--compress",
  description:
    "Compress tarball image layers when pushing to a directory using the 'dir' transport",
};

const optReloadSystemd: Fig.Option = {
  name: "--reload-systemd",
  description: "Reload systemd after the operation completes (default true)",
};

const optTime2: Fig.Option = {
  name: ["-t", "--time"],
  description: "Seconds to wait before forcibly stopping the container",
  args: { name: "seconds" },
};

const optIgnore3: Fig.Option = {
  name: ["-i", "--ignore"],
  description:
    "Ignore errors when specified containers are not in the container store",
};

const optOutput: Fig.Option = {
  name: ["-o", "--output"],
  description: "Write to a file, default is STDOUT",
  args: { name: "file", template: "filepaths" },
};

const optTlsKey: Fig.Option = {
  name: "--tls-key",
  description:
    "Path to a PEM file containing the private key matching --tls-cert. --tls-cert must also be provided",
  args: { name: "path", template: "filepaths" },
};

const attachCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Attach to a running container",
  options: [
    optDetachKeys,
    optLatest,
    { name: "--no-stdin", description: "Do not attach STDIN" },
    optSigProxy,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.runningDockerContainers,
  },
};

const buildCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Build a container image using a Containerfile",
  options: [
    optAddHost,
    {
      name: "--all-platforms",
      description: "Attempt to build for all base image platforms",
    },
    optAnnotation2,
    {
      name: "--arch",
      description: "Set the architecture of the imported image",
      args: { name: "arch" },
    },
    optAuthfile,
    optBuildArg,
    optBuildArgFile,
    optBuildContext,
    optCacheFrom,
    optCacheTo,
    optCacheTtl,
    optCapAdd,
    optCapDrop,
    optCertDir,
    optCgroupParent,
    optCgroupns,
    optCompatVolumes,
    {
      name: "--compress",
      description:
        "This option is added to be aligned with other containers CLIs",
    },
    optCompressionFormat,
    optCompressionLevel,
    optCppFlag,
    optCpuPeriod,
    optCpuQuota,
    optCpuShares,
    optCpusetCpus,
    optCpusetMems,
    optCreatedAnnotation,
    optCreds,
    {
      name: "--cw",
      description: "Confidential workload options",
      args: { name: "options" },
    },
    optDecryptionKey,
    optDevice,
    optDisableCompression,
    optDisableContentTrust,
    optDns,
    optDnsOption,
    optDnsSearch,
    optEnv,
    optFile,
    optForceCompression,
    optForceRm,
    optFormat4,
    optFrom,
    optGroupAdd,
    optHooksDir,
    optHttpProxy,
    optIdentityLabel,
    optIgnorefile,
    optIidfile,
    optIidfileRaw,
    optInheritAnnotations,
    optInheritLabels,
    optIpc,
    optIsolation,
    optJobs,
    optLabel,
    optLayerLabel,
    optLayers,
    optLogfile,
    {
      name: "--logsplit",
      description: "Split logfile to different files for each platform",
    },
    {
      name: "--manifest",
      description: "Name of the manifest list to which the image is added",
      args: { name: "manifest" },
    },
    optMemory,
    optMemorySwap,
    {
      name: "--metadata-file",
      description: "Write information about the built image to the named file",
      args: { name: "metadatafile", template: "filepaths" },
      isRepeatable: true,
    },
    optMount,
    optNetwork,
    optNoCache,
    optNoHostname,
    optNoHosts,
    optOmitHistory,
    {
      name: "--os",
      description:
        "Set the OS of the image to be built, and that of the base image to be pulled",
      args: { name: "string" },
    },
    optOsFeature,
    optOsVersion,
    {
      name: ["-o", "--output"],
      description: "Output destination (format: type=local,dest=path)",
      args: { name: "output-opts" },
    },
    optPid,
    {
      name: "--platform",
      description: "Specify the platform for selecting the image",
      args: { name: "value" },
      isRepeatable: true,
    },
    optPull,
    optQuiet,
    optRetry,
    optRetryDelay,
    optRewriteTimestamp,
    optRm,
    optRuntime,
    optRuntimeFlag,
    optSaveStages,
    optSbom,
    optSbomImageOutput,
    optSbomImagePurlOutput,
    optSbomMergeStrategy,
    optSbomOutput,
    optSbomPurlOutput,
    optSbomScannerCommand,
    optSbomScannerImage,
    optSecret,
    optSecurityOpt,
    optShmSize,
    {
      name: "--sign-by",
      description:
        "Sign the image using a GPG key with the specified FINGERPRINT",
      args: { name: "fingerprint" },
    },
    optSkipUnusedStages,
    optSourceDateEpoch,
    optSourcePolicyFile,
    optSquash,
    optSquashAll,
    optSsh,
    optStageLabels,
    { name: "--stdin", description: "Pass stdin into the RUN containers" },
    optTag,
    optTarget,
    optTimestamp,
    optTlsVerify,
    optUlimit,
    optUnsetannotation,
    optUnsetenv,
    optUnsetlabel,
    optUserns,
    optUsernsGidMap,
    optUsernsGidMapGroup,
    optUsernsUidMap,
    optUsernsUidMapUser,
    optUts,
    {
      name: "--variant",
      description: "Set the variant of the imported image",
      args: { name: "variant" },
    },
    optVolume,
  ],
  args: { name: "context", template: "folders", isOptional: true },
};

const commitCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Create new image based on the changed container",
  options: [
    {
      name: ["-a", "--author"],
      description: "Set the author for the committed image",
      args: { name: "author" },
    },
    {
      name: ["-c", "--change"],
      description:
        "Apply the following possible instructions to the created image",
      args: { name: "instruction" },
      isRepeatable: true,
    },
    {
      name: "--config",
      description:
        "File containing a container configuration to merge into the image",
      args: { name: "configblobfile", template: "filepaths" },
    },
    {
      name: ["-f", "--format"],
      description: "Set the format of the image manifest and metadata",
      args: { name: "value", suggestions: ["oci", "docker"] },
    },
    {
      name: "--iidfile",
      description: "Write the image ID to the file",
      args: { name: "imageidfile", template: "filepaths" },
    },
    {
      name: "--include-volumes",
      description: "Include container volumes as image volumes",
    },
    {
      name: ["-m", "--message"],
      description: "Set commit message for committed image",
      args: { name: "message" },
    },
    {
      name: ["-p", "--pause"],
      description: "Pause the container when creating an image",
    },
    { name: ["-q", "--quiet"], description: "Suppresses output" },
    {
      name: ["-s", "--squash"],
      description: "Squash newly built layers into a single new layer",
    },
  ],
  args: [
    { name: "container", generators: dockerGenerators.allDockerContainers },
    {
      name: "image",
      generators: dockerGenerators.allLocalImages,
      isOptional: true,
    },
  ],
};

const cpCommand: Omit<Fig.Subcommand, "name"> = {
  description:
    "Copy files/folders between a container and the local filesystem",
  options: [
    {
      name: ["-a", "--archive"],
      description: "Archive mode (copy all UID/GID information)",
    },
    {
      name: "--overwrite",
      description:
        "Allow directories to be overwritten with non-directories and vice versa",
    },
  ],
  args: [
    { name: "source", template: "filepaths" },
    { name: "destination", template: "filepaths" },
  ],
};

const createCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Create a new container",
  options: [
    optAddHost,
    optAnnotation3,
    optArch,
    optAttach,
    optAuthfile,
    optBlkioWeight,
    optBlkioWeightDevice,
    optCapAdd2,
    optCapDrop2,
    optCertDir,
    optCgroupConf,
    optCgroupParent,
    optCgroupns2,
    optCgroups,
    optChrootdirs,
    optCidfile,
    optConmonPidfile,
    optCpuPeriod,
    optCpuQuota,
    optCpuShares,
    optCpus,
    optCpusetCpus,
    optCpusetMems,
    optCreds,
    optDecryptionKey,
    optDevice,
    optDeviceCgroupRule,
    optDeviceReadBps,
    optDeviceReadIops,
    optDeviceWriteBps,
    optDeviceWriteIops,
    optDisableContentTrust,
    optDns,
    optDnsOption2,
    optDnsSearch2,
    optEntrypoint,
    optEnv2,
    optEnvFile,
    optEnvHost,
    optEnvMerge,
    optExpose,
    optGidmap,
    optGpus,
    optGroupAdd,
    optGroupEntry,
    optHealthCmd,
    optHealthInterval,
    optHealthLogDestination,
    optHealthMaxLogCount,
    optHealthMaxLogSize,
    optHealthOnFailure,
    optHealthRetries,
    optHealthStartInterval,
    optHealthStartPeriod,
    optHealthStartupCmd,
    optHealthStartupInterval,
    optHealthStartupRetries,
    optHealthStartupSuccess,
    optHealthStartupTimeout,
    optHealthTimeout,
    optHostname,
    optHostsFile,
    optHostuser,
    optHttpProxy,
    optImageVolume,
    optInit,
    {
      name: "--init-ctr",
      description: "Make this a pod init container",
      args: { name: "type", suggestions: ["always", "once"] },
    },
    optInitPath,
    optInteractive,
    optIp,
    optIp6,
    optIpc2,
    optLabel2,
    optLabelFile,
    optLinkLocalIp,
    optLogDriver,
    optLogOpt,
    optMacAddress,
    optMemory,
    optMemoryReservation,
    optMemorySwap,
    optMemorySwappiness,
    optMount2,
    optName,
    optNetwork2,
    optNetworkAlias,
    optNoHealthcheck,
    optNoHostname,
    optNoHosts,
    optOomKillDisable,
    optOomScoreAdj,
    optOs,
    optPasswd,
    optPasswdEntry,
    optPersonality,
    optPid2,
    optPidfile,
    optPidsLimit,
    optPlatform,
    optPod,
    optPodIdFile,
    optPrivileged,
    optPublish,
    optPublishAll,
    optPull,
    optQuiet2,
    optRdtClass,
    optReadOnly,
    optReadOnlyTmpfs,
    optReplace,
    optRequires,
    optRestart,
    optRetry,
    optRetryDelay,
    optRm2,
    optRootfs,
    optSdnotify,
    optSeccompPolicy,
    optSecret2,
    optSecurityOpt,
    optShmSize,
    optShmSizeSystemd,
    optStopSignal,
    optStopTimeout,
    optSubgidname,
    optSubuidname,
    optSysctl,
    optSystemd,
    optTimeout,
    optTlsVerify,
    optTmpfs,
    optTty,
    optTz,
    optUidmap,
    optUlimit2,
    optUmask,
    optUnsetenv2,
    optUnsetenvAll,
    optUser,
    optUserns2,
    optUts2,
    optVariant,
    optVolume2,
    optVolumesFrom,
    optWorkdir,
  ],
  args: [
    { name: "image", generators: runImageGenerator },
    { name: "command", isOptional: true, isCommand: true },
  ],
};

const eventsCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Monitor Podman events",
  options: [
    {
      name: ["-f", "--filter"],
      description: "Filter events that are displayed",
      args: { name: "filter" },
      isRepeatable: true,
    },
    {
      name: "--format",
      description:
        "Format the output to JSON Lines or using the given Go template",
      args: { name: "string" },
    },
    {
      name: "--no-trunc",
      description: "Do not truncate the output (default true)",
    },
    {
      name: "--since",
      description: "Show all events created since the given timestamp",
      args: { name: "timestamp" },
    },
    {
      name: "--stream",
      description:
        "Stream events and do not exit after reading the last known event (default true)",
    },
    {
      name: "--until",
      description: "Show all events created until the given timestamp",
      args: { name: "timestamp" },
    },
  ],
};

const execCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Execute a command in a running container",
  options: [
    {
      name: "--cidfile",
      description:
        "Read the ID of the target container from the specified file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: ["-d", "--detach"],
      description: "Start the exec session, but do not attach to it",
    },
    optDetachKeys,
    optEnv2,
    optEnvFile,
    optInteractive,
    optLatest,
    {
      name: "--no-session",
      description: "Do not create a database session for the exec process",
    },
    optPreserveFd,
    optPreserveFds,
    optPrivileged,
    optTty,
    optUser,
    optWorkdir,
  ],
  args: [
    { name: "container", generators: dockerGenerators.runningDockerContainers },
    { name: "command", isCommand: true },
  ],
};

const exportCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Export a container's filesystem contents as a tar archive",
  options: [
    {
      name: ["-o", "--output"],
      description: "Write to a file, default is STDOUT",
      args: { name: "string" },
    },
  ],
  args: { name: "container", generators: dockerGenerators.allDockerContainers },
};

const historyCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Show the history of an image",
  options: [
    {
      name: "--format",
      description: "Alter the output for a format like 'json' or a Go template",
      args: { name: "format" },
    },
    {
      name: ["-H", "--human"],
      description:
        "Display sizes and dates in human readable format (default true)",
    },
    optNoTrunc,
    {
      name: ["-q", "--quiet"],
      description: "Print the numeric IDs only (default false)",
    },
  ],
  args: { name: "image", generators: dockerGenerators.allLocalImages },
};

const imagesCommand: Omit<Fig.Subcommand, "name"> = {
  description: "List images in local storage",
  options: [
    {
      name: ["-a", "--all"],
      description:
        "Show all images (by default filter out the intermediate image layers)",
    },
    { name: "--digests", description: "Show image digests" },
    optFilter3,
    optFormat3,
    { name: "--history", description: "Display the history of image names" },
    optNoTrunc,
    optNoheading,
    { name: ["-q", "--quiet"], description: "Lists only the image IDs" },
    {
      name: "--sort",
      description: "Sort output by created, id, name, or number",
      args: {
        name: "sort",
        suggestions: ["created", "id", "repository", "size", "tag"],
      },
    },
  ],
  args: {
    name: "image",
    generators: dockerGenerators.allLocalImages,
    isOptional: true,
  },
};

const importCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Import a tarball and save it as a filesystem image",
  options: [
    {
      name: "--arch",
      description: "Set architecture of the imported image",
      args: { name: "string" },
    },
    {
      name: ["-c", "--change"],
      description:
        "Apply the following possible instructions to the created image: CMD | ENTRYPOINT | ENV | EXPOSE | LABEL | STOPSIGNAL | USER |",
      args: { name: "instruction" },
      isRepeatable: true,
    },
    {
      name: ["-m", "--message"],
      description: "Set commit message for imported image",
      args: { name: "message" },
    },
    {
      name: "--os",
      description: "Set OS of the imported image",
      args: { name: "string" },
    },
    { name: ["-q", "--quiet"], description: "Shows progress on the import" },
    {
      name: "--variant",
      description: "Set variant of the imported image",
      args: { name: "string" },
    },
  ],
  args: [
    { name: "path", template: "filepaths" },
    { name: "reference", isOptional: true },
  ],
};

const infoCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Display Podman related system information",
  options: [optFormat6],
};

const initCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Initialize one or more containers",
  options: [
    { name: ["-a", "--all"], description: "Initialize all containers" },
    optLatest,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.allDockerContainers,
    isVariadic: true,
  },
};

const killCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Kill the main process in one or more containers",
  options: [
    {
      name: ["-a", "--all"],
      description: "Signal all running and paused containers",
    },
    optCidfile2,
    optLatest,
    {
      name: ["-s", "--signal"],
      description: "Signal to send to the container",
      args: { name: "signal" },
    },
  ],
  args: {
    name: "container",
    generators: dockerGenerators.runningDockerContainers,
    isVariadic: true,
  },
};

const kubeGenerateCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Generate Kubernetes YAML based on containers, pods or volumes",
  options: [
    {
      name: ["-f", "--filename"],
      description: "Output to the given file instead of STDOUT",
      args: { name: "filename", template: "filepaths" },
    },
    {
      name: "--podman-only",
      description:
        "Add podman-only reserved annotations in generated YAML file (Cannot be used by Kubernetes)",
    },
    {
      name: ["-r", "--replicas"],
      description:
        "The value to set replicas to when generating a Deployment kind",
      args: { name: "replica-count" },
    },
    {
      name: ["-s", "--service"],
      description:
        "Generate a Kubernetes service object in addition to the Pods",
    },
    {
      name: ["-t", "--type"],
      description: "The Kubernetes kind to generate in the YAML file",
      args: {
        name: "value",
        suggestions: ["pod", "deployment", "daemonset", "job"],
      },
    },
  ],
  args: {
    name: "container, pod or volume",
    generators: [
      dockerGenerators.allDockerContainers,
      dockerGenerators.listDockerPods,
      dockerGenerators.listDockerVolumes,
    ],
    isVariadic: true,
  },
};

const loadCommand: Omit<Fig.Subcommand, "name"> = {
  description:
    "Load image(s) from tar archives, directories, or URLs into container storage",
  options: [
    {
      name: ["-i", "--input"],
      description:
        "Load the specified input file or URL instead of reading from stdin",
      args: { name: "input" },
    },
    { name: ["-q", "--quiet"], description: "Suppress the progress output" },
  ],
};

const logsCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Display the logs of one or more containers",
  options: [
    optColor,
    optFollow,
    optLatest,
    optNames,
    optSince,
    optTail,
    optTimestamps,
    optUntil,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.allDockerContainers,
    isVariadic: true,
  },
};

const mountCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Mount a working container's root filesystem",
  options: [
    { name: ["-a", "--all"], description: "Mount all podman containers" },
    {
      name: "--format",
      description: "Print the mounted containers in specified format (json)",
      args: { name: "format" },
    },
    optLatest,
    optNoTrunc,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.allDockerContainers,
    isOptional: true,
    isVariadic: true,
  },
};

const pauseCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Pause one or more containers",
  options: [
    { name: ["-a", "--all"], description: "Pause all running containers" },
    optCidfile2,
    optFilter,
    optLatest,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.runningDockerContainers,
    isVariadic: true,
  },
};

const portCommand: Omit<Fig.Subcommand, "name"> = {
  description: "List port mappings for a container",
  options: [
    {
      name: ["-a", "--all"],
      description: "List all known port mappings for running containers",
    },
    optLatest,
  ],
  args: [
    { name: "container", generators: dockerGenerators.runningDockerContainers },
    { name: "port", isOptional: true },
  ],
};

const psCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Print out information about containers",
  options: [
    {
      name: ["-a", "--all"],
      description:
        "Show all the containers, default is only running containers",
    },
    {
      name: "--external",
      description:
        "Display external containers that are not controlled by Podman but are stored in containers storage",
    },
    optFilter,
    optFormat8,
    {
      name: ["-n", "--last"],
      description: "Print the n last created containers (all states)",
      args: { name: "number" },
    },
    {
      name: ["-l", "--latest"],
      description: "Show the latest container created (all states)",
    },
    {
      name: ["--namespace", "--ns"],
      description: "Display namespace information",
    },
    optNoTrunc,
    {
      name: "--noheading",
      description: "Omit the table headings from the listing of containers",
    },
    {
      name: ["-p", "--pod"],
      description: "Display the pods the containers are associated with",
    },
    {
      name: ["-q", "--quiet"],
      description: "Print the numeric IDs of the containers only",
    },
    { name: ["-s", "--size"], description: "Display the total file size" },
    {
      name: "--sort",
      description:
        "Sort by command, created, id, image, names, pod, runningfor, size, or status",
      args: {
        name: "value",
        suggestions: [
          "command",
          "created",
          "id",
          "image",
          "names",
          "pod",
          "runningfor",
          "size",
          "status",
        ],
      },
    },
    {
      name: "--sync",
      description: "Force a sync of container state with the OCI runtime",
    },
    {
      name: ["-w", "--watch"],
      description:
        "Refresh the output with current containers on an interval in seconds",
      args: { name: "number" },
    },
  ],
};

const pullCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Pull an image from a registry",
  options: [
    {
      name: ["-a", "--all-tags"],
      description: "All tagged images in the repository are pulled",
    },
    optArch,
    optAuthfile,
    optCertDir,
    optCreds,
    optDecryptionKey,
    optDisableContentTrust,
    optOs,
    optPlatform,
    {
      name: "--policy",
      description: "Pull image policy",
      args: {
        name: "string",
        suggestions: ["always", "missing", "never", "newer"],
      },
    },
    optQuiet,
    optRetry,
    optRetryDelay,
    optTlsVerify,
    optVariant,
  ],
  args: {
    name: "image",
    generators: dockerGenerators.dockerHubSearch,
    isVariadic: true,
  },
};

const pushCommand: Omit<Fig.Subcommand, "name"> = {
  description:
    "Push an image, manifest list or image index from local storage to elsewhere",
  options: [
    optAuthfile,
    optCertDir,
    optCompress,
    optCompressionFormat,
    optCompressionLevel,
    optCreds,
    optDigestfile,
    optDisableContentTrust,
    {
      name: "--encrypt-layer",
      description:
        "Layers to encrypt, 0-indexed layer indices with support for negative indexing (e.g. 0 is the first layer, -1 is the last layer)",
      args: { name: "value" },
      isRepeatable: true,
    },
    {
      name: "--encryption-key",
      description:
        "Key with the encryption protocol to use to encrypt the image (e.g. jwe:/path/to/key.pem)",
      args: { name: "key" },
      isRepeatable: true,
    },
    optForceCompression,
    {
      name: ["-f", "--format"],
      description:
        "Manifest Type (oci, v2s2, or v2s1) to use when pushing an image",
      args: { name: "format" },
    },
    {
      name: "--platform",
      description:
        "Specify the platform for selecting a specific image from a manifest list to push",
      args: { name: "value" },
    },
    optQuiet,
    {
      name: "--remove-signatures",
      description: "Discard any pre-existing signatures in the image",
    },
    optRetry,
    optRetryDelay,
    optSignBy,
    optSignBySigstore,
    optSignBySigstorePrivateKey,
    optSignBySqFingerprint,
    optSignPassphraseFile,
    optTlsVerify,
  ],
  args: [
    { name: "image", generators: dockerGenerators.allLocalImages },
    { name: "destination", isOptional: true },
  ],
};

const renameCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Rename an existing container",
  args: [
    { name: "container", generators: dockerGenerators.allDockerContainers },
    { name: "name" },
  ],
};

const restartCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Restart one or more containers",
  options: [
    {
      name: ["-a", "--all"],
      description: "Restart all containers regardless of their current state",
    },
    {
      name: "--cidfile",
      description:
        "Read container ID from the specified file and restart the container",
      args: { name: "string", template: "filepaths" },
      isRepeatable: true,
    },
    optFilter,
    optLatest,
    {
      name: "--running",
      description:
        "Restart all containers that are already in the running state",
    },
    optTime2,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.allDockerContainers,
    isVariadic: true,
  },
};

const rmCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Remove one or more containers",
  options: [
    { name: ["-a", "--all"], description: "Remove all containers" },
    optCidfile2,
    {
      name: "--depend",
      description:
        "Remove selected container and recursively remove all containers that depend on it",
    },
    {
      name: "--filter",
      description: "Filter containers based on conditions given",
      args: { name: "filter" },
      isRepeatable: true,
    },
    {
      name: ["-f", "--force"],
      description: "Force the removal of running and paused containers",
    },
    optIgnore3,
    optLatest,
    optTime2,
    {
      name: ["-v", "--volumes"],
      description: "Remove anonymous volumes associated with the container",
    },
  ],
  args: {
    name: "container",
    generators: dockerGenerators.allDockerContainers,
    isVariadic: true,
  },
};

const rmiCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Remove one or more locally stored images",
  options: [
    {
      name: ["-a", "--all"],
      description: "Remove all images in the local storage",
    },
    {
      name: ["-f", "--force"],
      description:
        "This option causes Podman to remove all containers that are using the image before removing the image from the system",
    },
    {
      name: ["-i", "--ignore"],
      description:
        "If a specified image does not exist in the local storage, ignore it and do not throw an error",
    },
    {
      name: "--no-prune",
      description:
        "This option does not remove dangling parents of the specified image",
    },
  ],
  args: {
    name: "image",
    generators: dockerGenerators.allLocalImages,
    isVariadic: true,
  },
};

const runCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Run a command in a new container",
  options: [
    optAddHost,
    optAnnotation3,
    optArch,
    optAttach,
    optAuthfile,
    optBlkioWeight,
    optBlkioWeightDevice,
    optCapAdd2,
    optCapDrop2,
    optCertDir,
    optCgroupConf,
    optCgroupParent,
    optCgroupns2,
    optCgroups,
    optChrootdirs,
    optCidfile,
    optConmonPidfile,
    optCpuPeriod,
    optCpuQuota,
    optCpuShares,
    optCpus,
    optCpusetCpus,
    optCpusetMems,
    optCreds,
    optDecryptionKey,
    {
      name: ["-d", "--detach"],
      description:
        "Detached mode: run the container in the background and print the new container ID",
    },
    optDetachKeys,
    optDevice,
    optDeviceCgroupRule,
    optDeviceReadBps,
    optDeviceReadIops,
    optDeviceWriteBps,
    optDeviceWriteIops,
    optDisableContentTrust,
    optDns,
    optDnsOption2,
    optDnsSearch2,
    optEntrypoint,
    optEnv2,
    optEnvFile,
    optEnvHost,
    optEnvMerge,
    optExpose,
    optGidmap,
    optGpus,
    optGroupAdd,
    optGroupEntry,
    optHealthCmd,
    optHealthInterval,
    optHealthLogDestination,
    optHealthMaxLogCount,
    optHealthMaxLogSize,
    optHealthOnFailure,
    optHealthRetries,
    optHealthStartInterval,
    optHealthStartPeriod,
    optHealthStartupCmd,
    optHealthStartupInterval,
    optHealthStartupRetries,
    optHealthStartupSuccess,
    optHealthStartupTimeout,
    optHealthTimeout,
    optHostname,
    optHostsFile,
    optHostuser,
    optHttpProxy,
    optImageVolume,
    optInit,
    optInitPath,
    optInteractive,
    optIp,
    optIp6,
    optIpc2,
    optLabel2,
    optLabelFile,
    optLinkLocalIp,
    optLogDriver,
    optLogOpt,
    optMacAddress,
    optMemory,
    optMemoryReservation,
    optMemorySwap,
    optMemorySwappiness,
    optMount2,
    optName,
    optNetwork2,
    optNetworkAlias,
    optNoHealthcheck,
    optNoHostname,
    optNoHosts,
    optOomKillDisable,
    optOomScoreAdj,
    optOs,
    optPasswd,
    optPasswdEntry,
    optPersonality,
    optPid2,
    optPidfile,
    optPidsLimit,
    optPlatform,
    optPod,
    optPodIdFile,
    optPreserveFd,
    optPreserveFds,
    optPrivileged,
    optPublish,
    optPublishAll,
    optPull,
    optQuiet2,
    optRdtClass,
    optReadOnly,
    optReadOnlyTmpfs,
    optReplace,
    optRequires,
    optRestart,
    optRetry,
    optRetryDelay,
    optRm2,
    {
      name: "--rmi",
      description:
        "After exit of the container, remove the image unless another container is using it",
    },
    optRootfs,
    optSdnotify,
    optSeccompPolicy,
    optSecret2,
    optSecurityOpt,
    optShmSize,
    optShmSizeSystemd,
    optSigProxy,
    optStopSignal,
    optStopTimeout,
    optSubgidname,
    optSubuidname,
    optSysctl,
    optSystemd,
    optTimeout,
    optTlsVerify,
    optTmpfs,
    optTty,
    optTz,
    optUidmap,
    optUlimit2,
    optUmask,
    optUnsetenv2,
    optUnsetenvAll,
    optUser,
    optUserns2,
    optUts2,
    optVariant,
    optVolume2,
    optVolumesFrom,
    optWorkdir,
  ],
  args: [
    { name: "image", generators: runImageGenerator },
    { name: "command", isOptional: true },
  ],
};

const saveCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Save image(s) to an archive or directory",
  options: [
    optCompress,
    {
      name: "--format",
      description: "An image format to produce",
      args: {
        name: "format",
        suggestions: ["docker-archive", "oci-archive", "oci-dir", "docker-dir"],
      },
    },
    {
      name: ["-m", "--multi-image-archive"],
      description: "Allow for creating archives with more than one image",
    },
    optOutput,
    optQuiet,
    {
      name: "--uncompressed",
      description:
        "Accept uncompressed layers when using one of the OCI formats",
    },
  ],
  args: {
    name: "image",
    generators: dockerGenerators.allLocalImages,
    isVariadic: true,
  },
};

const searchCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Search a registry for an image",
  options: [
    optAuthfile,
    optCertDir,
    {
      name: "--compatible",
      description:
        "List stars, official and automated columns (Docker compatibility)",
    },
    optCreds,
    {
      name: ["-f", "--filter"],
      description: "Filter output based on conditions provided",
      args: { name: "filter" },
      isRepeatable: true,
    },
    {
      name: "--format",
      description: "Change the output format to a Go template",
      args: { name: "format" },
    },
    {
      name: "--limit",
      description: "Limit the number of results (default 25)",
      args: { name: "limit" },
    },
    {
      name: "--list-tags",
      description:
        "List the available tags in the repository for the specified image",
    },
    optNoTrunc,
    optTlsVerify,
  ],
  args: { name: "term" },
};

const startCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Start one or more containers",
  options: [
    {
      name: "--all",
      description:
        "Start all the containers, default is only running containers",
    },
    {
      name: ["-a", "--attach"],
      description: "Attach container's STDOUT and STDERR",
    },
    optDetachKeys,
    optFilter,
    optInteractive,
    optLatest,
    optSigProxy,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.allDockerContainers,
    isVariadic: true,
  },
};

const statsCommand: Omit<Fig.Subcommand, "name"> = {
  description:
    "Display a live stream of one or more container's resource usage statistics",
  options: [
    optAll,
    optFormat9,
    {
      name: ["-i", "--interval"],
      description:
        "Time in seconds between stats reports, defaults to 5 seconds",
      args: { name: "seconds" },
    },
    optLatest,
    optNoReset,
    {
      name: "--no-stream",
      description:
        "Disable streaming stats and only pull the first result, default setting is false",
    },
    { name: "--no-trunc", description: "Do not truncate output" },
  ],
  args: {
    name: "container",
    generators: dockerGenerators.runningDockerContainers,
    isOptional: true,
    isVariadic: true,
  },
};

const stopCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Stop one or more running containers",
  options: [
    { name: ["-a", "--all"], description: "Stop all running containers" },
    optCidfile2,
    optFilter,
    optIgnore3,
    optLatest,
    optTime2,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.runningDockerContainers,
    isVariadic: true,
  },
};

const tagCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Add an additional name to a local image",
  args: [
    { name: "image", generators: dockerGenerators.allLocalImages },
    { name: "target-name", isVariadic: true },
  ],
};

const topCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Display the running processes of a container",
  options: [optLatest],
  args: [
    { name: "container", generators: dockerGenerators.runningDockerContainers },
    { name: "format-descriptors", isOptional: true, isVariadic: true },
  ],
};

const unmountCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Unmount a working container's root filesystem",
  options: [
    {
      name: ["-a", "--all"],
      description: "All of the currently mounted containers are unmounted",
    },
    {
      name: ["-f", "--force"],
      description:
        "Force the complete unmount of the specified mounted containers",
    },
    optLatest,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.allDockerContainers,
    isVariadic: true,
  },
};

const unpauseCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Unpause one or more containers",
  options: [
    { name: ["-a", "--all"], description: "Unpause all paused containers" },
    optCidfile2,
    optFilter,
    optLatest,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.pausedDockerContainers,
    isVariadic: true,
  },
};

const untagCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Remove one or more names from a locally-stored image",
  args: [
    { name: "image", generators: dockerGenerators.allLocalImages },
    { name: "name", isOptional: true, isVariadic: true },
  ],
};

const updateCommand: Omit<Fig.Subcommand, "name"> = {
  description: "Update the configuration of a given container",
  options: [
    optBlkioWeight,
    optBlkioWeightDevice,
    optCpuPeriod,
    optCpuQuota,
    optCpuShares,
    optCpus,
    optCpusetCpus,
    optCpusetMems,
    optDeviceReadBps,
    optDeviceReadIops,
    optDeviceWriteBps,
    optDeviceWriteIops,
    {
      name: ["-e", "--env"],
      description: "Add a value (e.g. env=value) to the container",
      args: { name: "env" },
      isRepeatable: true,
    },
    optHealthCmd,
    optHealthInterval,
    optHealthLogDestination,
    optHealthMaxLogCount,
    optHealthMaxLogSize,
    optHealthOnFailure,
    optHealthRetries,
    optHealthStartInterval,
    optHealthStartPeriod,
    optHealthStartupCmd,
    optHealthStartupInterval,
    optHealthStartupRetries,
    optHealthStartupSuccess,
    optHealthStartupTimeout,
    optHealthTimeout,
    optLatest,
    optMemory,
    optMemoryReservation,
    optMemorySwap,
    optMemorySwappiness,
    optNoHealthcheck,
    optPidsLimit,
    optRestart,
    optUlimit2,
    {
      name: "--unsetenv",
      description: "Unset environment variables from the container",
      args: { name: "env" },
      isRepeatable: true,
    },
  ],
  args: { name: "container", generators: dockerGenerators.allDockerContainers },
};

const waitCommand: Omit<Fig.Subcommand, "name"> = {
  description:
    "Wait on one or more containers to stop and print their exit codes",
  options: [
    {
      name: "--condition",
      description: "Container state or condition to wait for",
      args: {
        name: "state",
        suggestions: [
          "unknown",
          "configured",
          "created",
          "exited",
          "healthy",
          "initialized",
          "paused",
          "removing",
          "running",
          "stopped",
          "stopping",
          "unhealthy",
        ],
      },
      isRepeatable: true,
    },
    {
      name: "--exit-first-match",
      description:
        "Wait for exit of first container which matches conditions, ignore other ones",
    },
    {
      name: "--ignore",
      description:
        "Ignore errors when a specified container is missing and mark its return code as -1",
    },
    {
      name: ["-i", "--interval"],
      description: "Time interval to wait before polling for completion",
      args: { name: "duration" },
    },
    optLatest,
  ],
  args: {
    name: "container",
    generators: dockerGenerators.allDockerContainers,
    isVariadic: true,
  },
};

const completionSpec: Fig.Spec = {
  name: "podman",
  description: "Manage containers, pods, and images with Podman",
  subcommands: [
    {
      name: "artifact",
      description: "Manage OCI artifacts",
      subcommands: [
        {
          name: "add",
          description: "Add an OCI artifact to local artifact store",
          options: [
            optAnnotation,
            {
              name: ["-a", "--append"],
              description: "Append files to an existing artifact",
            },
            {
              name: "--file-type",
              description:
                "Set the media type of the artifact file instead of allowing detection to determine the type",
              args: { name: "string" },
            },
            {
              name: "--replace",
              description:
                "If an artifact with the same name already exists, replace and remove it",
            },
            {
              name: "--type",
              description: "Set a type for the artifact being added",
              args: { name: "string" },
            },
          ],
          args: [
            { name: "artifact" },
            { name: "path", template: "filepaths", isVariadic: true },
          ],
        },
        {
          name: "extract",
          description: "Extract an OCI artifact to a local path",
          options: [
            {
              name: "--digest",
              description:
                "When extracting blobs from the artifact only use the one with the specified digest",
              args: { name: "digest" },
            },
            {
              name: "--title",
              description:
                "When extracting blobs from the artifact only use the one with the specified title",
              args: { name: "title" },
            },
          ],
          args: [{ name: "artifact" }, { name: "path", template: "filepaths" }],
        },
        {
          name: "inspect",
          description: "Inspect an OCI artifact",
          options: [optFormat],
          args: { name: "artifact" },
        },
        {
          name: ["ls", "list"],
          description: "List OCI artifacts in local store",
          options: [
            optFormat2,
            optNoTrunc,
            optNoheading,
            {
              name: ["-q", "--quiet"],
              description: "Lists only the artifact digests",
            },
          ],
        },
        {
          name: "pull",
          description:
            "Pulls an artifact from a registry and stores it locally",
          options: [
            optAuthfile,
            optCertDir,
            optCreds,
            optDecryptionKey,
            optQuiet,
            optRetry,
            optRetryDelay,
            optTlsVerify,
          ],
          args: { name: "artifact" },
        },
        {
          name: "push",
          description:
            "Push an OCI artifact from local storage to an image registry",
          options: [
            optAuthfile,
            optCertDir,
            optCreds,
            optDigestfile,
            optQuiet,
            optRetry,
            optRetryDelay,
            optSignBy,
            optSignBySigstore,
            optSignBySigstorePrivateKey,
            optSignBySqFingerprint,
            optSignPassphraseFile,
            optTlsVerify,
          ],
          args: { name: "artifact" },
        },
        {
          name: ["rm", "remove"],
          description: "Remove one or more OCI artifacts from local storage",
          options: [
            {
              name: ["-a", "--all"],
              description: "Remove all artifacts in the local store",
            },
            optIgnore,
          ],
          args: { name: "artifact", isVariadic: true },
        },
      ],
    },
    { name: "attach", ...attachCommand },
    {
      name: "auto-update",
      description:
        "Auto update containers according to their auto-update policy",
      options: [
        optAuthfile,
        {
          name: "--dry-run",
          description:
            "Check for the availability of new images but do not perform any pull operation or restart any service or container",
        },
        optFilter,
        optFormat3,
        {
          name: "--rollback",
          description: "Rollback to previous image if update fails",
        },
        optTlsVerify,
      ],
    },
    { name: "build", ...buildCommand },
    { name: "commit", ...commitCommand },
    {
      name: "completion",
      description: "Generate shell completion scripts",
      options: [
        {
          name: ["-f", "--file"],
          description: "Write the generated output to a file",
          args: { name: "file", template: "filepaths" },
        },
        {
          name: "--no-desc",
          description: "Do not provide description in the completions",
        },
      ],
      args: {
        name: "shell",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "compose",
      description:
        "Run compose workloads via an external provider such as docker-compose or podman-compose",
      loadSpec: "docker-compose",
    },
    {
      name: "container",
      description: "Manage containers",
      subcommands: [
        { name: "attach", ...attachCommand },
        {
          name: "checkpoint",
          description: "Checkpoint one or more running containers",
          options: [
            {
              name: ["-a", "--all"],
              description: "Checkpoint all running containers",
            },
            {
              name: ["-c", "--compress"],
              description:
                "Specify the compression algorithm used for the checkpoint archive created with the --export, -e OPTION",
              args: { name: "value", suggestions: ["zstd", "none", "gzip"] },
            },
            {
              name: "--create-image",
              description: "Create a checkpoint image from a running container",
              args: { name: "image" },
            },
            {
              name: ["-e", "--export"],
              description: "Export the checkpoint to an archive",
              args: { name: "archive" },
            },
            {
              name: "--file-locks",
              description: "Checkpoint a container with file locks",
            },
            optIgnoreRootfs,
            {
              name: "--ignore-volumes",
              description:
                "This OPTION must be used in combination with the --export, -e OPTION",
            },
            {
              name: ["-k", "--keep"],
              description:
                "Keep all temporary log and statistics files created by CRIU during checkpointing",
            },
            optLatest2,
            {
              name: ["-R", "--leave-running"],
              description:
                "Leave the container running after checkpointing instead of stopping it",
            },
            {
              name: ["-P", "--pre-checkpoint"],
              description:
                "Dump the container's memory information only, leaving the container running",
            },
            {
              name: "--print-stats",
              description:
                "Print out statistics about checkpointing the container(s)",
            },
            {
              name: "--tcp-established",
              description:
                "Checkpoint a container with established TCP connections",
            },
            {
              name: "--with-previous",
              description:
                "Check out the container with previous criu image files in pre-dump",
            },
          ],
          args: {
            name: "container",
            generators: dockerGenerators.runningDockerContainers,
            isVariadic: true,
          },
        },
        {
          name: "cleanup",
          description: "Clean up the container's network and mountpoints",
          options: [
            { name: ["-a", "--all"], description: "Clean up all containers" },
            {
              name: "--exec",
              description: "Clean up an exec session for a single container",
              args: { name: "session" },
            },
            optLatest2,
            {
              name: "--rm",
              description: "After cleanup, remove the container entirely",
            },
            {
              name: "--rmi",
              description: "After cleanup, remove the image entirely",
            },
          ],
          args: {
            name: "container",
            generators: dockerGenerators.allDockerContainers,
            isVariadic: true,
          },
        },
        {
          name: "clone",
          description: "Create a copy of an existing container",
          options: [
            optBlkioWeight,
            optBlkioWeightDevice,
            optCpuPeriod,
            optCpuQuota,
            optCpuShares,
            {
              name: "--cpus",
              description:
                "Set a number of CPUs for the container that overrides the original containers CPU limits",
              args: { name: "number" },
            },
            optCpusetCpus,
            optCpusetMems,
            {
              name: "--destroy",
              description:
                "Remove the original container that we are cloning once used to mimic the configuration",
            },
            optDeviceReadBps,
            optDeviceWriteBps,
            {
              name: ["-f", "--force"],
              description:
                "Force removal of the original container that we are cloning",
            },
            optMemory,
            optMemoryReservation,
            optMemorySwap,
            optMemorySwappiness,
            {
              name: "--name",
              description: "Set a custom name for the cloned container",
            },
            {
              name: "--pod",
              description: "Clone the container in an existing pod",
              args: { name: "name" },
            },
            { name: "--run", description: "Run the new container" },
          ],
          args: [
            {
              name: "container",
              generators: dockerGenerators.allDockerContainers,
            },
            { name: "name" },
            { name: "image", generators: dockerGenerators.allLocalImages },
          ],
        },
        { name: "commit", ...commitCommand },
        { name: "cp", ...cpCommand },
        { name: "create", ...createCommand },
        {
          name: "diff",
          description: "Inspect changes on a container's filesystem",
          options: [optFormat5, optLatest],
          args: {
            name: "container",
            generators: dockerGenerators.allDockerContainers,
            isVariadic: true,
          },
        },
        { name: "exec", ...execCommand },
        {
          name: "exists",
          description: "Check if a container exists in local storage",
          options: [
            {
              name: "--external",
              description:
                "Check for external containers as well as Podman containers",
            },
          ],
          args: {
            name: "container",
            generators: dockerGenerators.allDockerContainers,
          },
        },
        { name: "export", ...exportCommand },
        { name: "init", ...initCommand },
        {
          name: "inspect",
          description: "Display a container's configuration",
          options: [optFormat, optLatest, optSize],
          args: {
            name: "container",
            generators: dockerGenerators.allDockerContainers,
            isVariadic: true,
          },
        },
        { name: "kill", ...killCommand },
        { name: "logs", ...logsCommand },
        { name: "mount", ...mountCommand },
        { name: "pause", ...pauseCommand },
        { name: "port", ...portCommand },
        {
          name: "prune",
          description:
            "Remove all stopped containers not associated with pods from local storage",
          options: [optFilter2, optForce],
        },
        { name: ["ps", "list", "ls"], ...psCommand },
        { name: "rename", ...renameCommand },
        { name: "restart", ...restartCommand },
        {
          name: "restore",
          description: "Restore one or more containers from a checkpoint",
          options: [
            {
              name: ["-a", "--all"],
              description: "Restore all checkpointed containers",
            },
            {
              name: "--file-locks",
              description: "Restore a container with file locks",
            },
            optIgnoreRootfs,
            {
              name: "--ignore-static-ip",
              description: "Ignore IP address set via --static-ip",
            },
            {
              name: "--ignore-static-mac",
              description: "Ignore MAC address set via --mac-address",
            },
            {
              name: "--ignore-volumes",
              description:
                "This option must be used in combination with the --import, -i option",
            },
            {
              name: ["-i", "--import"],
              description:
                "Import a checkpoint tar.gz file, which was exported by Podman",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: "--import-previous",
              description:
                "Import a pre-checkpoint tar.gz file which was exported by Podman",
              args: { name: "file", template: "filepaths" },
            },
            {
              name: ["-k", "--keep"],
              description: "Keep all temporary checkpoint files",
            },
            optLatest2,
            {
              name: ["-n", "--name"],
              description:
                "If a container is restored from a checkpoint tar.gz file it is possible to rename it with --name, -n",
              args: { name: "name" },
              isRepeatable: true,
            },
            {
              name: "--pod",
              description: "Restore a container into the pod name",
              args: { name: "name" },
            },
            {
              name: "--print-stats",
              description:
                "Print out statistics about restoring the container(s)",
            },
            {
              name: ["-p", "--publish"],
              description:
                "Publish a container's port, or a range of ports, to the host",
              args: { name: "port" },
              isRepeatable: true,
            },
            {
              name: "--tcp-close",
              description: "Restore a container and close all TCP connections",
            },
            {
              name: "--tcp-established",
              description:
                "Restore a container with established TCP connections",
            },
          ],
          args: {
            name: "container or image",
            generators: [
              dockerGenerators.allDockerContainers,
              dockerGenerators.allLocalImages,
            ],
            isVariadic: true,
          },
        },
        { name: "rm", ...rmCommand },
        { name: "run", ...runCommand },
        {
          name: "runlabel",
          description:
            "Execute a command as described by a container-image label",
          options: [
            optAuthfile,
            optCertDir,
            optCreds,
            {
              name: "--display",
              description:
                "Display the label's value of the image having populated its environment variables",
            },
            {
              name: ["-n", "--name"],
              description:
                "Use this name for creating content for the container",
              args: { name: "name" },
            },
            optQuiet2,
            {
              name: "--replace",
              description:
                "Replace existing container with a new one from the image",
            },
            optTlsVerify,
          ],
          args: [
            { name: "label" },
            { name: "image", generators: dockerGenerators.allLocalImages },
            { name: "arg", isOptional: true, isVariadic: true },
          ],
        },
        { name: "start", ...startCommand },
        { name: "stats", ...statsCommand },
        { name: "stop", ...stopCommand },
        { name: "top", ...topCommand },
        { name: ["unmount", "umount"], ...unmountCommand },
        { name: "unpause", ...unpauseCommand },
        { name: "update", ...updateCommand },
        { name: "wait", ...waitCommand },
      ],
    },
    { name: "cp", ...cpCommand },
    { name: "create", ...createCommand },
    {
      name: "diff",
      description: "Inspect changes on a container or image's filesystem",
      options: [optFormat5, optLatest],
      args: {
        name: "container or image",
        generators: [
          dockerGenerators.allDockerContainers,
          dockerGenerators.allLocalImages,
        ],
        isVariadic: true,
      },
    },
    { name: "events", ...eventsCommand },
    { name: "exec", ...execCommand },
    { name: "export", ...exportCommand },
    {
      name: "farm",
      description:
        "Farm out builds to machines running podman for different architectures",
      subcommands: [
        {
          name: "build",
          description:
            "Build images on farm nodes, then bundle them into a manifest list",
          options: [
            optAddHost,
            optAnnotation2,
            optAuthfile,
            optBuildArg,
            optBuildArgFile,
            optBuildContext,
            optCacheFrom,
            optCacheTo,
            optCacheTtl,
            optCapAdd,
            optCapDrop,
            optCertDir,
            optCgroupParent,
            optCgroupns,
            {
              name: "--cleanup",
              description:
                "Remove built images from farm nodes on success (Default: false)",
            },
            optCompatVolumes,
            optCompressionFormat,
            optCompressionLevel,
            optCppFlag,
            optCpuPeriod,
            optCpuQuota,
            optCpuShares,
            optCpusetCpus,
            optCpusetMems,
            optCreatedAnnotation,
            optCreds,
            optDecryptionKey,
            optDevice,
            optDisableCompression,
            optDns,
            optDnsOption,
            optDnsSearch,
            optEnv,
            {
              name: "--farm",
              description:
                "This option specifies the name of the farm to be used in the build process",
              args: { name: "string" },
            },
            optFile,
            optForceCompression,
            optForceRm,
            optFormat4,
            optFrom,
            optGroupAdd,
            optHooksDir,
            optHttpProxy,
            optIdentityLabel,
            optIgnorefile,
            optIidfile,
            optIidfileRaw,
            optInheritAnnotations,
            optInheritLabels,
            optIpc,
            optIsolation,
            optJobs,
            optLabel,
            optLayerLabel,
            optLayers,
            {
              name: ["-l", "--local"],
              description:
                "Build image on local machine as well as on farm nodes (Default: true)",
            },
            optLogfile,
            optMemory,
            optMemorySwap,
            optMount,
            optNetwork,
            optNoCache,
            optNoHostname,
            optNoHosts,
            optOmitHistory,
            optOsFeature,
            optOsVersion,
            optPid,
            {
              name: "--platforms",
              description:
                "Build only on farm nodes that match the given platforms",
              args: { name: "value" },
            },
            optPull,
            optQuiet,
            optRetry,
            optRetryDelay,
            optRewriteTimestamp,
            optRm,
            optRuntime,
            optRuntimeFlag,
            optSaveStages,
            optSbom,
            optSbomImageOutput,
            optSbomImagePurlOutput,
            optSbomMergeStrategy,
            optSbomOutput,
            optSbomPurlOutput,
            optSbomScannerCommand,
            optSbomScannerImage,
            optSecret,
            optSecurityOpt,
            optShmSize,
            optSkipUnusedStages,
            optSourceDateEpoch,
            optSourcePolicyFile,
            optSquash,
            optSquashAll,
            optSsh,
            optStageLabels,
            optTag,
            optTarget,
            optTimestamp,
            optTlsVerify,
            optUlimit,
            optUnsetannotation,
            optUnsetenv,
            optUnsetlabel,
            optUserns,
            optUsernsGidMap,
            optUsernsGidMapGroup,
            optUsernsUidMap,
            optUsernsUidMapUser,
            optUts,
            optVolume,
          ],
          args: { name: "context", template: "folders", isOptional: true },
        },
        {
          name: "create",
          description: "Create a new farm",
          args: [
            { name: "name" },
            { name: "connections", isOptional: true, isVariadic: true },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List the existing farms",
          options: [
            optFormat3,
            optNoheading,
            {
              name: ["-q", "--quiet"],
              description: "Print farm output in quiet mode",
            },
          ],
        },
        {
          name: ["remove", "rm"],
          description: "Delete one or more farms",
          options: [{ name: ["-a", "--all"], description: "Remove all farms" }],
          args: { name: "farm", isOptional: true, isVariadic: true },
        },
        {
          name: "update",
          description: "Update an existing farm",
          options: [
            {
              name: ["-a", "--add"],
              description: "Add new connections to an existing farm",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: ["-d", "--default"],
              description: "Set the current farm as the default",
            },
            {
              name: ["-r", "--remove"],
              description:
                "Remove one or more connections from an existing farm",
              args: { name: "strings" },
              isRepeatable: true,
            },
          ],
          args: { name: "farm" },
        },
      ],
    },
    {
      name: "generate",
      description:
        "Generate structured data based on containers, pods or volumes",
      subcommands: [
        { name: "kube", ...kubeGenerateCommand },
        {
          name: "spec",
          description: "Generate Specgen JSON based on containers or pods",
          options: [
            {
              name: ["-c", "--compact"],
              description: "Print the output in a compact, one line format",
            },
            {
              name: ["-f", "--filename"],
              description: "Output to the given file",
              args: { name: "filename", template: "filepaths" },
            },
            {
              name: ["-n", "--name"],
              description:
                "Rename the pod or container, so that it does not conflict with the existing entity",
            },
          ],
          args: {
            name: "container or pod",
            generators: [
              dockerGenerators.allDockerContainers,
              dockerGenerators.listDockerPods,
            ],
          },
        },
        {
          name: "systemd",
          description: "Generate systemd unit file(s) for a container or pod",
          deprecated: true,
          options: [
            {
              name: "--after",
              description: "Add dependencies order to the generated unit file",
              args: { name: "dependency-name" },
              isRepeatable: true,
            },
            {
              name: "--container-prefix",
              description: "Set the systemd unit name prefix for containers",
              args: { name: "prefix" },
            },
            {
              name: ["-e", "--env"],
              description:
                "Set environment variables to the systemd unit files",
              args: { name: "env" },
              isRepeatable: true,
            },
            {
              name: ["-f", "--files"],
              description: "Generate files instead of printing to stdout",
            },
            {
              name: "--format",
              description:
                "Print the created units in the specified format (json)",
              args: { name: "format" },
            },
            {
              name: ["-n", "--name"],
              description:
                "Use the name of the container for the start, stop, and description in the unit file",
            },
            {
              name: "--new",
              description:
                "This option yields unit files that do not expect containers and pods to exist",
            },
            {
              name: "--no-header",
              description:
                "Do not generate the header including meta data such as the Podman version and the timestamp",
            },
            {
              name: "--pod-prefix",
              description: "Set the systemd unit name prefix for pods",
              args: { name: "prefix" },
            },
            {
              name: "--requires",
              description: "Set the systemd unit requires (Requires=) option",
              args: { name: "dependency-name" },
              isRepeatable: true,
            },
            {
              name: "--restart-policy",
              description: "Set the systemd restart policy",
              args: { name: "policy" },
            },
            {
              name: "--restart-sec",
              description: "Set the systemd service restartsec value",
              args: { name: "time" },
            },
            {
              name: "--separator",
              description:
                "Set the systemd unit name separator between the name/id of a container/pod and the prefix",
              args: { name: "separator" },
            },
            {
              name: "--start-timeout",
              description:
                "Override the default start timeout for the container with the given value in seconds",
              args: { name: "value" },
            },
            {
              name: "--stop-timeout",
              description:
                "Override the default stop timeout for the container with the given value in seconds",
              args: { name: "value" },
            },
            {
              name: "--template",
              description:
                "Add template specifiers to run multiple services from the systemd unit file",
            },
            {
              name: "--wants",
              description:
                "Add the systemd unit wants (Wants=) option, that this service is (weak) dependent on",
              args: { name: "dependency-name" },
              isRepeatable: true,
            },
          ],
          args: {
            name: "container or pod",
            generators: [
              dockerGenerators.allDockerContainers,
              dockerGenerators.listDockerPods,
            ],
          },
        },
      ],
    },
    {
      name: "healthcheck",
      description: "Manage healthchecks for containers",
      subcommands: [
        {
          name: "run",
          description: "Run a container healthcheck",
          options: [
            {
              name: "--ignore-result",
              description:
                "Exit with code 0 regardless of healthcheck result or if the container is still in startup period",
            },
          ],
          args: {
            name: "container",
            generators: dockerGenerators.runningDockerContainers,
          },
        },
      ],
    },
    { name: "history", ...historyCommand },
    {
      name: "image",
      description: "Manage images",
      subcommands: [
        { name: "build", ...buildCommand },
        {
          name: "diff",
          description: "Inspect changes on an image's filesystem",
          options: [optFormat5],
          args: {
            name: "image",
            generators: dockerGenerators.allLocalImages,
            isVariadic: true,
          },
        },
        {
          name: "exists",
          description: "Check if an image exists in local storage",
          args: { name: "image", generators: dockerGenerators.allLocalImages },
        },
        { name: "history", ...historyCommand },
        { name: "import", ...importCommand },
        {
          name: "inspect",
          description: "Display an image's configuration",
          options: [optFormat],
          args: {
            name: "image",
            generators: dockerGenerators.allLocalImages,
            isVariadic: true,
          },
        },
        { name: ["list", "ls"], ...imagesCommand },
        { name: "load", ...loadCommand },
        {
          name: "mount",
          description: "Mount an image's root filesystem",
          options: [
            { name: ["-a", "--all"], description: "Mount all images" },
            {
              name: "--format",
              description:
                "Print the mounted images in specified format (json)",
              args: { name: "format" },
            },
          ],
          args: {
            name: "image",
            generators: dockerGenerators.allLocalImages,
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "prune",
          description: "Remove all unused images from the local store",
          options: [
            {
              name: ["-a", "--all"],
              description:
                "Remove dangling images and images that have no associated containers",
            },
            {
              name: "--build-cache",
              description:
                "Remove persistent build cache created for --mount=type=cache",
            },
            {
              name: "--external",
              description:
                "Remove images even when they are used by external containers (e.g., build containers)",
            },
            optFilter2,
            optForce,
          ],
        },
        { name: "pull", ...pullCommand },
        { name: "push", ...pushCommand },
        { name: "rm", ...rmiCommand },
        { name: "save", ...saveCommand },
        {
          name: "scp",
          description: "Securely copy an image from one host to another",
          options: [
            {
              name: "--compression-format",
              description:
                "Compress the transfer archive with the given algorithm before it is sent over the network",
              args: { name: "value", suggestions: ["gzip", "zstd", "none"] },
            },
            {
              name: "--compression-level",
              description:
                "Compression level to use, 1-9 for gzip and 1-19 for zstd",
              args: { name: "level" },
            },
            {
              name: "--format",
              description:
                "Format passed to podman save when creating the transfer archive",
              args: { name: "format" },
            },
            optQuiet,
          ],
          args: [
            { name: "image", generators: dockerGenerators.allLocalImages },
            { name: "host", isOptional: true },
          ],
        },
        { name: "search", ...searchCommand },
        {
          name: "sign",
          description: "Create a signature for an image",
          options: [
            {
              name: ["-a", "--all"],
              description:
                "Sign all the manifests of the multi-architecture image (default false)",
            },
            optAuthfile,
            optCertDir,
            {
              name: ["-d", "--directory"],
              description: "Store the signatures in the specified directory",
              args: { name: "dir", template: "folders" },
            },
            {
              name: "--sign-by",
              description: "Override the default identity of the signature",
              args: { name: "identity" },
            },
          ],
          args: {
            name: "image",
            generators: dockerGenerators.allLocalImages,
            isVariadic: true,
          },
        },
        { name: "tag", ...tagCommand },
        {
          name: "tree",
          description: "Print layer hierarchy of an image in a tree format",
          options: [
            {
              name: "--whatrequires",
              description:
                "Show all child images and layers of the specified image",
            },
          ],
          args: { name: "image", generators: dockerGenerators.allLocalImages },
        },
        {
          name: "trust",
          description: "Manage container registry image trust policy",
          subcommands: [
            {
              name: "set",
              description:
                "Set default trust policy or a new trust policy for a registry",
              options: [
                {
                  name: ["-f", "--pubkeysfile"],
                  description:
                    "Path to an exported public key on the local system",
                  args: { name: "path", template: "filepaths" },
                  isRepeatable: true,
                },
                {
                  name: "--signature-policy",
                  description:
                    "Path to the signature policy file (policy.json) that Podman updates",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: ["-t", "--type"],
                  description: "Trust type for this policy entry",
                  args: {
                    name: "value",
                    suggestions: [
                      "signedBy",
                      "sigstoreSigned",
                      "accept",
                      "reject",
                    ],
                  },
                },
              ],
              args: {
                name: "registry",
                description: "Registry or repository scope",
              },
            },
            {
              name: "show",
              description: "Display trust policy for the system",
              options: [
                {
                  name: ["-j", "--json"],
                  description: "Output trust as JSON for machine parsing",
                },
                {
                  name: ["-n", "--noheading"],
                  description: "Omit the table headings from the listing",
                },
                {
                  name: "--raw",
                  description: "Output trust policy file as raw JSON",
                },
                {
                  name: "--signature-policy",
                  description:
                    "Path to the signature policy file (policy.json) to display",
                  args: { name: "path", template: "filepaths" },
                },
              ],
              args: { name: "registry", isOptional: true },
            },
          ],
        },
        {
          name: ["unmount", "umount"],
          description: "Unmount an image's root filesystem",
          options: [
            {
              name: ["-a", "--all"],
              description: "All of the currently mounted images are unmounted",
            },
            {
              name: ["-f", "--force"],
              description:
                "Force the unmounting of specified images' root file system, even if other processes have mounted it",
            },
          ],
          args: {
            name: "image",
            generators: dockerGenerators.allLocalImages,
            isVariadic: true,
          },
        },
        { name: "untag", ...untagCommand },
      ],
    },
    { name: "images", ...imagesCommand },
    { name: "import", ...importCommand },
    { name: "info", ...infoCommand },
    { name: "init", ...initCommand },
    {
      name: "inspect",
      description:
        "Display artifact, container, image, volume, network, or pod's configuration",
      options: [
        optFormat,
        optLatest,
        optSize,
        {
          name: ["-t", "--type"],
          description: "Return JSON for the specified type",
          args: { name: "type" },
        },
      ],
      args: {
        name: "object",
        generators: [
          dockerGenerators.allDockerContainers,
          dockerGenerators.allLocalImages,
          dockerGenerators.listDockerVolumes,
          dockerGenerators.listDockerNetworks,
          dockerGenerators.listDockerPods,
        ],
        isVariadic: true,
      },
    },
    { name: "kill", ...killCommand },
    {
      name: "kube",
      description:
        "Play containers, pods or volumes based on a structured input file",
      subcommands: [
        {
          name: "apply",
          description:
            "Apply Kubernetes YAML based on containers, pods, or volumes to a Kubernetes cluster",
          options: [
            {
              name: "--ca-cert-file",
              description:
                "The path to the CA cert file for the Kubernetes cluster",
              args: { name: "value", template: "filepaths" },
            },
            {
              name: ["-f", "--file"],
              description:
                "Path to the kubernetes yaml file to deploy onto the kubernetes cluster",
              args: { name: "kube-yaml-filepath", template: "filepaths" },
            },
            {
              name: ["-k", "--kubeconfig"],
              description:
                "Path to the kubeconfig file for the Kubernetes cluster",
              args: { name: "kubeconfig-filepath" },
            },
            {
              name: "--ns",
              description:
                "The namespace to deploy the workload to on the Kubernetes cluster",
              args: { name: "namespace" },
            },
            {
              name: ["-s", "--service"],
              description:
                "Used to create a service for the corresponding container or pod being deployed to the cluster",
            },
          ],
          args: {
            name: "container, pod or volume",
            generators: [
              dockerGenerators.allDockerContainers,
              dockerGenerators.listDockerPods,
              dockerGenerators.listDockerVolumes,
            ],
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "down",
          description: "Remove containers and pods based on Kubernetes YAML",
          options: [
            {
              name: "--force",
              description:
                "Remove all resources, including volumes, when calling podman kube down",
            },
          ],
          args: {
            name: "file",
            template: "filepaths",
            isOptional: true,
            isVariadic: true,
          },
        },
        { name: "generate", ...kubeGenerateCommand },
        {
          name: "play",
          description:
            "Create containers, pods and volumes based on Kubernetes YAML",
          options: [
            {
              name: "--annotation",
              description: "Add an annotation to the container or pod",
              args: { name: "value" },
              isRepeatable: true,
            },
            optAuthfile,
            {
              name: "--build",
              description:
                "Build images even if they are found in the local storage",
            },
            optCertDir,
            {
              name: "--configmap",
              description:
                "Pathname of a YAML file containing a kubernetes configmap",
              args: { name: "path", template: "filepaths" },
              isRepeatable: true,
            },
            {
              name: "--context-dir",
              description:
                "Use path as the build context directory for each image",
              args: { name: "path", template: "folders" },
            },
            optCreds,
            {
              name: "--force",
              description:
                "Tear down the volumes linked to the PersistentVolumeClaims as part of --down",
            },
            {
              name: "--ip",
              description: "Assign a static ip address to the pod",
              args: { name: "ip-address" },
            },
            {
              name: ["-l", "--label"],
              description:
                "Add a label to the pods, persistent volume claims, and secrets created by podman kube play",
              args: { name: "value" },
              isRepeatable: true,
            },
            {
              name: "--log-driver",
              description: "Set logging driver for all created containers",
              args: {
                name: "driver",
                suggestions: [
                  "k8s-file",
                  "journald",
                  "none",
                  "passthrough",
                  "passthrough-tty",
                ],
              },
            },
            optLogOpt,
            {
              name: "--mac-address",
              description: "Assign a static mac address to the pod",
              args: { name: "mac-address" },
            },
            {
              name: "--multiple-pods",
              description:
                "Allow creation of multiple pod replicas from a Deployment",
            },
            optNetwork3,
            optNoHostname,
            optNoHosts2,
            {
              name: "--no-pod-prefix",
              description: "Do not prefix container name with pod name",
            },
            {
              name: "--publish",
              description:
                "Define or override a port definition in the YAML file",
              args: { name: "value" },
              isRepeatable: true,
            },
            {
              name: "--publish-all",
              description:
                "Setting this option to true will expose all ports to the host, even if only specified via containerPort in the K8 YAML",
            },
            optQuiet2,
            {
              name: "--replace",
              description:
                "Tears down the pods created by a previous run of kube play and recreates the pods",
            },
            {
              name: "--seccomp-profile-root",
              description:
                'Directory path for seccomp profiles (default: "/var/lib/kubelet/seccomp")',
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--start",
              description:
                "Start the pod after creating it, set to false to only create it",
            },
            optTlsVerify,
            optUserns2,
            {
              name: "--validate",
              description:
                "Control how unrecognized YAML fields and unsupported objects are handled",
              args: { name: "mode" },
            },
            {
              name: ["-w", "--wait"],
              description: "Run pods and containers in the foreground",
            },
          ],
          args: {
            name: "file",
            template: "filepaths",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    { name: "load", ...loadCommand },
    {
      name: "login",
      description: "Log in to a container registry",
      options: [
        optAuthfile,
        optCertDir,
        optCompatAuthFile,
        {
          name: "--get-login",
          description: "Return the logged-in user for the registry",
        },
        {
          name: ["-p", "--password"],
          description: "Password for registry",
          args: { name: "password" },
        },
        {
          name: "--password-stdin",
          description: "Take the password from stdin",
        },
        {
          name: "--secret",
          description:
            "Read the password for the registry from the podman secret name",
          args: { name: "name" },
          isRepeatable: true,
        },
        optTlsVerify,
        {
          name: ["-u", "--username"],
          description: "Username for registry",
          args: { name: "username" },
        },
        {
          name: ["-v", "--verbose"],
          description: "Print detailed information about credential store",
        },
      ],
      args: { name: "registry", isOptional: true },
    },
    {
      name: "logout",
      description: "Log out of a container registry",
      options: [
        {
          name: ["-a", "--all"],
          description:
            "Remove the cached credentials for all registries in the auth file",
        },
        optAuthfile,
        optCompatAuthFile,
      ],
      args: { name: "registry", isOptional: true },
    },
    { name: "logs", ...logsCommand },
    {
      name: "machine",
      description: "Manage Podman's virtual machine",
      subcommands: [
        {
          name: "cp",
          description:
            "Securely copy contents between the host and the virtual machine",
          options: [
            {
              name: ["-q", "--quiet"],
              description: "Suppress copy status output",
            },
          ],
          args: [{ name: "src_path" }, { name: "dest_path" }],
        },
        {
          name: "info",
          description: "Display machine host info",
          options: [optFormat6],
        },
        {
          name: "init",
          description: "Initialize a new virtual machine",
          options: [
            optCpus,
            {
              name: "--disk-size",
              description: "Size of the disk for the guest VM in GiB",
              args: { name: "number" },
            },
            {
              name: "--ignition-path",
              description: "Fully qualified path of the ignition file",
              args: { name: "string" },
            },
            {
              name: "--image",
              description:
                "Fully qualified registry, path, or URL to a VM image",
              args: { name: "string" },
            },
            optImportNativeCa,
            {
              name: ["-m", "--memory"],
              description: "Memory (in MiB)",
              args: { name: "number" },
            },
            {
              name: "--now",
              description:
                "Start the virtual machine immediately after it has been initialized",
            },
            {
              name: "--playbook",
              description:
                "Add the provided Ansible playbook to the machine and execute it after the first boot",
              args: { name: "string" },
            },
            {
              name: "--provider",
              description: "Specify the provider for the machine to be created",
              args: { name: "string" },
            },
            optRootful,
            {
              name: ["-s", "--swap"],
              description: "Swap (in MiB)",
              args: { name: "number" },
            },
            {
              name: "--timezone",
              description: "Set the timezone for the machine and containers",
              args: { name: "string" },
            },
            optTlsVerify,
            optUpdateConnection,
            {
              name: "--usb",
              description:
                "Assign a USB device from the host to the VM via USB passthrough",
              args: { name: "value" },
              isRepeatable: true,
            },
            optUserModeNetworking,
            {
              name: "--username",
              description:
                "Username to use for executing commands in remote VM",
              args: { name: "string" },
            },
            {
              name: ["-v", "--volume"],
              description: "Mounts a volume from source to target",
              args: { name: "value" },
              isRepeatable: true,
            },
          ],
          args: { name: "name", isOptional: true },
        },
        {
          name: "inspect",
          description: "Inspect one or more virtual machines",
          options: [optFormat2],
          args: { name: "machine", isOptional: true, isVariadic: true },
        },
        {
          name: ["list", "ls"],
          description: "List virtual machines",
          options: [
            optFormat3,
            optNoheading,
            {
              name: ["-q", "--quiet"],
              description: "Only print the name of the machine",
            },
          ],
        },
        {
          name: "os",
          description: "Manage a Podman virtual machine's OS",
          subcommands: [
            {
              name: "apply",
              description: "Apply an OCI image to a Podman Machine's OS",
              options: [optRestart2],
              args: [
                { name: "uri or image" },
                { name: "machine", isOptional: true },
              ],
            },
            {
              name: "upgrade",
              description: "Upgrade a Podman Machine's OS",
              options: [
                {
                  name: ["-n", "--dry-run"],
                  description:
                    "Only perform a dry-run of checking for the upgrade",
                },
                {
                  name: ["-f", "--format"],
                  description: "Define a structured output format",
                  args: { name: "string" },
                },
                optRestart2,
              ],
              args: { name: "name", isOptional: true },
            },
          ],
        },
        {
          name: "reset",
          description: "Reset Podman machines and environment",
          options: [
            {
              name: ["-f", "--force"],
              description: "Reset without confirmation",
            },
          ],
        },
        {
          name: "restart",
          description: "Restart a virtual machine",
          options: [
            optNoInfo,
            {
              name: ["-q", "--quiet"],
              description: "Suppress machine restarting status output",
            },
          ],
          args: { name: "machine", isOptional: true },
        },
        {
          name: "rm",
          description: "Remove a virtual machine",
          options: [
            {
              name: ["-f", "--force"],
              description: "Stop and delete without confirmation",
            },
            {
              name: "--save-ignition",
              description: "Do not delete the generated ignition file",
            },
            { name: "--save-image", description: "Do not delete the VM image" },
          ],
          args: { name: "machine", isOptional: true },
        },
        {
          name: "set",
          description: "Set a virtual machine setting",
          options: [
            optCpus,
            {
              name: "--disk-size",
              description: "Size of the disk for the guest VM in GB",
              args: { name: "number" },
            },
            optImportNativeCa,
            {
              name: ["-m", "--memory"],
              description: "Memory (in MB)",
              args: { name: "number" },
            },
            optRootful,
            {
              name: "--usb",
              description: "Assign a USB device from the host to the VM",
              args: { name: "value" },
              isRepeatable: true,
            },
            optUserModeNetworking,
          ],
          args: { name: "name", isOptional: true },
        },
        {
          name: "ssh",
          description: "SSH into a virtual machine",
          options: [
            {
              name: "--username",
              description: "Username to use when SSH-ing into the VM",
              args: { name: "name" },
            },
          ],
          args: [
            { name: "name", isOptional: true },
            { name: "command", isOptional: true },
            { name: "arg", isOptional: true, isVariadic: true },
          ],
        },
        {
          name: "start",
          description: "Start a virtual machine",
          options: [
            optNoInfo,
            {
              name: ["-q", "--quiet"],
              description: "Suppress machine starting status output",
            },
            optUpdateConnection,
          ],
          args: { name: "machine", isOptional: true },
        },
        {
          name: "stop",
          description: "Stop a virtual machine",
          args: { name: "machine", isOptional: true },
        },
      ],
    },
    {
      name: "manifest",
      description: "Create and manipulate manifest lists and image indexes",
      subcommands: [
        {
          name: "add",
          description:
            "Add an image or artifact to a manifest list or image index",
          options: [
            {
              name: "--all",
              description:
                "Add all of the list's images if the image is a list",
            },
            optAnnotation,
            optArch2,
            {
              name: "--artifact",
              description:
                "Create an artifact manifest and add it to the image index",
            },
            {
              name: "--artifact-config",
              description: "Artifact configuration file",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--artifact-config-type",
              description: "Artifact configuration media type",
              args: { name: "type" },
            },
            {
              name: "--artifact-exclude-titles",
              description:
                "When creating an artifact manifest and adding it to the image index",
            },
            {
              name: "--artifact-layer-type",
              description: "Artifact layer media type",
              args: { name: "type" },
            },
            {
              name: "--artifact-subject",
              description: "Artifact subject reference",
              args: { name: "imagename" },
            },
            {
              name: "--artifact-type",
              description: "Override the artifactType value",
              args: { name: "type" },
            },
            optAuthfile,
            optCertDir,
            optCreds,
            optFeatures,
            optOs2,
            optOsVersion2,
            optTlsVerify,
            optVariant2,
          ],
          args: [
            { name: "list", generators: dockerGenerators.allLocalImages },
            {
              name: "image or artifact",
              generators: dockerGenerators.allLocalImages,
              isVariadic: true,
            },
          ],
        },
        {
          name: "annotate",
          description:
            "Add and update information about an image or artifact in a manifest list or image index",
          options: [
            optAnnotation,
            optArch2,
            optFeatures,
            {
              name: "--index",
              description:
                "Treats arguments to the --annotation option as annotation values to be set on the image index itself rather than on an entry",
            },
            optOs2,
            {
              name: "--os-features",
              description:
                "Specify the OS features list which the list or index records as requirements for the image",
              args: { name: "feature" },
              isRepeatable: true,
            },
            optOsVersion2,
            {
              name: "--subject",
              description: "Set the subject to which the image index refers",
              args: { name: "imagename" },
            },
            optVariant2,
          ],
          args: [
            { name: "list", generators: dockerGenerators.allLocalImages },
            {
              name: "image or artifact",
              generators: dockerGenerators.allLocalImages,
            },
          ],
        },
        {
          name: "create",
          description: "Create a manifest list or image index",
          options: [
            {
              name: "--all",
              description:
                "Add all of the lists' images if the images to add are lists",
            },
            {
              name: ["-a", "--amend"],
              description:
                "Modify an existing list if one with the desired name already exists",
            },
            {
              name: "--annotation",
              description: "Set an annotation on the newly-created image index",
              args: { name: "value" },
              isRepeatable: true,
            },
            optTlsVerify,
          ],
          args: [
            { name: "list" },
            {
              name: "image",
              generators: dockerGenerators.allLocalImages,
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
        {
          name: "exists",
          description:
            "Check if the given manifest list exists in local storage",
          args: { name: "manifest" },
        },
        {
          name: "inspect",
          description: "Display a manifest list or image index",
          options: [optAuthfile, optTlsVerify],
          args: { name: "image", generators: dockerGenerators.allLocalImages },
        },
        {
          name: "push",
          description: "Push a manifest list or image index to a registry",
          options: [
            {
              name: "--add-compression",
              description:
                "Add instances with selected compression while pushing",
              args: { name: "compression" },
              isRepeatable: true,
            },
            { name: "--all", description: "Also push the images in the list" },
            optAuthfile,
            optCertDir,
            optCompressionFormat,
            optCompressionLevel,
            optCreds,
            optDigestfile,
            optForceCompression,
            {
              name: ["-f", "--format"],
              description:
                "Manifest list type (oci or v2s2) to use when pushing the list (default is oci)",
              args: { name: "format", suggestions: ["oci", "v2s2"] },
            },
            {
              name: ["-q", "--quiet"],
              description:
                "When writing the manifest, suppress progress output",
            },
            {
              name: "--remove-signatures",
              description: "Don't copy signatures when pushing images",
            },
            optRetry,
            optRetryDelay,
            {
              name: "--rm",
              description:
                "Delete the manifest list or image index from local storage if pushing succeeds",
            },
            {
              name: "--sign-by",
              description:
                'Sign the pushed images with a "simple signing" signature using the specified key',
              args: { name: "fingerprint" },
            },
            optSignBySigstore,
            {
              name: "--sign-by-sigstore-private-key",
              description:
                "Sign the pushed images with a sigstore signature using a private key at the specified path",
              args: { name: "path", template: "filepaths" },
            },
            optSignBySqFingerprint,
            optSignPassphraseFile,
            optTlsVerify,
          ],
          args: [
            { name: "list", generators: dockerGenerators.allLocalImages },
            { name: "destination" },
          ],
        },
        {
          name: "remove",
          description: "Remove an item from a manifest list or image index",
          args: [
            { name: "list", generators: dockerGenerators.allLocalImages },
            { name: "digest" },
          ],
        },
        {
          name: "rm",
          description: "Remove manifest list or image index from local storage",
          options: [
            {
              name: ["-i", "--ignore"],
              description:
                "If a specified manifest does not exist in the local storage, ignore it and do not throw an error",
            },
          ],
          args: {
            name: "list",
            generators: dockerGenerators.allLocalImages,
            isVariadic: true,
          },
        },
      ],
    },
    { name: "mount", ...mountCommand },
    {
      name: "network",
      description: "Manage Podman networks",
      subcommands: [
        {
          name: "connect",
          description: "Connect a container to a network",
          options: [
            {
              name: "--alias",
              description: "Add network-scoped alias for the container",
              args: { name: "name" },
              isRepeatable: true,
            },
            {
              name: "--ip",
              description:
                "Set a static ipv4 address for this container on this network",
              args: { name: "address" },
            },
            {
              name: "--ip6",
              description:
                "Set a static ipv6 address for this container on this network",
              args: { name: "address" },
            },
            {
              name: "--mac-address",
              description:
                "Set a static mac address for this container on this network",
              args: { name: "address" },
            },
          ],
          args: [
            {
              name: "network",
              generators: dockerGenerators.listDockerNetworks,
            },
            {
              name: "container",
              generators: dockerGenerators.allDockerContainers,
            },
          ],
        },
        {
          name: "create",
          description: "Create a Podman network",
          options: [
            { name: "--disable-dns", description: "Disable dns plugin" },
            optDns,
            {
              name: ["-d", "--driver"],
              description: "Driver to manage the network",
              args: { name: "driver" },
            },
            {
              name: "--gateway",
              description: "Define a gateway for the subnet",
              args: { name: "ip" },
              isRepeatable: true,
            },
            {
              name: "--ignore",
              description:
                "Ignore the create request if a network with the same name already exists instead of failing",
            },
            {
              name: "--interface-name",
              description:
                "This option maps the network_interface option in the network config, see podman network inspect",
              args: { name: "name" },
            },
            {
              name: "--internal",
              description:
                "Restrict external access of this network when using a bridge network",
            },
            {
              name: "--ip-range",
              description: "Allocate container IP from a range",
              args: { name: "range" },
              isRepeatable: true,
            },
            {
              name: "--ipam-driver",
              description:
                "Set the ipam driver (IP Address Management Driver) for the network",
              args: { name: "driver" },
            },
            {
              name: "--ipv6",
              description: "Enable IPv6 (Dual Stack) networking",
            },
            {
              name: "--label",
              description: "Set one or more OCI labels on the network",
              args: { name: "value" },
              isRepeatable: true,
            },
            optOpt,
            {
              name: "--route",
              description:
                "A static route in the format <destination in CIDR notation>,<gateway|type>,<route metric (optional)>",
              args: { name: "route" },
              isRepeatable: true,
            },
            {
              name: "--subnet",
              description: "The subnet in CIDR notation",
              args: { name: "subnet" },
              isRepeatable: true,
            },
          ],
          args: { name: "name", isOptional: true },
        },
        {
          name: "disconnect",
          description: "Disconnect a container from a network",
          options: [
            {
              name: ["-f", "--force"],
              description: "Force the container to disconnect from a network",
            },
          ],
          args: [
            {
              name: "network",
              generators: dockerGenerators.listDockerNetworks,
            },
            {
              name: "container",
              generators: dockerGenerators.allDockerContainers,
            },
          ],
        },
        {
          name: "exists",
          description: "Check if the given network exists",
          args: {
            name: "network",
            generators: dockerGenerators.listDockerNetworks,
          },
        },
        {
          name: "inspect",
          description:
            "Display the network configuration for one or more networks",
          options: [
            {
              name: ["-f", "--format"],
              description:
                "Pretty-print networks to JSON or using a Go template",
              args: { name: "format" },
            },
          ],
          args: {
            name: "network",
            generators: dockerGenerators.listDockerNetworks,
            isVariadic: true,
          },
        },
        {
          name: ["ls", "list"],
          description: "Display a summary of networks",
          options: [
            {
              name: ["-f", "--filter"],
              description: "Provide filter values",
              args: { name: "value" },
              isRepeatable: true,
            },
            optFormat3,
            {
              name: "--no-trunc",
              description: "Do not truncate the network ID",
            },
            optNoheading,
            {
              name: ["-q", "--quiet"],
              description:
                "The quiet option restricts the output to only the network names",
            },
          ],
        },
        {
          name: "prune",
          description: "Remove all unused networks",
          options: [optFilter4, optForce2],
        },
        {
          name: "reload",
          description: "Reload network configuration for containers",
          options: [
            {
              name: ["-a", "--all"],
              description: "Reload network configuration of all containers",
            },
            optLatest,
          ],
          args: {
            name: "container",
            generators: dockerGenerators.allDockerContainers,
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: ["rm", "remove"],
          description: "Remove one or more networks",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "The force option removes all containers that use the named network",
            },
            {
              name: ["-i", "--ignore"],
              description:
                "Ignore the error when a specified network does not exist",
            },
            {
              name: ["-t", "--time"],
              description:
                "Seconds to wait before forcibly stopping the running containers that are using the specified network",
              args: { name: "seconds" },
            },
          ],
          args: {
            name: "network",
            generators: dockerGenerators.listDockerNetworks,
            isVariadic: true,
          },
        },
        {
          name: "update",
          description: "Update an existing Podman network",
          options: [
            {
              name: "--dns-add",
              description:
                "Accepts array of DNS resolvers and add it to the existing list of resolvers configured for a network",
              args: { name: "strings" },
              isRepeatable: true,
            },
            {
              name: "--dns-drop",
              description: "Remove network level nameservers",
              args: { name: "strings" },
              isRepeatable: true,
            },
          ],
          args: {
            name: "network",
            generators: dockerGenerators.listDockerNetworks,
          },
        },
      ],
    },
    { name: "pause", ...pauseCommand },
    {
      name: "pod",
      description: "Management tool for groups of containers, called pods",
      subcommands: [
        {
          name: "clone",
          description: "Create a copy of an existing pod",
          options: [
            optBlkioWeight,
            optBlkioWeightDevice,
            optCgroupParent2,
            optCpuShares,
            {
              name: "--cpus",
              description:
                "Set a number of CPUs for the pod that overrides the original pods CPU limits",
              args: { name: "number" },
            },
            optCpusetCpus,
            optCpusetMems,
            {
              name: "--destroy",
              description:
                "Remove the original pod that we are cloning once used to mimic the configuration",
            },
            optDevice2,
            optDeviceReadBps,
            optDeviceWriteBps,
            optGidmap2,
            optGpus,
            optHostname2,
            optInfraCommand,
            optInfraConmonPidfile,
            optInfraName,
            optLabel3,
            optLabelFile,
            optMemory,
            optMemorySwap,
            {
              name: ["-n", "--name"],
              description: "Set a custom name for the cloned pod",
            },
            optPid3,
            optRestart,
            optSecurityOpt,
            optShmSize,
            optShmSizeSystemd,
            {
              name: "--start",
              description:
                "When set to true, this flag starts the newly created pod after the clone process has completed",
            },
            optSubgidname,
            optSubuidname,
            optSysctl2,
            optUidmap2,
            optUserns3,
            optUts3,
            optVolume2,
            optVolumesFrom,
          ],
          args: [
            { name: "pod", generators: dockerGenerators.listDockerPods },
            { name: "name" },
          ],
        },
        {
          name: "create",
          description: "Create a new pod",
          options: [
            {
              name: "--add-host",
              description:
                "Add a custom host-to-IP mapping to the pod's /etc/hosts file",
              args: { name: "value" },
              isRepeatable: true,
            },
            optBlkioWeight,
            optBlkioWeightDevice,
            optCgroupParent2,
            optCpuShares,
            {
              name: "--cpus",
              description: "Set the total number of CPUs delegated to the pod",
              args: { name: "amount" },
            },
            optCpusetCpus,
            optCpusetMems,
            optDevice2,
            optDeviceReadBps,
            optDeviceWriteBps,
            {
              name: "--dns",
              description:
                "Set custom DNS servers in the /etc/resolv.conf file that is shared between all containers in the pod",
              args: { name: "ipaddr" },
              isRepeatable: true,
            },
            {
              name: "--dns-option",
              description:
                "Set custom DNS options in the /etc/resolv.conf file that is shared between all containers in the pod",
              args: { name: "option" },
              isRepeatable: true,
            },
            optDnsSearch2,
            {
              name: "--exit-policy",
              description:
                "Set the exit policy of the pod when the last container exits",
              args: { name: "value", suggestions: ["continue", "stop"] },
            },
            optGidmap2,
            optGpus,
            optHostname2,
            optHostsFile,
            {
              name: "--infra",
              description:
                "Create an infra container and associate it with the pod",
            },
            optInfraCommand,
            optInfraConmonPidfile,
            {
              name: "--infra-image",
              description:
                "The custom image that is used for the infra container",
              args: { name: "image" },
            },
            optInfraName,
            {
              name: "--ip",
              description:
                "Specify a static IPv4 address for the pod, for example 10.88.64.128",
              args: { name: "ipv4" },
              isRepeatable: true,
            },
            {
              name: "--ip6",
              description:
                "Specify a static IPv6 address for the pod, for example fd46:db93:aa76:ac37::10",
              args: { name: "ipv6" },
              isRepeatable: true,
            },
            optLabel3,
            optLabelFile,
            {
              name: "--mac-address",
              description:
                "Pod network interface MAC address (e.g. 92:d0:c6:0a:29:33) This option can only be used",
              args: { name: "address" },
              isRepeatable: true,
            },
            optMemory,
            optMemorySwap,
            {
              name: ["-n", "--name"],
              description: "Assign a name to the pod",
              args: { name: "name" },
            },
            optNetwork3,
            {
              name: "--network-alias",
              description:
                "Add a network-scoped alias for the pod, setting the alias for all networks that the container joins",
              args: { name: "alias" },
              isRepeatable: true,
            },
            optNoHostname,
            optNoHosts2,
            optPid3,
            {
              name: "--pod-id-file",
              description: "Write the pod ID to the file",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: ["-p", "--publish"],
              description:
                "Publish a container's port, or range of ports, within this pod to the host",
              args: { name: "value" },
              isRepeatable: true,
            },
            {
              name: "--replace",
              description:
                "If another pod with the same name already exists, replace and remove it",
            },
            optRestart,
            optSecurityOpt,
            {
              name: "--share",
              description:
                "A comma-separated list of kernel namespaces to share",
              args: {
                name: "namespace",
                suggestions: [
                  "ipc",
                  "net",
                  "pid",
                  "user",
                  "uts",
                  "cgroup",
                  "none",
                ],
              },
            },
            {
              name: "--share-parent",
              description:
                "Set the pod's cgroup as the cgroup parent for all containers joining the pod",
            },
            optShmSize,
            optShmSizeSystemd,
            optSubgidname,
            optSubuidname,
            optSysctl2,
            optUidmap2,
            optUserns3,
            optUts3,
            optVolume2,
            optVolumesFrom,
          ],
          args: { name: "name", isOptional: true },
        },
        {
          name: "exists",
          description: "Check if a pod exists in local storage",
          args: { name: "pod", generators: dockerGenerators.listDockerPods },
        },
        {
          name: "inspect",
          description: "Display information describing a pod",
          options: [optFormat7, optLatest3],
          args: {
            name: "pod",
            generators: dockerGenerators.listDockerPods,
            isVariadic: true,
          },
        },
        {
          name: "kill",
          description:
            "Kill the main process of each container in one or more pods",
          options: [
            {
              name: ["-a", "--all"],
              description:
                "Sends signal to all containers associated with a pod",
            },
            optLatest3,
            {
              name: ["-s", "--signal"],
              description: "Signal to send to the containers in the pod",
              args: { name: "signal" },
            },
          ],
          args: {
            name: "pod",
            generators: dockerGenerators.listDockerPods,
            isVariadic: true,
          },
        },
        {
          name: "logs",
          description: "Display logs for pod with one or more containers",
          options: [
            optColor,
            {
              name: ["-c", "--container"],
              description:
                "Filter logs by container name or id which belongs to pod",
              args: { name: "string" },
            },
            optFollow,
            optLatest3,
            optNames,
            optSince,
            optTail,
            optTimestamps,
            optUntil,
          ],
          args: { name: "pod", generators: dockerGenerators.listDockerPods },
        },
        {
          name: "pause",
          description: "Pause one or more pods",
          options: [
            { name: ["-a", "--all"], description: "Pause all pods" },
            {
              name: ["-l", "--latest"],
              description:
                "Instead of providing the pod name or ID, pause the last created pod",
            },
          ],
          args: {
            name: "pod",
            generators: dockerGenerators.listDockerPods,
            isVariadic: true,
          },
        },
        {
          name: "prune",
          description: "Remove all stopped pods and their containers",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Force removal of all running pods and their containers",
            },
          ],
        },
        {
          name: ["ps", "ls", "list"],
          description: "Print out information about pods",
          options: [
            { name: "--ctr-ids", description: "Display the container IDs" },
            { name: "--ctr-names", description: "Display the container names" },
            {
              name: "--ctr-status",
              description: "Display the container statuses",
            },
            optFilter3,
            optFormat8,
            {
              name: ["-l", "--latest"],
              description: "Show the latest pod created (all states)",
            },
            {
              name: ["--namespace", "--ns"],
              description: "Display namespace information of the pod",
            },
            optNoTrunc,
            optNoheading,
            {
              name: ["-q", "--quiet"],
              description: "Print the numeric IDs of the pods only",
            },
            {
              name: "--sort",
              description:
                "Sort by created, ID, name, status, or number of containers",
              args: {
                name: "string",
                suggestions: ["created", "id", "name", "status", "number"],
              },
            },
          ],
        },
        {
          name: "restart",
          description: "Restart one or more pods",
          options: [
            { name: ["-a", "--all"], description: "Restarts all pods" },
            {
              name: ["-l", "--latest"],
              description:
                "Instead of providing the pod name or ID, restart the last created pod",
            },
          ],
          args: {
            name: "pod",
            generators: dockerGenerators.listDockerPods,
            isVariadic: true,
          },
        },
        {
          name: "rm",
          description: "Remove one or more stopped pods and containers",
          options: [
            { name: ["-a", "--all"], description: "Remove all pods" },
            {
              name: ["-f", "--force"],
              description:
                "Stop running containers and delete all stopped containers before removal of pod",
            },
            optIgnore2,
            optLatest3,
            optPodIdFile2,
            optTime,
          ],
          args: {
            name: "pod",
            generators: dockerGenerators.listDockerPods,
            isVariadic: true,
          },
        },
        {
          name: "start",
          description: "Start one or more pods",
          options: [
            { name: ["-a", "--all"], description: "Starts all pods" },
            optLatest3,
            optPodIdFile2,
          ],
          args: {
            name: "pod",
            generators: dockerGenerators.listDockerPods,
            isVariadic: true,
          },
        },
        {
          name: "stats",
          description:
            "Display a live stream of resource usage stats for containers in one or more pods",
          options: [
            optAll,
            optFormat9,
            optLatest3,
            optNoReset,
            {
              name: "--no-stream",
              description:
                "Disable streaming pod stats and only pull the first result, default setting is false",
            },
          ],
          args: {
            name: "pod",
            generators: dockerGenerators.listDockerPods,
            isOptional: true,
            isVariadic: true,
          },
        },
        {
          name: "stop",
          description: "Stop one or more pods",
          options: [
            { name: ["-a", "--all"], description: "Stops all pods" },
            optIgnore2,
            optLatest3,
            optPodIdFile2,
            optTime,
          ],
          args: {
            name: "pod",
            generators: dockerGenerators.listDockerPods,
            isVariadic: true,
          },
        },
        {
          name: "top",
          description: "Display the running processes of containers in a pod",
          options: [optLatest3],
          args: [
            { name: "pod", generators: dockerGenerators.listDockerPods },
            { name: "format-descriptors", isOptional: true, isVariadic: true },
          ],
        },
        {
          name: "unpause",
          description: "Unpause one or more pods",
          options: [
            { name: ["-a", "--all"], description: "Unpause all pods" },
            {
              name: ["-l", "--latest"],
              description:
                "Instead of providing the pod name or ID, unpause the last created pod",
            },
          ],
          args: {
            name: "pod",
            generators: dockerGenerators.listDockerPods,
            isVariadic: true,
          },
        },
      ],
    },
    { name: "port", ...portCommand },
    { name: "ps", ...psCommand },
    { name: "pull", ...pullCommand },
    { name: "push", ...pushCommand },
    {
      name: "quadlet",
      description: "Allows users to manage Quadlets",
      subcommands: [
        {
          name: "install",
          description: "Install a quadlet file or quadlet application",
          options: [
            {
              name: "--application",
              description:
                "Group quadlets and associated file in a directory named after the application",
              args: { name: "string" },
            },
            optReloadSystemd,
            {
              name: ["-r", "--replace"],
              description:
                "Replace the Quadlet installation even if the generated unit file already exists (default false)",
            },
          ],
          args: [
            { name: "quadlet-path-or-url", template: "filepaths" },
            {
              name: "files-path-or-url",
              template: "filepaths",
              isOptional: true,
              isVariadic: true,
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List installed quadlets",
          options: [
            {
              name: ["-f", "--filter"],
              description: "Filter output based on conditions give",
              args: { name: "filter" },
              isRepeatable: true,
            },
            {
              name: "--format",
              description: "Pretty-print output to JSON or using a Go template",
              args: { name: "format" },
            },
            optNoheading,
          ],
        },
        {
          name: ["print", "cat"],
          description: "Display the contents of a quadlet",
          args: { name: "quadlet" },
        },
        {
          name: "rm",
          description: "Removes an installed quadlet",
          options: [
            {
              name: ["-a", "--all"],
              description: "Remove all Quadlets for the current user",
            },
            {
              name: ["-f", "--force"],
              description:
                "Remove running Quadlets (in case of uninstantiated template quadlets, stop its instances)",
            },
            optIgnore,
            {
              name: "--recursive",
              description:
                "Required when removing applications (default false)",
            },
            optReloadSystemd,
          ],
          args: {
            name: "quadlet or application",
            isOptional: true,
            isVariadic: true,
          },
        },
      ],
    },
    { name: "rename", ...renameCommand },
    { name: "restart", ...restartCommand },
    { name: "rm", ...rmCommand },
    { name: "rmi", ...rmiCommand },
    { name: "run", ...runCommand },
    { name: "save", ...saveCommand },
    { name: "search", ...searchCommand },
    {
      name: "secret",
      description: "Manage podman secrets",
      subcommands: [
        {
          name: "create",
          description: "Create a new secret",
          options: [
            {
              name: ["-d", "--driver"],
              description: "Specify the secret driver (default file)",
              args: { name: "driver" },
            },
            {
              name: "--driver-opts",
              description: "Specify driver specific options",
              args: { name: "value" },
              isRepeatable: true,
            },
            {
              name: "--env",
              description: "Read secret data from environment variable",
            },
            {
              name: "--ignore",
              description:
                "If a secret with the same name exists, ignore and do not create a new secret",
            },
            {
              name: ["-l", "--label"],
              description:
                "Set metadata for the secret (e.g., --label mykey=value)",
              args: { name: "label" },
              isRepeatable: true,
            },
            {
              name: "--replace",
              description:
                "If existing secret with the same name already exists, update the secret",
            },
          ],
          args: [{ name: "name" }, { name: "file", template: "filepaths" }],
        },
        {
          name: "exists",
          description: "Check if the given secret exists",
          args: {
            name: "secret",
            generators: dockerGenerators.listDockerSecrets,
          },
        },
        {
          name: "inspect",
          description: "Display detailed information on one or more secrets",
          options: [
            {
              name: ["-f", "--format"],
              description: "Format secret output using Go template",
              args: { name: "format" },
            },
            {
              name: "--pretty",
              description: "Print inspect output in human-readable format",
            },
            { name: "--showsecret", description: "Display secret data" },
          ],
          args: {
            name: "secret",
            generators: dockerGenerators.listDockerSecrets,
            isVariadic: true,
          },
        },
        {
          name: ["ls", "list"],
          description: "List all available secrets",
          options: [
            {
              name: ["-f", "--filter"],
              description: "Filter output based on conditions given",
              args: { name: "value" },
              isRepeatable: true,
            },
            {
              name: "--format",
              description: "Format secret output using Go template",
              args: { name: "format" },
            },
            optNoheading,
            { name: ["-q", "--quiet"], description: "Print secret IDs only" },
          ],
        },
        {
          name: "rm",
          description: "Remove one or more secrets",
          options: [
            {
              name: ["-a", "--all"],
              description: "Remove all existing secrets",
            },
            {
              name: ["-i", "--ignore"],
              description:
                "Ignore errors when specified secrets are not present",
            },
          ],
          args: {
            name: "secret",
            generators: dockerGenerators.listDockerSecrets,
            isVariadic: true,
          },
        },
      ],
    },
    { name: "start", ...startCommand },
    { name: "stats", ...statsCommand },
    { name: "stop", ...stopCommand },
    {
      name: "system",
      description: "Manage podman",
      subcommands: [
        {
          name: "check",
          description:
            "Perform consistency checks on image and container storage",
          options: [
            {
              name: ["-f", "--force"],
              description:
                "When attempting to remove damaged images, also remove containers which depend on those images",
            },
            {
              name: ["-m", "--max"],
              description:
                "When considering layers which are not used by any images or containers",
              args: { name: "duration" },
            },
            {
              name: ["-q", "--quick"],
              description: "Skip checks which are known to be time-consuming",
            },
            {
              name: ["-r", "--repair"],
              description: "Remove inconsistent images",
            },
          ],
        },
        {
          name: "connection",
          description: "Manage the destination(s) for Podman service(s)",
          subcommands: [
            {
              name: "add",
              description: "Record destination for the Podman service",
              options: [
                {
                  name: ["-d", "--default"],
                  description:
                    "Make the new destination the default for this user",
                },
                {
                  name: "--identity",
                  description: "Path to ssh identity file",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: ["-p", "--port"],
                  description: "Port for ssh destination",
                  args: { name: "port" },
                },
                {
                  name: "--socket-path",
                  description:
                    "Path to the Podman service unix domain socket on the ssh destination host",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--tls-ca",
                  description: "Path to TLS certificate Authority PEM file",
                  args: { name: "path", template: "filepaths" },
                },
                {
                  name: "--tls-cert",
                  description: "Path to TLS client certificate PEM file",
                  args: { name: "path", template: "filepaths" },
                },
                optTlsKey,
              ],
              args: [{ name: "name" }, { name: "destination" }],
            },
            {
              name: "default",
              description:
                "Set named destination as default for the Podman service",
              args: { name: "name" },
            },
            {
              name: ["list", "ls"],
              description: "List the destination for the Podman service(s)",
              options: [
                optFormat7,
                {
                  name: ["-q", "--quiet"],
                  description: "Only show connection names",
                },
              ],
            },
            {
              name: ["remove", "rm"],
              description: "Delete named destination",
              options: [
                {
                  name: ["-a", "--all"],
                  description: "Remove all connections",
                },
              ],
              args: { name: "name" },
            },
            {
              name: ["rename", "mv"],
              description: "Rename the destination for Podman service",
              args: [{ name: "old" }, { name: "new" }],
            },
          ],
        },
        {
          name: "df",
          description: "Show podman disk usage",
          options: [
            {
              name: "--format",
              description: "Pretty-print images using a Go template or JSON",
              args: { name: "format" },
            },
            {
              name: ["-v", "--verbose"],
              description: "Show detailed information on space usage",
            },
          ],
        },
        { name: "events", ...eventsCommand },
        {
          name: "hyperv-prep",
          description:
            "A Windows administrator command to prepare a host that is going to run Hyper-V based Podman machines",
          options: [
            {
              name: ["-f", "--force"],
              description: "Skip confirmation prompts during reset",
            },
            {
              name: "--mounts",
              description: "Number of VSock entries for mount purpose",
              args: { name: "number" },
            },
            {
              name: "--reset",
              description:
                "Remove all Podman vsock registry entries and optionally remove user from Hyper-V Administrators group",
            },
            {
              name: "--status",
              description:
                "Show vsock registry entries and Hyper-V group membership status",
            },
          ],
        },
        { name: "info", ...infoCommand },
        {
          name: "migrate",
          description: "Migrate existing containers to a new podman version",
          options: [
            {
              name: "--migrate-db",
              description: "Migrate from the legacy BoltDB database to SQLite",
            },
            {
              name: "--new-runtime",
              description: "Set a new OCI runtime for all containers",
              args: { name: "runtime" },
            },
          ],
        },
        {
          name: "prune",
          description:
            "Remove all unused pods, containers, images, networks, and volume data",
          options: [
            {
              name: ["-a", "--all"],
              description:
                "Recursively remove all unused pods, containers, images, networks, and volume data",
            },
            {
              name: "--build",
              description:
                "Removes any build containers that were created during the build",
            },
            {
              name: "--external",
              description:
                "Tries to clean up remainders of previous containers or layers that are not references in the storage json files",
            },
            optFilter2,
            optForce2,
            {
              name: "--volumes",
              description: "Prune volumes currently unused by any container",
            },
          ],
        },
        {
          name: "renumber",
          description:
            "Migrate lock numbers to handle a change in maximum number of locks",
        },
        {
          name: "reset",
          description: "Reset storage back to initial state",
          options: [optForce2],
        },
        {
          name: "service",
          description: "Run an API service",
          options: [
            {
              name: "--cors",
              description: "CORS headers to inject to the HTTP response",
              args: { name: "string" },
            },
            {
              name: ["-t", "--time"],
              description: "The time until the session expires in seconds",
              args: { name: "number" },
            },
            {
              name: "--tls-cert",
              description: "PEM file containing TLS serving certificate",
              args: { name: "path", template: "filepaths" },
            },
            {
              name: "--tls-client-ca",
              description:
                "Path to a PEM file containing the TLS certificate bundle to validate client connections against",
              args: { name: "path", template: "filepaths" },
            },
            optTlsKey,
          ],
          args: { name: "uri", isOptional: true },
        },
      ],
    },
    { name: "tag", ...tagCommand },
    { name: "top", ...topCommand },
    { name: ["unmount", "umount"], ...unmountCommand },
    { name: "unpause", ...unpauseCommand },
    {
      name: "unshare",
      description: "Run a command inside of a modified user namespace",
      options: [
        {
          name: "--rootless-netns",
          description:
            "Join the rootless network namespace used for netavark networking",
        },
      ],
      args: { name: "command", isOptional: true, isCommand: true },
    },
    { name: "untag", ...untagCommand },
    { name: "update", ...updateCommand },
    {
      name: "version",
      description: "Display the Podman version information",
      options: [optFormat6],
    },
    {
      name: "volume",
      description: "Simple management tool for volumes",
      subcommands: [
        {
          name: "create",
          description: "Create a new volume",
          options: [
            {
              name: ["-d", "--driver"],
              description: "Specify the volume driver name (default local)",
              args: { name: "driver" },
            },
            {
              name: "--gid",
              description: "Set the GID that the volume will be created as",
              args: { name: "gid" },
            },
            {
              name: "--ignore",
              description:
                "Don't fail if the named volume already exists, instead just print the name",
            },
            {
              name: ["-l", "--label"],
              description:
                "Set metadata for the volume (e.g., --label mykey=value)",
              args: { name: "label" },
              isRepeatable: true,
            },
            optOpt,
            {
              name: "--uid",
              description: "Set the UID that the volume will be created as",
              args: { name: "uid" },
            },
          ],
          args: { name: "name", isOptional: true },
        },
        {
          name: "exists",
          description: "Check if the given volume exists",
          args: {
            name: "volume",
            generators: dockerGenerators.listDockerVolumes,
          },
        },
        {
          name: "export",
          description: "Export volume to external tar",
          options: [optOutput],
          args: {
            name: "volume",
            generators: dockerGenerators.listDockerVolumes,
          },
        },
        {
          name: "import",
          description: "Import tarball contents into an existing podman volume",
          args: [
            { name: "volume", generators: dockerGenerators.listDockerVolumes },
            { name: "source", template: "filepaths", isOptional: true },
          ],
        },
        {
          name: "inspect",
          description: "Get detailed information on one or more volumes",
          options: [
            { name: ["-a", "--all"], description: "Inspect all volumes" },
            {
              name: ["-f", "--format"],
              description: "Format volume output using Go template",
              args: { name: "format" },
            },
          ],
          args: {
            name: "volume",
            generators: dockerGenerators.listDockerVolumes,
            isVariadic: true,
          },
        },
        {
          name: ["ls", "list"],
          description: "List all the available volumes",
          options: [
            {
              name: ["-f", "--filter"],
              description: "Filter what volumes are shown in the output",
              args: { name: "filter" },
              isRepeatable: true,
            },
            {
              name: "--format",
              description: "Format volume output using Go template",
              args: { name: "format" },
            },
            optNoheading,
            {
              name: ["-q", "--quiet"],
              description: "Print volume output in quiet mode",
            },
          ],
        },
        {
          name: "mount",
          description: "Mount a volume filesystem",
          args: {
            name: "volume",
            generators: dockerGenerators.listDockerVolumes,
            isVariadic: true,
          },
        },
        {
          name: "prune",
          description: "Remove unused volumes",
          options: [
            {
              name: ["-a", "--all"],
              description: "Remove all unused volumes (anonymous and named)",
            },
            {
              name: "--dry-run",
              description:
                "Show which volumes would be pruned without removing them",
            },
            optFilter4,
            optForce2,
          ],
        },
        {
          name: "reload",
          description: "Reload all volumes from volumes plugins",
        },
        {
          name: "rename",
          description: "Rename a volume",
          args: [
            { name: "volume", generators: dockerGenerators.listDockerVolumes },
            { name: "new-name" },
          ],
        },
        {
          name: ["rm", "remove"],
          description: "Remove one or more volumes",
          options: [
            { name: ["-a", "--all"], description: "Remove all volumes" },
            {
              name: ["-f", "--force"],
              description: "Remove a volume by force",
            },
            {
              name: ["-t", "--time"],
              description:
                "Seconds to wait before forcibly stopping running containers that are using the specified volume",
              args: { name: "seconds" },
            },
          ],
          args: {
            name: "volume",
            generators: dockerGenerators.listDockerVolumes,
            isVariadic: true,
          },
        },
        {
          name: ["unmount", "umount"],
          description: "Unmount a volume",
          args: {
            name: "volume",
            generators: dockerGenerators.listDockerVolumes,
            isVariadic: true,
          },
        },
      ],
    },
    { name: "wait", ...waitCommand },
    { name: "help", description: "Help about any command" },
  ],
  options: [
    {
      name: "--cdi-spec-dir",
      description: "Set the CDI spec directory path",
      args: { name: "path", template: "folders" },
      isRepeatable: true,
      isPersistent: true,
    },
    {
      name: "--cgroup-manager",
      description: "Cgroup manager to use",
      args: { name: "manager", suggestions: ["cgroupfs", "systemd"] },
      isPersistent: true,
    },
    {
      name: "--conmon",
      description: "Path of the conmon binary",
      args: { name: "path", template: "filepaths" },
      isPersistent: true,
    },
    {
      name: "--events-backend",
      description: "Events backend to use",
      args: { name: "type", suggestions: ["file", "journald", "none"] },
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Help for podman",
      isPersistent: true,
    },
    {
      name: "--hooks-dir",
      description: "Set the OCI hooks directory path",
      args: { name: "path", template: "folders" },
      isRepeatable: true,
      isPersistent: true,
    },
    {
      name: "--imagestore",
      description: "Path of the imagestore where images are stored",
      args: { name: "path", template: "folders" },
      isPersistent: true,
    },
    {
      name: "--log-level",
      description: "Log messages above specified level",
      args: {
        name: "level",
        suggestions: [
          "trace",
          "debug",
          "info",
          "warn",
          "warning",
          "error",
          "fatal",
          "panic",
        ],
      },
      isPersistent: true,
    },
    {
      name: "--network-config-dir",
      description: "Path of the configuration directory for networks",
      args: { name: "directory", template: "folders" },
      isPersistent: true,
    },
    {
      name: "--root",
      description:
        "Path to the graph root directory where images, containers, etc. are stored",
      args: { name: "value", template: "folders" },
      isPersistent: true,
    },
    {
      name: "--runroot",
      description:
        "Path to the run directory where all state information is stored",
      args: { name: "value", template: "folders" },
      isPersistent: true,
    },
    {
      name: "--runtime",
      description: "Path to the OCI-compatible binary used to run containers",
      args: { name: "value", template: "filepaths" },
      isPersistent: true,
    },
    {
      name: "--runtime-flag",
      description: "Add global flags for the container runtime",
      args: { name: "flag" },
      isRepeatable: true,
      isPersistent: true,
    },
    {
      name: "--storage-driver",
      description:
        "Select which storage driver is used to manage storage of images and containers",
      args: { name: "value" },
      isPersistent: true,
    },
    {
      name: "--storage-opt",
      description: "Used to pass an option to the storage driver",
      args: { name: "value" },
      isRepeatable: true,
      isPersistent: true,
    },
    {
      name: "--syslog",
      description:
        "Output podman-internal logs to syslog as well as the console",
      isPersistent: true,
    },
    {
      name: "--tmpdir",
      description: "Path to the tmp directory for libpod state content",
      args: { name: "path", template: "folders" },
      isPersistent: true,
    },
    {
      name: "--transient-store",
      description: "Enable transient container storage",
      isPersistent: true,
    },
    {
      name: "--volumepath",
      description:
        "Path to the volume directory in which volume data is stored",
      args: { name: "value", template: "folders" },
      isPersistent: true,
    },
    {
      name: "--config",
      description: "Path to directory containing authentication config file",
      args: { name: "path", template: "folders" },
    },
    {
      name: ["-c", "--connection"],
      description: "Connection to use for remote Podman service",
      args: { name: "name" },
    },
    {
      name: "--identity",
      description: "Path to SSH identity file",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--module",
      description: "Load the containers.conf(5) module",
      args: { name: "path", template: "filepaths" },
      isRepeatable: true,
    },
    {
      name: "--out",
      description: "Send output (stdout) from podman to a file",
      args: { name: "path", template: "filepaths" },
    },
    { name: ["-r", "--remote"], description: "Access remote Podman service" },
    {
      name: "--ssh",
      description: "Define the ssh mode",
      args: { name: "value", suggestions: ["golang", "native"] },
    },
    {
      name: "--tls-ca",
      description:
        "Path to a PEM file containing the certificate authority bundle to verify the server's certificate against",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--tls-cert",
      description:
        "Path to a PEM file containing the TLS client certificate to present to the server",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--tls-details",
      description: "Path to a containers-tls-details.yaml(5) file",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--tls-key",
      description:
        "Path to a PEM file containing the private key matching the TLS client certificate",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "--url",
      description: "URL to access Podman service",
      args: { name: "value" },
    },
    { name: ["-v", "--version"], description: "Print the version" },
  ],
};

export default completionSpec;
