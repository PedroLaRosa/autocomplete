// PhpStorm v2026.3 (Homebrew cask phpstorm, build 263.7307.215, 2026-11-19). Source: shared IntelliJ-platform launcher CLI in src/idea.ts, verified against JetBrains/intellij-community
// tag idea/263.7307.200 (platform build 263.7307, same platform as this release); the PhpStorm-specific starters are closed source and were not checked.
import { generateIntelliJCompletionSpec } from "./idea";

const completionSpec = generateIntelliJCompletionSpec("phpstorm", "PhpStorm");
export default completionSpec;
