// Remotion v4.0.545 (npm @remotion/cli latest 4.0.545 and git tag v4.0.545, 2026-11-19). Source: the machine-readable help tables
// in packages/cli/src/print-help.ts (remotion), packages/lambda/src/cli/help.ts (remotion lambda) and
// packages/cloudrun/src/cli/help.ts (remotion cloudrun), plus the option definitions in packages/renderer/src/options/,
// all parsed statically from the v4.0.545 sources (the CLI binary was not run).
// Enum values (codecs, pixel formats, regions, ...) come from the same sources. Cloud Run is alpha and no longer
// actively developed upstream. The old `install` command and the removed flags --ffmpeg-executable, --ffprobe-executable,
// --enable-extensions, --quality and --architecture are gone.

const opts = {
  props: {
    name: "--props",
    description: "Input props as a JSON string or a path to a JSON file",
    args: {
      template: "filepaths",
      suggestions: [
        {
          type: "arg",
          displayName: "[json string]",
          insertValue: "'{cursor}'",
        },
      ],
    },
  },
  config: {
    name: "--config",
    description: "Location of the Remotion config file",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  envFile: {
    name: "--env-file",
    description: "Location of a dotenv file",
    args: {
      name: "file",
      template: "filepaths",
    },
  },
  log: {
    name: "--log",
    description: "Log level",
    args: {
      name: "level",
      default: "info",
      suggestions: ["trace", "verbose", "info", "warn", "error"],
    },
  },
  port: {
    name: "--port",
    description: "Port of the HTTP server for the Studio or the render process",
    args: {
      name: "port",
    },
  },
  publicDir: {
    name: "--public-dir",
    description: "Location of the public/ directory",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  binariesDirectory: {
    name: "--binaries-directory",
    description:
      "Directory with the platform-specific binaries and libraries Remotion needs",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  disableGitSource: {
    name: "--disable-git-source",
    description: "Do not connect the Git source to the Studio",
  },
  audioLatencyHint: {
    name: "--audio-latency-hint",
    description: "Latency hint for the AudioContext that plays audio",
    args: {
      name: "hint",
      suggestions: ["interactive", "balanced", "playback"],
    },
  },
  disableKeyboardShortcuts: {
    name: "--disable-keyboard-shortcuts",
    description: "Disable keyboard shortcuts in the Studio",
  },
  preservePitchOnPlayback: {
    name: "--preserve-pitch-on-playback",
    description:
      "Preserve the audio pitch when changing the Studio playback speed",
  },
  disableCanvasTabs: {
    name: "--disable-canvas-tabs",
    description: "Disable the tabs above the Studio canvas",
  },
  showDiagnostics: {
    name: "--show-diagnostics",
    description: "Show the diagnostics window in the Studio",
  },
  disableInteractivity: {
    name: "--disable-interactivity",
    description: "Disable interactive editing in the Studio",
  },
  sequenceActivityLimit: {
    name: "--sequence-activity-limit",
    description:
      "Limit of hidden scenes discovered by Sequence Activity in the Studio",
    args: {
      name: "limit",
    },
  },
  allowHtmlInCanvas: {
    name: "--allow-html-in-canvas",
    description:
      "Allow the experimental HTML-in-canvas API for client-side rendering in the Studio",
  },
  editor: {
    name: "--editor",
    description: "Default editor for opening files from the Studio",
    args: {
      name: "editor",
      suggestions: [
        "vscode",
        "cursor",
        "windsurf",
        "zed",
        "vscodium",
        "webstorm",
        "sublime-text",
      ],
    },
  },
  codingAgent: {
    name: "--coding-agent",
    description: "Default coding agent of the Studio",
    args: {
      name: "agent",
      suggestions: ["codex", "cursor", "copilot", "claude-code"],
    },
  },
  rspack: {
    name: "--rspack",
    description: "Use Rspack instead of Webpack as the bundler",
  },
  webpackPoll: {
    name: "--webpack-poll",
    description:
      "Poll for changes every given number of milliseconds instead of using file system events",
    args: {
      name: "milliseconds",
    },
  },
  noOpen: {
    name: "--no-open",
    description: "Do not open a browser window when starting the Studio",
  },
  browser: {
    name: "--browser",
    description: "Browser to open the Studio in, an absolute path or chrome",
    args: {
      name: "browser",
      template: "filepaths",
      suggestions: ["chrome"],
    },
  },
  browserArgs: {
    name: "--browser-args",
    description: "Pass command line arguments to the browser",
    args: {
      name: "arguments",
    },
  },
  browserExecutable: {
    name: "--browser-executable",
    description: "Custom path to a Chrome or Chromium executable",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  bundleCache: {
    name: "--bundle-cache",
    description:
      "Cache the Webpack bundle, enabled by default (use --bundle-cache=false to disable)",
  },
  chromeMode: {
    name: "--chrome-mode",
    description: "Which Chrome flavor to use",
    args: {
      name: "mode",
      suggestions: [
        {
          name: "headless-shell",
          description: "Chrome Headless Shell (default)",
        },
        {
          name: "chrome-for-testing",
          description: "Chrome for Testing, which can use GPU drivers on Linux",
        },
      ],
    },
  },
  concurrency: {
    name: "--concurrency",
    description:
      "Number of browser tabs that render frames in parallel, or a percentage such as 50%",
    args: {
      name: "concurrency",
    },
  },
  imageFormatBoth: {
    name: "--image-format",
    description: "Image format to render with",
    args: {
      name: "format",
      suggestions: ["png", "jpeg", "none", "pdf", "webp"],
    },
  },
  jpegQuality: {
    name: "--jpeg-quality",
    description: "Quality of the generated JPEG images, 0 to 100",
    args: {
      name: "quality",
    },
  },
  pixelFormat: {
    name: "--pixel-format",
    description: "Pixel format used by FFmpeg",
    args: {
      name: "format",
      suggestions: [
        "yuv420p",
        "yuva420p",
        "yuv422p",
        "yuv444p",
        "yuv420p10le",
        "yuv422p10le",
        "yuv444p10le",
        "yuva444p10le",
      ],
    },
  },
  scale: {
    name: "--scale",
    description: "Scale factor of the output dimensions",
    args: {
      name: "scale",
    },
  },
  crf: {
    name: "--crf",
    description:
      "Constant Rate Factor, controls the tradeoff between file size and quality",
    args: {
      name: "crf",
    },
  },
  proresProfile: {
    name: "--prores-profile",
    description: "ProRes profile, requires --codec=prores",
    args: {
      name: "profile",
      suggestions: ["4444-xq", "4444", "hq", "standard", "light", "proxy"],
    },
  },
  proresBitsPerMacroblock: {
    name: "--prores-bits-per-macroblock",
    description:
      "Bit budget per macroblock for software ProRes encoding, 128 to 8192",
    args: {
      name: "bits",
    },
  },
  x264Preset: {
    name: "--x264-preset",
    description:
      "Preset of the x264 encoder, for the h264, h264-mkv and h264-ts codecs",
    args: {
      name: "preset",
      suggestions: [
        "ultrafast",
        "superfast",
        "veryfast",
        "faster",
        "fast",
        "medium",
        "slow",
        "slower",
        "veryslow",
        "placebo",
      ],
    },
  },
  gop: {
    name: "--gop",
    description: "Maximum number of frames between two keyframes",
    args: {
      name: "frames",
    },
  },
  audioBitrate: {
    name: "--audio-bitrate",
    description: "Target bitrate of the generated audio, e.g. 512K",
    args: {
      name: "bitrate",
    },
  },
  videoBitrate: {
    name: "--video-bitrate",
    description: "Target bitrate of the generated video, e.g. 1M",
    args: {
      name: "bitrate",
    },
  },
  audioCodec: {
    name: "--audio-codec",
    description: "Audio codec to embed in the video",
    args: {
      name: "codec",
      suggestions: ["pcm-16", "aac", "mp3", "opus"],
    },
  },
  bufferSize: {
    name: "--buffer-size",
    description: "FFmpeg -bufsize value, to be used together with --max-rate",
    args: {
      name: "size",
    },
  },
  maxRate: {
    name: "--max-rate",
    description:
      "FFmpeg -maxrate value, to be used together with --buffer-size",
    args: {
      name: "rate",
    },
  },
  everyNthFrame: {
    name: "--every-nth-frame",
    description:
      "Render only every nth frame, for example to lower the frame rate of GIFs",
    args: {
      name: "n",
    },
  },
  muted: {
    name: "--muted",
    description: "Omit the audio of the video",
  },
  enforceAudioTrack: {
    name: "--enforce-audio-track",
    description: "Include a silent audio track if the render has no audio",
  },
  numberOfGifLoops: {
    name: "--number-of-gif-loops",
    description:
      "Number of times a GIF loops, 0 disables looping, omit to loop indefinitely",
    args: {
      name: "loops",
    },
  },
  colorSpace: {
    name: "--color-space",
    description: "Color space of the video",
    args: {
      name: "color-space",
      suggestions: ["default", "bt601", "bt709", "bt2020-ncl"],
    },
  },
  hardwareAcceleration: {
    name: "--hardware-acceleration",
    description: "Encode using a hardware-accelerated encoder",
    args: {
      name: "mode",
      suggestions: ["disable", "if-possible", "required"],
    },
  },
  timeout: {
    name: "--timeout",
    description:
      "Time in milliseconds that delayRender() calls may take before timing out",
    args: {
      name: "milliseconds",
    },
  },
  ignoreCertificateErrors: {
    name: "--ignore-certificate-errors",
    description: "Ignore invalid SSL certificates in Chrome",
  },
  chromiumFlags: {
    name: "--chromium-flags",
    description: "Add, replace or remove Chrome flags, as a JSON object",
    args: {
      name: "json",
    },
  },
  chromiumFeatures: {
    name: "--chromium-features",
    description:
      "Enable or disable individual Chrome features, as a JSON object",
    args: {
      name: "json",
    },
  },
  chromiumBlinkFeatures: {
    name: "--chromium-blink-features",
    description:
      "Enable or disable individual Chromium Blink features, as a JSON object",
    args: {
      name: "json",
    },
  },
  disableWebSecurity: {
    name: "--disable-web-security",
    description: "Disable CORS and other web security features of Chrome",
  },
  disableHeadless: {
    name: "--disable-headless",
    description: "Open a visible Chrome window instead of rendering headlessly",
  },
  darkMode: {
    name: "--dark-mode",
    description: "Make Chromium emulate prefers-color-scheme: dark",
  },
  gl: {
    name: "--gl",
    description: "OpenGL renderer backend of Chromium",
    args: {
      name: "renderer",
      suggestions: [
        "angle",
        "egl",
        "swiftshader",
        "swangle",
        "vulkan",
        "angle-egl",
      ],
    },
  },
  userAgent: {
    name: "--user-agent",
    description: "Custom user agent for headless Chrome",
    args: {
      name: "user-agent",
    },
  },
  mediaCacheSizeInBytes: {
    name: "--media-cache-size-in-bytes",
    description: "Memory budget in bytes for media decoded by @remotion/media",
    args: {
      name: "bytes",
    },
  },
  preferredEffectBackend: {
    name: "--preferred-effect-backend",
    description: "Preferred backend for effect implementations",
    args: {
      name: "backend",
      suggestions: ["auto", "webgpu", "webgl2", "2d"],
    },
  },
  offthreadvideoCacheSizeInBytes: {
    name: "--offthreadvideo-cache-size-in-bytes",
    description: "Size of the <OffthreadVideo> frame cache in bytes",
    args: {
      name: "bytes",
    },
  },
  offthreadvideoVideoThreads: {
    name: "--offthreadvideo-video-threads",
    description: "Number of threads <OffthreadVideo> can use to extract frames",
    args: {
      name: "threads",
    },
  },
  enableMultiprocessOnLinux: {
    name: "--enable-multiprocess-on-linux",
    description: "Do not pass --single-process to Chromium on Linux",
  },
  repro: {
    name: "--repro",
    description: "Create a ZIP to submit to Remotion as a reproduction",
  },
  sampleRate: {
    name: "--sample-rate",
    description: "Sample rate of the output audio in Hz",
    args: {
      name: "sample-rate",
    },
  },
  forSeamlessAacConcatenation: {
    name: "--for-seamless-aac-concatenation",
    description:
      "Trim the audio to the nearest AAC frame for seamless concatenation",
  },
  beepOnFinish: {
    name: "--beep-on-finish",
    description: "Beep in the Studio tab when a render has finished",
  },
  ipv4: {
    name: "--ipv4",
    description: "Bind the Studio server to an IPv4 interface",
  },
  numberOfSharedAudioTags: {
    name: "--number-of-shared-audio-tags",
    description: "Number of shared audio tags",
    args: {
      name: "count",
    },
  },
  defaultPremountInSeconds: {
    name: "--default-premount-in-seconds",
    description:
      "Default premount duration in seconds for timed components in the Studio",
    args: {
      name: "seconds",
    },
  },
  highContrast: {
    name: "--high-contrast",
    description:
      "Increase the contrast of text, focus indicators and panel dividers in the Studio",
  },
  showPremounting: {
    name: "--show-premounting",
    description: "Show premounting indicators in the Studio timeline",
  },
  showLayerFrameNumbers: {
    name: "--show-layer-frame-numbers",
    description:
      "Show frame numbers inside sequence layers in the Studio timeline",
  },
  experimentalKeepAudioContextAlive: {
    name: "--experimental-keep-audio-context-alive",
    description:
      "Keep the shared AudioContext running while the Studio is paused",
  },
  previewSampleRate: {
    name: "--preview-sample-rate",
    description: "Sample rate in Hz for audio playback in the Studio preview",
    args: {
      name: "sample-rate",
    },
  },
  crossSiteIsolation: {
    name: "--cross-site-isolation",
    description:
      "Enable cross-site isolation (COOP and COEP headers) in the Studio",
  },
  disableAskAi: {
    name: "--disable-ask-ai",
    description: "Disable the Ask AI feature of the Studio",
  },
  forceNew: {
    name: "--force-new",
    description:
      "Start a new Studio even if one is already running on the same port",
  },
  publicLicenseKey: {
    name: "--public-license-key",
    description:
      "Public license key from the Remotion Dashboard, or free-license",
    args: {
      name: "license-key",
    },
  },
  height: {
    name: "--height",
    description: "Override the height of the composition",
    args: {
      name: "height",
    },
  },
  width: {
    name: "--width",
    description: "Override the width of the composition",
    args: {
      name: "width",
    },
  },
  fps: {
    name: "--fps",
    description: "Override the frames per second of the composition",
    args: {
      name: "fps",
    },
  },
  duration: {
    name: "--duration",
    description: "Override the duration of the composition in frames",
    args: {
      name: "frames",
    },
  },
  imageFormatVideo: {
    name: "--image-format",
    description: "Image format of the rendered frames",
    args: {
      name: "format",
      suggestions: ["png", "jpeg", "none"],
    },
  },
  imageSequencePattern: {
    name: "--image-sequence-pattern",
    description:
      "Naming pattern of image sequence files, supports [frame] and [ext]",
    args: {
      name: "pattern",
    },
  },
  output: {
    name: "--output",
    description: "Set the output path instead of using a positional argument",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  overwrite: {
    name: "--overwrite",
    description:
      "Overwrite the output if it already exists (use --overwrite=false to prevent this)",
  },
  sequence: {
    name: "--sequence",
    description: "Output an image sequence instead of a video",
  },
  codec: {
    name: "--codec",
    description: "Video or audio codec",
    args: {
      name: "codec",
      suggestions: [
        "h264",
        "h265",
        "vp8",
        "vp9",
        "av1",
        "mp3",
        "aac",
        "wav",
        "prores",
        "h264-mkv",
        "h264-ts",
        "gif",
      ],
    },
  },
  frames: {
    name: "--frames",
    description:
      "Frames to render, for example 0-9, 100- or a list like 0,30-59,90-",
    args: {
      name: "frames",
    },
  },
  disallowParallelEncoding: {
    name: "--disallow-parallel-encoding",
    description: "Do not render frames and encode at the same time",
  },
  disableSharedMemoryCapture: {
    name: "--disable-shared-memory-capture",
    description:
      "Use regular JPEG or PNG screenshots instead of shared-memory capture",
  },
  publicPath: {
    name: "--public-path",
    description: "URL path where the bundle is going to be hosted",
    args: {
      name: "path",
    },
  },
  quiet: {
    name: ["--quiet", "-q"],
    description: "Reduce console output",
  },
  licenseKey: {
    name: "--license-key",
    description:
      "License key to send a usage event with, rm_sec_… for server-side or rm_pub_… for client-side rendering",
    args: {
      name: "license-key",
    },
  },
  isProduction: {
    name: "--is-production",
    description:
      "Whether this counts as a billable production render (--is-production=false for development renders)",
  },
  separateAudioTo: {
    name: "--separate-audio-to",
    description: "Render the audio as a separate file at this location",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  metadata: {
    name: "--metadata",
    description: "Metadata to embed in the video as key=value",
    args: {
      name: "key=value",
    },
    isRepeatable: true,
  },
  imageFormatStill: {
    name: "--image-format",
    description: "Image format of the still",
    args: {
      name: "format",
      suggestions: ["png", "jpeg", "pdf", "webp"],
    },
  },
  frame: {
    name: "--frame",
    description:
      "Frame to render as a still, negative values count from the end",
    args: {
      name: "frame",
    },
  },
  outDir: {
    name: "--out-dir",
    description: "Location of the resulting bundle",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  runs: {
    name: "--runs",
    description: "Number of times the video is rendered during a benchmark",
    args: {
      name: "runs",
    },
  },
  concurrencies: {
    name: "--concurrencies",
    description: "Comma-separated list of concurrency values to benchmark",
    args: {
      name: "concurrencies",
    },
  },
  packageManager: {
    name: "--package-manager",
    description:
      "Force a specific package manager instead of detecting it from the lockfile",
    args: {
      name: "package-manager",
      suggestions: ["npm", "yarn", "pnpm", "bun", "nub"],
    },
  },
  version: {
    name: "--version",
    description: "Install a specific version, also allows downgrading",
    args: {
      name: "version",
    },
  },
  skipSkills: {
    name: "--skip-skills",
    description:
      "Do not update installed Remotion Agent Skills while upgrading",
  },
  element: {
    name: "--element",
    description: "Element to install if the page contains several",
    args: {
      name: "slug",
    },
  },
  composition: {
    name: "--composition",
    description: "Composition to add the Element to",
    args: {
      name: "id",
    },
  },
  elementsUseOverwrite: {
    name: "--overwrite",
    description: "Replace an existing Element file with different contents",
  },
  yes: {
    name: ["--yes", "-y"],
    description: "Install without asking for confirmation",
  },
  dryRun: {
    name: "--dry-run",
    description: "Preview the installation without changing files",
  },
  canvasCaptureImportComposition: {
    name: "--composition",
    description: "New composition ID (default: filename without extension)",
    args: {
      name: "id",
    },
  },
  rootFile: {
    name: "--root-file",
    description: "Root file (default: detected automatically)",
    args: {
      name: "path",
      template: "filepaths",
    },
  },
  canvasCaptureImportDryRun: {
    name: "--dry-run",
    description:
      "Preview the import without installing packages or writing files",
  },
  mediaDir: {
    name: "--media-dir",
    description:
      "Directory containing the media referenced by the OpenTimelineIO file",
    args: {
      name: "directory",
      template: "folders",
    },
  },
  lambdaRegion: {
    name: "--region",
    description: "AWS region to use",
    args: {
      name: "region",
      suggestions: [
        "eu-central-1",
        "eu-central-2",
        "eu-west-1",
        "eu-west-2",
        "eu-west-3",
        "eu-south-1",
        "eu-north-1",
        "us-east-1",
        "us-east-2",
        "us-west-1",
        "us-west-2",
        "af-south-1",
        "ap-south-1",
        "ap-east-1",
        "ap-southeast-1",
        "ap-southeast-2",
        "ap-northeast-1",
        "ap-northeast-2",
        "ap-northeast-3",
        "ap-southeast-4",
        "ap-southeast-5",
        "ca-central-1",
        "cn-north-1",
        "cn-northwest-1",
        "sa-east-1",
      ],
    },
  },
  enableCancellation: {
    name: "--enable-cancellation",
    description: "Allow cancelling a Lambda render with Ctrl+C",
  },
  privacy: {
    name: "--privacy",
    description: "Set the privacy of the rendered output",
    args: {
      name: "privacy",
      suggestions: ["public", "private", "no-acl"],
    },
  },
  lambdaMaxRetries: {
    name: "--max-retries",
    description: "Set how many times a failed chunk may be retried",
    args: {
      name: "count",
    },
  },
  lambdaFramesPerLambda: {
    name: "--frames-per-lambda",
    description: "Set the number of frames rendered per Lambda invocation",
    args: {
      name: "count",
    },
  },
  chunks: {
    name: "--chunks",
    description:
      "Frame ranges that each Lambda function renders, as a JSON array or a JSON file",
    args: {
      name: "chunks",
      template: "filepaths",
      suggestions: [
        {
          type: "arg",
          displayName: "[json string]",
          insertValue: "'{cursor}'",
        },
      ],
    },
  },
  lambdaConcurrencyPerLambda: {
    name: "--concurrency-per-lambda",
    description: "Set the concurrency within each Lambda invocation",
    args: {
      name: "count",
    },
  },
  lambdaOutName: {
    name: "--out-name",
    description: "Set the S3 key of the rendered output",
    args: {
      name: "key",
    },
  },
  lambdaOutputPrefix: {
    name: "--output-prefix",
    description: "Set the storage prefix for an image sequence",
    args: {
      name: "prefix",
    },
  },
  lambdaS3OutputProviderEndpoint: {
    name: "--s3-output-provider-endpoint",
    description: "Use a custom S3-compatible endpoint for the output",
    args: {
      name: "url",
    },
  },
  lambdaS3OutputProviderRegion: {
    name: "--s3-output-provider-region",
    description: "Set the region of the custom S3 output provider",
    args: {
      name: "region",
    },
  },
  lambdaS3OutputProviderForcePathStyle: {
    name: "--s3-output-provider-force-path-style",
    description: "Use path-style URLs for the custom S3 output provider",
  },
  lambdaWebhook: {
    name: "--webhook",
    description: "Call a webhook when the render finishes",
    args: {
      name: "url",
    },
  },
  lambdaWebhookSecret: {
    name: "--webhook-secret",
    description: "Sign webhook requests with a secret",
    args: {
      name: "secret",
    },
  },
  lambdaFunctionName: {
    name: "--function-name",
    description: "Use a specific Lambda function",
    args: {
      name: "name",
    },
  },
  lambdaRendererFunctionName: {
    name: "--renderer-function-name",
    description: "Use a specific renderer Lambda function",
    args: {
      name: "name",
    },
  },
  lambdaForceBucketName: {
    name: "--force-bucket-name",
    description: "Use a specific S3 bucket",
    args: {
      name: "name",
    },
  },
  deleteAfter: {
    name: "--delete-after",
    description: "Automatically delete the Lambda render after a period",
    args: {
      name: "period",
      suggestions: ["1-day", "3-days", "7-days", "30-days"],
    },
  },
  webhookCustomData: {
    name: "--webhook-custom-data",
    description:
      "JSON object or JSON file with data to include in the webhook payload, up to 1,024 bytes",
    args: {
      name: "data",
      template: "filepaths",
    },
  },
  preferLossless: {
    name: "--prefer-lossless",
    description: "Use a lossless audio codec if one is available for the codec",
  },
  lambdaForcePathStyle: {
    name: "--force-path-style",
    description: "Use path-style S3 URLs",
  },
  lambdaStorageClass: {
    name: "--storage-class",
    description: "Set the S3 storage class of the output",
    args: {
      name: "class",
    },
  },
  lambdaMemory: {
    name: "--memory",
    description: "Set the memory size of the Lambda function",
    args: {
      name: "megabytes",
    },
  },
  lambdaDisk: {
    name: "--disk",
    description: "Set the ephemeral disk size of the Lambda function",
    args: {
      name: "megabytes",
    },
  },
  lambdaFunctionTimeout: {
    name: "--timeout",
    description: "Set the Lambda function timeout",
    args: {
      name: "seconds",
    },
  },
  lambdaDisableCloudwatch: {
    name: "--disable-cloudwatch",
    description: "Disable CloudWatch logging",
  },
  lambdaRetentionPeriod: {
    name: "--retention-period",
    description: "Set the CloudWatch log retention period",
    args: {
      name: "days",
    },
  },
  enableLambdaInsights: {
    name: "--enable-lambda-insights",
    description: "Enable Lambda Insights in AWS CloudWatch",
  },
  lambdaCustomRoleArn: {
    name: "--custom-role-arn",
    description: "Use a custom IAM role",
    args: {
      name: "arn",
    },
  },
  lambdaCustomLayerArns: {
    name: "--custom-layer-arns",
    description: "Attach custom Lambda layers",
    args: {
      name: "arns",
    },
  },
  lambdaVpcSubnetIds: {
    name: "--vpc-subnet-ids",
    description: "Attach the function to VPC subnets",
    args: {
      name: "ids",
    },
  },
  lambdaVpcSecurityGroupIds: {
    name: "--vpc-security-group-ids",
    description: "Attach VPC security groups to the function",
    args: {
      name: "ids",
    },
  },
  lambdaRuntimePreference: {
    name: "--runtime-preference",
    description: "Choose the bundled font and emoji runtime",
    args: {
      name: "runtime-preference",
      suggestions: ["default", "apple-emojis", "cjk"],
    },
  },
  lambdaCompatibleOnly: {
    name: "--compatible-only",
    description: "Only list resources compatible with this version",
  },
  lambdaYes: {
    name: ["--yes", "-y"],
    description: "Skip the confirmation prompt",
  },
  lambdaForce: {
    name: ["--force", "-f"],
    description: "Force the requested operation",
    isDangerous: true,
  },
  siteName: {
    name: "--site-name",
    description: "Set the deployed site name",
    args: {
      name: "name",
    },
  },
  lambdaSitePrivacy: {
    name: "--privacy",
    description: "Set the privacy of the deployed site",
    args: {
      name: "site-privacy",
      suggestions: ["public", "no-acl"],
    },
  },
  enableFolderExpiry: {
    name: "--enable-folder-expiry",
    description:
      "Enable or disable S3 lifecycle rules that delete renders after some time",
  },
  throwIfSiteExists: {
    name: "--throw-if-site-exists",
    description:
      "Throw an error if the site already exists, to prevent accidental updates",
  },
  lambdaDefaultOnly: {
    name: "--default-only",
    description: "Only show default AWS regions",
  },
  cloudrunRegion: {
    name: "--region",
    description: "Select the GCP region",
    args: {
      name: "region",
      suggestions: [
        "asia-east1",
        "asia-east2",
        "asia-northeast1",
        "asia-northeast2",
        "asia-northeast3",
        "asia-south1",
        "asia-south2",
        "asia-southeast1",
        "asia-southeast2",
        "australia-southeast1",
        "australia-southeast2",
        "europe-central2",
        "europe-north1",
        "europe-southwest1",
        "europe-west1",
        "europe-west2",
        "europe-west3",
        "europe-west4",
        "europe-west6",
        "europe-west8",
        "europe-west9",
        "me-west1",
        "northamerica-northeast1",
        "northamerica-northeast2",
        "southamerica-east1",
        "southamerica-west1",
        "us-central1",
        "us-east1",
        "us-east4",
        "us-east5",
        "us-south1",
        "us-west1",
        "us-west2",
        "us-west3",
        "us-west4",
      ],
    },
  },
  cloudrunForceBucketName: {
    name: "--force-bucket-name",
    description: "Store the output in a specific Cloud Storage bucket",
    args: {
      name: "bucket-name",
    },
  },
  cloudrunOutName: {
    name: "--out-name",
    description: "Set the output file name in Cloud Storage",
    args: {
      name: "file-name",
    },
  },
  cloudrunCloudRunUrl: {
    name: "--cloud-run-url",
    description: "Use a specific Cloud Run service URL",
    args: {
      name: "url",
    },
  },
  cloudrunServiceName: {
    name: "--service-name",
    description: "Use a specific deployed Cloud Run service",
    args: {
      name: "service-name",
    },
  },
  cloudrunWebhook: {
    name: "--webhook",
    description: "POST render progress to this URL",
    args: {
      name: "url",
    },
  },
  cloudrunRenderIdOverride: {
    name: "--render-id-override",
    description: "Use a specific render ID",
    args: {
      name: "id",
    },
  },
  cloudrunMemoryLimit: {
    name: "--memoryLimit",
    description: "Set the maximum memory available to each service instance",
    args: {
      name: "limit",
    },
  },
  cloudrunCpuLimit: {
    name: "--cpuLimit",
    description: "Set the maximum CPU available to each service instance",
    args: {
      name: "limit",
    },
  },
  cloudrunMinInstances: {
    name: "--minInstances",
    description: "Set the minimum number of service instances",
    args: {
      name: "count",
    },
  },
  cloudrunMaxInstances: {
    name: "--maxInstances",
    description: "Set the maximum number of service instances",
    args: {
      name: "count",
    },
  },
  cloudrunTimeoutSeconds: {
    name: "--timeoutSeconds",
    description: "Set the request timeout for the service",
    args: {
      name: "seconds",
    },
  },
  cloudrunOnlyAllocateCpuDuringRequestProcessing: {
    name: "--onlyAllocateCpuDuringRequestProcessing",
    description: "Allocate CPU only while a request is being processed",
  },
  cloudrunYes: {
    name: ["--yes", "-y"],
    description: "Skip deletion confirmation prompts",
  },
  cloudrunForce: {
    name: ["--force", "-f"],
    description: "Skip deletion confirmation prompts",
    isDangerous: true,
  },
  cloudrunAllRegions: {
    name: "--all-regions",
    description: "Include sites from every region",
  },
} satisfies Record<string, Fig.Option>;

const completionSpec: Fig.Spec = {
  name: "remotion",
  description: "Create videos programmatically in React",
  subcommands: [
    {
      name: ["studio", "preview"],
      description: "Start the Remotion Studio",
      args: {
        name: "entry-point",
        description: "Entry point of the Remotion project",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        opts.props,
        opts.config,
        opts.envFile,
        opts.log,
        opts.port,
        opts.publicDir,
        opts.binariesDirectory,
        opts.disableGitSource,
        opts.audioLatencyHint,
        opts.disableKeyboardShortcuts,
        opts.preservePitchOnPlayback,
        opts.disableCanvasTabs,
        opts.showDiagnostics,
        opts.disableInteractivity,
        opts.sequenceActivityLimit,
        opts.allowHtmlInCanvas,
        opts.editor,
        opts.codingAgent,
        opts.rspack,
        opts.webpackPoll,
        opts.noOpen,
        opts.browser,
        opts.browserArgs,
        opts.browserExecutable,
        opts.bundleCache,
        opts.chromeMode,
        opts.concurrency,
        opts.imageFormatBoth,
        opts.jpegQuality,
        opts.pixelFormat,
        opts.scale,
        opts.crf,
        opts.proresProfile,
        opts.proresBitsPerMacroblock,
        opts.x264Preset,
        opts.gop,
        opts.audioBitrate,
        opts.videoBitrate,
        opts.audioCodec,
        opts.bufferSize,
        opts.maxRate,
        opts.everyNthFrame,
        opts.muted,
        opts.enforceAudioTrack,
        opts.numberOfGifLoops,
        opts.colorSpace,
        opts.hardwareAcceleration,
        opts.timeout,
        opts.ignoreCertificateErrors,
        opts.chromiumFlags,
        opts.chromiumFeatures,
        opts.chromiumBlinkFeatures,
        opts.disableWebSecurity,
        opts.disableHeadless,
        opts.darkMode,
        opts.gl,
        opts.userAgent,
        opts.mediaCacheSizeInBytes,
        opts.preferredEffectBackend,
        opts.offthreadvideoCacheSizeInBytes,
        opts.offthreadvideoVideoThreads,
        opts.enableMultiprocessOnLinux,
        opts.repro,
        opts.sampleRate,
        opts.forSeamlessAacConcatenation,
        opts.beepOnFinish,
        opts.ipv4,
        opts.numberOfSharedAudioTags,
        opts.defaultPremountInSeconds,
        opts.highContrast,
        opts.showPremounting,
        opts.showLayerFrameNumbers,
        opts.experimentalKeepAudioContextAlive,
        opts.previewSampleRate,
        opts.crossSiteIsolation,
        opts.disableAskAi,
        opts.forceNew,
        opts.publicLicenseKey,
      ],
    },
    {
      name: "render",
      description: "Render video, audio or an image sequence",
      args: [
        {
          name: "entry-point",
          description: "Entry point of the Remotion project, or a serve URL",
          isOptional: true,
          template: "filepaths",
        },
        {
          name: "composition-id",
          description: "ID of the composition to render",
          isOptional: true,
        },
        {
          name: "output-location",
          description: "Where to write the output",
          isOptional: true,
          template: "filepaths",
        },
      ],
      options: [
        opts.props,
        opts.height,
        opts.width,
        opts.fps,
        opts.duration,
        opts.concurrency,
        opts.pixelFormat,
        opts.imageFormatVideo,
        opts.imageSequencePattern,
        opts.config,
        opts.envFile,
        opts.jpegQuality,
        opts.output,
        opts.overwrite,
        opts.sequence,
        opts.codec,
        opts.audioCodec,
        opts.audioBitrate,
        opts.videoBitrate,
        opts.bufferSize,
        opts.maxRate,
        opts.proresProfile,
        opts.proresBitsPerMacroblock,
        opts.x264Preset,
        opts.gop,
        opts.crf,
        opts.browserExecutable,
        opts.chromeMode,
        opts.scale,
        opts.frames,
        opts.everyNthFrame,
        opts.muted,
        opts.enforceAudioTrack,
        opts.disallowParallelEncoding,
        opts.disableSharedMemoryCapture,
        opts.numberOfGifLoops,
        opts.colorSpace,
        opts.hardwareAcceleration,
        opts.bundleCache,
        opts.log,
        opts.port,
        opts.publicDir,
        opts.publicPath,
        opts.audioLatencyHint,
        opts.timeout,
        opts.ignoreCertificateErrors,
        opts.chromiumFlags,
        opts.chromiumFeatures,
        opts.chromiumBlinkFeatures,
        opts.disableWebSecurity,
        opts.disableHeadless,
        opts.darkMode,
        opts.gl,
        opts.userAgent,
        opts.mediaCacheSizeInBytes,
        opts.preferredEffectBackend,
        opts.offthreadvideoCacheSizeInBytes,
        opts.offthreadvideoVideoThreads,
        opts.enableMultiprocessOnLinux,
        opts.repro,
        opts.binariesDirectory,
        opts.rspack,
        opts.disableAskAi,
        opts.disableKeyboardShortcuts,
        opts.quiet,
        opts.licenseKey,
        opts.isProduction,
        opts.sampleRate,
        opts.forSeamlessAacConcatenation,
        opts.separateAudioTo,
        opts.metadata,
      ],
    },
    {
      name: "still",
      description: "Render a still frame and save it as an image",
      args: [
        {
          name: "entry-point",
          description: "Entry point of the Remotion project, or a serve URL",
          isOptional: true,
          template: "filepaths",
        },
        {
          name: "composition-id",
          description: "ID of the composition to render",
          isOptional: true,
        },
        {
          name: "output-location",
          description: "Where to write the image",
          isOptional: true,
          template: "filepaths",
        },
      ],
      options: [
        opts.props,
        opts.height,
        opts.width,
        opts.fps,
        opts.duration,
        opts.imageFormatStill,
        opts.config,
        opts.envFile,
        opts.jpegQuality,
        opts.output,
        opts.overwrite,
        opts.browserExecutable,
        opts.scale,
        opts.frame,
        opts.bundleCache,
        opts.log,
        opts.port,
        opts.publicDir,
        opts.publicPath,
        opts.audioLatencyHint,
        opts.timeout,
        opts.ignoreCertificateErrors,
        opts.chromiumFlags,
        opts.chromiumFeatures,
        opts.chromiumBlinkFeatures,
        opts.disableWebSecurity,
        opts.disableHeadless,
        opts.darkMode,
        opts.chromeMode,
        opts.gl,
        opts.userAgent,
        opts.mediaCacheSizeInBytes,
        opts.preferredEffectBackend,
        opts.offthreadvideoCacheSizeInBytes,
        opts.offthreadvideoVideoThreads,
        opts.enableMultiprocessOnLinux,
        opts.binariesDirectory,
        opts.rspack,
        opts.disableAskAi,
        opts.disableKeyboardShortcuts,
        opts.quiet,
        opts.licenseKey,
        opts.isProduction,
      ],
    },
    {
      name: "compositions",
      description: "Print the available compositions",
      args: {
        name: "entry-point",
        description: "Entry point of the Remotion project, or a serve URL",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        opts.props,
        opts.browserExecutable,
        opts.config,
        opts.envFile,
        opts.bundleCache,
        opts.log,
        opts.port,
        opts.publicDir,
        opts.publicPath,
        opts.audioLatencyHint,
        opts.timeout,
        opts.ignoreCertificateErrors,
        opts.chromiumFlags,
        opts.chromiumFeatures,
        opts.chromiumBlinkFeatures,
        opts.disableWebSecurity,
        opts.disableHeadless,
        opts.darkMode,
        opts.gl,
        opts.enableMultiprocessOnLinux,
        opts.userAgent,
        opts.mediaCacheSizeInBytes,
        opts.preferredEffectBackend,
        opts.offthreadvideoCacheSizeInBytes,
        opts.offthreadvideoVideoThreads,
        opts.binariesDirectory,
        opts.chromeMode,
        opts.quiet,
        opts.rspack,
        opts.disableAskAi,
        opts.disableKeyboardShortcuts,
      ],
    },
    {
      name: "lambda",
      description: "Control Remotion Lambda",
      subcommands: [
        {
          name: "render",
          description: "Render a video in the cloud",
          args: [
            {
              name: "serve-url",
              description: "URL of a deployed site",
            },
            {
              name: "composition-id",
              description: "ID of the composition to render",
              isOptional: true,
            },
            {
              name: "output-location",
              description: "Where to download the output",
              isOptional: true,
              template: "filepaths",
            },
          ],
          options: [
            opts.lambdaRegion,
            opts.enableCancellation,
            opts.props,
            opts.config,
            {
              ...opts.port,
              description:
                "Set a custom port when selecting a composition interactively",
            },
            opts.log,
            opts.privacy,
            opts.lambdaMaxRetries,
            opts.lambdaFramesPerLambda,
            opts.concurrency,
            opts.chunks,
            opts.lambdaConcurrencyPerLambda,
            opts.jpegQuality,
            opts.muted,
            opts.codec,
            opts.audioCodec,
            opts.audioBitrate,
            opts.videoBitrate,
            opts.bufferSize,
            opts.maxRate,
            opts.proresProfile,
            opts.proresBitsPerMacroblock,
            opts.x264Preset,
            opts.gop,
            opts.disableSharedMemoryCapture,
            opts.crf,
            opts.pixelFormat,
            opts.imageFormatVideo,
            opts.scale,
            opts.envFile,
            opts.frames,
            opts.everyNthFrame,
            opts.numberOfGifLoops,
            opts.timeout,
            opts.lambdaOutName,
            {
              ...opts.separateAudioTo,
              description:
                "Save the mixed audio as a separate file in the render bucket and omit audio from the video",
            },
            opts.lambdaOutputPrefix,
            opts.sequence,
            opts.imageSequencePattern,
            opts.lambdaS3OutputProviderEndpoint,
            opts.lambdaS3OutputProviderRegion,
            opts.lambdaS3OutputProviderForcePathStyle,
            opts.overwrite,
            opts.lambdaWebhook,
            opts.lambdaWebhookSecret,
            opts.height,
            opts.width,
            opts.fps,
            opts.duration,
            opts.lambdaFunctionName,
            opts.lambdaRendererFunctionName,
            opts.lambdaForceBucketName,
            opts.browserExecutable,
            opts.ignoreCertificateErrors,
            opts.chromiumFlags,
            opts.chromiumFeatures,
            opts.chromiumBlinkFeatures,
            opts.disableWebSecurity,
            opts.disableHeadless,
            opts.darkMode,
            opts.gl,
            opts.enableMultiprocessOnLinux,
            opts.userAgent,
            opts.mediaCacheSizeInBytes,
            opts.preferredEffectBackend,
            opts.offthreadvideoCacheSizeInBytes,
            opts.offthreadvideoVideoThreads,
            opts.deleteAfter,
            opts.webhookCustomData,
            opts.colorSpace,
            opts.preferLossless,
            opts.metadata,
            opts.sampleRate,
            opts.lambdaForcePathStyle,
            opts.lambdaStorageClass,
            opts.licenseKey,
            opts.isProduction,
            opts.binariesDirectory,
            opts.quiet,
          ],
        },
        {
          name: "still",
          description: "Render a still image in the cloud",
          args: [
            {
              name: "serve-url",
              description: "URL of a deployed site",
            },
            {
              name: "composition-id",
              description: "ID of the composition to render",
              isOptional: true,
            },
            {
              name: "output-location",
              description: "Where to download the image",
              isOptional: true,
              template: "filepaths",
            },
          ],
          options: [
            opts.frame,
            opts.lambdaRegion,
            opts.props,
            opts.config,
            {
              ...opts.port,
              description:
                "Set a custom port when selecting a composition interactively",
            },
            opts.envFile,
            opts.scale,
            opts.log,
            opts.privacy,
            opts.lambdaMaxRetries,
            opts.lambdaOutName,
            opts.lambdaS3OutputProviderEndpoint,
            opts.lambdaS3OutputProviderRegion,
            opts.lambdaS3OutputProviderForcePathStyle,
            opts.imageFormatStill,
            opts.jpegQuality,
            opts.timeout,
            opts.height,
            opts.width,
            opts.fps,
            opts.duration,
            opts.lambdaFunctionName,
            opts.lambdaForceBucketName,
            opts.browserExecutable,
            opts.ignoreCertificateErrors,
            opts.chromiumFlags,
            opts.chromiumFeatures,
            opts.chromiumBlinkFeatures,
            opts.disableWebSecurity,
            opts.disableHeadless,
            opts.darkMode,
            opts.gl,
            opts.enableMultiprocessOnLinux,
            opts.userAgent,
            opts.mediaCacheSizeInBytes,
            opts.preferredEffectBackend,
            opts.offthreadvideoCacheSizeInBytes,
            opts.offthreadvideoVideoThreads,
            opts.deleteAfter,
            opts.lambdaForcePathStyle,
            opts.lambdaStorageClass,
            opts.licenseKey,
            opts.isProduction,
            opts.binariesDirectory,
            opts.quiet,
          ],
        },
        {
          name: "compositions",
          description: "Print composition IDs from a serve URL",
          args: {
            name: "serve-url",
            description: "URL of a deployed site",
          },
          options: [
            opts.preferredEffectBackend,
            opts.lambdaRegion,
            opts.lambdaFunctionName,
            opts.props,
            opts.config,
            opts.envFile,
            opts.log,
            opts.timeout,
            opts.ignoreCertificateErrors,
            opts.chromiumFlags,
            opts.chromiumFeatures,
            opts.chromiumBlinkFeatures,
            opts.disableWebSecurity,
            opts.darkMode,
            opts.disableHeadless,
            opts.gl,
            opts.enableMultiprocessOnLinux,
            opts.quiet,
            opts.lambdaForceBucketName,
            opts.userAgent,
          ],
        },
        {
          name: "functions",
          description: "Deploy and manage AWS Lambda functions",
          subcommands: [
            {
              name: "deploy",
              description: "Deploy a Lambda function",
              options: [
                opts.lambdaRegion,
                opts.lambdaFunctionName,
                opts.lambdaMemory,
                opts.lambdaDisk,
                opts.lambdaFunctionTimeout,
                opts.lambdaDisableCloudwatch,
                opts.lambdaRetentionPeriod,
                opts.enableLambdaInsights,
                opts.lambdaCustomRoleArn,
                opts.lambdaCustomLayerArns,
                opts.quiet,
                opts.lambdaVpcSubnetIds,
                opts.lambdaVpcSecurityGroupIds,
                opts.lambdaRuntimePreference,
              ],
            },
            {
              name: "ls",
              description: "List deployed Lambda functions",
              options: [
                opts.lambdaCompatibleOnly,
                opts.lambdaRegion,
                opts.quiet,
              ],
            },
            {
              name: "rm",
              description: "Delete one or more Lambda functions",
              args: {
                name: "function-name",
                description: "Functions to delete",
                isVariadic: true,
              },
              options: [
                opts.lambdaRegion,
                opts.lambdaYes,
                opts.lambdaForce,
                opts.quiet,
              ],
            },
            {
              name: "rmall",
              description: "Delete all Lambda functions",
              options: [
                opts.lambdaRegion,
                opts.lambdaYes,
                opts.lambdaForce,
                opts.quiet,
              ],
            },
          ],
        },
        {
          name: "sites",
          description: "Deploy and manage Remotion projects",
          subcommands: [
            {
              name: "create",
              description: "Deploy a Remotion project",
              args: {
                name: "entry-point",
                description: "Entry point of the Remotion project",
                isOptional: true,
                template: "filepaths",
              },
              options: [
                opts.lambdaRegion,
                opts.siteName,
                opts.lambdaForceBucketName,
                opts.lambdaSitePrivacy,
                opts.config,
                opts.publicDir,
                opts.enableFolderExpiry,
                opts.throwIfSiteExists,
                opts.disableGitSource,
                opts.lambdaForcePathStyle,
                opts.bundleCache,
                opts.rspack,
                opts.disableAskAi,
                opts.disableKeyboardShortcuts,
                opts.quiet,
              ],
            },
            {
              name: "ls",
              description: "List deployed Remotion projects",
              options: [
                opts.lambdaRegion,
                opts.quiet,
                opts.lambdaCompatibleOnly,
              ],
            },
            {
              name: "rm",
              description: "Delete one or more Remotion projects",
              args: {
                name: "site-id",
                description: "Sites to delete",
                isVariadic: true,
              },
              options: [
                opts.lambdaRegion,
                opts.lambdaYes,
                opts.lambdaForce,
                opts.lambdaForceBucketName,
              ],
            },
            {
              name: "rmall",
              description: "Delete all Remotion projects",
              options: [
                opts.lambdaRegion,
                opts.lambdaYes,
                opts.lambdaForce,
                opts.lambdaForceBucketName,
              ],
            },
          ],
        },
        {
          name: "policies",
          description: "View and validate AWS policy files",
          subcommands: [
            {
              name: "role",
              description: "Print the required AWS role policy",
              options: [opts.lambdaRegion],
            },
            {
              name: "user",
              description: "Print the required AWS user policy",
              options: [opts.lambdaRegion],
            },
            {
              name: "validate",
              description: "Validate the current AWS policies",
              options: [opts.lambdaRegion],
            },
          ],
        },
        {
          name: "regions",
          description: "Show the supported AWS regions",
          options: [opts.lambdaDefaultOnly],
        },
        {
          name: "quotas",
          description: "Show the AWS service quotas",
          options: [opts.lambdaRegion],
          subcommands: [
            {
              name: "increase",
              description: "Request an increase to the AWS service quotas",
              options: [opts.lambdaRegion, opts.lambdaYes, opts.lambdaForce],
            },
          ],
        },
      ],
    },
    {
      name: "bundle",
      description: "Create a Remotion bundle to be deployed to the web",
      args: {
        name: "entry-point",
        description: "Entry point of the Remotion project, or a serve URL",
        isOptional: true,
        template: "filepaths",
      },
      options: [
        opts.config,
        opts.log,
        opts.publicDir,
        opts.outDir,
        opts.publicPath,
        opts.disableGitSource,
        opts.bundleCache,
        opts.audioLatencyHint,
        opts.rspack,
        opts.disableAskAi,
        opts.disableKeyboardShortcuts,
        opts.quiet,
      ],
    },
    {
      name: "browser",
      description: "Ensure Remotion has a browser it can use for rendering",
      subcommands: [
        {
          name: "ensure",
          description: "Ensure Remotion has a browser it can use for rendering",
          options: [opts.browserExecutable, opts.log, opts.quiet],
        },
      ],
    },
    {
      name: "cloudrun",
      description: "Control Remotion Cloud Run",
      subcommands: [
        {
          name: "render",
          description: "Render Remotion media on GCP Cloud Run",
          args: [
            {
              name: "serve-url",
              description: "URL or name of a deployed site",
            },
            {
              name: "composition-id",
              description: "ID of the composition to render",
              isOptional: true,
            },
            {
              name: "output-location",
              description: "Where to download the output",
              isOptional: true,
              template: "filepaths",
            },
          ],
          options: [
            opts.cloudrunRegion,
            opts.props,
            opts.privacy,
            opts.cloudrunForceBucketName,
            opts.concurrency,
            opts.height,
            opts.width,
            opts.fps,
            opts.duration,
            opts.jpegQuality,
            opts.imageFormatVideo,
            opts.scale,
            opts.envFile,
            opts.cloudrunOutName,
            opts.cloudrunCloudRunUrl,
            opts.cloudrunServiceName,
            opts.codec,
            opts.audioCodec,
            opts.audioBitrate,
            opts.videoBitrate,
            opts.bufferSize,
            opts.maxRate,
            opts.cloudrunWebhook,
            opts.cloudrunRenderIdOverride,
            opts.proresProfile,
            opts.proresBitsPerMacroblock,
            opts.x264Preset,
            opts.gop,
            opts.disableSharedMemoryCapture,
            opts.crf,
            opts.pixelFormat,
            opts.everyNthFrame,
            opts.numberOfGifLoops,
            opts.frames,
            opts.browserExecutable,
            opts.userAgent,
            opts.disableWebSecurity,
            opts.ignoreCertificateErrors,
            opts.chromiumFlags,
            opts.chromiumFeatures,
            opts.chromiumBlinkFeatures,
            opts.enableMultiprocessOnLinux,
            opts.gl,
            opts.disableHeadless,
            opts.darkMode,
            opts.config,
            {
              ...opts.port,
              description:
                "Set the local server port when no composition ID is passed",
            },
            opts.timeout,
            opts.binariesDirectory,
            opts.muted,
            opts.enforceAudioTrack,
            opts.quiet,
            opts.mediaCacheSizeInBytes,
            opts.preferredEffectBackend,
            opts.offthreadvideoCacheSizeInBytes,
            opts.offthreadvideoVideoThreads,
            opts.colorSpace,
            opts.metadata,
            opts.sampleRate,
            opts.licenseKey,
            opts.isProduction,
          ],
        },
        {
          name: "still",
          description: "Render a Remotion still on GCP Cloud Run",
          args: [
            {
              name: "serve-url",
              description: "URL or name of a deployed site",
            },
            {
              name: "still-id",
              description: "ID of the still composition to render",
              isOptional: true,
            },
            {
              name: "output-location",
              description: "Where to download the image",
              isOptional: true,
              template: "filepaths",
            },
          ],
          options: [
            opts.cloudrunRegion,
            opts.props,
            opts.frame,
            opts.privacy,
            opts.cloudrunForceBucketName,
            opts.height,
            opts.width,
            opts.fps,
            opts.duration,
            opts.jpegQuality,
            opts.imageFormatStill,
            opts.scale,
            opts.envFile,
            opts.cloudrunOutName,
            opts.cloudrunCloudRunUrl,
            opts.cloudrunServiceName,
            opts.browserExecutable,
            opts.userAgent,
            opts.disableWebSecurity,
            opts.ignoreCertificateErrors,
            opts.chromiumFlags,
            opts.chromiumFeatures,
            opts.chromiumBlinkFeatures,
            opts.enableMultiprocessOnLinux,
            opts.gl,
            opts.disableHeadless,
            opts.darkMode,
            opts.config,
            {
              ...opts.port,
              description:
                "Set the local server port when no composition ID is passed",
            },
            opts.timeout,
            opts.binariesDirectory,
            opts.quiet,
            opts.mediaCacheSizeInBytes,
            opts.preferredEffectBackend,
            opts.offthreadvideoCacheSizeInBytes,
            opts.licenseKey,
            opts.isProduction,
          ],
        },
        {
          name: "services",
          description: "Deploy and manage Cloud Run services on GCP",
          subcommands: [
            {
              name: "deploy",
              description: "Deploy a new Cloud Run service",
              options: [
                opts.cloudrunRegion,
                opts.cloudrunMemoryLimit,
                opts.cloudrunCpuLimit,
                opts.cloudrunMinInstances,
                opts.cloudrunMaxInstances,
                opts.cloudrunTimeoutSeconds,
                opts.cloudrunOnlyAllocateCpuDuringRequestProcessing,
                opts.quiet,
              ],
            },
            {
              name: "ls",
              description: "List deployed Cloud Run services",
              options: [opts.cloudrunRegion, opts.quiet],
            },
            {
              name: "rm",
              description: "Delete one or more Cloud Run services",
              args: {
                name: "service-name",
                description: "Services to delete",
                isVariadic: true,
              },
              options: [
                opts.cloudrunRegion,
                opts.cloudrunYes,
                opts.cloudrunForce,
                opts.quiet,
              ],
            },
            {
              name: "rmall",
              description:
                "Delete all Cloud Run services in the selected region",
              options: [
                opts.cloudrunRegion,
                opts.cloudrunYes,
                opts.cloudrunForce,
                opts.quiet,
              ],
            },
          ],
        },
        {
          name: "sites",
          description: "Deploy and manage Remotion projects",
          subcommands: [
            {
              name: "create",
              description: "Bundle and upload a Remotion project",
              args: {
                name: "entry-point",
                description: "Entry point of the Remotion project",
                isOptional: true,
                template: "filepaths",
              },
              options: [
                opts.cloudrunRegion,
                opts.siteName,
                {
                  ...opts.privacy,
                  description: "Set the privacy of the deployed site",
                },
                opts.config,
                opts.disableGitSource,
                opts.bundleCache,
                opts.rspack,
                opts.disableAskAi,
                opts.disableKeyboardShortcuts,
                opts.quiet,
              ],
            },
            {
              name: "ls",
              description: "List deployed Remotion projects",
              options: [
                opts.cloudrunRegion,
                opts.cloudrunAllRegions,
                opts.quiet,
              ],
            },
            {
              name: "rm",
              description: "Delete one or more deployed Remotion projects",
              args: {
                name: "site-name",
                description: "Sites to delete",
                isVariadic: true,
              },
              options: [
                opts.cloudrunRegion,
                opts.cloudrunYes,
                opts.cloudrunForce,
                opts.quiet,
              ],
            },
            {
              name: "rmall",
              description: "Delete all deployed Remotion projects",
              options: [
                opts.cloudrunRegion,
                opts.cloudrunAllRegions,
                opts.cloudrunYes,
                opts.cloudrunForce,
              ],
            },
          ],
        },
        {
          name: "permissions",
          description: "View and validate required GCP permissions",
        },
        {
          name: "regions",
          description: "Show the supported GCP regions",
        },
      ],
    },
    {
      name: "benchmark",
      description: "Benchmark rendering one or more compositions",
      args: [
        {
          name: "entry-point",
          description: "Entry point of the Remotion project",
          template: "filepaths",
        },
        {
          name: "composition-ids",
          description: "Comma-separated IDs of the compositions to benchmark",
          isOptional: true,
        },
      ],
      options: [
        opts.runs,
        opts.concurrencies,
        opts.concurrency,
        opts.codec,
        opts.crf,
        opts.frames,
        opts.height,
        opts.width,
        opts.fps,
        opts.duration,
        opts.imageFormatVideo,
        opts.pixelFormat,
        opts.props,
        opts.proresProfile,
        opts.proresBitsPerMacroblock,
        opts.x264Preset,
        opts.gop,
        opts.jpegQuality,
        opts.log,
        opts.ignoreCertificateErrors,
        opts.chromiumFlags,
        opts.chromiumFeatures,
        opts.chromiumBlinkFeatures,
        opts.disableWebSecurity,
        opts.darkMode,
        opts.disableHeadless,
        opts.enableMultiprocessOnLinux,
        opts.gl,
        opts.chromeMode,
        opts.timeout,
        opts.scale,
        opts.port,
        opts.numberOfGifLoops,
        opts.everyNthFrame,
        opts.muted,
        opts.enforceAudioTrack,
        opts.disallowParallelEncoding,
        opts.disableSharedMemoryCapture,
        opts.browserExecutable,
        opts.userAgent,
        opts.publicDir,
        opts.publicPath,
        opts.config,
        opts.envFile,
        opts.bundleCache,
        opts.videoBitrate,
        opts.audioBitrate,
        opts.bufferSize,
        opts.maxRate,
        opts.colorSpace,
        opts.hardwareAcceleration,
        opts.offthreadvideoCacheSizeInBytes,
        opts.offthreadvideoVideoThreads,
        opts.mediaCacheSizeInBytes,
        opts.preferredEffectBackend,
        opts.binariesDirectory,
        opts.rspack,
        opts.overwrite,
        opts.metadata,
        opts.sampleRate,
        opts.forSeamlessAacConcatenation,
        opts.disableAskAi,
        opts.disableKeyboardShortcuts,
        opts.quiet,
      ],
    },
    {
      name: "skills",
      description: "Install or update skills from remotion-dev/skills",
      subcommands: [
        {
          name: "add",
          description: "Install skills from remotion-dev/skills",
        },
        {
          name: "update",
          description: "Update skills from remotion-dev/skills",
        },
      ],
    },
    {
      name: "versions",
      description: "Print and validate versions of all Remotion packages",
      options: [opts.log],
    },
    {
      name: "upgrade",
      description: "Ensure Remotion is on the newest version",
      options: [opts.packageManager, opts.version, opts.skipSkills, opts.log],
    },
    {
      name: "add",
      description: "Add Remotion packages with the correct version",
      args: {
        name: "package-name",
        description: "Remotion packages to add",
        isVariadic: true,
      },
      options: [opts.packageManager, opts.log],
    },
    {
      name: "elements",
      description: "Install Elements from Element Libraries",
      subcommands: [
        {
          name: "use",
          description: "Install an Element from an Element Library page",
          args: {
            name: "url",
            description: "URL of an Element Library page",
          },
          options: [
            opts.element,
            opts.composition,
            opts.elementsUseOverwrite,
            opts.yes,
            opts.dryRun,
            opts.publicDir,
            opts.packageManager,
            opts.log,
          ],
        },
      ],
    },
    {
      name: "canvas-capture",
      description: "Import Canvas Capture recordings",
      subcommands: [
        {
          name: "import",
          description:
            "Import a Canvas Capture recording as an editable composition",
          args: {
            name: "file",
            description: "Canvas Capture recording",
            template: "filepaths",
          },
          options: [
            opts.canvasCaptureImportComposition,
            opts.rootFile,
            opts.canvasCaptureImportDryRun,
            { ...opts.width, description: "Composition width (default: 1920)" },
            {
              ...opts.height,
              description: "Composition height (default: 1080)",
            },
            {
              ...opts.fps,
              description:
                "Composition FPS (default: 60 for Canvas Capture, 30 for OpenTimeline)",
            },
            opts.publicDir,
            opts.packageManager,
            opts.log,
          ],
        },
      ],
    },
    {
      name: "open-timeline",
      description: "Import OpenTimelineIO timelines",
      subcommands: [
        {
          name: "import",
          description:
            "Import an OpenTimelineIO file as an editable composition",
          args: {
            name: "file",
            description: "OpenTimelineIO file",
            template: "filepaths",
          },
          options: [
            opts.canvasCaptureImportComposition,
            opts.rootFile,
            opts.canvasCaptureImportDryRun,
            { ...opts.width, description: "Composition width (default: 1920)" },
            {
              ...opts.height,
              description: "Composition height (default: 1080)",
            },
            {
              ...opts.fps,
              description:
                "Composition FPS (default: 60 for Canvas Capture, 30 for OpenTimeline)",
            },
            opts.publicDir,
            opts.packageManager,
            opts.log,
            opts.mediaDir,
            opts.binariesDirectory,
          ],
        },
      ],
    },
    {
      name: "gpu",
      description: "Print information about how Chrome uses the GPU",
      options: [
        opts.log,
        opts.gl,
        opts.chromeMode,
        opts.browserExecutable,
        opts.userAgent,
        opts.disableWebSecurity,
        opts.ignoreCertificateErrors,
        opts.chromiumFlags,
        opts.chromiumFeatures,
        opts.chromiumBlinkFeatures,
        opts.enableMultiprocessOnLinux,
        opts.timeout,
        opts.disableHeadless,
        opts.darkMode,
        opts.quiet,
      ],
    },
    {
      name: "ffmpeg",
      description: "Execute FFmpeg with all arguments forwarded",
      args: {
        name: "arguments",
        description: "Arguments forwarded to FFmpeg",
        isVariadic: true,
      },
    },
    {
      name: "ffprobe",
      description: "Execute FFprobe with all arguments forwarded",
      args: {
        name: "arguments",
        description: "Arguments forwarded to FFprobe",
        isVariadic: true,
      },
    },
    {
      name: "help",
      description: "Print available commands and flags for the Remotion CLI",
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
        isVariadic: true,
      },
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show this help",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
