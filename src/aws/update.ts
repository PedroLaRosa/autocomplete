const completionSpec: Fig.Spec = {
  name: "update",
  description:
    "Update the AWS CLI to the latest version.\n\nNote that ``update`` is only supported if the current CLI instance was installed using an official installer, install script, or the ``update`` command. Other distribution mechanisms such as source or container images are not supported",
  options: [
    {
      name: "--skip-signature-verification",
      description:
        'Skip signature verification of the downloaded install script. NOT RECOMMENDED: this disables a security control that confirms the install script is authentic before it is run. Only use it if you understand and accept the risk (for example, when gpg is unavailable on Linux and cannot be installed). Setting the AWS_CLI_INSTALL_SKIP_SIGNATURE_VERIFICATION environment variable to "true" does the same',
    },
  ],
};

export default completionSpec;
