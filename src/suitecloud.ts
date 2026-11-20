// SuiteCloud CLI for Node.js v4.1.1 (npm @oracle/suitecloud-cli latest, 2026-11-20). Source: read statically from the
// npm tarball (src/metadata/{Sdk,Node}CommandsMetadata*.json merged the way CommandsMetadataService does, CLI.js,
// CommandRegistrationService.js, ObjectTypesMetadata.js, sdk-core SuiteScriptCatalog.js); the CLI was not executed.
// Options that the CLI disables in non-interactive mode (--authid, --project, --no_preview, ...) are left out.
// Node version of the CLI, there is also a Java version, Ref https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_155931263126.html
const interactiveOption: Fig.Option = {
  name: ["-i", "--interactive"],
  description: "Runs the command in interactive mode",
};

const helpOption: Fig.Option = {
  name: ["-h", "--help"],
  description: "Displays help for the command",
};

const jsonOption: Fig.Option = {
  name: ["-j", "--json"],
  description:
    "Prints the raw JSON response from the server and skips formatted CLI output",
};

const applyInstallPrefsOption: Fig.Option = {
  name: ["-a", "--applyinstallprefs"],
  description:
    "Applies the settings from the hiding.xml, locking.xml, and overwriting.xml files. It only applies to SuiteApps",
};

const accountSpecificValuesOption: Fig.Option = {
  name: "--accountspecificvalues",
  description:
    "Indicates how to handle the presence of account-specific values in an account customization project. If there are account-specific values in the project, enter WARNING to continue with the deployment process, or ERROR to stop it. If the option is not specified, the default value is ERROR. It only applies to account customization projects",
  args: {
    suggestions: ["ERROR", "WARNING"],
    default: "ERROR",
  },
};

const logOption = (kind: "deployment" | "validation"): Fig.Option => ({
  name: "--log",
  description: `Sets the ${kind} log file location, as either a directory or a file name. If it is a directory, a default log file is generated in the specified location. If a log file already exists in the specified location, ${kind} log details are appended to that existing file`,
  args: {
    name: "location",
    template: ["folders", "filepaths"],
  },
});

const objectTypes = [
  "addressForm",
  "advancedpdftemplate",
  "advancedrevrecplugin",
  "bankstatementparserplugin",
  "bundleinstallationscript",
  "center",
  "centercategory",
  "centerlink",
  "centertab",
  "clientscript",
  "cmscontenttype",
  "commerceextension",
  "commercetheme",
  "consolidatedrateadjustorplugin",
  "crmcustomfield",
  "customglplugin",
  "customlist",
  "customrecordactionscript",
  "customrecordtype",
  "customsegment",
  "customtransactiontype",
  "dataset",
  "emailcaptureplugin",
  "emailtemplate",
  "entitycustomfield",
  "entryForm",
  "ficonnectivityplugin",
  "integration",
  "itemcustomfield",
  "itemnumbercustomfield",
  "itemoptioncustomfield",
  "kpiscorecard",
  "mapreducescript",
  "massupdatescript",
  "othercustomfield",
  "paymentgatewayplugin",
  "platformextensionplugin",
  "pluginimplementation",
  "plugintype",
  "portlet",
  "promotionsplugin",
  "publisheddashboard",
  "restlet",
  "role",
  "savedcsvimport",
  "savedsearch",
  "scheduledscript",
  "sdfinstallationscript",
  "secret",
  "shippingpartnersplugin",
  "singlepageapp",
  "sspapplication",
  "sublist",
  "subtab",
  "suitelet",
  "taxcalculationplugin",
  "transactionbodycustomfield",
  "transactioncolumncustomfield",
  "transactionForm",
  "translationcollection",
  "usereventscript",
  "workbook",
  "workflow",
  "workflowactionscript",
];

const scriptTypes = [
  "BundleInstallationScript",
  "ClientScript",
  "CustomModule",
  "plugintypeimpl",
  "customRecordAction",
  "MapReduceScript",
  "MassUpdateScript",
  "Portlet",
  "Restlet",
  "ScheduledScript",
  "SDFInstallationScript",
  "Suitelet",
  "UserEventScript",
  "WorkflowActionScript",
];

