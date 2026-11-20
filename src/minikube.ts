// minikube v1.39.0 (GitHub release kubernetes/minikube, tag v1.39.0 of 2026-09-02, Homebrew formula agrees; 2026-11-20).
// Source: the cobra command tree in cmd/minikube/cmd/** and the generated command reference
// site/content/en/docs/commands/*.md at tag v1.39.0, read statically from a source checkout; the
// binary was not run. Global flags are the inherited-flags block of that reference.

const configProperties = [
  "driver",
  "vm-driver",
  "container-runtime",
  "feature-gates",
  "v",
  "cpus",
  "disk-size",
  "host-only-cidr",
  "memory",
  "log_dir",
  "kubernetes-version",
  "iso-url",
  "WantUpdateNotification",
  "WantBetaUpdateNotification",
  "ReminderWaitPeriodInHours",
  "WantNoneDriverWarning",
  "WantVirtualBoxDriverWarning",
  "profile",
  "bootstrapper",
  "insecure-registry",
  "hyperv-virtual-switch",
  "disable-driver-mounts",
  "cache",
  "EmbedCerts",
  "native-ssh",
  "rootless",
  "MaxAuditEntries",
  "dns-servers",
  "mdns",
];

// Addon names from `minikube addons list --output json`, enabled state when a profile exists
const addonsGenerator: Fig.Generator = {
  script: ["minikube", "addons", "list", "--output", "json"],
  postProcess: (out) => {
    try {
      const addons: Record<string, { Status?: string } | undefined> =
        JSON.parse(out);
      return Object.entries(addons).map(([name, info]) => ({
        name,
        description: info?.Status === "enabled" ? "Enabled" : undefined,
        icon: "fig://icon?type=package",
      }));
    } catch {
      return [];
    }
  },
};

