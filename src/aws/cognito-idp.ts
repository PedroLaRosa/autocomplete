const completionSpec: Fig.Spec = {
  name: "cognito-idp",
  description:
    "With the Amazon Cognito user pools API, you can configure user pools and authenticate users. To authenticate users from third-party identity providers (IdPs) in this API, you can link IdP users to native user profiles. Learn more about the authentication and authorization of federated users at Adding user pool sign-in through a third party and in the User pool federation endpoints and managed login reference. This API reference provides detailed information about API operations and object types in Amazon Cognito. Along with resource management operations, the Amazon Cognito user pools API includes classes of operations and authorization models for client-side and server-side authentication of users. You can interact with operations in the Amazon Cognito user pools API as any of the following subjects.   An administrator who wants to configure user pools, app clients, users, groups, or other user pool functions.   A server-side app, like a web application, that wants to use its Amazon Web Services privileges to manage, authenticate, or authorize a user.   A client-side app, like a mobile app, that wants to make unauthenticated requests to manage, authenticate, or authorize a user.   For more information, see Understanding API, OIDC, and managed login pages authentication in the Amazon Cognito Developer Guide. With your Amazon Web Services SDK, you can build the logic to support operational flows in every use case for this API. You can also make direct REST API requests to Amazon Cognito user pools service endpoints. The following links can get you started with the CognitoIdentityProvider client in supported Amazon Web Services SDKs. To get started with an Amazon Web Services SDK, see Tools to Build on Amazon Web Services. For example actions and scenarios, see Code examples for Amazon Cognito Identity Provider using Amazon Web Services SDKs",
  subcommands: [
    {
      name: "add-custom-attributes",
      description:
        "Adds additional user attributes to the user pool schema. Custom attributes can be mutable or immutable and have a custom: or dev: prefix. For more information, see Custom attributes.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to add custom attributes",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-attributes",
          description:
            "An array of custom attribute names and other properties. Sets the following characteristics:  AttributeDataType  The expected data type. Can be a string, a number, a date and time, or a boolean.  Mutable  If true, you can grant app clients write access to the attribute value. If false, the attribute value can only be set up on sign-up or administrator creation of users.  Name  The attribute name. For an attribute like custom:myAttribute, enter myAttribute for this field.  Required  When true, users who sign up or are created must set a value for the attribute.  NumberAttributeConstraints  The minimum and maximum length of accepted values for a Number-type attribute.  StringAttributeConstraints  The minimum and maximum length of accepted values for a String-type attribute.  DeveloperOnlyAttribute  This legacy option creates an attribute with a dev: prefix. You can only set the value of a developer-only attribute with administrative IAM credentials",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "add-user-pool-client-secret",
      description:
        "Creates a new client secret for an existing confidential user pool app client. Supports up to 2 active secrets per app client for zero-downtime credential rotation workflows",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that contains the app client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client for which you want to create a new secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-secret",
          description:
            "The client secret value you want to use. If you don't provide this parameter, Amazon Cognito generates a secure secret for you",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-add-user-to-group",
      description:
        "Adds a user to a group. A user who is in a group can present a preferred-role claim to an identity pool, and populates a cognito:groups claim to their access and identity tokens.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the group that you want to add the user to",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description:
            "The name of the group that you want to add your user to",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-confirm-sign-up",
      description:
        "Confirms user sign-up as an administrator.  This request sets a user account active in a user pool that requires confirmation of new user accounts before they can sign in. You can configure your user pool to not send confirmation codes to new users and instead confirm them with this API operation on the back end.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints     To configure your user pool to require administrative confirmation of users, set AllowAdminCreateUserOnly to true in a CreateUserPool or UpdateUserPool request",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to confirm a user's sign-up request",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-create-user",
      description:
        "Creates a new user in the specified user pool. If MessageAction isn't set, the default is to send a welcome message via email or phone (SMS). This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password. Alternatively, you can call AdminCreateUser with SUPPRESS for the MessageAction parameter, and Amazon Cognito won't send any email.  In either case, if the user has a password, they will be in the FORCE_CHANGE_PASSWORD state until they sign in and set their password. Your invitation message template must have the {####} password placeholder if your users have passwords. If your template doesn't have this placeholder, Amazon Cognito doesn't deliver the invitation message. In this case, you must update your message template and resend the password with a new AdminCreateUser request with a MessageAction value of RESEND.  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to create a user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The value that you want to set as the username sign-in attribute. The following conditions apply to the username parameter.   The username can't be a duplicate of another username in the same user pool.   You can't change the value of a username after you create it.   You can only provide a value if usernames are a valid sign-in attribute for your user pool. If your user pool only supports phone numbers or email addresses as sign-in attributes, Amazon Cognito automatically generates a username value. For more information, see Customizing sign-in attributes",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attributes",
          description:
            "An array of name-value pairs that contain user attributes and attribute values to be set for the user to be created. You can create a user without specifying any attributes other than Username. However, any attributes that you specify as required (when creating a user pool or in the Attributes tab of the console) either you should supply (in your call to AdminCreateUser) or the user should supply (when they sign up in response to your welcome message). For custom attributes, you must prepend the custom: prefix to the attribute name. To send a message inviting the user to sign up, you must specify the user's email address or phone number. You can do this in your call to AdminCreateUser or in the Users tab of the Amazon Cognito console for managing your user pools. You must also provide an email address or phone number when you expect the user to do passwordless sign-in with an email or SMS OTP. These attributes must be provided when passwordless options are the only available, or when you don't submit a TemporaryPassword. In your AdminCreateUser request, you can set the email_verified and phone_number_verified attributes to true. The following conditions apply:  email  The email address where you want the user to receive their confirmation code and username. You must provide a value for email when you want to set email_verified to true, or if you set EMAIL in the DesiredDeliveryMediums parameter.  phone_number  The phone number where you want the user to receive their confirmation code and username. You must provide a value for phone_number when you want to set phone_number_verified to true, or if you set SMS in the DesiredDeliveryMediums parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--validation-data",
          description:
            "Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda trigger. This set of key-value pairs are for custom validation of information that you collect from your users but don't need to retain. Your Lambda function can analyze this additional data and act on it. Your function can automatically confirm and verify select users or perform external API operations like logging user attributes and validation data to Amazon CloudWatch Logs. For more information about the pre sign-up Lambda trigger, see Pre sign-up Lambda trigger",
          args: {
            name: "list",
          },
        },
        {
          name: "--temporary-password",
          description:
            "The user's temporary password. This password must conform to the password policy that you specified when you created the user pool. The exception to the requirement for a password is when your user pool supports passwordless sign-in with email or SMS OTPs. To create a user with no password, omit this parameter or submit a blank value. You can only create a passwordless user when passwordless sign-in is available. The temporary password is valid only once. To complete the Admin Create User flow, the user must enter the temporary password in the sign-in page, along with a new password to be used in all future sign-ins. If you don't specify a value, Amazon Cognito generates one for you unless you have passwordless options active for your user pool. The temporary password can only be used until the user account expiration limit that you set for your user pool. To reset the account after that time limit, you must call AdminCreateUser again and specify RESEND for the MessageAction parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-alias-creation",
          description:
            "This parameter is used only if the phone_number_verified or email_verified attribute is set to True. Otherwise, it is ignored. If this parameter is set to True and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, this request migrates the alias from the previous user to the newly-created user. The previous user will no longer be able to log in using that alias. If this parameter is set to False, the API throws an AliasExistsException error if the alias already exists. The default value is False",
        },
        {
          name: "--no-force-alias-creation",
          description:
            "This parameter is used only if the phone_number_verified or email_verified attribute is set to True. Otherwise, it is ignored. If this parameter is set to True and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, this request migrates the alias from the previous user to the newly-created user. The previous user will no longer be able to log in using that alias. If this parameter is set to False, the API throws an AliasExistsException error if the alias already exists. The default value is False",
        },
        {
          name: "--message-action",
          description:
            "Set to RESEND to resend the invitation message to a user that already exists, and to reset the temporary-password duration with a new temporary password. Set to SUPPRESS to suppress sending the message. You can specify only one value",
          args: {
            name: "string",
            suggestions: ["RESEND", "SUPPRESS"],
          },
        },
        {
          name: "--desired-delivery-mediums",
          description:
            "Specify EMAIL if email will be used to send the welcome message. Specify SMS if the phone number will be used. The default value is SMS. You can specify more than one value",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-delete-software-token",
      description:
        "Deletes a user's registered time-based one-time password (TOTP) multi-factor authentication (MFA) factor, also known as a software token. After this operation, the user can no longer sign in with TOTP MFA, and can register a new TOTP factor with AssociateSoftwareToken. Use this operation when a user loses access to their TOTP-generating device, for example, a lost or reset phone, and needs to register a new one.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to delete the user's software token",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-delete-user",
      description:
        "Deletes a user profile in your user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to delete the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-delete-user-attributes",
      description:
        "Deletes attribute values from a user. This operation doesn't affect tokens for existing user sessions. The next ID token that the user receives will no longer have the deleted attributes.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to delete user attributes",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attribute-names",
          description:
            "An array of strings representing the user attribute names you want to delete. For custom attributes, you must prepend the custom: prefix to the attribute name",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-disable-provider-for-user",
      description:
        "Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked DestinationUser, the user must create a new user account. The value of ProviderName must match the name of a user pool IdP. To deactivate a local user, set ProviderName to Cognito and the ProviderAttributeName to Cognito_Subject. The ProviderAttributeValue must be user's local username. The ProviderAttributeName must always be Cognito_Subject for social IdPs. The ProviderAttributeValue must always be the exact subject that was used when the user was originally linked as a source user. For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the ProviderAttributeName and ProviderAttributeValue must be the same values that were used for the SourceUser when the identities were originally linked using  AdminLinkProviderForUser call. This is also true if the linking was done with ProviderAttributeName set to Cognito_Subject. If the user has already signed in, the ProviderAttributeName must be Cognito_Subject and ProviderAttributeValue must be the NameID from their SAML assertion.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to delete the user's linked identities",
          args: {
            name: "string",
          },
        },
        {
          name: "--user",
          description:
            "The user profile that you want to delete a linked identity from",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-disable-user",
      description:
        "Deactivates a user profile and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to ListUsers API requests.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to disable the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-enable-user",
      description:
        "Activates sign-in for a user profile that previously had sign-in access disabled.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to activate sign-in for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-forget-device",
      description:
        "Forgets, or deletes, a remembered device from a user's profile. After you forget the device, the user can no longer complete device authentication with that device and when applicable, must submit MFA codes again. For more information, see Working with devices.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where the device owner is a user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description: "The key ID of the device that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-get-device",
      description:
        "Given the device key, returns details for a user's device. For more information, see Working with devices.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--device-key",
          description: "The key of the device that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where the device owner is a user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-get-user",
      description:
        "Given a username, returns details about a user profile in a user pool. You can specify alias attributes in the Username request parameter. This operation contributes to your monthly active user (MAU) count for the purpose of billing.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to get information about the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-get-user-auth-factors",
      description:
        "Lists the authentication options for a user in a user pool. Returns the following:   The user's multi-factor authentication (MFA) preferences.   The user's options for choice-based authentication with the USER_AUTH flow.    Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to get information about the user's authentication factors",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-initiate-auth",
      description:
        "Starts sign-in for applications with a server-side component, for example a traditional web application. This operation specifies the authentication flow that you'd like to begin. The authentication flow that you specify must be supported in your app client configuration. For more information about authentication flows, see Authentication flows.  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where the user wants to sign in",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client where the user wants to sign in",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-flow",
          description:
            "The authentication flow that you want to initiate. Each AuthFlow has linked AuthParameters that you must submit. The following are some example flows.  USER_AUTH  The entry point for choice-based authentication with passwords, one-time passwords, and WebAuthn authenticators. Request a preferred authentication type or review available authentication types. From the offered authentication types, select one in a challenge response and then authenticate with that method in an additional challenge response. To activate this setting, your user pool must be in the  Essentials tier or higher.  USER_SRP_AUTH  Username-password authentication with the Secure Remote Password (SRP) protocol. For more information, see Use SRP password verification in custom authentication flow.  REFRESH_TOKEN_AUTH and REFRESH_TOKEN  Receive new ID and access tokens when you pass a REFRESH_TOKEN parameter with a valid refresh token as the value. For more information, see Using the refresh token.  CUSTOM_AUTH  Custom authentication with Lambda triggers. For more information, see Custom authentication challenge Lambda triggers.  ADMIN_USER_PASSWORD_AUTH  Server-side username-password authentication with the password sent directly in the request. For more information about client-side and server-side authentication, see SDK authorization models",
          args: {
            name: "string",
            suggestions: [
              "USER_SRP_AUTH",
              "REFRESH_TOKEN_AUTH",
              "REFRESH_TOKEN",
              "CUSTOM_AUTH",
              "ADMIN_NO_SRP_AUTH",
              "USER_PASSWORD_AUTH",
              "ADMIN_USER_PASSWORD_AUTH",
              "USER_AUTH",
            ],
          },
        },
        {
          name: "--auth-parameters",
          description:
            "The authentication parameters. These are inputs corresponding to the AuthFlow that you're invoking. The following are some authentication flows and their parameters. Add a SECRET_HASH parameter if your app client has a client secret. Add DEVICE_KEY if you want to bypass multi-factor authentication with a remembered device.   USER_AUTH     USERNAME (required)    PREFERRED_CHALLENGE. If you don't provide a value for PREFERRED_CHALLENGE, Amazon Cognito responds with the AvailableChallenges parameter that specifies the available sign-in methods.    TARGET_ACR_VALUES. An optional, space-separated list of the authentication context class reference (ACR) level URIs that you want the user to reach. List the levels in priority order, from highest to lowest. Amazon Cognito attempts the highest-priority level that the user can satisfy, and falls back through the list. Amazon Cognito ignores any value that it doesn't recognize. If none of the requested values are valid, Amazon Cognito returns an error. Requesting step-up authentication with this parameter requires the Essentials or Plus feature plan. On a lower feature plan, AdminInitiateAuth returns a FeatureUnavailableInTierException. USERNAME is required. When you provide an ACCESS_TOKEN, you must also provide TARGET_ACR_VALUES. Amazon Cognito returns an error if you provide an ACCESS_TOKEN without TARGET_ACR_VALUES. The USERNAME that you provide must match the user that the ACCESS_TOKEN was issued for. For more information about step-up authentication and how Amazon Cognito handles multi-factor authentication requirements, see Step-up authentication with ACR and AMR in the Amazon Cognito Developer Guide.    MAX_AGE. An optional integer that sets the maximum number of seconds allowed since the user last authenticated. If the user's most recent authentication is older than this value, Amazon Cognito discards the authentication-methods credit from any access token that you provide and processes the request as a fresh authentication toward the target level. The access token itself remains valid.    USER_SRP_AUTH     USERNAME (required)    SRP_A (required)    ADMIN_USER_PASSWORD_AUTH     USERNAME (required)    PASSWORD (required)    REFRESH_TOKEN_AUTH/REFRESH_TOKEN     REFRESH_TOKEN(required)    CUSTOM_AUTH     USERNAME (required)    ChallengeName: SRP_A (when preceding custom authentication with SRP authentication)    SRP_A: (An SRP_A value) (when preceding custom authentication with SRP authentication)     For more information about SECRET_HASH, see Computing secret hash values. For information about DEVICE_KEY, see Working with user devices in your user pool",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide. The ClientMetadata value is passed as input to the functions for only the following triggers:   Pre signup   Pre authentication   User migration   This request also invokes the functions for the following triggers, but doesn't pass ClientMetadata:   Post authentication   Custom message   Pre token generation   Create auth challenge   Define auth challenge   Custom email sender   Custom SMS sender    When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context-data",
          description:
            "Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests. For more information, see Collecting data for threat protection in applications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--session",
          description:
            "The optional session ID from a ConfirmSignUp API request. You can sign in a user directly from the sign-up process with an AuthFlow of USER_AUTH and AuthParameters of EMAIL_OTP or SMS_OTP, depending on how your user pool sent the confirmation-code message",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-link-provider-for-user",
      description:
        "Links an existing user account in a user pool, or DestinationUser, to an identity from an external IdP, or SourceUser, based on a specified attribute name and value from the external IdP. This operation connects a local user profile with a user identity who hasn't yet signed in from their third-party IdP. When the user signs in with their IdP, they get access-control configuration from the local user profile. Linked local users can also sign in with SDK-based API operations like InitiateAuth after they sign in at least once through their IdP. For more information, see Linking federated users.  The maximum number of federated identities linked to a user is five.   Because this API allows a user with an external federated identity to sign in as a local user, it is critical that it only be used with external IdPs and linked attributes that you trust.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to link a federated identity",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-user",
          description:
            "The existing user in the user pool that you want to assign to the external IdP user account. This user can be a local (Username + Password) Amazon Cognito user pools user or a federated user (for example, a SAML or Facebook user). If the user doesn't exist, Amazon Cognito generates an exception. Amazon Cognito returns this user when the new user (with the linked IdP attribute) signs in. For a native username + password user, the ProviderAttributeValue for the DestinationUser should be the username in the user pool. For a federated user, it should be the provider-specific user_id. The ProviderAttributeName of the DestinationUser is ignored. The ProviderName should be set to Cognito for users in Cognito user pools",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-user",
          description:
            "An external IdP account for a user who doesn't exist yet in the user pool. This user must be a federated user (for example, a SAML or Facebook user), not another native user. If the SourceUser is using a federated social IdP, such as Facebook, Google, or Login with Amazon, you must set the ProviderAttributeName to Cognito_Subject. For social IdPs, the ProviderName will be Facebook, Google, or LoginWithAmazon, and Amazon Cognito will automatically parse the Facebook, Google, and Login with Amazon tokens for id, sub, and user_id, respectively. The ProviderAttributeValue for the user must be the same value as the id, sub, or user_id value found in the social IdP token. For OIDC, the ProviderAttributeName can be any mapped value from a claim in the ID token, or that your app retrieves from the userInfo endpoint. For SAML, the ProviderAttributeName can be any mapped value from a claim in the SAML assertion. The following additional considerations apply to SourceUser for OIDC and SAML providers.   You must map the claim to a user pool attribute in your IdP configuration, and set the user pool attribute name as the value of ProviderAttributeName in your AdminLinkProviderForUser request. For example, email.   When you set ProviderAttributeName to Cognito_Subject, Amazon Cognito will automatically parse the default unique identifier found in the subject from the IdP token",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-list-devices",
      description:
        'Lists a user\'s registered devices. Remembered devices are used in authentication services where you offer a "Remember me" option for users who you want to permit to sign in without MFA from a trusted device. Users can bypass MFA while your application performs device SRP authentication on the back end. For more information, see Working with devices.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints',
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where the device owner is a user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of devices that you want Amazon Cognito to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-list-groups-for-user",
      description:
        "Lists the groups that a user belongs to. User pool groups are identifiers that you can reference from the contents of ID and access tokens, and set preferred IAM roles for identity-pool authentication. For more information, see Adding groups to a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to view a user's groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of groups that you want Amazon Cognito to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-list-user-auth-events",
      description:
        "Requests a history of user activity and any risks detected as part of Amazon Cognito threat protection. For more information, see Viewing user event history.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The Id of the user pool that contains the user profile with the logged events",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of authentication events to return. Returns 60 events if you set MaxResults to 0, or if you don't include a MaxResults parameter",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-list-user-sessions",
      description:
        "Lists the active sessions for a specified user as an administrator. The response includes both token sessions and SSO sessions. Only active sessions are returned; revoked and expired sessions aren't included. Amazon Cognito returns all of a user's sessions in a single page of up to 125 sessions. The results are eventually consistent, and new sessions are typically included within a few seconds",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that contains the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user whose sessions you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that Amazon Cognito returned in a previous response. Use this value to retrieve the next page of results if a NextToken was included in a prior response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-remove-user-from-group",
      description:
        "Given a username and a group name, removes them from the group. User pool groups are identifiers that you can reference from the contents of ID and access tokens, and set preferred IAM roles for identity-pool authentication. For more information, see Adding groups to a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the group and the user that you want to remove",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description:
            "The name of the group that you want to remove the user from, for example MyTestGroup",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-reset-user-password",
      description:
        "Begins the password reset process. Sets the requested user’s account into a RESET_REQUIRED status, and sends them a password-reset code. Your user pool also sends the user a notification with a reset code and the information that their password has been reset. At sign-in, your application or the managed login session receives a challenge to complete the reset by confirming the code and setting a new password. To use this API operation, your user pool must have self-service account recovery configured.  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to reset the user's password",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-respond-to-auth-challenge",
      description:
        "Some API operations in a user pool generate a challenge, like a prompt for an MFA code, for device authentication that bypasses MFA, or for a custom authentication challenge. An AdminRespondToAuthChallenge API request provides the answer to that challenge, like a code or a secure remote password (SRP). The parameters of a response to an authentication challenge vary with the type of challenge. For more information about custom authentication challenges, see Custom authentication challenge Lambda triggers.  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to respond to an authentication challenge",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The ID of the app client where you initiated sign-in",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-name",
          description:
            "The name of the challenge that you are responding to. Possible challenges include the following:  All of the following challenges require USERNAME and, when the app client has a client secret, SECRET_HASH in the parameters. Include a DEVICE_KEY for device authentication.     WEB_AUTHN: Respond to the challenge with the results of a successful authentication with a WebAuthn authenticator, or passkey, as CREDENTIAL. Examples of WebAuthn authenticators include biometric devices and security keys.    PASSWORD: Respond with the user's password as PASSWORD.    PASSWORD_SRP: Respond with the initial SRP secret as SRP_A.    SELECT_CHALLENGE: Respond with a challenge selection as ANSWER. It must be one of the challenge types in the AvailableChallenges response parameter. Add the parameters of the selected challenge, for example USERNAME and SMS_OTP.    SMS_MFA: Respond with the code that your user pool delivered in an SMS message, as SMS_MFA_CODE     EMAIL_MFA: Respond with the code that your user pool delivered in an email message, as EMAIL_MFA_CODE     EMAIL_OTP: Respond with the code that your user pool delivered in an email message, as EMAIL_OTP_CODE .    SMS_OTP: Respond with the code that your user pool delivered in an SMS message, as SMS_OTP_CODE.    PASSWORD_VERIFIER: Respond with the second stage of SRP secrets as PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK, and TIMESTAMP.    CUSTOM_CHALLENGE: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued. The parameters of the challenge are determined by your Lambda function and issued in the ChallengeParameters of a challenge response.    DEVICE_SRP_AUTH: Respond with the initial parameters of device SRP authentication. For more information, see Signing in with a device.    DEVICE_PASSWORD_VERIFIER: Respond with PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK, and TIMESTAMP after client-side SRP calculations. For more information, see Signing in with a device.    NEW_PASSWORD_REQUIRED: For users who are required to change their passwords after successful first login. Respond to this challenge with NEW_PASSWORD and any required attributes that Amazon Cognito returned in the requiredAttributes parameter. You can also set values for attributes that aren't required by your user pool and that your app client can write. Amazon Cognito only returns this challenge for users who have temporary passwords. When you create passwordless users, you must provide values for all required attributes.  In a NEW_PASSWORD_REQUIRED challenge response, you can't modify a required attribute that already has a value. In AdminRespondToAuthChallenge or RespondToAuthChallenge, set a value for any keys that Amazon Cognito returned in the requiredAttributes parameter, then use the AdminUpdateUserAttributes or UpdateUserAttributes API operation to modify the value of any additional attributes.     MFA_SETUP: For users who are required to setup an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters MFAS_CAN_SETUP value.  To set up time-based one-time password (TOTP) MFA, use the session returned in this challenge from InitiateAuth or AdminInitiateAuth as an input to AssociateSoftwareToken. Then, use the session returned by VerifySoftwareToken as an input to RespondToAuthChallenge or AdminRespondToAuthChallenge with challenge name MFA_SETUP to complete sign-in.  To set up SMS or email MFA, collect a phone_number or email attribute for the user. Then restart the authentication flow with an InitiateAuth or AdminInitiateAuth request",
          args: {
            name: "string",
            suggestions: [
              "SMS_MFA",
              "EMAIL_OTP",
              "SOFTWARE_TOKEN_MFA",
              "SELECT_MFA_TYPE",
              "MFA_SETUP",
              "PASSWORD_VERIFIER",
              "CUSTOM_CHALLENGE",
              "SELECT_CHALLENGE",
              "DEVICE_SRP_AUTH",
              "DEVICE_PASSWORD_VERIFIER",
              "ADMIN_NO_SRP_AUTH",
              "NEW_PASSWORD_REQUIRED",
              "SMS_OTP",
              "PASSWORD",
              "WEB_AUTHN",
              "PASSWORD_SRP",
            ],
          },
        },
        {
          name: "--challenge-responses",
          description:
            'The responses to the challenge that you received in the previous request. Each challenge has its own required response parameters. The following examples are partial JSON request bodies that highlight challenge-response parameters.  You must provide a SECRET_HASH parameter in all challenge responses to an app client that has a client secret. Include a DEVICE_KEY for device authentication.   SELECT_CHALLENGE   "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "USERNAME": "[username]", "ANSWER": "[Challenge name]"}  Available challenges are PASSWORD, PASSWORD_SRP, EMAIL_OTP, SMS_OTP, and WEB_AUTHN. Complete authentication in the SELECT_CHALLENGE response for PASSWORD, PASSWORD_SRP, and WEB_AUTHN:    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "WEB_AUTHN", "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"}  See  AuthenticationResponseJSON.    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "PASSWORD", "USERNAME": "[username]", "PASSWORD": "[password]"}     "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "PASSWORD_SRP", "USERNAME": "[username]", "SRP_A": "[SRP_A]"}    For SMS_OTP and EMAIL_OTP, respond with the username and answer. Your user pool will send a code for the user to submit in the next challenge response.    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "SMS_OTP", "USERNAME": "[username]"}     "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "EMAIL_OTP", "USERNAME": "[username]"}     WEB_AUTHN   "ChallengeName": "WEB_AUTHN", "ChallengeResponses": { "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"}  See  AuthenticationResponseJSON.  PASSWORD   "ChallengeName": "PASSWORD", "ChallengeResponses": { "USERNAME": "[username]", "PASSWORD": "[password]"}   PASSWORD_SRP   "ChallengeName": "PASSWORD_SRP", "ChallengeResponses": { "USERNAME": "[username]", "SRP_A": "[SRP_A]"}   SMS_OTP   "ChallengeName": "SMS_OTP", "ChallengeResponses": {"SMS_OTP_CODE": "[code]", "USERNAME": "[username]"}   EMAIL_OTP   "ChallengeName": "EMAIL_OTP", "ChallengeResponses": {"EMAIL_OTP_CODE": "[code]", "USERNAME": "[username]"}   SMS_MFA   "ChallengeName": "SMS_MFA", "ChallengeResponses": {"SMS_MFA_CODE": "[code]", "USERNAME": "[username]"}   PASSWORD_VERIFIER  This challenge response is part of the SRP flow. Amazon Cognito requires that your application respond to this challenge within a few seconds. When the response time exceeds this period, your user pool returns a NotAuthorizedException error.  "ChallengeName": "PASSWORD_VERIFIER", "ChallengeResponses": {"PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"}   CUSTOM_CHALLENGE   "ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses": {"USERNAME": "[username]", "ANSWER": "[challenge_answer]"}   NEW_PASSWORD_REQUIRED   "ChallengeName": "NEW_PASSWORD_REQUIRED", "ChallengeResponses": {"NEW_PASSWORD": "[new_password]", "USERNAME": "[username]"}  To set any required attributes that InitiateAuth returned in an requiredAttributes parameter, add "userAttributes.[attribute_name]": "[attribute_value]". This parameter can also set values for writable attributes that aren\'t required by your user pool.  In a NEW_PASSWORD_REQUIRED challenge response, you can\'t modify a required attribute that already has a value. In AdminRespondToAuthChallenge or RespondToAuthChallenge, set a value for any keys that Amazon Cognito returned in the requiredAttributes parameter, then use the AdminUpdateUserAttributes or UpdateUserAttributes API operation to modify the value of any additional attributes.   SOFTWARE_TOKEN_MFA   "ChallengeName": "SOFTWARE_TOKEN_MFA", "ChallengeResponses": {"USERNAME": "[username]", "SOFTWARE_TOKEN_MFA_CODE": [authenticator_code]}   DEVICE_SRP_AUTH   "ChallengeName": "DEVICE_SRP_AUTH", "ChallengeResponses": {"USERNAME": "[username]", "DEVICE_KEY": "[device_key]", "SRP_A": "[srp_a]"}   DEVICE_PASSWORD_VERIFIER   "ChallengeName": "DEVICE_PASSWORD_VERIFIER", "ChallengeResponses": {"DEVICE_KEY": "[device_key]", "PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"}   MFA_SETUP   "ChallengeName": "MFA_SETUP", "ChallengeResponses": {"USERNAME": "[username]"}, "SESSION": "[Session ID from VerifySoftwareToken]"   SELECT_MFA_TYPE   "ChallengeName": "SELECT_MFA_TYPE", "ChallengeResponses": {"USERNAME": "[username]", "ANSWER": "[SMS_MFA|EMAIL_MFA|SOFTWARE_TOKEN_MFA]"}    For more information about SECRET_HASH, see Computing secret hash values. For information about DEVICE_KEY, see Working with user devices in your user pool',
          args: {
            name: "map",
          },
        },
        {
          name: "--session",
          description:
            "The session identifier that maintains the state of authentication requests and challenge responses. If an AdminInitiateAuth or AdminRespondToAuthChallenge API request results in a determination that your application must pass another challenge, Amazon Cognito returns a session with other challenge parameters. Send this session identifier, unmodified, to the next AdminRespondToAuthChallenge request",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number",
          args: {
            name: "structure",
          },
        },
        {
          name: "--context-data",
          description:
            "Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests. For more information, see Collecting data for threat protection in applications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-revoke-user-session",
      description:
        "Revokes a specific user session as an administrator. Amazon Cognito revokes all refresh and access tokens that are associated with the session and deletes the session record. You can revoke either a token session or an SSO session, and you can optionally cascade the revocation to linked sessions",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that contains the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user who owns the session. The username must match the user associated with the SessionId, to confirm they are the intended target user",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The ID of the session to revoke. This is a 28-character string of lowercase letters and digits, prefixed with tkn for a token session or sso for an SSO session",
          args: {
            name: "string",
          },
        },
        {
          name: "--revoke-associated-sessions",
          description:
            "Specifies whether to also revoke the sessions that are linked to the targeted session. NONE, the default, revokes only the targeted session. LINKED also revokes the directly linked session or sessions, interpreted relative to the type of the targeted session: revoking a token session also revokes the parent SSO session it came through, and revoking an SSO session also revokes the token sessions that came through it. The set of linked sessions is eventually consistent, so associated sessions are typically revoked within a few seconds",
          args: {
            name: "string",
            suggestions: ["NONE", "LINKED"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-set-user-mfa-preference",
      description:
        "Sets the user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--sms-mfa-settings",
          description:
            "User preferences for SMS message MFA. Activates or deactivates SMS MFA and sets it as the preferred MFA method when multiple methods are available",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-token-mfa-settings",
          description:
            "User preferences for time-based one-time password (TOTP) MFA. Activates or deactivates TOTP MFA and sets it as the preferred MFA method when multiple methods are available",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-mfa-settings",
          description:
            "User preferences for email message MFA. Activates or deactivates email MFA and sets it as the preferred MFA method when multiple methods are available. To activate this setting, your user pool must be in the  Essentials tier or higher",
          args: {
            name: "structure",
          },
        },
        {
          name: "--web-authn-mfa-settings",
          description:
            "User preferences for passkey MFA. Activates or deactivates passkey MFA for the user. When activated, passkey authentication requires user verification, and passkey sign-in is available when MFA is required. To activate this setting, the FactorConfiguration of your user pool WebAuthnConfiguration must be MULTI_FACTOR_WITH_USER_VERIFICATION. To activate this setting, your user pool must be in the  Essentials tier or higher",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to set a user's MFA preferences",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-set-user-password",
      description:
        "Sets the specified user's password in a user pool. This operation administratively sets a temporary or permanent password for a user. With this operation, you can bypass self-service password changes and permit immediate sign-in with the password that you set. To do this, set Permanent to true. You can also set a new temporary password in this request, send it to a user, and require them to choose a new password on their next sign-in. To do this, set Permanent to false. If the password is temporary, the user's Status becomes FORCE_CHANGE_PASSWORD. When the user next tries to sign in, the InitiateAuth or AdminInitiateAuth response includes the NEW_PASSWORD_REQUIRED challenge. If the user doesn't sign in before the temporary password expires, they can no longer sign in and you must repeat this operation to set a temporary or permanent password for them. After the user sets a new password, or if you set a permanent password, their status becomes Confirmed.  AdminSetUserPassword can set a password for the user profile that Amazon Cognito creates for third-party federated users. When you set a password, the federated user's status changes from EXTERNAL_PROVIDER to CONFIRMED. A user in this state can sign in as a federated user, and initiate authentication flows in the API like a linked native user. They can also modify their password and attributes in token-authenticated API requests like ChangePassword and UpdateUserAttributes. As a best security practice and to keep users in sync with your external IdP, don't set passwords on federated user profiles. To set up a federated user for native sign-in with a linked native user, refer to Linking federated users to an existing user profile.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to set the user's password",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description:
            "The new temporary or permanent password that you want to set for the user. You can't remove the password for a user who already has a password so that they can only sign in with passwordless methods. In this scenario, you must create a new user without a password",
          args: {
            name: "string",
          },
        },
        {
          name: "--permanent",
          description:
            "Set to true to set a password that the user can immediately sign in with. Set to false to set a temporary password that the user must change on their next sign-in",
        },
        {
          name: "--no-permanent",
          description:
            "Set to true to set a password that the user can immediately sign in with. Set to false to set a temporary password that the user must change on their next sign-in",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-set-user-settings",
      description:
        "This action is no longer supported. You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the user whose options you're setting",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa-options",
          description:
            "You can use this parameter only to set an SMS configuration that uses SMS for delivery",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-update-auth-event-feedback",
      description:
        "Provides the feedback for an authentication event generated by threat protection features. Your response indicates that you think that the event either was from a valid user or was an unwanted authentication attempt. This feedback improves the risk evaluation decision for the user pool as part of Amazon Cognito threat protection. To activate this setting, your user pool must be on the  Plus tier. To train the threat-protection model to recognize trusted and untrusted sign-in characteristics, configure threat protection in audit-only mode and provide a mechanism for users or administrators to submit feedback. Your feedback can tell Amazon Cognito that a risk rating was assigned at a level you don't agree with.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to submit authentication-event feedback",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-id",
          description:
            "The ID of the threat protection authentication event that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-value",
          description:
            "Your feedback to the authentication event. When you provide a FeedbackValue value of valid, you tell Amazon Cognito that you trust a user session where Amazon Cognito has evaluated some level of risk. When you provide a FeedbackValue value of invalid, you tell Amazon Cognito that you don't trust a user session, or you don't believe that Amazon Cognito evaluated a high-enough risk level",
          args: {
            name: "string",
            suggestions: ["Valid", "Invalid"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-update-device-status",
      description:
        'Updates the status of a user\'s device so that it is marked as remembered or not remembered for the purpose of device authentication. Device authentication is a "remember me" mechanism that silently completes sign-in from trusted devices with a device key instead of a user-provided MFA code. This operation changes the status of a device without deleting it, so you can enable it again later. For more information about device authentication, see Working with devices.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints',
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to change a user's device status",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description:
            "The unique identifier, or device key, of the device that you want to update the status for",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-remembered-status",
          description:
            "To enable device authentication with the specified device, set to remembered.To disable, set to not_remembered",
          args: {
            name: "string",
            suggestions: ["remembered", "not_remembered"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-update-user-attributes",
      description:
        "Updates the specified user's attributes. To delete an attribute from your user, submit the attribute in your API request with a blank value. For custom attributes, you must add a custom: prefix to the attribute name, for example custom:department. This operation can set a user's email address or phone number as verified and permit immediate sign-in in user pools that require verification of these attributes. To do this, set the email_verified or phone_number_verified attribute to true.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints      This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to update user attributes",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attributes",
          description:
            "An array of name-value pairs representing user attributes. For custom attributes, you must prepend the custom: prefix to the attribute name. If your user pool requires verification before Amazon Cognito updates an attribute value that you specify in this request, Amazon Cognito doesn’t immediately update the value of that attribute. After your user receives and responds to a verification message to verify the new value, Amazon Cognito updates the attribute value. Your user can sign in and receive messages with the original attribute value until they verify the new value. To skip the verification message and update the value of an attribute that requires verification in the same API request, include the email_verified or phone_number_verified attribute, with a value of true. If you set the email_verified or phone_number_verified value for an email or phone_number attribute that requires verification to true, Amazon Cognito doesn’t send a verification message to your user",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "admin-user-global-sign-out",
      description:
        "Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call this operation with your administrative credentials when your user signs out of your app. This results in the following behavior.   Amazon Cognito no longer accepts token-authorized user operations that you authorize with a signed-out user's access tokens. For more information, see Using the Amazon Cognito user pools API and user pool endpoints. Amazon Cognito returns an Access Token has been revoked error when your app attempts to authorize a user pools API request with a revoked access token that contains the scope aws.cognito.signin.user.admin.   Amazon Cognito no longer accepts a signed-out user's ID token in a GetId  request to an identity pool with ServerSideTokenCheck enabled for its user pool IdP configuration in CognitoIdentityProvider.   Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh requests.   Other requests might be valid until your user's token expires. This operation doesn't clear the managed login session cookie. To clear the session for a user who signed in with managed login or the classic hosted UI, direct their browser session to the logout endpoint.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to sign out a user",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "associate-software-token",
      description:
        "Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA) for a user, with a unique private key that Amazon Cognito generates and returns in the API response. You can authorize an AssociateSoftwareToken request with either the user's access token, or a session string from a challenge response that you received from Amazon Cognito.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.  Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin. You can provide either an access token or a session ID in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--session",
          description:
            "The session identifier that maintains the state of authentication requests and challenge responses. In AssociateSoftwareToken, this is the session ID from a successful sign-in. You can provide either an access token or a session ID in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "cancel-point-in-time-recovery",
      description:
        "Cancels a point-in-time recovery of a user pool before Amazon Cognito applies any changes. You can cancel a recovery when its status is PREVIEW_GENERATING or PREVIEW_GENERATED. When you cancel a recovery, Amazon Cognito discards the recovery preview, resumes write operations in the user pool, and sets the status of the recovery to PREVIEW_CANCELLED. Your user pool data doesn't change. You can't cancel a recovery after you start it with a request.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the recovery that you want to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-id",
          description:
            "The ID of the recovery that you want to cancel. Amazon Cognito returns this ID in the response to an InitiatePointInTimeRecovery request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "change-password",
      description:
        "Changes the password for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--previous-password",
          description:
            "The user's previous password. Required if the user has a password. If the user has no password and only signs in with passwordless authentication options, you can omit this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--proposed-password",
          description:
            "A new password that you prompted the user to enter in your application",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose password you want to change",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "complete-web-authn-registration",
      description:
        "Completes registration of a passkey authenticator for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--credential",
          description:
            "A RegistrationResponseJSON public-key credential response from the user's passkey provider",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "confirm-device",
      description:
        "Confirms a device that a user wants to remember. A remembered device is a \"Remember me on this device\" option for user pools that perform authentication with the device key of a trusted device in the back end, instead of a user-provided MFA code. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description:
            "The unique identifier, or device key, of the device that you want to update the status for",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-secret-verifier-config",
          description: "The configuration of the device secret verifier",
          args: {
            name: "structure",
          },
        },
        {
          name: "--device-name",
          description:
            "A friendly name for the device, for example MyMobilePhone",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "confirm-forgot-password",
      description:
        "This public API operation accepts a confirmation code that Amazon Cognito sent to a user and accepts a new password for that user.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--client-id",
          description:
            "The ID of the app client where the user wants to reset their password. This parameter is an identifier of the client application that users are resetting their password from, but this operation resets users' irrespective of the app clients they sign in to",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about SecretHash, see Computing secret hash values",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirmation-code",
          description:
            "The confirmation code that your user pool delivered when your user requested to reset their password",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description: "The new password that your user wants to set",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests. For more information, see Collecting data for threat protection in applications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "confirm-sign-up",
      description:
        "Confirms the account of a new user. This public API operation submits a code that Amazon Cognito sent to your user when they signed up in your user pool. After your user enters their code, they confirm ownership of the email address or phone number that they provided, and their user account becomes active. Depending on your user pool configuration, your users will receive their confirmation code in an email or SMS message. Local users who signed up in your user pool are the only type of user who can confirm sign-up with a code. Users who federate through an external identity provider (IdP) have already been confirmed by their IdP.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--client-id",
          description: "The ID of the app client associated with the user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about SecretHash, see Computing secret hash values",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirmation-code",
          description:
            "The confirmation code that your user pool sent in response to the SignUp request",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-alias-creation",
          description:
            "When true, forces user confirmation despite any existing aliases. Defaults to false. A value of true migrates the alias from an existing user to the new user if an existing user already has the phone number or email address as an alias. Say, for example, that an existing user has an email attribute of bob@example.com and email is an alias in your user pool. If the new user also has an email of bob@example.com and your ConfirmSignUp response sets ForceAliasCreation to true, the new user can sign in with a username of bob@example.com and the existing user can no longer do so. If false and an attribute belongs to an existing alias, this request returns an AliasExistsException error. For more information about sign-in aliases, see Customizing sign-in attributes",
        },
        {
          name: "--no-force-alias-creation",
          description:
            "When true, forces user confirmation despite any existing aliases. Defaults to false. A value of true migrates the alias from an existing user to the new user if an existing user already has the phone number or email address as an alias. Say, for example, that an existing user has an email attribute of bob@example.com and email is an alias in your user pool. If the new user also has an email of bob@example.com and your ConfirmSignUp response sets ForceAliasCreation to true, the new user can sign in with a username of bob@example.com and the existing user can no longer do so. If false and an attribute belongs to an existing alias, this request returns an AliasExistsException error. For more information about sign-in aliases, see Customizing sign-in attributes",
        },
        {
          name: "--analytics-metadata",
          description:
            "Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests. For more information, see Collecting data for threat protection in applications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--session",
          description:
            "The optional session ID from a SignUp API request. You can sign in a user directly from the sign-up process with the USER_AUTH authentication flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-group",
      description:
        "Creates a new group in the specified user pool. For more information about user pool groups, see Adding groups to a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--group-name",
          description:
            "A name for the group. This name must be unique in your user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to create a user group",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the group that you're creating",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) for the IAM role that you want to associate with the group. A group role primarily declares a preferred role for the credentials that you get from an identity pool. Amazon Cognito ID tokens have a cognito:preferred_role claim that presents the highest-precedence group that a user belongs to. Both ID and access tokens also contain a cognito:groups claim that list all the groups that a user is a member of",
          args: {
            name: "string",
          },
        },
        {
          name: "--precedence",
          description:
            "A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower Precedence values take precedence over groups with higher or null Precedence values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN is given in the user's tokens for the cognito:roles and cognito:preferred_role claims. Two groups can have the same Precedence value. If this happens, neither group takes precedence over the other. If two groups with the same Precedence have the same role ARN, that role is used in the cognito:preferred_role claim in tokens for users in each group. If the two groups have different role ARNs, the cognito:preferred_role claim isn't set in users' tokens. The default Precedence value is null. The maximum Precedence value is 2^31-1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-identity-provider",
      description:
        "Adds a configuration and trust relationship between a third-party identity provider (IdP) and a user pool. Amazon Cognito accepts sign-in with third-party identity providers through managed login and OIDC relying-party libraries. For more information, see Third-party IdP sign-in.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The Id of the user pool where you want to create an IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description:
            "The name that you want to assign to the IdP. You can pass the identity provider name in the identity_provider query parameter of requests to the Authorize endpoint to silently redirect to sign-in with the associated IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-type",
          description:
            "The type of IdP that you want to add. Amazon Cognito supports OIDC, SAML 2.0, Login With Amazon, Sign In With Apple, Google, and Facebook IdPs",
          args: {
            name: "string",
            suggestions: [
              "SAML",
              "Facebook",
              "Google",
              "LoginWithAmazon",
              "SignInWithApple",
              "OIDC",
            ],
          },
        },
        {
          name: "--provider-details",
          description:
            'The scopes, URLs, and identifiers for your external identity provider. The following examples describe the provider detail keys for each IdP type. These values and their schema are subject to change. Social IdP authorize_scopes values must match the values listed here.  OpenID Connect (OIDC)  Amazon Cognito accepts the following elements when it can\'t discover endpoint URLs from oidc_issuer: attributes_url, authorize_url, jwks_uri, token_url. Create or update request: "ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" }  Describe response: "ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "attributes_url_add_attributes": "false", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" }   SAML  Create or update request with Metadata URL: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256" }  Create or update request with Metadata file: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm": "rsa-sha256" }  The value of MetadataFile must be the plaintext metadata document with all quote (") characters escaped by backslashes. Describe response: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256", "SLORedirectBindingURI": "https://auth.example.com/slo/saml", "SSORedirectBindingURI": "https://auth.example.com/sso/saml" }   LoginWithAmazon  Create or update request: "ProviderDetails": { "authorize_scopes": "profile postal_code", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret"  Describe response: "ProviderDetails": { "attributes_url": "https://api.amazon.com/user/profile", "attributes_url_add_attributes": "false", "authorize_scopes": "profile postal_code", "authorize_url": "https://www.amazon.com/ap/oa", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "POST", "token_url": "https://api.amazon.com/auth/o2/token" }   Google  Create or update request: "ProviderDetails": { "authorize_scopes": "email profile openid", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret" }  Describe response: "ProviderDetails": { "attributes_url": "https://people.googleapis.com/v1/people/me?personFields=", "attributes_url_add_attributes": "true", "authorize_scopes": "email profile openid", "authorize_url": "https://accounts.google.com/o/oauth2/v2/auth", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret", "oidc_issuer": "https://accounts.google.com", "token_request_method": "POST", "token_url": "https://www.googleapis.com/oauth2/v4/token" }   SignInWithApple  Create or update request: "ProviderDetails": { "authorize_scopes": "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE", "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" }  Describe response: "ProviderDetails": { "attributes_url_add_attributes": "false", "authorize_scopes": "email name", "authorize_url": "https://appleid.apple.com/auth/authorize", "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer": "https://appleid.apple.com", "team_id": "2EXAMPLE", "token_request_method": "POST", "token_url": "https://appleid.apple.com/auth/token" }   Facebook  Create or update request: "ProviderDetails": { "api_version": "v17.0", "authorize_scopes": "public_profile, email", "client_id": "1example23456789", "client_secret": "provider-app-client-secret" }  Describe response: "ProviderDetails": { "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=", "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email", "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" }',
          args: {
            name: "map",
          },
        },
        {
          name: "--attribute-mapping",
          description:
            "A mapping of IdP attributes to standard and custom user pool attributes. Specify a user pool attribute as the key of the key-value pair, and the IdP attribute claim name as the value",
          args: {
            name: "map",
          },
        },
        {
          name: "--idp-identifiers",
          description:
            'An array of IdP identifiers, for example "IdPIdentifiers": [ "MyIdP", "MyIdP2" ]. Identifiers are friendly names that you can pass in the idp_identifier query parameter of requests to the Authorize endpoint to silently redirect to sign-in with the associated IdP. Identifiers in a domain format also enable the use of email-address matching with SAML providers',
          args: {
            name: "list",
          },
        },
        {
          name: "--acr-mapping",
          description:
            "A mapping between the authentication context class reference (ACR) levels of your user pool and the ACR values of the external OpenID Connect (OIDC) identity provider (IdP). The map is keyed by level, from Level1 through Level4, and each value is the ACR value that the IdP uses for the corresponding level. Amazon Cognito uses this mapping to translate a requested user pool ACR level to the value that the IdP expects, and to map an ACR value that the IdP returns back to a user pool level. When the IdP returns an ACR value that isn't mapped, Amazon Cognito resolves it to the lowest level. Only OIDC IdPs support ACR mapping. Setting AcrMapping is available in all feature plans. It isn't restricted to the Essentials or Plus feature plan",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-managed-login-branding",
      description:
        "Creates a new set of branding settings for a user pool style and associates it with an app client. This operation is the programmatic option for the creation of a new style in the branding editor. Provides values for UI customization in a Settings JSON object and image files in an Assets array. To send the JSON object Document type parameter in Settings, you might need to update to the most recent version of your Amazon Web Services SDK. To create a new style with default settings, set UseCognitoProvidedValues to true and don't provide values for any other options.  This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to create a new branding style",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client that you want to create the branding style for. Each style is linked to an app client until you delete it",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-cognito-provided-values",
          description:
            "When true, applies the default branding style options. These default options are managed by Amazon Cognito. You can modify them later in the branding editor. When you specify true for this option, you must also omit values for Settings and Assets in the request",
        },
        {
          name: "--no-use-cognito-provided-values",
          description:
            "When true, applies the default branding style options. These default options are managed by Amazon Cognito. You can modify them later in the branding editor. When you specify true for this option, you must also omit values for Settings and Assets in the request",
        },
        {
          name: "--settings",
          description:
            "A JSON file, encoded as a Document type, with the the settings that you want to apply to your style. The following components are not currently implemented and reserved for future use:    signUp     instructions     sessionTimerDisplay     languageSelector (for localization, see Managed login localization)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--assets",
          description:
            "An array of image files that you want to apply to functions like backgrounds, logos, and icons. Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-resource-server",
      description:
        "Creates a new OAuth2.0 resource server and defines custom scopes within it. Resource servers are associated with custom scopes and machine-to-machine (M2M) authorization. For more information, see Access control with resource servers.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to create a resource server",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "A unique resource server identifier for the resource server. The identifier can be an API friendly name like solar-system-data. You can also set an API URL like https://solar-system-data-api.example.com as your identifier. Amazon Cognito represents scopes in the access token in the format $resource-server-identifier/$scope. Longer scope-identifier strings increase the size of your access tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A friendly name for the resource server",
          args: {
            name: "string",
          },
        },
        {
          name: "--scopes",
          description:
            "A list of custom scopes. Each scope is a key-value map with the keys ScopeName and ScopeDescription. The name of a custom scope is a combination of ScopeName and the resource server Name in this request, for example MyResourceServerName/MyScopeName",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-terms",
      description:
        "Creates terms documents for the requested app client. When Terms and conditions and Privacy policy documents are configured, the app client displays links to them in the sign-up page of managed login for the app client. You can provide URLs for terms documents in the languages that are supported by managed login localization. Amazon Cognito directs users to the terms documents for their current language, with fallback to default if no document exists for the language. Each request accepts one type of terms document and a map of language-to-link for that document type. You must provide both types of terms documents in at least one language before Amazon Cognito displays your terms documents. Supply each type in separate requests. For more information, see Terms documents.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to create terms documents",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client where you want to create terms documents. Must be an app client in the requested user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--terms-name",
          description:
            "A friendly name for the document that you want to create in the current request. Must begin with terms-of-use or privacy-policy as identification of the document type. Provide URLs for both terms-of-use and privacy-policy in separate requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--terms-source",
          description:
            "This parameter is reserved for future use and currently accepts only one value",
          args: {
            name: "string",
            suggestions: ["LINK"],
          },
        },
        {
          name: "--enforcement",
          description:
            "This parameter is reserved for future use and currently accepts only one value",
          args: {
            name: "string",
            suggestions: ["NONE"],
          },
        },
        {
          name: "--links",
          description:
            'A map of URLs to languages. For each localized language that will view the requested TermsName, assign a URL. A selection of cognito:default displays for all languages that don\'t have a language-specific URL. For example, "cognito:default": "https://terms.example.com", "cognito:spanish": "https://terms.example.com/es"',
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-user-import-job",
      description:
        "Creates a user import job. You can import users into user pools from a comma-separated values (CSV) file without adding Amazon Cognito MAU costs to your Amazon Web Services bill.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--job-name",
          description: "A friendly name for the user import job",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that you want to import users into",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-watch-logs-role-arn",
          description:
            "You must specify an IAM role that has permission to log import-job results to Amazon CloudWatch Logs. This parameter is the ARN of that role",
          args: {
            name: "string",
          },
        },
        {
          name: "--password-hashing-algorithm",
          description:
            "The password hashing algorithm used to generate the hashes in the CSV file for this import job. Valid values: BCRYPT | SCRYPT | ARGON2ID | PBKDF2_SHA256",
          args: {
            name: "string",
            suggestions: ["BCRYPT", "SCRYPT", "ARGON2ID", "PBKDF2_SHA256"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-user-pool",
      description:
        "Creates a new Amazon Cognito user pool. This operation sets basic and advanced configuration options.  If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--pool-name",
          description: "A friendly name for your user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--policies",
          description:
            "The password policy and sign-in policy in the user pool. The password policy sets options like password complexity requirements and password history. The sign-in policy sets the options available to applications in choice-based authentication",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "When active, DeletionProtection prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature. When you try to delete a protected user pool in a DeleteUserPool API request, Amazon Cognito returns an InvalidParameterException error. To delete a protected user pool, send a new DeleteUserPool request after you deactivate deletion protection in an UpdateUserPool API request",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "INACTIVE"],
          },
        },
        {
          name: "--lambda-config",
          description:
            "A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of authentication operations. Triggers can modify the outcome of the operations that invoked them",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-verified-attributes",
          description:
            "The attributes that you want your user pool to automatically verify. For more information, see Verifying contact information at sign-up",
          args: {
            name: "list",
          },
        },
        {
          name: "--alias-attributes",
          description:
            "Attributes supported as an alias for this user pool. For more information about alias attributes, see Customizing sign-in attributes",
          args: {
            name: "list",
          },
        },
        {
          name: "--username-attributes",
          description:
            "Specifies whether a user can use an email address or phone number as a username when they sign up. For more information, see Customizing sign-in attributes",
          args: {
            name: "list",
          },
        },
        {
          name: "--sms-verification-message",
          description: "This parameter is no longer used",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-message",
          description: "This parameter is no longer used",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-subject",
          description: "This parameter is no longer used",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-message-template",
          description:
            "The template for the verification message that your user pool delivers to users who set an email address or phone number attribute. Set the email message type that corresponds to your DefaultEmailOption selection. For CONFIRM_WITH_LINK, specify an EmailMessageByLink and leave EmailMessage blank. For CONFIRM_WITH_CODE, specify an EmailMessage and leave EmailMessageByLink blank. When you supply both parameters with either choice, Amazon Cognito returns an error",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-authentication-message",
          description:
            "The contents of the SMS message that your user pool sends to users in SMS OTP and MFA authentication",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa-configuration",
          description:
            "Sets multi-factor authentication (MFA) to be on, off, or optional. When ON, all users must set up MFA before they can sign in. When OPTIONAL, your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose OPTIONAL. When MfaConfiguration is OPTIONAL, managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor. The CreateUserPool operation supports only SMS MFA configuration. If you set MfaConfiguration to either of these values, include an SmsConfiguration in the same request:    ON – Requires MFA for all users    OPTIONAL – Makes MFA optional for each user   If you omit SmsConfiguration, the operation returns an InvalidParameterException. To configure TOTP or email MFA, use the SetUserPoolMfaConfig operation. You can also use SetUserPoolMfaConfig to add MFA factors later",
          args: {
            name: "string",
            suggestions: ["OFF", "ON", "OPTIONAL"],
          },
        },
        {
          name: "--user-attribute-update-settings",
          description:
            "The settings for updates to user attributes. These settings include the property AttributesRequireVerificationBeforeUpdate, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see  Verifying updates to email addresses and phone numbers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--device-configuration",
          description:
            'The device-remembering configuration for a user pool. Device remembering or device tracking is a "Remember me on this device" option for user pools that perform authentication with the device key of a trusted device in the back end, instead of a user-provided MFA code. For more information about device authentication, see Working with user devices in your user pool. A null value indicates that you have deactivated device remembering in your user pool.  When you provide a value for any DeviceConfiguration field, you activate the Amazon Cognito device-remembering feature. For more information, see Working with devices',
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-configuration",
          description:
            "The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-configuration",
          description:
            "The settings for your Amazon Cognito user pool to send SMS messages with Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account. For more information see SMS message settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-tags",
          description:
            "The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria",
          args: {
            name: "map",
          },
        },
        {
          name: "--admin-create-user-config",
          description:
            "The configuration for administrative creation of users. Includes the template for the invitation message for new users, the duration of temporary passwords, and permitting self-service sign-up",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema",
          description:
            "An array of attributes for the new user pool. You can add custom attributes and modify the properties of default attributes. The specifications in this parameter set the required attributes in your user pool. For more information, see Working with user attributes",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-pool-add-ons",
          description:
            "Contains settings for activation of threat protection, including the operating mode and additional authentication types. To log user security information but take no action, set to AUDIT. To configure automatic security responses to potentially unwanted traffic to your user pool, set to ENFORCED. For more information, see Adding advanced security to a user pool. To activate this setting, your user pool must be on the  Plus tier",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dcr-configuration",
          description:
            "The dynamic client registration configuration for the user pool. With dynamic client registration, applications can register their own app clients at runtime through the registration endpoint of your user pool domain. To activate this setting, your user pool must be in the  Essentials tier or higher",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username-configuration",
          description:
            "Sets the case sensitivity option for sign-in usernames. When CaseSensitive is false (case insensitive), users can sign in with any combination of capital and lowercase letters. For example, username, USERNAME, or UserName, or for email, email@example.com or EMaiL@eXamplE.Com. For most use cases, set case sensitivity to false as a best practice. When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in case as the same user, and prevents a case variation from being assigned to the same attribute for a different user. When CaseSensitive is true (case sensitive), Amazon Cognito interprets USERNAME and UserName as distinct users. This configuration is immutable after you set it",
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-recovery-setting",
          description:
            "The available verified method a user can use to recover their password when they call ForgotPassword. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. Email MFA is also disqualifying for account recovery with email. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred over email. As a best practice, configure both verified_email and verified_phone_number, with one having a higher priority than the other",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-tier",
          description:
            "The user pool feature plan, or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to ESSENTIALS",
          args: {
            name: "string",
            suggestions: ["LITE", "ESSENTIALS", "PLUS"],
          },
        },
        {
          name: "--key-configuration",
          description:
            "The key configuration for the user pool. Specifies the key type and KMS key ARN for encryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--issuer-configuration",
          description:
            "The issuer configuration for the user pool. Specifies the issuer type for token generation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--acr-configuration",
          description:
            "The custom names for the authentication context class reference (ACR) levels in your user pool. Amazon Cognito defines four fixed ACR levels that represent increasing authentication assurance. The combination of authentication factors that satisfies each level is fixed and you can't change it. With this configuration, you customize only the URI name that Amazon Cognito reports for each level in the acr token claim. You can override a subset of the levels. By default, the levels are named urn:cognito:loa:1 through urn:cognito:loa:4, and Amazon Cognito applies the default name to any level that you don't specify. Each name must be unique across all four levels, including any default names that apply to levels you don't override. A name can contain any character that is valid in a URL or a URN. Configuring custom ACR level names requires the Essentials or Plus feature plan. To activate this setting, your user pool must be in the  Essentials tier or higher",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-user-pool-client",
      description:
        "Creates an app client in a user pool. This operation sets basic and advanced configuration options. Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't available for your client until after you apply a branding style.  If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to create an app client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-name",
          description:
            "A friendly name for the app client that you want to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-secret",
          description:
            "When true, generates a client secret for the app client. Client secrets are used with server-side and machine-to-machine applications. Client secrets are automatically generated; you can't specify a secret value. For more information, see App client types",
        },
        {
          name: "--no-generate-secret",
          description:
            "When true, generates a client secret for the app client. Client secrets are used with server-side and machine-to-machine applications. Client secrets are automatically generated; you can't specify a secret value. For more information, see App client types",
        },
        {
          name: "--client-secret",
          description:
            "A custom client secret that you want to use for the app client. You cannot specify both GenerateSecret as true and provide a ClientSecret value",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-token-validity",
          description:
            "The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for RefreshTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set RefreshTokenValidity as 10 and TokenValidityUnits as days, your user can refresh their session and retrieve new access and ID tokens for 10 days. The default time unit for RefreshTokenValidity in an API request is days. You can't set RefreshTokenValidity to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days",
          args: {
            name: "integer",
          },
        },
        {
          name: "--access-token-validity",
          description:
            "The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for AccessTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set AccessTokenValidity to 10 and TokenValidityUnits to hours, your user can authorize access with their access token for 10 hours. The default time unit for AccessTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour",
          args: {
            name: "integer",
          },
        },
        {
          name: "--id-token-validity",
          description:
            "The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for IdTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set IdTokenValidity as 10 and TokenValidityUnits as hours, your user can authenticate their session with their ID token for 10 hours. The default time unit for IdTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour",
          args: {
            name: "integer",
          },
        },
        {
          name: "--token-validity-units",
          description:
            "The units that validity times are represented in. The default unit for refresh tokens is days, and the default for ID and access tokens are hours",
          args: {
            name: "structure",
          },
        },
        {
          name: "--read-attributes",
          description:
            "The list of user attributes that you want your app client to have read access to. After your user authenticates in your app, their access token authorizes them to read their own attribute value for any attribute in this list. When you don't specify the ReadAttributes for your app client, your app can read the values of email_verified, phone_number_verified, and the standard attributes of your user pool. When your user pool app client has read access to these default attributes, ReadAttributes doesn't return any information. Amazon Cognito only populates ReadAttributes in the API response if you have specified your own custom set of read attributes",
          args: {
            name: "list",
          },
        },
        {
          name: "--write-attributes",
          description:
            "The list of user attributes that you want your app client to have write access to. After your user authenticates in your app, their access token authorizes them to set or modify their own attribute value for any attribute in this list. When you don't specify the WriteAttributes for your app client, your app can write the values of the Standard attributes of your user pool. When your user pool has write access to these default attributes, WriteAttributes doesn't return any information. Amazon Cognito only populates WriteAttributes in the API response if you have specified your own custom set of write attributes. If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see Specifying IdP Attribute Mappings for Your user pool",
          args: {
            name: "list",
          },
        },
        {
          name: "--explicit-auth-flows",
          description:
            "The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.  If you don't specify a value for ExplicitAuthFlows, your app client supports ALLOW_REFRESH_TOKEN_AUTH, ALLOW_USER_SRP_AUTH, and ALLOW_CUSTOM_AUTH.   The values for authentication flow options include the following.    ALLOW_USER_AUTH: Enable selection-based sign-in with USER_AUTH. This setting covers username-password, secure remote password (SRP), passwordless, and passkey authentication. This authentiation flow can do username-password and SRP authentication without other ExplicitAuthFlows permitting them. For example users can complete an SRP challenge through USER_AUTH without the flow USER_SRP_AUTH being active for the app client. This flow doesn't include CUSTOM_AUTH.  To activate this setting, your user pool must be in the  Essentials tier or higher.    ALLOW_ADMIN_USER_PASSWORD_AUTH: Enable admin based user password authentication flow ADMIN_USER_PASSWORD_AUTH. This setting replaces the ADMIN_NO_SRP_AUTH setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.    ALLOW_CUSTOM_AUTH: Enable Lambda trigger based authentication.    ALLOW_USER_PASSWORD_AUTH: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.    ALLOW_USER_SRP_AUTH: Enable SRP-based authentication.    ALLOW_REFRESH_TOKEN_AUTH: Enable authflow to refresh tokens.    ALLOW_TOKEN_EXCHANGE_IMPERSONATION – Use this flow to request GetDerivedToken token exchanges without an ActorToken. The issued token represents the subject user directly.    ALLOW_TOKEN_EXCHANGE_DELEGATION – Use this flow to request GetDerivedToken token exchanges that include an ActorToken. The issued token carries an act claim that identifies the intermediary acting on the behalf of the subject.   In some environments, you will see the values ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, or USER_PASSWORD_AUTH. You can't assign these legacy ExplicitAuthFlows values to user pool clients at the same time as values that begin with ALLOW_, like ALLOW_USER_SRP_AUTH",
          args: {
            name: "list",
          },
        },
        {
          name: "--supported-identity-providers",
          description:
            "A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: COGNITO, Facebook, Google, SignInWithApple, and LoginWithAmazon. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example MySAMLIdP or MyOIDCIdP. This parameter sets the IdPs that managed login will display on the login page for your app client. The removal of COGNITO from this list doesn't prevent authentication operations for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent SDK-based authentication is to block access with a WAF rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--callback-urls",
          description:
            "A list of allowed redirect, or callback, URLs for managed login authentication. These URLs are the paths where you want to send your users' browsers after they complete authentication with managed login or a third-party IdP. Typically, callback URLs are the home of an application that uses OAuth or OIDC libraries to process authentication outcomes. A redirect URI must meet the following requirements:   Be an absolute URI.   Be registered with the authorization server. Amazon Cognito doesn't accept authorization requests with redirect_uri values that aren't in the list of CallbackURLs that you provide in this parameter.   Not include a fragment component.   See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP except for callback URLs to http://localhost, http://127.0.0.1 and http://[::1]. These callback URLs are for testing purposes only. You can specify custom TCP ports for your callback URLs. App callback URLs such as myapp://example are also supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--logout-urls",
          description:
            'A list of allowed logout URLs for managed login authentication. When you pass logout_uri and client_id parameters to /logout, Amazon Cognito signs out your user and redirects them to the logout URL. This parameter describes the URLs that you want to be the permitted targets of logout_uri. A typical use of these URLs is when a user selects "Sign out" and you redirect them to your public homepage. For more information, see Logout endpoint',
          args: {
            name: "list",
          },
        },
        {
          name: "--default-redirect-uri",
          description:
            "The default redirect URI. In app clients with one assigned IdP, replaces redirect_uri in authentication requests. Must be in the CallbackURLs list",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-o-auth-flows",
          description:
            "The OAuth grant types that you want your app client to generate for clients in managed login authentication. To create an app client that generates client credentials grants, you must add client_credentials as the only allowed OAuth flow.  code  Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the /oauth2/token endpoint.  implicit  Issue the access token, and the ID token when scopes like openid and profile are requested, directly to your user.  client_credentials  Issue the access token from the /oauth2/token endpoint directly to a non-person user, authorized by a combination of the client ID and client secret",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-scopes",
          description:
            "The OAuth, OpenID Connect (OIDC), and custom scopes that you want to permit your app client to authorize access with. Scopes govern access control to user pool self-service API operations, user data from the userInfo endpoint, and third-party APIs. Scope values include phone, email, openid, and profile. The aws.cognito.signin.user.admin scope authorizes user self-service operations. Custom scopes with resource servers authorize access to external APIs",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true to use OAuth 2.0 authorization server features in your app client. This parameter must have a value of true before you can configure the following features in your app client.    CallBackURLs: Callback URLs.    LogoutURLs: Sign-out redirect URLs.    AllowedOAuthScopes: OAuth 2.0 scopes.    AllowedOAuthFlows: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.   To use authorization server features, configure one of these features in the Amazon Cognito console or set AllowedOAuthFlowsUserPoolClient to true in a CreateUserPoolClient or UpdateUserPoolClient API request. If you don't set a value for AllowedOAuthFlowsUserPoolClient in a request with the CLI or SDKs, it defaults to false. When false, only SDK-based API sign-in is permitted",
        },
        {
          name: "--no-allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true to use OAuth 2.0 authorization server features in your app client. This parameter must have a value of true before you can configure the following features in your app client.    CallBackURLs: Callback URLs.    LogoutURLs: Sign-out redirect URLs.    AllowedOAuthScopes: OAuth 2.0 scopes.    AllowedOAuthFlows: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.   To use authorization server features, configure one of these features in the Amazon Cognito console or set AllowedOAuthFlowsUserPoolClient to true in a CreateUserPoolClient or UpdateUserPoolClient API request. If you don't set a value for AllowedOAuthFlowsUserPoolClient in a request with the CLI or SDKs, it defaults to false. When false, only SDK-based API sign-in is permitted",
        },
        {
          name: "--analytics-configuration",
          description:
            "The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign. In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools might not have access to analytics or might be configurable with campaigns in the US East (N. Virginia) Region. For more information, see Using Amazon Pinpoint analytics",
          args: {
            name: "structure",
          },
        },
        {
          name: "--prevent-user-existence-errors",
          description:
            "When ENABLED, suppresses messages that might indicate a valid user exists when someone attempts sign-in. This parameters sets your preference for the errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to ENABLED and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to LEGACY, those APIs return a UserNotFoundException exception if the user doesn't exist in the user pool. Defaults to LEGACY",
          args: {
            name: "string",
            suggestions: ["LEGACY", "ENABLED"],
          },
        },
        {
          name: "--enable-token-revocation",
          description:
            "Activates or deactivates token revocation in the target app client. If you don't include this parameter, token revocation is automatically activated for the new user pool client",
        },
        {
          name: "--no-enable-token-revocation",
          description:
            "Activates or deactivates token revocation in the target app client. If you don't include this parameter, token revocation is automatically activated for the new user pool client",
        },
        {
          name: "--enable-propagate-additional-user-context-data",
          description:
            "When true, your application can include additional UserContextData in authentication requests. This data includes the IP address, and contributes to analysis by threat protection features. For more information about propagation of user context data, see Adding session data to API requests. If you don’t include this parameter, you can't send the source IP address to Amazon Cognito threat protection features. You can only activate EnablePropagateAdditionalUserContextData in an app client that has a client secret",
        },
        {
          name: "--no-enable-propagate-additional-user-context-data",
          description:
            "When true, your application can include additional UserContextData in authentication requests. This data includes the IP address, and contributes to analysis by threat protection features. For more information about propagation of user context data, see Adding session data to API requests. If you don’t include this parameter, you can't send the source IP address to Amazon Cognito threat protection features. You can only activate EnablePropagateAdditionalUserContextData in an app client that has a client secret",
        },
        {
          name: "--auth-session-validity",
          description:
            "Amazon Cognito creates a session token for each API request in an authentication flow. AuthSessionValidity is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires",
          args: {
            name: "integer",
          },
        },
        {
          name: "--refresh-token-rotation",
          description:
            "The configuration of your app client for refresh token rotation. When enabled, your app client issues new ID, access, and refresh tokens when users renew their sessions with refresh tokens. When disabled, token refresh issues only ID and access tokens",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-user-pool-domain",
      description:
        "A user pool domain hosts managed login, an authorization server and web server for authentication in your application. This operation creates a new user pool prefix domain or custom domain and sets the managed login branding version. Set the branding version to 1 for hosted UI (classic) or 2 for managed login. When you choose a custom domain, you must provide an SSL certificate in the US East (N. Virginia) Amazon Web Services Region in your request. Your prefix domain might take up to one minute to take effect. Your custom domain is online within five minutes, but it can take up to one hour to distribute your SSL certificate. For more information about adding a custom domain to your user pool, see Configuring a user pool domain.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--domain",
          description:
            "The domain string. For custom domains, this is the fully-qualified domain name, such as auth.example.com. For prefix domains, this is the prefix alone, such as myprefix. A prefix value of myprefix for a user pool in the us-east-1 Region results in a domain of myprefix.auth.us-east-1.amazoncognito.com",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description: "The ID of the user pool where you want to add a domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-login-version",
          description:
            "The version of managed login branding that you want to apply to your domain. A value of 1 indicates hosted UI (classic) and a version of 2 indicates managed login. Managed login requires that your user pool be configured for any feature plan other than Lite. A ManagedLoginVersion value of 2 does not activate managed login pages for your app client. When you create an app client programmatically, your app client has no branding style. To use managed login, create a branding style using the CreateManagedLoginBranding operation. When you use the console, Amazon Cognito assigns a default branding style automatically. When you use the API or an SDK, you must create a branding style yourself",
          args: {
            name: "integer",
          },
        },
        {
          name: "--custom-domain-config",
          description:
            "The configuration for a custom domain. Configures your domain with an Certificate Manager certificate in the us-east-1 Region. Provide this parameter only if you want to use a custom domain for your user pool. Otherwise, you can omit this parameter and use a prefix domain instead. When you create a custom domain, the passkey RP ID defaults to the custom domain. If you had a prefix domain active, this will cause passkey integration for your prefix domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey integration working, you can explicitly set RP ID to the prefix domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--routing",
          description:
            "The configuration of routing for requests to the domain for replicas of a replicated user pool. The routing configuration is currently only supported for custom domains",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-user-pool-replica",
      description:
        "Creates a replica of an existing user pool in a specified Amazon Web Services Region. The replica enables multi-region replication for high availability and disaster recovery. To create a replica, you must have permissions to create user pools in the target Region.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool to replicate",
          args: {
            name: "string",
          },
        },
        {
          name: "--region-name",
          description:
            "The Amazon Web Services Region where you want to create the replica user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-tags",
          description:
            "A map of tags to assign to the replica user pool. Each tag consists of a key and an optional value, both of which you define. You can maintain tags independently on replica user pools",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-group",
      description:
        "Deletes a group from the specified user pool. When you delete a group, that group no longer contributes to users' cognito:preferred_group or cognito:groups claims, and no longer influence access-control decision that are based on group membership. For more information about user pool groups, see Adding groups to a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--group-name",
          description: "The name of the group that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to delete the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-identity-provider",
      description:
        "Deletes a user pool identity provider (IdP). After you delete an IdP, users can no longer sign in to your user pool through that IdP. For more information about user pool IdPs, see Third-party IdP sign-in.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to delete the identity provider",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The name of the IdP that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-managed-login-branding",
      description:
        "Deletes a managed login branding style. When you delete a style, you delete the branding association for an app client. When an app client doesn't have a style assigned, your managed login pages for that app client are nonfunctional until you create a new style or switch the domain branding version.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--managed-login-branding-id",
          description:
            "The ID of the managed login branding style that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the managed login branding style that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-resource-server",
      description:
        "Deletes a resource server. After you delete a resource server, users can no longer generate access tokens with scopes that are associate with that resource server. Resource servers are associated with custom scopes and machine-to-machine (M2M) authorization. For more information, see Access control with resource servers.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to delete the resource server",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The identifier of the resource server that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-terms",
      description:
        "Deletes the terms documents with the requested ID from your app client.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--terms-id",
          description: "The ID of the terms documents that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the terms documents that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-user",
      description:
        "Deletes the profile of the currently signed-in user. A deleted user profile can no longer be used to sign in and can't be restored. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-user-attributes",
      description:
        "Deletes attributes from the currently signed-in user. For example, your application can submit a request to this operation when a user wants to remove their birthdate attribute value. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-attribute-names",
          description:
            "An array of strings representing the user attribute names you want to delete. For custom attributes, you must prepend the custom: prefix to the attribute name, for example custom:department",
          args: {
            name: "list",
          },
        },
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-user-pool",
      description:
        "Deletes a user pool. After you delete a user pool, users can no longer sign in to any associated applications.  When you delete a user pool, it's no longer visible or operational in your Amazon Web Services account. Amazon Cognito retains deleted user pools in an inactive state for 14 days, then begins a cleanup process that fully removes them from Amazon Web Services systems. In case of accidental deletion, contact Amazon Web Services Support within 14 days for restoration assistance. Amazon Cognito begins full deletion of all resources from deleted user pools after 14 days. In the case of large user pools, the cleanup process might take significant additional time before all user data is permanently deleted",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-user-pool-client",
      description:
        "Deletes a user pool app client. After you delete an app client, users can no longer sign in to the associated application",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to delete the client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the user pool app client that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-user-pool-client-secret",
      description:
        "Deletes a specific client secret from a user pool app client. You cannot delete the last remaining secret for an app client",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that contains the app client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client from which you want to delete the secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-secret-id",
          description:
            "The unique identifier of the client secret you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-user-pool-domain",
      description:
        "Given a user pool ID and domain identifier, deletes a user pool domain. After you delete a user pool domain, your managed login pages and authorization server are no longer available",
      options: [
        {
          name: "--domain",
          description:
            "The domain that you want to delete. For custom domains, this is the fully-qualified domain name like auth.example.com. For Amazon Cognito prefix domains, this is the prefix alone, like myprefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to delete the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-user-pool-replica",
      description:
        "Deletes a secondary replica user pool. You can only delete replicas that are in the INACTIVE status. This operation must be called from the primary Region.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the replica to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--region-name",
          description:
            "The Amazon Web Services Region of the replica to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-web-authn-credential",
      description:
        "Deletes a registered passkey, or WebAuthn, authenticator for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--credential-id",
          description:
            "The unique identifier of the passkey that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-identity-provider",
      description:
        "Given a user pool ID and identity provider (IdP) name, returns details about the IdP",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that has the IdP that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description: "The name of the IdP that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-managed-login-branding",
      description:
        "Given the ID of a managed login branding style, returns detailed information about the style",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the managed login branding style that you want to get information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-login-branding-id",
          description:
            "The ID of the managed login branding style that you want to get more information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-merged-resources",
          description:
            "When true, returns values for branding options that are unchanged from Amazon Cognito defaults. When false or when you omit this parameter, returns only values that you customized in your branding style",
        },
        {
          name: "--no-return-merged-resources",
          description:
            "When true, returns values for branding options that are unchanged from Amazon Cognito defaults. When false or when you omit this parameter, returns only values that you customized in your branding style",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-managed-login-branding-by-client",
      description:
        "Given the ID of a user pool app client, returns detailed information about the style assigned to the app client",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the app client where you want more information about the managed login branding style",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client that's assigned to the branding style that you want more information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-merged-resources",
          description:
            "When true, returns values for branding options that are unchanged from Amazon Cognito defaults. When false or when you omit this parameter, returns only values that you customized in your branding style",
        },
        {
          name: "--no-return-merged-resources",
          description:
            "When true, returns values for branding options that are unchanged from Amazon Cognito defaults. When false or when you omit this parameter, returns only values that you customized in your branding style",
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-point-in-time-recovery",
      description:
        "Returns details about a point-in-time recovery of a user pool, including its status and the point in time that it restores the user pool to. After Amazon Cognito generates the recovery preview, the response also includes the number of entities that the recovery creates, updates, and deletes. Review the preview before you apply the recovery with a request or discard it with a request.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the recovery that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-id",
          description:
            "The ID of the recovery that you want to describe. Amazon Cognito returns this ID in the response to an InitiatePointInTimeRecovery request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-resource-server",
      description:
        "Describes a resource server. For more information about resource servers, see Access control with resource servers",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that hosts the resource server",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "A unique resource server identifier for the resource server. The identifier can be an API friendly name like solar-system-data. You can also set an API URL like https://solar-system-data-api.example.com as your identifier. Amazon Cognito represents scopes in the access token in the format $resource-server-identifier/$scope. Longer scope-identifier strings increase the size of your access tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-risk-configuration",
      description:
        "Given an app client or user pool ID where threat protection is configured, describes the risk configuration. This operation returns details about adaptive authentication, compromised credentials, and IP-address allow- and denylists. For more information about threat protection, see Threat protection",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool with the risk configuration that you want to inspect. You can apply default risk configuration at the user pool level and further customize it from user pool defaults at the app-client level. Specify ClientId to inspect client-level configuration, or UserPoolId to inspect pool-level configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client with the risk configuration that you want to inspect. You can apply default risk configuration at the user pool level and further customize it from user pool defaults at the app-client level. Specify ClientId to inspect client-level configuration, or UserPoolId to inspect pool-level configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-terms",
      description:
        "Returns details for the requested terms documents ID. For more information, see Terms documents.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--terms-id",
          description:
            "The ID of the terms documents that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the terms documents that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-terms-by-client",
      description:
        "Returns details for the terms documents that are associated with an app client, identified by the app client ID, user pool ID, and terms name. For more information, see Terms documents. To call DescribeTermsByClient, you must have the cognito-idp:DescribeTermsByClient Identity and Access Management (IAM) permission. An IAM policy that denies cognito-idp:DescribeTerms also denies requests to DescribeTermsByClient.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--client-id",
          description:
            "The ID of the app client that the terms documents are associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the terms documents that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--terms-name",
          description:
            "The name of the terms documents that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-user-import-job",
      description:
        "Describes a user import job. For more information about user CSV import, see Importing users from a CSV file",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that's associated with the import job",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description:
            "The Id of the user import job that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-user-pool",
      description:
        "Given a user pool ID, returns configuration information. This operation is useful when you want to inspect an existing user pool and programmatically replicate the configuration to another user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-user-pool-client",
      description:
        "Given an app client ID, returns configuration information. This operation is useful when you want to inspect an existing app client and programmatically replicate the configuration to another app client. For more information about app clients, see App clients.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the app client you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The ID of the app client that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "describe-user-pool-domain",
      description:
        "Given a user pool domain name, returns information about the domain configuration.  This operation doesn't return results when you query a prefix domain in a secondary Region. Prefix domains are Region-specific and can only be described in the Region where they were created. To describe a prefix domain for a replica user pool, make the request to the primary Region's endpoint.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--domain",
          description:
            "The domain that you want to describe. For custom domains, this is the fully-qualified domain name, such as auth.example.com. For Amazon Cognito prefix domains, this is the prefix alone, such as auth",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "forget-device",
      description:
        "Given a device key, deletes a remembered device as the currently signed-in user. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description:
            "The unique identifier, or device key, of the device that the user wants to forget",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "forgot-password",
      description:
        "Sends a password-reset confirmation code to the email address or phone number of the requested username. The message delivery method is determined by the user's available attributes and the AccountRecoverySetting configuration of the user pool. For the Username parameter, you can use the username or an email, phone, or preferred username alias. If neither a verified phone number nor a verified email exists, Amazon Cognito responds with an InvalidParameterException error . If your app client has a client secret and you don't provide a SECRET_HASH parameter, this API returns NotAuthorizedException.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--client-id",
          description:
            "The ID of the user pool app client associated with the current signed-in user",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about SecretHash, see Computing secret hash values",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests. For more information, see Collecting data for threat protection in applications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-csv-header",
      description:
        "Given a user pool ID, generates a comma-separated value (CSV) list populated with available user attributes in the user pool. This list is the header for the CSV file that determines the users in a user import job. Save the content of CSVHeader in the response as a .csv file and populate it with the usernames and attributes of users that you want to import. For more information about CSV user import, see Importing users from a CSV file.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that you want to import users into",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-client-token",
      description:
        "Issues an access token for machine-to-machine (M2M) authorization. Your app client provides its client ID and secret, and receives an access token that authorizes requests to your resource servers. To use this operation, you must configure the app client with a client secret and enable the ALLOW_CLIENT_TOKEN_AUTH authentication flow. The ALLOW_CLIENT_TOKEN_AUTH flow is mutually exclusive with user authentication flows. It must be the only authentication flow that you configure for the app client. For more information, see Scopes, M2M, and resource servers.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--client-id",
          description:
            "The ID of the app client that requests the access token. The app client must have a client secret and the ALLOW_CLIENT_TOKEN_AUTH authentication flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret",
          description: "An active secret for the app client",
          args: {
            name: "string",
          },
        },
        {
          name: "--scopes",
          description:
            "The custom scopes to authorize in the access token, in the format resource-server-identifier/scope-name. Each scope must belong to a resource server in your user pool. If you don't specify any scopes, Amazon Cognito authorizes the scopes that are configured for the app client",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-derived-token",
      description:
        "Exchanges an existing token for a new token that is scoped and audience-bound for a specific downstream service, following the OAuth 2.0 Token Exchange grant type. For more information about the OAuth 2.0 Token Exchange grant type, see RFC 8693 - OAuth 2.0 Token Exchange on the IETF website. Present a SubjectToken, the credential that you already hold, to receive a new token appropriate for calling a specific resource server or audience. If you also present an ActorToken that identifies an intermediary service, the issued token carries an act claim that identifies the intermediary, and downstream services can distinguish a user acting directly from an intermediary acting on the user's behalf. If you don't present an ActorToken, the issued token appears as if the user acted directly. To use this operation, you must have IAM credentials, or you must present the requesting app client's ClientId and, if the client has a secret, ClientSecret, in the request. The requesting app client must have ALLOW_TOKEN_EXCHANGE_IMPERSONATION or ALLOW_TOKEN_EXCHANGE_DELEGATION in its ExplicitAuthFlows (depending on whether you include an ActorToken), or the request fails",
      options: [
        {
          name: "--client-id",
          description:
            "The ID of the app client that requests the token exchange",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-secret",
          description:
            "The client secret of the requested app client, if the client has a secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--subject-token",
          description:
            "The token that you want to exchange for a new token. This is the credential that represents the identity of the party on behalf of whom the request is being made",
          args: {
            name: "string",
          },
        },
        {
          name: "--subject-token-type",
          description:
            "The type of the SubjectToken that you want to exchange. Valid values:    ACCESS_TOKEN – The subject token is an access token.    ID_TOKEN – The subject token is an ID token.    SAML2 – The subject token is a SAML 2.0 assertion",
          args: {
            name: "string",
            suggestions: ["ACCESS_TOKEN", "ID_TOKEN", "SAML2"],
          },
        },
        {
          name: "--subject-token-provider-name",
          description:
            "The name of the third-party identity provider that issued the SubjectToken, if the subject token isn't a Amazon Cognito token. Provide this value when your SubjectToken came from a SAML or OIDC provider that you registered with your user pool, so that Amazon Cognito can validate it against that provider's configuration. Omit this parameter for a Amazon Cognito ID or access token",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-token",
          description:
            "A token that identifies the intermediary service that is exchanging the token on behalf of the user. When you provide an ActorToken, the token that Amazon Cognito issues carries an act claim that identifies the intermediary, so that downstream services can distinguish a user acting directly from an intermediary acting on the user's behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--actor-token-type",
          description:
            "The type of the ActorToken that you provide. Required when you provide an ActorToken. Valid values:    ACCESS_TOKEN – The actor token is an access token.    ID_TOKEN – The actor token is an ID token.    SAML2 – The actor token is a SAML 2.0 assertion",
          args: {
            name: "string",
            suggestions: ["ACCESS_TOKEN", "ID_TOKEN", "SAML2"],
          },
        },
        {
          name: "--actor-token-provider-name",
          description:
            "The name of the third-party identity provider that issued the ActorToken, if the actor token isn't a Amazon Cognito token",
          args: {
            name: "string",
          },
        },
        {
          name: "--scopes",
          description:
            "The scopes that you want the new token to have. Amazon Cognito issues a token with the intersection of these requested scopes, the scopes of your SubjectToken, and the scopes that are allowed for the requesting app client. If you don't specify any scopes, Amazon Cognito issues a token with the same scopes as your SubjectToken",
          args: {
            name: "list",
          },
        },
        {
          name: "--audiences",
          description:
            "The logical name of the target service where you intend to use the issued token. You can't request both Audiences and Resources in the same request",
          args: {
            name: "list",
          },
        },
        {
          name: "--resources",
          description:
            "The identifier of a resource server in your user pool where you intend to use the issued token. You can't request both Resources and Audiences in the same request",
          args: {
            name: "list",
          },
        },
        {
          name: "--requested-token-type",
          description:
            "The type of token that you want Amazon Cognito to issue. Valid values:    ACCESS_TOKEN – Issues an access token.    ID_TOKEN – Issues an ID token.   Amazon Cognito can't issue a SAML assertion, so SAML2 isn't a valid value for this parameter",
          args: {
            name: "string",
            suggestions: ["ACCESS_TOKEN", "ID_TOKEN"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-device",
      description:
        "Given a device key, returns information about a remembered device for the current user. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--device-key",
          description:
            "The key of the device that you want to get information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-group",
      description:
        "Given a user pool ID and a group name, returns information about the user group.  For more information about user pool groups, see Adding groups to a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--group-name",
          description:
            "The name of the group that you want to get information about",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the group that you want to query",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-identity-provider-by-identifier",
      description:
        "Given the identifier of an identity provider (IdP), for example examplecorp, returns information about the user pool configuration for that IdP. For more information about IdPs, see Third-party IdP sign-in",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to get information about the IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--idp-identifier",
          description:
            "The identifier that you assigned to your user pool. The identifier is an alternative name for an IdP that is distinct from the IdP name. For example, an IdP with a name of MyIdP might have an identifier of the email domain example.com",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-log-delivery-configuration",
      description:
        "Given a user pool ID, returns the logging configuration. User pools can export message-delivery error and threat-protection activity logs to external Amazon Web Services services. For more information, see Exporting user pool logs.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that has the logging configuration that you want to view",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-provisioned-limit",
      description:
        "Returns the current provisioned limit for a specific API category.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--limit-definition",
          description:
            "The limit to retrieve. Specify the limit class and the attributes that identify the limit",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-signing-certificate",
      description:
        "Given a user pool ID, returns the signing certificate for SAML 2.0 federation. Issued certificates are valid for 10 years from the date of issue. Amazon Cognito issues and assigns a new signing certificate annually. This renewal process returns a new value in the response to GetSigningCertificate, but doesn't invalidate the original certificate. For more information, see Signing SAML requests.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to view the signing certificate",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-tokens-from-refresh-token",
      description:
        "Given a refresh token, issues new ID, access, and optionally refresh tokens for the user who owns the submitted token. This operation issues a new refresh token and invalidates the original refresh token after an optional grace period when refresh token rotation is enabled. If refresh token rotation is disabled, issues new ID and access tokens only",
      options: [
        {
          name: "--refresh-token",
          description:
            "A valid refresh token that can authorize the request for new tokens. When refresh token rotation is active in the requested app client, this token is invalidated after the request is complete and after an optional grace period",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The app client that issued the refresh token to the user who wants to request new tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-secret",
          description:
            "The client secret of the requested app client, if the client has a secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description:
            "When you enable device remembering, Amazon Cognito issues a device key that you can use for device authentication that bypasses multi-factor authentication (MFA). To implement GetTokensFromRefreshToken in a user pool with device remembering, you must capture the device key from the initial authentication request. If your application doesn't provide the key of a registered device, Amazon Cognito issues a new one. You must provide the confirmed device key in this request if device remembering is enabled in your user pool. For more information about device remembering, see Working with devices",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-ui-customization",
      description:
        "Given a user pool ID or app client, returns information about classic hosted UI branding that you applied, if any. Returns user-pool level branding information if no app client branding is applied, or if you don't specify an app client ID. Returns an empty object if you haven't applied hosted UI branding to either the client or the user pool. For more information, see Hosted UI (classic) branding",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that you want to query for branding settings",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client that you want to query for branding settings",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-user",
      description:
        "Gets user attributes and and MFA settings for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-user-attribute-verification-code",
      description:
        "Given an attribute name, sends a user attribute verification code for the specified attribute name to the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-name",
          description:
            "The name of the attribute that the user wants to verify, for example email",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-user-auth-factors",
      description:
        "Lists the authentication options for the currently signed-in user. Returns the following:   The user's multi-factor authentication (MFA) preferences.   The user's options for choice-based authentication with the USER_AUTH flow.   Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-user-pool-client-session-configuration",
      description:
        "Retrieves the session configuration for a user pool app client. If you have never called SetUserPoolClientSessionConfiguration for the app client, this operation returns the default SSO session maximum validity of 60 minutes",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that contains the app client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client where you want to retrieve the session configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-user-pool-mfa-config",
      description:
        "Given a user pool ID, returns configuration for sign-in with WebAuthn authenticators and for multi-factor authentication (MFA). This operation describes the following:   The WebAuthn relying party (RP) ID and user-verification settings.   The required, optional, or disabled state of MFA for all user pool users.   The message templates for email and SMS MFA.   The enabled or disabled state of time-based one-time password (TOTP) MFA.    Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to query WebAuthn and MFA configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-user-pool-session-configuration",
      description:
        "Retrieves the session tracking configuration for a user pool, including whether session tracking is enabled and the pool-wide maximum number of active token sessions for each user. If you have never called SetUserPoolSessionConfiguration for the user pool, this operation returns the default values: UserSessionTracking as DISABLED and a MaxPerUser value of 20",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to retrieve the session configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "global-sign-out",
      description:
        "Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call this operation when your user signs out of your app. This results in the following behavior.    Amazon Cognito no longer accepts token-authorized user operations that you authorize with a signed-out user's access tokens. For more information, see Using the Amazon Cognito user pools API and user pool endpoints. Amazon Cognito returns an Access Token has been revoked error when your app attempts to authorize a user pools API request with a revoked access token that contains the scope aws.cognito.signin.user.admin.   Amazon Cognito no longer accepts a signed-out user's ID token in a GetId  request to an identity pool with ServerSideTokenCheck enabled for its user pool IdP configuration in CognitoIdentityProvider.   Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh requests.   Other requests might be valid until your user's token expires. This operation doesn't clear the managed login session cookie. To clear the session for a user who signed in with managed login or the classic hosted UI, direct their browser session to the logout endpoint. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "initiate-auth",
      description:
        "Declares an authentication flow and initiates sign-in for a user in the Amazon Cognito user directory. Amazon Cognito might respond with an additional challenge or an AuthenticationResult that contains the outcome of a successful authentication. You can't sign in a user with a federated IdP with InitiateAuth. For more information, see Authentication.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--auth-flow",
          description:
            "The authentication flow that you want to initiate. Each AuthFlow has linked AuthParameters that you must submit. The following are some example flows.  USER_AUTH  The entry point for choice-based authentication with passwords, one-time passwords, and WebAuthn authenticators. Request a preferred authentication type or review available authentication types. From the offered authentication types, select one in a challenge response and then authenticate with that method in an additional challenge response. To activate this setting, your user pool must be in the  Essentials tier or higher.  USER_SRP_AUTH  Username-password authentication with the Secure Remote Password (SRP) protocol. For more information, see Use SRP password verification in custom authentication flow.  REFRESH_TOKEN_AUTH and REFRESH_TOKEN  Receive new ID and access tokens when you pass a REFRESH_TOKEN parameter with a valid refresh token as the value. For more information, see Using the refresh token.  CUSTOM_AUTH  Custom authentication with Lambda triggers. For more information, see Custom authentication challenge Lambda triggers.  USER_PASSWORD_AUTH  Client-side username-password authentication with the password sent directly in the request. For more information about client-side and server-side authentication, see SDK authorization models.    ADMIN_USER_PASSWORD_AUTH is a flow type of AdminInitiateAuth and isn't valid for InitiateAuth. ADMIN_NO_SRP_AUTH is a legacy server-side username-password flow and isn't valid for InitiateAuth",
          args: {
            name: "string",
            suggestions: [
              "USER_SRP_AUTH",
              "REFRESH_TOKEN_AUTH",
              "REFRESH_TOKEN",
              "CUSTOM_AUTH",
              "ADMIN_NO_SRP_AUTH",
              "USER_PASSWORD_AUTH",
              "ADMIN_USER_PASSWORD_AUTH",
              "USER_AUTH",
            ],
          },
        },
        {
          name: "--auth-parameters",
          description:
            "The authentication parameters. These are inputs corresponding to the AuthFlow that you're invoking. The following are some authentication flows and their parameters. Add a SECRET_HASH parameter if your app client has a client secret. Add DEVICE_KEY if you want to bypass multi-factor authentication with a remembered device.   USER_AUTH     USERNAME (required)    PREFERRED_CHALLENGE. If you don't provide a value for PREFERRED_CHALLENGE, Amazon Cognito responds with the AvailableChallenges parameter that specifies the available sign-in methods.    TARGET_ACR_VALUES. An optional, space-separated list of the authentication context class reference (ACR) level URIs that you want the user to reach. List the levels in priority order, from highest to lowest. Amazon Cognito attempts the highest-priority level that the user can satisfy, and falls back through the list. Amazon Cognito ignores any value that it doesn't recognize. If none of the requested values are valid, Amazon Cognito returns an error. Requesting step-up authentication with this parameter requires the Essentials or Plus feature plan. On a lower feature plan, InitiateAuth returns a FeatureUnavailableInTierException. USERNAME is required. When you provide an ACCESS_TOKEN, you must also provide TARGET_ACR_VALUES. Amazon Cognito returns an error if you provide an ACCESS_TOKEN without TARGET_ACR_VALUES. The USERNAME that you provide must match the user that the ACCESS_TOKEN was issued for. For more information about step-up authentication and how Amazon Cognito handles multi-factor authentication requirements, see Step-up authentication with ACR and AMR in the Amazon Cognito Developer Guide.    MAX_AGE. An optional integer that sets the maximum number of seconds allowed since the user last authenticated. If the user's most recent authentication is older than this value, Amazon Cognito discards the authentication-methods credit from any access token that you provide and processes the request as a fresh authentication toward the target level. The access token itself remains valid.    USER_SRP_AUTH     USERNAME (required)    SRP_A (required)    USER_PASSWORD_AUTH     USERNAME (required)    PASSWORD (required)    REFRESH_TOKEN_AUTH/REFRESH_TOKEN     REFRESH_TOKEN(required)    CUSTOM_AUTH     USERNAME (required)    ChallengeName: SRP_A (when doing SRP authentication before custom challenges)    SRP_A: (An SRP_A value) (when doing SRP authentication before custom challenges)     For more information about SECRET_HASH, see Computing secret hash values. For information about DEVICE_KEY, see Working with user devices in your user pool",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide. The ClientMetadata value is passed as input to the functions for only the following triggers:   Pre signup   Pre authentication   User migration   This request also invokes the functions for the following triggers, but doesn't pass ClientMetadata:   Post authentication   Custom message   Pre token generation   Create auth challenge   Define auth challenge   Custom email sender   Custom SMS sender    When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client that your user wants to sign in to",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests. For more information, see Collecting data for threat protection in applications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--session",
          description:
            "The optional session ID from a ConfirmSignUp API request. You can sign in a user directly from the sign-up process with the USER_AUTH authentication flow. When you pass the session ID to InitiateAuth, Amazon Cognito assumes the SMS or email message one-time verification password from ConfirmSignUp as the primary authentication factor. You're not required to submit this code a second time. This option is only valid for users who have confirmed their sign-up and are signing in for the first time within the authentication flow session duration of the session ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "initiate-point-in-time-recovery",
      description:
        "Initiates a point-in-time recovery of a user pool to a time in the past that you specify. This operation is the first step of a recovery and doesn't change your user pool data. Amazon Cognito pauses write operations in the user pool and generates a recovery preview when capacity is available in the Amazon Web Services Region, so the preview might not be available immediately. The preview shows the number of entities that the recovery creates, updates, and deletes. To check the status of the recovery and review the preview, make a request. When the status is PREVIEW_GENERATED, apply the recovery with a request or discard it with a request. The time that it takes to generate the recovery preview doesn't depend on the size of your user pool.  Point-in-time recovery is a disaster recovery feature. Use it to recover from accidental or unauthorized changes that affect your user data, for example the deletion or corruption of many users. Don't use point-in-time recovery to remove users that were created recently or to revert changes to individual users. To delete or update individual users, use operations like and .  While a recovery is in progress, Amazon Cognito blocks operations that write to the user pool, for example user sign-up, user creation, and attribute updates. Sign-in and read operations continue to work, with the following exceptions.   Users who must set a new password, set up MFA, or respond to a TOTP MFA challenge can't complete sign-in. Sign-in with the NEW_PASSWORD_REQUIRED, MFA_SETUP, and SOFTWARE_TOKEN_MFA challenges fails until the recovery ends.   Federated users can sign in only if they have previously signed in to the user pool and their attributes from the external identity provider haven't changed.   You can't create or start user import jobs. Start your import jobs after the recovery ends.   If you don't start or cancel the recovery within 24 hours after you initiate it, the recovery preview expires. Amazon Cognito then resumes write operations and doesn't change your user pool data. The 24-hour period includes the time that Amazon Cognito waits for available capacity. A point-in-time recovery restores user data, including user profiles and attributes, group memberships, passwords, MFA settings, and passkeys. It doesn't restore user pool configuration, for example app clients, the attribute schema, encryption settings, or multi-Region replication settings. Users who changed their password after the recovery point keep their current password. The following requirements and limits apply to point-in-time recovery.   Your user pool must be on the Essentials or Plus feature plan. With the Essentials feature plan, you can recover your user pool to a point in time up to 1 day in the past. With the Plus feature plan, you can recover up to 14 days in the past. Your user pool must have been on the required feature plan at the recovery point. For example, to recover to a point in time 14 days ago, your user pool must have been on the Plus feature plan for the past 14 days.   The recovery point must be at least 15 minutes in the past and can't be earlier than the creation time of the user pool.   A user pool can have only one active recovery at a time.   An Amazon Web Services account can have up to five active recoveries at a time across all of its user pools. An organization in Amazon Web Services Organizations can have up to ten active recoveries at a time across all of its accounts.   You can complete one recovery of a user pool in a 24-hour period.   You can create up to three recovery previews of a user pool, ten recovery previews in an Amazon Web Services account, and 15 recovery previews in an organization in Amazon Web Services Organizations in a 24-hour period. You can create up to ten recovery previews of a user pool in a 30-day period.   You can't initiate a recovery while a user import job is in progress in your user pool. Wait for the import job to complete, or stop it with a request, and then initiate the recovery.   In a user pool with multi-Region replication, you can initiate a recovery only in the primary Amazon Web Services Region, and only after replication is complete.   If your user pool uses a customer managed key in KMS for encryption, the key must remain enabled and accessible to Amazon Cognito for the duration of the recovery.   Some user pools don't support point-in-time recovery, for example some older user pools and user pools that contain user data with characters or formats that point-in-time recovery doesn't support. If your user pool doesn't support it, Amazon Cognito returns an error when you initiate a recovery. To get help with this limitation, contact Amazon Web Services Support.    Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that you want to recover",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-timestamp",
          description:
            "The point in time that you want to recover your user pool to. Amazon Cognito reverts changes to user data that occurred after this time. The recovery point must be at least 15 minutes in the past and within the recovery period of your user pool feature plan: up to 1 day in the past with the Essentials feature plan, or up to 14 days in the past with the Plus feature plan",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-devices",
      description:
        "Lists the devices that Amazon Cognito has registered to the currently signed-in user. For more information about device authentication, see Working with user devices in your user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of devices that you want Amazon Cognito to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-groups",
      description:
        "Given a user pool ID, returns user pool groups and their details.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to list user groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of groups that you want Amazon Cognito to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-identity-providers",
      description:
        "Given a user pool ID, returns information about configured identity providers (IdPs). For more information about IdPs, see Third-party IdP sign-in.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool where you want to list IdPs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of IdPs that you want Amazon Cognito to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-point-in-time-recoveries",
      description:
        "Lists the point-in-time recoveries of a user pool, including the active recovery and past recoveries. The response lists the most recent recoveries first and doesn't include recovery previews. To get the recovery preview of a recovery, make a request.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to list point-in-time recoveries",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of recoveries that you want Amazon Cognito to return in the response. Valid values are 1 through 60. The default value is 60",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-resource-servers",
      description:
        "Given a user pool ID, returns all resource servers and their details. For more information about resource servers, see Access control with resource servers.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to list resource servers",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of resource servers that you want Amazon Cognito to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description:
        "Lists the tags that are assigned to an Amazon Cognito user pool. For more information, see Tagging resources",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the user pool that the tags are assigned to",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-terms",
      description:
        "Returns details about all terms documents for the requested user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to list terms documents",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of terms documents that you want Amazon Cognito to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-user-import-jobs",
      description:
        "Given a user pool ID, returns user import jobs and their details. Import jobs are retained in user pool configuration so that you can stage, stop, start, review, and delete them. For more information about user import, see Importing users from a CSV file.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to list import jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of import jobs that you want Amazon Cognito to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-user-pool-client-secrets",
      description:
        "Lists all client secrets associated with a user pool app client. Returns metadata about the secrets. The response does not include pagination tokens as there are only 2 secrets at any given time and we return both with every ListUserPoolClientSecrets call. For security reasons, the response never reveals the actual secret value in ClientSecretValue",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that contains the app client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client whose secrets you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-user-pool-clients",
      description:
        "Given a user pool ID, lists app clients. App clients are sets of rules for the access that you want a user pool to grant to one application. For more information, see App clients.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to list user pool clients",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of app clients that you want Amazon Cognito to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-type",
          description:
            "Returns only app clients of this type. For dynamic client registration (DCR) and other app clients, the following values are valid.  REGULAR  An app client not created through dynamic client registration.  DCR  An app client created through dynamic client registration.   If you omit ClientType, the response includes app clients of all types. When you set this filter, a page of results can contain fewer app clients than MaxResults, or none, while the response still includes a NextToken. Continue to request pages until the response has no NextToken. The app clients in the response don't include their type. To get the type of an app client, call DescribeUserPoolClient",
          args: {
            name: "string",
            suggestions: ["REGULAR", "DCR"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-user-pool-replicas",
      description:
        "Lists all replicas for a user pool, including both primary and secondary replicas. We recommend using pagination to ensure that the operation returns quickly and successfully.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool for which to list replicas",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token for retrieving the next page of results. If this parameter is omitted, the operation returns the first page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-user-pools",
      description:
        "Lists user pools and their details in the current Amazon Web Services account.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of user pools that you want Amazon Cognito to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-user-sessions",
      description:
        "Lists the active sessions for the currently signed-in user. Amazon Cognito authorizes this operation with the user's access token and returns all of the user's active sessions across every app client in the user pool, including both token sessions and SSO sessions. The IsCurrentSession field identifies the session that the calling access token belongs to. The results are eventually consistent, and new sessions are typically included within a few seconds",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user whose sessions you want to list. Amazon Cognito derives the user pool and username from this token",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that Amazon Cognito returned in a previous response. Use this value to retrieve the next page of results if a NextToken was included in a prior response",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-users",
      description:
        "Given a user pool ID, returns a list of users and their basic details in a user pool. This operation is eventually consistent. You might experience a delay before results are up-to-date. To validate the existence or configuration of an individual user, use AdminGetUser.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to display or search for users",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes-to-get",
          description:
            "A JSON array of user attribute names, for example given_name, that you want Amazon Cognito to include in the response for each user. When you don't provide an AttributesToGet parameter, Amazon Cognito returns all attributes for each user. Use AttributesToGet with required attributes in your user pool, or in conjunction with Filter. Amazon Cognito returns an error if not all users in the results have set a value for the attribute you request. Attributes that you can't filter on, including custom attributes, must have a value set in every user profile before an AttributesToGet parameter returns results",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of users that you want Amazon Cognito to return in the response. In some SDK contexts, this operation might return fewer items than you specify in the Limit parameter without having reached the end of the full list. If the response contains a PaginationToken, then there are more results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--pagination-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'A filter string of the form "AttributeName Filter-Type "AttributeValue". Quotation marks within the filter string must be escaped using the backslash (\\) character. For example, "family_name = \\"Reddy\\"".    AttributeName: The name of the attribute to search for. You can only search for one attribute at a time.    Filter-Type: For an exact match, use =, for example, "given_name = \\"Jon\\"". For a prefix ("starts with") match, use ^=, for example, "given_name ^= \\"Jon\\"".     AttributeValue: The attribute value that must be matched for each user.   If the filter string is empty, ListUsers returns all users in the user pool. You can only search for the following standard attributes:    username (case-sensitive)    email     phone_number     name     given_name     family_name     preferred_username     cognito:user_status (called Status in the Console) (case-insensitive)    status (called Enabled in the Console) (case-sensitive)     sub    Custom attributes aren\'t searchable.  You can also list users with a client-side filter. The server-side filter matches no more than one attribute. For an advanced search, use a client-side filter with the --query parameter of the list-users action in the CLI. When you use a client-side filter, ListUsers returns a paginated list of zero or more users. You can receive multiple pages in a row with zero results. Repeat the query with each pagination token that is returned until you receive a null pagination token value, and then review the combined result.  For more information about server-side and client-side filtering, see FilteringCLI output in the Command Line Interface User Guide.   For more information, see Searching for Users Using the ListUsers API and Examples of Using the ListUsers API in the Amazon Cognito Developer Guide',
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-users-in-group",
      description:
        "Given a user pool ID and a group name, returns a list of users in the group. For more information about user pool groups, see Adding groups to a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to view the membership of the requested group",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description:
            "The name of the group that you want to query for user membership",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of groups that you want Amazon Cognito to return in the response. In some SDK contexts, this operation might return fewer items than you specify in the Limit parameter without having reached the end of the full list. If the response contains a PaginationToken, then there are more results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-web-authn-credentials",
      description:
        "Generates a list of the currently signed-in user's registered passkey, or WebAuthn, credentials. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of the user's passkey credentials that you want to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "resend-confirmation-code",
      description:
        "Resends the code that confirms a new account for a user who has signed up in your user pool. Amazon Cognito sends confirmation codes to the user attribute in the AutoVerifiedAttributes property of your user pool. When you prompt new users for the confirmation code, include a \"Resend code\" option that generates a call to this API operation.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--client-id",
          description:
            "The ID of the user pool app client where the user signed up",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about SecretHash, see Computing secret hash values",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests. For more information, see Collecting data for threat protection in applications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "respond-to-auth-challenge",
      description:
        "Some API operations in a user pool generate a challenge, like a prompt for an MFA code, for device authentication that bypasses MFA, or for a custom authentication challenge. A RespondToAuthChallenge API request provides the answer to that challenge, like a code or a secure remote password (SRP). The parameters of a response to an authentication challenge vary with the type of challenge. For more information about custom authentication challenges, see Custom authentication challenge Lambda triggers.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--client-id",
          description: "The ID of the app client where the user is signing in",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-name",
          description:
            "The name of the challenge that you are responding to.  You can't respond to an ADMIN_NO_SRP_AUTH challenge with this operation.  Possible challenges include the following:  All of the following challenges require USERNAME and, when the app client has a client secret, SECRET_HASH in the parameters. Include a DEVICE_KEY for device authentication.     WEB_AUTHN: Respond to the challenge with the results of a successful authentication with a WebAuthn authenticator, or passkey, as CREDENTIAL. Examples of WebAuthn authenticators include biometric devices and security keys.    PASSWORD: Respond with the user's password as PASSWORD.    PASSWORD_SRP: Respond with the initial SRP secret as SRP_A.    SELECT_CHALLENGE: Respond with a challenge selection as ANSWER. It must be one of the challenge types in the AvailableChallenges response parameter. Add the parameters of the selected challenge, for example USERNAME and SMS_OTP.    SMS_MFA: Respond with the code that your user pool delivered in an SMS message, as SMS_MFA_CODE     EMAIL_MFA: Respond with the code that your user pool delivered in an email message, as EMAIL_MFA_CODE     EMAIL_OTP: Respond with the code that your user pool delivered in an email message, as EMAIL_OTP_CODE .    SMS_OTP: Respond with the code that your user pool delivered in an SMS message, as SMS_OTP_CODE.    PASSWORD_VERIFIER: Respond with the second stage of SRP secrets as PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK, and TIMESTAMP.    CUSTOM_CHALLENGE: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued. The parameters of the challenge are determined by your Lambda function and issued in the ChallengeParameters of a challenge response.    DEVICE_SRP_AUTH: Respond with the initial parameters of device SRP authentication. For more information, see Signing in with a device.    DEVICE_PASSWORD_VERIFIER: Respond with PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK, and TIMESTAMP after client-side SRP calculations. For more information, see Signing in with a device.    NEW_PASSWORD_REQUIRED: For users who are required to change their passwords after successful first login. Respond to this challenge with NEW_PASSWORD and any required attributes that Amazon Cognito returned in the requiredAttributes parameter. You can also set values for attributes that aren't required by your user pool and that your app client can write. Amazon Cognito only returns this challenge for users who have temporary passwords. When you create passwordless users, you must provide values for all required attributes.  In a NEW_PASSWORD_REQUIRED challenge response, you can't modify a required attribute that already has a value. In AdminRespondToAuthChallenge or RespondToAuthChallenge, set a value for any keys that Amazon Cognito returned in the requiredAttributes parameter, then use the AdminUpdateUserAttributes or UpdateUserAttributes API operation to modify the value of any additional attributes.     MFA_SETUP: For users who are required to setup an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters MFAS_CAN_SETUP value.  To set up time-based one-time password (TOTP) MFA, use the session returned in this challenge from InitiateAuth or AdminInitiateAuth as an input to AssociateSoftwareToken. Then, use the session returned by VerifySoftwareToken as an input to RespondToAuthChallenge or AdminRespondToAuthChallenge with challenge name MFA_SETUP to complete sign-in.  To set up SMS or email MFA, collect a phone_number or email attribute for the user. Then restart the authentication flow with an InitiateAuth or AdminInitiateAuth request",
          args: {
            name: "string",
            suggestions: [
              "SMS_MFA",
              "EMAIL_OTP",
              "SOFTWARE_TOKEN_MFA",
              "SELECT_MFA_TYPE",
              "MFA_SETUP",
              "PASSWORD_VERIFIER",
              "CUSTOM_CHALLENGE",
              "SELECT_CHALLENGE",
              "DEVICE_SRP_AUTH",
              "DEVICE_PASSWORD_VERIFIER",
              "ADMIN_NO_SRP_AUTH",
              "NEW_PASSWORD_REQUIRED",
              "SMS_OTP",
              "PASSWORD",
              "WEB_AUTHN",
              "PASSWORD_SRP",
            ],
          },
        },
        {
          name: "--session",
          description:
            "The session identifier that maintains the state of authentication requests and challenge responses. If an AdminInitiateAuth or AdminRespondToAuthChallenge API request results in a determination that your application must pass another challenge, Amazon Cognito returns a session with other challenge parameters. Send this session identifier, unmodified, to the next AdminRespondToAuthChallenge request",
          args: {
            name: "string",
          },
        },
        {
          name: "--challenge-responses",
          description:
            'The responses to the challenge that you received in the previous request. Each challenge has its own required response parameters. The following examples are partial JSON request bodies that highlight challenge-response parameters.  You must provide a SECRET_HASH parameter in all challenge responses to an app client that has a client secret. Include a DEVICE_KEY for device authentication.   SELECT_CHALLENGE   "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "USERNAME": "[username]", "ANSWER": "[Challenge name]"}  Available challenges are PASSWORD, PASSWORD_SRP, EMAIL_OTP, SMS_OTP, and WEB_AUTHN. Complete authentication in the SELECT_CHALLENGE response for PASSWORD, PASSWORD_SRP, and WEB_AUTHN:    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "WEB_AUTHN", "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"}  See  AuthenticationResponseJSON.    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "PASSWORD", "USERNAME": "[username]", "PASSWORD": "[password]"}     "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "PASSWORD_SRP", "USERNAME": "[username]", "SRP_A": "[SRP_A]"}    For SMS_OTP and EMAIL_OTP, respond with the username and answer. Your user pool will send a code for the user to submit in the next challenge response.    "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "SMS_OTP", "USERNAME": "[username]"}     "ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": { "ANSWER": "EMAIL_OTP", "USERNAME": "[username]"}     WEB_AUTHN   "ChallengeName": "WEB_AUTHN", "ChallengeResponses": { "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"}  See  AuthenticationResponseJSON.  PASSWORD   "ChallengeName": "PASSWORD", "ChallengeResponses": { "USERNAME": "[username]", "PASSWORD": "[password]"}   PASSWORD_SRP   "ChallengeName": "PASSWORD_SRP", "ChallengeResponses": { "USERNAME": "[username]", "SRP_A": "[SRP_A]"}   SMS_OTP   "ChallengeName": "SMS_OTP", "ChallengeResponses": {"SMS_OTP_CODE": "[code]", "USERNAME": "[username]"}   EMAIL_OTP   "ChallengeName": "EMAIL_OTP", "ChallengeResponses": {"EMAIL_OTP_CODE": "[code]", "USERNAME": "[username]"}   SMS_MFA   "ChallengeName": "SMS_MFA", "ChallengeResponses": {"SMS_MFA_CODE": "[code]", "USERNAME": "[username]"}   PASSWORD_VERIFIER  This challenge response is part of the SRP flow. Amazon Cognito requires that your application respond to this challenge within a few seconds. When the response time exceeds this period, your user pool returns a NotAuthorizedException error.  "ChallengeName": "PASSWORD_VERIFIER", "ChallengeResponses": {"PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"}   CUSTOM_CHALLENGE   "ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses": {"USERNAME": "[username]", "ANSWER": "[challenge_answer]"}   NEW_PASSWORD_REQUIRED   "ChallengeName": "NEW_PASSWORD_REQUIRED", "ChallengeResponses": {"NEW_PASSWORD": "[new_password]", "USERNAME": "[username]"}  To set any required attributes that InitiateAuth returned in an requiredAttributes parameter, add "userAttributes.[attribute_name]": "[attribute_value]". This parameter can also set values for writable attributes that aren\'t required by your user pool.  In a NEW_PASSWORD_REQUIRED challenge response, you can\'t modify a required attribute that already has a value. In AdminRespondToAuthChallenge or RespondToAuthChallenge, set a value for any keys that Amazon Cognito returned in the requiredAttributes parameter, then use the AdminUpdateUserAttributes or UpdateUserAttributes API operation to modify the value of any additional attributes.   SOFTWARE_TOKEN_MFA   "ChallengeName": "SOFTWARE_TOKEN_MFA", "ChallengeResponses": {"USERNAME": "[username]", "SOFTWARE_TOKEN_MFA_CODE": [authenticator_code]}   DEVICE_SRP_AUTH   "ChallengeName": "DEVICE_SRP_AUTH", "ChallengeResponses": {"USERNAME": "[username]", "DEVICE_KEY": "[device_key]", "SRP_A": "[srp_a]"}   DEVICE_PASSWORD_VERIFIER   "ChallengeName": "DEVICE_PASSWORD_VERIFIER", "ChallengeResponses": {"DEVICE_KEY": "[device_key]", "PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"}   MFA_SETUP   "ChallengeName": "MFA_SETUP", "ChallengeResponses": {"USERNAME": "[username]"}, "SESSION": "[Session ID from VerifySoftwareToken]"   SELECT_MFA_TYPE   "ChallengeName": "SELECT_MFA_TYPE", "ChallengeResponses": {"USERNAME": "[username]", "ANSWER": "[SMS_MFA|EMAIL_MFA|SOFTWARE_TOKEN_MFA]"}    For more information about SECRET_HASH, see Computing secret hash values. For information about DEVICE_KEY, see Working with user devices in your user pool',
          args: {
            name: "map",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests. For more information, see Collecting data for threat protection in applications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "revoke-token",
      description:
        "Revokes all of the access tokens generated by, and at the same time as, the specified refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito user APIs, or to authorize access to your resource server.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--token",
          description: "The refresh token that you want to revoke",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client where the token that you want to revoke was issued",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-secret",
          description:
            "The client secret of the requested app client, if the client has a secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--revoke-associated-sessions",
          description:
            "Specifies whether to also revoke the SSO session that is linked to the token session being revoked. NONE, the default, revokes only the token session that is associated with the refresh token. LINKED also revokes the parent SSO session that the token session came through; the other token sessions that came through that SSO session aren't revoked. LINKED has no effect when session tracking is disabled or when the token session has no parent SSO session",
          args: {
            name: "string",
            suggestions: ["NONE", "LINKED"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "revoke-user-session",
      description:
        "Revokes a specific session for the currently signed-in user. Amazon Cognito authorizes this operation with the user's access token, revokes all refresh and access tokens that are associated with the session, and deletes the session record. You can't revoke the session that the calling access token belongs to",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the user. Amazon Cognito uses this token to authorize the request and to identify the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The ID of the session to revoke. This is a 28-character string of lowercase letters and digits, prefixed with tkn for a token session or sso for an SSO session. This value can't identify the caller's own current session",
          args: {
            name: "string",
          },
        },
        {
          name: "--revoke-associated-sessions",
          description:
            "Specifies whether to also revoke the sessions that are linked to the targeted session. NONE, the default, revokes only the targeted session. LINKED also revokes the directly linked session or sessions, interpreted relative to the type of the targeted session: revoking a token session also revokes the parent SSO session it came through, and revoking an SSO session also revokes the token sessions that came through it. The set of linked sessions is eventually consistent, so associated sessions are typically revoked within a few seconds",
          args: {
            name: "string",
            suggestions: ["NONE", "LINKED"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "set-log-delivery-configuration",
      description:
        "Sets up or modifies the logging configuration of a user pool. User pools can export user notification logs and, when threat protection is active, user-activity logs. For more information, see Exporting user pool logs",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to configure logging",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-configurations",
          description:
            "A collection of the logging configurations for a user pool",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "set-risk-configuration",
      description:
        "Configures threat protection for a user pool or app client. Sets configuration for the following.   Responses to risks with adaptive authentication   Responses to vulnerable passwords with compromised-credentials detection   Notifications to users who have had risky activity detected   IP-address denylist and allowlist   To set the risk configuration for the user pool to defaults, send this request with only the UserPoolId parameter. To reset the threat protection settings of an app client to be inherited from the user pool, send UserPoolId and ClientId parameters only. To change threat protection to audit-only or off, update the value of UserPoolAddOns in an UpdateUserPool request. To activate this setting, your user pool must be on the  Plus tier. In secondary regions for user pools with multi-region replication, only the SourceARN and From attributes of NotifyConfiguration can be modified to configure region-specific SES integration. All other risk configuration settings must match the existing values to maintain consistency across replicas",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to set a risk configuration. If you include UserPoolId in your request, don't include ClientId. When the client ID is null, the same risk configuration is applied to all the clients in the userPool. When you include both ClientId and UserPoolId, Amazon Cognito maps the configuration to the app client only",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client where you want to set a risk configuration. If ClientId is null, then the risk configuration is mapped to UserPoolId. When the client ID is null, the same risk configuration is applied to all the clients in the userPool. When you include a ClientId parameter, Amazon Cognito maps the configuration to the app client. When you include both ClientId and UserPoolId, Amazon Cognito maps the configuration to the app client only",
          args: {
            name: "string",
          },
        },
        {
          name: "--compromised-credentials-risk-configuration",
          description:
            "The configuration of automated reactions to detected compromised credentials. Includes settings for blocking future sign-in requests and for the types of password-submission events you want to monitor",
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-takeover-risk-configuration",
          description:
            "The settings for automated responses and notification templates for adaptive authentication with threat protection",
          args: {
            name: "structure",
          },
        },
        {
          name: "--risk-exception-configuration",
          description:
            "A set of IP-address overrides to threat protection. You can set up IP-address always-block and always-allow lists",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "set-ui-customization",
      description:
        "Configures UI branding settings for domains with the hosted UI (classic) branding version. Your user pool must have a domain. Configure a domain with . Set the default configuration for all clients with a ClientId of ALL. When the ClientId value is an app client ID, the settings you pass in this request apply to that app client and override the default ALL configuration.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to apply branding to the classic hosted UI",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The ID of the app client that you want to customize. To apply a default style to all app clients not configured with client-level branding, set this parameter value to ALL",
          args: {
            name: "string",
          },
        },
        {
          name: "--css",
          description:
            "A plaintext CSS file that contains the custom fields that you want to apply to your user pool or app client. To download a template, go to the Amazon Cognito console. Navigate to your user pool App clients tab, select Login pages, edit Hosted UI (classic) style, and select the link to CSS template.css",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-file",
          description:
            "The image that you want to set as your login in the classic hosted UI, as a Base64-formatted binary object",
          args: {
            name: "blob",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "set-user-mfa-preference",
      description:
        "Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--sms-mfa-settings",
          description:
            "User preferences for SMS message MFA. Activates or deactivates SMS MFA and sets it as the preferred MFA method when multiple methods are available",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-token-mfa-settings",
          description:
            "User preferences for time-based one-time password (TOTP) MFA. Activates or deactivates TOTP MFA and sets it as the preferred MFA method when multiple methods are available. Users must register a TOTP authenticator before they set this as their preferred MFA method",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-mfa-settings",
          description:
            "User preferences for email message MFA. Activates or deactivates email MFA and sets it as the preferred MFA method when multiple methods are available. To activate this setting, your user pool must be in the  Essentials tier or higher",
          args: {
            name: "structure",
          },
        },
        {
          name: "--web-authn-mfa-settings",
          description:
            "User preferences for passkey MFA. Activates or deactivates passkey MFA for the user. When activated, passkey authentication requires user verification, and passkey sign-in is available when MFA is required. To activate this setting, the FactorConfiguration of your user pool WebAuthnConfiguration must be MULTI_FACTOR_WITH_USER_VERIFICATION. To activate this setting, your user pool must be in the  Essentials tier or higher",
          args: {
            name: "structure",
          },
        },
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "set-user-pool-client-session-configuration",
      description:
        "Sets the session configuration for a user pool app client. The configurable client-level setting is the maximum validity period for silent reuse of an SSO session. This operation performs a full replacement of the client-level session configuration; every request parameter is required, and session tracking must be enabled for the user pool. The user pool must be in the Essentials or Plus tier. Otherwise, this operation returns a FeatureUnavailableInTierException",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that contains the app client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The ID of the app client that you want to configure",
          args: {
            name: "string",
          },
        },
        {
          name: "--sso-session",
          description: "The SSO session settings for the app client",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "set-user-pool-mfa-config",
      description:
        "Sets user pool multi-factor authentication (MFA) and passkey configuration. For more information about user pool MFA, see Adding MFA. For more information about WebAuthn passkeys see Authentication flows.  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--user-pool-id",
          description: "The user pool ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--sms-mfa-configuration",
          description:
            "Configures user pool SMS messages for MFA. Sets the message template and the SMS message sending configuration for Amazon SNS",
          args: {
            name: "structure",
          },
        },
        {
          name: "--software-token-mfa-configuration",
          description:
            "Configures a user pool for time-based one-time password (TOTP) MFA. Enables or disables TOTP",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-mfa-configuration",
          description:
            "Sets configuration for user pool email message MFA and sign-in with one-time passwords (OTPs). Includes the subject and body of the email message template for sign-in and MFA messages. To activate this setting, your user pool must be in the  Essentials tier or higher",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mfa-configuration",
          description:
            "Sets multi-factor authentication (MFA) to be on, off, or optional. When ON, all users must set up MFA before they can sign in. When OPTIONAL, your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose OPTIONAL. When MfaConfiguration is OPTIONAL, managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor",
          args: {
            name: "string",
            suggestions: ["OFF", "ON", "OPTIONAL"],
          },
        },
        {
          name: "--web-authn-configuration",
          description:
            "The configuration of your user pool for passkey, or WebAuthn, authentication and registration. Includes relying-party configuration, user-verification requirements, and whether passkeys can satisfy MFA requirements",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "set-user-pool-session-configuration",
      description:
        "Enables or disables session tracking for a user pool, and sets the pool-wide maximum number of active token sessions that each user can have. This operation performs a full replacement of the pool-level session configuration; every request parameter is required. The user pool must be in the Essentials or Plus tier. Otherwise, this operation returns a FeatureUnavailableInTierException",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to configure session tracking",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-session-tracking",
          description:
            "Specifies whether Amazon Cognito tracks sessions for users in the user pool. Set this value to ENABLED to turn on server-side session tracking, or DISABLED to turn it off. When you set this value to DISABLED while the user pool remains active, existing client-level session configurations are retained but dormant, and are reactivated when you enable tracking again",
          args: {
            name: "string",
            suggestions: ["ENABLED", "DISABLED"],
          },
        },
        {
          name: "--token-session",
          description: "The pool-wide token session settings to apply",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "set-user-settings",
      description:
        "This action is no longer supported. You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token or email MFA. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--mfa-options",
          description:
            "You can use this parameter only to set an SMS configuration that uses SMS for delivery",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "sign-up",
      description:
        "Registers a user with an app client and requests a user name, password, and user attributes in the user pool.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.  You might receive a LimitExceeded exception in response to this request if you have exceeded a rate quota for email or SMS messages, and if your user pool automatically verifies email addresses or phone numbers. When you get this exception in the response, the user is successfully created and is in an UNCONFIRMED state",
      options: [
        {
          name: "--client-id",
          description:
            "The ID of the app client where the user wants to sign up",
          args: {
            name: "string",
          },
        },
        {
          name: "--secret-hash",
          description:
            "A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about SecretHash, see Computing secret hash values",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The username of the user that you want to sign up. The value of this parameter is typically a username, but can be any alias attribute in your user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description:
            "The user's proposed password. The password must comply with the password requirements of your user pool. Users can sign up without a password when your user pool supports passwordless sign-in with email or SMS OTPs. To create a user with no password, omit this parameter or submit a blank value. You can only create a passwordless user when passwordless sign-in is available",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attributes",
          description:
            "An array of name-value pairs representing user attributes. For custom attributes, include a custom: prefix in the attribute name, for example custom:department",
          args: {
            name: "list",
          },
        },
        {
          name: "--validation-data",
          description:
            "Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda trigger. This set of key-value pairs are for custom validation of information that you collect from your users but don't need to retain. Your Lambda function can analyze this additional data and act on it. Your function can automatically confirm and verify select users or perform external API operations like logging user attributes and validation data to Amazon CloudWatch Logs. For more information about the pre sign-up Lambda trigger, see Pre sign-up Lambda trigger",
          args: {
            name: "list",
          },
        },
        {
          name: "--analytics-metadata",
          description:
            "Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context-data",
          description:
            "Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests. For more information, see Collecting data for threat protection in applications",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-point-in-time-recovery",
      description:
        "Applies a point-in-time recovery to a user pool. Before you start a recovery, review the recovery preview in the response to a request. You can start a recovery when its status is PREVIEW_GENERATED. When you start a recovery, Amazon Cognito sets its status to RESTORING and restores user data in the user pool to its state at the recovery point. Write operations in the user pool remain paused until the recovery is complete. Sign-in and read operations continue to work. When the status of the recovery changes to RESTORE_COMPLETED, Amazon Cognito resumes write operations. You can't cancel a recovery after you start it.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the recovery that you want to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-id",
          description:
            "The ID of the recovery that you want to start. Amazon Cognito returns this ID in the response to an InitiatePointInTimeRecovery request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-user-import-job",
      description:
        "Instructs your user pool to start importing users from a CSV file that contains their usernames and attributes. For more information about importing users from a CSV file, see Importing users from a CSV file",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that you want to start importing users into",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description:
            "The ID of a user import job that you previously created",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "start-web-authn-registration",
      description:
        "Requests credential creation options from your user pool for the currently signed-in user. Returns information about the user pool, the user profile, and authentication requirements. Users must provide this information in their request to enroll your application with their passkey provider. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "stop-user-import-job",
      description:
        "Instructs your user pool to stop a running job that's importing users from a CSV file that contains their usernames and attributes. For more information about importing users from a CSV file, see Importing users from a CSV file",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool that you want to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The ID of a running user import job",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description:
        "Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria. Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an Environment tag key to both user pools. The value of this key might be Test for one user pool, and Production for the other. Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an Identity and Access Management policy, you can constrain permissions for user pools based on specific tags or tag values. You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the user pool to assign the tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An array of tag keys and values that you want to assign to the user pool",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description:
        "Given tag IDs that you previously assigned to a user pool, removes them",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the user pool that the tags are assigned to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "An array of tag keys that you want to remove from the user pool",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-auth-event-feedback",
      description:
        "Provides the feedback for an authentication event generated by threat protection features. The user's response indicates that you think that the event either was from a valid user or was an unwanted authentication attempt. This feedback improves the risk evaluation decision for the user pool as part of Amazon Cognito threat protection. To activate this setting, your user pool must be on the  Plus tier. This operation requires a FeedbackToken that Amazon Cognito generates and adds to notification emails when users have potentially suspicious authentication events. Users invoke this operation when they select the link that corresponds to {one-click-link-valid} or {one-click-link-invalid} in your notification template. Because FeedbackToken is a required parameter, you can't make requests to UpdateAuthEventFeedback without the contents of the notification email message.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to update auth event feedback",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If username isn't an alias attribute in your user pool, this value must be the sub of a local user or the username of a user from a third-party IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-id",
          description:
            "The ID of the authentication event that you want to submit feedback for",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-token",
          description:
            "The feedback token, an encrypted object generated by Amazon Cognito and passed to your user in the notification email message from the event",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback-value",
          description:
            "Your feedback to the authentication event. When you provide a FeedbackValue value of valid, you tell Amazon Cognito that you trust a user session where Amazon Cognito has evaluated some level of risk. When you provide a FeedbackValue value of invalid, you tell Amazon Cognito that you don't trust a user session, or you don't believe that Amazon Cognito evaluated a high-enough risk level",
          args: {
            name: "string",
            suggestions: ["Valid", "Invalid"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-device-status",
      description:
        "Updates the status of a the currently signed-in user's device so that it is marked as remembered or not remembered for the purpose of device authentication. Device authentication is a \"remember me\" mechanism that silently completes sign-in from trusted devices with a device key instead of a user-provided MFA code. This operation changes the status of a device without deleting it, so you can enable it again later. For more information about device authentication, see Working with devices. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-key",
          description:
            "The device key of the device you want to update, for example us-west-2_a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-remembered-status",
          description:
            "To enable device authentication with the specified device, set to remembered.To disable, set to not_remembered",
          args: {
            name: "string",
            suggestions: ["remembered", "not_remembered"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-group",
      description:
        "Given the name of a user pool group, updates any of the properties for precedence, IAM role, or description. For more information about user pool groups, see Adding groups to a user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--group-name",
          description: "The name of the group that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the group you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new description of the existing group",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that you want to associate with the group. The role assignment contributes to the cognito:roles and cognito:preferred_role claims in group members' tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--precedence",
          description:
            "A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower Precedence values take precedence over groups with higher or null Precedence values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN is given in the user's tokens for the cognito:roles and cognito:preferred_role claims. Two groups can have the same Precedence value. If this happens, neither group takes precedence over the other. If two groups with the same Precedence have the same role ARN, that role is used in the cognito:preferred_role claim in tokens for users in each group. If the two groups have different role ARNs, the cognito:preferred_role claim isn't set in users' tokens. The default Precedence value is null. The maximum Precedence value is 2^31-1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-identity-provider",
      description:
        "Modifies the configuration and trust relationship between a third-party identity provider (IdP) and a user pool. Amazon Cognito accepts sign-in with third-party identity providers through managed login and OIDC relying-party libraries. For more information, see Third-party IdP sign-in.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The Id of the user pool where you want to update your IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-name",
          description:
            "The name of the IdP that you want to update. You can pass the identity provider name in the identity_provider query parameter of requests to the Authorize endpoint to silently redirect to sign-in with the associated IdP",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider-details",
          description:
            'The scopes, URLs, and identifiers for your external identity provider. The following examples describe the provider detail keys for each IdP type. These values and their schema are subject to change. Social IdP authorize_scopes values must match the values listed here.  OpenID Connect (OIDC)  Amazon Cognito accepts the following elements when it can\'t discover endpoint URLs from oidc_issuer: attributes_url, authorize_url, jwks_uri, token_url. Create or update request: "ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" }  Describe response: "ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "attributes_url_add_attributes": "false", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" }   SAML  Create or update request with Metadata URL: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256" }  Create or update request with Metadata file: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm": "rsa-sha256" }  The value of MetadataFile must be the plaintext metadata document with all quote (") characters escaped by backslashes. Describe response: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256", "SLORedirectBindingURI": "https://auth.example.com/slo/saml", "SSORedirectBindingURI": "https://auth.example.com/sso/saml" }   LoginWithAmazon  Create or update request: "ProviderDetails": { "authorize_scopes": "profile postal_code", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret"  Describe response: "ProviderDetails": { "attributes_url": "https://api.amazon.com/user/profile", "attributes_url_add_attributes": "false", "authorize_scopes": "profile postal_code", "authorize_url": "https://www.amazon.com/ap/oa", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "POST", "token_url": "https://api.amazon.com/auth/o2/token" }   Google  Create or update request: "ProviderDetails": { "authorize_scopes": "email profile openid", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret" }  Describe response: "ProviderDetails": { "attributes_url": "https://people.googleapis.com/v1/people/me?personFields=", "attributes_url_add_attributes": "true", "authorize_scopes": "email profile openid", "authorize_url": "https://accounts.google.com/o/oauth2/v2/auth", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret", "oidc_issuer": "https://accounts.google.com", "token_request_method": "POST", "token_url": "https://www.googleapis.com/oauth2/v4/token" }   SignInWithApple  Create or update request: "ProviderDetails": { "authorize_scopes": "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE", "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" }  Describe response: "ProviderDetails": { "attributes_url_add_attributes": "false", "authorize_scopes": "email name", "authorize_url": "https://appleid.apple.com/auth/authorize", "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer": "https://appleid.apple.com", "team_id": "2EXAMPLE", "token_request_method": "POST", "token_url": "https://appleid.apple.com/auth/token" }   Facebook  Create or update request: "ProviderDetails": { "api_version": "v17.0", "authorize_scopes": "public_profile, email", "client_id": "1example23456789", "client_secret": "provider-app-client-secret" }  Describe response: "ProviderDetails": { "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=", "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email", "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" }',
          args: {
            name: "map",
          },
        },
        {
          name: "--attribute-mapping",
          description:
            "A mapping of IdP attributes to standard and custom user pool attributes. Specify a user pool attribute as the key of the key-value pair, and the IdP attribute claim name as the value",
          args: {
            name: "map",
          },
        },
        {
          name: "--idp-identifiers",
          description:
            'An array of IdP identifiers, for example "IdPIdentifiers": [ "MyIdP", "MyIdP2" ]. Identifiers are friendly names that you can pass in the idp_identifier query parameter of requests to the Authorize endpoint to silently redirect to sign-in with the associated IdP. Identifiers in a domain format also enable the use of email-address matching with SAML providers',
          args: {
            name: "list",
          },
        },
        {
          name: "--acr-mapping",
          description:
            "A mapping between the authentication context class reference (ACR) levels of your user pool and the ACR values of the external OpenID Connect (OIDC) identity provider (IdP). This mapping has the same behavior as it does when you create an identity provider. Only OIDC IdPs support ACR mapping. Setting AcrMapping is available in all feature plans. It isn't restricted to the Essentials or Plus feature plan",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-managed-login-branding",
      description:
        "Configures the branding settings for a user pool style. This operation is the programmatic option for the configuration of a style in the branding editor. Provides values for UI customization in a Settings JSON object and image files in an Assets array.  This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the managed login branding style that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-login-branding-id",
          description:
            "The ID of the managed login branding style that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-cognito-provided-values",
          description:
            "When true, applies the default branding style options. This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding editor. When you specify true for this option, you must also omit values for Settings and Assets in the request",
        },
        {
          name: "--no-use-cognito-provided-values",
          description:
            "When true, applies the default branding style options. This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding editor. When you specify true for this option, you must also omit values for Settings and Assets in the request",
        },
        {
          name: "--settings",
          description:
            "A JSON file, encoded as a Document type, with the the settings that you want to apply to your style. The following components are not currently implemented and reserved for future use:    signUp     instructions     sessionTimerDisplay     languageSelector (for localization, see Managed login localization)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--assets",
          description:
            "An array of image files that you want to apply to roles like backgrounds, logos, and icons. Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-provisioned-limit",
      description:
        "Sets the provisioned limit for a specific API category. The value must be between the default limit and your account-level maximum limit in Service Quotas. Managed login user pools don't support adjustments to the UserAuthentication or UserFederation categories. To increase these limits, submit a Service Quotas increase request.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--limit-definition",
          description:
            "The limit to update. Specify the limit class and the attributes that identify the limit",
          args: {
            name: "structure",
          },
        },
        {
          name: "--requested-limit-value",
          description:
            "The provisioned rate to set, in requests per second (RPS)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-resource-server",
      description:
        "Updates the name and scopes of a resource server. All other fields are read-only. For more information about resource servers, see Access control with resource servers.  If you don't provide a value for an attribute, it is set to the default value.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the resource server that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "A unique resource server identifier for the resource server. The identifier can be an API friendly name like solar-system-data. You can also set an API URL like https://solar-system-data-api.example.com as your identifier. Amazon Cognito represents scopes in the access token in the format $resource-server-identifier/$scope. Longer scope-identifier strings increase the size of your access tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The updated name of the resource server",
          args: {
            name: "string",
          },
        },
        {
          name: "--scopes",
          description:
            "An array of updated custom scope names and descriptions that you want to associate with your resource server",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-terms",
      description:
        "Modifies existing terms documents for the requested app client. When Terms and conditions and Privacy policy documents are configured, the app client displays links to them in the sign-up page of managed login for the app client. You can provide URLs for terms documents in the languages that are supported by managed login localization. Amazon Cognito directs users to the terms documents for their current language, with fallback to default if no document exists for the language. Each request accepts one type of terms document and a map of language-to-link for that document type. You must provide both types of terms documents in at least one language before Amazon Cognito displays your terms documents. Supply each type in separate requests. For more information, see Terms documents.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--terms-id",
          description: "The ID of the terms document that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the terms that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--terms-name",
          description:
            "The new name that you want to apply to the requested terms documents",
          args: {
            name: "string",
          },
        },
        {
          name: "--terms-source",
          description:
            "This parameter is reserved for future use and currently accepts only one value",
          args: {
            name: "string",
            suggestions: ["LINK"],
          },
        },
        {
          name: "--enforcement",
          description:
            "This parameter is reserved for future use and currently accepts only one value",
          args: {
            name: "string",
            suggestions: ["NONE"],
          },
        },
        {
          name: "--links",
          description:
            'A map of URLs to languages. For each localized language that will view the requested TermsName, assign a URL. A selection of cognito:default displays for all languages that don\'t have a language-specific URL. For example, "cognito:default": "https://terms.example.com", "cognito:spanish": "https://terms.example.com/es"',
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-user-attributes",
      description:
        "Updates the currently signed-in user's attributes. To delete an attribute from the user, submit the attribute in your API request with a blank value. For custom attributes, you must add a custom: prefix to the attribute name, for example custom:department. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.   This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide",
      options: [
        {
          name: "--user-attributes",
          description:
            "An array of name-value pairs representing user attributes. For custom attributes, you must add a custom: prefix to the attribute name. If you have set an attribute to require verification before Amazon Cognito updates its value, this request doesn’t immediately update the value of that attribute. After your user receives and responds to a verification message to verify the new value, Amazon Cognito updates the attribute value. Your user can sign in and receive messages with the original attribute value until they verify the new value",
          args: {
            name: "list",
          },
        },
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-metadata",
          description:
            "A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers. When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a clientMetadata attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the clientMetadata value to enhance your workflow for your specific needs. To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see  Connecting API actions to Lambda triggers in the Amazon Cognito Developer Guide.  When you use the ClientMetadata parameter, note that Amazon Cognito won't do the following:   Store the ClientMetadata value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the ClientMetadata parameter serves no purpose.   Validate the ClientMetadata value.   Encrypt the ClientMetadata value. Don't send sensitive information in this parameter",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-user-pool",
      description:
        "Updates the configuration of a user pool. To avoid setting parameters to Amazon Cognito defaults, construct this API request to pass the existing configuration of your user pool, modified to include the changes that you want to make.  If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.  In secondary regions for user pools with multi-region replication, regional configurations for email, SMS, Lambda functions, and tags can be updated. Both global and regional settings must be provided as inputs, with global settings required to match existing values to maintain consistency across replicas.  This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In  sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see  SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.   Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description: "The ID of the user pool you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--policies",
          description:
            "The password policy and sign-in policy in the user pool. The password policy sets options like password complexity requirements and password history. The sign-in policy sets the options available to applications in choice-based authentication",
          args: {
            name: "structure",
          },
        },
        {
          name: "--deletion-protection",
          description:
            "When active, DeletionProtection prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature. When you try to delete a protected user pool in a DeleteUserPool API request, Amazon Cognito returns an InvalidParameterException error. To delete a protected user pool, send a new DeleteUserPool request after you deactivate deletion protection in an UpdateUserPool API request",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "INACTIVE"],
          },
        },
        {
          name: "--lambda-config",
          description:
            "A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of authentication operations. Triggers can modify the outcome of the operations that invoked them",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-verified-attributes",
          description:
            "The attributes that you want your user pool to automatically verify. Possible values: email, phone_number. For more information see Verifying contact information at sign-up",
          args: {
            name: "list",
          },
        },
        {
          name: "--sms-verification-message",
          description: "This parameter is no longer used",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-message",
          description: "This parameter is no longer used",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-verification-subject",
          description: "This parameter is no longer used",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-message-template",
          description:
            "The template for the verification message that your user pool delivers to users who set an email address or phone number attribute. Set the email message type that corresponds to your DefaultEmailOption selection. For CONFIRM_WITH_LINK, specify an EmailMessageByLink and leave EmailMessage blank. For CONFIRM_WITH_CODE, specify an EmailMessage and leave EmailMessageByLink blank. When you supply both parameters with either choice, Amazon Cognito returns an error",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-authentication-message",
          description:
            "The contents of the SMS message that your user pool sends to users in SMS authentication",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-attribute-update-settings",
          description:
            "The settings for updates to user attributes. These settings include the property AttributesRequireVerificationBeforeUpdate, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see  Verifying updates to email addresses and phone numbers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mfa-configuration",
          description:
            "Sets multi-factor authentication (MFA) to be on, off, or optional. When ON, all users must set up MFA before they can sign in. When OPTIONAL, your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose OPTIONAL. When MfaConfiguration is OPTIONAL, managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor",
          args: {
            name: "string",
            suggestions: ["OFF", "ON", "OPTIONAL"],
          },
        },
        {
          name: "--device-configuration",
          description:
            'The device-remembering configuration for a user pool. Device remembering or device tracking is a "Remember me on this device" option for user pools that perform authentication with the device key of a trusted device in the back end, instead of a user-provided MFA code. For more information about device authentication, see Working with user devices in your user pool. A null value indicates that you have deactivated device remembering in your user pool.  When you provide a value for any DeviceConfiguration field, you activate the Amazon Cognito device-remembering feature. For more information, see Working with devices',
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-configuration",
          description:
            "The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for email invitation and verification messages from your user pool",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sms-configuration",
          description:
            "The SMS configuration with the settings for your Amazon Cognito user pool to send SMS message with Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account. For more information see SMS message settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-tags",
          description:
            "The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria",
          args: {
            name: "map",
          },
        },
        {
          name: "--admin-create-user-config",
          description:
            "The configuration for administrative creation of users. Includes the template for the invitation message for new users, the duration of temporary passwords, and permitting self-service sign-up",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-pool-add-ons",
          description:
            "Contains settings for activation of threat protection, including the operating mode and additional authentication types. To log user security information but take no action, set to AUDIT. To configure automatic security responses to potentially unwanted traffic to your user pool, set to ENFORCED. For more information, see Adding advanced security to a user pool. To activate this setting, your user pool must be on the  Plus tier",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dcr-configuration",
          description:
            "The dynamic client registration configuration for the user pool. With dynamic client registration, applications can register their own app clients at runtime through the registration endpoint of your user pool domain. To activate this setting, your user pool must be in the  Essentials tier or higher. If you omit this parameter, Amazon Cognito keeps the existing configuration. If you include it, Amazon Cognito replaces the existing configuration with the one that you provide. Members that you omit revert to their default values, and an omitted EnableStatus turns dynamic client registration on. To change the feature plan of the user pool to Lite, you must also set EnableStatus to Disabled",
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-recovery-setting",
          description:
            "The available verified method a user can use to recover their password when they call ForgotPassword. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email",
          args: {
            name: "structure",
          },
        },
        {
          name: "--pool-name",
          description: "The updated name of your user pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-tier",
          description:
            "The user pool feature plan, or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to ESSENTIALS",
          args: {
            name: "string",
            suggestions: ["LITE", "ESSENTIALS", "PLUS"],
          },
        },
        {
          name: "--key-configuration",
          description:
            "The key configuration for the user pool. In secondary regions, this parameter must match the existing configuration and cannot be modified",
          args: {
            name: "structure",
          },
        },
        {
          name: "--issuer-configuration",
          description:
            "The issuer configuration for the user pool. In secondary regions, this parameter must match the existing configuration and cannot be modified",
          args: {
            name: "structure",
          },
        },
        {
          name: "--acr-configuration",
          description:
            "The custom names for the authentication context class reference (ACR) levels in your user pool. This configuration has the same behavior as it does when you create a user pool: you customize only the URI name that Amazon Cognito reports for each of the four fixed ACR levels, and any level that you don't specify keeps its default name. Each name must be unique across all four levels, including default names. Configuring custom ACR level names requires the Essentials or Plus feature plan. To activate this setting, your user pool must be in the  Essentials tier or higher",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-user-pool-client",
      description:
        "Given a user pool app client ID, updates the configuration. To avoid setting parameters to Amazon Cognito defaults, construct this API request to pass the existing configuration of your app client, modified to include the changes that you want to make.  If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.  Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't available for your client until after you apply a branding style.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool where you want to update the app client",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The ID of the app client that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-name",
          description: "A friendly name for the app client",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-token-validity",
          description:
            "The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for RefreshTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set RefreshTokenValidity as 10 and TokenValidityUnits as days, your user can refresh their session and retrieve new access and ID tokens for 10 days. The default time unit for RefreshTokenValidity in an API request is days. You can't set RefreshTokenValidity to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days",
          args: {
            name: "integer",
          },
        },
        {
          name: "--access-token-validity",
          description:
            "The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for AccessTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set AccessTokenValidity to 10 and TokenValidityUnits to hours, your user can authorize access with their access token for 10 hours. The default time unit for AccessTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour",
          args: {
            name: "integer",
          },
        },
        {
          name: "--id-token-validity",
          description:
            "The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for IdTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set IdTokenValidity as 10 and TokenValidityUnits as hours, your user can authenticate their session with their ID token for 10 hours. The default time unit for IdTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour",
          args: {
            name: "integer",
          },
        },
        {
          name: "--token-validity-units",
          description:
            "The units that validity times are represented in. The default unit for refresh tokens is days, and the default for ID and access tokens are hours",
          args: {
            name: "structure",
          },
        },
        {
          name: "--read-attributes",
          description:
            "The list of user attributes that you want your app client to have read access to. After your user authenticates in your app, their access token authorizes them to read their own attribute value for any attribute in this list. When you don't specify the ReadAttributes for your app client, your app can read the values of email_verified, phone_number_verified, and the standard attributes of your user pool. When your user pool app client has read access to these default attributes, ReadAttributes doesn't return any information. Amazon Cognito only populates ReadAttributes in the API response if you have specified your own custom set of read attributes",
          args: {
            name: "list",
          },
        },
        {
          name: "--write-attributes",
          description:
            "The list of user attributes that you want your app client to have write access to. After your user authenticates in your app, their access token authorizes them to set or modify their own attribute value for any attribute in this list. When you don't specify the WriteAttributes for your app client, your app can write the values of the Standard attributes of your user pool. When your user pool has write access to these default attributes, WriteAttributes doesn't return any information. Amazon Cognito only populates WriteAttributes in the API response if you have specified your own custom set of write attributes. If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see Specifying IdP Attribute Mappings for Your user pool",
          args: {
            name: "list",
          },
        },
        {
          name: "--explicit-auth-flows",
          description:
            "The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.  If you don't specify a value for ExplicitAuthFlows, your app client supports ALLOW_REFRESH_TOKEN_AUTH, ALLOW_USER_SRP_AUTH, and ALLOW_CUSTOM_AUTH.   The values for authentication flow options include the following.    ALLOW_USER_AUTH: Enable selection-based sign-in with USER_AUTH. This setting covers username-password, secure remote password (SRP), passwordless, and passkey authentication. This authentiation flow can do username-password and SRP authentication without other ExplicitAuthFlows permitting them. For example users can complete an SRP challenge through USER_AUTH without the flow USER_SRP_AUTH being active for the app client. This flow doesn't include CUSTOM_AUTH.  To activate this setting, your user pool must be in the  Essentials tier or higher.    ALLOW_ADMIN_USER_PASSWORD_AUTH: Enable admin based user password authentication flow ADMIN_USER_PASSWORD_AUTH. This setting replaces the ADMIN_NO_SRP_AUTH setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.    ALLOW_CUSTOM_AUTH: Enable Lambda trigger based authentication.    ALLOW_USER_PASSWORD_AUTH: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.    ALLOW_USER_SRP_AUTH: Enable SRP-based authentication.    ALLOW_REFRESH_TOKEN_AUTH: Enable authflow to refresh tokens.    ALLOW_TOKEN_EXCHANGE_IMPERSONATION – Use this flow to request GetDerivedToken token exchanges without an ActorToken. The issued token represents the subject user directly.    ALLOW_TOKEN_EXCHANGE_DELEGATION – Use this flow to request GetDerivedToken token exchanges that include an ActorToken. The issued token carries an act claim that identifies the intermediary acting on the behalf of the subject.   In some environments, you will see the values ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, or USER_PASSWORD_AUTH. You can't assign these legacy ExplicitAuthFlows values to user pool clients at the same time as values that begin with ALLOW_, like ALLOW_USER_SRP_AUTH",
          args: {
            name: "list",
          },
        },
        {
          name: "--supported-identity-providers",
          description:
            "A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: COGNITO, Facebook, Google, SignInWithApple, and LoginWithAmazon. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example MySAMLIdP or MyOIDCIdP. This parameter sets the IdPs that managed login will display on the login page for your app client. The removal of COGNITO from this list doesn't prevent authentication operations for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent SDK-based authentication is to block access with a WAF rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--callback-urls",
          description:
            "A list of allowed redirect, or callback, URLs for managed login authentication. These URLs are the paths where you want to send your users' browsers after they complete authentication with managed login or a third-party IdP. Typically, callback URLs are the home of an application that uses OAuth or OIDC libraries to process authentication outcomes. A redirect URI must meet the following requirements:   Be an absolute URI.   Be registered with the authorization server. Amazon Cognito doesn't accept authorization requests with redirect_uri values that aren't in the list of CallbackURLs that you provide in this parameter.   Not include a fragment component.   See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes only. App callback URLs such as myapp://example are also supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--logout-urls",
          description:
            'A list of allowed logout URLs for managed login authentication. When you pass logout_uri and client_id parameters to /logout, Amazon Cognito signs out your user and redirects them to the logout URL. This parameter describes the URLs that you want to be the permitted targets of logout_uri. A typical use of these URLs is when a user selects "Sign out" and you redirect them to your public homepage. For more information, see Logout endpoint',
          args: {
            name: "list",
          },
        },
        {
          name: "--default-redirect-uri",
          description:
            "The default redirect URI. In app clients with one assigned IdP, replaces redirect_uri in authentication requests. Must be in the CallbackURLs list",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-o-auth-flows",
          description:
            "The OAuth grant types that you want your app client to generate. To create an app client that generates client credentials grants, you must add client_credentials as the only allowed OAuth flow.  code  Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the /oauth2/token endpoint.  implicit  Issue the access token (and, optionally, ID token, based on scopes) directly to your user.  client_credentials  Issue the access token from the /oauth2/token endpoint directly to a non-person user using a combination of the client ID and client secret",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-scopes",
          description:
            "The OAuth, OpenID Connect (OIDC), and custom scopes that you want to permit your app client to authorize access with. Scopes govern access control to user pool self-service API operations, user data from the userInfo endpoint, and third-party APIs. Scope values include phone, email, openid, and profile. The aws.cognito.signin.user.admin scope authorizes user self-service operations. Custom scopes with resource servers authorize access to external APIs",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true to use OAuth 2.0 authorization server features in your app client. This parameter must have a value of true before you can configure the following features in your app client.    CallBackURLs: Callback URLs.    LogoutURLs: Sign-out redirect URLs.    AllowedOAuthScopes: OAuth 2.0 scopes.    AllowedOAuthFlows: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.   To use authorization server features, configure one of these features in the Amazon Cognito console or set AllowedOAuthFlowsUserPoolClient to true in a CreateUserPoolClient or UpdateUserPoolClient API request. If you don't set a value for AllowedOAuthFlowsUserPoolClient in a request with the CLI or SDKs, it defaults to false. When false, only SDK-based API sign-in is permitted",
        },
        {
          name: "--no-allowed-o-auth-flows-user-pool-client",
          description:
            "Set to true to use OAuth 2.0 authorization server features in your app client. This parameter must have a value of true before you can configure the following features in your app client.    CallBackURLs: Callback URLs.    LogoutURLs: Sign-out redirect URLs.    AllowedOAuthScopes: OAuth 2.0 scopes.    AllowedOAuthFlows: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.   To use authorization server features, configure one of these features in the Amazon Cognito console or set AllowedOAuthFlowsUserPoolClient to true in a CreateUserPoolClient or UpdateUserPoolClient API request. If you don't set a value for AllowedOAuthFlowsUserPoolClient in a request with the CLI or SDKs, it defaults to false. When false, only SDK-based API sign-in is permitted",
        },
        {
          name: "--analytics-configuration",
          description:
            "The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign. In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools might not have access to analytics or might be configurable with campaigns in the US East (N. Virginia) Region. For more information, see Using Amazon Pinpoint analytics",
          args: {
            name: "structure",
          },
        },
        {
          name: "--prevent-user-existence-errors",
          description:
            "When ENABLED, suppresses messages that might indicate a valid user exists when someone attempts sign-in. This parameters sets your preference for the errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to ENABLED and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to LEGACY, those APIs return a UserNotFoundException exception if the user doesn't exist in the user pool. Defaults to LEGACY",
          args: {
            name: "string",
            suggestions: ["LEGACY", "ENABLED"],
          },
        },
        {
          name: "--enable-token-revocation",
          description:
            "Activates or deactivates token revocation in the target app client",
        },
        {
          name: "--no-enable-token-revocation",
          description:
            "Activates or deactivates token revocation in the target app client",
        },
        {
          name: "--enable-propagate-additional-user-context-data",
          description:
            "When true, your application can include additional UserContextData in authentication requests. This data includes the IP address, and contributes to analysis by threat protection features. For more information about propagation of user context data, see Adding session data to API requests. If you don’t include this parameter, you can't send the source IP address to Amazon Cognito threat protection features. You can only activate EnablePropagateAdditionalUserContextData in an app client that has a client secret",
        },
        {
          name: "--no-enable-propagate-additional-user-context-data",
          description:
            "When true, your application can include additional UserContextData in authentication requests. This data includes the IP address, and contributes to analysis by threat protection features. For more information about propagation of user context data, see Adding session data to API requests. If you don’t include this parameter, you can't send the source IP address to Amazon Cognito threat protection features. You can only activate EnablePropagateAdditionalUserContextData in an app client that has a client secret",
        },
        {
          name: "--auth-session-validity",
          description:
            "Amazon Cognito creates a session token for each API request in an authentication flow. AuthSessionValidity is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires",
          args: {
            name: "integer",
          },
        },
        {
          name: "--refresh-token-rotation",
          description:
            "The configuration of your app client for refresh token rotation. When enabled, your app client issues new ID, access, and refresh tokens when users renew their sessions with refresh tokens. When disabled, token refresh issues only ID and access tokens",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-user-pool-domain",
      description:
        "A user pool domain hosts managed login, an authorization server and web server for authentication in your application. This operation updates the branding version for user pool domains between 1 for hosted UI (classic) and 2 for managed login. It also updates the SSL certificate for user pool custom domains. Changes to the domain branding version take up to one minute to take effect for a prefix domain and up to five minutes for a custom domain. This operation doesn't change the name of your user pool domain. To change your domain, delete it with DeleteUserPoolDomain and create a new domain with CreateUserPoolDomain. You can pass the ARN of a new Certificate Manager certificate in this request. Typically, ACM certificates automatically renew and you user pool can continue to use the same ARN. But if you generate a new certificate for your custom domain name, replace the original configuration with the new ARN in this request. ACM certificates for custom domains must be in the US East (N. Virginia) Amazon Web Services Region. After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain. For more information about adding a custom domain to your user pool, see Configuring a user pool domain.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--domain",
          description:
            "The name of the domain that you want to update. For custom domains, this is the fully-qualified domain name, for example auth.example.com. For prefix domains, this is the prefix alone, such as myprefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that is associated with the domain you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-login-version",
          description:
            "A version number that indicates the state of managed login for your domain. Version 1 is hosted UI (classic). Version 2 is the newer managed login with the branding editor. For more information, see Managed login",
          args: {
            name: "integer",
          },
        },
        {
          name: "--custom-domain-config",
          description:
            "The configuration for a custom domain that hosts managed login for your application. In an UpdateUserPoolDomain request, this parameter specifies an SSL certificate for the managed login hosted webserver. The certificate must be an ACM ARN in us-east-1. When you create a custom domain, the passkey RP ID defaults to the custom domain. If you had a prefix domain active, this will cause passkey integration for your prefix domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey integration working, you can explicitly set RP ID to the prefix domain",
          args: {
            name: "structure",
          },
        },
        {
          name: "--routing",
          description:
            "The routing configuration for the user pool domain. Specifies failover settings for multi-region deployments",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-user-pool-replica",
      description:
        "Updates replica-specific settings for a user pool replica. You can modify the status to activate or deactivate the replica. This request can be made in both primary and secondary regions of the user pool.  Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.  Learn more     Signing Amazon Web Services API Requests     Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--user-pool-id",
          description:
            "The ID of the user pool that contains the replica to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--region-name",
          description:
            "The Amazon Web Services Region of the replica to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The status to set for the replica. Valid values are ACTIVE and INACTIVE",
          args: {
            name: "string",
            suggestions: ["ACTIVE", "INACTIVE"],
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "verify-software-token",
      description:
        "Registers the current user's time-based one-time password (TOTP) authenticator with a code generated in their authenticator app from a private key that's supplied by your user pool. Marks the user's software token MFA status as \"verified\" if successful. The request takes an access token or a session string, but not both.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--session",
          description: "The session ID from an AssociateSoftwareToken request",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-code",
          description:
            "A TOTP that the user generated in their configured authenticator app",
          args: {
            name: "string",
          },
        },
        {
          name: "--friendly-device-name",
          description:
            "A friendly name for the device that's running the TOTP authenticator",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "verify-user-attribute",
      description:
        "Submits a verification code for a signed-in user who has added or changed a value of an auto-verified attribute. When successful, the user's attribute becomes verified and the attribute email_verified or phone_number_verified becomes true.  If your user pool requires verification before Amazon Cognito updates the attribute value, this operation updates the affected attribute to its pending value. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.  Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints",
      options: [
        {
          name: "--access-token",
          description:
            "A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for aws.cognito.signin.user.admin",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-name",
          description: "The name of the attribute that you want to verify",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description:
            "The verification code that your user pool sent to the added or changed attribute, for example the user's email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
  ],
};

export default completionSpec;
