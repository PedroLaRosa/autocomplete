const completionSpec: Fig.Spec = {
  name: "geo-routes",
  description:
    "With the Routes API you can calculate routes and estimate travel time based on up-to-date road network and live traffic information. Key features include:   Point-to-point routing with estimated travel time, distance, and turn-by-turn directions. See CalculateRoutes.   Multi-point route optimization to minimize travel time or distance. See OptimizeWaypoints.   Route matrices for efficient multi-destination planning. See CalculateRouteMatrix.   Isoline calculations to determine reachable areas within specified time or distance thresholds. See CalculateIsolines.   Map-matching to align GPS traces with the road network. See SnapToRoads",
  subcommands: [
    {
      name: "calculate-isolines",
      description:
        "Calculates areas that can be reached within specified time or distance thresholds from a given point. For example, you can use this operation to determine the area within a 30-minute drive of a store location, find neighborhoods within walking distance of a school, or identify delivery zones based on drive time. Isolines (also known as isochrones for time-based calculations) are useful for various applications including:   Service area visualization - Show customers the area you can serve within promised delivery times   Site selection - Analyze potential business locations based on population within travel distance   Site selection - Determine areas that can be reached within specified response times    Route preferences such as avoiding toll roads or ferries are treated as preferences rather than absolute restrictions. If a viable route cannot be calculated while honoring all preferences, some may be ignored.  For more information, see Calculate isolines in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--allow",
          description:
            "Enables special road types or features that should be considered for routing even if they might be restricted by default for the selected travel mode. These include high-occupancy vehicle and toll lanes",
          args: {
            name: "structure",
          },
        },
        {
          name: "--arrival-time",
          description:
            "Determine areas from which Destination can be reached by this time, taking into account predicted traffic conditions and working backward to account for congestion patterns. This attribute cannot be used together with DepartureTime or DepartNow. Specified as an ISO-8601 timestamp with timezone offset. Time format: YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--avoid",
          description:
            "Specifies road types, features, or areas to avoid (if possible) when calculating reachable areas. These are treated as preferences rather than strict constraints—if a route cannot be calculated without using an avoided feature, that avoidance preference may be ignored",
          args: {
            name: "structure",
          },
        },
        {
          name: "--depart-now",
          description:
            "When true, uses the current time as the departure time and takes current traffic conditions into account. This attribute cannot be used together with DepartureTime or ArrivalTime",
        },
        {
          name: "--no-depart-now",
          description:
            "When true, uses the current time as the departure time and takes current traffic conditions into account. This attribute cannot be used together with DepartureTime or ArrivalTime",
        },
        {
          name: "--departure-time",
          description:
            "Determine areas that can be reached when departing at this time, taking into account predicted traffic conditions. This attribute cannot be used together with ArrivalTime or DepartNow. Specified as an ISO-8601 timestamp with timezone offset. Time format:YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "An optional destination point, specified as [longitude, latitude] coordinates. When provided, the service calculates areas from which this destination can be reached within the specified thresholds. This reverses the usual isoline calculation to show areas that could reach your location, rather than areas you could reach from your location. Either Origin or Destination must be provided",
          args: {
            name: "list",
          },
        },
        {
          name: "--destination-options",
          description:
            "Options that control how the destination point is matched to the road network and how routes can approach it. These options help improve travel time accuracy by accounting for real-world access to the destination",
          args: {
            name: "structure",
          },
        },
        {
          name: "--isoline-geometry-format",
          description:
            "The format of the returned IsolineGeometry.  Default value:FlexiblePolyline",
          args: {
            name: "string",
            suggestions: ["FlexiblePolyline", "Simple"],
          },
        },
        {
          name: "--isoline-granularity",
          description:
            "Controls the detail level of the generated isolines. Higher granularity produces smoother shapes but requires more processing time and results in larger responses",
          args: {
            name: "structure",
          },
        },
        {
          name: "--key",
          description:
            "An Amazon Location Service API Key with access to this action. If omitted, the request must be signed using Signature Version 4",
          args: {
            name: "string",
          },
        },
        {
          name: "--optimize-isoline-for",
          description:
            "Controls the trade-off between calculation speed and isoline precision. Choose  FastCalculation for quicker results with less detail, AccurateCalculation for more precise results, or BalancedCalculation for a middle ground. Default value: BalancedCalculation",
          args: {
            name: "string",
            suggestions: [
              "AccurateCalculation",
              "BalancedCalculation",
              "FastCalculation",
            ],
          },
        },
        {
          name: "--optimize-routing-for",
          description:
            "Determines whether routes prioritize shortest travel time (FastestRoute) or shortest physical distance (ShortestRoute) when calculating reachable areas. Default value: FastestRoute",
          args: {
            name: "string",
            suggestions: ["FastestRoute", "ShortestRoute"],
          },
        },
        {
          name: "--origin",
          description:
            "The starting point for isoline calculations, specified as [longitude, latitude] coordinates. For example, this could be a store location, service center, or any point from which you want to calculate reachable areas. Either Origin or Destination must be provided",
          args: {
            name: "list",
          },
        },
        {
          name: "--origin-options",
          description:
            "Options that control how the origin point is matched to the road network and how routes can depart from it. These options help improve travel time accuracy by accounting for real-world access from the origin",
          args: {
            name: "structure",
          },
        },
        {
          name: "--thresholds",
          description:
            "The distance or time thresholds used to determine reachable areas. You can specify up to five thresholds (which all must be the same type) to calculate multiple isolines in a single request. For example, to determine the areas that are reachable within 10 and 20 minutes of the origin, specify time thresholds of 600 and 1200 seconds. You incur a calculation charge for each threshold. Using a large number of thresholds in a request can lead to unexpected charges. For more information, see Routes pricing in the Amazon Location Service Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic",
          description:
            "Configures how real-time and historical traffic data affects isoline calculations. Traffic patterns can significantly impact reachable areas, especially during peak hours",
          args: {
            name: "structure",
          },
        },
        {
          name: "--travel-mode",
          description:
            "The mode of transportation to use for calculations. This affects which road types or features can be used, estimated speed, and the traffic levels that are applied.    Car—Standard passenger vehicle routing using roads accessible to cars    Pedestrian—Walking routes using pedestrian paths, sidewalks, and crossings    Scooter—Light two-wheeled vehicle routing using roads and paths accessible to scooters    Truck—Commercial truck routing considering vehicle dimensions, weight restrictions, and hazardous material regulations    The mode Scooter also applies to motorcycles; set this to Scooter when calculating isolines for motorcycles.  Default value: Car",
          args: {
            name: "string",
            suggestions: ["Car", "Pedestrian", "Scooter", "Truck"],
          },
        },
        {
          name: "--travel-mode-options",
          description:
            "Additional attributes that refine how reachable areas are calculated based on specific vehicle characteristics. These options help produce more accurate results by accounting for real-world constraints and capabilities. For example:   For trucks (Truck), specify dimensions, weight limits, and hazardous cargo restrictions to ensure isolines only include roads that can physically and legally accommodate the vehicle   For cars (Car), set maximum speed capabilities or indicate high-occupancy vehicle eligibility to better estimate reachable areas   For scooters (Scooter), specify engine type and speed limitations to more accurately model their travel capabilities   Without these options, calculations use default assumptions that may not match your specific use case",
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
      name: "calculate-route-matrix",
      description:
        "Use CalculateRouteMatrix to compute results for all pairs of Origins to Destinations. Each row corresponds to one entry in Origins. Each entry in the row corresponds to the route from that entry in Origins to an entry in Destinations positions. For more information, see Calculate route matrix in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--allow",
          description: "Features that are allowed while calculating a route",
          args: {
            name: "structure",
          },
        },
        {
          name: "--avoid",
          description:
            "Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only TollRoads, Ferries, and ControlledAccessHighways",
          args: {
            name: "structure",
          },
        },
        {
          name: "--depart-now",
          description: "Uses the current time as the time of departure",
        },
        {
          name: "--no-depart-now",
          description: "Uses the current time as the time of departure",
        },
        {
          name: "--departure-time",
          description:
            "Time of departure from the origin. Time format:YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--destinations",
          description:
            "List of destinations for the route in World Geodetic System (WGS 84) format: [longitude, latitude].  Route calculations are billed for each origin and destination pair. If you use a large matrix of origins and destinations, your costs will increase accordingly. For more information, see Routes pricing in the Amazon Location Service Developer Guide.  The maximum number of destinations depends on the routing boundary configuration:   With RoutingBoundary.Geometry set: maximum 500 destinations   With RoutingBoundary.Unbounded set to true: maximum 100 destinations   For GrabMaps customers in ap-southeast-1 and ap-southeast-5: maximum 350 destinations   The total matrix size (origins × destinations) must not exceed:   With RoutingBoundary.Geometry: 160,000   With RoutingBoundary.Unbounded: 100   For GrabMaps customers in ap-southeast-1 and ap-southeast-5: 122,500",
          args: {
            name: "list",
          },
        },
        {
          name: "--exclude",
          description:
            "Features to be strictly excluded while calculating the route. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "structure",
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
          name: "--optimize-routing-for",
          description:
            "Controls the trade-off between finding the shortest travel time (FastestRoute) and the shortest distance (ShortestRoute) when calculating reachable areas. Default value: FastestRoute",
          args: {
            name: "string",
            suggestions: ["FastestRoute", "ShortestRoute"],
          },
        },
        {
          name: "--origins",
          description:
            "List of origins for the route in World Geodetic System (WGS 84) format: [longitude, latitude].  Route calculations are billed for each origin and destination pair. Using a large amount of Origins in a request can lead you to incur unexpected charges. For more information, see Routes pricing in the Amazon Location Service Developer Guide.  The maximum number of origins depends on the routing boundary configuration:   With RoutingBoundary.Geometry set: maximum 500 origins   With RoutingBoundary.Unbounded set to true: maximum 15 origins   For GrabMaps customers in ap-southeast-1 and ap-southeast-5: maximum 350 origins   The total matrix size (origins × destinations) must not exceed:   With RoutingBoundary.Geometry: 160,000   With RoutingBoundary.Unbounded: 100   For GrabMaps customers in ap-southeast-1 and ap-southeast-5: 122,500",
          args: {
            name: "list",
          },
        },
        {
          name: "--routing-boundary",
          description:
            "Boundary within which the matrix is to be calculated. All data, origins and destinations outside the boundary are considered invalid. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only Unbounded set to true.  Default value: Unbounded set to true   When AutoCircle is set in the request, the response routing boundary will return Circle derived from the AutoCircle settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic",
          description:
            "Traffic related options. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only Car, Pedestrian, and Scooter.  Default value: Car",
          args: {
            name: "string",
            suggestions: ["Car", "Pedestrian", "Scooter", "Truck"],
          },
        },
        {
          name: "--travel-mode-options",
          description:
            "Travel mode related options for the provided travel mode. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
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
      name: "calculate-routes",
      description:
        "CalculateRoutes computes routes given the following required parameters: Origin and Destination. For more information, see Calculate routes in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--allow",
          description:
            "Features that are allowed while calculating a route. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--arrival-time",
          description:
            "Time of arrival at the destination. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.  Time format:YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--avoid",
          description:
            "Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only ControlledAccessHighways, Ferries, and TollRoads",
          args: {
            name: "structure",
          },
        },
        {
          name: "--depart-now",
          description: "Uses the current time as the time of departure",
        },
        {
          name: "--no-depart-now",
          description: "Uses the current time as the time of departure",
        },
        {
          name: "--departure-time",
          description:
            "Time of departure from the origin. Time format:YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The final position for the route. In the World Geodetic System (WGS 84) format: [longitude, latitude]",
          args: {
            name: "list",
          },
        },
        {
          name: "--destination-options",
          description:
            "Destination related options. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--driver",
          description:
            "Driver related options. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--exclude",
          description:
            "Features to be strictly excluded while calculating the route. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--instructions-measurement-system",
          description:
            "Measurement system to be used for instructions within steps in the response",
          args: {
            name: "string",
            suggestions: ["Metric", "Imperial"],
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
          name: "--languages",
          description:
            "List of languages for instructions within steps in the response. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.   Instructions in the requested language are returned only if they are available",
          args: {
            name: "list",
          },
        },
        {
          name: "--leg-additional-features",
          description:
            "A list of optional additional parameters such as timezone that can be requested for each result. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only PassThroughWaypoints, Summary, and TravelStepInstructions     Elevation: Retrieves the elevation information for each location.    Incidents: Provides information on traffic incidents along the route.    PassThroughWaypoints: Indicates waypoints that are passed through without stopping.    Summary: Returns a summary of the route, including distance and duration.    Tolls: Supplies toll cost information along the route.    TravelStepInstructions: Provides step-by-step instructions for travel along the route.    TruckRoadTypes: Returns information about road types suitable for trucks.    TypicalDuration: Gives typical travel duration based on historical data.    Zones: Specifies the time zone information for each waypoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--leg-geometry-format",
          description:
            "Specifies the format of the geometry returned for each leg of the route. You can choose between two different geometry encoding formats.  FlexiblePolyline: A compact and precise encoding format for the leg geometry. For more information on the format, see the GitHub repository for https://github.com/aws-geospatial/polyline.  Simple: A less compact encoding, which is easier to decode but may be less precise and result in larger payloads",
          args: {
            name: "string",
            suggestions: ["FlexiblePolyline", "Simple"],
          },
        },
        {
          name: "--max-alternatives",
          description:
            "Maximum number of alternative routes to be provided in the response, if available. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only up to 3 alternative routes",
          args: {
            name: "integer",
          },
        },
        {
          name: "--optimize-routing-for",
          description:
            "Controls the trade-off between achieving the shortest travel time (FastestRoute) and achieving the shortest physical distance ((ShortestRoute) when calculating each route in the matrix. Default value: FastestRoute",
          args: {
            name: "string",
            suggestions: ["FastestRoute", "ShortestRoute"],
          },
        },
        {
          name: "--origin",
          description:
            "The start position for the route in World Geodetic System (WGS 84) format: [longitude, latitude]",
          args: {
            name: "list",
          },
        },
        {
          name: "--origin-options",
          description:
            "Specifies how the origin point should be matched to the road network and any routing constraints that apply when the traveler is departing the origin. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--span-additional-features",
          description:
            "A list of optional features such as SpeedLimit that can be requested for a Span. A span is a section of a Leg for which the requested features have the same values. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "list",
          },
        },
        {
          name: "--tolls",
          description:
            "Toll related options. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic",
          description:
            "Traffic related options. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "structure",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only Car, Pedestrian, and Scooter values.  Default value: Car",
          args: {
            name: "string",
            suggestions: [
              "Car",
              "Pedestrian",
              "Scooter",
              "Truck",
              "Intermodal",
              "Transit",
            ],
          },
        },
        {
          name: "--travel-mode-options",
          description:
            "Travel mode related options for the provided travel mode. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only Car and Pedestrian travel mode options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--travel-step-type",
          description:
            "Type of step returned by the response. Default provides basic steps intended for web based applications. TurnByTurn provides detailed instructions with more granularity intended for a turn based navigation system. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions Default does not return any steps",
          args: {
            name: "string",
            suggestions: ["Default", "TurnByTurn"],
          },
        },
        {
          name: "--waypoints",
          description:
            "List of waypoints between the Origin and Destination. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions max length is 100.  Max length: 23",
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
      name: "optimize-waypoints",
      description:
        "OptimizeWaypoints calculates the optimal order to travel between a set of waypoints to minimize either the travel time or the distance travelled during the journey, based on road network restrictions and the traffic pattern data. For more information, see Optimize waypoints in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--avoid",
          description:
            "Features that are avoided. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, this setting is ignored",
          args: {
            name: "structure",
          },
        },
        {
          name: "--clustering",
          description:
            "Clustering allows you to specify how nearby waypoints can be clustered to improve the optimized sequence",
          args: {
            name: "structure",
          },
        },
        {
          name: "--departure-time",
          description:
            "Departure time from the waypoint. Time format:YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm  Examples:  2020-04-22T17:57:24Z   2020-04-22T17:57:24+02:00",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination",
          description:
            "The final position for the route in the World Geodetic System (WGS 84) format: [longitude, latitude]",
          args: {
            name: "list",
          },
        },
        {
          name: "--destination-options",
          description: "Destination related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--driver",
          description: "Driver related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--exclude",
          description:
            "Features to be strictly excluded while calculating the route",
          args: {
            name: "structure",
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
          name: "--optimize-sequencing-for",
          description:
            "Specifies the optimization criteria for the calculated sequence. Default value: FastestRoute",
          args: {
            name: "string",
            suggestions: ["FastestRoute", "ShortestRoute"],
          },
        },
        {
          name: "--origin",
          description:
            "The start position for the route in World Geodetic System (WGS 84) format: [longitude, latitude]",
          args: {
            name: "list",
          },
        },
        {
          name: "--origin-options",
          description: "Origin related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic",
          description: "Traffic-related options",
          args: {
            name: "structure",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. Default value: Car",
          args: {
            name: "string",
            suggestions: ["Car", "Pedestrian", "Scooter", "Truck"],
          },
        },
        {
          name: "--travel-mode-options",
          description:
            "Travel mode related options for the provided travel mode",
          args: {
            name: "structure",
          },
        },
        {
          name: "--waypoints",
          description:
            "List of waypoints between the Origin and Destination, in World Geodetic System (WGS 84) format: [longitude, latitude]. The maximum number of waypoints allowed per request:   Maximum 50 waypoints per request   Maximum 20 waypoints when using constraints (AccessHours, AppointmentTime, ServiceDuration, Heading, SideOfStreet, Before)",
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
      name: "snap-to-roads",
      description:
        "SnapToRoads matches GPS trace to roads most likely traveled on. For more information, see Snap to Roads in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapped-geometry-format",
          description:
            "Chooses what the returned SnappedGeometry format should be. Default value: FlexiblePolyline",
          args: {
            name: "string",
            suggestions: ["FlexiblePolyline", "Simple"],
          },
        },
        {
          name: "--snap-radius",
          description:
            "The radius around the provided tracepoint that is considered for snapping.  Unit: meters  Default value: 300",
          args: {
            name: "long",
          },
        },
        {
          name: "--trace-points",
          description:
            "List of trace points to be snapped onto the road network",
          args: {
            name: "list",
          },
        },
        {
          name: "--travel-mode",
          description:
            "Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. Default value: Car",
          args: {
            name: "string",
            suggestions: ["Car", "Pedestrian", "Scooter", "Truck"],
          },
        },
        {
          name: "--travel-mode-options",
          description:
            "Travel mode related options for the provided travel mode",
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
