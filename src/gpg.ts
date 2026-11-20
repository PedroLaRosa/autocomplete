// GnuPG v2.5.24 (current stable: tag gnupg-2.5.24 of github.com/gpg/gnupg, matches Homebrew's gnupg formula, 2026-11-20).
// Source: option table in g10/gpg.c and doc/gpg.texi of the gnupg-2.5.24 tag, read statically (not executed); the
// generators were only checked against the locally installed gpg 2.4.4. Dropped since the old spec: --export-all,
// --rfc1991, --emulate-md-encode-bug, --load-extension, --notation-data (now --set-notation), --gen-prime (compiled out
// upstream) and -Z (now -z); --no-comment and --throw-keyid are now --no-comments and --throw-keyids.
// Left out on purpose: undocumented internal options (--display, --ttyname, --use-keyboxd, ...) and the --edit-key menu commands.

const parseAlgorithms = (out: string, label: string): Fig.Suggestion[] => {
  // The algorithm lists in "gpg --version" are wrapped over several indented lines
  const lines = out.split("\n");
  const start = lines.findIndex((line) => line.startsWith(`${label}: `));
  if (start === -1) {
    return [];
  }
  let text = lines[start].slice(label.length + 2);
  for (let i = start + 1; i < lines.length && /^\s+\S/.test(lines[i]); i++) {
    text += ` ${lines[i]}`;
  }
  return text
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => ({ name }));
};

const getCipherAlgorithms: Fig.Generator = {
  script: ["gpg", "--version"],
  postProcess: (out) => parseAlgorithms(out, "Cipher"),
};

const getDigestAlgorithms: Fig.Generator = {
  script: ["gpg", "--version"],
  postProcess: (out) => parseAlgorithms(out, "Hash"),
};

const getPublicKeyAlgorithms: Fig.Generator = {
  script: ["gpg", "--version"],
  postProcess: (out) => parseAlgorithms(out, "Pubkey"),
};

// Key listings in the machine readable format ("--with-colons"), see doc/DETAILS
const parseKeys = (out: string): Fig.Suggestion[] => {
  const suggestions: Fig.Suggestion[] = [];
  const seen = new Set<string>();
  const add = (name: string, description: string) => {
    if (name && !seen.has(name)) {
      seen.add(name);
      suggestions.push({ name, description, icon: "🔑" });
    }
  };

  let usable = false;
  let inPrimary = false;
  let fingerprint = "";
  const uids: string[] = [];
  const flush = () => {
    if (usable && fingerprint) {
      add(fingerprint, uids[0] ?? "Key");
      for (const uid of uids) {
        add(uid.match(/<([^<>]+)>/)?.[1] ?? "", uid);
      }
    }
    fingerprint = "";
    uids.length = 0;
  };

  for (const line of out.split("\n")) {
    const fields = line.split(":");
    switch (fields[0]) {
      case "pub":
      case "sec":
        flush();
        // Skip revoked, expired, disabled and invalid keys
        usable = !["r", "e", "d", "i"].includes(fields[1]);
        inPrimary = true;
        break;
      case "sub":
      case "ssb":
        inPrimary = false;
        break;
      case "fpr":
        if (inPrimary && !fingerprint) {
          fingerprint = fields[9];
        }
        break;
      case "uid":
        if (!["r", "e", "i"].includes(fields[1])) {
          uids.push(
            fields[9].replace(/\\x([0-9a-f]{2})/gi, (_, hex: string) =>
              String.fromCharCode(parseInt(hex, 16))
            )
          );
        }
        break;
      default:
        break;
    }
  }
  flush();
  return suggestions;
};

const getPublicKeys: Fig.Generator = {
  script: ["gpg", "--list-keys", "--with-colons"],
  postProcess: parseKeys,
};

const getSecretKeys: Fig.Generator = {
  script: ["gpg", "--list-secret-keys", "--with-colons"],
  postProcess: parseKeys,
};

const fileArg: Fig.Arg = { name: "file", template: "filepaths" };
const directoryArg: Fig.Arg = { name: "directory", template: "folders" };
const fdArg: Fig.Arg = { name: "fd" };
const optionalFileArg: Fig.Arg = {
  name: "file",
  isOptional: true,
  template: "filepaths",
};
const optionalFilesArg: Fig.Arg = {
  name: "files",
  isOptional: true,
  isVariadic: true,
  template: "filepaths",
};

const cipherAlgoArg: Fig.Arg = {
  name: "name",
  generators: getCipherAlgorithms,
};
const digestAlgoArg: Fig.Arg = {
  name: "name",
  generators: getDigestAlgorithms,
};

// Key and user ID arguments
const publicKeyArg: Fig.Arg = { name: "name", generators: getPublicKeys };
const secretKeyArg: Fig.Arg = { name: "name", generators: getSecretKeys };
const keyArg: Fig.Arg = { name: "key", generators: getPublicKeys };
const userIdArg: Fig.Arg = { name: "user-id", generators: getPublicKeys };
const fprArg: Fig.Arg = { name: "fpr", generators: getPublicKeys };
const keyIdsArg: Fig.Arg = {
  name: "keyIDs",
  isVariadic: true,
  generators: getPublicKeys,
};
const publicKeysArg: Fig.Arg = {
  name: "keys",
  isVariadic: true,
  generators: getPublicKeys,
};
const secretKeysArg: Fig.Arg = {
  name: "keys",
  isVariadic: true,
  generators: getSecretKeys,
};
const optionalPublicKeysArg: Fig.Arg = {
  name: "keys",
  isOptional: true,
  isVariadic: true,
  generators: getPublicKeys,
};
const optionalSecretKeysArg: Fig.Arg = {
  name: "keys",
  isOptional: true,
  isVariadic: true,
  generators: getSecretKeys,
};

// Optional trailing arguments of --quick-generate-key and --quick-add-key
const algoArg: Fig.Arg = {
  name: "algo",
  isOptional: true,
  suggestions: [
    "default",
    "future-default",
    "pqc",
    "rsa",
    "rsa3072",
    "rsa4096",
    "dsa",
    "elg",
    "ed25519",
    "cv25519",
    "card",
  ],
};
const usageArg: Fig.Arg = {
  name: "usage",
  isOptional: true,
  suggestions: ["default", "cert", "sign", "auth", "encr"],
};
const expireArg: Fig.Arg = {
  name: "expire",
  isOptional: true,
  suggestions: ["never", "none", "1y", "2y"],
};

