// WebStorm v2026.3 (Homebrew cask webstorm, build 263.7307.202, 2026-11-19). Source: shared IntelliJ-platform launcher CLI in src/idea.ts, verified against JetBrains/intellij-community
// tag idea/263.7307.200 (platform build 263.7307, same platform as this release); the WebStorm-specific starters are closed source and were not checked.
import { generateIntelliJCompletionSpec } from "./idea";

const completionSpec = generateIntelliJCompletionSpec("webstorm", "WebStorm");
export default completionSpec;
