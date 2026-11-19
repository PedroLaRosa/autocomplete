const completionSpec: Fig.Spec = {
  name: "signup",
  description:
    "Create an AWS account and sign in to it. The ``signup`` command opens AWS account creation in your browser. When you finish, the CLI acquires temporary credentials and a refresh token that correspond to the console session for your new account, and sets the profile's region to the account's home region. The CLI refreshes the temporary credentials automatically as long as the refresh token is valid.\n\nYou can override the directory where the CLI will store the temporary credentials with the ``AWS_LOGIN_CACHE_DIRECTORY`` environment variable",
  options: [
    {
      name: "--remote",
      description:
        "Disables the local callback server and redirect-based auth flow. Instead displays the URL and prompts you to paste the authorization code that is displayed after logging in. This is intended when running the CLI on remote hosts via SSH where a local browser is not available",
    },
    {
      name: "--redirect-port",
      description:
        "The localhost port to use for the Authorization Code callback server. When omitted, a random available port is selected. This option is ignored when the login flow does not use a callback server",
      args: {
        name: "integer",
      },
    },
  ],
};

export default completionSpec;
