// tccutil (Xcode 27.2 (27B52) bundled man page, 2026-11-19). Source: tccutil(1) HTML export from keith/xcode-man-pages
// at the Xcode 27.2 commit (page last changed in 2021 regeneration; text dated 2012), read statically; not run on macOS.
// The man page documents only "reset", the special service "All" and the AddressBook example; service names beyond those
// come from the previous spec plus the PPPC payload list in apple/device-management (SystemPolicyAppBundles, SystemPolicyAppData).
import { generateBundleIds } from "./open";

const commands: Fig.Suggestion[] = [
  {
    name: "reset",
    description:
      "Reset all decisions for the service so apps prompt again on next access (for one app if a bundle id is given)",
    type: "subcommand",
  },
];

const services: Fig.Suggestion[] = [
  {
    name: "All",
    description: "Every service",
  },
  {
    name: "AddressBook",
    description: "Access your contacts",
  },
  {
    name: "AppleEvents",
  },
  {
    name: "BluetoothAlways",
    description: "Use Bluetooth",
  },
  {
    name: "Calendar",
    description: "Access your calendar",
  },
  {
    name: "Camera",
    description: "Access the camera",
  },
  {
    name: "ContactsFull",
    description: "Access all of your contacts information",
  },
  {
    name: "ContactsLimited",
    description: "Access your contacts basic information",
  },
  {
    name: "FileProviderDomain",
    description: "Access files managed by indirect_object",
  },
  {
    name: "FileProviderPresence",
    description: "Allow the app to see when you are using files managed by it?",
  },
  {
    name: "Location",
    description: "Use your current location",
  },
  {
    name: "MediaLibrary",
    description:
      "Access Apple Music, your music and video activity, and your media library",
  },
  {
    name: "Microphone",
    description: "Access the microphone",
  },
  {
    name: "Motion",
    description: "Access Your Motion & Fitness Activity",
  },
  {
    name: "Photos",
    description: "Access Your Photo",
  },
  {
    name: "PhotosAdd",
    description: "Add to your Photo",
  },
  {
    name: "Prototype3Rights",
    description: "Authorization to Test Service Proto3Right",
  },
  {
    name: "Prototype4Rights",
    description: "Authorization to Test Service Proto4Right",
  },
  {
    name: "Reminders",
    description: "Access your reminders",
  },
  {
    name: "ScreenCapture",
    description: "Capture the contents of the system display",
  },
  {
    name: "Siri",
    description: "Use app with Siri",
  },
  {
    name: "SpeechRecognition",
    description: "Access Speech Recognition",
  },
  {
    name: "SystemPolicyAppBundles",
    description: "Update or delete other apps",
  },
  {
    name: "SystemPolicyAppData",
    description: "Access the data of other apps",
  },
  {
    name: "SystemPolicyDesktopFolder",
    description: "Access files in your Desktop folder",
  },
  {
    name: "SystemPolicyDeveloperFiles",
    description: "Access a file used in Software Development",
  },
  {
    name: "SystemPolicyDocumentsFolder",
    description: "Access files in your Documents folder",
  },
  {
    name: "SystemPolicyDownloadsFolder",
    description: "Access files in your Downloads folder",
  },
  {
    name: "SystemPolicyNetworkVolumes",
    description: "Access files on a network volume",
  },
  {
    name: "SystemPolicyRemovableVolumes",
    description: "Access files on a removable volume",
  },
  {
    name: "SystemPolicySysAdminFiles",
    description: "Administer your computer",
  },
  {
    name: "Willow",
    description: "Access your Home data",
  },
  {
    name: "SystemPolicyAllFiles",
    description: "Full Disk Access",
  },
  {
    name: "Accessibility",
    description: "Allows app to control your computer",
  },
  {
    name: "PostEvent",
    description: "Allows sending keystrokes",
  },
  {
    name: "ListenEvent",
    description: "Allow monitoring input from your keyboard",
  },
  {
    name: "DeveloperTool",
    description:
      "Allow app to run software that doesn't meet the system's security policy",
  },
].map((item) => Object.assign(item, { icon: "⚙️" }));

const completionSpec: Fig.Spec = {
  name: "tccutil",
  description: "Manage the privacy database",
  args: [
    // Note that tccutil doesn't have "subcommands", it has "commands"
    // that it can issue to the database for the given service. It just
    // so happens that it currently only has one command, but the signature
    // will remain the same when (if?) future commands are added.
    { name: "command", suggestions: commands },
    { name: "service", suggestions: services },
    {
      name: "bundle id",
      isOptional: true,
      generators: generateBundleIds("/Applications"),
    },
  ],
};

export default completionSpec;
