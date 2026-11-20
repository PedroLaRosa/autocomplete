const completionSpec: Fig.Spec = {
  name: "location",
  description:
    '"Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing"',
  subcommands: [
    {
      name: "associate-tracker-consumer",
      description:
        "Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection.  You can associate up to five geofence collections to each tracker resource.  Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account",
      options: [
        {
          name: "--tracker-name",
          description:
            "The name of the tracker resource to be associated with a geofence collection",
          args: {
            name: "string",
          },
        },
        {
          name: "--consumer-arn",
          description:
            "The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all Amazon Web Services.   Format example: arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer",
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
      name: "batch-delete-device-position-history",
      description:
        "Deletes the position history of one or more devices from a tracker resource",
      options: [
        {
          name: "--tracker-name",
          description:
            "The name of the tracker resource to delete the device position history from",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-ids",
          description:
            "Devices whose position history you want to delete.   For example, for two devices: “DeviceIds” : [DeviceId1,DeviceId2]",
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
      name: "batch-delete-geofence",
      description:
        "Deletes a batch of geofences from a geofence collection.  This operation deletes the resource permanently",
      options: [
        {
          name: "--collection-name",
          description:
            "The geofence collection storing the geofences to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--geofence-ids",
          description: "The batch of geofences to be deleted",
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
      name: "batch-evaluate-geofences",
      description:
        "Evaluates device positions against the geofence geometries from a given geofence collection. This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:    ENTER if Amazon Location determines that the tracked device has entered a geofenced area.    EXIT if Amazon Location determines that the tracked device has exited a geofenced area.    The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.   Geofence evaluation uses the given device position. It does not account for the optional Accuracy of a DevicePositionUpdate.   The DeviceID is used as a string to represent the device. You do not need to have a Tracker associated with the DeviceID",
      options: [
        {
          name: "--collection-name",
          description:
            "The geofence collection used in evaluating the position of devices against its geofences",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-position-updates",
          description:
            "Contains device details for each device to be evaluated against the given geofence collection",
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
      name: "batch-get-device-position",
      description: "Lists the latest device positions for requested devices",
      options: [
        {
          name: "--tracker-name",
          description: "The tracker resource retrieving the device position",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-ids",
          description:
            "Devices whose position you want to retrieve.   For example, for two devices: device-ids=DeviceId1&device-ids=DeviceId2",
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
      name: "batch-put-geofence",
      description:
        "A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request",
      options: [
        {
          name: "--collection-name",
          description: "The geofence collection storing the geofences",
          args: {
            name: "string",
          },
        },
        {
          name: "--entries",
          description:
            "The batch of geofences to be stored in a geofence collection",
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
      name: "batch-update-device-position",
      description:
        'Uploads position update data for one or more devices to a tracker resource (up to 10 devices per batch). Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.  Position updates are handled based on the PositionFiltering property of the tracker. When PositionFiltering is set to TimeBased, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID. When PositionFiltering is set to DistanceBased filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft). When PositionFiltering is set to AccuracyBased filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If PositionFiltering is set to AccuracyBased filtering, Amazon Location uses the default value { "Horizontal": 0} when accuracy is not provided on a DevicePositionUpdate',
      options: [
        {
          name: "--tracker-name",
          description: "The name of the tracker resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--updates",
          description:
            "Contains the position update details for each device, up to 10 devices",
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
      name: "calculate-route",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to  CalculateRoutes  or  CalculateIsolines  unless you require Grab data.    CalculateRoute is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The version 2 CalculateRoutes operation gives better results for point-to-point routing, while the version 2 CalculateIsolines operation adds support for calculating service areas and travel time envelopes.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location.   Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.     Calculates a route given the following required parameters: DeparturePosition and DestinationPosition. Requires that you first create a route calculator resource. By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route. Additional options include:    Specifying a departure time using either DepartureTime or DepartNow. This calculates a route based on predictive traffic data at the given time.   You can't specify both DepartureTime and DepartNow in a single request. Specifying both parameters returns a validation error.     Specifying a travel mode using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in CarModeOptions if traveling by Car, or TruckModeOptions if traveling by Truck.  If you specify walking for the travel mode and your data provider is Esri, the start and destination must be within 40km",
      options: [
        {
          name: "--calculator-name",
          description:
            "The name of the route calculator resource that you want to use to calculate the route",
          args: {
            name: "string",
          },
        },
        {
          name: "--departure-position",
          description:
            "The start position for the route. Defined in World Geodetic System (WGS 84) format: [longitude, latitude].   For example, [-123.115, 49.285]     If you specify a departure that's not located on a road, Amazon Location moves the position to the nearest road. If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a 400 RoutesValidationException error.  Valid Values: [-180 to 180,-90 to 90]",
          args: {
            name: "list",
          },
        },
        {
          name: "--destination-position",
          description:
            "The finish position for the route. Defined in World Geodetic System (WGS 84) format: [longitude, latitude].    For example, [-122.339, 47.615]     If you specify a destination that's not located on a road, Amazon Location moves the position to the nearest road.   Valid Values: [-180 to 180,-90 to 90]",
          args: {
            name: "list",
          },
        },
        {
          name: "--waypoint-positions",
          description:
            "Specifies an ordered list of up to 23 intermediate positions to include along a route between the departure position and destination position.    For example, from the DeparturePosition [-123.115, 49.285], the route follows the order that the waypoint positions are given [[-122.757, 49.0021],[-122.349, 47.620]]     If you specify a waypoint position that's not located on a road, Amazon Location moves the position to the nearest road.  Specifying more than 23 waypoints returns a 400 ValidationException error. If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a 400 RoutesValidationException error.  Valid Values: [-180 to 180,-90 to 90]",
          args: {
            name: "list",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. You can choose Car, Truck, Walking, Bicycle or Motorcycle as options for the TravelMode.   Bicycle and Motorcycle are only valid when using Grab as a data provider, and only within Southeast Asia.  Truck is not available for Grab. For more details on the using Grab for routing, including areas of coverage, see GrabMaps in the Amazon Location Service Developer Guide.  The TravelMode you specify also determines how you specify route preferences:    If traveling by Car use the CarModeOptions parameter.   If traveling by Truck use the TruckModeOptions parameter.   Default Value: Car",
          args: {
            name: "string",
            suggestions: ["Car", "Truck", "Walking", "Bicycle", "Motorcycle"],
          },
        },
        {
          name: "--departure-time",
          description:
            "Specifies the desired time of departure. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.   In ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. For example, 2020–07-2T12:15:20.000Z+01:00",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--depart-now",
          description:
            "Sets the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route. Default Value: false  Valid Values: false | true",
        },
        {
          name: "--no-depart-now",
          description:
            "Sets the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route. Default Value: false  Valid Values: false | true",
        },
        {
          name: "--distance-unit",
          description:
            "Set the unit system to specify the distance. Default Value: Kilometers",
          args: {
            name: "string",
            suggestions: ["Kilometers", "Miles"],
          },
        },
        {
          name: "--include-leg-geometry",
          description:
            "Set to include the geometry details in the result for each path between a pair of positions. Default Value: false  Valid Values: false | true",
        },
        {
          name: "--no-include-leg-geometry",
          description:
            "Set to include the geometry details in the result for each path between a pair of positions. Default Value: false  Valid Values: false | true",
        },
        {
          name: "--car-mode-options",
          description:
            "Specifies route preferences when traveling by Car, such as avoiding routes that use ferries or tolls. Requirements: TravelMode must be specified as Car",
          args: {
            name: "structure",
          },
        },
        {
          name: "--truck-mode-options",
          description:
            "Specifies route preferences when traveling by Truck, such as avoiding routes that use ferries or tolls, and truck specifications to consider when choosing an optimal road. Requirements: TravelMode must be specified as Truck",
          args: {
            name: "structure",
          },
        },
        {
          name: "--arrival-time",
          description:
            "Specifies the desired time of arrival. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.  ArrivalTime is not supported Esri",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--optimize-for",
          description:
            "Specifies the distance to optimize for when calculating a route",
          args: {
            name: "string",
            suggestions: ["FastestRoute", "ShortestRoute"],
          },
        },
        {
          name: "--key",
          description: "The optional API key to authorize the request",
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
      name: "calculate-route-matrix",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the V2 CalculateRouteMatrix  unless you require Grab data.   This version of CalculateRouteMatrix is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The version 2 CalculateRouteMatrix operation gives better results for matrix routing calculations.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location.   Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide.      Calculates a route matrix given the following required parameters: DeparturePositions and DestinationPositions. CalculateRouteMatrix calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, CalculateRouteMatrix will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of DeparturePositions times the number of DestinationPositions.  Your account is charged for each route calculated, not the number of requests.  Requires that you first create a route calculator resource. By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes. Additional options include:     Specifying a departure time using either DepartureTime or DepartNow. This calculates routes based on predictive traffic data at the given time.   You can't specify both DepartureTime and DepartNow in a single request. Specifying both parameters returns a validation error.     Specifying a travel mode using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in CarModeOptions if traveling by Car, or TruckModeOptions if traveling by Truck",
      options: [
        {
          name: "--calculator-name",
          description:
            "The name of the route calculator resource that you want to use to calculate the route matrix",
          args: {
            name: "string",
          },
        },
        {
          name: "--departure-positions",
          description:
            "The list of departure (origin) positions for the route matrix. An array of points, each of which is itself a 2-value array defined in WGS 84 format: [longitude, latitude]. For example, [-123.115, 49.285].  Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See  Position restrictions in the Amazon Location Service Developer Guide.   For route calculators that use Esri as the data provider, if you specify a departure that's not located on a road, Amazon Location  moves the position to the nearest road. The snapped value is available in the result in SnappedDeparturePositions.  Valid Values: [-180 to 180,-90 to 90]",
          args: {
            name: "list",
          },
        },
        {
          name: "--destination-positions",
          description:
            "The list of destination positions for the route matrix. An array of points, each of which is itself a 2-value array defined in WGS 84 format: [longitude, latitude]. For example, [-122.339, 47.615]   Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See  Position restrictions in the Amazon Location Service Developer Guide.   For route calculators that use Esri as the data provider, if you specify a destination that's not located on a road, Amazon Location  moves the position to the nearest road. The snapped value is available in the result in SnappedDestinationPositions.  Valid Values: [-180 to 180,-90 to 90]",
          args: {
            name: "list",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. The TravelMode you specify also determines how you specify route preferences:    If traveling by Car use the CarModeOptions parameter.   If traveling by Truck use the TruckModeOptions parameter.     Bicycle or Motorcycle are only valid when using Grab as a data provider, and only within Southeast Asia.  Truck is not available for Grab. For more information about using Grab as a data provider, see GrabMaps in the Amazon Location Service Developer Guide.  Default Value: Car",
          args: {
            name: "string",
            suggestions: ["Car", "Truck", "Walking", "Bicycle", "Motorcycle"],
          },
        },
        {
          name: "--departure-time",
          description:
            "Specifies the desired time of departure. Uses the given time to calculate the route matrix. You can't set both DepartureTime and DepartNow. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.  Setting a departure time in the past returns a 400 ValidationException error.    In ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. For example, 2020–07-2T12:15:20.000Z+01:00",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--depart-now",
          description:
            "Sets the time of departure as the current time. Uses the current time to calculate the route matrix. You can't set both DepartureTime and DepartNow. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix. Default Value: false  Valid Values: false | true",
        },
        {
          name: "--no-depart-now",
          description:
            "Sets the time of departure as the current time. Uses the current time to calculate the route matrix. You can't set both DepartureTime and DepartNow. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix. Default Value: false  Valid Values: false | true",
        },
        {
          name: "--distance-unit",
          description:
            "Set the unit system to specify the distance. Default Value: Kilometers",
          args: {
            name: "string",
            suggestions: ["Kilometers", "Miles"],
          },
        },
        {
          name: "--car-mode-options",
          description:
            "Specifies route preferences when traveling by Car, such as avoiding routes that use ferries or tolls. Requirements: TravelMode must be specified as Car",
          args: {
            name: "structure",
          },
        },
        {
          name: "--truck-mode-options",
          description:
            "Specifies route preferences when traveling by Truck, such as avoiding routes that use ferries or tolls, and truck specifications to consider when choosing an optimal road. Requirements: TravelMode must be specified as Truck",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key",
          description: "The optional API key to authorize the request",
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
      name: "cancel-job",
      description:
        "CancelJob cancels a job that is currently running or pending. If the job is already in a terminal state (Completed, Failed, or Cancelled), the operation returns successfully with the current status. For more information, see Job concepts in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--job-id",
          description: "The unique identifier of the job to cancel",
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
      name: "create-geofence-collection",
      description:
        "Creates a geofence collection, which manages and stores geofences",
      options: [
        {
          name: "--collection-name",
          description:
            "A custom name for the geofence collection. Requirements:   Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).    Must be a unique geofence collection name.   No spaces allowed. For example, ExampleGeofenceCollection",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "No longer used. If included, the only allowed value is RequestBasedUsage",
          args: {
            name: "string",
            suggestions: [
              "RequestBasedUsage",
              "MobileAssetTracking",
              "MobileAssetManagement",
            ],
          },
        },
        {
          name: "--pricing-plan-data-source",
          description: "This parameter is no longer used",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the geofence collection",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Applies one or more tags to the geofence collection. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them. Format: "key" : "value"  Restrictions:   Maximum 50 tags per resource   Each resource tag must be unique with a maximum of one value.   Maximum key length: 128 Unicode characters in UTF-8   Maximum value length: 256 Unicode characters in UTF-8   Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.    Cannot use "aws:" as a prefix for a key',
          args: {
            name: "map",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "A key identifier for an Amazon Web Services KMS customer managed key. Enter a key ID, key ARN, alias name, or alias ARN",
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
      name: "create-key",
      description:
        "Creates an API key resource in your Amazon Web Services account, which lets you grant actions for Amazon Location resources to the API key bearer. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--key-name",
          description:
            "A custom name for the API key resource. Requirements:   Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).    Must be a unique API key name.   No spaces allowed. For example, ExampleAPIKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--restrictions",
          description: "The API key restrictions for the API key resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "An optional description for the API key resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--expire-time",
          description:
            "The optional timestamp for when the API key resource will expire in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. One of NoExpiry or ExpireTime must be set",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--no-expiry",
          description:
            "Optionally set to true to set no expiration time for the API key. One of NoExpiry or ExpireTime must be set",
        },
        {
          name: "--no-no-expiry",
          description:
            "Optionally set to true to set no expiration time for the API key. One of NoExpiry or ExpireTime must be set",
        },
        {
          name: "--tags",
          description:
            'Applies one or more tags to the map resource. A tag is a key-value pair that helps manage, identify, search, and filter your resources by labelling them. Format: "key" : "value"  Restrictions:   Maximum 50 tags per resource   Each resource tag must be unique with a maximum of one value.   Maximum key length: 128 Unicode characters in UTF-8   Maximum value length: 256 Unicode characters in UTF-8   Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.    Cannot use "aws:" as a prefix for a key',
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
      name: "create-map",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data.    CreateMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Maps API version 2 has a simplified interface that can be used without creating or managing map resources.   If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location.   Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide.    Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.  If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the Amazon Web Services service terms for more details",
      options: [
        {
          name: "--map-name",
          description:
            "The name for the map resource. Requirements:   Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).    Must be a unique map resource name.    No spaces allowed. For example, ExampleMap",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Specifies the MapConfiguration, including the map style, for the map resource that you create. The map style defines the look of maps and the data provider for your map resource",
          args: {
            name: "structure",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "No longer used. If included, the only allowed value is RequestBasedUsage",
          args: {
            name: "string",
            suggestions: [
              "RequestBasedUsage",
              "MobileAssetTracking",
              "MobileAssetManagement",
            ],
          },
        },
        {
          name: "--description",
          description: "An optional description for the map resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Applies one or more tags to the map resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them. Format: "key" : "value"  Restrictions:   Maximum 50 tags per resource   Each resource tag must be unique with a maximum of one value.   Maximum key length: 128 Unicode characters in UTF-8   Maximum value length: 256 Unicode characters in UTF-8   Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.    Cannot use "aws:" as a prefix for a key',
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
      name: "create-place-index",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data.    CreatePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Places API version 2 has a simplified interface that can be used without creating or managing place index resources.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location.   Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Places V2 API Reference or the Developer Guide.    Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the SearchPlaceIndexForText operation, and reverse geocode coordinates by using the SearchPlaceIndexForPosition operation, and enable autosuggestions by using the SearchPlaceIndexForSuggestions operation.  If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the Amazon Web Services service terms for more details",
      options: [
        {
          name: "--index-name",
          description:
            "The name of the place index resource.  Requirements:   Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).   Must be a unique place index resource name.   No spaces allowed. For example, ExamplePlaceIndex",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source",
          description:
            "Specifies the geospatial data provider for the new place index.  This field is case-sensitive. Enter the valid values as shown. For example, entering HERE returns an error.  Valid values include:    Esri – For additional information about Esri's coverage in your region of interest, see Esri details on geocoding coverage.    Grab – Grab provides place index functionality for Southeast Asia. For additional information about GrabMaps' coverage, see GrabMaps countries and areas covered.    Here – For additional information about HERE Technologies' coverage in your region of interest, see HERE details on goecoding coverage.  If you specify HERE Technologies (Here) as the data provider, you may not store results for locations in Japan. For more information, see the Amazon Web Services service terms for Amazon Location Service.    For additional information , see Data providers on the Amazon Location Service developer guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "No longer used. If included, the only allowed value is RequestBasedUsage",
          args: {
            name: "string",
            suggestions: [
              "RequestBasedUsage",
              "MobileAssetTracking",
              "MobileAssetManagement",
            ],
          },
        },
        {
          name: "--description",
          description: "The optional description for the place index resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-configuration",
          description: "Specifies the data storage option requesting Places",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'Applies one or more tags to the place index resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources. Format: "key" : "value"  Restrictions:   Maximum 50 tags per resource.   Each tag key must be unique and must have exactly one associated value.   Maximum key length: 128 Unicode characters in UTF-8.   Maximum value length: 256 Unicode characters in UTF-8.   Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @   Cannot use "aws:" as a prefix for a key',
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
      name: "create-route-calculator",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data.    CreateRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location.   Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide.    Creates a route calculator resource in your Amazon Web Services account. You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.  If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the Amazon Web Services service terms for more details",
      options: [
        {
          name: "--calculator-name",
          description:
            "The name of the route calculator resource.  Requirements:   Can use alphanumeric characters (A–Z, a–z, 0–9) , hyphens (-), periods (.), and underscores (_).   Must be a unique Route calculator resource name.   No spaces allowed. For example, ExampleRouteCalculator",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source",
          description:
            "Specifies the data provider of traffic and road network data.  This field is case-sensitive. Enter the valid values as shown. For example, entering HERE returns an error.  Valid values include:    Esri – For additional information about Esri's coverage in your region of interest, see Esri details on street networks and traffic coverage. Route calculators that use Esri as a data source only calculate routes that are shorter than 400 km.    Grab – Grab provides routing functionality for Southeast Asia. For additional information about GrabMaps' coverage, see GrabMaps countries and areas covered.    Here – For additional information about HERE Technologies' coverage in your region of interest, see HERE car routing coverage and HERE truck routing coverage.   For additional information , see Data providers on the Amazon Location Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "No longer used. If included, the only allowed value is RequestBasedUsage",
          args: {
            name: "string",
            suggestions: [
              "RequestBasedUsage",
              "MobileAssetTracking",
              "MobileAssetManagement",
            ],
          },
        },
        {
          name: "--description",
          description:
            "The optional description for the route calculator resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Applies one or more tags to the route calculator resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.   For example: { "tag1" : "value1", "tag2" : "value2"}   Format: "key" : "value"  Restrictions:   Maximum 50 tags per resource   Each resource tag must be unique with a maximum of one value.   Maximum key length: 128 Unicode characters in UTF-8   Maximum value length: 256 Unicode characters in UTF-8   Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.    Cannot use "aws:" as a prefix for a key',
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
      name: "create-tracker",
      description:
        "Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices",
      options: [
        {
          name: "--tracker-name",
          description:
            "The name for the tracker resource. Requirements:   Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).   Must be a unique tracker resource name.   No spaces allowed. For example, ExampleTracker",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "No longer used. If included, the only allowed value is RequestBasedUsage",
          args: {
            name: "string",
            suggestions: [
              "RequestBasedUsage",
              "MobileAssetTracking",
              "MobileAssetManagement",
            ],
          },
        },
        {
          name: "--kms-key-id",
          description:
            "A key identifier for an Amazon Web Services KMS customer managed key. Enter a key ID, key ARN, alias name, or alias ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan-data-source",
          description: "This parameter is no longer used",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "An optional description for the tracker resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Applies one or more tags to the tracker resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them. Format: "key" : "value"  Restrictions:   Maximum 50 tags per resource   Each resource tag must be unique with a maximum of one value.   Maximum key length: 128 Unicode characters in UTF-8   Maximum value length: 256 Unicode characters in UTF-8   Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @.    Cannot use "aws:" as a prefix for a key',
          args: {
            name: "map",
          },
        },
        {
          name: "--position-filtering",
          description:
            "Specifies the position filtering for the tracker resource. Valid values:    TimeBased - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID.     DistanceBased - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this area are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map.     AccuracyBased - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This can reduce the effects of GPS noise when displaying device trajectories on a map, and can help control your costs by reducing the number of geofence evaluations.    This field is optional. If not specified, the default value is TimeBased",
          args: {
            name: "string",
            suggestions: ["TimeBased", "DistanceBased", "AccuracyBased"],
          },
        },
        {
          name: "--event-bridge-enabled",
          description:
            "Whether to enable position UPDATE events from this tracker to be sent to EventBridge.  You do not need enable this feature to get ENTER and EXIT events for geofences with this tracker. Those events are always sent to EventBridge",
        },
        {
          name: "--no-event-bridge-enabled",
          description:
            "Whether to enable position UPDATE events from this tracker to be sent to EventBridge.  You do not need enable this feature to get ENTER and EXIT events for geofences with this tracker. Those events are always sent to EventBridge",
        },
        {
          name: "--kms-key-enable-geospatial-queries",
          description:
            "Enables GeospatialQueries for a tracker that uses a Amazon Web Services KMS customer managed key. This parameter is only used if you are using a KMS customer managed key.  If you wish to encrypt your data using your own KMS customer managed key, then the Bounding Polygon Queries feature will be disabled by default. This is because by using this feature, a representation of your device positions will not be encrypted using the your KMS managed key. The exact device position, however; is still encrypted using your managed key. You can choose to opt-in to the Bounding Polygon Quseries feature. This is done by setting the KmsKeyEnableGeospatialQueries parameter to true when creating or updating a Tracker",
        },
        {
          name: "--no-kms-key-enable-geospatial-queries",
          description:
            "Enables GeospatialQueries for a tracker that uses a Amazon Web Services KMS customer managed key. This parameter is only used if you are using a KMS customer managed key.  If you wish to encrypt your data using your own KMS customer managed key, then the Bounding Polygon Queries feature will be disabled by default. This is because by using this feature, a representation of your device positions will not be encrypted using the your KMS managed key. The exact device position, however; is still encrypted using your managed key. You can choose to opt-in to the Bounding Polygon Quseries feature. This is done by setting the KmsKeyEnableGeospatialQueries parameter to true when creating or updating a Tracker",
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
      name: "delete-geofence-collection",
      description:
        "Deletes a geofence collection from your Amazon Web Services account.  This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored",
      options: [
        {
          name: "--collection-name",
          description: "The name of the geofence collection to be deleted",
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
      name: "delete-key",
      description:
        "Deletes the specified API key. The API key must have been deactivated more than 90 days previously. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--key-name",
          description: "The name of the API key to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-delete",
          description:
            "ForceDelete bypasses an API key's expiry conditions and deletes the key. Set the parameter true to delete the key or to false to not preemptively delete the API key. Valid values: true, or false. Required: No  This action is irreversible. Only use ForceDelete if you are certain the key is no longer in use",
        },
        {
          name: "--no-force-delete",
          description:
            "ForceDelete bypasses an API key's expiry conditions and deletes the key. Set the parameter true to delete the key or to false to not preemptively delete the API key. Valid values: true, or false. Required: No  This action is irreversible. Only use ForceDelete if you are certain the key is no longer in use",
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
      name: "delete-map",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data.    DeleteMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Maps API version 2 has a simplified interface that can be used without creating or managing map resources.   If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location.   Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide.    Deletes a map resource from your Amazon Web Services account.  This operation deletes the resource permanently. If the map is being used in an application, the map may not render",
      options: [
        {
          name: "--map-name",
          description: "The name of the map resource to be deleted",
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
      name: "delete-place-index",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data.    DeletePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Places API version 2 has a simplified interface that can be used without creating or managing place index resources.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location.   Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Places V2 API Reference or the Developer Guide.    Deletes a place index resource from your Amazon Web Services account.  This operation deletes the resource permanently",
      options: [
        {
          name: "--index-name",
          description: "The name of the place index resource to be deleted",
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
      name: "delete-route-calculator",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data.    DeleteRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location.   Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide.    Deletes a route calculator resource from your Amazon Web Services account.  This operation deletes the resource permanently",
      options: [
        {
          name: "--calculator-name",
          description:
            "The name of the route calculator resource to be deleted",
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
      name: "delete-tracker",
      description:
        "Deletes a tracker resource from your Amazon Web Services account.  This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications",
      options: [
        {
          name: "--tracker-name",
          description: "The name of the tracker resource to be deleted",
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
      name: "describe-geofence-collection",
      description: "Retrieves the geofence collection details",
      options: [
        {
          name: "--collection-name",
          description: "The name of the geofence collection",
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
      name: "describe-key",
      description:
        "Retrieves the API key resource details. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--key-name",
          description: "The name of the API key resource",
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
      name: "describe-map",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data.    DescribeMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Maps API version 2 has a simplified interface that can be used without creating or managing map resources.   If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location.   Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide.    Retrieves the map resource details",
      options: [
        {
          name: "--map-name",
          description: "The name of the map resource",
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
      name: "describe-place-index",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data.    DescribePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Places API version 2 has a simplified interface that can be used without creating or managing place index resources.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location.   Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Places V2 API Reference or the Developer Guide.    Retrieves the place index resource details",
      options: [
        {
          name: "--index-name",
          description: "The name of the place index resource",
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
      name: "describe-route-calculator",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data.    DescribeRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location.   Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide.    Retrieves the route calculator resource details",
      options: [
        {
          name: "--calculator-name",
          description: "The name of the route calculator resource",
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
      name: "describe-tracker",
      description: "Retrieves the tracker resource details",
      options: [
        {
          name: "--tracker-name",
          description: "The name of the tracker resource",
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
      name: "disassociate-tracker-consumer",
      description:
        "Removes the association between a tracker resource and a geofence collection.  Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences",
      options: [
        {
          name: "--tracker-name",
          description:
            "The name of the tracker resource to be dissociated from the consumer",
          args: {
            name: "string",
          },
        },
        {
          name: "--consumer-arn",
          description:
            "The Amazon Resource Name (ARN) for the geofence collection to be disassociated from the tracker resource. Used when you need to specify a resource across all Amazon Web Services.    Format example: arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer",
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
      name: "forecast-geofence-events",
      description:
        "This action forecasts future geofence events that are likely to occur within a specified time horizon if a device continues moving at its current speed. Each forecasted event is associated with a geofence from a provided geofence collection. A forecast event can have one of the following states:  ENTER: The device position is outside the referenced geofence, but the device may cross into the geofence during the forecasting time horizon if it maintains its current speed.  EXIT: The device position is inside the referenced geofence, but the device may leave the geofence during the forecasted time horizon if the device maintains it's current speed.  IDLE:The device is inside the geofence, and it will remain inside the geofence through the end of the time horizon if the device maintains it's current speed.  Heading direction is not considered in the current version. The API takes a conservative approach and includes events that can occur for any heading",
      options: [
        {
          name: "--collection-name",
          description: "The name of the geofence collection",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-state",
          description:
            "Represents the device's state, including its current position and speed. When speed is omitted, this API performs a containment check. The containment check operation returns IDLE events for geofences where the device is currently inside of, but no other events",
          args: {
            name: "structure",
          },
        },
        {
          name: "--time-horizon-minutes",
          description:
            "The forward-looking time window for forecasting, specified in minutes. The API only returns events that are predicted to occur within this time horizon. When no value is specified, this API performs a containment check. The containment check operation returns IDLE events for geofences where the device is currently inside of, but no other events",
          args: {
            name: "double",
          },
        },
        {
          name: "--distance-unit",
          description:
            "The distance unit used for the NearestDistance property returned in a forecasted event. The measurement system must match for DistanceUnit and SpeedUnit; if Kilometers is specified for DistanceUnit, then SpeedUnit must be KilometersPerHour.  Default Value: Kilometers",
          args: {
            name: "string",
            suggestions: ["Kilometers", "Miles"],
          },
        },
        {
          name: "--speed-unit",
          description:
            "The speed unit for the device captured by the device state. The measurement system must match for DistanceUnit and SpeedUnit; if Kilometers is specified for DistanceUnit, then SpeedUnit must be KilometersPerHour. Default Value: KilometersPerHour",
          args: {
            name: "string",
            suggestions: ["KilometersPerHour", "MilesPerHour"],
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. Default value: null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of resources returned in a single call. Default value: 20",
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
      name: "get-device-position",
      description:
        "Retrieves a device's most recent position according to its sample time.  Device positions are deleted after 30 days",
      options: [
        {
          name: "--tracker-name",
          description: "The tracker resource receiving the position update",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-id",
          description: "The device whose position you want to retrieve",
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
      name: "get-device-position-history",
      description:
        "Retrieves the device position history from a tracker resource within a specified range of time.  Device positions are deleted after 30 days",
      options: [
        {
          name: "--tracker-name",
          description:
            "The tracker resource receiving the request for the device position history",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-id",
          description: "The device whose position history you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time-inclusive",
          description:
            "Specify the start time for the position history in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. By default, the value will be 24 hours prior to the time that the request is made. Requirement:   The time specified for StartTimeInclusive must be before EndTimeExclusive",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time-exclusive",
          description:
            "Specify the end time for the position history in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ. By default, the value will be the time that the request is made. Requirement:   The time specified for EndTimeExclusive must be after the time for StartTimeInclusive",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of device positions returned in a single call. Default value: 100",
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
      name: "get-geofence",
      description:
        "Retrieves the geofence details from a geofence collection.  The returned geometry will always match the geometry format used when the geofence was created",
      options: [
        {
          name: "--collection-name",
          description: "The geofence collection storing the target geofence",
          args: {
            name: "string",
          },
        },
        {
          name: "--geofence-id",
          description: "The geofence you're retrieving details for",
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
      name: "get-job",
      description:
        "GetJob retrieves detailed information about a specific job, including its current status, configuration, and error information if the job failed. For more information, see Job concepts in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--job-id",
          description: "The unique identifier of the job to retrieve",
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
      name: "get-map-glyphs",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend upgrading to  GetGlyphs  unless you require Grab data.    GetMapGlyphs is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The version 2 GetGlyphs operation gives a better user experience and is compatible with the remainder of the V2 Maps API.   If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location.   Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide.    Retrieves glyphs used to display labels on a map",
      options: [
        {
          name: "--map-name",
          description: "The map resource associated with the glyph ﬁle",
          args: {
            name: "string",
          },
        },
        {
          name: "--font-stack",
          description:
            "A comma-separated list of fonts to load glyphs from in order of preference. For example, Noto Sans Regular, Arial Unicode. Valid font stacks for Esri styles:    VectorEsriDarkGrayCanvas – Ubuntu Medium Italic | Ubuntu Medium | Ubuntu Italic | Ubuntu Regular | Ubuntu Bold    VectorEsriLightGrayCanvas – Ubuntu Italic | Ubuntu Regular | Ubuntu Light | Ubuntu Bold    VectorEsriTopographic – Noto Sans Italic | Noto Sans Regular | Noto Sans Bold | Noto Serif Regular | Roboto Condensed Light Italic    VectorEsriStreets – Arial Regular | Arial Italic | Arial Bold    VectorEsriNavigation – Arial Regular | Arial Italic | Arial Bold    Valid font stacks for HERE Technologies styles:   VectorHereContrast – Fira GO Regular | Fira GO Bold    VectorHereExplore, VectorHereExploreTruck, HybridHereExploreSatellite – Fira GO Italic | Fira GO Map | Fira GO Map Bold | Noto Sans CJK JP Bold | Noto Sans CJK JP Light | Noto Sans CJK JP Regular    Valid font stacks for GrabMaps styles:   VectorGrabStandardLight, VectorGrabStandardDark – Noto Sans Regular | Noto Sans Medium | Noto Sans Bold    Valid font stacks for Open Data styles:   VectorOpenDataStandardLight, VectorOpenDataStandardDark, VectorOpenDataVisualizationLight, VectorOpenDataVisualizationDark – Amazon Ember Regular,Noto Sans Regular | Amazon Ember Bold,Noto Sans Bold | Amazon Ember Medium,Noto Sans Medium | Amazon Ember Regular Italic,Noto Sans Italic | Amazon Ember Condensed RC Regular,Noto Sans Regular | Amazon Ember Condensed RC Bold,Noto Sans Bold | Amazon Ember Regular,Noto Sans Regular,Noto Sans Arabic Regular | Amazon Ember Condensed RC Bold,Noto Sans Bold,Noto Sans Arabic Condensed Bold | Amazon Ember Bold,Noto Sans Bold,Noto Sans Arabic Bold | Amazon Ember Regular Italic,Noto Sans Italic,Noto Sans Arabic Regular | Amazon Ember Condensed RC Regular,Noto Sans Regular,Noto Sans Arabic Condensed Regular | Amazon Ember Medium,Noto Sans Medium,Noto Sans Arabic Medium     The fonts used by the Open Data map styles are combined fonts that use Amazon Ember for most glyphs but Noto Sans for glyphs unsupported by Amazon Ember",
          args: {
            name: "string",
          },
        },
        {
          name: "--font-unicode-range",
          description:
            "A Unicode range of characters to download glyphs for. Each response will contain 256 characters. For example, 0–255 includes all characters from range U+0000 to 00FF. Must be aligned to multiples of 256",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "The optional API key to authorize the request",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "outfile",
        description: "Filename where the content will be saved",
        template: "filepaths",
      },
    },
    {
      name: "get-map-sprites",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend upgrading to  GetSprites  unless you require Grab data.    GetMapSprites is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The version 2 GetSprites operation gives a better user experience and is compatible with the remainder of the V2 Maps API.   If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location.   Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide.    Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map",
      options: [
        {
          name: "--map-name",
          description: "The map resource associated with the sprite ﬁle",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-name",
          description:
            "The name of the sprite ﬁle. Use the following ﬁle names for the sprite sheet:    sprites.png     sprites@2x.png for high pixel density displays   For the JSON document containing image offsets. Use the following ﬁle names:    sprites.json     sprites@2x.json for high pixel density displays",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "The optional API key to authorize the request",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "outfile",
        description: "Filename where the content will be saved",
        template: "filepaths",
      },
    },
    {
      name: "get-map-style-descriptor",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend upgrading to  GetStyleDescriptor  unless you require Grab data.    GetMapStyleDescriptor is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The version 2 GetStyleDescriptor operation gives a better user experience and is compatible with the remainder of the V2 Maps API.   If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location.   Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide.    Retrieves the map style descriptor from a map resource.  The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification",
      options: [
        {
          name: "--map-name",
          description: "The map resource to retrieve the style descriptor from",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "The optional API key to authorize the request",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "outfile",
        description: "Filename where the content will be saved",
        template: "filepaths",
      },
    },
    {
      name: "get-map-tile",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend upgrading to  GetTile  unless you require Grab data.    GetMapTile is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The version 2 GetTile operation gives a better user experience and is compatible with the remainder of the V2 Maps API.   If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location.   Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide.    Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level.  The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1)",
      options: [
        {
          name: "--map-name",
          description: "The map resource to retrieve the map tiles from",
          args: {
            name: "string",
          },
        },
        {
          name: "--z",
          description: "The zoom value for the map tile",
          args: {
            name: "string",
          },
        },
        {
          name: "--x",
          description: "The X axis value for the map tile",
          args: {
            name: "string",
          },
        },
        {
          name: "--y",
          description: "The Y axis value for the map tile",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "The optional API key to authorize the request",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "outfile",
        description: "Filename where the content will be saved",
        template: "filepaths",
      },
    },
    {
      name: "get-place",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the V2 GetPlace  operation unless you require Grab data.   This version of GetPlace is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   Version 2 of the GetPlace operation interoperates with the rest of the Places V2 API, while this version does not.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location.   Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Places V2 API Reference or the Developer Guide.    Finds a place by its unique ID. A PlaceId is returned by other search operations.  A PlaceId is valid only if all of the following are the same in the original search request and the call to GetPlace.   Customer Amazon Web Services account   Amazon Web Services Region   Data provider specified in the place index resource     If your Place index resource is configured with Grab as your geolocation provider and Storage as Intended use, the GetPlace operation is unavailable. For more information, see AWS service terms",
      options: [
        {
          name: "--index-name",
          description:
            "The name of the place index resource that you want to use for the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--place-id",
          description: "The identifier of the place to find",
          args: {
            name: "string",
          },
        },
        {
          name: "--language",
          description:
            "The preferred language used to return results. The value must be a valid BCP 47 language tag, for example, en for English. This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result. For an example, we'll use the Greek language. You search for a location around Athens, Greece, with the language parameter set to en. The city in the results will most likely be returned as Athens. If you set the language parameter to el, for Greek, then the city in the results will more likely be returned as Αθήνα. If the data provider does not have a value for Greek, the result will be in a language that the provider does support",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "The optional API key to authorize the request",
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
      name: "list-device-positions",
      description: "A batch request to retrieve all device positions",
      options: [
        {
          name: "--tracker-name",
          description: "The tracker resource containing the requested devices",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of entries returned in a single call. Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. Default value: null",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-geometry",
          description: "The geometry used to filter device positions",
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
      name: "list-geofence-collections",
      description:
        "Lists geofence collections in your Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description:
            "An optional limit for the number of resources returned in a single call.  Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
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
      name: "list-geofences",
      description: "Lists geofences stored in a given geofence collection",
      options: [
        {
          name: "--collection-name",
          description:
            "The name of the geofence collection storing the list of geofences",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of geofences returned in a single call.  Default value: 100",
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
      name: "list-jobs",
      description:
        "ListJobs retrieves a list of jobs with optional filtering and pagination support. For more information, see Job concepts in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--filter",
          description:
            "An optional structure containing criteria by which to filter job results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of jobs to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page",
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
      name: "list-keys",
      description:
        "Lists API key resources in your Amazon Web Services account. For more information, see Use API keys to authenticate in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--max-results",
          description:
            "An optional limit for the number of resources returned in a single call.  Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Optionally filter the list to only Active or Expired API keys",
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
      name: "list-maps",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data.    ListMaps is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Maps API version 2 has a simplified interface that can be used without creating or managing map resources.   If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location.   Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide.    Lists map resources in your Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description:
            "An optional limit for the number of resources returned in a single call.  Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. Default value: null",
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
      name: "list-place-indexes",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data.    ListPlaceIndexes is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Places API version 2 has a simplified interface that can be used without creating or managing place index resources.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location.   Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Places V2 API Reference or the Developer Guide.    Lists place index resources in your Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description:
            "An optional limit for the maximum number of results returned in a single call. Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. Default value: null",
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
      name: "list-route-calculators",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data.    ListRouteCalculators is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location.   Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide.    Lists route calculator resources in your Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description:
            "An optional maximum number of results returned in a single call. Default Value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. Default Value: null",
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
        "Returns a list of tags that are applied to the specified Amazon Location resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.   Format example: arn:aws:geo:region:account-id:resourcetype/ExampleResource",
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
      name: "list-tracker-consumers",
      description:
        "Lists geofence collections currently associated to the given tracker resource",
      options: [
        {
          name: "--tracker-name",
          description:
            "The tracker resource whose associated geofence collections you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional limit for the number of resources returned in a single call.  Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
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
      name: "list-trackers",
      description:
        "Lists tracker resources in your Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description:
            "An optional limit for the number of resources returned in a single call.  Default value: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.  Default value: null",
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
      name: "put-geofence",
      description:
        "Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request",
      options: [
        {
          name: "--collection-name",
          description: "The geofence collection to store the geofence in",
          args: {
            name: "string",
          },
        },
        {
          name: "--geofence-id",
          description:
            "An identifier for the geofence. For example, ExampleGeofence-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--geometry",
          description:
            "Contains the details to specify the position of the geofence. Can be a circle, a polygon, or a multipolygon. Polygon and MultiPolygon geometries can be defined using their respective parameters, or encoded in Geobuf format using the Geobuf parameter. Including multiple geometry types in the same request will return a validation error.  The geofence Polygon and MultiPolygon formats support a maximum of 1,000 total vertices. The Geobuf format supports a maximum of 100,000 vertices",
          args: {
            name: "structure",
          },
        },
        {
          name: "--geofence-properties",
          description:
            'Associates one of more properties with the geofence. A property is a key-value pair stored with the geofence and added to any geofence event triggered with that geofence. Format: "key" : "value"',
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
      name: "search-place-index-for-position",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to  ReverseGeocode  or  SearchNearby  unless you require Grab data.    SearchPlaceIndexForPosition is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The version 2 ReverseGeocode operation gives better results in the address reverse-geocoding use case, while the version 2 SearchNearby operation gives better results when searching for businesses and points of interest near a specific location.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location.   Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.    Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position",
      options: [
        {
          name: "--index-name",
          description:
            "The name of the place index resource you want to use for the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--position",
          description:
            "Specifies the longitude and latitude of the position to query.  This parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude. For example, [-123.1174, 49.2847] represents a position with longitude -123.1174 and latitude 49.2847",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter. The maximum number of results returned per request. Default value: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--language",
          description:
            "The preferred language used to return results. The value must be a valid BCP 47 language tag, for example, en for English. This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result. For an example, we'll use the Greek language. You search for a location around Athens, Greece, with the language parameter set to en. The city in the results will most likely be returned as Athens. If you set the language parameter to el, for Greek, then the city in the results will more likely be returned as Αθήνα. If the data provider does not have a value for Greek, the result will be in a language that the provider does support",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "The optional API key to authorize the request",
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
      name: "search-place-index-for-suggestions",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to  Suggest  or  Autocomplete  unless you require Grab data.    SearchPlaceIndexForSuggestions is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The version 2 Suggest operation gives better results for typeahead place search suggestions with fuzzy matching, while the version 2 Autocomplete operation gives better results for address completion based on partial input.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location.   Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.    Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching. Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.  You can search for suggested place names near a specified position by using BiasPosition, or filter results within a bounding box by using FilterBBox. These parameters are mutually exclusive; using both BiasPosition and FilterBBox in the same command returns an error",
      options: [
        {
          name: "--index-name",
          description:
            "The name of the place index resource you want to use for the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--text",
          description:
            "The free-form partial text to use to generate place suggestions. For example, eiffel tow",
          args: {
            name: "string",
          },
        },
        {
          name: "--bias-position",
          description:
            "An optional parameter that indicates a preference for place suggestions that are closer to a specified position.  If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude. For example, [-123.1174, 49.2847] represents the position with longitude -123.1174 and latitude 49.2847.   BiasPosition and FilterBBox are mutually exclusive. Specifying both options results in an error",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-b-box",
          description:
            "An optional parameter that limits the search results by returning only suggestions within a specified bounding box.  If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box. For example, [-12.7935, -37.4835, -12.0684, -36.9542] represents a bounding box where the southwest corner has longitude -12.7935 and latitude -37.4835, and the northeast corner has longitude -12.0684 and latitude -36.9542.   FilterBBox and BiasPosition are mutually exclusive. Specifying both options results in an error",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-countries",
          description:
            "An optional parameter that limits the search results by returning only suggestions within the provided list of countries.   Use the ISO 3166 3-digit country code. For example, Australia uses three upper-case characters: AUS",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter. The maximum number of results returned per request.  The default: 5",
          args: {
            name: "integer",
          },
        },
        {
          name: "--language",
          description:
            "The preferred language used to return results. The value must be a valid BCP 47 language tag, for example, en for English. This setting affects the languages used in the results. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result. For an example, we'll use the Greek language. You search for Athens, Gr to get suggestions with the language parameter set to en. The results found will most likely be returned as Athens, Greece. If you set the language parameter to el, for Greek, then the result found will more likely be returned as Αθήνα, Ελλάδα. If the data provider does not have a value for Greek, the result will be in a language that the provider does support",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-categories",
          description:
            "A list of one or more Amazon Location categories to filter the returned places. If you include more than one category, the results will include results that match any of the categories listed. For more information about using categories, including a list of Amazon Location categories, see Categories and filtering, in the Amazon Location Service developer guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--key",
          description: "The optional API key to authorize the request",
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
      name: "search-place-index-for-text",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to  Geocode  or  SearchText  unless you require Grab data.    SearchPlaceIndexForText is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The version 2 Geocode operation gives better results in the address geocoding use case, while the version 2 SearchText operation gives better results when searching for businesses and points of interest.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location.   Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.    Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest.  Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.  You can search for places near a given position using BiasPosition, or filter results within a bounding box using FilterBBox. Providing both parameters simultaneously returns an error.  Search results are returned in order of highest to lowest relevance",
      options: [
        {
          name: "--index-name",
          description:
            "The name of the place index resource you want to use for the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--text",
          description:
            "The address, name, city, or region to be used in the search in free-form text format. For example, 123 Any Street",
          args: {
            name: "string",
          },
        },
        {
          name: "--bias-position",
          description:
            "An optional parameter that indicates a preference for places that are closer to a specified position.  If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude. For example, [-123.1174, 49.2847] represents the position with longitude -123.1174 and latitude 49.2847.   BiasPosition and FilterBBox are mutually exclusive. Specifying both options results in an error",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-b-box",
          description:
            "An optional parameter that limits the search results by returning only places that are within the provided bounding box.  If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box. For example, [-12.7935, -37.4835, -12.0684, -36.9542] represents a bounding box where the southwest corner has longitude -12.7935 and latitude -37.4835, and the northeast corner has longitude -12.0684 and latitude -36.9542.   FilterBBox and BiasPosition are mutually exclusive. Specifying both options results in an error",
          args: {
            name: "list",
          },
        },
        {
          name: "--filter-countries",
          description:
            "An optional parameter that limits the search results by returning only places that are in a specified list of countries.   Valid values include ISO 3166 3-digit country codes. For example, Australia uses three upper-case characters: AUS",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "An optional parameter. The maximum number of results returned per request.  The default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--language",
          description:
            "The preferred language used to return results. The value must be a valid BCP 47 language tag, for example, en for English. This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result. For an example, we'll use the Greek language. You search for Athens, Greece, with the language parameter set to en. The result found will most likely be returned as Athens. If you set the language parameter to el, for Greek, then the result found will more likely be returned as Αθήνα. If the data provider does not have a value for Greek, the result will be in a language that the provider does support",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-categories",
          description:
            "A list of one or more Amazon Location categories to filter the returned places. If you include more than one category, the results will include results that match any of the categories listed. For more information about using categories, including a list of Amazon Location categories, see Categories and filtering, in the Amazon Location Service developer guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--key",
          description: "The optional API key to authorize the request",
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
      name: "start-job",
      description:
        "StartJob starts a new asynchronous bulk processing job. You specify the input data location in Amazon S3, the action to perform, and the output location where results are written. For more information, see Job concepts in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--client-token",
          description:
            "A unique identifier for this request to ensure idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description: "The action to perform on the input data",
          args: {
            name: "string",
            suggestions: ["ValidateAddress"],
          },
        },
        {
          name: "--action-options",
          description:
            "Additional parameters that can be requested for each result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--execution-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that Amazon Location Service assumes during job processing. Amazon Location Service uses this role to access the input and output locations specified for the job.  The IAM role must be created in the same Amazon Web Services account where you plan to run your job.  For more information about configuring IAM roles for Amazon Location jobs, see Configure IAM permissions in the Amazon Location Service Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-options",
          description:
            "Configuration for input data location and format.  Input files have a limitation of 10gb per file, and 1gb per Parquet row-group within the file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "An optional name for the job resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-options",
          description: "Configuration for output data location and format",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Tags and corresponding values to be associated with the job",
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
      name: "tag-resource",
      description:
        "Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag.  You can associate up to 50 tags with a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource whose tags you want to update.   Format example: arn:aws:geo:region:account-id:resourcetype/ExampleResource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Applies one or more tags to specific resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources. Format: "key" : "value"  Restrictions:   Maximum 50 tags per resource.   Each tag key must be unique and must have exactly one associated value.   Maximum key length: 128 Unicode characters in UTF-8.   Maximum value length: 256 Unicode characters in UTF-8.   Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @   Cannot use "aws:" as a prefix for a key',
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
        "Removes one or more tags from the specified Amazon Location resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource from which you want to remove tags.   Format example: arn:aws:geo:region:account-id:resourcetype/ExampleResource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The list of tag keys to remove from the specified resource",
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
      name: "update-geofence-collection",
      description:
        "Updates the specified properties of a given geofence collection",
      options: [
        {
          name: "--collection-name",
          description: "The name of the geofence collection to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "No longer used. If included, the only allowed value is RequestBasedUsage",
          args: {
            name: "string",
            suggestions: [
              "RequestBasedUsage",
              "MobileAssetTracking",
              "MobileAssetManagement",
            ],
          },
        },
        {
          name: "--pricing-plan-data-source",
          description: "This parameter is no longer used",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Updates the description for the geofence collection",
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
      name: "update-key",
      description:
        "Updates the specified properties of a given API key resource",
      options: [
        {
          name: "--key-name",
          description: "The name of the API key resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Updates the description for the API key resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--expire-time",
          description:
            "Updates the timestamp for when the API key resource will expire in  ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--no-expiry",
          description:
            "Whether the API key should expire. Set to true to set the API key to have no expiration time",
        },
        {
          name: "--no-no-expiry",
          description:
            "Whether the API key should expire. Set to true to set the API key to have no expiration time",
        },
        {
          name: "--force-update",
          description:
            "The boolean flag to be included for updating ExpireTime or Restrictions details. Must be set to true to update an API key resource that has been used in the past 7 days.  False if force update is not preferred Default value: False",
        },
        {
          name: "--no-force-update",
          description:
            "The boolean flag to be included for updating ExpireTime or Restrictions details. Must be set to true to update an API key resource that has been used in the past 7 days.  False if force update is not preferred Default value: False",
        },
        {
          name: "--restrictions",
          description:
            "Updates the API key restrictions for the API key resource",
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
      name: "update-map",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data.    UpdateMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Maps API version 2 has a simplified interface that can be used without creating or managing map resources.   If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location.   Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide.    Updates the specified properties of a given map resource",
      options: [
        {
          name: "--map-name",
          description: "The name of the map resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "No longer used. If included, the only allowed value is RequestBasedUsage",
          args: {
            name: "string",
            suggestions: [
              "RequestBasedUsage",
              "MobileAssetTracking",
              "MobileAssetManagement",
            ],
          },
        },
        {
          name: "--description",
          description: "Updates the description for the map resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-update",
          description:
            "Updates the parts of the map configuration that can be updated, including the political view",
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
      name: "update-place-index",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data.    UpdatePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Places API version 2 has a simplified interface that can be used without creating or managing place index resources.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location.   Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Places V2 API Reference or the Developer Guide.    Updates the specified properties of a given place index resource",
      options: [
        {
          name: "--index-name",
          description: "The name of the place index resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "No longer used. If included, the only allowed value is RequestBasedUsage",
          args: {
            name: "string",
            suggestions: [
              "RequestBasedUsage",
              "MobileAssetTracking",
              "MobileAssetManagement",
            ],
          },
        },
        {
          name: "--description",
          description: "Updates the description for the place index resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-configuration",
          description:
            "Updates the data storage option for the place index resource",
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
      name: "update-route-calculator",
      description:
        "This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data.    UpdateRouteCalculator is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).   The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources.   If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under geo-routes or geo_routes, not under location.   Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.   Start your version 2 API journey with the Routes V2 API Reference or the Developer Guide.    Updates the specified properties for a given route calculator resource",
      options: [
        {
          name: "--calculator-name",
          description: "The name of the route calculator resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "No longer used. If included, the only allowed value is RequestBasedUsage",
          args: {
            name: "string",
            suggestions: [
              "RequestBasedUsage",
              "MobileAssetTracking",
              "MobileAssetManagement",
            ],
          },
        },
        {
          name: "--description",
          description:
            "Updates the description for the route calculator resource",
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
      name: "update-tracker",
      description:
        "Updates the specified properties of a given tracker resource",
      options: [
        {
          name: "--tracker-name",
          description: "The name of the tracker resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--pricing-plan",
          description:
            "No longer used. If included, the only allowed value is RequestBasedUsage",
          args: {
            name: "string",
            suggestions: [
              "RequestBasedUsage",
              "MobileAssetTracking",
              "MobileAssetManagement",
            ],
          },
        },
        {
          name: "--pricing-plan-data-source",
          description: "This parameter is no longer used",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Updates the description for the tracker resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--position-filtering",
          description:
            "Updates the position filtering for the tracker resource. Valid values:    TimeBased - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID.     DistanceBased - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this distance are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map.     AccuracyBased - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This helps educe the effects of GPS noise when displaying device trajectories on a map, and can help control costs by reducing the number of geofence evaluations",
          args: {
            name: "string",
            suggestions: ["TimeBased", "DistanceBased", "AccuracyBased"],
          },
        },
        {
          name: "--event-bridge-enabled",
          description:
            "Whether to enable position UPDATE events from this tracker to be sent to EventBridge.  You do not need enable this feature to get ENTER and EXIT events for geofences with this tracker. Those events are always sent to EventBridge",
        },
        {
          name: "--no-event-bridge-enabled",
          description:
            "Whether to enable position UPDATE events from this tracker to be sent to EventBridge.  You do not need enable this feature to get ENTER and EXIT events for geofences with this tracker. Those events are always sent to EventBridge",
        },
        {
          name: "--kms-key-enable-geospatial-queries",
          description:
            "Enables GeospatialQueries for a tracker that uses a Amazon Web Services KMS customer managed key. This parameter is only used if you are using a KMS customer managed key",
        },
        {
          name: "--no-kms-key-enable-geospatial-queries",
          description:
            "Enables GeospatialQueries for a tracker that uses a Amazon Web Services KMS customer managed key. This parameter is only used if you are using a KMS customer managed key",
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
      name: "verify-device-position",
      description:
        "Verifies the integrity of the device's position by determining if it was reported behind a proxy, and by comparing it to an inferred position estimated based on the device's state.  The Location Integrity SDK provides enhanced features related to device verification, and it is available for use by request. To get access to the SDK, contact Sales Support",
      options: [
        {
          name: "--tracker-name",
          description:
            "The name of the tracker resource to be associated with verification request",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-state",
          description:
            "The device's state, including position, IP address, cell signals and Wi-Fi access points",
          args: {
            name: "structure",
          },
        },
        {
          name: "--distance-unit",
          description:
            "The distance unit for the verification request. Default Value: Kilometers",
          args: {
            name: "string",
            suggestions: ["Kilometers", "Miles"],
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "job-completed",
          description:
            "Wait until JMESPath query Status returns Completed when polling with ``get-job``. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks",
          options: [
            {
              name: "--job-id",
              description: "The unique identifier of the job to retrieve",
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
    },
  ],
};

export default completionSpec;
