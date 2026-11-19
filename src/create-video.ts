// create-video v4.0.545 (npm latest, 2026-11-19). Source: npm tarball dist/help.js, select-template.js, templates.js and
// init.js (built-in help text, minimist flag config, template catalog), read statically (package not executed).
// Notes: template flags are generated from the template catalog; --editor-starter is accepted by the CLI but not
// listed in its help (it is a paid template and only prints the purchase link).
const TEMPLATES: { id: string; name: string; description: string }[] = [
  {
    id: "blank",
    name: "Blank",
    description: "Nothing except an empty canvas",
  },
  {
    id: "hello-world",
    name: "Hello World",
    description: "A playground with a simple animation",
  },
  {
    id: "next",
    name: "Next.js",
    description: "SaaS template for video generation apps",
  },
  {
    id: "vercel",
    name: "Next.js (Vercel Sandbox)",
    description: "Render videos on-demand using Vercel Sandbox",
  },
  {
    id: "recorder",
    name: "Recorder",
    description: "A video production tool built entirely in JavaScript",
  },
  {
    id: "prompt-to-motion-graphics",
    name: "Prompt to Motion Graphics SaaS Starter Kit",
    description: "SaaS template for AI-powered animation generation",
  },
  {
    id: "render-server",
    name: "Render Server",
    description: "An Express.js server for rendering videos with Remotion",
  },
  {
    id: "electron",
    name: "Electron",
    description: "Render Remotion videos from a desktop app",
  },
  {
    id: "react-router",
    name: "React Router",
    description: "SaaS template for video generation apps",
  },
  {
    id: "element-library",
    name: "Element Library",
    description: "Build and publish your own Remotion Element library",
  },
  {
    id: "three",
    name: "React Three Fiber",
    description: "Remotion + React Three Fiber Starter Template",
  },
  {
    id: "still",
    name: "Still images",
    description: "Dynamic PNG/JPEG template with built-in server",
  },
  {
    id: "audiogram",
    name: "Audiogram",
    description: "Text and waveform visualization for podcasts",
  },
  {
    id: "music-visualization",
    name: "Music Visualization",
    description: "Text and waveform visualization for podcasts",
  },
  {
    id: "prompt-to-video",
    name: "Prompt to Video",
    description: "Create a story with images and voiceover from a prompt",
  },
  {
    id: "skia",
    name: "Skia",
    description: "React Native Skia starter",
  },
  {
    id: "overlay",
    name: "Overlay",
    description: "Overlays for video editing software",
  },
  {
    id: "code-hike",
    name: "Code Hike",
    description: "Beautiful code animations",
  },
  {
    id: "stargazer",
    name: "Stargazer",
    description: "Celebrate your repo stars with a video",
  },
  {
    id: "tiktok",
    name: "TikTok",
    description: "Generate animated word-by-word captions",
  },
];

const templateOption = ({
  id,
  name,
  description,
}: (typeof TEMPLATES)[number]): Fig.Option => ({
  name: `--${id}`,
  description: `${description} (${name} template)`,
});

const completionSpec: Fig.Spec = {
  name: "create-video",
  description: "CLI used to create remotion video project",
  icon: "https://raw.githubusercontent.com/remotion-dev/remotion/main/packages/docs/static/img/logo-small.png",
  args: {
    name: "directory",
    description: "Directory in which the project should be created",
    template: "folders",
    isOptional: true,
  },
  options: [
    {
      name: ["-y", "--yes"],
      description:
        "Enable non-interactive mode. Requires a template flag and a directory, unless --tmp is used",
    },
    {
      name: "--tailwind",
      description: "Install TailwindCSS for supported templates",
      exclusiveOn: ["--no-tailwind"],
    },
    {
      name: "--no-tailwind",
      description: "Skip TailwindCSS installation (the default)",
      exclusiveOn: ["--tailwind"],
    },
    {
      name: "--tmp",
      description: "Create the project in a temporary directory",
    },
    {
      name: "--skills",
      description: "Install all Remotion agent skills without prompting",
    },
    {
      name: ["-h", "--help"],
      description: "Show this help",
    },
    ...TEMPLATES.map(templateOption),
    {
      name: "--editor-starter",
      description:
        "Show purchase info for the paid Editor Starter template (a boilerplate for starting a video editor)",
    },
  ],
};

export default completionSpec;