const completionSpec: Fig.Spec = {
  name: "gpg",
  description: "OpenPGP encryption and signing tool",
  options: [
    {
      name: ["-v", "--verbose"],
      description: "Give more information during processing",
      isRepeatable: true,
      exclusiveOn: ["--no-verbose"],
    },
    {
      name: "--no-verbose",
      description: "Reset verbose level to 0",
      exclusiveOn: ["--verbose"],
    },
    { name: ["-q", "--quiet"], description: "Try to be as quiet as possible" },
    {
      name: "--no-tty",
      description:
        "Make sure that the TTY (terminal) is never used for any output",
    },
    {
      name: "--no-greeting",
      description: "Suppress the initial copyright message",
    },
    {
      name: "--debug",
      description: "Set debug flags",
      args: { name: "flags" },
    },
    {
      name: "--debug-level",
      description: "Select the debug level for investigating problems",
      args: {
        name: "level",
        suggestions: [
          { name: "none", description: "No debugging at all" },
          { name: "basic", description: "Some basic debug messages" },
          { name: "advanced", description: "More verbose debug messages" },
          { name: "expert", description: "Even more detailed messages" },
          {
            name: "guru",
            description: "All of the debug messages you can get",
          },
        ],
      },
    },
    { name: "--debug-all", description: "Set all useful debugging flags" },
    {
      name: "--debug-iolbf",
      description: "Set stdout into line buffered mode",
    },
    {
      name: "--debug-set-iobuf-size",
      description:
        "Change the buffer size of the IOBUFs to the given number of kilobytes",
      args: { name: "kilobytes" },
    },
    {
      name: "--debug-allow-large-chunks",
      description:
        "Allow a --chunk-size of up to 4 EiB (for tests and experiments)",
    },
    {
      name: "--debug-no-libgcrypt",
      description:
        'Do not use the debug flags "crypto" and "mpi" to enable similar debug features in Libgcrypt',
    },
    {
      name: ["--display-charset", "--charset"],
      description: "Set the name of the native character set",
      args: {
        name: "name",
        suggestions: [
          "iso-8859-1",
          "iso-8859-2",
          "iso-8859-15",
          "koi8-r",
          "utf-8",
        ],
      },
    },
    {
      name: "--options",
      description: "Read options from file instead of the default options file",
      exclusiveOn: ["--no-options"],
      args: fileArg,
    },
    {
      name: "--no-options",
      description: 'Shortcut for "--options /dev/null"',
      exclusiveOn: ["--options"],
    },
    {
      name: "--logger-fd",
      description:
        "Write log output to the given file descriptor and not to stderr",
      args: fdArg,
    },
    {
      name: ["--log-file", "--logger-file"],
      description: "Write log output to file and not to stderr",
      args: fileArg,
    },
    {
      name: "--log-time",
      description:
        "Prefix all log output with a timestamp even if no log file is used",
    },
    {
      name: "--homedir",
      description: "Set the name of the home directory",
      args: directoryArg,
    },
    {
      name: "--faked-system-time",
      description:
        "Set the system time back or forth to epoch (for testing only)",
      args: { name: "epoch" },
    },
    {
      name: "--default-key",
      description: "Use name as the default key to sign with",
      isRepeatable: true,
      args: secretKeyArg,
    },
    {
      name: "--encrypt-to",
      description:
        "Same as --recipient but intended for use in the options file",
      isRepeatable: true,
      exclusiveOn: ["--no-encrypt-to"],
      args: publicKeyArg,
    },
    {
      name: "--no-encrypt-to",
      description:
        "Disable the use of all --encrypt-to and --hidden-encrypt-to keys",
      exclusiveOn: ["--encrypt-to"],
    },
    {
      name: "--hidden-encrypt-to",
      description:
        "Same as --hidden-recipient but intended for use in the options file",
      isRepeatable: true,
      args: publicKeyArg,
    },
    {
      name: "--default-recipient",
      description: "Use name as default recipient if --recipient is not used",
      exclusiveOn: ["--no-default-recipient", "--default-recipient-self"],
      args: publicKeyArg,
    },
    {
      name: "--default-recipient-self",
      description:
        "Use the default key as default recipient if --recipient is not used",
      exclusiveOn: ["--default-recipient", "--no-default-recipient"],
    },
    {
      name: "--no-default-recipient",
      description: "Reset --default-recipient and --default-recipient-self",
      exclusiveOn: ["--default-recipient", "--default-recipient-self"],
    },
    {
      name: "--group",
      description: "Set up a named group, similar to aliases in email programs",
      isRepeatable: true,
      args: { name: "name=value" },
    },
    {
      name: "--ungroup",
      description: "Remove a given entry from the --group list",
      args: { name: "name" },
    },
    {
      name: "--no-groups",
      description: "Remove all entries from the --group list",
    },
    {
      name: "--compliance",
      description: "Select a compliance mode by name",
      args: {
        name: "mode",
        suggestions: [
          "gnupg",
          "openpgp",
          "rfc4880",
          "rfc4880bis",
          "rfc2440",
          "pgp6",
          "pgp7",
          "pgp8",
          "de-vs",
          "fips",
        ],
      },
    },
    { name: "--gnupg", description: "Use standard GnuPG behavior" },
    {
      name: "--openpgp",
      description:
        "Reset all packet, cipher and digest options to strict OpenPGP behavior",
    },
    {
      name: "--rfc4880",
      description:
        "Reset all packet, cipher and digest options to strict RFC-4880 behavior",
    },
    {
      name: "--rfc2440",
      description:
        "Reset all packet, cipher and digest options to strict RFC-2440 behavior",
    },
    {
      name: "--pgp7",
      description: "Set up all options to be as PGP 7 compliant as possible",
    },
    {
      name: "--pgp8",
      description: "Set up all options to be as PGP 8 compliant as possible",
    },
    {
      name: "--default-new-key-algo",
      description: "Change the default algorithms for key generation",
      args: { name: "algo" },
    },
    {
      name: "--default-new-key-adsk",
      description:
        "Add the subkey with this fingerprint as an Additional Decryption Subkey to newly created keys",
      isRepeatable: true,
      args: { name: "fingerprint" },
    },
    {
      name: "--min-rsa-length",
      description:
        'Adjust the compliance mode "de-vs" for stricter key size requirements',
      args: { name: "bits" },
    },
    {
      name: "--always-trust",
      description: "Identical to --trust-model always",
    },
    {
      name: "--trust-model",
      description: "Set what trust model GnuPG should follow",
      args: {
        name: "model",
        suggestions: [
          {
            name: "pgp",
            description:
              "Web of Trust combined with trust signatures as used in PGP 5.x and later",
          },
          {
            name: "classic",
            description: "Standard Web of Trust as introduced by PGP 2",
          },
          { name: "tofu", description: "Trust On First Use" },
          {
            name: "tofu+pgp",
            description: "Combine TOFU with the Web of Trust",
          },
          {
            name: "direct",
            description:
              "Key validity is set directly by the user and not calculated via the Web of Trust",
          },
          {
            name: "always",
            description:
              "Skip key validation and assume that used keys are always fully valid",
          },
          {
            name: "auto",
            description:
              "Select the trust model depending on the internal trust database",
          },
        ],
      },
    },
    {
      name: "--photo-viewer",
      description: "Set the command line that should be run to view a photo ID",
      args: { name: "command" },
    },
    {
      name: "--known-notation",
      description: "Add name to the list of known critical signature notations",
      isRepeatable: true,
      args: { name: "name" },
    },
    {
      name: "--agent-program",
      description:
        "Specify an agent program to be used for secret key operations",
      args: fileArg,
    },
    {
      name: "--dirmngr-program",
      description: "Specify a dirmngr program to be used for keyserver access",
      args: fileArg,
    },
    {
      name: "--exit-on-status-write-error",
      description:
        "Terminate the process immediately on write errors on the status FD",
    },
    {
      name: "--limit-card-insert-tries",
      description:
        "Limit the number of prompts asking to insert a smartcard to n-1 (0 means no limit)",
      args: { name: "n" },
    },
    {
      name: "--enable-progress-filter",
      description: "Enable certain PROGRESS status outputs",
    },
    {
      name: "--exec-path",
      description: "Set the list of directories to search for photo viewers",
      args: { name: "path" },
    },
    {
      name: "--expert",
      description: "Allow the user to do certain nonsensical or silly things",
    },
    { name: "--no-expert", description: "Disable --expert" },
    {
      name: "--no-secmem-warning",
      description: 'Suppress the warning about "using insecure memory"',
    },
    {
      name: "--require-secmem",
      description: "Refuse to run if GnuPG cannot get secure memory",
    },
    {
      name: "--no-require-secmem",
      description: "Do not refuse to run if GnuPG cannot get secure memory",
    },
    {
      name: "--no-permission-warning",
      description:
        "Suppress the warning about unsafe file and home directory permissions",
    },
    { name: ["-n", "--dry-run"], description: "Don't make any changes" },
    {
      name: ["-i", "--interactive"],
      description: "Prompt before overwriting any files",
    },
    {
      name: "--default-sig-expire",
      description: "Set the default expiration time for data signatures",
      args: { name: "expiration" },
    },
    {
      name: "--ask-sig-expire",
      description: "Prompt for an expiration time when making a data signature",
    },
    {
      name: "--no-ask-sig-expire",
      description:
        "Do not prompt for an expiration time when making a data signature",
    },
    {
      name: "--default-cert-expire",
      description: "Set the default expiration time for key signatures",
      args: { name: "expiration" },
    },
    {
      name: "--ask-cert-expire",
      description: "Prompt for an expiration time when making a key signature",
    },
    {
      name: "--no-ask-cert-expire",
      description:
        "Do not prompt for an expiration time when making a key signature",
    },
    {
      name: "--default-cert-level",
      description: "Set the default check level when signing a key",
      args: {
        name: "n",
        default: "0",
        suggestions: [
          {
            name: "0",
            description:
              "No particular claim as to how carefully you verified the key",
          },
          {
            name: "1",
            description:
              "You believe the key is owned by the person who claims to own it but did not verify it",
          },
          { name: "2", description: "You did casual verification of the key" },
          {
            name: "3",
            description: "You did extensive verification of the key",
          },
        ],
      },
    },
    {
      name: "--min-cert-level",
      description:
        "Treat signatures with a certification level below n as invalid when building the trust database",
      args: { name: "n", default: "2" },
    },
    {
      name: "--ask-cert-level",
      description:
        "Prompt for a certification level when making a key signature",
    },
    {
      name: "--no-ask-cert-level",
      description:
        "Do not prompt for a certification level when making a key signature",
    },
    {
      name: "--enable-large-rsa",
      description:
        "Allow creating RSA secret keys as large as 8192 bit with --generate-key and --batch",
    },
    { name: "--disable-large-rsa", description: "Disable --enable-large-rsa" },
    {
      name: "--enable-dsa2",
      description:
        "Enable hash truncation for all DSA keys even for old DSA keys up to 1024 bit",
    },
    { name: "--disable-dsa2", description: "Disable --enable-dsa2" },
    {
      name: "--personal-cipher-preferences",
      description: "Set the list of personal cipher preferences",
      args: { name: "string" },
    },
    {
      name: "--personal-digest-preferences",
      description: "Set the list of personal digest preferences",
      args: { name: "string" },
    },
    {
      name: "--personal-compress-preferences",
      description: "Set the list of personal compression preferences",
      args: { name: "string" },
    },
    {
      name: "--default-preference-list",
      description: "Set the list of default preferences",
      args: { name: "string" },
    },
    {
      name: "--default-keyserver-url",
      description: "Set the default keyserver URL",
      args: { name: "name" },
    },
    {
      name: "--no-expensive-trust-checks",
      description: "Disable expensive trust checks (experimental use only)",
    },
    {
      name: "--allow-non-selfsigned-uid",
      description:
        "Allow the import and use of keys with user IDs which are not self-signed",
    },
    {
      name: "--no-allow-non-selfsigned-uid",
      description:
        "Do not allow the import and use of keys with user IDs which are not self-signed",
    },
    {
      name: "--allow-freeform-uid",
      description:
        "Disable all checks on the form of the user ID while generating a new one",
    },
    {
      name: "--no-allow-freeform-uid",
      description:
        "Enable the checks on the form of the user ID while generating a new one",
    },
    {
      name: "--preserve-permissions",
      description:
        "Do not change the permissions of a secret keyring back to user read/write only",
    },
    {
      name: "--tofu-default-policy",
      description: "Set the default TOFU policy",
      args: {
        name: "policy",
        default: "auto",
        suggestions: ["auto", "good", "unknown", "bad", "ask"],
      },
    },
    {
      name: "--lock-once",
      description:
        "Lock the databases the first time a lock is requested and do not release the lock until the process terminates",
      exclusiveOn: ["--lock-multiple", "--lock-never"],
    },
    {
      name: "--lock-multiple",
      description: "Release the locks every time a lock is no longer needed",
      exclusiveOn: ["--lock-once", "--lock-never"],
    },
    {
      name: "--lock-never",
      description: "Disable locking entirely",
      exclusiveOn: ["--lock-once", "--lock-multiple"],
    },
    {
      name: ["--compress-algo", "--compression-algo"],
      description: "Use the given compression algorithm",
      args: {
        name: "name",
        suggestions: [
          { name: "zlib", description: "RFC-1950 ZLIB compression" },
          {
            name: "zip",
            description: "RFC-1951 ZIP compression as used by PGP",
          },
          { name: "bzip2", description: "BZIP2 compression" },
          { name: "none", description: "Disable compression" },
          { name: "uncompressed", description: "Disable compression" },
        ],
      },
    },
    {
      name: "--bzip2-decompress-lowmem",
      description:
        "Use a decompression method for BZIP2 compressed files that needs less memory",
    },
    {
      name: "--completes-needed",
      description:
        "Number of completely trusted users to introduce a new key signer",
      args: { name: "n", default: "1" },
    },
    {
      name: "--marginals-needed",
      description:
        "Number of marginally trusted users to introduce a new key signer",
      args: { name: "n", default: "3" },
    },
    {
      name: "--max-cert-depth",
      description: "Maximum depth of a certification chain",
      args: { name: "n", default: "5" },
    },
    {
      name: "--trustdb-name",
      description: "Use file instead of the default trustdb",
      args: fileArg,
    },
    {
      name: "--auto-check-trustdb",
      description:
        "Automatically run --check-trustdb when the Web of Trust information needs an update",
    },
    {
      name: "--no-auto-check-trustdb",
      description: "Never automatically run --check-trustdb",
    },
    {
      name: "--no-auto-trust-new-key",
      description:
        "Do not set the ownertrust of a newly created key to ultimate",
    },
    {
      name: "--add-desig-revoker",
      description:
        "Add the key with this fingerprint as a designated revoker to newly created keys",
      isRepeatable: true,
      args: { name: "[sensitive:]fingerprint" },
    },
    {
      name: "--assert-signer",
      description:
        "Check that at least one valid signature on a file has been made with the specified key",
      isRepeatable: true,
      args: { name: "fpr_or_file" },
    },
    {
      name: "--assert-pubkey-algo",
      description:
        "Check that the public key algorithm of a verified data signature matches the given list",
      isRepeatable: true,
      args: { name: "algolist" },
    },
    {
      name: "--multifile",
      description:
        "Make --verify, --encrypt and --decrypt accept multiple files",
    },
    {
      name: "--input-size-hint",
      description: "Tell GPG the size of the input data in bytes",
      args: { name: "n" },
    },
    {
      name: "--utf8-strings",
      description:
        "Assume that command line arguments are given as UTF-8 strings",
      isRepeatable: true,
      exclusiveOn: ["--no-utf8-strings"],
    },
    {
      name: "--no-utf8-strings",
      description:
        "Assume that command line arguments are given in the character set of --display-charset",
      isRepeatable: true,
      exclusiveOn: ["--utf8-strings"],
    },
    {
      name: "--set-filesize",
      description: "Not for normal use",
      hidden: true,
      args: { name: "n" },
    },
    { name: "--no-literal", description: "Not for normal use", hidden: true },
    {
      name: ["-N", "--set-notation"],
      description:
        "Put the name value pair into data and key signatures as notation data",
      isRepeatable: true,
      args: { name: "name=value" },
    },
    {
      name: "--sig-notation",
      description:
        "Put the name value pair into data signatures as notation data",
      isRepeatable: true,
      args: { name: "name=value" },
    },
    {
      name: "--cert-notation",
      description:
        "Put the name value pair into key signatures as notation data",
      isRepeatable: true,
      args: { name: "name=value" },
    },
    {
      name: "--set-policy-url",
      description: "Use string as Policy URL for data and key signatures",
      args: { name: "string" },
    },
    {
      name: "--sig-policy-url",
      description: "Use string as Policy URL for data signatures",
      args: { name: "string" },
    },
    {
      name: "--cert-policy-url",
      description: "Use string as Policy URL for key signatures",
      args: { name: "string" },
    },
    {
      name: "--sig-keyserver-url",
      description:
        "Use string as a preferred keyserver URL for data signatures",
      args: { name: "string" },
    },
    {
      name: ["-a", "--armor", "--armour"],
      description: "Create ASCII armored output",
    },
    {
      name: ["--no-armor", "--no-armour"],
      description: "Assume the input data is not in ASCII armored format",
    },
    {
      name: ["-o", "--output"],
      description: "Write output to file",
      args: fileArg,
    },
    {
      name: "--max-output",
      description:
        "Limit the number of bytes that will be generated when processing a file",
      args: { name: "n" },
    },
    {
      name: "--comment",
      description:
        "Use string as comment string in cleartext signatures and ASCII armored messages or keys",
      isRepeatable: true,
      exclusiveOn: ["--no-comments"],
      args: { name: "string" },
    },
    {
      name: "--no-comments",
      description: "Remove all comment strings",
      exclusiveOn: ["--comment"],
    },
    {
      name: "--default-comment",
      description: "Remove all comment strings (use --no-comments instead)",
      deprecated: true,
    },
    {
      name: "--emit-version",
      description:
        "Force inclusion of the version string in ASCII armored output",
      isRepeatable: true,
      exclusiveOn: ["--no-emit-version"],
    },
    {
      name: ["--no-emit-version", "--no-version"],
      description: "Omit the version string in ASCII armored output",
      exclusiveOn: ["--emit-version"],
    },
    {
      name: "--not-dash-escaped",
      description: "Make signatures usable for patch files (obsolete)",
      deprecated: true,
    },
    {
      name: "--escape-from-lines",
      description:
        'Mangle lines starting with "From " so that mailers do not change them',
      exclusiveOn: ["--no-escape-from-lines"],
    },
    {
      name: "--no-escape-from-lines",
      description: 'Do not mangle lines starting with "From "',
      exclusiveOn: ["--escape-from-lines"],
    },
    {
      name: ["-t", "--textmode"],
      description:
        "Treat input files as text and store them in the OpenPGP canonical text form",
      exclusiveOn: ["--no-textmode"],
    },
    {
      name: "--no-textmode",
      description: "Do not treat input files as text",
      exclusiveOn: ["--textmode"],
    },
    {
      name: "--set-filename",
      description: "Use string as the filename which is stored inside messages",
      args: { name: "string" },
    },
    {
      name: "--for-your-eyes-only",
      description: "Set the for-your-eyes-only flag in the message",
    },
    {
      name: "--no-for-your-eyes-only",
      description: "Do not set the for-your-eyes-only flag in the message",
    },
    {
      name: "--show-notation",
      description:
        "Show signature notations in signature listings and when verifying a signature",
    },
    {
      name: "--no-show-notation",
      description: "Do not show signature notations",
    },
    {
      name: "--show-policy-url",
      description:
        "Show policy URLs in signature listings and when verifying a signature",
    },
    { name: "--no-show-policy-url", description: "Do not show policy URLs" },
    {
      name: "--show-session-hash",
      description:
        "Emit a SESSION_HASH status line with the hash of the session key during decryption",
    },
    {
      name: "--show-only-session-hash",
      description:
        "Print the hash of the session key during decryption and stop processing",
    },
    {
      name: "--show-session-key",
      description: "Display the session key used for one message",
    },
    {
      name: "--show-only-session-key",
      description:
        "Print the session key used for one message and stop processing",
    },
    {
      name: "--use-embedded-filename",
      description: "Try to create a file with the name embedded in the data",
    },
    {
      name: "--no-use-embedded-filename",
      description: "Do not use the file name embedded in the data",
    },
    {
      name: "--unwrap",
      description:
        "Output the original message with the encryption layer removed when decrypting",
    },
    {
      name: "--mangle-dos-filenames",
      description:
        "Replace all dots but the last by underscores in file names for older Windows versions",
    },
    {
      name: "--no-mangle-dos-filenames",
      description: "Do not mangle file names for older Windows versions",
    },
    {
      name: "--chunk-size",
      description: "Set the OCB encryption chunk size to 2^n bytes",
      args: { name: "n", default: "22" },
    },
    {
      name: "--no-symkey-cache",
      description:
        "Disable the passphrase cache used for symmetric encryption and decryption",
    },
    {
      name: "--skip-verify",
      description: "Skip the signature verification step",
    },
    {
      name: "--list-only",
      description:
        "Skip the actual decryption pass to quickly list the encryption keys",
    },
    {
      name: ["-z", "--compress-level"],
      description:
        "Set the compression level for the ZIP and ZLIB algorithms (0 disables compression)",
      args: {
        name: "n",
        default: "6",
        suggestions: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
    },
    {
      name: "--bzip2-compress-level",
      description: "Set the compression level for the BZIP2 algorithm",
      args: {
        name: "n",
        default: "6",
        suggestions: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
    },
    { name: "--no-compress", description: "Disable compression (same as -z0)" },
    {
      name: "--disable-signer-uid",
      description:
        "Do not embed the user ID of the signing key in data signatures",
    },
    {
      name: "--auto-key-locate",
      description:
        "Automatically locate and retrieve keys as needed using the given mechanisms",
      isRepeatable: true,
      args: {
        name: "mechanisms",
        suggestions: [
          {
            name: "local",
            description: "Locate the key using the local keyrings",
          },
          {
            name: "cert",
            description: "Locate a key using DNS CERT (RFC-4398)",
          },
          { name: "dane", description: "Locate a key using DANE" },
          {
            name: "wkd",
            description: "Locate a key using the Web Key Directory protocol",
          },
          {
            name: "ldap",
            description: "Locate the key using the configured LDAP servers",
          },
          {
            name: "ntds",
            description:
              "Locate the key using the Active Directory (Windows only)",
          },
          { name: "keyserver", description: "Locate a key using a keyserver" },
          {
            name: "nodefault",
            description: "Disable the standard local key lookup",
          },
          { name: "clear", description: "Clear all defined mechanisms" },
        ],
      },
    },
    {
      name: "--no-auto-key-locate",
      description: "Reset the list of mechanisms used to locate keys",
    },
    {
      name: "--auto-key-import",
      description:
        "Import a missing key from a signature, if it is embedded in the signature",
    },
    {
      name: "--no-auto-key-import",
      description: "Do not import a missing key from a signature",
    },
    {
      name: "--auto-key-retrieve",
      description:
        "Automatically retrieve keys from a keyserver when verifying signatures",
    },
    {
      name: "--no-auto-key-retrieve",
      description: "Disable the automatic retrieving of keys from a keyserver",
    },
    {
      name: "--auto-key-upload",
      description:
        "Upload a newly created key directly to the configured LDAP keyserver",
    },
    {
      name: "--no-auto-key-upload",
      description: "Do not upload newly created keys to the LDAP keyserver",
    },
    {
      name: "--include-key-block",
      description: "Embed the actual signing key into a data signature",
    },
    {
      name: "--no-include-key-block",
      description: "Do not embed the signing key into a data signature",
    },
    {
      name: "--disable-dirmngr",
      description: "Entirely disable the use of the Dirmngr",
    },
    {
      name: "--keyserver",
      description:
        "Set the keyserver to use (deprecated, use dirmngr.conf instead)",
      deprecated: true,
      args: { name: "name" },
    },
    {
      name: "--keyserver-options",
      description:
        "Set options for the keyserver as a space or comma delimited string",
      args: {
        name: "options",
        suggestions: [
          {
            name: "include-revoked",
            description:
              "Include keys marked as revoked on the keyserver when searching",
          },
          {
            name: "include-disabled",
            description:
              "Include keys marked as disabled on the keyserver when searching",
          },
          {
            name: "honor-keyserver-url",
            description:
              "Use the preferred keyserver URL of a key when refreshing it",
          },
          {
            name: "include-subkeys",
            description:
              "Include subkeys as potential targets when receiving a key",
          },
          { name: "only-pubkeys", description: "Do not import secret keys" },
          {
            name: "update-before-send",
            description:
              "Retrieve and merge a key before sending it to an LDAP server",
          },
        ],
      },
    },
    {
      name: "--key-origin",
      description: "Track the origin of imported keys",
      args: { name: "string[,url]" },
    },
    {
      name: "--import-options",
      description:
        "Set options for importing keys as a space or comma delimited string",
      args: {
        name: "options",
        suggestions: [
          {
            name: "import-local-sigs",
            description: "Allow importing key signatures marked as local",
          },
          {
            name: "keep-ownertrust",
            description:
              "Keep the existing ownertrust value of an imported key",
          },
          {
            name: "repair-pks-subkey-bug",
            description:
              "Repair subkey bindings damaged by the PKS keyserver bug",
          },
          {
            name: "import-show",
            description: "Show a listing of the imported keys",
          },
          {
            name: "show-only",
            description: "Show the keys but do not actually import them",
          },
          {
            name: "import-export",
            description:
              "Run the import in dry-run mode and write the keys to the output",
          },
          {
            name: "merge-only",
            description:
              "Do not insert new keys, only merge new signatures, user IDs and subkeys",
          },
          {
            name: "import-clean",
            description:
              "Remove expired and invalid signatures and user IDs after import",
          },
          {
            name: "self-sigs-only",
            description: "Accept only self-signatures",
          },
          {
            name: "ignore-attributes",
            description: "Ignore attribute user IDs such as photo IDs",
          },
          {
            name: "repair-keys",
            description: "Repair damaged keys while importing",
          },
          {
            name: "bulk-import",
            description: "Speed up the import of many keys",
          },
          {
            name: "import-minimal",
            description: "Import only the minimal key material",
          },
          {
            name: "restore",
            description: "Import secret keys in their original form",
          },
          {
            name: "import-restore",
            description: "Import secret keys in their original form",
          },
        ],
      },
    },
    {
      name: "--import-filter",
      description:
        "Define a filter applied to imported keyblocks before they are stored",
      isRepeatable: true,
      args: { name: "name=expr" },
    },
    {
      name: "--export-options",
      description:
        "Set options for exporting keys as a space or comma delimited string",
      args: {
        name: "options",
        suggestions: [
          {
            name: "export-local-sigs",
            description: "Allow exporting key signatures marked as local",
          },
          {
            name: "export-attributes",
            description: "Include attribute user IDs such as photo IDs",
          },
          {
            name: "export-sensitive-revkeys",
            description:
              "Include designated revoker information that was marked as sensitive",
          },
          {
            name: "backup",
            description: "Export in a form suitable for backup",
          },
          {
            name: "export-backup",
            description: "Export in a form suitable for backup",
          },
          {
            name: "export-clean",
            description:
              "Remove expired and invalid signatures and user IDs when exporting",
          },
          {
            name: "export-minimal",
            description: "Export only the minimal key material",
          },
          {
            name: "keep-expired-subkeys",
            description: "Keep expired subkeys in the export",
          },
          {
            name: "export-revocs",
            description: "Export only the revocation certificates",
          },
          { name: "export-dane", description: "Export in the DANE format" },
          {
            name: "mode1003",
            description:
              "Use the GNU specific secret key format for all key types",
          },
        ],
      },
    },
    {
      name: "--export-filter",
      description:
        "Define a filter applied to exported keyblocks before they are written",
      isRepeatable: true,
      args: { name: "name=expr" },
    },
    {
      name: "--merge-only",
      description: "Do not insert new keys into the keyrings",
    },
    {
      name: "--allow-secret-key-import",
      description: "Obsolete option which is not used anywhere",
      deprecated: true,
    },
    {
      name: "--list-options",
      description:
        "Set options for listing keys and signatures as a space or comma delimited string",
      args: {
        name: "options",
        suggestions: [
          {
            name: "show-photos",
            description: "Display photo IDs attached to the key",
          },
          {
            name: "show-usage",
            description: "Show usage information for keys and subkeys",
          },
          {
            name: "show-ownertrust",
            description: "Show the ownertrust value for keys",
          },
          {
            name: "show-trustsig",
            description: "Show information about trust signatures",
          },
          {
            name: "show-policy-urls",
            description: "Show policy URLs in the --check-signatures listings",
          },
          {
            name: "show-notations",
            description:
              "Show all signature notations in the --check-sigs listings",
          },
          {
            name: "show-std-notations",
            description: "Show IETF standard signature notations",
          },
          {
            name: "show-user-notations",
            description: "Show user-defined signature notations",
          },
          {
            name: "show-hidden-notations",
            description: "Show hidden signature notations",
          },
          {
            name: "show-x509-notations",
            description:
              "Print X.509 certificates embedded in key signatures as PEM data",
          },
          {
            name: "store-x509-notations",
            description:
              "Store X.509 certificates embedded in key signatures as PEM files",
          },
          {
            name: "show-keyserver-urls",
            description:
              "Show any preferred keyserver URL in the --check-signatures listings",
          },
          {
            name: "show-uid-validity",
            description: "Display the calculated validity of user IDs",
          },
          {
            name: "show-unusable-uids",
            description: "Show revoked and expired user IDs",
          },
          {
            name: "show-unusable-subkeys",
            description: "Show revoked and expired subkeys",
          },
          {
            name: "show-unusable-sigs",
            description:
              "Show key signatures made using weak or unsupported algorithms",
          },
          {
            name: "show-keyring",
            description: "Display the keyring name at the head of key listings",
          },
          {
            name: "show-sig-expire",
            description:
              "Show signature expiration dates during --check-signatures listings",
          },
          {
            name: "show-sig-subpackets",
            description: "Include signature subpackets in the key listing",
          },
          {
            name: "show-only-fpr-mbox",
            description:
              "Print only the fingerprint and mail address for each user ID",
          },
          {
            name: "sort-sigs",
            description: "Sort signatures by key ID and creation time",
          },
        ],
      },
    },
    {
      name: "--list-filter",
      description:
        "Output only keys matching the expression during key listing commands",
      isRepeatable: true,
      args: { name: "select=expr" },
    },
    {
      name: "--full-timestrings",
      description:
        "Print creation and expiration times as date and time instead of just the date",
    },
    {
      name: "--show-photos",
      description:
        "Display any photo IDs attached to the key in key listings and when verifying a signature",
      deprecated: true,
    },
    {
      name: "--no-show-photos",
      description: "Do not display photo IDs",
      deprecated: true,
    },
    {
      name: "--with-colons",
      description: "Print key listings delimited by colons",
    },
    {
      name: "--with-key-data",
      description:
        "Print key listings delimited by colons and print the public key data",
    },
    {
      name: "--with-sig-list",
      description:
        "Include the signatures in key listings (like --list-signatures)",
    },
    {
      name: "--with-sig-check",
      description:
        "Include and verify the signatures in key listings (like --check-signatures)",
    },
    {
      name: "--with-v5-fingerprint",
      description:
        'Emit "fp2" lines for version 4 OpenPGP keys having a v5 style fingerprint in colon mode listings',
    },
    {
      name: "--with-fingerprint",
      description: "Print the fingerprint in key listings like --fingerprint",
    },
    {
      name: ["--with-subkey-fingerprint", "--with-subkey-fingerprints"],
      description: "Print the fingerprints of all subkeys in key listings",
    },
    {
      name: "--without-subkey-fingerprint",
      description: "Do not print the fingerprints of subkeys in key listings",
    },
    {
      name: "--with-icao-spelling",
      description:
        "Print the ICAO spelling of the fingerprint in addition to the hex digits",
    },
    {
      name: "--with-keygrip",
      description: "Include the keygrip in key listings",
    },
    {
      name: "--with-secret",
      description:
        "Include info about the presence of a secret key in public key listings done with --with-colons",
    },
    {
      name: "--with-wkd-hash",
      description:
        "Print a Web Key Directory identifier along with each user ID in key listings",
    },
    {
      name: "--with-key-origin",
      description:
        "Include the locally held information on the origin and last update of a key in key listings",
    },
    {
      name: "--fast-list-mode",
      description:
        "Make the list commands work faster by leaving some parts empty",
    },
    {
      name: "--fixed-list-mode",
      description: "Obsolete option, this listing mode is always used",
      deprecated: true,
    },
    {
      name: "--legacy-list-mode",
      description: "Revert to the pre-2.1 public key list mode",
    },
    {
      name: "--keyid-format",
      description: "Select how to display key IDs",
      args: {
        name: "format",
        suggestions: ["none", "short", "0xshort", "long", "0xlong"],
      },
    },
    {
      name: "--show-keyring",
      description: "Display the keyring name at the head of key listings",
    },
    {
      name: ["-r", "--recipient"],
      description: "Encrypt for user id name",
      isRepeatable: true,
      args: publicKeyArg,
    },
    {
      name: ["-R", "--hidden-recipient"],
      description:
        "Encrypt for user ID name, but hide the key ID of this user's key",
      isRepeatable: true,
      args: publicKeyArg,
    },
    {
      name: ["-f", "--recipient-file"],
      description: "Encrypt to the key stored in file",
      isRepeatable: true,
      args: fileArg,
    },
    {
      name: ["-F", "--hidden-recipient-file"],
      description:
        "Encrypt to the key stored in file, but hide the key ID of this key",
      isRepeatable: true,
      args: fileArg,
    },
    {
      name: "--throw-keyids",
      description: "Do not put the recipient key IDs into encrypted messages",
      exclusiveOn: ["--no-throw-keyids"],
    },
    {
      name: "--no-throw-keyids",
      description: "Put the recipient key IDs into encrypted messages",
      exclusiveOn: ["--throw-keyids"],
    },
    {
      name: ["-u", "--local-user"],
      description: "Use name as the key to sign with",
      isRepeatable: true,
      args: secretKeyArg,
    },
    {
      name: "--trusted-key",
      description:
        "Assume that the specified key is as trustworthy as one of your own secret keys",
      isRepeatable: true,
      args: { name: "long key ID or fingerprint" },
    },
    {
      name: "--sender",
      description:
        "Set the signer's user ID or mail address to embed in signatures and to check when verifying",
      isRepeatable: true,
      args: { name: "mbox" },
    },
    {
      name: "--try-secret-key",
      description:
        "Add a secret key to be used for trial decryption of hidden recipients",
      isRepeatable: true,
      args: secretKeyArg,
    },
    {
      name: "--try-all-secrets",
      description:
        "Try all secret keys in turn to find the right decryption key",
    },
    {
      name: "--no-default-keyring",
      description: "Do not add the default keyring to the list of keyrings",
    },
    { name: "--no-keyring", description: "Do not use any keyring at all" },
    {
      name: "--keyring",
      description: "Add file to the current list of keyrings",
      isRepeatable: true,
      args: fileArg,
    },
    {
      name: "--primary-keyring",
      description: "Designate file as the primary public keyring",
      args: fileArg,
    },
    {
      name: "--secret-keyring",
      description:
        "Obsolete and ignored option; all secret keys are stored in gpg-agent",
      deprecated: true,
      args: fileArg,
    },
    {
      name: "--skip-hidden-recipients",
      description: "Skip all anonymous recipients during decryption",
    },
    {
      name: "--no-skip-hidden-recipients",
      description: "Do not skip anonymous recipients during decryption",
    },
    {
      name: "--override-session-key",
      description: "Don't use the public key but the session key string",
      args: { name: "string" },
    },
    {
      name: "--override-session-key-fd",
      description:
        "Don't use the public key but the session key read from the file descriptor",
      args: fdArg,
    },
    {
      name: "--s2k-mode",
      description:
        "Select how passphrases for symmetric encryption are mangled",
      args: {
        name: "n",
        default: "3",
        suggestions: [
          {
            name: "0",
            description: "Use a plain passphrase (not recommended)",
          },
          {
            name: "1",
            description: "Add a salt to the passphrase (should not be used)",
          },
          {
            name: "3",
            description: "Iterate the whole process a number of times",
          },
        ],
      },
    },
    {
      name: "--s2k-digest-algo",
      description:
        "Use name as the digest algorithm used to mangle the passphrases for symmetric encryption",
      args: digestAlgoArg,
    },
    {
      name: "--s2k-cipher-algo",
      description:
        "Use name as the cipher algorithm for symmetric encryption with a passphrase",
      args: cipherAlgoArg,
    },
    {
      name: "--s2k-count",
      description:
        "Specify how many times the passphrase mangling for symmetric encryption is repeated",
      args: { name: "n" },
    },
    {
      name: "--force-ocb",
      description: "Force the use of the OCB mode over CFB+MDC mode",
    },
    {
      name: "--force-aead",
      description: "Deprecated alias for --force-ocb",
      deprecated: true,
    },
    {
      name: "--use-ocb-sym",
      description: "Use the OCB mode for symmetric-only encryption",
    },
    {
      name: ["--require-cross-certification", "--require-backsigs"],
      description:
        "Ensure that the cross certification back signature on a signing subkey is present and valid",
    },
    {
      name: ["--no-require-cross-certification", "--no-require-backsigs"],
      description:
        "Do not require the cross certification back signature on signing subkeys",
    },
    {
      name: "--allow-weak-key-signatures",
      description: "Allow third-party key signatures made using SHA-1",
    },
    {
      name: "--allow-weak-digest-algos",
      description: "Allow signatures made with known-weak digest algorithms",
    },
    {
      name: "--allow-old-cipher-algos",
      description:
        "Allow encryption with cipher algorithms that use 64 bit blocks (3DES, IDEA, CAST5)",
    },
    {
      name: "--weak-digest",
      description: "Treat the specified digest algorithm as weak",
      isRepeatable: true,
      args: digestAlgoArg,
    },
    {
      name: "--verify-options",
      description:
        "Set options used when verifying signatures as a space or comma delimited string",
      args: {
        name: "options",
        suggestions: [
          {
            name: "show-photos",
            description: "Display any photo IDs attached to the key",
          },
          {
            name: "show-policy-urls",
            description: "Show policy URLs in the signature being verified",
          },
          {
            name: "show-notations",
            description:
              "Show all signature notations in the signature being verified",
          },
          {
            name: "show-std-notations",
            description: "Show IETF standard signature notations",
          },
          {
            name: "show-user-notations",
            description: "Show user-defined signature notations",
          },
          {
            name: "show-hidden-notations",
            description: "Show hidden signature notations",
          },
          {
            name: "show-keyserver-urls",
            description:
              "Show any preferred keyserver URL in the signature being verified",
          },
          {
            name: "show-uid-validity",
            description: "Display the calculated validity of the user IDs",
          },
          {
            name: "show-unusable-uids",
            description: "Show revoked and expired user IDs",
          },
          {
            name: "show-primary-uid-only",
            description: "Show only the primary user ID",
          },
        ],
      },
    },
    {
      name: "--no-random-seed-file",
      description:
        "Do not use a file to store the internal random pool over invocations",
    },
    {
      name: "--no-sig-cache",
      description: "Do not cache the verification status of key signatures",
    },
    {
      name: "--ignore-time-conflict",
      description:
        "Make the check of key and signature timestamps just a warning",
    },
    {
      name: "--ignore-valid-from",
      description: "Allow the use of subkeys created in the future",
    },
    {
      name: "--ignore-crc-error",
      description: "Ignore CRC errors in ASCII armor",
    },
    {
      name: "--ignore-mdc-error",
      description: "Change a MDC integrity protection failure into a warning",
    },
    {
      name: "--disable-cipher-algo",
      description: "Never allow the use of name as cipher algorithm",
      args: cipherAlgoArg,
    },
    {
      name: "--disable-pubkey-algo",
      description: "Never allow the use of name as public key algorithm",
      args: { name: "name", generators: getPublicKeyAlgorithms },
    },
    {
      name: "--cipher-algo",
      description: "Use name as cipher algorithm",
      args: cipherAlgoArg,
    },
    {
      name: "--digest-algo",
      description: "Use name as the message digest algorithm",
      args: digestAlgoArg,
    },
    {
      name: "--cert-digest-algo",
      description:
        "Use name as the message digest algorithm used when signing a key",
      args: digestAlgoArg,
    },
    {
      name: "--allow-9980",
      description:
        "Allow processing of some data formats specified by RFC-9980 (PQC for OpenPGP)",
    },
    {
      name: "--require-pqc-encryption",
      description: "Force the use of quantum-resistant encryption algorithms",
    },
    {
      name: "--disable-pqc-encryption",
      description:
        "Disable quantum-resistant subkeys and use a subkey with a non-quantum-resistant algorithm",
    },
    {
      name: "--batch",
      description: "Use batch mode",
      exclusiveOn: ["--no-batch"],
    },
    {
      name: "--no-batch",
      description: "Disable batch mode",
      exclusiveOn: ["--batch"],
    },
    {
      name: "--proc-all-sigs",
      description:
        "Process all signatures even if --batch is used and a bad signature was found",
    },
    {
      name: "--yes",
      description: 'Assume "yes" on most questions',
      exclusiveOn: ["--no"],
    },
    {
      name: "--no",
      description: 'Assume "no" on most questions',
      exclusiveOn: ["--yes"],
    },
    {
      name: "--status-fd",
      description: "Write special status strings to the file descriptor",
      args: fdArg,
    },
    {
      name: "--status-file",
      description: "Write special status strings to file",
      args: fileArg,
    },
    {
      name: "--attribute-fd",
      description: "Write attribute subpackets to the file descriptor",
      args: fdArg,
    },
    {
      name: "--attribute-file",
      description: "Write attribute subpackets to file",
      args: fileArg,
    },
    {
      name: "--command-fd",
      description:
        "Read the commands for interactive menus from the file descriptor",
      args: fdArg,
    },
    {
      name: "--command-file",
      description: "Read the commands for interactive menus from file",
      args: fileArg,
    },
    {
      name: "--passphrase",
      description: "Use string as the passphrase",
      args: { name: "string" },
    },
    {
      name: "--passphrase-fd",
      description: "Read the passphrase from the file descriptor",
      args: fdArg,
    },
    {
      name: "--passphrase-file",
      description: "Read the passphrase from file",
      args: fileArg,
    },
    {
      name: "--passphrase-repeat",
      description:
        "Specify how many times gpg will request a new passphrase be repeated",
      args: { name: "n", default: "1" },
    },
    {
      name: "--pinentry-mode",
      description: "Set the pinentry mode",
      args: {
        name: "mode",
        suggestions: [
          {
            name: "default",
            description: "Use the default of the agent, which is ask",
          },
          { name: "ask", description: "Force the use of the Pinentry" },
          {
            name: "cancel",
            description: "Emulate use of the cancel button of Pinentry",
          },
          { name: "error", description: "Return a Pinentry error" },
          {
            name: "loopback",
            description: "Redirect Pinentry queries to the caller",
          },
        ],
      },
    },
    {
      name: "--force-sign-key",
      description:
        "Force the creation of a key signature even if one already exists",
    },
    {
      name: "--enable-special-filenames",
      description:
        "Treat file names of the form -&n as referring to file descriptor n",
    },
    {
      name: "--disable-fd-translation",
      description:
        "Expect libc file descriptors instead of HANDLEs for all following options",
    },
    {
      name: "--request-origin",
      description: "Assume that the operation ultimately originated at origin",
      args: {
        name: "origin",
        default: "local",
        suggestions: ["local", "remote", "browser"],
      },
    },
    {
      name: "--chuid",
      description:
        "Change the current user to uid, which may either be a number or a name",
      args: { name: "uid" },
    },
    {
      name: "--no-autostart",
      description:
        "Do not start the gpg-agent or the dirmngr if it has not yet been started",
    },
    {
      name: "--forbid-gen-key",
      description: "Disallow the use of the generate key commands",
    },
    {
      name: "--require-compliance",
      description:
        "Fail if the data is not encrypted according to the rules of the current compliance mode",
    },
    {
      name: "--compatibility-flags",
      description:
        "Set compatibility flags to work around problems due to non-compliant keys or data",
      args: {
        name: "flags",
        suggestions: [
          "none",
          "parallelized",
          "t7014-old",
          "compr-keys",
          "no-manu",
          "suggest-embedded-name",
          "allow-not-dash-escaped",
          "no-partial-file-guard",
        ],
      },
    },
    {
      name: "--debug-ignore-expiration",
      description:
        "Try to override certain key expiration dates (for testing only)",
    },
    {
      name: "--use-agent",
      description: "Dummy option, gpg always requires the agent",
      deprecated: true,
    },
    {
      name: "--no-use-agent",
      description: "Dummy option, gpg always requires the agent",
      deprecated: true,
    },
    {
      name: "--gpg-agent-info",
      description: "Dummy option with no effect",
      deprecated: true,
      args: { name: "string" },
    },
    {
      name: "--honor-http-proxy",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
    {
      name: "--pgp6",
      description: "Obsolete alias for --pgp7",
      deprecated: true,
    },
    {
      name: "--rfc4880bis",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
    {
      name: "--force-v3-sigs",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
    {
      name: "--no-force-v3-sigs",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
    {
      name: "--force-v4-certs",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
    {
      name: "--no-force-v4-certs",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
    {
      name: "--force-mdc",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
    {
      name: "--disable-mdc",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
    {
      name: "--allow-multiple-messages",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
    {
      name: "--no-allow-multiple-messages",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
    {
      name: "--aead-algo",
      description: "Deprecated option with no effect since version 2.3.9",
      deprecated: true,
      args: { name: "name" },
    },
    {
      name: "--personal-aead-preferences",
      description: "Deprecated option with no effect since version 2.3.9",
      deprecated: true,
      args: { name: "string" },
    },
    {
      name: "--override-compliance-check",
      description: "Obsolete option with no effect",
      deprecated: true,
    },
  ],
  subcommands: [
    {
      name: ["-s", "--sign"],
      description: "Make a signature",
      args: optionalFileArg,
    },
    {
      name: ["--clear-sign", "--clearsign"],
      description: "Make a cleartext signature",
      args: optionalFileArg,
    },
    {
      name: ["-b", "--detach-sign"],
      description: "Make a detached signature",
      args: optionalFileArg,
    },
    {
      name: ["-e", "--encrypt"],
      description: "Encrypt data to one or more public keys",
      args: optionalFileArg,
    },
    {
      name: ["-c", "--symmetric"],
      description: "Encrypt with a symmetric cipher using a passphrase",
      args: optionalFileArg,
    },
    {
      name: "--store",
      description: "Store only (make a simple literal data packet)",
      args: optionalFileArg,
    },
    {
      name: "--add-recipients",
      description:
        "Add recipients to an encrypted file without fully decrypting it",
      args: optionalFileArg,
    },
    {
      name: "--change-recipients",
      description:
        "Replace the recipients of an encrypted file without fully decrypting it",
      args: optionalFileArg,
    },
    {
      name: ["-d", "--decrypt"],
      description:
        "Decrypt a file (or stdin if no file is specified) and write it to stdout",
      args: optionalFileArg,
    },
    {
      name: "--verify",
      description: "Verify a signature without generating any output",
      args: [
        { name: "sigfile", isOptional: true, template: "filepaths" },
        {
          name: "signed-files",
          isOptional: true,
          isVariadic: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "--verify-files",
      description: "Identical to --multifile --verify",
      args: optionalFilesArg,
    },
    {
      name: "--encrypt-files",
      description: "Identical to --multifile --encrypt",
      args: optionalFilesArg,
    },
    {
      name: "--decrypt-files",
      description: "Identical to --multifile --decrypt",
      args: optionalFilesArg,
    },
    {
      name: ["-k", "--list-keys", "--list-public-keys"],
      description:
        "List the specified keys, or all keys from the public keyrings",
      args: optionalPublicKeysArg,
    },
    {
      name: ["-K", "--list-secret-keys"],
      description: "List the specified secret keys, or all known secret keys",
      args: optionalSecretKeysArg,
    },
    {
      name: ["--list-signatures", "--list-sigs"],
      description: "Same as --list-keys, but the signatures are listed too",
      args: optionalPublicKeysArg,
    },
    {
      name: ["--check-signatures", "--check-sigs"],
      description:
        "Same as --list-keys, but the key signatures are verified and listed too",
      args: optionalPublicKeysArg,
    },
    {
      name: "--locate-keys",
      description:
        "Locate the keys given as arguments, using external methods defined by --auto-key-locate if needed",
      args: { name: "user-ids", isOptional: true, isVariadic: true },
    },
    {
      name: "--locate-external-keys",
      description:
        "Locate the keys given as arguments without considering locally existing keys",
      args: { name: "user-ids", isOptional: true, isVariadic: true },
    },
    {
      name: "--show-keys",
      description: "Print information about the OpenPGP keys given as input",
      args: optionalFilesArg,
    },
    {
      name: "--fingerprint",
      description:
        "List all keys (or the specified ones) along with their fingerprints",
      args: optionalPublicKeysArg,
    },
    {
      name: "--list-packets",
      description: "List only the sequence of packets",
      args: optionalFilesArg,
    },
    {
      name: ["--edit-card", "--card-edit"],
      description: "Present a menu to work with a smartcard",
    },
    { name: "--card-status", description: "Show the content of the smartcard" },
    {
      name: "--change-pin",
      description: "Present a menu to allow changing the PIN of a smartcard",
    },
    {
      name: ["--delete-keys", "--delete-key"],
      description: "Remove keys from the public keyring",
      args: publicKeysArg,
    },
    {
      name: ["--delete-secret-keys", "--delete-secret-key"],
      description: "Remove keys from the secret keyring",
      args: secretKeysArg,
    },
    {
      name: [
        "--delete-secret-and-public-keys",
        "--delete-secret-and-public-key",
      ],
      description: "Remove keys from the secret and public keyring",
      args: publicKeysArg,
    },
    {
      name: "--export",
      description:
        "Export all keys, or those of the given names, from all keyrings",
      args: optionalPublicKeysArg,
    },
    {
      name: "--send-keys",
      description: "Export keys and send them to a keyserver",
      args: keyIdsArg,
    },
    {
      name: "--export-secret-keys",
      description: "Export the secret keys instead of the public keys",
      args: optionalSecretKeysArg,
    },
    {
      name: "--export-secret-subkeys",
      description:
        "Export the secret subkeys, rendering the secret part of the primary key useless",
      args: optionalSecretKeysArg,
    },
    {
      name: "--export-ssh-key",
      description: "Export a key in the OpenSSH public key format",
      args: keyArg,
    },
    {
      name: ["--import", "--fast-import"],
      description: "Import/merge keys",
      args: optionalFilesArg,
    },
    {
      name: ["--receive-keys", "--recv-keys"],
      description: "Import the keys with the given key IDs from a keyserver",
      args: { name: "keyIDs", isVariadic: true },
    },
    {
      name: "--refresh-keys",
      description:
        "Request updates from a keyserver for keys that already exist on the local keyring",
      args: optionalPublicKeysArg,
    },
    {
      name: "--search-keys",
      description: "Search the keyserver for the given names",
      args: { name: "names", isVariadic: true },
    },
    {
      name: "--fetch-keys",
      description: "Retrieve keys located at the specified URIs",
      args: { name: "URIs", isVariadic: true },
    },
    {
      name: "--update-trustdb",
      description:
        "Do trust database maintenance, asking for missing ownertrust values",
    },
    {
      name: "--check-trustdb",
      description: "Do trust database maintenance without user interaction",
    },
    {
      name: "--export-ownertrust",
      description: "Send the ownertrust values to stdout",
    },
    {
      name: "--import-ownertrust",
      description:
        "Update the trustdb with the ownertrust values stored in files (or stdin)",
      args: optionalFilesArg,
    },
    {
      name: "--rebuild-keydb-caches",
      description: "Create signature caches in the keyring",
    },
    {
      name: "--print-md",
      description:
        "Print message digest of algorithm algo for all given files or stdin",
      args: [
        { name: "algo", generators: getDigestAlgorithms },
        optionalFilesArg,
      ],
    },
    {
      name: "--print-mds",
      description:
        "Print message digests of all available algorithms for all given files or stdin",
      args: optionalFilesArg,
    },
    {
      name: "--gen-random",
      description: "Emit count random bytes of the given quality level",
      args: [
        {
          name: "quality",
          suggestions: [
            { name: "0", description: "Lowest quality" },
            { name: "1", description: "Strong quality" },
            { name: "2", description: "Very strong quality" },
            {
              name: "16",
              description:
                "Quality 1 as an endless stream of hex-encoded octets",
            },
            { name: "30", description: "Emit 30 zBase-32 characters" },
          ],
        },
        { name: "count", isOptional: true },
      ],
    },
    {
      name: "--enarmor",
      description: "Pack an arbitrary input into an OpenPGP ASCII armor",
      args: optionalFileArg,
    },
    {
      name: ["--dearmor", "--dearmour"],
      description:
        "Unpack an OpenPGP ASCII armor (or PEM armor) into binary data",
      args: optionalFileArg,
    },
    {
      name: "--tofu-policy",
      description:
        "Set the TOFU policy for all the bindings associated with the specified keys",
      args: [
        {
          name: "policy",
          suggestions: ["auto", "good", "unknown", "bad", "ask"],
        },
        publicKeysArg,
      ],
    },
    {
      name: ["--quick-generate-key", "--quick-gen-key"],
      description: "Generate a standard key with one user ID without prompts",
      args: [{ name: "user-id" }, algoArg, usageArg, expireArg],
    },
    {
      name: ["--generate-key", "--gen-key"],
      description:
        "Generate a new key pair using the current default parameters",
    },
    {
      name: ["--full-generate-key", "--full-gen-key"],
      description: "Generate a new key pair with dialogs for all options",
    },
    {
      name: ["--generate-revocation", "--gen-revoke"],
      description: "Generate a revocation certificate for the complete key",
      args: keyArg,
    },
    {
      name: ["--generate-designated-revocation", "--desig-revoke"],
      description: "Generate a designated revocation certificate for a key",
      args: keyArg,
    },
    {
      name: "--quick-set-expire",
      description:
        "Directly set the expiration time of the primary key, or of its subkeys",
      args: [
        fprArg,
        { name: "expire", suggestions: ["0", "1y", "2y"] },
        { name: "subfprs", isOptional: true, isVariadic: true },
      ],
    },
    {
      name: "--quick-add-key",
      description:
        "Directly add a subkey to the key identified by the fingerprint",
      args: [fprArg, algoArg, usageArg, expireArg],
    },
    {
      name: "--quick-add-adsk",
      description:
        "Directly add an Additional Decryption Subkey to the key identified by the fingerprint",
      args: [fprArg, { name: "adskfpr" }],
    },
    {
      name: "--quick-add-uid",
      description: "Add a new user ID to an existing key",
      args: [userIdArg, { name: "new-user-id" }],
    },
    {
      name: "--quick-revoke-uid",
      description: "Revoke a user ID on an existing key",
      args: [userIdArg, { name: "user-id-to-revoke" }],
    },
    {
      name: "--quick-revoke-sig",
      description:
        "Revoke the key signatures made by signing-fpr from the specified key",
      args: [
        fprArg,
        { name: "signing-fpr" },
        { name: "names", isOptional: true, isVariadic: true },
      ],
    },
    {
      name: "--quick-set-primary-uid",
      description: "Set or update the primary user ID flag on an existing key",
      args: [userIdArg, { name: "primary-user-id" }],
    },
    {
      name: "--quick-update-pref",
      description:
        "Update the preference list of the key to the current default value",
      args: userIdArg,
    },
    {
      name: "--quick-set-ownertrust",
      description: "Set the ownertrust of a key or its disable flag",
      args: [
        userIdArg,
        {
          name: "value",
          suggestions: [
            "undefined",
            "never",
            "marginal",
            "full",
            "ultimate",
            "enable",
            "disable",
          ],
        },
      ],
    },
    {
      name: "--quick-sign-key",
      description: "Directly sign a key without any further user interaction",
      args: [fprArg, { name: "names", isOptional: true, isVariadic: true }],
    },
    {
      name: "--quick-lsign-key",
      description:
        "Directly sign a key locally without any further user interaction",
      args: [fprArg, { name: "names", isOptional: true, isVariadic: true }],
    },
    {
      name: "--quick-tsign-key",
      description:
        "Directly sign a key with a trust signature without any further user interaction",
      args: [
        fprArg,
        { name: "trustspec" },
        { name: "names", isOptional: true, isVariadic: true },
      ],
    },
    {
      name: "--sign-key",
      description: "Sign a public key with your secret key",
      args: keyArg,
    },
    {
      name: "--lsign-key",
      description:
        "Sign a public key with your secret key but mark it as non-exportable",
      args: keyArg,
    },
    {
      name: "--edit-key",
      description:
        "Present a menu which enables you to do most of the key management tasks",
      args: [keyArg, { name: "commands", isOptional: true, isVariadic: true }],
    },
    {
      name: ["--change-passphrase", "--passwd"],
      description:
        "Change the passphrase of the secret key belonging to the specified certificate",
      args: userIdArg,
    },
    {
      name: "--list-config",
      description: "Display various internal configuration parameters of GnuPG",
      args: {
        name: "names",
        isOptional: true,
        isVariadic: true,
        suggestions: [
          "group",
          "version",
          "pubkey",
          "pubkeyname",
          "cipher",
          "ciphername",
          "digest",
          "digestname",
          "compress",
          "compressname",
          "ccid-reader-id",
          "curve",
        ],
      },
    },
    {
      name: "--list-gcrypt-config",
      description:
        "Display various internal configuration parameters of Libgcrypt",
      args: { name: "names", isOptional: true, isVariadic: true },
    },
    {
      name: "--gpgconf-list",
      description:
        "Display internal configuration parameters for the gpgconf tool",
    },
    {
      name: "--gpgconf-test",
      description: "Parse the configuration files and report errors",
    },
    {
      name: "--dump-options",
      description: "Print a list of all available options and commands",
    },
    {
      name: "--version",
      description: "Print the program version and licensing information",
    },
    { name: "--warranty", description: "Print warranty information" },
    {
      name: ["-h", "--help"],
      description:
        "Print a usage message summarizing the most useful command-line options",
    },
  ],
};

export default completionSpec;
