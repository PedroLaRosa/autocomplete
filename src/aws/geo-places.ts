const completionSpec: Fig.Spec = {
  name: "geo-places",
  description:
    "The Places API enables powerful location search and geocoding capabilities for your applications, offering global coverage with rich, detailed information. Key features include:    Forward and reverse geocoding for addresses and coordinates. See Geocode and ReverseGeocode.   Comprehensive place searches with detailed information. See SearchText, SearchNearby, and GetPlace. Place information you can find include:   Business names and addresses   Contact information   Hours of operation   Points of Interest (POI) categories   Food types for restaurants   Chain affiliation for relevant businesses     Address and place completion as users type, enhancing input efficiency by completing partial queries with valid addresses. See Autocomplete.   Intelligent place and query recommendation based on user's input or context, returning relevant places, points of interest, query terms, or search categories. See Suggest.   Global data coverage with a wide range of POI categories.   Regular data updates to ensure accuracy and relevance.   Bulk address validation for verifying and standardizing large volumes of addresses in a single operation using Amazon Location Service Jobs",
  subcommands: [
    {
      name: "autocomplete",
      description:
        "Autocomplete completes potential places and addresses as the user types, based on the partial input. The API enhances the efficiency and accuracy of address by completing query based on a few entered keystrokes. It helps you by completing partial queries with valid address completion. Also, the API supports the filtering of results based on geographic location, country, or specific place types, and can be tailored using optional parameters like language and political views. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. For more information, see Autocomplete in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--query-text",
          description:
            "The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.  The fields QueryText, and QueryID are mutually exclusive",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call. Default value: 5",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bias-position",
          description:
            "The position in longitude and latitude that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in [lng, lat] and in the WGS 84 format.  The fields BiasPosition, FilterBoundingBox, and FilterCircle are mutually exclusive",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--postal-code-mode",
          description:
            "The PostalCodeMode affects how postal code results are returned. If a postal code spans multiple localities and this value is empty, partial district or locality information may be returned under a single postal code result entry. If it's populated with the value EnumerateSpannedLocalities, all cities in that postal code are returned. If it's populated with the value EnumerateSpannedDistricts, all combinations of the postal code with the corresponding district and city names are returned",
          args: {
            name: "string",
            suggestions: [
              "MergeAllSpannedLocalities",
              "EnumerateSpannedLocalities",
              "EnumerateSpannedDistricts",
            ],
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters that can be requested for each result",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. The following political views are currently supported:    ARG: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands    EGY: Egypt's view on Bir Tawil    IND: India's view on Gilgit-Baltistan    KEN: Kenya's view on the Ilemi Triangle    MAR: Morocco's view on Western Sahara    RUS: Russia's view on Crimea    SDN: Sudan's view on the Halaib Triangle    SRB: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands    SUR: Suriname's view on the Courantyne Headwaters and Lawa Headwaters    SYR: Syria's view on the Golan Heights    TUR: Turkey's view on Cyprus and Northern Cyprus    TZA: Tanzania's view on Lake Malawi    URY: Uruguay's view on Rincon de Artigas    VNM: Vietnam's view on the Paracel Islands and Spratly Islands",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the query results will be persisted in customer infrastructure. Defaults to SingleUse (not stored). Currently, Autocomplete does not support storage of results",
          args: {
            name: "string",
            suggestions: ["SingleUse"],
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
      name: "geocode",
      description:
        "Geocode converts a textual address or place into geographic coordinates. You can obtain geographic coordinates, address component, and other related information. It supports flexible queries, including free-form text or structured queries with components like street names, postal codes, and regions. The Geocode API can also provide additional features such as time zone information and the inclusion of political views. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. For more information, see Geocode in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--query-text",
          description:
            "The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-components",
          description:
            "A structured free text query allows you to search for places by the name or text representation of specific properties of the place",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call. Default value: 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bias-position",
          description:
            "The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in [lng, lat] and in the WGS 84 format",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters, such as time zone, that can be requested for each result",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the query results will be persisted in customer infrastructure. Defaults to SingleUse (not stored). Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.   When storing Geocode responses, you must set this field to Storage to comply with the terms of service. These requests will be charged at a higher rate. Please review the user agreement and service pricing structure to determine the correct setting for your use case",
          args: {
            name: "string",
            suggestions: ["SingleUse", "Storage"],
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "--postal-code-mode",
          description:
            "The PostalCodeMode affects how postal code results are returned. If a postal code spans multiple localities and this value is empty, partial district or locality information may be returned under a single postal code result entry. If it's populated with the value EnumerateSpannedLocalities, all cities in that postal code are returned. If it's populated with the value EnumerateSpannedDistricts, all combinations of the postal code with the corresponding district and city names are returned",
          args: {
            name: "string",
            suggestions: [
              "MergeAllSpannedLocalities",
              "EnumerateSpannedLocalities",
              "EnumerateSpannedDistricts",
            ],
          },
        },
        {
          name: "--address-translations",
          description:
            "Specifies which address components to include translations for. Translations include all name variants and alternative names for the requested fields in all available languages. Valid values are District, Locality, Region, and SubRegion",
          args: {
            name: "list",
          },
        },
        {
          name: "--address-names-mode",
          description:
            "Specifies how address names are returned. If not set, the service returns normalized (official) names by default. When set to Matched, address names in the response are based on the input query rather than official names. When set to Administrative, the service returns the official administrative names for address components. Administrative currently applies only to addresses in the United States",
          args: {
            name: "string",
            suggestions: ["Matched", "Administrative"],
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
      name: "get-place",
      description:
        "GetPlace finds a place by its unique ID. A PlaceId is returned by other place operations. For more information, see GetPlace in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--place-id",
          description:
            "The PlaceId of the place you wish to receive the information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters such as time zone that can be requested for each result. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the TimeZone value",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the following codes: en, id, km, lo, ms, my, pt, th, tl, vi, zh",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the query results will be persisted in customer infrastructure. Defaults to SingleUse (not stored). Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.   When storing GetPlace responses, you must set this field to Storage to comply with the terms of service. These requests will be charged at a higher rate. Please review the user agreement and service pricing structure to determine the correct setting for your use case",
          args: {
            name: "string",
            suggestions: ["SingleUse", "Storage"],
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "--address-names-mode",
          description:
            "Specifies how address names are returned. When set to Administrative, the service returns the official administrative names for address components. Administrative currently applies only to addresses in the United States",
          args: {
            name: "string",
            suggestions: ["Administrative"],
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
      name: "reverse-geocode",
      description:
        "ReverseGeocode converts geographic coordinates into a human-readable address or place. You can obtain address component, and other related information such as place type, category, street information. The Reverse Geocode API supports filtering to on place type so that you can refine result based on your need. Also, The Reverse Geocode API can also provide additional features such as time zone information and the inclusion of political views. For more information, see Reverse Geocode in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--query-position",
          description:
            "The position in World Geodetic System (WGS 84) format: [longitude, latitude] for which you are querying nearby results for. Results closer to the position will be ranked higher then results further away from the position",
          args: {
            name: "list",
          },
        },
        {
          name: "--query-radius",
          description:
            "The maximum distance in meters from the QueryPosition from which a result will be returned. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only up to a maximum value of 100,000",
          args: {
            name: "long",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call. Default value: 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters, such as time zone that can be requested for each result. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the TimeZone value",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the following codes: en, id, km, lo, ms, my, pt, th, tl, vi, zh",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the query results will be persisted in customer infrastructure. Defaults to SingleUse (not stored).   When storing ReverseGeocode responses, you must set this field to Storage to comply with the terms of service. These requests will be charged at a higher rate. Please review the user agreement and service pricing structure to determine the correct setting for your use case",
          args: {
            name: "string",
            suggestions: ["SingleUse", "Storage"],
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "--heading",
          description:
            "The heading in degrees from true north in a navigation context. The heading is measured as the angle clockwise from the North direction. Example: North is 0 degrees, East is 90 degrees, South is 180 degrees, and West is 270 degrees",
          args: {
            name: "double",
          },
        },
        {
          name: "--address-names-mode",
          description:
            "Specifies how address names are returned. When set to Administrative, the service returns the official administrative names for address components. Administrative currently applies only to addresses in the United States",
          args: {
            name: "string",
            suggestions: ["Administrative"],
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
      name: "search-nearby",
      description:
        "SearchNearby queries for points of interest within a radius from a central coordinates, returning place results with optional filters such as categories, business chains, food types and more. The API returns details such as a place name, address, phone, category, food type, contact, opening hours. Also, the API can return phonemes, time zones and more based on requested parameters. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. For more information, see Search Nearby in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--query-position",
          description:
            "The position in World Geodetic System (WGS 84) format: [longitude, latitude] for which you are querying nearby results for. Results closer to the position will be ranked higher then results further away from the position",
          args: {
            name: "list",
          },
        },
        {
          name: "--query-radius",
          description:
            "The maximum distance in meters from the QueryPosition from which a result will be returned.  The fields QueryText, and QueryID are mutually exclusive",
          args: {
            name: "long",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call. Default value: 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters, such as time zone, that can be requested for each result",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the query results will be persisted in customer infrastructure. Defaults to SingleUse (not stored). Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.   When storing SearchNearby responses, you must set this field to Storage to comply with the terms of service. These requests will be charged at a higher rate. Please review the user agreement and service pricing structure to determine the correct setting for your use case",
          args: {
            name: "string",
            suggestions: ["SingleUse", "Storage"],
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
      name: "search-text",
      description:
        "SearchText searches for geocode and place information. You can then complete a follow-up query suggested from the Suggest API via a query id. For more information, see Search Text in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--query-text",
          description:
            "The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.  Exactly one of the following fields must be set: QueryText or QueryId",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The query Id returned by the suggest API. If passed in the request, the SearchText API will preform a SearchText query with the improved query terms for the original query made to the suggest API. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.  Exactly one of the following fields must be set: QueryText or QueryId",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call. Default value: 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bias-position",
          description:
            "The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in [lng, lat] and in the WGS 84 format.  Exactly one of the following fields must be set: BiasPosition, Filter.BoundingBox, or Filter.Circle",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters, such as time zone, that can be requested for each result. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the TimeZone value",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the following codes: en, id, km, lo, ms, my, pt, th, tl, vi, zh",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the query results will be persisted in customer infrastructure. Defaults to SingleUse (not stored).   When storing SearchText responses, you must set this field to Storage to comply with the terms of service. These requests will be charged at a higher rate. Please review the user agreement and service pricing structure to determine the correct setting for your use case",
          args: {
            name: "string",
            suggestions: ["SingleUse", "Storage"],
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page",
          args: {
            name: "string",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Indicates the mode of mobility used by the end user. This is used to improve the relevance of search results. Valid values are Car, Scooter, and Truck",
          args: {
            name: "string",
            suggestions: ["Car", "Scooter", "Truck"],
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
      name: "suggest",
      description:
        "Suggest provides intelligent predictions or recommendations based on the user's input or context, such as relevant places, points of interest, query terms or search category. It is designed to help users find places or point of interests candidates or identify a follow on query based on incomplete or misspelled queries. It returns a list of possible matches or refinements that can be used to formulate a more accurate query. Users can select the most appropriate suggestion and use it for further searching. The API provides options for filtering results by location and other attributes, and allows for additional features like phonemes and timezones. The response includes refined query terms and detailed place information. For more information, see Suggest in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--query-text",
          description:
            "The free-form text query to match addresses against. This is usually a partially typed address from an end user in an address box or form.  The fields QueryText and QueryID are mutually exclusive",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of results returned in a single call.  Default value: 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-query-refinements",
          description:
            "Maximum number of query terms to be returned for use with a search text query. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bias-position",
          description:
            "The position, in longitude and latitude, that the results should be close to. Typically, place results returned are ranked higher the closer they are to this position. Stored in [lng, lat] and in the WGS 84 format.  The fields BiasPosition, FilterBoundingBox, and FilterCircle are mutually exclusive",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter",
          description:
            "A structure which contains a set of inclusion/exclusion properties that results must possess in order to be returned as a result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters, such as time zone, that can be requested for each result. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the Core and TimeZone values",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the following codes: en, id, km, lo, ms, my, pt, th, tl, vi, zh",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "string",
          },
        },
        {
          name: "--intended-use",
          description:
            "Indicates if the query results will be persisted in customer infrastructure. Defaults to SingleUse (not stored). Currently, Suggest does not support storage of results",
          args: {
            name: "string",
            suggestions: ["SingleUse"],
          },
        },
        {
          name: "--travel-mode",
          description:
            "Indicates the mode of mobility used by the end user. This is used to improve the relevance of search results. Valid values are Car, Scooter, and Truck",
          args: {
            name: "string",
            suggestions: ["Car", "Scooter", "Truck"],
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
