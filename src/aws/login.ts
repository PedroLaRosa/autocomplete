const completionSpec: Fig.Spec = {
  name: "login",
  description:
    "Login for local development using AWS Management Console credentials. Each time the ``login`` command is called, the CLI will acquire temporary credentials and a refresh token that correspond to your selected console session. The CLI will refresh the temporary credentials automatically as long as the refresh token is valid.\n\nYou can override the directory where the CLI will store the temporary credentials with the ``AWS_LOGIN_CACHE_DIRECTORY`` environment variable",
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