const suiteScriptModules = [
  "N/action",
  "N/auth",
  "N/cache",
  "N/certificateControl",
  "N/commerce",
  "N/compress",
  "N/config",
  "N/crypto",
  "N/crypto/certificate",
  "N/crypto/random",
  "N/currency",
  "N/currentRecord",
  "N/dataset",
  "N/documentCapture",
  "N/email",
  "N/encode",
  "N/error",
  "N/file",
  "N/format",
  "N/format/i18n",
  "N/http",
  "N/https",
  "N/https/clientCertificate",
  "N/keyControl",
  "N/llm",
  "N/log",
  "N/machineTranslation",
  "N/pgp",
  "N/piremoval",
  "N/plugin",
  "N/portlet",
  "N/query",
  "N/record",
  "N/recordContext",
  "N/redirect",
  "N/render",
  "N/runtime",
  "N/scriptTypes/restlet",
  "N/search",
  "N/sftp",
  "N/sso",
  "N/suiteAppInfo",
  "N/task",
  "N/task/accounting/recognition",
  "N/transaction",
  "N/translation",
  "N/ui/dialog",
  "N/ui/message",
  "N/ui/serverWidget",
  "N/url",
  "N/util",
  "N/workbook",
  "N/workflow",
  "N/xml",
];

const completionSpec: Fig.Spec = {
  name: "suitecloud",
  description: "SuiteCloud CLI",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  subcommands: [
    {
      icon: "🧩",
      name: "account:manageauth",
      description:
        "Manages authentication IDs (authID) for all your projects. An authentication ID is a custom alias you give to a specific account-role combination",
      options: [
        interactiveOption,
        {
          name: "--info",
          description:
            "Prints the following information for the specified authentication ID (authID): account ID, role ID, and url. Usage: account:manageauth --info {authID}",
          args: {
            name: "authID",
          },
        },
        {
          name: "--list",
          description:
            "Prints a list of all the configured authentication IDs (authID). Usage: account:manageauth --list",
        },
        {
          name: "--remove",
          description:
            "Removes an authentication ID (authID). The tokens are not revoked in the account. Usage: account:manageauth --remove {authID}",
          args: {
            name: "authID",
          },
        },
        {
          name: "--rename",
          description:
            "Renames an authentication ID (authID). You must specify it together with the renameto option. Usage: account:manageauth --rename {authID} --renameto {newauthID}",
          dependsOn: ["--renameto"],
          args: {
            name: "authID",
          },
        },
        {
          name: "--renameto",
          description:
            "Specifies the new ID for an authentication ID (authID). You must specify it together with the rename option. Usage: account:manageauth --rename {authID} --renameto {newauthID}",
          dependsOn: ["--rename"],
          args: {
            name: "authID",
          },
        },
        helpOption,
      ],
    },
    {
      icon: "⭐️",
      name: "account:setup",
      description:
        "Sets up an account to use with SuiteCloud SDK and configures the default auth ID for the SuiteCloud project. This command requires browser-based login to NetSuite",
      options: [
        interactiveOption,
        {
          name: ["-d", "--dev"],
          description:
            "Only needs to be specified if you want to use a customized NetSuite domain",
        },
        helpOption,
      ],
    },
    {
      icon: "🔑",
      name: "account:setup:ci",
      description:
        "Sets up an account to use with SuiteCloud SDK and configures the default auth ID for the SuiteCloud project. No browser-based login required. To change the default auth ID later, use the --select option",
      options: [
        {
          name: "--account",
          description: "References the NetSuite account ID",
          args: {
            name: "account id",
          },
        },
        {
          name: "--authid",
          description:
            "References the custom alias you give to a specific account-role combination",
          args: {
            name: "auth id",
          },
        },
        {
          name: "--certificateid",
          description:
            "References the certificate ID obtained from NetSuite after uploading the public key file",
          args: {
            name: "certificate id",
          },
        },
        {
          name: "--domain",
          description:
            "References the NetSuite domain of the account you want to use. You only need to specify the NetSuite domain if you are not using a production account",
          args: {
            name: "domain",
          },
        },
        {
          name: "--privatekeypath",
          description:
            "References the local path to the private key file matching the certificate in NetSuite",
          args: {
            name: "path",
            template: "filepaths",
          },
        },
        {
          name: "--select",
          description:
            "Selects an existing auth ID as the default for your SuiteCloud project. It cannot be combined with the other options",
          exclusiveOn: [
            "--account",
            "--authid",
            "--certificateid",
            "--domain",
            "--privatekeypath",
          ],
          args: {
            name: "auth id",
          },
        },
        helpOption,
      ],
    },
    {
      icon: "⚙️",
      name: "config:import",
      description:
        "Imports the feature configuration from your NetSuite account to the account customization project",
      options: [helpOption],
    },
    {
      icon: "📂",
      name: "file:create",
      description: "Creates a SuiteScript file",
      options: [
        interactiveOption,
        {
          name: "--module",
          description:
            'Specifies the SuiteScript modules you want to add to the SuiteScript file. For example, "N/record"',
          args: {
            name: "module",
            isVariadic: true,
            suggestions: suiteScriptModules,
          },
        },
        {
          name: "--path",
          description:
            'Specifies the File Cabinet path of the SuiteScript file to create. For example, "/SuiteScripts/ClientScript.js"',
          args: {
            name: "path",
          },
        },
        {
          name: "--type",
          description:
            'Specifies the type of the SuiteScript file that you want to create. For example, "ClientScript"',
          args: {
            name: "type",
            suggestions: scriptTypes,
          },
        },
        helpOption,
      ],
    },
    {
      icon: "⬇️",
      name: "file:import",
      description:
        "Imports files from an account to your account customization project. You cannot import files from a SuiteApp",
      options: [
        interactiveOption,
        {
          name: "--paths",
          description:
            'Specifies the File Cabinet paths of the files to import. For example, "/SuiteScripts/file.js"',
          args: {
            name: "path",
            isVariadic: true,
          },
        },
        {
          name: "--excludeproperties",
          description:
            "Excludes all file properties within the .attributes folder",
        },
        helpOption,
      ],
    },
    {
      icon: "🗒️",
      name: "file:list",
      description: "Lists the files in the File Cabinet of your account",
      options: [
        interactiveOption,
        {
          name: "--folder",
          description:
            'Specifies the File Cabinet path, for example, "/SuiteScripts". All files within subfolders are included',
          args: {
            name: "cabinet",
            template: "folders",
          },
        },
        helpOption,
      ],
    },
    {
      icon: "⬆️",
      name: "file:upload",
      description: "Uploads files from your project to an account",
      options: [
        interactiveOption,
        {
          name: "--paths",
          description:
            'Specifies the file cabinet paths of the files to upload. To specify multiple paths, enter a space between paths and enclose the entire argument in double quotes. For example, "/SuiteScripts/file.js" for account customization projects, and "/SuiteApps/com.project.example/script.js" for SuiteApp projects',
          args: {
            name: "files",
            template: "filepaths",
            isVariadic: true,
          },
        },
        helpOption,
      ],
    },
    {
      icon: "⬇️",
      name: "object:import",
      description:
        "Imports custom objects from your NetSuite account to the SuiteCloud project. In account customization projects (ACP), if SuiteScript files are referenced in the custom objects you import, these files get imported by default",
      options: [
        interactiveOption,
        {
          name: "--appid",
          description:
            "Specifies your application ID. If specified, only custom objects with that application ID are imported. Otherwise, only custom objects with no application ID are imported",
          args: {
            name: "app id",
          },
        },
        {
          name: "--destinationfolder",
          description:
            "Specifies the project folder where objects will be stored. It must be within the Objects folder of your project. For example, /Objects/MyObjects",
          args: {
            name: "folder",
            template: "folders",
          },
        },
        {
          name: "--excludefiles",
          description:
            "Indicates that the SuiteScript files referenced in custom objects are not imported. It can only be used in account customization projects (ACP)",
        },
        {
          name: "--scriptid",
          description:
            'Specifies the script ID. To specify multiple IDs, enter the IDs separated by spaces. Enter "ALL" to import all custom objects of the specified type',
          args: {
            name: "script id",
            isVariadic: true,
            suggestions: ["ALL"],
          },
        },
        {
          name: "--type",
          description:
            'Specifies the type of custom objects to import. Enter "ALL" to import all custom objects. To see what custom objects are supported by SDF, see https://system.netsuite.com/app/help/helpcenter.nl?fid=sdfxml.html',
          args: {
            name: "type",
            suggestions: ["ALL", ...objectTypes],
          },
        },
        helpOption,
      ],
    },
    {
      icon: "🗒️",
      name: "object:list",
      description: "Lists the custom objects deployed in an account",
      options: [
        interactiveOption,
        {
          name: "--appid",
          description:
            "Specifies your application ID. If specified, only custom objects with that application ID are listed. Otherwise, only custom objects with no application ID are listed",
          args: {
            name: "app id",
          },
        },
        {
          name: "--scriptid",
          description:
            "Specifies the script ID. If you specify it, only objects containing that script ID will be listed. Otherwise, all objects are listed",
          args: {
            name: "script id",
          },
        },
        {
          name: "--type",
          description:
            "Specifies the type of custom objects to list. To specify multiple types, enter the types separated by spaces. Otherwise, all types are listed. To see what custom objects are supported by SDF, see https://system.netsuite.com/app/help/helpcenter.nl?fid=sdfxml.html",
          args: {
            name: "types",
            isVariadic: true,
            suggestions: objectTypes,
          },
        },
        helpOption,
      ],
    },
    {
      icon: "♻️",
      name: "object:update",
      description:
        "Overwrites the custom objects in the project with the custom objects in an account",
      options: [
        interactiveOption,
        {
          name: "--includeinstances",
          description:
            "Includes instances. This is only available for custom records",
        },
        {
          name: "--scriptid",
          description:
            "Specifies the script ID of the objects you want to overwrite. To specify multiple IDs, enter the IDs separated by spaces",
          args: {
            name: "script id",
            isVariadic: true,
          },
        },
        helpOption,
      ],
    },
    {
      icon: "🍺",
      name: "project:adddependencies",
      description: "Adds the missing dependencies to the manifest file",
      options: [helpOption],
    },
    {
      icon: "🆕",
      name: "project:create",
      description:
        "Creates a SuiteCloud project, either a SuiteApp or an account customization project (ACP)",
      options: [
        interactiveOption,
        {
          name: "--overwrite",
          description: "Overwrites the existing project",
        },
        {
          name: "--projectid",
          description:
            "Specifies the project ID. It is mandatory for SuiteApps",
          args: {
            name: "project id",
          },
        },
        {
          name: "--projectname",
          description: "Specifies the project name",
          args: {
            name: "name",
          },
        },
        {
          name: "--projectversion",
          description:
            "Specifies the project version. It is mandatory for SuiteApps",
          args: {
            name: "project version",
          },
        },
        {
          name: "--publisherid",
          description:
            "Specifies the publisher ID. It is mandatory for SuiteApps",
          args: {
            name: "publisher id",
          },
        },
        {
          name: "--type",
          description:
            "Specifies the project type. Enter one of the following options: ACCOUNTCUSTOMIZATION or SUITEAPP",
          args: {
            suggestions: ["ACCOUNTCUSTOMIZATION", "SUITEAPP"],
          },
        },
        helpOption,
      ],
    },
    {
      icon: "🚀",
      name: "project:deploy",
      description:
        "Deploys the folder containing the project. The project folder is zipped before deployment, only including the files and folders referenced in the deploy.xml file",
      options: [
        interactiveOption,
        {
          name: "--dryrun",
          description:
            "Runs a preview of your deploy process. Your project is not deployed",
        },
        logOption("deployment"),
        {
          name: "--validate",
          description:
            "Has no effect. Project deployment is always validated on the server",
          hidden: true,
        },
        accountSpecificValuesOption,
        applyInstallPrefsOption,
        jsonOption,
        helpOption,
      ],
    },
    {
      icon: "📦",
      name: "project:package",
      description:
        "Generates a ZIP file from your project, respecting the structure specified in the deploy.xml file",
      options: [interactiveOption, helpOption],
    },
    {
      icon: "✅",
      name: "project:validate",
      description: "Validates the folder containing the SuiteCloud project",
      options: [
        interactiveOption,
        logOption("validation"),
        {
          name: "--server",
          description:
            "Has no effect. Project validation is always performed on the server",
          hidden: true,
        },
        accountSpecificValuesOption,
        applyInstallPrefsOption,
        jsonOption,
        helpOption,
      ],
    },
    {
      icon: "🗝️",
      name: "proxy:generatekey",
      description: "Generates a new API key for proxy authentication",
      options: [helpOption],
    },
    {
      icon: "🔌",
      name: "proxy:start",
      description:
        "Starts a local proxy for the SuiteCloud Developer Assistant service",
      options: [
        interactiveOption,
        {
          name: "--authid",
          description:
            "References the custom alias you give to a specific account-role combination",
          args: {
            name: "auth id",
          },
        },
        {
          name: "--port",
          description:
            "Specifies the local port for the SuiteCloud Developer Assistant service. Valid range: 1024-65535",
          args: {
            name: "port",
          },
        },
        helpOption,
      ],
    },
    {
      name: "help",
      description: "Displays help for the command",
      args: {
        name: "command",
        isOptional: true,
      },
    },
  ],
  options: [
    {
      name: "--version",
      description: "Outputs the version number",
    },
    interactiveOption,
    helpOption,
  ],
};
export default completionSpec;
