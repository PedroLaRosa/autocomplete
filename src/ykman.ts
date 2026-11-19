// ykman (YubiKey Manager CLI) v5.9.2 (PyPI yubikey-manager, latest stable on 2026-11-19; 6.0.0b0 is only a pre-release and was not used). Source: pip-installed yubikey-manager 5.9.2, `ykman --full-help` walked recursively for every command, plus ykman/_cli/*.py for hidden items and enum values.
// pyscard was stubbed to run the help output without a YubiKey, so nothing was exercised against a device.
// Hidden in 5.9.2 and marked hidden here: `apdu`, `sd` (Security Domain), the root --scp-sd / --scp-oce options and `hsmauth access change-management-key`.

const configModeGenerator: Fig.Generator = {
  trigger: "+",
  custom: async (tokens, _) => {
    const previouslyAdded = tokens[tokens.length - 1].split("+");
    // this has to be an alias map of the possible suggestions
    const possibleSuggestionsMap = new Map([
      ["OTP", ["o"]],
      ["o", ["OTP"]],
      ["FIDO", ["f"]],
      ["f", ["FIDO"]],
      ["CCID", ["c"]],
      ["c", ["CCID"]],
    ]);
    const suggestions = new Set([...possibleSuggestionsMap.values()].flat());

    for (const token of previouslyAdded) {
      suggestions.delete(token);
      const aliases = possibleSuggestionsMap.get(token);
      if (aliases) {
        aliases.forEach((v) => {
          suggestions.delete(v);
        });
      }
    }
    return [...suggestions].map((v) => ({ name: v }));
  },
};

const outputLines = (out: string, description: string): Fig.Suggestion[] =>
  out
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((name) => ({ name, description }));

const applications = [
  "otp",
  "u2f",
  "fido2",
  "oath",
  "piv",
  "openpgp",
  "hsmauth",
];

const slotArg: Fig.Arg = {
  name: "slot",
  description: "YubiKey OTP slot",
  suggestions: ["1", "2"],
};

const forceOption = (
  description = "Confirm the action without prompting"
): Fig.Option => ({
  name: ["-f", "--force"],
  description,
  isDangerous: true,
});

const textOption = (
  name: string | string[],
  description: string,
  argName = "TEXT"
): Fig.Option => ({ name, description, args: { name: argName } });

const pinOption = (description = "PIN code"): Fig.Option =>
  textOption(["-P", "--pin"], description);

const adminPinOption = (description = "Admin PIN for OpenPGP"): Fig.Option =>
  textOption(["-a", "--admin-pin"], description);

const managementKeyOption: Fig.Option = textOption(
  ["-m", "--management-key"],
  "The management key"
);

const formatOption: Fig.Option = {
  name: ["-F", "--format"],
  description: "Encoding format",
  args: {
    name: "format",
    default: "PEM",
    suggestions: ["pem", "der"],
  },
};

const enterOptions = (what: string): Fig.Option[] => [
  {
    name: "--enter",
    description: `Send an Enter keystroke after ${what} (default)`,
    exclusiveOn: ["--no-enter"],
  },
  {
    name: "--no-enter",
    description: `Don't send an Enter keystroke after ${what}`,
    exclusiveOn: ["--enter"],
  },
];

const updateChuidOptions: Fig.Option[] = [
  {
    name: "--update-chuid",
    description: "Update the CHUID GUID to a new random value (default)",
    exclusiveOn: ["--no-update-chuid"],
  },
  {
    name: "--no-update-chuid",
    description: "Do not update the CHUID GUID",
    exclusiveOn: ["--update-chuid"],
  },
];

const fileOrStdio = (name: string, description: string): Fig.Arg => ({
  name,
  description,
  template: "filepaths",
  suggestions: [{ name: "-", hidden: true }],
});

const hashAlgorithmOption: Fig.Option = {
  name: ["-a", "--hash-algorithm"],
  description: "Hash algorithm",
  args: {
    name: "hash algorithm",
    default: "SHA256",
    suggestions: ["sha256", "sha384", "sha512"],
  },
};

const pivSlotArg = (description: string): Fig.Arg => ({
  name: "SLOT",
  description,
  suggestions: [
    { name: "9a", description: "Authentication" },
    { name: "9c", description: "Digital signature" },
    { name: "9d", description: "Key management" },
    { name: "9e", description: "Card authentication" },
    ...Array.from({ length: 20 }, (_, i) => ({
      name: (0x82 + i).toString(16),
      description: `Retired key management ${i + 1}`,
    })),
    { name: "f9", description: "Attestation" },
  ],
});

const pivObjectArg = (suggestions: string[]): Fig.Arg => ({
  name: "OBJECT",
  description: "Name of PIV data object, or ID in HEX",
  suggestions,
});

const pivObjectNames = [
  "ccc",
  "chuid",
  "authentication",
  "fingerprints",
  "security",
  "facial",
  "printed",
  "signature",
  "key-management",
  "card-auth",
  "discovery",
  "key-history",
  "iris",
  ...Array.from({ length: 20 }, (_, i) => `retired${i + 1}`),
  "attestation",
];

const pivPolicyOptions: Fig.Option[] = [
  {
    name: "--pin-policy",
    description: "PIN policy for slot",
    args: {
      name: "policy",
      suggestions: [
        "default",
        "never",
        "once",
        "always",
        "match-once",
        "match-always",
      ],
    },
  },
  {
    name: "--touch-policy",
    description: "Touch policy for slot",
    args: {
      name: "policy",
      suggestions: ["default", "never", "always", "cached"],
    },
  },
];

const openpgpKeySlots = ["sig", "dec", "aut", "att"];

// OATH accounts are protected by an optional password that can be remembered
const oathPasswordOptions: Fig.Option[] = [
  textOption(["-p", "--password"], "The password to unlock the YubiKey"),
  {
    name: ["-r", "--remember"],
    description: "Remember the password on this machine",
  },
];

const touchOption = (description: string): Fig.Option => ({
  name: ["-t", "--touch"],
  description,
});

// YubiHSM Auth
const hsmManagementPasswordOption: Fig.Option = textOption(
  ["-m", "--management-password", "--management-key"],
  "The management password"
);
const hsmCredentialPasswordOption: Fig.Option = textOption(
  ["-c", "--credential-password"],
  "Password to protect credential"
);
const hsmTouchOption = touchOption(
  "Require touch on YubiKey to access credential"
);
const hsmLabelArg = (description: string): Fig.Arg => ({
  name: "LABEL",
  description,
});

