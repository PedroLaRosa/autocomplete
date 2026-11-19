// authchanger v2.1.0 (jamf/authchanger open-source repo, archived read-only 2024-01-02, commit 8743d07; checked 2026-11-19). Source: authchanger/main.swift, Preferences.swift (-help text) and README.md,
// read statically (macOS tool, not run). The Jamf Connect build of authchanger is closed source and its docs (learn.jamf.com) were not reachable, so -jamfconnect and -verbose
// (not in the open-source build; -JamfConnect confirmed only by jamf/jamfconnect's Notify script) were kept as they were. All flags are case-insensitive in the tool.
const mechanismsArg: Fig.Arg = {
  name: "mechanism",
  description: "Mechanisms in the form Bundle:Mechanism[,privileged]",
  isVariadic: true,
};

const completionSpec: Fig.Spec = {
  name: "authchanger",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  description:
    "Authchanger is a utility included with Jamf Connect to help you manage the authorization database used by macOS to determine how the login process progresses",
  options: [
    {
      name: ["-help", "-h"],
      description: "Show help for authchanger",
    },
    {
      name: "-version",
      description: "Prints the version number",
    },
    {
      name: "-print",
      description: "Prints the current list of authorization mechanisms",
    },
    {
      name: "-debug",
      description:
        "Does a dry run of the changes and prints out what would have happened",
    },
    {
      name: "-reset",
      description: "Resets the login screen to the factory settings",
    },
    {
      name: "-demobilize",
      description:
        "Sets up the login mechanisms to demobilize the account, taking into account any other -AD or -OIDC setup",
    },
    {
      name: "-notify",
      description:
        "Adds the DEP Notify addition to the corresponding -AD, -Okta, -OIDC, or -Setup argument",
    },
    {
      name: "-setup",
      description: "Sets up the NoMAD Login Setup mechanisms",
    },
    {
      name: "-ad",
      description: "Sets up NoMAD Login AD",
    },
    {
      name: "-okta",
      description: "Sets up NoMAD Login+Okta",
    },
    {
      name: "-oidc",
      description: "Sets up Jamf Connect Login for Open ID Connect auth",
    },
    {
      name: "-jamfconnect",
      description: "Enables Jamf Connect 2.0 login mechanisms",
    },
    {
      name: "-verbose",
      description: "Enables verbose logging",
    },
    {
      name: "-prelogin",
      description: "Mechs to be used before the actual UI is shown",
      args: mechanismsArg,
    },
    {
      name: "-preauth",
      description:
        "Mechs to be used between the login UI and actual authentication",
      args: mechanismsArg,
    },
    {
      name: "-postauth",
      description: "Mechs to be used after system authentication",
      args: mechanismsArg,
    },
    {
      name: "-customrule",
      description:
        "Allows the printout of any authorizationDB rule as well as setting of that rule to any custom mechanism(s) or rule(s)",
      args: [
        {
          name: "rule",
          description:
            "Authorization database right to print or overwrite (e.g. system.login.console)",
        },
        {
          name: "type",
          description: "Whether to set the rule's mechanisms or its rules",
          isOptional: true,
          suggestions: ["mechanisms", "rules"],
        },
        {
          name: "mechanisms or rules",
          description: "Mechanisms or rules to set, separated by spaces",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "-sysprefs",
      description:
        "Enables OIDC authentication for the Network Preference Pane",
    },
    {
      name: "-sysprefsreset",
      description:
        "Removes OIDC authentication for the Network Preference Pane",
    },
    {
      name: "-defaultjcright",
      description: "Adds the mechanism to be used with the sudosaml binary",
    },
  ],
};
export default completionSpec;
