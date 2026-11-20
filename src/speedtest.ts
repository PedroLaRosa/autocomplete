// speedtest (entry point installed by the speedtest-cli package) v2.1.3 (PyPI, 2026-11-20).
// Source: setup.py console_scripts of the 2.1.3 sdist (speedtest=speedtest:main, speedtest-cli=speedtest:main), read statically; options live in speedtest-cli.ts.
// The Ookla "speedtest" CLI (a different tool with different flags) is not covered here.
const completionSpec: Fig.Spec = {
  name: "speedtest",
  description:
    "Command line interface for testing internet bandwidth using speedtest.net",
  loadSpec: "speedtest-cli",
};
export default completionSpec;
