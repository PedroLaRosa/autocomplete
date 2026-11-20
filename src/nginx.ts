// nginx v1.30.7 stable and v1.31.9 mainline (GitHub tags nginx/nginx, 2026-11-19). Source: src/core/nginx.c (ngx_get_options, usage text) and docs/man/nginx.8 at both tags; -l is mainline-only
const completionSpec: Fig.Spec = {
  name: "nginx",
  description:
    "HTTP and reverse proxy server, mail proxy server, and generic TCP/UDP proxy server",
  options: [
    {
      name: ["-?", "-h"],
      description: "Print help",
    },
    {
      name: "-c",
      description: "Use an alternative configuration file",
      args: {
        name: "file",
        template: "filepaths",
      },
    },
    {
      name: "-e",
      description:
        "Use an alternative error log file. Special value stderr indicates that the standard error output should be used",
      args: {
        name: "file",
        template: "filepaths",
        suggestions: ["stderr"],
      },
    },
    {
      name: "-g",
      description: "Set global configuration directives",
      args: {
        name: "directives",
        description:
          "For all directives visit https://nginx.org/en/docs/dirindex.html",
      },
    },
    {
      name: "-l",
      description:
        "Set a control socket listen address (mainline 1.31+, nginx must be built with --with-control-api)",
      args: {
        name: "address",
        description:
          "Address such as 127.0.0.1:8888, [::1]:8888 or unix:/path/to/socket",
      },
    },
    {
      name: "-p",
      description: "Set the prefix path",
      args: {
        name: "prefix",
        template: "folders",
      },
    },
    {
      name: "-q",
      description: "Suppress non-error messages during configuration testing",
    },
    {
      name: "-s",
      description:
        "Send a signal to the master process. The argument signal can be one of: stop, quit, reopen, reload",
      args: {
        name: "signal",
        suggestions: [
          {
            name: "stop",
            description: "Sends SIGTERM",
          },
          {
            name: "quit",
            description: "Sends SIGQUIT",
          },
          {
            name: "reopen",
            description: "Sends SIGUSR1",
          },
          {
            name: "reload",
            description: "Sends SIGHUP",
          },
        ],
      },
    },
    {
      name: "-T",
      description:
        "Same as -t, but additionally dump configuration files to standard output",
    },
    {
      name: "-t",
      description:
        "Do not run, just test the configuration file. nginx checks the configuration file syntax and then tries to open files referenced in the configuration file, including binding to configured listen addresses",
    },
    {
      name: "-V",
      description:
        "Print the nginx version, compiler version, and configure script parameters",
    },
    {
      name: "-v",
      description: "Print the nginx version",
    },
  ],
};

export default completionSpec;
