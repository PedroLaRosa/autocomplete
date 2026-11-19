// CLion v2026.3.0.1 (Homebrew cask clion, build 263.7307.257, 2026-11-19). Source: shared IntelliJ-platform launcher CLI in src/idea.ts, verified against JetBrains/intellij-community
// tag idea/263.7307.200 (platform build 263.7307, same platform as this release); the CLion-specific starters are closed source and were not checked.
import { generateIntelliJCompletionSpec } from "./idea";

const completionSpec = generateIntelliJCompletionSpec("clion", "CLion");
export default completionSpec;
