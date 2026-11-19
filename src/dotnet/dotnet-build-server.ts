const completionSpec: Fig.Spec = {
  name: "build-server",
  description: "Interact with servers started from a build",
  subcommands: [
    {
      name: "shutdown",
      description:
        "Shuts down build servers that are started from dotnet. By default, all servers are shut down",
      options: [
        {
          name: "--msbuild",
          description: "Shut down the MSBuild build server",
        },
        {
          name: "--vbcscompiler",
          description: "Shut down the VB/C# compiler build server",
        },
        {
          name: "--razor",
          description: "Shut down the Razor build server",
        },
      ],
    },
  ],
};

export default completionSpec;
