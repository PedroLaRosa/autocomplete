// expo-cli v6.3.10 (npm "latest" dist-tag, 2026-11-19). Source: ran the published expo-cli@6.3.10 package
// (Node 22) and dumped every registered commander command and option, as `yarn introspect fig` in
// expo/expo-cli does; the newest published 6.3.12 has an identical command/option tree.
// The global expo-cli is deprecated in favour of the local `npx expo` CLI (see expo.ts) and eas-cli;
// commands it only keeps as "Superseded" stubs are marked deprecated. `expo diagnostics` was removed.
// Not verified: the api.npms.io package search used by the `install` generator (unreachable from the sync sandbox).
// Copyright (c) 2021-present 650 Industries, Inc. (aka Expo)

const _gen: Record<string, Fig.Generator> = {
  npm: {
    script(context) {
      if (context[context.length - 1] === "") return undefined;
      const searchTerm = context[context.length - 1];
      return [
        "curl",
        "-s",
        "-H",
        "Accept: application/json",
        `https://api.npms.io/v2/search?q=${searchTerm}&size=20`,
      ];
    },
    postProcess(script: string) {
      try {
        const results: {
          package: {
            name: string;
            description: string;
          };
          searchScore: number;
        }[] = JSON.parse(script).results;
        return results.map((item) => ({
          name: item.package.name,
          description: item.package.description,
        })) as Fig.Suggestion[];
      } catch (e) {
        return [];
      }
    },
  },
  "xcode-configuration": {
    script: ["bash", "-c", "xcodebuild -project ios/*.xcodeproj -list -json"],
    postProcess: (script: string) =>
      JSON.parse(script).project.configurations.map((name) => ({ name })),
  },
  "xcode-scheme": {
    script: ["bash", "-c", "xcodebuild -project ios/*.xcodeproj -list -json"],
    postProcess: (script: string) =>
      JSON.parse(script).project.schemes.map((name) => ({ name })),
  },
  "xcode-devices": {
    script: ["xcrun", "xctrace", "list", "devices"],
    postProcess: (script: string) =>
      script
        .split("\n")
        .filter((item) => !item.match(/^=/))
        .filter(Boolean)
        .map((item) => item.split(/(.*?) (\(([0-9.]+)\) )?\(([0-9A-F-]+)\)/i))
        // filter catalyst
        .filter((item: string[] | null) => !!item?.[3])
        .map(([, name, , osVersion, udid]) => ({
          displayName: `${name.trim()} (${osVersion})`,
          name: udid,
        })),
  },
  "max-workers": {
    script: ["sysctl", "-n", "hw.ncpu"],
    postProcess: (script: string) => {
      const count = Number(script);
      return Array.from({ length: count }, (_, i) => {
        const v = count - i;
        return {
          priority: v,
          name: String(v),
        };
      });
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "expo-cli",
  icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/expo.png",
  description:
    "Tools for creating, running, and deploying Universal Expo and React Native apps",
  options: [
    {
      name: ["-h", "--help"],
      priority: 1,
      description: "Output usage information",
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
    },
    {
      name: ["-V", "--version"],
      description: "Output the version number",
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/info.png",
      priority: 1,
    },
    {
      name: "--non-interactive",
      description:
        "Fail, if an interactive prompt would be required to continue",
      isPersistent: true,
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
    },
  ],
  subcommands: [
    {
      name: ["login", "signin"],
      description: "Login to an Expo account",
      priority: 63,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-u", "--username"],
          description: "Username",
          args: {
            name: "string",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-p", "--password"],
          description: "Password",
          args: {
            name: "string",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--otp",
          description: "One-time password from your 2FA device",
          args: {
            name: "string",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/login.png",
    },
    {
      name: "logout",
      description: "Logout of an Expo account",
      priority: 63,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/logout.png",
    },
    {
      name: "register",
      description: "Sign up for a new Expo account",
      priority: 63,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/register.png",
    },
    {
      name: ["whoami", "w"],
      description: "Return the currently authenticated account",
      priority: 63,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/info.png",
    },
    {
      name: ["build:ios", "bi"],
      deprecated: true,
      description:
        "Build and sign a standalone IPA for the Apple App Store (superseded by eas build in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-c", "--clear-credentials"],
          description: "Clear all credentials stored on Expo servers",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--clear-dist-cert",
          description: "Remove Distribution Certificate stored on Expo servers",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--clear-push-key",
          description: "Remove Push Notifications Key stored on Expo servers",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--clear-push-cert",
          description:
            "Remove Push Notifications Certificate stored on Expo servers. Use of Push Notifications Certificates is deprecated",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--clear-provisioning-profile",
          description: "Remove Provisioning Profile stored on Expo servers",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: ["-r", "--revoke-credentials"],
          description:
            "Revoke credentials on developer.apple.com, select appropriate using --clear-* options",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--apple-id",
          description:
            "Apple ID username (please also set the Apple ID password as EXPO_APPLE_PASSWORD environment variable)",
          args: {
            name: "login",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: ["-t", "--type"],
          description: "Type of build: [archive|simulator]",
          args: {
            name: "type",
            suggestions: [
              {
                name: "archive",
              },
              {
                name: "simulator",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--release-channel",
          description: "Pull from specified release channel",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--no-publish",
          description: "Disable automatic publishing before building",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--no-wait",
          description: "Exit immediately after scheduling build",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--team-id",
          description: "Apple Team ID",
          args: {
            name: "apple-teamId",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--dist-p12-path",
          description:
            "Path to your Distribution Certificate P12 (set password as EXPO_IOS_DIST_P12_PASSWORD environment variable)",
          args: {
            name: "path",
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--push-id",
          description: "Push Key ID (ex: 123AB4C56D)",
          args: {
            name: "push-id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--push-p8-path",
          description: "Path to your Push Key .p8 file",
          args: {
            name: "path",
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--provisioning-profile-path",
          description: "Path to your Provisioning Profile",
          args: {
            name: "path",
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--public-url",
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--skip-credentials-check",
          description: "Skip checking credentials",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--skip-workflow-check",
          description:
            "Skip warning about build service bare workflow limitations",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
    },
    {
      name: ["build:android", "ba"],
      deprecated: true,
      description:
        "Build and sign a standalone APK or App Bundle for the Google Play Store (superseded by eas build in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-c", "--clear-credentials"],
          description: "Clear stored credentials",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--release-channel",
          description: "Pull from specified release channel",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--no-publish",
          description: "Disable automatic publishing before building",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--no-wait",
          description: "Exit immediately after triggering build",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--keystore-path",
          description: "Path to your Keystore: *.jks",
          args: {
            name: "path",
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/key.png",
        },
        {
          name: "--keystore-alias",
          description: "Keystore Alias",
          args: {
            name: "alias",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/key.png",
        },
        {
          name: "--generate-keystore",
          description: "[deprecated] Generate Keystore if one does not exist",
          deprecated: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
        },
        {
          name: "--public-url",
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--skip-workflow-check",
          description:
            "Skip warning about build service bare workflow limitations",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: ["-t", "--type"],
          description: "Type of build: [app-bundle|apk]",
          args: {
            name: "type",
            suggestions: [
              {
                name: "app-bundle",
              },
              {
                name: "apk",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: "build:web",
      description: "Build the web app for production",
      priority: 58,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-c", "--clear"],
          description: "Clear all cached build files and assets",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--no-pwa",
          description:
            "Prevent webpack from generating the manifest.json and injecting meta into the index.html head",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: ["-d", "--dev"],
          description: "Turns dev flag on before bundling",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/webpack.png",
    },
    {
      name: ["build:status", "bs"],
      deprecated: true,
      description:
        "Get the status of the latest build for the project (superseded by eas build:list in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--public-url",
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/info.png",
    },
    {
      name: "credentials:manager",
      deprecated: true,
      description:
        "Manage your credentials (superseded by eas credentials in eas-cli)",
      priority: 57,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-p", "--platform"],
          description: "Platform: [android|ios]",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/list.png",
    },
    {
      name: "customize:web",
      description: "Eject the default web files for customization",
      priority: 60,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-f", "--force"],
          description: "Allows replacing existing files",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/force.png",
        },
        {
          name: "--offline",
          description: "Allows this command to run while offline",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/offline.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/customize.png",
    },
    {
      name: "eject",
      deprecated: true,
      description:
        "Create Xcode and Android Studio projects for your app. Use this if you need to add custom native functionality (superseded by expo prebuild)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--no-install",
          description: "Skip installing npm packages and CocoaPods",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--npm",
          description:
            "Use npm to install dependencies. (default when Yarn is not installed)",
          icon: "fig://icon?type=npm",
        },
        {
          name: ["-p", "--platform"],
          description: "Platforms to sync: ios, android, all. Default: all",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "all",
              },
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/eject.png",
    },
    {
      name: "prebuild",
      description:
        "Create native iOS and Android project files before building natively. Learn more: https://docs.expo.dev/workflow/customizing/",
      priority: 60,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--no-install",
          description: "Skip installing npm packages and CocoaPods",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--clean",
          description:
            "Delete the native folders and regenerate them before applying changes",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--npm",
          description:
            "Use npm to install dependencies. (default when Yarn is not installed)",
          icon: "fig://icon?type=npm",
        },
        {
          name: "--template",
          description:
            "Project template to clone from. File path pointing to a local tar file or a github repo",
          args: {
            name: "template",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/export.png",
        },
        {
          name: ["-p", "--platform"],
          description: "Platforms to sync: ios, android, all. Default: all",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "all",
              },
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--skip-dependency-update",
          description:
            "Preserves versions of listed packages in package.json (comma separated list)",
          args: {
            name: "dependencies",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/prebuild.png",
    },
    {
      name: "bundle-assets",
      hidden: true,
      description:
        "Bundle assets for a detached app. This command should be executed from xcode or gradle",
      priority: 52,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--dest",
          description: "Destination directory for assets",
          args: {
            name: "dest",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--platform",
          description: "Detached project platform",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
    },
    {
      name: "prepare-detached-build",
      hidden: true,
      description: "Prepare a detached project for building",
      priority: 52,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--platform",
          description: "Detached project platform",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--skipXcodeConfig",
          description: "[iOS only] if true, do not configure Xcode project",
          args: {
            name: "bool",
            isOptional: true,
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
    },
    {
      name: "export",
      description:
        "Export the static files of the app for hosting it on a web server",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--platform",
          description: "Platforms: android, ios, all",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "all",
              },
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: ["-p", "--public-url"],
          description:
            "The public url that will host the static files (required)",
          args: {
            name: "url",
          },
          isRequired: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-c", "--clear"],
          description: "Clear the Metro bundler cache",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--output-dir",
          description: "The directory to export the static files to",
          args: {
            name: "dir",
            template: "folders",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: ["-a", "--asset-url"],
          description:
            "The absolute or relative url that will host the asset files",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-d", "--dump-assetmap"],
          description: "Dump the asset map for further processing",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/export.png",
        },
        {
          name: "--dev",
          description:
            "Configure static files for developing locally using a non-https server",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: ["-s", "--dump-sourcemap"],
          description: "Dump the source map for debugging the JS bundle",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/export.png",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress verbose output",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/quiet.png",
        },
        {
          name: ["-t", "--target"],
          description: "Target environment for which this export is intended",
          args: {
            name: "target",
            suggestions: [
              {
                name: "managed",
              },
              {
                name: "bare",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
        {
          name: "--merge-src-dir",
          description: "A repeatable source dir to merge in",
          args: {
            name: "dir",
            template: "folders",
          },
          isRepeatable: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--merge-src-url",
          description: "A repeatable source tar.gz file URL to merge in",
          args: {
            name: "url",
          },
          isRepeatable: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--max-workers",
          description: "Maximum number of tasks to allow Metro to spawn",
          args: {
            generators: _gen["max-workers"],
            name: "Number of workers",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--experimental-bundle",
          description: "Export bundles for use with EAS updates",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/export.png",
    },
    {
      name: "fetch:ios:certs",
      deprecated: true,
      description:
        "Download the project's iOS certificates, keys and provisioning profile (superseded by eas credentials in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
    },
    {
      name: "fetch:android:keystore",
      deprecated: true,
      description:
        "Download the project's Android keystore (superseded by eas credentials in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: "fetch:android:hashes",
      deprecated: true,
      description:
        "Compute and log the project's Android key hashes for Google/Facebook authentication (superseded by eas credentials in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: "fetch:android:upload-cert",
      deprecated: true,
      description:
        "Download the project's Android upload certificate (superseded by eas credentials in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: "config",
      description: "Show the project config",
      priority: 61,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-t", "--type"],
          description: "Type of config to show",
          args: {
            name: "type",
            suggestions: [
              {
                name: "public",
              },
              {
                name: "prebuild",
              },
              {
                name: "introspect",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--full",
          description: "Include all project config data",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--json",
          description: "Output in JSON format",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/config.png",
    },
    {
      name: "doctor",
      description: "Diagnose issues with the project",
      priority: 61,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--fix-dependencies",
          description: "Fix incompatible dependency versions",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/doctor.png",
    },
    {
      name: ["upgrade", "update"],
      description:
        "Upgrade the project packages and config for the given SDK version",
      priority: 61,
      args: {
        isOptional: true,
        name: "sdk-version",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--npm",
          description:
            "Use npm to install dependencies. (default when package-lock.json exists)",
          icon: "fig://icon?type=npm",
        },
        {
          name: "--yarn",
          description:
            "Use Yarn to install dependencies. (default when yarn.lock exists)",
          icon: "fig://icon?type=yarn",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/upgrade.png",
    },
    {
      name: ["init", "i"],
      description: "Create a new Expo project",
      priority: 64,
      args: {
        isOptional: true,
        name: "name",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-t", "--template"],
          description:
            'Specify which template to use. Valid options are "blank", "tabs", "bare-minimum" or a package on npm (e.g. "expo-template-bare-minimum") that includes an Expo project template',
          args: {
            name: "name",
            isOptional: true,
            suggestions: [
              {
                name: "blank",
              },
              {
                name: "tabs",
              },
              {
                name: "bare-minimum",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/export.png",
        },
        {
          name: "--npm",
          description:
            "Use npm to install dependencies. (default when Yarn is not installed)",
          icon: "fig://icon?type=npm",
        },
        {
          name: "--no-install",
          description: "Skip installing npm packages or CocoaPods",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--name",
          description: "Deprecated: Use expo init [name] instead",
          deprecated: true,
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
        },
        {
          name: "--yes",
          description:
            'Use default options. Same as "expo init . --template blank',
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/true.png",
        },
        {
          name: "--yarn",
          description:
            "Use Yarn to install dependencies. (default when Yarn is installed)",
          icon: "fig://icon?type=yarn",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/init.png",
    },
    {
      name: ["install", "add"],
      description: "Install a module or other package to a project",
      priority: 64,
      args: {
        generators: _gen["npm"],
        isOptional: true,
        isVariadic: true,
        name: "packages",
        debounce: true,
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--npm",
          description:
            "Use npm to install dependencies. (default when package-lock.json exists)",
          icon: "fig://icon?type=npm",
        },
        {
          name: "--yarn",
          description:
            "Use Yarn to install dependencies. (default when yarn.lock exists)",
          icon: "fig://icon?type=yarn",
        },
      ],
      icon: "fig://icon?type=npm",
    },
    {
      name: ["publish", "p"],
      deprecated: true,
      description:
        "Deploy a project to Expo hosting (superseded by eas update in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress verbose output from the Metro bundler",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/quiet.png",
        },
        {
          name: ["-s", "--send-to"],
          description: "A phone number or email address to send a link to",
          args: {
            name: "dest",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/send.png",
        },
        {
          name: ["-c", "--clear"],
          description: "Clear the Metro bundler cache",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: ["-t", "--target"],
          description:
            "Target environment for which this publish is intended. Options are `managed` or `bare`",
          args: {
            name: "target",
            suggestions: [
              {
                name: "managed",
              },
              {
                name: "bare",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
        {
          name: "--max-workers",
          description: "Maximum number of tasks to allow Metro to spawn",
          args: {
            generators: _gen["max-workers"],
            name: "Number of workers",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--release-channel",
          description:
            "The release channel to publish to. Default is 'default'",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/publish.png",
    },
    {
      name: ["publish:set", "ps"],
      deprecated: true,
      description:
        "Specify the channel to serve a published release (superseded by eas update:republish in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-c", "--release-channel"],
          description: "The channel to set the published release. (Required)",
          args: {
            name: "name",
          },
          isRequired: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-p", "--publish-id"],
          description:
            "The id of the published release to serve from the channel. (Required)",
          args: {
            name: "publish-id",
          },
          isRequired: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/publish.png",
    },
    {
      name: ["publish:rollback", "pr"],
      deprecated: true,
      description:
        "Undo an update to a channel (superseded by eas update:republish in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--channel-id",
          description: "This flag is deprecated",
          deprecated: true,
          args: {
            name: "channel-id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
        },
        {
          name: ["-c", "--release-channel"],
          description: "The channel to rollback from. (Required)",
          args: {
            name: "name",
          },
          isRequired: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-s", "--sdk-version"],
          description: "The sdk version to rollback. (Required)",
          args: {
            name: "version",
          },
          isRequired: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/expo.png",
        },
        {
          name: ["-p", "--platform"],
          description: "The platform to rollback",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/publish-rollback.png",
    },
    {
      name: ["publish:history", "ph"],
      deprecated: true,
      description:
        "Log the project's releases (superseded by eas update:list in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-c", "--release-channel"],
          description:
            "Filter by release channel. If this flag is not included, the most recent publications will be shown",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--count",
          description: "Number of logs to view, maximum 100, default 5",
          args: {
            name: "number-of-logs",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: ["-p", "--platform"],
          description:
            "Filter by platform, android or ios. Defaults to both platforms",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: ["-s", "--sdk-version"],
          description: "Filter by SDK version e.g. 35.0.0",
          args: {
            name: "version",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/expo.png",
        },
        {
          name: ["-r", "--raw"],
          description: "Produce some raw output",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/publish.png",
    },
    {
      name: ["publish:details", "pd"],
      deprecated: true,
      description:
        "Log details of a published release (superseded by eas update:view in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--publish-id",
          description: "Publication id. (Required)",
          args: {
            name: "publish-id",
          },
          isRequired: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-r", "--raw"],
          description: "Produce some raw output",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/publish.png",
    },
    {
      name: "push:android:upload",
      deprecated: true,
      description:
        "Upload an FCM key for Android push notifications (superseded by eas credentials in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--api-key",
          description: "Server API key for FCM",
          args: {
            name: "api-key",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/key.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/push.png",
    },
    {
      name: "push:android:show",
      deprecated: true,
      description:
        "Log the value currently in use for FCM notifications for this project (superseded by eas credentials in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/push.png",
    },
    {
      name: "push:android:clear",
      deprecated: true,
      description:
        "Delete a previously uploaded FCM credential (superseded by eas credentials in eas-cli)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/push-clear.png",
    },
    {
      name: "run:android",
      description: "Run the Android app binary locally",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--no-bundler",
          description: "Skip starting the Metro bundler",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/metro.png",
        },
        {
          name: ["-d", "--device"],
          description: "Device name to build the app on",
          args: {
            name: "device",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: ["-p", "--port"],
          description: "Port to start the Metro bundler on. Default: 8081",
          args: {
            name: "port",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--variant",
          description: "(Android) build variant",
          args: {
            name: "name",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: "run:ios",
      description: "Run the iOS app binary locally",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--no-build-cache",
          description: "Clear the native derived data before building",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--no-install",
          description: "Skip installing dependencies",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--no-bundler",
          description: "Skip starting the Metro bundler",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/metro.png",
        },
        {
          name: ["-d", "--device"],
          description: "Device name or UDID to build the app on",
          args: {
            generators: _gen["xcode-devices"],
            name: "device",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: ["-p", "--port"],
          description: "Port to start the Metro bundler on. Default: 8081",
          args: {
            name: "port",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--scheme",
          description: "Scheme to build",
          args: {
            generators: _gen["xcode-scheme"],
            name: "scheme",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--configuration",
          description:
            "Xcode configuration to use. Debug or Release. Default: Debug",
          args: {
            generators: _gen["xcode-configuration"],
            name: "configuration",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
    },
    {
      name: "send",
      description: "Share the project's URL to an email address",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-s", "--send-to"],
          description: "Email address to send the URL to",
          args: {
            name: "dest",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/send.png",
        },
        {
          name: "--dev-client",
          description:
            "Experimental: Starts the bundler for use with the expo-development-client",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--scheme",
          description: "Custom URI protocol to use with a development build",
          args: {
            name: "scheme",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/scheme.png",
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo Go on a connected Android device",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo Go in a currently running iOS simulator on your computer",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/web.png",
        },
        {
          name: ["-m", "--host"],
          description:
            'Lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {
            name: "mode",
            isOptional: true,
            suggestions: [
              {
                name: "lan",
              },
              {
                name: "tunnel",
              },
              {
                name: "localhost",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--tunnel",
          description: "Same as --host tunnel",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/tunnel.png",
        },
        {
          name: "--lan",
          description: "Same as --host lan",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--localhost",
          description: "Same as --host localhost",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/localhost.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/send.png",
    },
    {
      name: ["start", "r"],
      description: "Start a local dev server for the app",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-s", "--send-to"],
          description: "An email address to send a link to",
          args: {
            name: "dest",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/send.png",
        },
        {
          name: ["-c", "--clear"],
          description: "Clear the Metro bundler cache",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--max-workers",
          description: "Maximum number of tasks to allow Metro to spawn",
          args: {
            generators: _gen["max-workers"],
            name: "Number of workers",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--no-dev",
          description: "Turn development mode off",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--minify",
          description: "Minify code",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/minify.png",
        },
        {
          name: "--https",
          description: "To start webpack with https protocol",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lock.png",
        },
        {
          name: "--force-manifest-type",
          description: "Override auto detection of manifest type",
          args: {
            name: "manifest-type",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-p", "--port"],
          description:
            "Port to start the native Metro bundler on (does not apply to web or tunnel). Default: 19000",
          args: {
            name: "port",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--dev-client",
          description:
            "Experimental: Starts the bundler for use with the expo-development-client",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--scheme",
          description: "Custom URI protocol to use with a development build",
          args: {
            name: "scheme",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/scheme.png",
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo Go on a connected Android device",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo Go in a currently running iOS simulator on your computer",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/web.png",
        },
        {
          name: ["-m", "--host"],
          description:
            'Lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {
            name: "mode",
            isOptional: true,
            suggestions: [
              {
                name: "lan",
              },
              {
                name: "tunnel",
              },
              {
                name: "localhost",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--tunnel",
          description: "Same as --host tunnel",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/tunnel.png",
        },
        {
          name: "--lan",
          description: "Same as --host lan",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--localhost",
          description: "Same as --host localhost",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/localhost.png",
        },
        {
          name: "--offline",
          description: "Allows this command to run while offline",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/offline.png",
        },
        {
          name: "--dev",
          description: "Deprecated: Dev mode is used by default",
          deprecated: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
        },
        {
          name: "--no-minify",
          description: "Deprecated: Minify is disabled by default",
          deprecated: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
        },
        {
          name: "--no-https",
          description: "Deprecated: https is disabled by default",
          deprecated: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/play.png",
    },
    {
      name: ["start:web", "web"],
      description: "Start a Webpack dev server for the web app",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--no-dev",
          description: "Turn development mode off",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--minify",
          description: "Minify code",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/minify.png",
        },
        {
          name: "--https",
          description: "To start webpack with https protocol",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lock.png",
        },
        {
          name: "--force-manifest-type",
          description: "Override auto detection of manifest type",
          args: {
            name: "manifest-type",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-p", "--port"],
          description: "Port to start the Webpack bundler on. Default: 19006",
          args: {
            name: "port",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: ["-s", "--send-to"],
          description: "An email address to send a link to",
          args: {
            name: "dest",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/send.png",
        },
        {
          name: "--dev-client",
          description:
            "Experimental: Starts the bundler for use with the expo-development-client",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--scheme",
          description: "Custom URI protocol to use with a development build",
          args: {
            name: "scheme",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/scheme.png",
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo Go on a connected Android device",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo Go in a currently running iOS simulator on your computer",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/web.png",
        },
        {
          name: ["-m", "--host"],
          description:
            'Lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {
            name: "mode",
            isOptional: true,
            suggestions: [
              {
                name: "lan",
              },
              {
                name: "tunnel",
              },
              {
                name: "localhost",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--tunnel",
          description: "Same as --host tunnel",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/tunnel.png",
        },
        {
          name: "--lan",
          description: "Same as --host lan",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--localhost",
          description: "Same as --host localhost",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/localhost.png",
        },
        {
          name: "--offline",
          description: "Allows this command to run while offline",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/offline.png",
        },
        {
          name: "--dev",
          description: "Deprecated: Dev mode is used by default",
          deprecated: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
        },
        {
          name: "--no-minify",
          description: "Deprecated: Minify is disabled by default",
          deprecated: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
        },
        {
          name: "--no-https",
          description: "Deprecated: https is disabled by default",
          deprecated: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/web.png",
    },
    {
      name: ["upload:android", "ua"],
      deprecated: true,
      description: "Superseded by eas submit in eas-cli",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--verbose",
          description: "Migrate to eas submit --verbose",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/verbose.png",
        },
        {
          name: "--latest",
          description: "Migrate to eas submit --latest",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/latest.png",
        },
        {
          name: "--id",
          description: "Migrate to eas submit --id <id>",
          args: {
            name: "id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--path",
          description: "Migrate to eas submit --path <path>",
          args: {
            name: "path",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--url",
          description: "Migrate to eas submit --url <url>",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--android-package",
          description:
            "Migrate to eas submit (android-package is auto inferred)",
          args: {
            name: "android-package",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
        },
        {
          name: "--type",
          description: "Migrate to eas submit (type is auto inferred)",
          args: {
            name: "archive-type",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--key",
          description: "Migrate to eas.json's serviceAccountKeyPath property",
          args: {
            name: "key",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/key.png",
        },
        {
          name: "--track",
          description: "Migrate to eas.json's track property",
          args: {
            name: "track",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--release-status",
          description: "Migrate to eas.json's releaseStatus property",
          args: {
            name: "release-status",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/play-store.png",
    },
    {
      name: ["upload:ios", "ui"],
      deprecated: true,
      description: "Superseded by eas submit in eas-cli",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--verbose",
          description: "Migrate to eas submit --verbose",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/verbose.png",
        },
        {
          name: "--latest",
          description: "Migrate to eas submit --latest",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/latest.png",
        },
        {
          name: "--id",
          description: "Migrate to eas submit --id <id>",
          args: {
            name: "id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--path",
          description: "Migrate to eas submit --path <path>",
          args: {
            name: "path",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--url",
          description: "Migrate to eas submit --url <url>",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--apple-id",
          description: "Migrate to eas.json's appleId property",
          args: {
            name: "apple-id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: "--itc-team-id",
          description: "Migrate to eas.json's appleTeamId property",
          args: {
            name: "itc-team-id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--app-name",
          description: "Migrate to eas.json's appName property",
          args: {
            name: "app-name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--company-name",
          description: "Migrate to eas.json's companyName property",
          args: {
            name: "company-name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--sku",
          description: "Migrate to eas.json's sku property",
          args: {
            name: "sku",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--language",
          description: "Migrate to eas.json's language property",
          args: {
            name: "language",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/app-store.png",
    },
    {
      name: "client:ios",
      deprecated: true,
      description:
        "Build a custom Expo Go for iOS with your own Apple credentials and install it via Safari (superseded by Expo Dev Clients)",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--apple-id",
          description:
            "Apple ID username (please also set the Apple ID password as EXPO_APPLE_PASSWORD environment variable)",
          args: {
            name: "login",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/download.png",
    },
    {
      name: "client:install:ios",
      description: "Install Expo Go for iOS on the simulator",
      priority: 62,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--latest",
          description:
            "Install the latest version of Expo Go, ignoring the current project version",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/latest.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
    },
    {
      name: "client:install:android",
      description:
        "Install Expo Go for Android on a connected device or emulator",
      priority: 62,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-d", "--device"],
          description: "Device name to install the client on",
          args: {
            name: "device",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--latest",
          description:
            "Install the latest version of Expo Go, ignore the current project version",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/latest.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: ["url", "u"],
      description: "Log a URL for opening the project in Expo Go",
      priority: 55,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--dev-client",
          description:
            "Experimental: Starts the bundler for use with the expo-development-client",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--scheme",
          description: "Custom URI protocol to use with a development build",
          args: {
            name: "scheme",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/scheme.png",
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo Go on a connected Android device",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo Go in a currently running iOS simulator on your computer",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/web.png",
        },
        {
          name: ["-m", "--host"],
          description:
            'Lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {
            name: "mode",
            isOptional: true,
            suggestions: [
              {
                name: "lan",
              },
              {
                name: "tunnel",
              },
              {
                name: "localhost",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--tunnel",
          description: "Same as --host tunnel",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/tunnel.png",
        },
        {
          name: "--lan",
          description: "Same as --host lan",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--localhost",
          description: "Same as --host localhost",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/localhost.png",
        },
        {
          name: "--offline",
          description: "Allows this command to run while offline",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/offline.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/url.png",
    },
    {
      name: "url:ipa",
      description: "Log the download URL for the standalone iOS binary",
      priority: 55,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--public-url",
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/app-store.png",
    },
    {
      name: "url:apk",
      description: "Log the download URL for the standalone Android binary",
      priority: 55,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--public-url",
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/play-store.png",
    },
    {
      name: "webhooks",
      description: "List all webhooks for a project",
      priority: 54,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/webhook.png",
    },
    {
      name: "webhooks:add",
      description: "Add a webhook to a project",
      priority: 54,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--url",
          description: "URL to request. (Required)",
          args: {
            name: "url",
          },
          isRequired: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--event",
          description:
            "Event type that triggers the webhook. [build] (Required)",
          args: {
            name: "event-type",
            suggestions: [
              {
                name: "build",
              },
            ],
          },
          isRequired: true,
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--secret",
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header",
          args: {
            name: "secret",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lock.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/webhook-add.png",
    },
    {
      name: "webhooks:remove",
      description: "Delete a webhook",
      priority: 54,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--id",
          description: "ID of the webhook to remove",
          args: {
            name: "id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/webhook-remove.png",
    },
    {
      name: "webhooks:update",
      description: "Update an existing webhook",
      priority: 54,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--id",
          description: "ID of the webhook to update",
          args: {
            name: "id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--url",
          description: "URL the webhook will request",
          args: {
            name: "url",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--event",
          description: "Event type that triggers the webhook. [build]",
          args: {
            name: "event-type",
            isOptional: true,
            suggestions: [
              {
                name: "build",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--secret",
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header",
          args: {
            name: "secret",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lock.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          deprecated: true,
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/webhook-update.png",
    },
  ],
};

export default completionSpec;
