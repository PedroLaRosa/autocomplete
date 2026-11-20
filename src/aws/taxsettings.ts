const completionSpec: Fig.Spec = {
  name: "taxsettings",
  description:
    'You can use the tax setting API to programmatically set, modify, and delete the tax registration number (TRN), associated business legal name, and address (Collectively referred to as "TRN information"). You can also programmatically view TRN information and tax addresses ("Tax profiles").  You can use this API to automate your TRN information settings instead of manually using the console. Service Endpoint   https://tax.us-east-1.amazonaws.com',
  subcommands: [
    {
      name: "batch-delete-tax-registration",
      description:
        "Deletes tax registration for multiple accounts in batch. This can be used to delete tax registrations for up to five accounts in one batch.   This API operation can't be used to delete your tax registration in Brazil. Use the Payment preferences page in the Billing and Cost Management console instead",
      options: [
        {
          name: "--account-ids",
          description: "List of unique account identifiers",
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
      name: "batch-get-tax-exemptions",
      description:
        "Get the active tax exemptions for a given list of accounts. The IAM action is tax:GetExemptions",
      options: [
        {
          name: "--account-ids",
          description: "List of unique account identifiers",
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
      name: "batch-put-tax-registration",
      description:
        "Adds or updates tax registration for multiple accounts in batch. This can be used to add or update tax registrations for up to five accounts in one batch. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first. To call this API operation for specific countries, see the following country-specific requirements.  Argentina     RegistrationType valid values are CUIT (Clave Única de Identificación Tributaria) and CDI (Clave de Identificación).    Bangladesh    You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Brazil    You must complete the tax registration process in the Payment preferences page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation.   For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address.    Colombia    You can provide a Registro Único Tributario (RUT) document in the verificationDetails field.   If you provide the RUT document, you do not need to provide address and legal name. These will be populated based on your document.    Georgia    The valid personType values are Physical Person and Business.    Indonesia     PutTaxRegistration: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022.    BatchPutTaxRegistration: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022, through our third-party partner PT Achilles Advanced Management (OnlinePajak).   You must specify the taxRegistrationNumberType in the indonesiaAdditionalInfo field of the additionalTaxInformation object.   If you specify decisionNumber, you must specify the ppnExceptionDesignationCode in the indonesiaAdditionalInfo field of the additionalTaxInformation object. If the taxRegistrationNumberType is set to NPWP or NITKU, valid values for ppnExceptionDesignationCode are either 01, 02, 03, 07, or 08. For other taxRegistrationNumberType values, ppnExceptionDesignationCode must be either 01, 07, or 08.   If ppnExceptionDesignationCode is 07 or 08, you must specify the decisionNumber in the indonesiaAdditionalInfo field of the additionalTaxInformation object.    Kenya    You must specify the personType in the kenyaAdditionalInfo field of the additionalTaxInformation object.   If the personType is Physical Person, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Malaysia    The sector valid values are Business and Individual.    RegistrationType valid values are NRIC for individual, and TIN and sales and service tax (SST) for Business.   For individual, you can specify the taxInformationNumber in MalaysiaAdditionalInfo with NRIC type, and a valid MyKad or NRIC number.   For business, you must specify a businessRegistrationNumber in MalaysiaAdditionalInfo with a TIN type and tax identification number.   For business resellers, you must specify a businessRegistrationNumber and taxInformationNumber in MalaysiaAdditionalInfo with a sales and service tax (SST) type and a valid SST number.   For business resellers with service codes, you must specify businessRegistrationNumber, taxInformationNumber, and distinct serviceTaxCodes in MalaysiaAdditionalInfo with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you’re an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number.   Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate.   Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller. Taxable service and service tax codes: Consultancy - 9907061674 Training or coaching service - 9907071685 IT service - 9907101676 Digital services and electronic medium - 9907121690    Mexico    You must provide a Constancia de Situación fiscal (CSF) document in the verificationDetails field.   You do not need to provide address and legal name. These will be populated based on your tax registration number.    Nepal    The sector valid values are Business and Individual.    Saudi Arabia    For address, you must specify addressLine3.    South Korea    You must specify the certifiedEmailId and legalName in the TaxRegistrationEntry object. Use Korean characters for legalName.   You must specify the businessRepresentativeName, itemOfBusiness, and lineOfBusiness in the southKoreaAdditionalInfo field of the additionalTaxInformation object. Use Korean characters for these fields.   You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.   For the address object, use Korean characters for addressLine1, addressLine2 city, postalCode, and stateOrRegion.    Spain    You must specify the registrationType in the spainAdditionalInfo field of the additionalTaxInformation object.   If the registrationType is Local, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Turkey    You must specify the sector in the taxRegistrationEntry object.   If your sector is Business, Individual, or Government:   Specify the taxOffice. If your sector is Individual, don't enter this value.   (Optional) Specify the kepEmailId. If your sector is Individual, don't enter this value.    Note: In the Tax Settings page of the Billing console, Government appears as Public institutions      If your sector is Business and you're subject to KDV tax, you must specify your industry in the industries field.   For address, you must specify districtOrCounty.    Ukraine    The sector valid values are Business and Individual.    Uruguay     RegistrationType valid values are RUT (Registro Único Tributario), NIE (Numero de Identificacion del Extranjero), and CI (Cedula Identidad).    Philippines    You can optionally specify the isVatRegistered in the philippinesAdditionalInfo field of the additionalTaxInformation object to indicate your VAT registration status with the Bureau of Internal Revenue (BIR).    Belgium    You can optionally specify the peppolId in the belgiumAdditionalInfo field of the additionalTaxInformation object.    Chile    You can optionally specify the documentType and businessActivity in the chileAdditionalInfo field of the additionalTaxInformation object.    France    You must specify the sirenNumber in the franceAdditionalInfo field of the additionalTaxInformation object.   You can optionally specify the eInvoiceRoutingCode in the franceAdditionalInfo field of the additionalTaxInformation object.    Monaco    You must specify the businessNumber in the monacoAdditionalInfo field of the additionalTaxInformation object.    Germany    You must provide at least one of the following: a Tax Registration Number (TRN) (registrationId), the economicIdentificationNumber, or the steuernummer.   You can optionally specify the economicIdentificationNumber (Wirtschafts-Identifikationsnummer, or W-IdNr) and the steuernummer (tax number issued by the local tax office) in the germanyAdditionalInfo field of the additionalTaxInformation object.    Poland    You can optionally specify the taxRegistrationNumberType in the polandAdditionalInfo field of the additionalTaxInformation object. Valid values are EUTaxRegistrationNumber, LocalTaxRegistrationNumber, or LocalRegistrationNumber",
      options: [
        {
          name: "--account-ids",
          description: "List of unique account identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--tax-registration-entry",
          description:
            "Your TRN information that will be stored to the accounts mentioned in putEntries",
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
      name: "delete-supplemental-tax-registration",
      description:
        "Deletes a supplemental tax registration for a single account",
      options: [
        {
          name: "--authority-id",
          description:
            "The unique authority Id for the supplemental TRN information that needs to be deleted",
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
      name: "delete-tax-registration",
      description:
        "Deletes tax registration for a single account.   This API operation can't be used to delete your tax registration in Brazil. Use the Payment preferences page in the Billing and Cost Management console instead",
      options: [
        {
          name: "--account-id",
          description:
            "Unique account identifier for the TRN information that needs to be deleted. If this isn't passed, the account ID corresponding to the credentials of the API caller will be used for this parameter",
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
      name: "get-tax-exemption-types",
      description:
        "Get supported tax exemption types. The IAM action is tax:GetExemptions",
      options: [
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
      name: "get-tax-inheritance",
      description: "The get account tax inheritance status",
      options: [
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
      name: "get-tax-registration",
      description: "Retrieves tax registration for a single account",
      options: [
        {
          name: "--account-id",
          description: "Your unique account identifier",
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
      name: "get-tax-registration-document",
      description:
        "Downloads your tax documents to the Amazon S3 bucket that you specify in your request",
      options: [
        {
          name: "--destination-s3-location",
          description:
            "The Amazon S3 bucket that you specify to download your tax documents to",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tax-document-metadata",
          description: "The metadata for your tax document",
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
      name: "list-supplemental-tax-registrations",
      description:
        "Retrieves supplemental tax registrations for a single account",
      options: [
        {
          name: "--max-results",
          description:
            "The number of taxRegistrations results you want in one response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token to retrieve the next set of results",
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
      name: "list-tax-exemptions",
      description:
        "Retrieves the tax exemption of accounts listed in a consolidated billing family. The IAM action is tax:GetExemptions",
      options: [
        {
          name: "--max-results",
          description: "The number of results you want in one response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token to retrieve the next set of results",
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
      name: "list-tax-registrations",
      description:
        "Retrieves the tax registration of accounts listed in a consolidated billing family. This can be used to retrieve up to 100 accounts' tax registrations in one call (default 50)",
      options: [
        {
          name: "--max-results",
          description:
            "Number of accountDetails results you want in one response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The token to retrieve the next set of results",
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
      name: "put-supplemental-tax-registration",
      description: "Stores supplemental tax registration for a single account",
      options: [
        {
          name: "--tax-registration-entry",
          description:
            "The supplemental TRN information that will be stored for the caller account ID",
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
      name: "put-tax-exemption",
      description:
        "Adds the tax exemption for a single account or all accounts listed in a consolidated billing family. The IAM action is tax:UpdateExemptions",
      options: [
        {
          name: "--account-ids",
          description: "The list of unique account identifiers",
          args: {
            name: "list",
          },
        },
        {
          name: "--authority",
          description: "The address domain associate with the tax information",
          args: {
            name: "structure",
          },
        },
        {
          name: "--exemption-type",
          description:
            "The exemption type. Use the supported tax exemption type description",
          args: {
            name: "string",
          },
        },
        {
          name: "--exemption-certificate",
          description: "The exemption certificate",
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
      name: "put-tax-inheritance",
      description: "The updated tax inheritance status",
      options: [
        {
          name: "--heritage-status",
          description: "The tax inheritance status",
          args: {
            name: "string",
            suggestions: ["OptIn", "OptOut"],
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
      name: "put-tax-registration",
      description:
        "Adds or updates tax registration for a single account. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first. To call this API operation for specific countries, see the following country-specific requirements.  Argentina     RegistrationType valid values are CUIT (Clave Única de Identificación Tributaria) and CDI (Clave de Identificación).    Bangladesh    You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Brazil    You must complete the tax registration process in the Payment preferences page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation.   For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address.    Colombia    You can provide a Registro Único Tributario (RUT) document in the verificationDetails field.   If you provide the RUT document, you do not need to provide address and legal name. These will be populated based on your document.    Georgia    The valid personType values are Physical Person and Business.    Indonesia     PutTaxRegistration: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022.    BatchPutTaxRegistration: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022, through our third-party partner PT Achilles Advanced Management (OnlinePajak).   You must specify the taxRegistrationNumberType in the indonesiaAdditionalInfo field of the additionalTaxInformation object.   If you specify decisionNumber, you must specify the ppnExceptionDesignationCode in the indonesiaAdditionalInfo field of the additionalTaxInformation object. If the taxRegistrationNumberType is set to NPWP or NITKU, valid values for ppnExceptionDesignationCode are either 01, 02, 03, 07, or 08. For other taxRegistrationNumberType values, ppnExceptionDesignationCode must be either 01, 07, or 08.   If ppnExceptionDesignationCode is 07 or 08, you must specify the decisionNumber in the indonesiaAdditionalInfo field of the additionalTaxInformation object.    Kenya    You must specify the personType in the kenyaAdditionalInfo field of the additionalTaxInformation object.   If the personType is Physical Person, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Malaysia    The sector valid values are Business and Individual.    RegistrationType valid values are NRIC for individual, and TIN and sales and service tax (SST) for Business.   For individual, you can specify the taxInformationNumber in MalaysiaAdditionalInfo with NRIC type, and a valid MyKad or NRIC number.   For business, you must specify a businessRegistrationNumber in MalaysiaAdditionalInfo with a TIN type and tax identification number.   For business resellers, you must specify a businessRegistrationNumber and taxInformationNumber in MalaysiaAdditionalInfo with a sales and service tax (SST) type and a valid SST number.   For business resellers with service codes, you must specify businessRegistrationNumber, taxInformationNumber, and distinct serviceTaxCodes in MalaysiaAdditionalInfo with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you’re an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number.   Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate.   Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller. Taxable service and service tax codes: Consultancy - 9907061674 Training or coaching service - 9907071685 IT service - 9907101676 Digital services and electronic medium - 9907121690    Mexico    You must provide a Constancia de Situación fiscal (CSF) document in the verificationDetails field.   You do not need to provide address and legal name. These will be populated based on your tax registration number.    Nepal    The sector valid values are Business and Individual.    Saudi Arabia    For address, you must specify addressLine3.    South Korea    You must specify the certifiedEmailId and legalName in the TaxRegistrationEntry object. Use Korean characters for legalName.   You must specify the businessRepresentativeName, itemOfBusiness, and lineOfBusiness in the southKoreaAdditionalInfo field of the additionalTaxInformation object. Use Korean characters for these fields.   You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.   For the address object, use Korean characters for addressLine1, addressLine2 city, postalCode, and stateOrRegion.    Spain    You must specify the registrationType in the spainAdditionalInfo field of the additionalTaxInformation object.   If the registrationType is Local, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Turkey    You must specify the sector in the taxRegistrationEntry object.   If your sector is Business, Individual, or Government:   Specify the taxOffice. If your sector is Individual, don't enter this value.   (Optional) Specify the kepEmailId. If your sector is Individual, don't enter this value.    Note: In the Tax Settings page of the Billing console, Government appears as Public institutions      If your sector is Business and you're subject to KDV tax, you must specify your industry in the industries field.   For address, you must specify districtOrCounty.    Ukraine    The sector valid values are Business and Individual.    Uruguay     RegistrationType valid values are RUT (Registro Único Tributario), NIE (Numero de Identificacion del Extranjero), and CI (Cedula Identidad).    Philippines    You can optionally specify the isVatRegistered in the philippinesAdditionalInfo field of the additionalTaxInformation object to indicate your VAT registration status with the Bureau of Internal Revenue (BIR).    Belgium    You can optionally specify the peppolId in the belgiumAdditionalInfo field of the additionalTaxInformation object.    Chile    You can optionally specify the documentType and businessActivity in the chileAdditionalInfo field of the additionalTaxInformation object.    France    You must specify the sirenNumber in the franceAdditionalInfo field of the additionalTaxInformation object.   You can optionally specify the eInvoiceRoutingCode in the franceAdditionalInfo field of the additionalTaxInformation object.    Monaco    You must specify the businessNumber in the monacoAdditionalInfo field of the additionalTaxInformation object.    Germany    You must provide at least one of the following: a Tax Registration Number (TRN) (registrationId), the economicIdentificationNumber, or the steuernummer.   You can optionally specify the economicIdentificationNumber (Wirtschafts-Identifikationsnummer, or W-IdNr) and the steuernummer (tax number issued by the local tax office) in the germanyAdditionalInfo field of the additionalTaxInformation object.    Poland    You can optionally specify the taxRegistrationNumberType in the polandAdditionalInfo field of the additionalTaxInformation object. Valid values are EUTaxRegistrationNumber, LocalTaxRegistrationNumber, or LocalRegistrationNumber",
      options: [
        {
          name: "--account-id",
          description: "Your unique account identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--tax-registration-entry",
          description:
            "Your TRN information that will be stored to the account mentioned in accountId",
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
