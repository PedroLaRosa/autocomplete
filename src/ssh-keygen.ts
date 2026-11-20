// ssh-keygen (OpenSSH v10.6, openssh-portable tag V_10_6_P2, 2026-11-19). Source: ssh-keygen.1 man page and ssh-keygen.c usage/getopt from the tagged source tree.
// Not run against a live ssh-keygen binary.
const allOptions = [
  "-A",
  "-a",
  "-B",
  "-b",
  "-C",
  "-c",
  "-D",
  "-E",
  "-e",
  "-F",
  "-f",
  "-g",
  "-H",
  "-h",
  "-I",
  "-i",
  "-K",
  "-k",
  "-L",
  "-l",
  "-M",
  "-m",
  "-N",
  "-n",
  "-O",
  "-P",
  "-p",
  "-Q",
  "-q",
  "-R",
  "-r",
  "-s",
  "-t",
  "-U",
  "-u",
  "-V",
  "-v",
  "-w",
  "-Y",
  "-y",
  "-Z",
  "-z",
];
const completionSpec: Fig.Spec = {
  name: "ssh-keygen",
  description: "Generates, manages and converts authentication keys for ssh",
  options: [
    {
      name: "-A",
      description:
        "Generate host keys of all default key types (rsa, ecdsa, mldsa44-ed25519 and ed25519) if they do not already exist, with the default key file path, an empty passphrase, default bits for the key type, and default comment",
      exclusiveOn: allOptions.filter(
        (option) => option !== "-a" && option !== "-f"
      ),
    },
    {
      name: "-a",
      description:
        "When saving a private key, this option specifies the number of KDF (key derivation function, currently bcrypt_pbkdf) rounds used",
      args: {
        name: "rounds",
        description: "Number of rounds being used",
        default: "32",
        suggestions: ["32"],
      },
    },
    {
      name: "-B",
      description:
        "Show the bubblebabble digest of specified private or public key file",
      exclusiveOn: allOptions.filter((option) => option !== "-f"),
    },
    {
      name: "-b",
      description:
        "Specifies the number of bits in the key to create (RSA: minimum 1024, ECDSA: 256, 384 or 521, ignored for Ed25519 and security key types)",
      args: {
        name: "bits",
        description: "Number of bits in the key",
        default: "3072",
        suggestions: ["3072"],
      },
    },
    {
      name: "-C",
      description: "Provides a new comment",
      args: {
        name: "comment",
        description: "New comment value",
      },
    },
    {
      name: "-c",
      description:
        "Requests changing the comment in the private and public key files",
      exclusiveOn: allOptions.filter(
        (option) =>
          option !== "-a" &&
          option !== "-C" &&
          option !== "-f" &&
          option !== "-P"
      ),
    },
    {
      name: "-D",
      description:
        "Download the public keys provided by the PKCS#11 shared library. When used with -s, indicates that the CA key resides in a PKCS#11 token",
      args: {
        name: "pkcs11",
        description: "PKCS#11 shared library",
        template: "filepaths",
      },
      exclusiveOn: allOptions,
    },
    {
      name: "-E",
      description:
        "Specifies the hash algorithm used when displaying key fingerprints",
      args: {
        name: "fingerprint_hash",
        description: "Hash algorithm value",
        default: "sha256",
        suggestions: [{ name: "md5" }, { name: "sha256" }],
      },
    },
    {
      name: "-e",
      description:
        "Read a private or public OpenSSH key file and print to stdout a public key in one of the formats specified by -m",
      exclusiveOn: allOptions.filter(
        (option) => option !== "-f" && option !== "-m"
      ),
    },
    {
      name: "-F",
      description:
        "Search for the specified hostname (with optional port number)",
      args: {
        name: "hostname",
        description: "Hostname with optional port number ([hostname]:port)",
      },
      exclusiveOn: allOptions.filter(
        (option) => option !== "-l" && option !== "-v" && option !== "-f"
      ),
    },
    {
      name: "-f",
      description: "Specifies the filename of the key file",
      args: {
        name: "filename",
        description: "Filename of the key file",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: "-g",
      description:
        "Use generic DNS format when printing fingerprint resource records",
    },
    {
      name: "-H",
      description: "Hash a known_hosts file",
      exclusiveOn: allOptions.filter((option) => option !== "-f"),
    },
    {
      name: "-h",
      description: "Create a host certificate instead of a user",
    },
    {
      name: "-I",
      description: "Specify the key identity when signing a public key",
      args: {
        name: "certificate_identity",
        description: "Key identity value",
      },
      exclusiveOn: allOptions.filter(
        (option) =>
          option !== "-s" &&
          option !== "-h" &&
          option !== "-U" &&
          option !== "-D"
      ),
    },
    {
      name: "-i",
      description: "Read an unencrypted private (or public) key file",
      exclusiveOn: allOptions.filter(
        (option) => option !== "-f" && option !== "-m"
      ),
    },
    {
      name: "-K",
      description: "Download resident keys from a FIDO authenticator",
      exclusiveOn: allOptions.filter(
        (option) => option !== "-a" && option !== "-w"
      ),
    },
    {
      name: "-k",
      description: "Generate a KRL file",
      dependsOn: ["-f"],
      exclusiveOn: allOptions.filter(
        (option) =>
          option !== "-f" &&
          option !== "-u" &&
          option !== "-s" &&
          option !== "-z"
      ),
    },
    {
      name: "-L",
      description: "Print the contents of one or more certificates",
      exclusiveOn: allOptions.filter((option) => option !== "-f"),
    },
    {
      name: "-l",
      description: "Show fingerprint of specified public key file",
      exclusiveOn: allOptions.filter(
        (option) => option !== "-v" && option !== "-E" && option !== "-f"
      ),
    },
    {
      name: "-M",
      description: "Use for Moduli generation",
      args: {
        name: "command",
        description: "Use generate or screen",
        suggestions: [{ name: "generate" }, { name: "screen" }],
      },
      exclusiveOn: allOptions.filter(
        (option) => option !== "-f" && option !== "-O"
      ),
    },
    {
      name: "-m",
      description:
        "Specify a key format for key generation, the -i (import) and -e (export) conversion options, and the -p change passphrase operation",
      args: {
        name: "key_format",
        description: "Key format for key generation",
        suggestions: [
          {
            name: "RFC4716",
            description: "RFC 4716/SSH2 public or private key",
          },
          { name: "PKCS8", description: "PKCS8 public or private key" },
          { name: "PEM", description: "PEM public key" },
        ],
      },
    },
    {
      name: "-N",
      description: "Provides the new passphrase",
      args: {
        name: "new_passphrase",
        description: "New passphrase value",
      },
    },
    {
      name: "-n",
      description:
        "Specify one or more principals (user or host names) to be included in a certificate when signing a key, or the signature namespace with -Y",
      args: {
        name: "principals",
        description:
          "Comma-separated principals to be included in a certificate when signing a key (or the namespace with -Y)",
      },
    },
    {
      name: "-O",
      description:
        "Specify a key/value option specific to the operation being performed (certificate, moduli, FIDO, passphrase or signature options)",
      isRepeatable: true,
      args: {
        name: "option",
        description: "Value for option",
        suggestions: [
          // Signature options (-Y)
          {
            name: "hashalg",
            insertValue: "hashalg=",
            description:
              "Hash algorithm for signing (sha256 or sha512) or SSHFP records (sha1 or sha256)",
          },
          {
            name: "print-pubkey",
            description:
              "Print the full public key after signature verification",
          },
          {
            name: "verify-time",
            insertValue: "verify-time=",
            description: "Time to use when validating signatures",
          },
          // Certificate options (-s)
          {
            name: "clear",
            description: "Clear all enabled certificate permissions",
          },
          {
            name: "critical",
            insertValue: "critical:",
            description: "Include an arbitrary certificate critical option",
          },
          {
            name: "extension",
            insertValue: "extension:",
            description: "Include an arbitrary certificate extension",
          },
          {
            name: "force-command",
            insertValue: "force-command=",
            description:
              "Force the execution of a command when the certificate is used",
          },
          {
            name: "no-agent-forwarding",
            description: "Disable ssh-agent forwarding",
          },
          {
            name: "no-port-forwarding",
            description: "Disable port forwarding",
          },
          { name: "no-pty", description: "Disable PTY allocation" },
          {
            name: "no-user-rc",
            description: "Disable execution of ~/.ssh/rc by sshd",
          },
          {
            name: "no-x11-forwarding",
            description: "Disable X11 forwarding",
          },
          {
            name: "permit-agent-forwarding",
            description: "Allow ssh-agent forwarding",
          },
          {
            name: "permit-port-forwarding",
            description: "Allow port forwarding",
          },
          { name: "permit-pty", description: "Allow PTY allocation" },
          {
            name: "permit-user-rc",
            description: "Allow execution of ~/.ssh/rc by sshd",
          },
          {
            name: "permit-X11-forwarding",
            description: "Allow X11 forwarding",
          },
          {
            name: "no-touch-required",
            description:
              "Do not require user presence for signatures made using this key (FIDO keys)",
          },
          {
            name: "source-address",
            insertValue: "source-address=",
            description:
              "Restrict the source addresses from which the certificate is valid (CIDR list)",
          },
          {
            name: "verify-required",
            description:
              "Require user verification for signatures made using this key (FIDO keys)",
          },
          // Moduli generation and screening options (-M)
          {
            name: "bits",
            insertValue: "bits=",
            description: "Desired length of the primes to generate",
          },
          {
            name: "start",
            insertValue: "start=",
            description: "Start point (in hex) for candidate generation",
          },
          {
            name: "prime-tests",
            insertValue: "prime-tests=",
            description: "Number of primality tests per candidate",
          },
          {
            name: "generator",
            insertValue: "generator=",
            description: "Desired DH generator (2, 3 or 5)",
          },
          {
            name: "lines",
            insertValue: "lines=",
            description: "Exit after screening the given number of lines",
          },
          {
            name: "start-line",
            insertValue: "start-line=",
            description: "Start screening at the given line number",
          },
          {
            name: "checkpoint",
            insertValue: "checkpoint=",
            description: "File to record the last processed line in",
          },
          // FIDO authenticator options
          {
            name: "application",
            insertValue: "application=",
            description: "Override the default FIDO application/origin string",
          },
          {
            name: "challenge",
            insertValue: "challenge=",
            description: "Path to a challenge string for FIDO key generation",
          },
          {
            name: "device",
            insertValue: "device=",
            description: "Explicitly specify a FIDO device to use",
          },
          {
            name: "resident",
            description:
              "Store the key handle on the FIDO authenticator itself",
          },
          {
            name: "user",
            insertValue: "user=",
            description: "Username to associate with a resident key",
          },
          {
            name: "write-attestation",
            insertValue: "write-attestation=",
            description: "Path to record FIDO attestation data in",
          },
        ],
      },
    },
    {
      name: "-o",
      description: "No-op, the new OpenSSH private key format is the default",
      deprecated: true,
    },
    {
      name: "-P",
      description: "Provides the (old) passphrase",
      args: {
        name: "passphrase",
        description: "(Old) passphrase value",
      },
    },
    {
      name: "-p",
      description:
        "Requests changing the passphrase of a private key file instead of creating a new private key",
      exclusiveOn: allOptions.filter(
        (option) =>
          option !== "-a" &&
          option !== "-f" &&
          option !== "-m" &&
          option !== "-N"
      ),
    },
    {
      name: "-Q",
      description: "Test whether keys have been revoked in a KRL",
      exclusiveOn: allOptions.filter(
        (option) => option !== "-l" && option !== "-f"
      ),
    },
    {
      name: "-q",
      description: "Silence ssh-keygen",
    },
    {
      name: "-R",
      description:
        "Removes all keys belonging to the specified hostname (with optional port number) from a known_hosts file",
      args: {
        name: "hostname",
        description: "Hostname to remove keys from a known_hosts file",
      },
      exclusiveOn: allOptions.filter((option) => option !== "-f"),
    },
    {
      name: "-r",
      description:
        "Print the SSHFP fingerprint resource record named hostname for the specified public key file",
      args: {
        name: "hostname",
        description: "Hostname for the specified public key file",
      },
      exclusiveOn: allOptions.filter(
        (option) => option !== "-g" && option !== "-f"
      ),
    },
    {
      name: "-s",
      description:
        "Certify (sign) a public key using the specified CA key. When generating a KRL, specifies a CA public key file, and with -Y, the signature file",
      args: {
        name: "ca_key",
        description: "CA key (or signature file with -Y)",
        template: "filepaths",
      },
    },
    {
      name: "-t",
      description: "Specifies the type of key to create",
      args: {
        name: "type",
        description: "Type of key to create (ed25519 is the default)",
        suggestions: [
          { name: "ecdsa" },
          { name: "ecdsa-sk" },
          { name: "ed25519" },
          { name: "ed25519-sk" },
          { name: "mldsa44-ed25519" },
          { name: "rsa" },
        ],
      },
    },
    {
      name: "-U",
      description:
        "When used in combination with -s or -Y sign, this option indicates that a CA key resides in a ssh-agent(1)",
    },
    {
      name: "-u",
      description:
        "Update a KRL (with -k, add the keys listed on the command line to the existing KRL)",
    },
    {
      name: "-V",
      description: "Specify a validity interval when signing a certificate",
      args: {
        name: "validity_interval",
        description: "Value for validity interval",
      },
    },
    {
      name: "-v",
      description: "Verbose mode",
      isRepeatable: 3,
    },
    {
      name: "-w",
      description:
        "Specifies a path to a library that will be used when creating FIDO authenticator-hosted keys",
      args: {
        name: "provider",
        description:
          "Path to library to be used when creating FIDO authenticator-hosted keys",
      },
    },
    {
      name: "-Y",
      description:
        "Signature operations: find-principals, match-principals, check-novalidate, sign or verify",
      args: {
        name: "command",
        suggestions: [
          {
            name: "find-principals",
            description:
              "Find the principal(s) associated with the public key of a signature",
          },
          {
            name: "match-principals",
            description:
              "Find the principal matching the name provided with -I in the allowed signers file",
          },
          {
            name: "check-novalidate",
            description:
              "Checks that a signature generated using ssh-keygen -Y sign has a valid structure",
          },
          {
            name: "sign",
            description:
              "Cryptographically sign a file or some data using a SSH key",
          },
          {
            name: "verify",
            description:
              "Request to verify a signature generated using ssh-keygen -Y",
          },
        ],

        isVariadic: true,
      },
      exclusiveOn: allOptions.filter(
        (option) =>
          option !== "-s" &&
          option !== "-f" &&
          option !== "-I" &&
          option !== "-n" &&
          option !== "-O" &&
          option !== "-r"
      ),
    },
    {
      name: "-y",
      description:
        "Read a private OpenSSH format file and print an OpenSSH public key to stdout",
      exclusiveOn: allOptions.filter((option) => option !== "-f"),
    },
    {
      name: "-Z",
      description:
        "Specifies the cipher to use for encryption when writing an OpenSSH-format private key file",
      args: {
        name: "cipher",
        description: "Cipher to use for encryption",
        default: "aes256-ctr",
      },
    },
    {
      name: "-z",
      description:
        "Specifies a serial number to be embedded in the certificate to distinguish this certificate from others from the same CA",
      args: {
        name: "serial_number",
        description:
          "Serial number to distinguish this certificate (prefix with + to increment for each certificate signed), or the KRL version number with -k",
        default: "0",
      },
    },
  ],

  // Files to sign (-s, -Y sign), keys to revoke (-k, -Q) or the output file (-M)
  args: {
    name: "file",
    isOptional: true,
    isVariadic: true,
    template: "filepaths",
  },
};
export default completionSpec;