// Security Domain
const kidArg: Fig.Arg = { name: "KID", description: "Key ID" };
const kvnArg: Fig.Arg = { name: "KVN", description: "Key version number" };
const replaceKvnOption: Fig.Option = textOption(
  ["-r", "--replace-kvn"],
  "Replace an existing key of the same type (same KID)",
  "INTEGER"
);

// Application enable/disable options shared by `config usb` and `config nfc`
const appToggleOptions: Fig.Option[] = [
  forceOption(),
  {
    name: ["-e", "--enable"],
    description: "Enable applications",
    isRepeatable: true,
    args: { name: "application", suggestions: applications },
  },
  {
    name: ["-d", "--disable"],
    description: "Disable applications",
    isRepeatable: true,
    args: { name: "application", suggestions: applications },
  },
];

const lockCodeOption = textOption(
  ["-L", "--lock-code"],
  "Current application configuration lock code",
  "HEX"
);

const completionSpec: Fig.Spec = {
  name: "ykman",
  description: "Configure your YubiKey via the command line",

  subcommands: [
    {
      name: "info",
      description: "Show general information about the attached YubiKey",
      options: [
        {
          name: ["-c", "--check-fips"],
          description:
            "Check if YubiKey is in FIPS Approved mode (4 Series only)",
        },
      ],
    },
    {
      name: "list",
      description: "List connected YubiKeys",
      options: [
        {
          name: ["-s", "--serials"],
          description:
            "Output only serial numbers, one per line (devices without serial will be omitted)",
        },
        {
          name: ["-r", "--readers"],
          description: "List available smart card readers",
        },
      ],
    },
    {
      name: "script",
      description: "Run a python script",
      args: [
        {
          name: "FILE",
          description: "Python script to run",
          template: "filepaths",
        },
        {
          name: "ARGUMENTS",
          description: "Arguments passed to the script, available as sys.argv",
          isOptional: true,
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["-s", "--site-dir"],
          description: "Specify additional path(s) to load python modules from",
          isRepeatable: true,
          args: { name: "DIR", template: "folders" },
        },
        forceOption(),
      ],
    },
    {
      name: "config",
      description: "Configure the YubiKey, enable or disable applications",
      subcommands: [
        {
          name: "mode",
          description:
            "Manage connection modes (USB Interfaces) for YubiKeys prior to the 5 series",
          args: {
            name: "MODE",
            description:
              "MODE can be a string, such as 'OTP+FIDO+CCID', or a shortened form: 'o+f+c'. It can also be a mode number",
            generators: configModeGenerator,
          },
          options: [
            {
              name: "--touch-eject",
              description:
                "When set, the button toggles the state of the smartcard between ejected and inserted (CCID only)",
            },
            textOption(
              "--autoeject-timeout",
              "When set, the smartcard will automatically eject after the given time (implies --touch-eject, CCID only)",
              "SECONDS"
            ),
            textOption(
              "--chalresp-timeout",
              "Sets the timeout when waiting for touch for challenge response",
              "SECONDS"
            ),
            forceOption(),
          ],
        },
        {
          name: "nfc",
          description: "Enable or disable applications over NFC",
          options: [
            ...appToggleOptions,
            {
              name: ["-a", "--enable-all"],
              description: "Enable all applications",
            },
            {
              name: ["-D", "--disable-all"],
              description: "Disable all applications",
            },
            {
              name: ["-l", "--list"],
              description: "List enabled applications",
            },
            lockCodeOption,
            {
              name: ["-R", "--restrict"],
              description: "Disable NFC for transport, re-enabled by USB power",
            },
          ],
        },
        {
          name: "reset",
          description:
            "Reset all YubiKey data (used with the YubiKey Bio Multi-protocol Edition)",
          isDangerous: true,
          options: [forceOption()],
        },
        {
          name: "set-lock-code",
          description: "Set or change the configuration lock code",
          options: [
            forceOption(),
            textOption(["-l", "--lock-code"], "Current lock code", "HEX"),
            {
              ...textOption(
                ["-n", "--new-lock-code"],
                "New lock code. Conflicts with --generate",
                "HEX"
              ),
              exclusiveOn: ["--generate"],
            },
            {
              name: ["-c", "--clear"],
              description: "Clear the lock code",
            },
            {
              name: ["-g", "--generate"],
              description:
                "Generate a random lock code. Conflicts with --new-lock-code",
              exclusiveOn: ["--new-lock-code"],
            },
          ],
        },
        {
          name: "usb",
          description: "Enable or disable applications over USB",
          options: [
            ...appToggleOptions,
            {
              name: ["-l", "--list"],
              description: "List enabled applications",
            },
            {
              name: ["-a", "--enable-all"],
              description: "Enable all applications",
            },
            lockCodeOption,
            {
              name: "--touch-eject",
              description:
                "When set, the button toggles the state of the smartcard between ejected and inserted (CCID only)",
            },
            {
              name: "--no-touch-eject",
              description: "Disable touch eject (CCID only)",
            },
            textOption(
              "--autoeject-timeout",
              "When set, the smartcard will automatically eject after the given time (implies --touch-eject)",
              "SECONDS"
            ),
            textOption(
              "--chalresp-timeout",
              "Sets the timeout when waiting for touch for challenge-response in the OTP application",
              "SECONDS"
            ),
          ],
        },
      ],
    },
    {
      name: "fido",
      description: "Manage the FIDO applications",
      subcommands: [
        {
          name: "info",
          description: "Display general status of the FIDO2 application",
        },
        {
          name: "reset",
          description:
            "Reset all FIDO applications. This action will wipe all FIDO credentials, including FIDO U2F credentials, on the YubiKey and remove the PIN code",
          isDangerous: true,
          options: [forceOption()],
        },
        {
          name: "access",
          description: "Manage the PIN for FIDO",
          subcommands: [
            {
              name: "change-pin",
              description: "Set or change the PIN code",
              options: [
                pinOption("Current PIN code"),
                textOption(["-n", "--new-pin"], "A new PIN"),
                {
                  name: ["-u", "--u2f"],
                  description:
                    "Set FIDO U2F PIN instead of FIDO2 PIN (YubiKey FIPS only)",
                },
              ],
            },
            {
              name: "force-change",
              description:
                "Force the PIN to be changed to a new value before use",
              options: [pinOption()],
            },
            {
              name: "set-min-length",
              description: "Set the minimum length allowed for PIN",
              args: { name: "LENGTH", description: "Minimum PIN length" },
              options: [
                pinOption(),
                {
                  ...textOption(["-R", "--rp-id"], "RP ID to allow"),
                  isRepeatable: true,
                },
              ],
            },
            {
              name: "verify-pin",
              description: "Verify the FIDO PIN against a YubiKey",
              options: [pinOption("Current PIN code")],
            },
          ],
        },
        {
          name: "config",
          description: "Manage FIDO configuration",
          subcommands: [
            {
              name: "enable-ep-attestation",
              description:
                "Enable Enterprise Attestation for Authenticators pre-configured to support it",
              options: [pinOption()],
            },
            {
              name: "toggle-always-uv",
              description:
                "Toggle the state of Always Require User Verification",
              options: [pinOption()],
            },
          ],
        },
        {
          name: "credentials",
          description:
            "Manage discoverable (resident) credentials. Credential management is only available when a FIDO PIN is set on the YubiKey",
          subcommands: [
            {
              name: "delete",
              description: "Delete a credential",
              isDangerous: true,
              args: {
                name: "CREDENTIAL_ID",
                description: "A unique substring match of a Credential ID",
              },
              options: [
                pinOption(),
                forceOption("Confirm deletion without prompting"),
              ],
            },
            {
              name: "list",
              description: "List credentials",
              options: [
                pinOption(),
                {
                  name: ["-c", "--csv"],
                  description: "Output full credential information as CSV",
                },
              ],
            },
          ],
        },
        {
          name: "fingerprints",
          description:
            "Manage fingerprints (requires a YubiKey with fingerprint sensor and a FIDO PIN)",
          subcommands: [
            {
              name: "add",
              description: "Add a new fingerprint",
              args: {
                name: "NAME",
                description:
                  'A short readable name for the fingerprint (eg. "Left thumb")',
              },
              options: [pinOption()],
            },
            {
              name: "delete",
              description: "Delete a fingerprint by its ID",
              isDangerous: true,
              args: {
                name: "ID",
                description: 'The ID of the fingerprint (as shown in "list")',
              },
              options: [
                pinOption(),
                forceOption("Confirm deletion without prompting"),
              ],
            },
            {
              name: "list",
              description: "List registered fingerprints",
              options: [pinOption()],
            },
            {
              name: "rename",
              description: "Set the label for a fingerprint",
              args: [
                {
                  name: "ID",
                  description:
                    'The ID of the fingerprint to rename (as shown in "list")',
                },
                {
                  name: "NAME",
                  description:
                    'A short readable name for the fingerprint (eg. "Left thumb")',
                },
              ],
              options: [pinOption()],
            },
          ],
        },
      ],
    },
    {
      name: "hsmauth",
      description: "Manage the YubiHSM Auth application",
      subcommands: [
        {
          name: "info",
          description: "Display general status of the YubiHSM Auth application",
        },
        {
          name: "reset",
          description: "Reset all YubiHSM Auth data",
          isDangerous: true,
          options: [forceOption()],
        },
        {
          name: "access",
          description: "Manage Management Key for YubiHSM Auth",
          subcommands: [
            {
              name: "change-management-password",
              description: "Change the management password",
              options: [
                textOption(
                  ["-m", "--management-password"],
                  "Current management password"
                ),
                textOption(
                  ["-n", "--new-management-password"],
                  "A new management password to set"
                ),
              ],
            },
            {
              name: "change-management-key",
              description:
                "Change the management key (legacy, use change-management-password)",
              hidden: true,
              deprecated: true,
              options: [
                textOption(
                  ["-m", "--management-key"],
                  "Current management key"
                ),
                textOption(
                  ["-n", "--new-management-key"],
                  "A new management key to set"
                ),
                {
                  name: ["-g", "--generate"],
                  description:
                    "Generate a random management key (can't be used with --new-management-key)",
                  exclusiveOn: ["--new-management-key"],
                },
              ],
            },
          ],
        },
        {
          name: "credentials",
          description: "Manage YubiHSM Auth credentials",
          subcommands: [
            {
              name: "change-password",
              description: "Change the password of a credential",
              args: hsmLabelArg(
                'A label to match a single credential (as shown in "list")'
              ),
              options: [
                textOption(
                  ["-c", "--credential-password"],
                  "Current credential password"
                ),
                hsmManagementPasswordOption,
                textOption(
                  ["-n", "--new-credential-password"],
                  "A new credential password to set"
                ),
              ],
            },
            {
              name: "delete",
              description: "Delete a credential",
              isDangerous: true,
              args: hsmLabelArg(
                'A label to match a single credential (as shown in "list")'
              ),
              options: [hsmManagementPasswordOption, forceOption()],
            },
            {
              name: "derive",
              description:
                "Import a symmetric credential derived from a password",
              args: hsmLabelArg("Label for the YubiHSM Auth credential"),
              options: [
                textOption(
                  ["-d", "--derivation-password"],
                  "Derivation password for ENC and MAC keys"
                ),
                hsmCredentialPasswordOption,
                hsmManagementPasswordOption,
                hsmTouchOption,
              ],
            },
            {
              name: "export",
              description:
                "Export the public key corresponding to an asymmetric credential",
              args: [
                hsmLabelArg("Label for the YubiHSM Auth credential"),
                fileOrStdio(
                  "PUBLIC-KEY",
                  "File to write the public key to (use '-' to use stdout)"
                ),
              ],
              options: [formatOption],
            },
            {
              name: "generate",
              description: "Generate an asymmetric credential",
              args: hsmLabelArg("Label for the YubiHSM Auth credential"),
              options: [
                hsmCredentialPasswordOption,
                hsmManagementPasswordOption,
                hsmTouchOption,
              ],
            },
            {
              name: "import",
              description: "Import an asymmetric credential",
              args: [
                hsmLabelArg("Label for the YubiHSM Auth credential"),
                fileOrStdio(
                  "PRIVATE-KEY",
                  "File containing the private key (use '-' to use stdin)"
                ),
              ],
              options: [
                textOption(
                  ["-p", "--password"],
                  "Password used to decrypt the private key"
                ),
                hsmCredentialPasswordOption,
                hsmManagementPasswordOption,
                hsmTouchOption,
              ],
            },
            {
              name: "list",
              description: "List all credentials",
            },
            {
              name: "symmetric",
              description: "Import a symmetric credential",
              args: hsmLabelArg("Label for the YubiHSM Auth credential"),
              options: [
                textOption(["-E", "--enc-key"], "The ENC key"),
                textOption(["-M", "--mac-key"], "The MAC key"),
                {
                  name: ["-g", "--generate"],
                  description: "Generate a random encryption and mac key",
                },
                hsmCredentialPasswordOption,
                hsmManagementPasswordOption,
                hsmTouchOption,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "oath",
      description: "Manage the OATH application",
      subcommands: [
        {
          name: "info",
          description: "Display general status of the OATH application",
        },
        {
          name: "reset",
          description:
            "Reset all OATH data. This action will delete all accounts and restore factory settings for the OATH application on the YubiKey",
          isDangerous: true,
          options: [forceOption()],
        },
        {
          name: "access",
          description: "Manage password protection for OATH",
          subcommands: [
            {
              name: "change",
              description: "Change the password used to protect OATH accounts",
              options: [
                textOption(
                  ["-p", "--password"],
                  "The password to unlock the YubiKey"
                ),
                {
                  name: ["-c", "--clear"],
                  description: "Remove the current password",
                },
                textOption(
                  ["-n", "--new-password"],
                  "Provide a new password as an argument"
                ),
                {
                  name: ["-r", "--remember"],
                  description: "Remember the password on this machine",
                },
              ],
            },
            {
              name: "forget",
              description: "Remove a stored password from this computer",
              options: [
                {
                  name: ["-a", "--all"],
                  description: "Remove all stored passwords",
                },
              ],
            },
            {
              name: "remember",
              description:
                "Store the YubiKeys password on this computer to avoid having to enter it on each use",
              options: [
                textOption(
                  ["-p", "--password"],
                  "The password to unlock the YubiKey"
                ),
              ],
            },
          ],
        },
        {
          name: "accounts",
          description: "Manage and use OATH accounts",
          subcommands: [
            {
              name: "add",
              description: "Add a new account",
              args: [
                {
                  name: "NAME",
                  description:
                    "Human readable name of the account, such as a username or e-mail address",
                },
                {
                  name: "SECRET",
                  description:
                    "Base32-encoded secret/key value provided by the server",
                  isOptional: true,
                },
              ],
              options: [
                {
                  name: ["-o", "--oath-type"],
                  description:
                    "Time-based (TOTP) or counter-based (HOTP) account",
                  args: {
                    name: "oath type",
                    default: "TOTP",
                    suggestions: ["hotp", "totp"],
                  },
                },
                {
                  name: ["-d", "--digits"],
                  description: "Number of digits in generated code",
                  args: {
                    name: "number of digits",
                    default: "6",
                    suggestions: ["6", "7", "8"],
                  },
                },
                {
                  name: ["-a", "--algorithm"],
                  description: "Algorithm to use for code generation",
                  args: {
                    name: "algorithm",
                    default: "SHA1",
                    suggestions: ["sha1", "sha256", "sha512"],
                  },
                },
                textOption(
                  ["-c", "--counter"],
                  "Initial counter value for HOTP accounts",
                  "INTEGER"
                ),
                textOption(["-i", "--issuer"], "Issuer of the account"),
                {
                  name: ["-P", "--period"],
                  description: "Number of seconds a TOTP code is valid",
                  args: { name: "INTEGER", default: "30" },
                },
                {
                  name: ["-g", "--generate"],
                  description:
                    "Generate a random credential key (cannot be used with SECRET)",
                },
                {
                  name: ["-O", "--output"],
                  description:
                    "Write the credential to a PSKC file in addition to adding it to the YubiKey",
                  args: { name: "FILENAME", template: "filepaths" },
                },
                textOption(
                  "--pskc-key",
                  "Encrypt the PSKC file with a pre-shared key (hex)"
                ),
                textOption(
                  "--pskc-passphrase",
                  "Encrypt the PSKC file with a passphrase"
                ),
                touchOption("Require touch on YubiKey to generate code"),
                forceOption(),
                ...oathPasswordOptions,
              ],
            },
            {
              name: "code",
              description: "Generate codes",
              args: {
                name: "QUERY",
                description:
                  "Provide a query string to match one or more specific accounts",
                isOptional: true,
              },
              options: [
                {
                  name: ["-H", "--show-hidden"],
                  description: "Include hidden accounts",
                },
                {
                  name: ["-s", "--single"],
                  description:
                    "Ensure only a single match, and output only the code",
                },
                ...oathPasswordOptions,
              ],
            },
            {
              name: "delete",
              description: "Delete an account",
              isDangerous: true,
              args: {
                name: "QUERY",
                description:
                  'A query to match a single account (as shown in "list")',
              },
              options: [
                forceOption("Confirm deletion without prompting"),
                ...oathPasswordOptions,
              ],
            },
            {
              name: "import",
              description: "Add new account(s) from a PSKC file",
              args: {
                name: "FILE",
                description: "PSKC file to read credentials from",
                template: "filepaths",
              },
              options: [
                touchOption("Require touch on YubiKey to generate code"),
                forceOption(),
                ...oathPasswordOptions,
              ],
            },
            {
              name: "list",
              description: "List all accounts",
              options: [
                {
                  name: ["-H", "--show-hidden"],
                  description: "Include hidden accounts",
                },
                {
                  name: ["-o", "--oath-type"],
                  description: "Display the OATH type",
                },
                {
                  name: ["-P", "--period"],
                  description: "Display the period",
                },
                ...oathPasswordOptions,
              ],
            },
            {
              name: "rename",
              description: "Rename an account (requires YubiKey 5.3 or later)",
              args: [
                {
                  name: "QUERY",
                  description:
                    'A query to match a single account (as shown in "list")',
                },
                {
                  name: "NAME",
                  description:
                    'The name of the account (use "<issuer>:<name>" to specify issuer)',
                },
              ],
              options: [
                forceOption("Confirm rename without prompting"),
                ...oathPasswordOptions,
              ],
            },
            {
              name: "uri",
              description: "Add a new account from an otpauth:// URI",
              args: { name: "URI", description: "An otpauth:// URI" },
              options: [
                touchOption("Require touch on YubiKey to generate code"),
                forceOption(),
                ...oathPasswordOptions,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "openpgp",
      description: "Manage the OpenPGP application",
      subcommands: [
        {
          name: "info",
          description: "Display general status of the OpenPGP application",
        },
        {
          name: "reset",
          description:
            "Reset all OpenPGP data. This action will wipe all OpenPGP data, and set all PINs to their default values. The attestation key and certificate will NOT be reset",
          isDangerous: true,
          options: [forceOption()],
        },
        {
          name: "access",
          description: "Manage PIN, Reset Code, and Admin PIN",
          subcommands: [
            {
              name: "change-admin-pin",
              description: "Change the Admin PIN",
              options: [
                adminPinOption("Current Admin PIN"),
                textOption(["-n", "--new-admin-pin"], "New Admin PIN"),
              ],
            },
            {
              name: "change-pin",
              description: "Change the User PIN",
              options: [
                pinOption("Current PIN code"),
                textOption(["-n", "--new-pin"], "A new PIN"),
              ],
            },
            {
              name: "change-reset-code",
              description: "Change the Reset Code",
              options: [
                adminPinOption("Admin PIN"),
                textOption(["-r", "--reset-code"], "A new Reset Code"),
              ],
            },
            {
              name: "set-retries",
              description:
                "Set the number of retry attempts for the User PIN, Reset Code, and Admin PIN",
              args: [
                { name: "PIN-RETRIES" },
                { name: "RESET-CODE-RETRIES" },
                { name: "ADMIN-PIN-RETRIES" },
              ],
              options: [adminPinOption(), forceOption()],
            },
            {
              name: "set-signature-policy",
              description: "Set the Signature PIN policy",
              args: {
                name: "POLICY",
                description:
                  "Signature PIN policy to set. Controls whether the PIN is always required when using the Signature key, or only once per session",
                suggestions: ["always", "once"],
              },
              options: [adminPinOption()],
            },
            {
              name: "unblock-pin",
              description: "Unblock the PIN (using Reset Code or Admin PIN)",
              options: [
                adminPinOption(
                  'Admin PIN (use "-" as a value to prompt for input)'
                ),
                textOption(["-r", "--reset-code"], "Reset Code"),
                textOption(["-n", "--new-pin"], "A new PIN"),
              ],
            },
          ],
        },
        {
          name: "certificates",
          description: "Manage certificates",
          subcommands: [
            {
              name: "delete",
              description: "Delete an OpenPGP certificate",
              isDangerous: true,
              args: {
                name: "KEY",
                description:
                  "Key slot to delete certificate from (sig, dec, aut, or att)",
                suggestions: openpgpKeySlots,
              },
              options: [adminPinOption()],
            },
            {
              name: "export",
              description: "Export an OpenPGP certificate",
              args: [
                {
                  name: "KEY",
                  description: "Key slot to read from (sig, dec, aut, or att)",
                  suggestions: openpgpKeySlots,
                },
                fileOrStdio(
                  "CERTIFICATE",
                  "File to write certificate to (use '-' to use stdout)"
                ),
              ],
              options: [formatOption],
            },
            {
              name: "import",
              description: "Import an OpenPGP certificate",
              args: [
                {
                  name: "KEY",
                  description:
                    "Key slot to import certificate to (sig, dec, aut, or att)",
                  suggestions: openpgpKeySlots,
                },
                fileOrStdio(
                  "CERTIFICATE",
                  "File containing the certificate (use '-' to use stdin)"
                ),
              ],
              options: [adminPinOption()],
            },
          ],
        },
        {
          name: "keys",
          description: "Manage private keys",
          subcommands: [
            {
              name: "attest",
              description:
                "Generate an attestation certificate for a key. Attestation is used to show that an asymmetric key was generated on the YubiKey and therefore doesn't exist outside the device",
              args: [
                {
                  name: "KEY",
                  description: "Key slot to attest (sig, dec, aut)",
                  suggestions: ["sig", "dec", "aut"],
                },
                fileOrStdio(
                  "CERTIFICATE",
                  "File to write attestation certificate to (use '-' to use stdout)"
                ),
              ],
              options: [pinOption(), formatOption],
            },
            {
              name: "import",
              description: "Import a private key for OpenPGP attestation",
              args: [
                {
                  name: "KEY",
                  description: "Key slot to import to (only 'att' supported)",
                  suggestions: ["att"],
                },
                fileOrStdio(
                  "PRIVATE-KEY",
                  "File containing the private key (use '-' to use stdin)"
                ),
              ],
              options: [adminPinOption()],
            },
            {
              name: "info",
              description: "Show metadata about a private key",
              args: {
                name: "KEY",
                description: "Key slot to show (sig, dec, aut or att)",
                suggestions: openpgpKeySlots,
              },
            },
            {
              name: "set-touch",
              description: "Set the touch policy for OpenPGP keys",
              args: [
                {
                  name: "KEY",
                  description: "Key slot to set (sig, dec, aut or att)",
                  suggestions: openpgpKeySlots,
                },
                {
                  name: "POLICY",
                  description: "Touch policy to set",
                  suggestions: [
                    { name: "on", description: "Touch required" },
                    { name: "off", description: "No touch required (default)" },
                    {
                      name: "fixed",
                      description:
                        "Touch required, can't be disabled without deleting the private key",
                    },
                    {
                      name: "cached",
                      description: "Touch required, cached for 15s after use",
                    },
                    {
                      name: "cached-fixed",
                      description:
                        "Touch required, cached for 15s after use, can't be disabled without deleting the private key",
                    },
                  ],
                },
              ],
              options: [adminPinOption(), forceOption()],
            },
          ],
        },
      ],
    },
    {
      name: "otp",
      description: "Manage the YubiOTP application",
      subcommands: [
        {
          name: "calculate",
          description:
            "Perform a challenge-response operation. Send a challenge (in hex) to a YubiKey slot with a challenge-response credential, and read the response",
          args: [
            slotArg,
            {
              name: "CHALLENGE",
              description: "Challenge in hex",
              isOptional: true,
            },
          ],
          options: [
            {
              name: ["-T", "--totp"],
              description:
                "Generate a TOTP code, use the current time if challenge is omitted",
            },
            {
              name: ["-d", "--digits"],
              description:
                "Number of digits in generated TOTP code, ignored unless --totp is set",
              args: {
                name: "number of digits",
                default: "6",
                suggestions: ["6", "8"],
              },
            },
          ],
        },
        {
          name: "chalresp",
          description: "Program a challenge-response credential",
          args: [
            slotArg,
            {
              name: "KEY",
              description:
                "A key given in hex (or base32, if --totp is specified). If not given, an interactive prompt will ask for it",
              isOptional: true,
            },
          ],
          options: [
            touchOption("Require touch on the YubiKey to generate a response"),
            {
              name: ["-T", "--totp"],
              description:
                "Use a base32 encoded key (optionally padded) for TOTP credentials",
            },
            {
              name: ["-g", "--generate"],
              description:
                "Generate a random secret key. Can't be used with KEY argument",
            },
            forceOption(),
          ],
        },
        {
          name: "delete",
          description: "Delete the configuration stored in a slot",
          isDangerous: true,
          args: slotArg,
          options: [forceOption()],
        },
        {
          name: "hotp",
          description: "Program an HMAC-SHA1 OATH-HOTP credential",
          args: [
            slotArg,
            {
              name: "KEY",
              description: "A base32-encoded key",
              isOptional: true,
            },
          ],
          options: [
            {
              name: ["-d", "--digits"],
              description: "Number of digits in generated code",
              args: {
                name: "number of digits",
                default: "6",
                suggestions: ["6", "8"],
              },
            },
            textOption(["-c", "--counter"], "Initial counter value", "INTEGER"),
            textOption(
              ["-i", "--identifier"],
              "Token identifier. OMP+TT as 4 characters, the MUI as 8 characters, or the full OMP+TT+MUI as 12 characters"
            ),
            ...enterOptions("slot output"),
            forceOption(),
          ],
        },
        {
          name: "info",
          description: "Display general status of the YubiKey OTP slots",
        },
        {
          name: "ndef",
          description: "Configure a slot to be used over NDEF (NFC)",
          args: slotArg,
          options: [
            textOption(
              ["-p", "--prefix"],
              "Added before the NDEF payload, typically a URI. Defaults to https://my.yubico.com/yk/# for URI and an empty string for TEXT"
            ),
            {
              name: ["-t", "--ndef-type"],
              description: "NDEF payload type",
              args: {
                name: "NDEF type",
                default: "URI",
                suggestions: ["text", "uri"],
              },
            },
          ],
        },
        {
          name: "settings",
          description: "Update the settings for a slot",
          args: slotArg,
          options: [
            forceOption(),
            textOption(
              ["-A", "--new-access-code"],
              'A new 6 byte access code to set (use "-" as a value to prompt for input)',
              "HEX"
            ),
            {
              name: "--delete-access-code",
              description: "Remove access code from the slot",
            },
            ...enterOptions("slot output"),
            {
              name: ["-p", "--pacing"],
              description:
                "Throttle output speed by adding a delay (in ms) between characters emitted",
              args: {
                name: "milliseconds",
                default: "0",
                suggestions: ["0", "20", "40", "60"],
              },
            },
            {
              name: "--use-numeric-keypad",
              description:
                "Use scancodes for numeric keypad when sending digits (helps for some keyboard layouts)",
            },
            {
              name: "--serial-usb-visible",
              description:
                "Make the serial number visible in the USB descriptor",
            },
          ],
        },
        {
          name: "static",
          description: "Configure a static password",
          args: [
            slotArg,
            {
              name: "PASSWORD",
              description: "The static password to program",
              isOptional: true,
            },
          ],
          options: [
            {
              name: ["-g", "--generate"],
              description: "Generate a random password",
            },
            {
              name: ["-l", "--length"],
              description: "Length of generated password (1 to 38)",
              args: { name: "LENGTH", default: "38" },
            },
            {
              name: ["-k", "--keyboard-layout"],
              description: "Keyboard layout to use for the static password",
              args: {
                name: "layout",
                default: "MODHEX",
                suggestions: [
                  "modhex",
                  "us",
                  "uk",
                  "de",
                  "fr",
                  "it",
                  "bepo",
                  "norman",
                ],
              },
            },
            ...enterOptions("slot output"),
            forceOption(),
          ],
        },
        {
          name: "swap",
          description: "Swap the two slot configurations",
          options: [forceOption()],
        },
        {
          name: "yubiotp",
          description: "Program a Yubico OTP credential",
          args: slotArg,
          options: [
            textOption(
              ["-P", "--public-id"],
              "Public identifier prefix",
              "MODHEX"
            ),
            textOption(
              ["-p", "--private-id"],
              "6 byte private identifier",
              "HEX"
            ),
            textOption(["-k", "--key"], "16 byte secret key", "HEX"),
            ...enterOptions("slot output"),
            {
              name: ["-S", "--serial-public-id"],
              description:
                "Use YubiKey serial number as public ID. Can't be used with --public-id",
              exclusiveOn: ["--public-id"],
            },
            {
              name: ["-g", "--generate-private-id"],
              description:
                "Generate a random private ID. Can't be used with --private-id",
              exclusiveOn: ["--private-id"],
            },
            {
              name: ["-G", "--generate-key"],
              description:
                "Generate a random secret key. Can't be used with --key",
              exclusiveOn: ["--key"],
            },
            {
              name: ["-O", "--config-output"],
              description:
                "File to output the configuration to (existing file will be appended to)",
              args: { name: "FILENAME", template: "filepaths" },
            },
            forceOption(),
          ],
        },
      ],
      options: [
        textOption(
          "--access-code",
          'A 6 byte access code (use "-" as a value to prompt for input). Must be given directly after the "otp" command, before any sub-command',
          "HEX"
        ),
      ],
    },
    {
      name: "piv",
      description: "Manage the PIV application",
      subcommands: [
        {
          name: "info",
          description: "Display general status of the PIV application",
        },
        {
          name: "reset",
          description:
            "Reset all PIV data. This action will wipe all data and restore factory settings for the PIV application on the YubiKey",
          isDangerous: true,
          options: [forceOption()],
        },
        {
          name: "access",
          description: "Manage PIN, PUK, and Management Key",
          subcommands: [
            {
              name: "change-management-key",
              description: "Change the management key",
              options: [
                pinOption(),
                touchOption(
                  "Require touch on YubiKey when prompted for management key"
                ),
                textOption(
                  ["-n", "--new-management-key"],
                  "A new management key to set"
                ),
                textOption(
                  ["-m", "--management-key"],
                  "Current management key"
                ),
                {
                  name: ["-a", "--algorithm"],
                  description: "Management key algorithm",
                  args: {
                    name: "algorithm",
                    suggestions: ["tdes", "aes128", "aes192", "aes256"],
                  },
                },
                {
                  name: ["-p", "--protect"],
                  description:
                    "Store new management key on the YubiKey, protected by PIN (a random key will be used if no key is provided)",
                },
                {
                  name: ["-g", "--generate"],
                  description:
                    "Generate a random management key (implied by --protect unless --new-management-key is also given, can't be used with --new-management-key)",
                  exclusiveOn: ["--new-management-key"],
                },
                forceOption(),
              ],
            },
            {
              name: "change-pin",
              description: "Change the PIN code",
              options: [
                pinOption("Current PIN code"),
                textOption(["-n", "--new-pin"], "A new PIN to set"),
              ],
            },
            {
              name: "change-puk",
              description: "Change the PUK code",
              options: [
                textOption(["-p", "--puk"], "Current PUK code"),
                textOption(["-n", "--new-puk"], "A new PUK code to set"),
              ],
            },
            {
              name: "set-retries",
              description:
                "Set the number of PIN and PUK retry attempts. This will reset the PIN and PUK to their factory defaults",
              args: [{ name: "PIN-RETRIES" }, { name: "PUK-RETRIES" }],
              options: [managementKeyOption, pinOption(), forceOption()],
            },
            {
              name: "unblock-pin",
              description: "Unblock the PIN (using PUK)",
              options: [
                textOption(["-p", "--puk"], "PUK code"),
                textOption(["-n", "--new-pin"], "A new PIN", "NEW-PIN"),
              ],
            },
          ],
        },
        {
          name: "certificates",
          description: "Manage certificates",
          subcommands: [
            {
              name: "delete",
              description: "Delete a certificate",
              isDangerous: true,
              args: pivSlotArg("PIV slot of the certificate"),
              options: [
                managementKeyOption,
                pinOption(),
                ...updateChuidOptions,
              ],
            },
            {
              name: "export",
              description: "Export an X.509 certificate",
              args: [
                pivSlotArg("PIV slot of the certificate"),
                fileOrStdio(
                  "CERTIFICATE",
                  "File to write certificate to (use '-' to use stdout)"
                ),
              ],
              options: [formatOption],
            },
            {
              name: "generate",
              description: "Generate a self-signed X.509 certificate",
              args: [
                pivSlotArg("PIV slot of the certificate"),
                fileOrStdio(
                  "PUBLIC-KEY",
                  "File containing a public key (use '-' to use stdin)"
                ),
              ],
              options: [
                managementKeyOption,
                pinOption(),
                {
                  ...textOption(
                    ["-s", "--subject"],
                    "Subject for the certificate, as an RFC 4514 string"
                  ),
                  isRequired: true,
                },
                {
                  name: ["-d", "--valid-days"],
                  description: "Number of days until the certificate expires",
                  args: { name: "INTEGER", default: "365" },
                },
                hashAlgorithmOption,
                ...updateChuidOptions,
              ],
            },
            {
              name: "import",
              description: "Import an X.509 certificate",
              args: [
                pivSlotArg("PIV slot of the certificate"),
                fileOrStdio(
                  "CERTIFICATE",
                  "File containing the certificate (use '-' to use stdin)"
                ),
              ],
              options: [
                managementKeyOption,
                pinOption(),
                textOption(
                  ["-p", "--password"],
                  "A password may be needed to decrypt the data"
                ),
                {
                  name: ["-v", "--verify"],
                  description:
                    "Verify that the certificate matches the private key in the slot",
                },
                {
                  name: ["-c", "--compress"],
                  description: "Compress the certificate before storing",
                },
                ...updateChuidOptions,
              ],
            },
            {
              name: "request",
              description: "Generate a Certificate Signing Request (CSR)",
              args: [
                pivSlotArg("PIV slot of the certificate"),
                fileOrStdio(
                  "PUBLIC-KEY",
                  "File containing a public key (use '-' to use stdin)"
                ),
                fileOrStdio(
                  "CSR",
                  "File to write CSR to (use '-' to use stdout)"
                ),
              ],
              options: [
                pinOption(),
                {
                  ...textOption(
                    ["-s", "--subject"],
                    "Subject for the requested certificate, as an RFC 4514 string"
                  ),
                  isRequired: true,
                },
                hashAlgorithmOption,
              ],
            },
          ],
        },
        {
          name: "keys",
          description: "Manage private keys",
          subcommands: [
            {
              name: "attest",
              description: "Generate an attestation certificate for a key pair",
              args: [
                pivSlotArg("PIV slot of the private key"),
                fileOrStdio(
                  "CERTIFICATE",
                  "File to write attestation certificate to (use '-' to use stdout)"
                ),
              ],
              options: [formatOption],
            },
            {
              name: "delete",
              description: "Delete a key",
              isDangerous: true,
              args: pivSlotArg("PIV slot of the key"),
              options: [managementKeyOption, pinOption()],
            },
            {
              name: "export",
              description:
                "Export a public key corresponding to a stored private key",
              args: [
                pivSlotArg("PIV slot of the private key"),
                fileOrStdio(
                  "PUBLIC-KEY",
                  "File to write the public key to (use '-' to use stdout)"
                ),
              ],
              options: [
                formatOption,
                {
                  name: ["-v", "--verify"],
                  description:
                    "Verify that the public key matches the private key in the slot",
                },
                pinOption("PIN code (used for --verify)"),
              ],
            },
            {
              name: "generate",
              description: "Generate an asymmetric key pair",
              args: [
                pivSlotArg("PIV slot of the private key"),
                fileOrStdio(
                  "PUBLIC-KEY",
                  "File containing the generated public key (use '-' to use stdout)"
                ),
              ],
              options: [
                managementKeyOption,
                pinOption(),
                {
                  name: ["-a", "--algorithm"],
                  description: "Algorithm to use in key generation",
                  args: {
                    name: "algorithm",
                    default: "RSA2048",
                    suggestions: [
                      "rsa1024",
                      "rsa2048",
                      "rsa3072",
                      "rsa4096",
                      "eccp256",
                      "eccp384",
                      "ed25519",
                      "x25519",
                    ],
                  },
                },
                formatOption,
                ...pivPolicyOptions,
              ],
            },
            {
              name: "import",
              description: "Import a private key from file",
              args: [
                pivSlotArg("PIV slot of the private key"),
                fileOrStdio(
                  "PRIVATE-KEY",
                  "File containing the private key (use '-' to use stdin)"
                ),
              ],
              options: [
                pinOption(),
                managementKeyOption,
                ...pivPolicyOptions,
                textOption(
                  ["-p", "--password"],
                  "Password used to decrypt the private key"
                ),
              ],
            },
            {
              name: "info",
              description: "Show metadata about a private key",
              args: pivSlotArg("PIV slot of the private key"),
            },
            {
              name: "move",
              description: "Move a key from one PIV slot into another",
              args: [
                {
                  ...pivSlotArg("PIV slot of the key to move"),
                  name: "SOURCE",
                },
                {
                  ...pivSlotArg("PIV slot to move the key into"),
                  name: "DEST",
                },
              ],
              options: [managementKeyOption, pinOption()],
            },
          ],
        },
        {
          name: "objects",
          description: "Manage PIV data objects",
          subcommands: [
            {
              name: "export",
              description: "Export an arbitrary PIV data object",
              args: [
                pivObjectArg(pivObjectNames),
                fileOrStdio(
                  "OUTPUT",
                  "File to write object to (use '-' to use stdout)"
                ),
              ],
              options: [pinOption()],
            },
            {
              name: "generate",
              description:
                "Generate and write data for a supported data object",
              args: {
                ...pivObjectArg(["chuid", "ccc"]),
                description:
                  "Name of PIV data object, or ID in HEX. Supported objects are CHUID (Card Holder Unique ID) and CCC (Card Capability Container)",
              },
              options: [pinOption(), managementKeyOption],
            },
            {
              name: "import",
              description: "Write an arbitrary PIV object",
              args: [
                pivObjectArg(pivObjectNames),
                fileOrStdio(
                  "DATA",
                  "File containing the data to be written (use '-' to use stdin)"
                ),
              ],
              options: [pinOption(), managementKeyOption],
            },
          ],
        },
      ],
    },
    {
      name: "apdu",
      description: "Execute arbitrary APDUs",
      hidden: true,
      args: {
        name: "APDU",
        description:
          "APDU as hex using the syntax [CLA]INS[P1P2][:DATA][/LE][=EXPECTED_SW]",
        isOptional: true,
        isVariadic: true,
      },
      options: [
        {
          name: ["-x", "--no-pretty"],
          description: "Print only the hex output of a response",
        },
        {
          name: ["-a", "--app"],
          description: "Select application",
          args: {
            name: "application",
            suggestions: [
              "otp",
              "management",
              "openpgp",
              "oath",
              "piv",
              "fido",
              "hsmauth",
              "secure-domain",
            ],
          },
        },
        {
          name: "--short",
          description: "Force usage of short APDUs",
        },
        {
          ...textOption(["-s", "--send-apdu"], "Provide full APDUs"),
          isRepeatable: true,
        },
      ],
    },
    {
      name: "sd",
      description:
        "Manage the Security Domain application, which holds keys for SCP",
      hidden: true,
      subcommands: [
        {
          name: "info",
          description: "List keys in the Security Domain of the YubiKey",
        },
        {
          name: "reset",
          description:
            "Reset all Security Domain data. This action will wipe all keys and restore factory settings for the Security Domain on the YubiKey",
          isDangerous: true,
          options: [forceOption()],
        },
        {
          name: "keys",
          description: "Manage SCP keys",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete a key or keyset. Set either KID or KVN to 0 to use it as a wildcard and delete all keys matching the specific KID or KVN",
              isDangerous: true,
              args: [kidArg, kvnArg],
              options: [forceOption()],
            },
            {
              name: "export",
              description: "Export certificate chain for a key",
              args: [
                kidArg,
                kvnArg,
                fileOrStdio(
                  "OUTPUT",
                  "File to write the certificate chain to (use '-' to use stdout)"
                ),
              ],
            },
            {
              name: "generate",
              description: "Generate an asymmetric key pair",
              args: [
                kidArg,
                kvnArg,
                fileOrStdio(
                  "PUBLIC-KEY",
                  "File containing the generated public key (use '-' to use stdout)"
                ),
              ],
              options: [replaceKvnOption],
            },
            {
              name: "import",
              description: "Import a key or certificate",
              args: [
                kidArg,
                kvnArg,
                fileOrStdio(
                  "INPUT",
                  "SCP03 keyset (K-ENC:K-MAC:K-DEK for KID 0x01), or input file (use '-' to use stdin)"
                ),
              ],
              options: [
                textOption(
                  ["-p", "--password"],
                  "Password used to decrypt the file (if needed)"
                ),
                replaceKvnOption,
              ],
            },
            {
              name: "set-allowlist",
              description:
                "Set an allowlist of certificate serial numbers for a key",
              args: [
                kidArg,
                kvnArg,
                {
                  name: "SERIALS",
                  description:
                    "Serial numbers of certificates to allow (space separated)",
                  isOptional: true,
                  isVariadic: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  options: [
    {
      name: ["-d", "--device"],
      description: "Specify which YubiKey to interact with by serial number",
      args: {
        name: "SERIAL",
        generators: {
          script: ["ykman", "list", "--serials"],
          postProcess: (out) => outputLines(out, "YubiKey serial"),
        },
      },
    },
    {
      name: ["-r", "--reader"],
      description:
        "Specify a YubiKey by smart card reader name (can't be used with --device or list)",
      exclusiveOn: ["--device"],
      args: {
        name: "NAME",
        generators: {
          script: ["ykman", "list", "--readers"],
          postProcess: (out) => outputLines(out, "Smart card reader"),
        },
      },
    },
    {
      name: ["-t", "--scp-ca"],
      description:
        "Specify the CA to use to verify the SCP11 card key (CA-KLCC)",
      args: { name: "FILENAME", template: "filepaths" },
    },
    {
      name: ["-c", "--scp-sd"],
      description: "Specify which key the YubiKey is using to authenticate",
      hidden: true,
      args: [{ name: "KID" }, { name: "KVN" }],
    },
    {
      name: ["-o", "--scp-oce"],
      description: "Specify which key the OCE is using to authenticate",
      hidden: true,
      args: [{ name: "KID" }, { name: "KVN" }],
    },
    {
      name: ["-s", "--scp"],
      description:
        "Specify private key and certificate chain for secure messaging, or SCP03 keys in hex separated by colon (K-ENC:K-MAC[:K-DEK]). Can be used multiple times to provide key and certificates in multiple files (private key, certificates in leaf-last order)",
      isRepeatable: true,
      args: { name: "CRED", template: "filepaths" },
    },
    textOption(
      ["-p", "--scp-password"],
      "Specify a password required to access the --scp file, if needed",
      "PASSWORD"
    ),
    {
      name: ["-l", "--log-level"],
      description: "Enable logging at given verbosity level",
      args: {
        name: "log level",
        suggestions: ["error", "warning", "info", "debug", "traffic"],
      },
    },
    {
      name: "--log-file",
      description:
        "Write log to FILE instead of printing to stderr (requires --log-level)",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--diagnose",
      description: "Show diagnostics information useful for troubleshooting",
    },
    {
      name: ["-v", "--version"],
      description: "Show version information about the app",
    },
    {
      name: "--full-help",
      description: "Show --help output, including hidden commands",
    },
    {
      name: ["-h", "--help"],
      description: "Show help and exit",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
