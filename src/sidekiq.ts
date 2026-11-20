// Sidekiq v8.1.7 (RubyGems latest, 2026-11-19). Source: lib/sidekiq/cli.rb (OptionParser definitions)
// and bin/sidekiq from the sidekiq-8.1.7 gem, read statically (not run). The separate sidekiqmon binary is not covered here.
import { filepaths } from "@tabsmith/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "sidekiq",
  description: "Background job framework for Ruby",
  options: [
    {
      name: ["--concurrency", "-c"],
      description: "Processor threads to use",
      args: { name: "INT", default: "5" },
    },
    {
      name: ["--environment", "-e"],
      description: "Application environment",
      args: { name: "ENV" },
    },
    {
      name: ["--tag", "-g"],
      description: "Process tag for procline",
      args: { name: "TAG" },
    },
    {
      name: ["--queue", "-q"],
      description: "Queues to process with optional weights",
      isRepeatable: true,
      args: { name: "QUEUE[,WEIGHT]" },
    },
    {
      name: ["--require", "-r"],
      description: "Location of Rails application with jobs or file to require",
      args: {
        name: "PATH|DIR",
        isOptional: true,
        template: ["folders", "filepaths"],
      },
    },
    {
      name: ["--timeout", "-t"],
      description: "Shutdown timeout in seconds",
      args: { name: "NUM", default: "25" },
    },
    {
      name: ["--verbose", "-v"],
      description: "Print more verbose output",
    },
    {
      name: ["--config", "-C"],
      description: "Path to YAML config file",
      args: {
        name: "PATH",
        generators: filepaths({ extensions: ["yml", "yaml", "erb"] }),
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help",
    },
    {
      name: ["--version", "-V"],
      description: "Print version and exit",
    },
  ],
};
export default completionSpec;