const completionSpec: Fig.Spec = {
  name: "minikube",
  description:
    "Minikube provisions and manages local Kubernetes clusters optimized for development workflows",
  subcommands: [
    // basic commands
    {
      name: "start",
      description: "Starts a local Kubernetes cluster",
      options: [
        {
          name: "--addons",
          description: "Enable one or more addons, in a comma-separated format",
          isRepeatable: true,
          args: {
            name: "addons",
            generators: addonsGenerator,
          },
        },
        {
          name: "--apiserver-ips",
          description:
            "A set of apiserver IP Addresses which are used in the generated certificate for kubernetes",
          isRepeatable: true,
          args: {
            name: "ip",
          },
        },
        {
          name: "--apiserver-name",
          description:
            "The authoritative apiserver hostname for apiserver certificates and connectivity",
          args: {
            name: "name",
          },
        },
        {
          name: "--apiserver-names",
          description:
            "A set of apiserver names which are used in the generated certificate for kubernetes",
          isRepeatable: true,
          args: {
            name: "names",
          },
        },
        {
          name: "--apiserver-port",
          description: "The apiserver listening port",
          args: {
            name: "port",
          },
        },
        {
          name: "--auto-pause-interval",
          description:
            "Duration of inactivity before the minikube VM is paused",
          args: {
            name: "duration",
          },
        },
        {
          name: "--auto-update-drivers",
          description:
            "If set, automatically updates drivers to the latest version",
          requiresSeparator: true,
          args: {
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
        {
          name: "--base-image",
          description: "The base image to use for docker/podman drivers",
          args: {
            name: "image",
          },
        },
        {
          name: "--binary-mirror",
          description:
            "Location to fetch kubectl, kubelet, & kubeadm binaries from",
          args: {
            name: "url",
          },
        },
        {
          name: "--cache-images",
          description:
            "If true, cache docker images for the current bootstrapper and load them into the machine",
          requiresSeparator: true,
          args: {
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
        {
          name: "--cert-expiration",
          description:
            "Duration until minikube certificate expiration, defaults to three years (26280h)",
          args: {
            name: "duration",
          },
        },
        {
          name: "--cni",
          description: "CNI plug-in to use, or the path to a CNI manifest",
          args: {
            name: "cni",
            suggestions: [
              "auto",
              "bridge",
              "calico",
              "cilium",
              "flannel",
              "kindnet",
            ],
            template: "filepaths",
          },
        },
        {
          name: ["--container-runtime", "-c"],
          description: "The container runtime to be used",
          args: {
            name: "runtime",
            suggestions: ["docker", "cri-o", "containerd"],
          },
        },
        {
          name: "--cpus",
          description: "Number of CPUs allocated to Kubernetes",
          args: {
            name: "cpus",
            suggestions: ["max", "no-limit"],
          },
        },
        {
          name: "--cri-socket",
          description: "The cri socket path to be used",
          args: {
            name: "socket",
          },
        },
        {
          name: "--delete-on-failure",
          description:
            "If set, delete the current cluster if start fails and try again",
        },
        {
          name: "--disable-coredns-log",
          description: "If set, disable CoreDNS verbose logging",
        },
        {
          name: "--disable-driver-mounts",
          description:
            "Disables the filesystem mounts provided by the hypervisors",
        },
        {
          name: "--disable-metrics",
          description:
            "If set, disables metrics reporting (CPU and memory usage), this can improve CPU usage",
        },
        {
          name: "--disable-optimizations",
          description:
            "If set, disables optimizations that are set for local Kubernetes",
        },
        {
          name: "--disk-size",
          description:
            "Disk size allocated to the minikube VM (format: <number>[<unit>], where unit = b, k, m or g)",
          args: {
            name: "size",
          },
        },
        {
          name: "--dns-domain",
          description:
            "The cluster dns domain name used in the Kubernetes cluster",
          args: {
            name: "domain",
          },
        },
        {
          name: "--dns-proxy",
          description:
            "Enable proxy for NAT DNS requests (virtualbox driver only)",
        },
        {
          name: "--dns-servers",
          description:
            "Static DNS server IP addresses for the VM (VM drivers only)",
          isRepeatable: true,
          args: {
            name: "servers",
          },
        },
        {
          name: "--docker-env",
          description: "Environment variables to pass to the Docker daemon",
          isRepeatable: true,
          args: {
            name: "key=value",
          },
        },
        {
          name: "--docker-opt",
          description: "Specify arbitrary flags to pass to the Docker daemon",
          isRepeatable: true,
          args: {
            name: "key=value",
          },
        },
        {
          name: "--download-only",
          description:
            "If true, only download and cache files for later use - don't install or start anything",
        },
        {
          name: ["--driver", "-d"],
          description: "Driver to run Kubernetes in",
          args: {
            name: "driver",
            suggestions: [
              "docker",
              "podman",
              "kvm2",
              "qemu2",
              "virtualbox",
              "vmware",
              "hyperkit",
              "hyperv",
              "parallels",
              "vfkit",
              "krunkit",
              "ssh",
              "none",
            ],
          },
        },
        {
          name: "--dry-run",
          description:
            "Dry-run mode. Validates configuration, but does not mutate system state",
        },
        {
          name: "--embed-certs",
          description: "If true, will embed the certs in kubeconfig",
        },
        {
          name: "--enable-default-cni",
          description: "Replaced by --cni=bridge",
          deprecated: true,
          hidden: true,
        },
        {
          name: "--extra-config",
          description:
            "A set of key=value pairs that describe configuration that may be passed to different components",
          isRepeatable: true,
          args: {
            name: "component.key=value",
          },
        },
        {
          name: "--extra-disks",
          description:
            "Number of extra disks created and attached to the minikube VM (currently only implemented for hyperkit, kvm2, qemu2, vfkit, and krunkit drivers)",
          args: {
            name: "count",
          },
        },
        {
          name: "--feature-gates",
          description:
            "A set of key=value pairs that describe feature gates for alpha/experimental features",
          args: {
            name: "key=value",
          },
        },
        {
          name: "--force",
          description:
            "Force minikube to perform possibly dangerous operations",
        },
        {
          name: "--force-systemd",
          description:
            "If set, force the container runtime to use systemd as cgroup manager",
        },
        {
          name: ["--gpus", "-g"],
          description:
            "Allow pods to use your GPUs (Docker driver with Docker container-runtime only)",
          args: {
            name: "gpus",
            suggestions: ["all", "nvidia", "amd"],
          },
        },
        {
          name: "--ha",
          description:
            "Create Highly Available Multi-Control Plane Cluster with a minimum of three control-plane nodes that will also be marked for work",
        },
        {
          name: "--host-dns-resolver",
          description:
            "Enable host resolver for NAT DNS requests (virtualbox driver only)",
          requiresSeparator: true,
          args: {
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
        {
          name: "--host-only-cidr",
          description:
            "The CIDR to be used for the minikube VM (virtualbox driver only)",
          args: {
            name: "cidr",
          },
        },
        {
          name: "--host-only-nic-type",
          description: "NIC Type used for host only network",
          args: {
            name: "nic type",
            suggestions: [
              "Am79C970A",
              "Am79C973",
              "82540EM",
              "82543GC",
              "82545EM",
              "virtio",
            ],
          },
        },
        {
          name: "--hyperkit-vpnkit-sock",
          description: "Location of the VPNKit socket used for networking",
          args: {
            name: "socket",
            suggestions: ["auto"],
            template: "filepaths",
          },
        },
        {
          name: "--hyperkit-vsock-ports",
          description:
            "List of guest VSock ports that should be exposed as sockets on the host (hyperkit driver only)",
          isRepeatable: true,
          args: {
            name: "ports",
          },
        },
        {
          name: "--hyperv-external-adapter",
          description:
            "External Adapter on which external switch will be created if no external switch is found",
          args: {
            name: "adapter",
          },
        },
        {
          name: "--hyperv-use-external-switch",
          description:
            "Whether to use external switch over Default Switch if virtual switch not explicitly specified",
        },
        {
          name: "--hyperv-virtual-switch",
          description: "The hyperv virtual switch name",
          args: {
            name: "switch",
          },
        },
        {
          name: "--image-mirror-country",
          description: "Country code of the image mirror to be used",
          args: {
            name: "country",
          },
        },
        {
          name: "--image-repository",
          description:
            "Alternative image repository to pull docker images from",
          args: {
            name: "repository",
            suggestions: ["auto"],
          },
        },
        {
          name: "--insecure-registry",
          description:
            "Insecure Docker registries to pass to the Docker daemon",
          isRepeatable: true,
          args: {
            name: "registry",
          },
        },
        {
          name: "--install-addons",
          description: "If set, install addons",
          requiresSeparator: true,
          args: {
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
        {
          name: "--interactive",
          description: "Allow user prompts for more information",
          requiresSeparator: true,
          args: {
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
        {
          name: "--iso-url",
          description: "Locations to fetch the minikube ISO from",
          isRepeatable: true,
          args: {
            name: "url",
          },
        },
        {
          name: "--keep-context",
          description:
            "This will keep the existing kubectl context and will create a minikube context",
        },
        {
          name: "--kubernetes-version",
          description:
            "The Kubernetes version that the minikube VM will use (e.g. v1.2.3, stable or latest)",
          args: {
            name: "version",
            suggestions: ["stable", "latest"],
          },
        },
        {
          name: "--kvm-gpu",
          description: "Enable experimental NVIDIA GPU support in minikube",
        },
        {
          name: "--kvm-hidden",
          description:
            "Hide the hypervisor signature from the guest in minikube (kvm2 driver only)",
        },
        {
          name: "--kvm-network",
          description: "The KVM default network name",
          args: {
            name: "network",
          },
        },
        {
          name: "--kvm-numa-count",
          description:
            "Simulate numa node count in minikube, supported numa node count range is 1-8 (kvm2 driver only)",
          args: {
            name: "count",
            suggestions: ["1", "2", "3", "4", "5", "6", "7", "8"],
          },
        },
        {
          name: "--kvm-qemu-uri",
          description: "The KVM QEMU connection URI",
          args: {
            name: "uri",
          },
        },
        {
          name: "--listen-address",
          description:
            "IP Address to use to expose ports (docker and podman driver only)",
          args: {
            name: "ip",
          },
        },
        {
          name: "--mdns",
          description:
            "Enable mDNS (.local address resolution) by configuring systemd-resolved inside the node (VM drivers only)",
        },
        {
          name: ["--memory", "-m"],
          description:
            "Amount of RAM to allocate to Kubernetes (format: <number>[<unit>], where unit = b, k, m or g)",
          args: {
            name: "memory",
            suggestions: ["max", "no-limit"],
          },
        },
        {
          name: "--mount",
          description: "Kept for backward compatibility, value is ignored",
          deprecated: true,
        },
        {
          name: "--mount-9p-version",
          description: "Specify the 9p version that the mount should use",
          args: {
            name: "version",
          },
        },
        {
          name: "--mount-gid",
          description: "Default group id used for the mount",
          args: {
            name: "gid",
          },
        },
        {
          name: "--mount-ip",
          description: "Specify the ip that the mount should be setup on",
          args: {
            name: "ip",
          },
        },
        {
          name: "--mount-msize",
          description: "The number of bytes to use for 9p packet payload",
          args: {
            name: "bytes",
          },
        },
        {
          name: "--mount-options",
          description: "Additional mount options, such as cache=fscache",
          isRepeatable: true,
          args: {
            name: "options",
          },
        },
        {
          name: "--mount-port",
          description:
            "Specify the port that the mount should be setup on, where 0 means any free port",
          args: {
            name: "port",
          },
        },
        {
          name: "--mount-string",
          description:
            "The argument to pass the minikube mount command on start",
          args: {
            name: "source:target",
          },
        },
        {
          name: "--mount-type",
          description:
            "Specify the mount filesystem type (supported types: 9p)",
          args: {
            name: "type",
            suggestions: ["9p"],
          },
        },
        {
          name: "--mount-uid",
          description: "Default user id used for the mount",
          args: {
            name: "uid",
          },
        },
        {
          name: "--namespace",
          description: "The named space to activate after start",
          args: {
            name: "namespace",
          },
        },
        {
          name: "--nat-nic-type",
          description: "NIC Type used for nat network",
          args: {
            name: "nic type",
            suggestions: [
              "Am79C970A",
              "Am79C973",
              "82540EM",
              "82543GC",
              "82545EM",
              "virtio",
            ],
          },
        },
        {
          name: "--native-ssh",
          description: "Use native Golang SSH client",
          requiresSeparator: true,
          args: {
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
        {
          name: "--network",
          description: "Network to run minikube with",
          args: {
            name: "network",
          },
        },
        {
          name: "--network-plugin",
          description: "Replaced by --cni",
          deprecated: true,
          hidden: true,
          args: {
            name: "plugin",
          },
        },
        {
          name: "--nfs-share",
          description:
            "Local folders to share with Guest via NFS mounts (hyperkit driver only)",
          isRepeatable: true,
          args: {
            name: "folder",
            template: "folders",
          },
        },
        {
          name: "--nfs-shares-root",
          description:
            "Where to root the NFS Shares, defaults to /nfsshares (hyperkit driver only)",
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "--no-kubernetes",
          description:
            "If set, minikube VM/container will start without starting or configuring Kubernetes",
        },
        {
          name: "--no-vtx-check",
          description:
            "Disable checking for the availability of hardware virtualization before the vm is started (virtualbox driver only)",
        },
        {
          name: ["--nodes", "-n"],
          description: "The total number of nodes to spin up",
          args: {
            name: "nodes",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Format to print stdout in",
          args: {
            name: "format",
            suggestions: ["text", "json"],
          },
        },
        {
          name: "--ports",
          description:
            "List of ports that should be exposed (docker and podman driver only)",
          isRepeatable: true,
          args: {
            name: "ports",
          },
        },
        {
          name: "--preload",
          description:
            "If set, download tarball of preloaded images if available to improve start time",
          requiresSeparator: true,
          args: {
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
        {
          name: "--preload-source",
          description:
            "Which source to download the preload from (valid options: gcs, github, auto)",
          args: {
            name: "source",
            suggestions: ["gcs", "github", "auto"],
          },
        },
        {
          name: "--qemu-firmware-path",
          description: "Path to the qemu firmware file",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--registry-mirror",
          description: "Registry mirrors to pass to the Docker daemon",
          isRepeatable: true,
          args: {
            name: "mirror",
          },
        },
        {
          name: "--rosetta",
          description:
            "Enable Rosetta to support apps built for Intel processor on a Mac with Apple silicon (vfkit driver only)",
        },
        {
          name: "--service-cluster-ip-range",
          description: "The CIDR to be used for service cluster IPs",
          args: {
            name: "cidr",
          },
        },
        {
          name: "--socket-vmnet-client-path",
          description:
            "Path to the socket vmnet client binary (QEMU driver only)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--socket-vmnet-path",
          description: "Path to socket vmnet binary (QEMU driver only)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--ssh-ip-address",
          description: "IP address (ssh driver only)",
          args: {
            name: "ip",
          },
        },
        {
          name: "--ssh-key",
          description: "SSH key (ssh driver only)",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--ssh-port",
          description: "SSH port (ssh driver only)",
          args: {
            name: "port",
          },
        },
        {
          name: "--ssh-user",
          description: "SSH user (ssh driver only)",
          args: {
            name: "user",
          },
        },
        {
          name: "--static-ip",
          description:
            "Set a static IP for the minikube cluster (Docker and Podman drivers only)",
          args: {
            name: "ip",
          },
        },
        {
          name: "--subnet",
          description: "Subnet to be used on kic cluster",
          args: {
            name: "subnet",
          },
        },
        {
          name: "--trace",
          description: "Send trace events",
          args: {
            name: "trace",
            suggestions: ["gcp"],
          },
        },
        {
          name: "--uuid",
          description:
            "Provide VM UUID to restore MAC address (hyperkit driver only)",
          args: {
            name: "uuid",
          },
        },
        {
          name: "--vm",
          description: "Filter to use only VM Drivers",
        },
        {
          name: "--vm-driver",
          description: "Replaced by --driver",
          deprecated: true,
          hidden: true,
          args: {
            name: "driver",
            suggestions: [
              "docker",
              "podman",
              "kvm2",
              "qemu2",
              "virtualbox",
              "vmware",
              "hyperkit",
              "hyperv",
              "parallels",
              "vfkit",
              "krunkit",
              "ssh",
              "none",
            ],
          },
        },
        {
          name: "--vmnet-offloading",
          description: "Enable vmnet checksum and TSO offloading",
        },
        {
          name: "--wait",
          description:
            "Comma separated list of Kubernetes components to verify and wait for after starting a cluster",
          isRepeatable: true,
          args: {
            name: "components",
            suggestions: [
              "apiserver",
              "system_pods",
              "default_sa",
              "apps_running",
              "node_ready",
              "kubelet",
              "extra",
              "all",
              "none",
              "true",
              "false",
            ],
          },
        },
        {
          name: "--wait-timeout",
          description: "Max time to wait per Kubernetes or host to be healthy",
          args: {
            name: "duration",
          },
        },
      ],
    },
    {
      name: "status",
      description: "Gets the status of a local Kubernetes cluster",
      options: [
        {
          name: ["--format", "-f"],
          description: "Go template format string for the status output",
          args: {
            name: "template",
          },
        },
        {
          name: ["--layout", "-l"],
          description: "Output layout (EXPERIMENTAL, JSON only)",
          args: {
            name: "layout",
            suggestions: ["nodes", "cluster"],
          },
        },
        {
          name: ["--node", "-n"],
          description: "The node to check status for",
          args: {
            name: "node",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Format to print stdout in",
          args: {
            name: "format",
            suggestions: ["json", "text"],
          },
        },
        {
          name: ["--watch", "-w"],
          description:
            "Continuously listing/getting the status with optional interval duration",
          requiresSeparator: true,
          args: {
            name: "interval",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "stop",
      description: "Stops a running local Kubernetes cluster",
      options: [
        {
          name: "--all",
          description: "Set flag to stop all profiles (clusters)",
        },
        {
          name: "--cancel-scheduled",
          description: "Cancel any existing scheduled stop requests",
        },
        {
          name: "--keep-context-active",
          description: "Keep the kube-context active after cluster is stopped",
        },
        {
          name: ["--output", "-o"],
          description: "Format to print stdout in",
          args: {
            name: "format",
            suggestions: ["text", "json"],
          },
        },
        {
          name: "--schedule",
          description:
            "Set flag to stop cluster after a set amount of time (e.g. --schedule=5m)",
          args: {
            name: "duration",
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes a local Kubernetes cluster",
      options: [
        {
          name: "--all",
          description: "Set flag to delete all profiles",
        },
        {
          name: ["--output", "-o"],
          description: "Format to print stdout in",
          args: {
            name: "format",
            suggestions: ["text", "json"],
          },
        },
        {
          name: "--purge",
          description:
            "Set this flag to delete the '.minikube' folder from your user directory",
        },
      ],
    },
    {
      name: "dashboard",
      description:
        "Access the Kubernetes dashboard running within the minikube cluster",
      options: [
        {
          name: "--port",
          description: "Exposed port of the proxyfied dashboard",
          args: {
            name: "port",
          },
        },
        {
          name: "--url",
          description: "Display dashboard URL instead of opening a browser",
        },
      ],
    },
    {
      name: "pause",
      description: "Pause Kubernetes",
      options: [
        {
          name: ["--all-namespaces", "-A"],
          description: "If set, pause all namespaces",
        },
        {
          name: ["--namespaces", "-n"],
          description: "Namespaces to pause",
          isRepeatable: true,
          args: {
            name: "namespaces",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Format to print stdout in",
          args: {
            name: "format",
            suggestions: ["text", "json"],
          },
        },
      ],
    },
    {
      name: ["unpause", "resume"],
      description: "Unpause Kubernetes",
      options: [
        {
          name: ["--all-namespaces", "-A"],
          description: "If set, unpause all namespaces",
        },
        {
          name: ["--namespaces", "-n"],
          description: "Namespaces to unpause",
          isRepeatable: true,
          args: {
            name: "namespaces",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Format to print stdout in",
          args: {
            name: "format",
            suggestions: ["text", "json"],
          },
        },
      ],
    },
    // Images Commands
    {
      name: "docker-env",
      description:
        "Provide instructions to point your terminal's docker-cli to the Docker Engine inside minikube",
      options: [
        {
          name: "--no-proxy",
          description: "Add machine IP to NO_PROXY environment variable",
        },
        {
          name: ["--output", "-o"],
          description: "Output format",
          args: {
            name: "format",
            suggestions: ["text", "yaml", "json"],
          },
        },
        {
          name: "--shell",
          description:
            "Force environment to be configured for a specified shell",
          args: {
            name: "shell",
            suggestions: ["fish", "cmd", "powershell", "tcsh", "bash", "zsh"],
          },
        },
        {
          name: "--ssh-add",
          description: "Add SSH identity key to SSH authentication agent",
        },
        {
          name: "--ssh-host",
          description: "Use SSH connection instead of HTTPS (port 2376)",
        },
        {
          name: ["--unset", "-u"],
          description: "Unset variables instead of setting them",
        },
      ],
    },
    {
      name: "podman-env",
      description: "Configure environment to use minikube's Podman service",
      options: [
        {
          name: "--shell",
          description:
            "Force environment to be configured for a specified shell",
          args: {
            name: "shell",
            suggestions: ["fish", "cmd", "powershell", "tcsh", "bash", "zsh"],
          },
        },
        {
          name: ["--unset", "-u"],
          description: "Unset variables instead of setting them",
        },
      ],
    },
    {
      name: "cache",
      description: "Manage cache for images",
      subcommands: [
        {
          name: "add",
          description: "Add an image to local cache",
          options: [
            {
              name: "--all",
              description:
                "Add image to cache for all running minikube clusters",
            },
          ],
          args: {
            name: "image",
            isVariadic: true,
          },
        },
        {
          name: "delete",
          description: "Delete an image from the local cache",
          args: {
            name: "image",
            isVariadic: true,
          },
        },
        {
          name: "list",
          description: "List all available images from the local cache",
          options: [
            {
              name: "--format",
              description:
                "Go template format string for the cache list output",
              args: {
                name: "template",
              },
            },
          ],
        },
        {
          name: "reload",
          description: "Reload cached images",
        },
      ],
    },
    {
      name: "image",
      description: "Manage images",
      subcommands: [
        {
          name: "build",
          description: "Build a container image in minikube",
          options: [
            {
              name: "--all",
              description: "Build image on all nodes",
            },
            {
              name: "--build-env",
              description: "Environment variables to pass to the build",
              isRepeatable: true,
              args: {
                name: "key=value",
              },
            },
            {
              name: "--build-opt",
              description: "Specify arbitrary flags to pass to the build",
              isRepeatable: true,
              args: {
                name: "key=value",
              },
            },
            {
              name: ["--file", "-f"],
              description: "Path to the Dockerfile to use",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
            {
              name: ["--node", "-n"],
              description: "The node to build on",
              args: {
                name: "node",
              },
            },
            {
              name: "--push",
              description: "Push the new image (requires tag)",
            },
            {
              name: ["--tag", "-t"],
              description: "Tag to apply to the new image",
              args: {
                name: "tag",
              },
            },
          ],
          args: {
            name: "path",
            template: "folders",
          },
        },
        {
          name: "load",
          description: "Load an image into minikube",
          options: [
            {
              name: "--daemon",
              description: "Cache image from docker daemon",
            },
            {
              name: "--overwrite",
              description: "Overwrite image even if same image:tag name exists",
              requiresSeparator: true,
              args: {
                suggestions: ["true", "false"],
                isOptional: true,
              },
            },
            {
              name: "--pull",
              description: "Pull the remote image (no caching)",
            },
            {
              name: "--remote",
              description: "Cache image from remote registry",
            },
          ],
          args: {
            name: "image or archive",
            template: "filepaths",
            isVariadic: true,
          },
        },
        {
          name: ["ls", "list"],
          description: "List images",
          options: [
            {
              name: "--format",
              description: "Format output",
              args: {
                name: "format",
                suggestions: ["short", "table", "json", "yaml"],
              },
            },
          ],
        },
        {
          name: "pull",
          description: "Pull images",
          args: {
            name: "image",
            isVariadic: true,
          },
        },
        {
          name: "push",
          description: "Push images",
          args: {
            name: "image",
            isVariadic: true,
          },
        },
        {
          name: ["rm", "remove", "unload"],
          description: "Remove one or more images",
          args: {
            name: "image",
            isVariadic: true,
          },
        },
        {
          name: "save",
          description: "Save an image from minikube",
          options: [
            {
              name: "--daemon",
              description: "Cache image to docker daemon",
            },
            {
              name: "--remote",
              description: "Cache image to remote registry",
            },
          ],
          args: [
            {
              name: "image",
            },
            {
              name: "archive",
              template: "filepaths",
              isOptional: true,
            },
          ],
        },
        {
          name: "tag",
          description: "Tag images",
          args: [
            {
              name: "source image",
            },
            {
              name: "target image",
            },
          ],
        },
      ],
    },
    // Configuration and Management Commands
    {
      name: "addons",
      description: "Enable or disable a minikube addon",
      subcommands: [
        {
          name: "configure",
          description: "Configures the addon within minikube",
          options: [
            {
              name: ["--config-file", "-f"],
              description:
                "Configuration file to read addon specific configs from instead of being prompted each time",
              args: {
                name: "file",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "addon",
            generators: addonsGenerator,
          },
        },
        {
          name: "disable",
          description: "Disables the addon within minikube",
          args: {
            name: "addon",
            generators: addonsGenerator,
          },
        },
        {
          name: "enable",
          description: "Enables the addon within minikube",
          options: [
            {
              name: "--force",
              description:
                "If true, will perform potentially dangerous operations",
            },
            {
              name: "--images",
              description: "Images used by this addon, separated by commas",
              args: {
                name: "images",
              },
            },
            {
              name: "--refresh",
              description:
                "If true, pods might get deleted and restarted on addon enable",
            },
            {
              name: "--registries",
              description: "Registries used by this addon, separated by commas",
              args: {
                name: "registries",
              },
            },
          ],
          args: {
            name: "addon",
            generators: addonsGenerator,
          },
        },
        {
          name: "images",
          description: "List image names the addon used",
          options: [
            {
              name: ["--output", "-o"],
              description: "Output format",
              args: {
                name: "format",
                suggestions: ["table", "json"],
              },
            },
          ],
          args: {
            name: "addon",
            generators: addonsGenerator,
          },
        },
        {
          name: "list",
          description:
            "Lists all available minikube addons as well as their current statuses (enabled/disabled)",
          options: [
            {
              name: ["--docs", "-d"],
              description:
                "Print web links to addons' documentation if using --output=list",
            },
            {
              name: ["--output", "-o"],
              description: "Output format",
              args: {
                name: "format",
                suggestions: ["list", "json"],
              },
            },
          ],
        },
        {
          name: "open",
          description: "Opens the addon within minikube",
          options: [
            {
              name: "--format",
              description: "Format to output addons URL in",
              args: {
                name: "template",
              },
            },
            {
              name: "--https",
              description: "Open the addons URL with https instead of http",
            },
            {
              name: "--interval",
              description:
                "The time interval for each check that wait performs in seconds",
              args: {
                name: "seconds",
              },
            },
            {
              name: "--url",
              description:
                "Display the Kubernetes addons URL in the CLI instead of opening it in the default browser",
            },
            {
              name: "--wait",
              description: "Amount of time to wait for service in seconds",
              args: {
                name: "seconds",
              },
            },
          ],
          args: {
            name: "addon",
            generators: addonsGenerator,
          },
        },
      ],
    },
    {
      name: "config",
      description: "Modify persistent configuration values",
      subcommands: [
        {
          name: "defaults",
          description: "Lists all valid default values for PROPERTY_NAME",
          options: [
            {
              name: ["--output", "-o"],
              description: "Output format",
              args: {
                name: "format",
                suggestions: ["json", "yaml"],
              },
            },
          ],
          args: {
            name: "property",
            suggestions: ["driver", "kubernetes-version"],
          },
        },
        {
          name: "get",
          description:
            "Gets the value of PROPERTY_NAME from the minikube config file",
          args: {
            name: "property",
            suggestions: configProperties,
          },
        },
        {
          name: "set",
          description: "Sets an individual value in a minikube config file",
          args: [
            {
              name: "property",
              suggestions: configProperties,
            },
            {
              name: "value",
            },
          ],
        },
        {
          name: "unset",
          description: "Unsets an individual value in a minikube config file",
          args: {
            name: "property",
            suggestions: configProperties,
          },
        },
        {
          name: "view",
          description:
            "Display values currently set in the minikube config file",
          options: [
            {
              name: "--format",
              description:
                "Go template format string for the config view output",
              args: {
                name: "template",
              },
            },
          ],
        },
      ],
    },
    {
      name: "profile",
      description: "Get or list the current profiles (clusters)",
      subcommands: [
        {
          name: "list",
          description: "Lists all minikube profiles",
          options: [
            {
              name: ["--detailed", "-d"],
              description: "If true, returns a detailed list of profiles",
            },
            {
              name: ["--light", "-l"],
              description:
                "If true, returns list of profiles faster by skipping validating the status of the cluster",
            },
            {
              name: ["--output", "-o"],
              description: "Output format",
              args: {
                name: "format",
                suggestions: ["json", "table"],
              },
            },
          ],
        },
      ],
      args: {
        name: "profile",
        isOptional: true,
      },
    },
    {
      name: "update-context",
      description: "Update kubeconfig in case of an IP or port change",
    },
    // Networking and Connectivity Commands
    {
      name: "service",
      description: "Returns a URL to connect to a service",
      subcommands: [
        {
          name: "list",
          description: "Lists the URLs for the services in your local cluster",
          options: [
            {
              name: ["--namespace", "-n"],
              description: "The services namespace",
              args: {
                name: "namespace",
              },
            },
            {
              name: ["--output", "-o"],
              description: "Output format",
              args: {
                name: "format",
                suggestions: ["json", "table"],
              },
            },
          ],
        },
      ],
      options: [
        {
          name: "--all",
          description: "Forwards all services in a namespace",
        },
        {
          name: "--format",
          description: "Format to output service URL in",
          args: {
            name: "template",
          },
        },
        {
          name: "--https",
          description: "Open the service URL with https instead of http",
        },
        {
          name: "--interval",
          description:
            "The initial time interval for each check that wait performs in seconds",
          args: {
            name: "seconds",
          },
        },
        {
          name: ["--namespace", "-n"],
          description: "The service namespace",
          args: {
            name: "namespace",
          },
        },
        {
          name: "--url",
          description:
            "Display the Kubernetes service URL in the CLI instead of opening it in the default browser",
        },
        {
          name: "--wait",
          description: "Amount of time to wait for a service in seconds",
          args: {
            name: "seconds",
          },
        },
      ],
      args: {
        name: "service",
        isOptional: true,
      },
    },
    {
      name: "tunnel",
      description: "Connect to LoadBalancer services",
      options: [
        {
          name: "--bind-address",
          description:
            "Set tunnel bind address, empty or '*' indicates the tunnel should be available for all interfaces",
          args: {
            name: "address",
          },
        },
        {
          name: ["--cleanup", "-c"],
          description: "Call with cleanup=true to remove old tunnels",
          requiresSeparator: true,
          args: {
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
      ],
    },
    // Advanced Commands
    {
      name: "mount",
      description: "Mounts the specified directory into minikube",
      options: [
        {
          name: "--9p-version",
          description: "Specify the 9p version that the mount should use",
          args: {
            name: "version",
          },
        },
        {
          name: "--gid",
          description: "Default group id used for the mount",
          args: {
            name: "gid",
          },
        },
        {
          name: "--ip",
          description: "Specify the ip that the mount should be setup on",
          args: {
            name: "ip",
          },
        },
        {
          name: "--kill",
          description: "Kill the mount process spawned by minikube start",
        },
        {
          name: "--msize",
          description: "The number of bytes to use for 9p packet payload",
          args: {
            name: "bytes",
          },
        },
        {
          name: "--options",
          description: "Additional mount options, such as cache=fscache",
          isRepeatable: true,
          args: {
            name: "options",
          },
        },
        {
          name: "--port",
          description:
            "Specify the port that the mount should be setup on, where 0 means any free port",
          args: {
            name: "port",
          },
        },
        {
          name: "--type",
          description:
            "Specify the mount filesystem type (supported types: 9p)",
          args: {
            name: "type",
            suggestions: ["9p"],
          },
        },
        {
          name: "--uid",
          description: "Default user id used for the mount",
          args: {
            name: "uid",
          },
        },
      ],
      args: {
        name: "source:target",
        template: "folders",
      },
    },
    {
      name: "ssh",
      description: "Log into the minikube environment (for debugging)",
      options: [
        {
          name: "--native-ssh",
          description: "Use native Golang SSH client",
          requiresSeparator: true,
          args: {
            suggestions: ["true", "false"],
            isOptional: true,
          },
        },
        {
          name: ["--node", "-n"],
          description: "The node to ssh into",
          args: {
            name: "node",
          },
        },
      ],
      args: {
        name: "command",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "kubectl",
      description: "Run a kubectl binary matching the cluster version",
      options: [
        {
          name: "--ssh",
          description: "Use SSH for running kubernetes client on the node",
        },
      ],
      args: {
        name: "kubectl arguments",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "node",
      description: "Add, remove, or list additional nodes",
      subcommands: [
        {
          name: "add",
          description: "Adds a node to the given cluster",
          options: [
            {
              name: "--control-plane",
              description: "If set, added node will become a control-plane",
            },
            {
              name: "--delete-on-failure",
              description:
                "If set, delete the current cluster if start fails and try again",
            },
            {
              name: "--worker",
              description: "If set, added node will be available as worker",
              requiresSeparator: true,
              args: {
                suggestions: ["true", "false"],
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a node from a cluster",
          args: {
            name: "node",
          },
        },
        {
          name: "list",
          description: "List nodes",
        },
        {
          name: "start",
          description: "Starts a node",
          options: [
            {
              name: "--delete-on-failure",
              description:
                "If set, delete the current cluster if start fails and try again",
            },
          ],
          args: {
            name: "node",
          },
        },
        {
          name: "stop",
          description: "Stops a node in a cluster",
          args: {
            name: "node",
          },
        },
      ],
    },
    {
      name: "cp",
      description: "Copy the specified file into minikube",
      args: [
        {
          name: "source",
          template: "filepaths",
        },
        {
          name: "target",
          template: "filepaths",
        },
      ],
    },
    // Troubleshooting Commands
    {
      name: "ssh-key",
      description: "Retrieve the ssh identity key path of the specified node",
      options: [
        {
          name: ["--node", "-n"],
          description: "The node to get ssh-key path",
          args: {
            name: "node",
          },
        },
      ],
    },
    {
      name: "ssh-host",
      description: "Retrieve the ssh host key of the specified node",
      options: [
        {
          name: "--append-known",
          description: "Add host key to SSH known_hosts file",
        },
        {
          name: ["--node", "-n"],
          description: "The node to ssh into",
          args: {
            name: "node",
          },
        },
      ],
    },
    {
      name: "ip",
      description: "Retrieves the IP address of the specified node",
      options: [
        {
          name: ["--node", "-n"],
          description: "The node to get IP",
          args: {
            name: "node",
          },
        },
      ],
    },
    {
      name: "logs",
      description: "Returns logs to debug a local Kubernetes cluster",
      options: [
        {
          name: "--audit",
          description: "Show only the audit logs",
        },
        {
          name: "--file",
          description: "Write to the provided file instead of stdout",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["--follow", "-f"],
          description:
            "Continuously print new log entries as they are appended to the journal",
        },
        {
          name: "--last-start-only",
          description: "Show only the last start logs",
        },
        {
          name: ["--length", "-n"],
          description: "Number of lines back to go within the log",
          args: {
            name: "lines",
          },
        },
        {
          name: "--node",
          description: "The node to get logs from",
          args: {
            name: "node",
          },
        },
        {
          name: "--problems",
          description: "Show only log entries which point to known problems",
        },
      ],
    },
    {
      name: "update-check",
      description: "Print current and latest version number",
    },
    {
      name: "version",
      description: "Print the version of minikube",
      options: [
        {
          name: "--components",
          description: "List versions of all components included with minikube",
        },
        {
          name: ["--output", "-o"],
          description: "Output format",
          args: {
            name: "format",
            suggestions: ["yaml", "json"],
          },
        },
        {
          name: "--short",
          description: "Print just the version number",
        },
      ],
    },
    {
      name: "options",
      description:
        "Show a list of global command-line options (applies to all commands)",
    },
    // Other Commands
    {
      name: "completion",
      description: "Generate command completion for a shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate bash completion",
        },
        {
          name: "fish",
          description: "Generate fish completion",
        },
        {
          name: "powershell",
          description: "Generate PowerShell completion",
        },
        {
          name: "zsh",
          description: "Generate zsh completion",
        },
      ],
    },
    {
      name: "license",
      description: "Output the licenses of dependencies to a directory",
      options: [
        {
          name: ["--dir", "-d"],
          description: "Directory to output licenses to",
          args: {
            name: "dir",
            template: "folders",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: "--add_dir_header",
      description: "Add the file directory to the header of the log messages",
      isPersistent: true,
    },
    {
      name: "--alsologtostderr",
      description:
        "Log to standard error as well as files (no effect when --logtostderr=true)",
      isPersistent: true,
    },
    {
      name: "--alsologtostderrthreshold",
      description:
        "Log level at or above which logs go to standard error when --alsologtostderr=true",
      args: {
        name: "severity",
        suggestions: ["INFO", "WARNING", "ERROR", "FATAL"],
      },
      isPersistent: true,
    },
    {
      name: ["--bootstrapper", "-b"],
      description:
        "The name of the cluster bootstrapper that will set up the Kubernetes cluster",
      args: {
        name: "bootstrapper",
        suggestions: ["kubeadm"],
      },
      isPersistent: true,
    },
    {
      name: ["--help", "-h"],
      description: "Show help for a command",
      isPersistent: true,
    },
    {
      name: "--legacy_stderr_threshold_behavior",
      description:
        "Ignore stderrthreshold when logtostderr=true (legacy behavior)",
      requiresSeparator: true,
      args: {
        suggestions: ["true", "false"],
        isOptional: true,
      },
      isPersistent: true,
    },
    {
      name: "--log_backtrace_at",
      description: "When logging hits file:N, emit a stack trace",
      args: {
        name: "file:N",
      },
      isPersistent: true,
    },
    {
      name: "--log_dir",
      description:
        "If non-empty, write log files in this directory (no effect when --logtostderr=true)",
      args: {
        name: "dir",
        template: "folders",
      },
      isPersistent: true,
    },
    {
      name: "--log_file",
      description:
        "If non-empty, use this log file (no effect when --logtostderr=true)",
      args: {
        name: "file",
        template: "filepaths",
      },
      isPersistent: true,
    },
    {
      name: "--log_file_max_size",
      description:
        "Maximum size in megabytes a log file can grow to, 0 means unlimited (no effect when --logtostderr=true)",
      args: {
        name: "megabytes",
      },
      isPersistent: true,
    },
    {
      name: "--logtostderr",
      description: "Log to standard error instead of files",
      requiresSeparator: true,
      args: {
        suggestions: ["true", "false"],
        isOptional: true,
      },
      isPersistent: true,
    },
    {
      name: "--one_output",
      description:
        "Only write logs to their native severity level (no effect when --logtostderr=true)",
      isPersistent: true,
    },
    {
      name: ["--profile", "-p"],
      description: "The name of the minikube VM being used",
      args: {
        name: "profile",
      },
      isPersistent: true,
    },
    {
      name: "--rootless",
      description:
        "Force to use rootless driver (docker and podman driver only)",
      isPersistent: true,
    },
    {
      name: "--skip-audit",
      description: "Skip recording the current command in the audit logs",
      isPersistent: true,
    },
    {
      name: "--skip_headers",
      description: "Avoid header prefixes in the log messages",
      isPersistent: true,
    },
    {
      name: "--skip_log_headers",
      description:
        "Avoid headers when opening log files (no effect when --logtostderr=true)",
      isPersistent: true,
    },
    {
      name: "--stderrthreshold",
      description:
        "Log level at or above which logs go to standard error when writing to files and stderr",
      args: {
        name: "severity",
        suggestions: ["INFO", "WARNING", "ERROR", "FATAL"],
      },
      isPersistent: true,
    },
    {
      name: "--user",
      description:
        "Specifies the user executing the operation. Useful for auditing operations executed by 3rd party tools",
      args: {
        name: "user",
      },
      isPersistent: true,
    },
    {
      name: ["--v", "-v"],
      description: "Number for the log level verbosity",
      args: {
        name: "level",
      },
      isPersistent: true,
    },
    {
      name: "--vmodule",
      description:
        "Comma-separated list of pattern=N settings for file-filtered logging",
      args: {
        name: "pattern=N",
      },
      isPersistent: true,
    },
  ],
};

export default completionSpec;
