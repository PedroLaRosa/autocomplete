const completionSpec: Fig.Spec = {
  name: "logout",
  description: "Clears cached login credentials for the specified profile",
  options: [
    {
      name: "--all",
      description:
        'Removes cached credentials for all profiles that use "aws login". Does not remove credentials from profiles configured to use other styles of credentials',
    },
  ],
};

export default completionSpec;
