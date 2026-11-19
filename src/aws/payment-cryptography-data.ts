const completionSpec: Fig.Spec = {
  name: "payment-cryptography-data",
  description:
    "You use the Amazon Web Services Payment Cryptography Data Plane to manage how encryption keys are used for payment-related transaction processing and associated cryptographic operations. You can encrypt, decrypt, generate, verify, and translate payment-related cryptographic operations in Amazon Web Services Payment Cryptography. For more information, see Data operations in the Amazon Web Services Payment Cryptography User Guide. To manage your encryption keys, you use the Amazon Web Services Payment Cryptography Control Plane. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys",
  subcommands: [
    {
      name: "decrypt-data",
      description:
        "Decrypts ciphertext data to plaintext using a symmetric (TDES, AES), asymmetric (RSA), or derived (DUKPT or EMV) encryption key scheme. For more information, see Decrypt data in the Amazon Web Services Payment Cryptography User Guide. You can use an decryption key generated within Amazon Web Services Payment Cryptography, or you can import your own decryption key by calling ImportKey. For this operation, the key must have KeyModesOfUse set to Decrypt. In asymmetric decryption, Amazon Web Services Payment Cryptography decrypts the ciphertext using the private component of the asymmetric encryption key pair. For data encryption outside of Amazon Web Services Payment Cryptography, you can export the public component of the asymmetric key pair by calling GetPublicCertificate. This operation also supports dynamic keys, allowing you to pass a dynamic decryption key as a TR-31 WrappedKeyBlock. This can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To decrypt using dynamic keys, the keyARN is the Key Encryption Key (KEK) of the TR-31 wrapped decryption key material. The incoming wrapped key shall have a key purpose of D0 with a mode of use of B or D. For more information, see Using Dynamic Keys in the Amazon Web Services Payment Cryptography User Guide. For symmetric and DUKPT decryption, Amazon Web Services Payment Cryptography supports TDES and AES algorithms. For EMV decryption, Amazon Web Services Payment Cryptography supports TDES algorithms. For asymmetric decryption, Amazon Web Services Payment Cryptography supports RSA.  When you use TDES or TDES DUKPT, the ciphertext data length must be a multiple of 8 bytes. For AES or AES DUKPT, the ciphertext data length must be a multiple of 16 bytes. For RSA, it sould be equal to the key size unless padding is enabled. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     EncryptData     GetPublicCertificate     ImportKey",
      options: [
        {
          name: "--key-identifier",
          description:
            "The keyARN of the encryption key that Amazon Web Services Payment Cryptography uses for ciphertext decryption. When a WrappedKeyBlock is provided, this value will be the identifier to the key wrapping key. Otherwise, it is the key identifier used to perform the operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cipher-text",
          description: "The ciphertext to decrypt",
          args: {
            name: "string",
          },
        },
        {
          name: "--decryption-attributes",
          description:
            "The encryption key type and attributes for ciphertext decryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--wrapped-key",
          description:
            "The WrappedKeyBlock containing the encryption key for ciphertext decryption",
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
      name: "encrypt-data",
      description:
        "Encrypts plaintext data to ciphertext using a symmetric (TDES, AES), asymmetric (RSA), or derived (DUKPT or EMV) encryption key scheme. For more information, see Encrypt data in the Amazon Web Services Payment Cryptography User Guide. You can generate an encryption key within Amazon Web Services Payment Cryptography by calling CreateKey. You can import your own encryption key by calling ImportKey. For this operation, the key must have KeyModesOfUse set to Encrypt. In asymmetric encryption, plaintext is encrypted using public component. You can import the public component of an asymmetric key pair created outside Amazon Web Services Payment Cryptography by calling ImportKey.  This operation also supports dynamic keys, allowing you to pass a dynamic encryption key as a TR-31 WrappedKeyBlock. This can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To encrypt using dynamic keys, the keyARN is the Key Encryption Key (KEK) of the TR-31 wrapped encryption key material. The incoming wrapped key shall have a key purpose of D0 with a mode of use of B or D. For more information, see Using Dynamic Keys in the Amazon Web Services Payment Cryptography User Guide. For symmetric and DUKPT encryption, Amazon Web Services Payment Cryptography supports TDES and AES algorithms. For EMV encryption, Amazon Web Services Payment Cryptography supports TDES algorithms.For asymmetric encryption, Amazon Web Services Payment Cryptography supports RSA.  When you use TDES or TDES DUKPT, the plaintext data length must be a multiple of 8 bytes. For AES or AES DUKPT, the plaintext data length must be a multiple of 16 bytes. For RSA, it sould be equal to the key size unless padding is enabled. To encrypt using DUKPT, you must already have a BDK (Base Derivation Key) key in your account with KeyModesOfUse set to DeriveKey, or you can generate a new DUKPT key by calling CreateKey. To encrypt using EMV, you must already have an IMK (Issuer Master Key) key in your account with KeyModesOfUse set to DeriveKey. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.  Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     DecryptData     GetPublicCertificate     ImportKey     ReEncryptData",
      options: [
        {
          name: "--key-identifier",
          description:
            "The keyARN of the encryption key that Amazon Web Services Payment Cryptography uses for plaintext encryption. When a WrappedKeyBlock is provided, this value will be the identifier to the key wrapping key. Otherwise, it is the key identifier used to perform the operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--plain-text",
          description:
            "The plaintext to be encrypted.  For encryption using asymmetric keys, plaintext data length is constrained by encryption key strength that you define in KeyAlgorithm and padding type that you define in AsymmetricEncryptionAttributes. For more information, see Encrypt data in the Amazon Web Services Payment Cryptography User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-attributes",
          description:
            "The encryption key type and attributes for plaintext encryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--wrapped-key",
          description:
            "The WrappedKeyBlock containing the encryption key for plaintext encryption",
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
      name: "generate-as2805-kek-validation",
      description:
        "Generates a KekValidationRequest or a KekValidationResponse for node-to-node initialization between payment processing nodes using Australian Standard 2805 (AS2805). During node-to-node initialization, both communicating nodes must validate that they possess the correct Key Encrypting Keys (KEKs) before proceeding with session key exchange. In AS2805, the sending KEK (KEKs) of one node corresponds to the receiving KEK (KEKr) of its partner node. Each node uses its KEK to encrypt and decrypt session keys exchanged between the nodes. A KEK can be created or imported into Amazon Web Services Payment Cryptography using either the CreateKey or ImportKey operations. To use GenerateAs2805KekValidation to generate a KEK validation request, set KekValidationType to KekValidationRequest. This operation returns both RandomKeySend (KRs) and RandomKeyReceive (KRr) as response values. The partnering node receives the KRs, uses its KEKr to decrypt it, and generates a KRr which is an inverted value of KRs. The node receiving the KRr validates it against its own KRr generated during KEK validation request outside of Amazon Web Services Payment Cryptography. You can also use this operation to generate a KEK validation response, by setting KekValidationType to KekValidationResponse and providing the incoming KRs. This operation then calculates a KRr. To learn more about more about node-to-node initialization, see Validation of KEK in the Amazon Web Services Payment Cryptography User Guide. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies",
      options: [
        {
          name: "--key-identifier",
          description:
            "The keyARN of sending KEK that Amazon Web Services Payment Cryptography uses for node-to-node initialization",
          args: {
            name: "string",
          },
        },
        {
          name: "--kek-validation-type",
          description:
            "Defines whether to generate a KEK validation request or KEK validation response for node-to-node initialization",
          args: {
            name: "structure",
          },
        },
        {
          name: "--random-key-send-variant-mask",
          description:
            "The key variant to use for generating a random key for KEK validation during node-to-node initialization",
          args: {
            name: "string",
            suggestions: ["VARIANT_MASK_82C0", "VARIANT_MASK_82"],
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
      name: "generate-auth-request-cryptogram",
      description:
        "Generates an Authorization Request Cryptogram (ARQC) for an EMV chip payment card authorization. For more information, see Generate auth request cryptogram in the Amazon Web Services Payment Cryptography User Guide. ARQC generation uses an Issuer Master Key (IMK) for application cryptograms (TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS) to derive a session key, which is then used to generate the cryptogram from the provided transaction data (when applicable). To use this operation, you must first create or import an IMK-AC key by calling CreateKey or ImportKey. The KeyModesOfUse should be set to DeriveKey for the IMK-AC encryption key.  This operation is intended for development and testing scenarios only. It is not recommended to use this operation as a substitute for card-based cryptogram generation in production payment flows.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     VerifyAuthRequestCryptogram",
      options: [
        {
          name: "--key-identifier",
          description:
            "The keyARN of the IMK-AC (TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS) that Amazon Web Services Payment Cryptography uses to generate the ARQC",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-data",
          description:
            "The transaction data that Amazon Web Services Payment Cryptography uses for ARQC generation. The same transaction data is used for ARQC verification by the issuer using VerifyAuthRequestCryptogram",
          args: {
            name: "string",
          },
        },
        {
          name: "--major-key-derivation-mode",
          description:
            "The method to use when deriving the major encryption key for ARQC generation within Amazon Web Services Payment Cryptography",
          args: {
            name: "string",
            suggestions: ["EMV_OPTION_A", "EMV_OPTION_B"],
          },
        },
        {
          name: "--session-key-derivation-attributes",
          description:
            "The attributes and values to use for deriving a session key for ARQC generation within Amazon Web Services Payment Cryptography",
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
      name: "generate-card-validation-data",
      description:
        "Generates card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). For more information, see Generate card data in the Amazon Web Services Payment Cryptography User Guide. This operation generates a CVV or CSC value that is printed on a payment credit or debit card during card production. The CVV or CSC, PAN (Primary Account Number) and expiration date of the card are required to check its validity during transaction processing. To begin this operation, a CVK (Card Verification Key) encryption key is required. You can use CreateKey or ImportKey to establish a CVK within Amazon Web Services Payment Cryptography. The KeyModesOfUse should be set to Generate and Verify for a CVK encryption key.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     ImportKey     VerifyCardValidationData",
      options: [
        {
          name: "--key-identifier",
          description:
            "The keyARN of the CVK encryption key that Amazon Web Services Payment Cryptography uses to generate card data",
          args: {
            name: "string",
          },
        },
        {
          name: "--primary-account-number",
          description:
            "The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder",
          args: {
            name: "string",
          },
        },
        {
          name: "--generation-attributes",
          description:
            "The algorithm for generating CVV or CSC values for the card within Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-data-length",
          description:
            "The length of the CVV or CSC to be generated. The default value is 3",
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
      name: "generate-mac",
      description:
        "Generates a Message Authentication Code (MAC) cryptogram within Amazon Web Services Payment Cryptography.  You can use this operation to authenticate card-related data by using known data values to generate MAC for data validation between the sending and receiving parties. This operation uses message data, a secret encryption key and MAC algorithm to generate a unique MAC value for transmission. The receiving party of the MAC must use the same message data, secret encryption key and MAC algorithm to reproduce another MAC value for comparision. You can use this operation to generate a DUPKT, CMAC, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. The MAC generation encryption key must have valid values for KeyUsage such as TR31_M7_HMAC_KEY for HMAC generation, and the key must have KeyModesOfUse set to Generate. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     VerifyMac",
      options: [
        {
          name: "--key-identifier",
          description: "The keyARN of the MAC generation encryption key",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-data",
          description:
            "The data for which a MAC is under generation. This value must be hexBinary",
          args: {
            name: "string",
          },
        },
        {
          name: "--generation-attributes",
          description:
            "The attributes and data values to use for MAC generation within Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mac-length",
          description: "The length of a MAC under generation",
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
      name: "generate-mac-emv-pin-change",
      description:
        "Generates an issuer script mac for EMV payment cards that use offline PINs as the cardholder verification method (CVM). This operation generates an authenticated issuer script response by appending the incoming message data (APDU command) with the target encrypted PIN block in ISO2 format. The command structure and method to send the issuer script update to the card is not defined by this operation and is typically determined by the applicable payment card scheme. The primary inputs to this operation include the incoming new encrypted pinblock, PIN encryption key (PEK), issuer master key (IMK), primary account number (PAN), and the payment card derivation method. The operation uses two issuer master keys - secure messaging for confidentiality (IMK-SMC) and secure messaging for integrity (IMK-SMI). The SMC key is used to internally derive a key to secure the pin, while SMI key is used to internally derive a key to authenticate the script reponse as per the EMV 4.4 - Book 2 - Security and Key Management specification.  This operation supports Amex, EMV2000, EMVCommon, Mastercard and Visa derivation methods, each requiring specific input parameters. Users must follow the specific derivation method and input parameters defined by the respective payment card scheme.  Use GenerateMac operation when sending a script update to an EMV card that does not involve PIN change. When assigning IAM permissions, it is important to understand that EncryptData using EMV keys and GenerateMac perform similar functions to this command.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     EncryptData     GenerateMac",
      options: [
        {
          name: "--new-pin-pek-identifier",
          description:
            "The keyARN of the PEK protecting the incoming new encrypted PIN block",
          args: {
            name: "string",
          },
        },
        {
          name: "--new-encrypted-pin-block",
          description:
            "The incoming new encrypted PIN block data for offline pin change on an EMV card",
          args: {
            name: "string",
          },
        },
        {
          name: "--pin-block-format",
          description:
            "The PIN encoding format of the incoming new encrypted PIN block as specified in ISO 9564",
          args: {
            name: "string",
            suggestions: ["ISO_FORMAT_0", "ISO_FORMAT_1", "ISO_FORMAT_3"],
          },
        },
        {
          name: "--secure-messaging-integrity-key-identifier",
          description:
            "The keyARN of the issuer master key (IMK-SMI) used to authenticate the issuer script response",
          args: {
            name: "string",
          },
        },
        {
          name: "--secure-messaging-confidentiality-key-identifier",
          description:
            "The keyARN of the issuer master key (IMK-SMC) used to protect the PIN block data in the issuer script response",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-data",
          description:
            "The message data is the APDU command from the card reader or terminal. The target encrypted PIN block, after translation to ISO2 format, is appended to this message data to generate an issuer script response",
          args: {
            name: "string",
          },
        },
        {
          name: "--derivation-method-attributes",
          description:
            "The attributes and data values to derive payment card specific confidentiality and integrity keys",
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
      name: "generate-pin-data",
      description:
        "Generates pin-related data such as PIN, PIN Verification Value (PVV), PIN Block, and PIN Offset during new card issuance or reissuance. For more information, see Generate PIN data in the Amazon Web Services Payment Cryptography User Guide. PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation generates PIN, PVV, or PIN Offset and then encrypts it using Pin Encryption Key (PEK) to create an EncryptedPinBlock for transmission from Amazon Web Services Payment Cryptography. This operation uses a separate Pin Verification Key (PVK) for VISA PVV generation.  Using ECDH key exchange, you can receive cardholder selectable PINs into Amazon Web Services Payment Cryptography. The ECDH derived key protects the incoming PIN block. You can also use it for reveal PIN, wherein the generated PIN block is protected by the ECDH derived key before transmission from Amazon Web Services Payment Cryptography. For more information on establishing ECDH derived keys, see the Generating keys in the Amazon Web Services Payment Cryptography User Guide. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.  Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     GenerateCardValidationData     TranslatePinData     VerifyPinData",
      options: [
        {
          name: "--generation-key-identifier",
          description:
            "The keyARN of the PEK that Amazon Web Services Payment Cryptography uses for pin data generation",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-key-identifier",
          description:
            "The keyARN of the PEK that Amazon Web Services Payment Cryptography uses to encrypt the PIN Block. For ECDH, it is the keyARN of the asymmetric ECC key",
          args: {
            name: "string",
          },
        },
        {
          name: "--generation-attributes",
          description:
            "The attributes and values to use for PIN, PVV, or PIN Offset generation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--pin-data-length",
          description: "The length of PIN under generation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--primary-account-number",
          description:
            "The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder",
          args: {
            name: "string",
          },
        },
        {
          name: "--pin-block-format",
          description:
            "The PIN encoding format for pin data generation as specified in ISO 9564. Amazon Web Services Payment Cryptography supports ISO_Format_0, ISO_Format_3 and ISO_Format_4. The ISO_Format_0 PIN block format is equivalent to the ANSI X9.8, VISA-1, and ECI-1 PIN block formats. It is similar to a VISA-4 PIN block format. It supports a PIN from 4 to 12 digits in length. The ISO_Format_3 PIN block format is the same as ISO_Format_0 except that the fill digits are random values from 10 to 15. The ISO_Format_4 PIN block format is the only one supporting AES encryption",
          args: {
            name: "string",
            suggestions: [
              "ISO_FORMAT_0",
              "ISO_FORMAT_1",
              "ISO_FORMAT_3",
              "ISO_FORMAT_4",
            ],
          },
        },
        {
          name: "--encryption-wrapped-key",
          description:
            "Parameter information of a WrappedKeyBlock for encryption key exchange",
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
      name: "re-encrypt-data",
      description:
        "Re-encrypts ciphertext using DUKPT, symmetric, or asymmetric data encryption keys.  You can either generate an encryption key within Amazon Web Services Payment Cryptography by calling CreateKey or import your own encryption key by calling ImportKey. The KeyArn for use with this operation must be in a compatible key state with KeyModesOfUse set to Encrypt.  This operation also supports dynamic keys, allowing you to pass a dynamic encryption key as a TR-31 WrappedKeyBlock. This can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To re-encrypt using dynamic keys, the keyARN is the Key Encryption Key (KEK) of the TR-31 wrapped encryption key material. The incoming wrapped key shall have a key purpose of D0 with a mode of use of B or D. For more information, see Using Dynamic Keys in the Amazon Web Services Payment Cryptography User Guide. Amazon Web Services Payment Cryptography supports the following encryption key schemes:    DUKPT: TDES and AES algorithms. To encrypt using DUKPT, a DUKPT key must already exist within your account with KeyModesOfUse set to DeriveKey or a new DUKPT can be generated by calling CreateKey.    Symmetric: TDES and AES algorithms.    Asymmetric: RSA. You can use an RSA key on either the incoming or the outgoing side, paired with a symmetric key on the other side.   For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     DecryptData     EncryptData     GetPublicCertificate     ImportKey",
      options: [
        {
          name: "--incoming-key-identifier",
          description:
            "The keyARN of the encryption key of incoming ciphertext data. When a WrappedKeyBlock is provided, this value will be the identifier to the key wrapping key. Otherwise, it is the key identifier used to perform the operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--outgoing-key-identifier",
          description:
            "The keyARN of the encryption key of outgoing ciphertext data after encryption by Amazon Web Services Payment Cryptography",
          args: {
            name: "string",
          },
        },
        {
          name: "--cipher-text",
          description:
            "Ciphertext to be encrypted. The minimum allowed length is 16 bytes and maximum allowed length is 4096 bytes",
          args: {
            name: "string",
          },
        },
        {
          name: "--incoming-encryption-attributes",
          description: "The attributes and values for incoming ciphertext",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outgoing-encryption-attributes",
          description:
            "The attributes and values for outgoing ciphertext data after encryption by Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--incoming-wrapped-key",
          description:
            "The WrappedKeyBlock containing the encryption key of incoming ciphertext data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outgoing-wrapped-key",
          description:
            "The WrappedKeyBlock containing the encryption key of outgoing ciphertext data after encryption by Amazon Web Services Payment Cryptography",
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
      name: "translate-key-material",
      description:
        "Translates an cryptographic key between different wrapping keys without importing the key into Amazon Web Services Payment Cryptography. This operation can be used when key material is frequently rotated, such as during every card transaction, and there is a need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. It translates short-lived transaction keys such as PEK generated for each transaction and wrapped with an ECDH derived wrapping key to another KEK wrapping key.  Before using this operation, you must first request the public key certificate of the ECC key pair generated within Amazon Web Services Payment Cryptography to establish an ECDH key agreement. In TranslateKeyData, the service uses its own ECC key pair, public certificate of receiving ECC key pair, and the key derivation parameters to generate a derived key. The service uses this derived key to unwrap the incoming transaction key received as a TR31WrappedKeyBlock and re-wrap using a user provided KEK to generate an outgoing Tr31WrappedKeyBlock. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     CreateKey     GetPublicCertificate     ImportKey",
      options: [
        {
          name: "--incoming-key-material",
          description:
            "Parameter information of the TR31WrappedKeyBlock containing the transaction key",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outgoing-key-material",
          description:
            "Parameter information of the wrapping key used to wrap the transaction key in the outgoing TR31WrappedKeyBlock",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key-check-value-algorithm",
          description:
            "The key check value (KCV) algorithm used for calculating the KCV of the derived key",
          args: {
            name: "string",
            suggestions: ["CMAC", "ANSI_X9_24", "HMAC", "SHA_1"],
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
      name: "translate-pin-data",
      description:
        "Translates encrypted PIN block from and to ISO 9564 formats 0,1,3,4. For more information, see Translate PIN data in the Amazon Web Services Payment Cryptography User Guide. PIN block translation involves changing a PIN block from one encryption key to another and optionally change its format. PIN block translation occurs entirely within the HSM boundary and PIN data never enters or leaves Amazon Web Services Payment Cryptography in clear text. The encryption key transformation can be from PEK (Pin Encryption Key) to BDK (Base Derivation Key) for DUKPT or from BDK for DUKPT to PEK. Amazon Web Services Payment Cryptography also supports use of dynamic keys and ECDH (Elliptic Curve Diffie-Hellman) based key exchange for this operation. Dynamic keys allow you to pass a PEK as a TR-31 WrappedKeyBlock. They can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To translate PIN block using dynamic keys, the keyARN is the Key Encryption Key (KEK) of the TR-31 wrapped PEK. The incoming wrapped key shall have a key purpose of P0 with a mode of use of B or D. For more information, see Using Dynamic Keys in the Amazon Web Services Payment Cryptography User Guide. Using ECDH key exchange, you can receive cardholder selectable PINs into Amazon Web Services Payment Cryptography. The ECDH derived key protects the incoming PIN block, which is translated to a PEK encrypted PIN block for use within the service. You can also use ECDH for reveal PIN, wherein the service translates the PIN block from PEK to a ECDH derived encryption key. For more information on establishing ECDH derived keys, see the Creating keys in the Amazon Web Services Payment Cryptography User Guide. The allowed combinations of PIN block format translations are guided by PCI. It is important to note that not all encrypted PIN block formats (example, format 1) require PAN (Primary Account Number) as input. And as such, PIN block format that requires PAN (example, formats 0,3,4) cannot be translated to a format (format 1) that does not require a PAN for generation.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.  Amazon Web Services Payment Cryptography currently supports ISO PIN block 4 translation for PIN block built using legacy PAN length. That is, PAN is the right most 12 digits excluding the check digits.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     GeneratePinData     VerifyPinData",
      options: [
        {
          name: "--incoming-key-identifier",
          description:
            "The keyARN of the encryption key under which incoming PIN block data is encrypted. This key type can be PEK or BDK. For dynamic keys, it is the keyARN of KEK of the TR-31 wrapped PEK. For ECDH, it is the keyARN of the asymmetric ECC key",
          args: {
            name: "string",
          },
        },
        {
          name: "--outgoing-key-identifier",
          description:
            "The keyARN of the encryption key for encrypting outgoing PIN block data. This key type can be PEK or BDK. For ECDH, it is the keyARN of the asymmetric ECC key",
          args: {
            name: "string",
          },
        },
        {
          name: "--incoming-translation-attributes",
          description:
            "The format of the incoming PIN block data for translation within Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outgoing-translation-attributes",
          description:
            "The format of the outgoing PIN block data after translation by Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encrypted-pin-block",
          description:
            "The encrypted PIN block data that Amazon Web Services Payment Cryptography translates",
          args: {
            name: "string",
          },
        },
        {
          name: "--incoming-dukpt-attributes",
          description:
            "The attributes and values to use for incoming DUKPT encryption key for PIN block translation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outgoing-dukpt-attributes",
          description:
            "The attributes and values to use for outgoing DUKPT encryption key after PIN block translation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--incoming-wrapped-key",
          description:
            "The WrappedKeyBlock containing the encryption key under which incoming PIN block data is encrypted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outgoing-wrapped-key",
          description:
            "The WrappedKeyBlock containing the encryption key for encrypting outgoing PIN block data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--incoming-as2805-attributes",
          description:
            "The attributes and values to use for incoming AS2805 encryption key for PIN block translation",
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
      name: "verify-auth-request-cryptogram",
      description:
        "Verifies Authorization Request Cryptogram (ARQC) for a EMV chip payment card authorization. For more information, see Verify auth request cryptogram in the Amazon Web Services Payment Cryptography User Guide. ARQC generation is done outside of Amazon Web Services Payment Cryptography and is typically generated on a point of sale terminal for an EMV chip card to obtain payment authorization during transaction time. For ARQC verification, you must first import the ARQC generated outside of Amazon Web Services Payment Cryptography by calling ImportKey. This operation uses the imported ARQC and an major encryption key (DUKPT) created by calling CreateKey to either provide a boolean ARQC verification result or provide an APRC (Authorization Response Cryptogram) response using Method 1 or Method 2. The ARPC_METHOD_1 uses AuthResponseCode to generate ARPC and ARPC_METHOD_2 uses CardStatusUpdate to generate ARPC.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.  Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     VerifyCardValidationData     VerifyPinData",
      options: [
        {
          name: "--key-identifier",
          description:
            "The keyARN of the major encryption key that Amazon Web Services Payment Cryptography uses for ARQC verification",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-data",
          description:
            "The transaction data that Amazon Web Services Payment Cryptography uses for ARQC verification. The same transaction is used for ARQC generation outside of Amazon Web Services Payment Cryptography",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-request-cryptogram",
          description:
            "The auth request cryptogram imported into Amazon Web Services Payment Cryptography for ARQC verification using a major encryption key and transaction data",
          args: {
            name: "string",
          },
        },
        {
          name: "--major-key-derivation-mode",
          description:
            "The method to use when deriving the major encryption key for ARQC verification within Amazon Web Services Payment Cryptography. The same key derivation mode was used for ARQC generation outside of Amazon Web Services Payment Cryptography",
          args: {
            name: "string",
            suggestions: ["EMV_OPTION_A", "EMV_OPTION_B"],
          },
        },
        {
          name: "--session-key-derivation-attributes",
          description:
            "The attributes and values to use for deriving a session key for ARQC verification within Amazon Web Services Payment Cryptography. The same attributes were used for ARQC generation outside of Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auth-response-attributes",
          description:
            "The attributes and values for auth request cryptogram verification. These parameters are required in case using ARPC Method 1 or Method 2 for ARQC verification",
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
      name: "verify-card-validation-data",
      description:
        "Verifies card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) and Card Security Codes (CSC). For more information, see Verify card data in the Amazon Web Services Payment Cryptography User Guide. This operation validates the CVV or CSC codes that is printed on a payment credit or debit card during card payment transaction. The input values are typically provided as part of an inbound transaction to an issuer or supporting platform partner. Amazon Web Services Payment Cryptography uses CVV or CSC, PAN (Primary Account Number) and expiration date of the card to check its validity during transaction processing. In this operation, the CVK (Card Verification Key) encryption key for use with card data verification is same as the one in used for GenerateCardValidationData.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     GenerateCardValidationData     VerifyAuthRequestCryptogram     VerifyPinData",
      options: [
        {
          name: "--key-identifier",
          description:
            "The keyARN of the CVK encryption key that Amazon Web Services Payment Cryptography uses to verify card data",
          args: {
            name: "string",
          },
        },
        {
          name: "--primary-account-number",
          description:
            "The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-attributes",
          description:
            "The algorithm to use for verification of card data within Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-data",
          description:
            "The CVV or CSC value for use for card data verification within Amazon Web Services Payment Cryptography",
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
      name: "verify-mac",
      description:
        "Verifies a Message Authentication Code (MAC).  You can use this operation to verify MAC for message data authentication such as . In this operation, you must use the same message data, secret encryption key and MAC algorithm that was used to generate MAC. You can use this operation to verify a DUPKT, CMAC, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     GenerateMac",
      options: [
        {
          name: "--key-identifier",
          description:
            "The keyARN of the encryption key that Amazon Web Services Payment Cryptography uses to verify MAC data",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-data",
          description:
            "The data on for which MAC is under verification. This value must be hexBinary",
          args: {
            name: "string",
          },
        },
        {
          name: "--mac",
          description: "The MAC being verified",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-attributes",
          description:
            "The attributes and data values to use for MAC verification within Amazon Web Services Payment Cryptography",
          args: {
            name: "structure",
          },
        },
        {
          name: "--mac-length",
          description: "The length of the MAC",
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
      name: "verify-pin-data",
      description:
        "Verifies pin-related data such as PIN and PIN Offset using algorithms including VISA PVV and IBM3624. For more information, see Verify PIN data in the Amazon Web Services Payment Cryptography User Guide. This operation verifies PIN data for user payment card. A card holder PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation uses PIN Verification Key (PVK) for PIN or PIN Offset generation and then encrypts it using PIN Encryption Key (PEK) to create an EncryptedPinBlock for transmission from Amazon Web Services Payment Cryptography.  For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide.   Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.  Related operations:     GeneratePinData     TranslatePinData",
      options: [
        {
          name: "--verification-key-identifier",
          description: "The keyARN of the PIN verification key",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-key-identifier",
          description:
            "The keyARN of the encryption key under which the PIN block data is encrypted. This key type can be PEK or BDK",
          args: {
            name: "string",
          },
        },
        {
          name: "--verification-attributes",
          description: "The attributes and values for PIN data verification",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encrypted-pin-block",
          description:
            "The encrypted PIN block data that Amazon Web Services Payment Cryptography verifies",
          args: {
            name: "string",
          },
        },
        {
          name: "--primary-account-number",
          description:
            "The Primary Account Number (PAN), a unique identifier for a payment credit or debit card that associates the card with a specific account holder",
          args: {
            name: "string",
          },
        },
        {
          name: "--pin-block-format",
          description:
            "The PIN encoding format for pin data generation as specified in ISO 9564. Amazon Web Services Payment Cryptography supports ISO_Format_0 and ISO_Format_3. The ISO_Format_0 PIN block format is equivalent to the ANSI X9.8, VISA-1, and ECI-1 PIN block formats. It is similar to a VISA-4 PIN block format. It supports a PIN from 4 to 12 digits in length. The ISO_Format_3 PIN block format is the same as ISO_Format_0 except that the fill digits are random values from 10 to 15",
          args: {
            name: "string",
            suggestions: [
              "ISO_FORMAT_0",
              "ISO_FORMAT_1",
              "ISO_FORMAT_3",
              "ISO_FORMAT_4",
            ],
          },
        },
        {
          name: "--pin-data-length",
          description: "The length of PIN being verified",
          args: {
            name: "integer",
          },
        },
        {
          name: "--dukpt-attributes",
          description:
            "The attributes and values for the DUKPT encrypted PIN block data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-wrapped-key",
          description:
            "Parameter information of a WrappedKeyBlock for encryption key exchange",
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
  ],
};

export default completionSpec;
