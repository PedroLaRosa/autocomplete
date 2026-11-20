const completionSpec: Fig.Spec = {
  name: "geo-maps",
  description:
    "Integrate high-quality base map data into your applications using MapLibre. Capabilities include:    Access to comprehensive base map data, allowing you to tailor the map display to your specific needs. See GetTile.   Multiple pre-designed map styles suited for various application types, such as navigation, logistics, or data visualization. See GetStyleDescriptor.   Generation of static map images for scenarios where interactive maps aren't suitable. See GetStaticMap. Use cases include:   Embedding in emails or documents   Displaying in low-bandwidth environments   Creating printable maps   Enhancing application performance by reducing client-side rendering",
  subcommands: [
    {
      name: "get-glyphs",
      description:
        "GetGlyphs returns the map's glyphs. For more information, see Style labels with glyphs in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--font-stack",
          description:
            "Name of the FontStack to retrieve.  Example: Amazon Ember Bold,Noto Sans Bold. The supported font stacks are as follows:   Amazon Ember Bold   Amazon Ember Bold Italic   Amazon Ember Bold,Noto Sans Bold   Amazon Ember Bold,Noto Sans Bold,Noto Sans Arabic Bold   Amazon Ember Condensed RC BdItalic   Amazon Ember Condensed RC Bold   Amazon Ember Condensed RC Bold Italic   Amazon Ember Condensed RC Bold,Noto Sans Bold   Amazon Ember Condensed RC Bold,Noto Sans Bold,Noto Sans Arabic Condensed Bold   Amazon Ember Condensed RC Light   Amazon Ember Condensed RC Light Italic   Amazon Ember Condensed RC LtItalic   Amazon Ember Condensed RC Regular   Amazon Ember Condensed RC Regular Italic   Amazon Ember Condensed RC Regular,Noto Sans Regular   Amazon Ember Condensed RC Regular,Noto Sans Regular,Noto Sans Arabic Condensed Regular   Amazon Ember Condensed RC RgItalic   Amazon Ember Condensed RC ThItalic   Amazon Ember Condensed RC Thin   Amazon Ember Condensed RC Thin Italic   Amazon Ember Heavy   Amazon Ember Heavy Italic   Amazon Ember Light   Amazon Ember Light Italic   Amazon Ember Medium   Amazon Ember Medium Italic   Amazon Ember Medium,Noto Sans Medium   Amazon Ember Medium,Noto Sans Medium,Noto Sans Arabic Medium   Amazon Ember Regular   Amazon Ember Regular Italic   Amazon Ember Regular Italic,Noto Sans Italic   Amazon Ember Regular Italic,Noto Sans Italic,Noto Sans Arabic Regular   Amazon Ember Regular,Noto Sans Regular   Amazon Ember Regular,Noto Sans Regular,Noto Sans Arabic Regular   Amazon Ember Thin   Amazon Ember Thin Italic   AmazonEmberCdRC_Bd   AmazonEmberCdRC_BdIt   AmazonEmberCdRC_Lt   AmazonEmberCdRC_LtIt   AmazonEmberCdRC_Rg   AmazonEmberCdRC_RgIt   AmazonEmberCdRC_Th   AmazonEmberCdRC_ThIt   AmazonEmber_Bd   AmazonEmber_BdIt   AmazonEmber_He   AmazonEmber_HeIt   AmazonEmber_Lt   AmazonEmber_LtIt   AmazonEmber_Md   AmazonEmber_MdIt   AmazonEmber_Rg   AmazonEmber_RgIt   AmazonEmber_Th   AmazonEmber_ThIt   Noto Sans Black   Noto Sans Black Italic   Noto Sans Bold   Noto Sans Bold Italic   Noto Sans Extra Bold   Noto Sans Extra Bold Italic   Noto Sans Extra Light   Noto Sans Extra Light Italic   Noto Sans Italic   Noto Sans Light   Noto Sans Light Italic   Noto Sans Medium   Noto Sans Medium Italic   Noto Sans Regular   Noto Sans Semi Bold   Noto Sans Semi Bold Italic   Noto Sans Thin   Noto Sans Thin Italic   NotoSans-Bold   NotoSans-Italic   NotoSans-Medium   NotoSans-Regular   Open Sans Regular,Arial Unicode MS Regular",
          args: {
            name: "string",
          },
        },
        {
          name: "--font-unicode-range",
          description:
            "A Unicode range of characters to download glyphs for. This must be aligned to multiples of 256.  Example: 0-255.pbf",
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
      name: "get-sprites",
      description:
        "GetSprites returns the map's sprites. For more information, see Style iconography with sprites in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--file-name",
          description:
            "Sprites API: The name of the sprite ﬁle to retrieve, following pattern sprites(@2x)?\\.(png|json). Example: sprites.png",
          args: {
            name: "string",
          },
        },
        {
          name: "--style",
          description:
            "Style specifies the desired map style for the Sprites APIs",
          args: {
            name: "string",
            suggestions: ["Standard", "Monochrome", "Hybrid", "Satellite"],
          },
        },
        {
          name: "--color-scheme",
          description:
            "Sets the color tone for the map sprites, such as dark and light. Example: Light  Default value: Light   Valid values for ColorScheme are case sensitive",
          args: {
            name: "string",
            suggestions: ["Light", "Dark"],
          },
        },
        {
          name: "--variant",
          description:
            "Optimizes map styles for specific use case or industry. You can choose allowed variant only with Standard map style. Example: Default   Valid values for Variant are case sensitive",
          args: {
            name: "string",
            suggestions: ["Default"],
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
      name: "get-static-map",
      description:
        "GetStaticMap provides high-quality static map images with customizable options. You can modify the map's appearance and overlay additional information. It's an ideal solution for applications requiring tailored static map snapshots. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. For more information, see the following topics in the Amazon Location Service Developer Guide:    Static maps     Customize static maps     Overlay on the static map",
      options: [
        {
          name: "--bounding-box",
          description:
            "Takes in two pairs of coordinates in World Geodetic System (WGS 84) format: [longitude, latitude], denoting south-westerly and north-easterly edges of the image. The underlying area becomes the view of the image.  Example: -123.17075,49.26959,-123.08125,49.31429",
          args: {
            name: "string",
          },
        },
        {
          name: "--bounded-positions",
          description:
            "Takes in two or more pair of coordinates in World Geodetic System (WGS 84) format: [longitude, latitude], with each coordinate separated by a comma. The API will generate an image to encompass all of the provided coordinates.   Cannot be used with Zoom and or Radius   Example: 97.170451,78.039098,99.045536,27.176178",
          args: {
            name: "string",
          },
        },
        {
          name: "--center",
          description:
            "Takes in a pair of coordinates in World Geodetic System (WGS 84) format: [longitude, latitude], which becomes the center point of the image. This parameter requires that either zoom or radius is set.  Cannot be used with Zoom and or Radius   Example: 49.295,-123.108",
          args: {
            name: "string",
          },
        },
        {
          name: "--color-scheme",
          description:
            "Sets the color tone for the map, such as dark and light. Example: Light  Default value: Light   Valid values for ColorScheme are case sensitive",
          args: {
            name: "string",
            suggestions: ["Light", "Dark"],
          },
        },
        {
          name: "--compact-overlay",
          description:
            "Takes in a string to draw geometries on the image. The input is a comma separated format as follows format: [Lon, Lat]  Example: line:-122.407653,37.798557,-122.413291,37.802443;color=%23DD0000;width=7;outline-color=#00DD00;outline-width=5yd|point:-122.40572,37.80004;label=Fog Hill Market;size=large;text-color=%23DD0000;color=#EE4B2B   Currently it supports the following geometry types: point, line and polygon. It does not support multiPoint , multiLine and multiPolgyon",
          args: {
            name: "string",
          },
        },
        {
          name: "--crop-labels",
          description:
            "It is a flag that takes in true or false. It prevents the labels that are on the edge of the image from being cut or obscured",
        },
        {
          name: "--no-crop-labels",
          description:
            "It is a flag that takes in true or false. It prevents the labels that are on the edge of the image from being cut or obscured",
        },
        {
          name: "--geo-json-overlay",
          description:
            'Takes in a string to draw geometries on the image. The input is a valid GeoJSON collection object.  Example: {"type":"FeatureCollection","features": [{"type":"Feature","geometry":{"type":"MultiPoint","coordinates": [[-90.076345,51.504107],[-0.074451,51.506892]]},"properties": {"color":"#00DD00"}}]}',
          args: {
            name: "string",
          },
        },
        {
          name: "--height",
          description: "Specifies the height of the map image",
          args: {
            name: "integer",
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
          name: "--label-size",
          description:
            "Overrides the label size auto-calculated by FileName. Takes in one of the values - Small or Large",
          args: {
            name: "string",
            suggestions: ["Small", "Large"],
          },
        },
        {
          name: "--language",
          description:
            "Specifies the language on the map labels using the BCP 47 language tag, limited to ISO 639-1 two-letter language codes. If the specified language data isn't available for the map image, the labels will default to the regional primary language. Supported codes:    ar     as     az     be     bg     bn     bs     ca     cs     cy     da     de     el     en     es     et     eu     fi     fo     fr     ga     gl     gn     gu     he     hi     hr     hu     hy     id     is     it     ja     ka     kk     km     kn     ko     ky     lt     lv     mk     ml     mr     ms     mt     my     nl     no     or     pa     pl     pt     ro     ru     sk     sl     sq     sr     sv     ta     te     th     tr     uk     uz     vi     zh",
          args: {
            name: "string",
          },
        },
        {
          name: "--padding",
          description:
            "Applies additional space (in pixels) around overlay feature to prevent them from being cut or obscured.  Value for max and min is determined by: Min: 1  Max: min(height, width)/4   Example: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--political-view",
          description:
            "Specifies the political view, using ISO 3166-2 or ISO 3166-3 country code format. The following political views are currently supported:    ARG: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands    EGY: Egypt's view on Bir Tawil    IND: India's view on Gilgit-Baltistan    KEN: Kenya's view on the Ilemi Triangle    MAR: Morocco's view on Western Sahara    RUS: Russia's view on Crimea    SDN: Sudan's view on the Halaib Triangle    SRB: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands    SUR: Suriname's view on the Courantyne Headwaters and Lawa Headwaters    SYR: Syria's view on the Golan Heights    TUR: Turkey's view on Cyprus and Northern Cyprus    TZA: Tanzania's view on Lake Malawi    URY: Uruguay's view on Rincon de Artigas    VNM: Vietnam's view on the Paracel Islands and Spratly Islands",
          args: {
            name: "string",
          },
        },
        {
          name: "--points-of-interests",
          description:
            "Determines if the result image will display icons representing points of interest on the map",
          args: {
            name: "string",
            suggestions: ["Enabled", "Disabled"],
          },
        },
        {
          name: "--radius",
          description:
            "Used with center parameter, it specifies the zoom of the image where you can control it on a granular level. Takes in any value >= 1.  Example: 1500   Cannot be used with Zoom.   Unit: Meters",
          args: {
            name: "long",
          },
        },
        {
          name: "--file-name",
          description:
            "The map scaling parameter to size the image, icons, and labels. It follows the pattern of ^map(@2x)?$. Example: map, map@2x",
          args: {
            name: "string",
          },
        },
        {
          name: "--scale-bar-unit",
          description:
            "Displays a scale on the bottom right of the map image with the unit specified in the input.  Example: KilometersMiles, Miles, Kilometers, MilesKilometers",
          args: {
            name: "string",
            suggestions: [
              "Kilometers",
              "KilometersMiles",
              "Miles",
              "MilesKilometers",
            ],
          },
        },
        {
          name: "--style",
          description: "Style specifies the desired map style",
          args: {
            name: "string",
            suggestions: ["Satellite", "Standard"],
          },
        },
        {
          name: "--width",
          description: "Specifies the width of the map image",
          args: {
            name: "integer",
          },
        },
        {
          name: "--zoom",
          description:
            "Specifies the zoom level of the map image.  Cannot be used with Radius",
          args: {
            name: "float",
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
      name: "get-style-descriptor",
      description:
        "GetStyleDescriptor returns information about the style. For more information, see Style dynamic maps in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--style",
          description:
            "Style specifies the desired map style. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the Standard and Monochrome values",
          args: {
            name: "string",
            suggestions: ["Standard", "Monochrome", "Hybrid", "Satellite"],
          },
        },
        {
          name: "--color-scheme",
          description:
            "Sets the color tone for the map, such as dark and light. Example: Light  Default value: Light   Valid values for ColorScheme are case sensitive",
          args: {
            name: "string",
            suggestions: ["Light", "Dark"],
          },
        },
        {
          name: "--political-view",
          description:
            "Specifies the political view using ISO 3166-2 or ISO 3166-3 country code format. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. The following political views are currently supported:    ARG: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands    EGY: Egypt's view on Bir Tawil    IND: India's view on Gilgit-Baltistan    KEN: Kenya's view on the Ilemi Triangle    MAR: Morocco's view on Western Sahara    RUS: Russia's view on Crimea    SDN: Sudan's view on the Halaib Triangle    SRB: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands    SUR: Suriname's view on the Courantyne Headwaters and Lawa Headwaters    SYR: Syria's view on the Golan Heights    TUR: Turkey's view on Cyprus and Northern Cyprus    TZA: Tanzania's view on Lake Malawi    URY: Uruguay's view on Rincon de Artigas    VNM: Vietnam's view on the Paracel Islands and Spratly Islands",
          args: {
            name: "string",
          },
        },
        {
          name: "--terrain",
          description:
            "Adjusts how physical terrain details are rendered on the map. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. The following terrain styles are currently supported:    Hillshade: Displays the physical terrain details through shading and highlighting of elevation change and geographic features.    Terrain3D: Displays physical terrain details and elevations as a three-dimensional model.    Hillshade is valid only for the Standard and Monochrome map styles",
          args: {
            name: "string",
            suggestions: ["Hillshade", "Terrain3D"],
          },
        },
        {
          name: "--contour-density",
          description:
            "Displays the shape and steepness of terrain features using elevation lines. The density value controls how densely the available contour line information is rendered on the map. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. This parameter is valid for all map styles except Satellite",
          args: {
            name: "string",
            suggestions: ["Low", "Medium", "High"],
          },
        },
        {
          name: "--traffic",
          description:
            "Displays real-time traffic information overlay on map, such as incident events and flow events. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. This parameter is valid for all map styles except Satellite",
          args: {
            name: "string",
            suggestions: ["All", "Congestion"],
          },
        },
        {
          name: "--travel-modes",
          description:
            "Renders additional map information relevant to selected travel modes. Information for multiple travel modes can be displayed simultaneously, although this increases the overall information density rendered on the map. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. This parameter is valid for all map styles except Satellite",
          args: {
            name: "list",
          },
        },
        {
          name: "--buildings",
          description:
            "Adjusts how building details are rendered on the map. The following building styles are currently supported:    Buildings3D: Displays buildings as three-dimensional extrusions on the map.    Buildings3D is valid only for the Standard and Monochrome map styles",
          args: {
            name: "string",
            suggestions: ["Buildings3D"],
          },
        },
        {
          name: "--poi-density",
          description:
            "Controls how densely points of interest are rendered on the map. The density value controls the zoom level at which each category of points of interest appears, and how quickly less prominent points of interest are revealed as you zoom in. Denser values display more points of interest at lower zoom levels. Use Off to hide all points of interest. When you omit this parameter, the map renders at Default density.  The difference between density values is most noticeable at mid-range zoom levels. At high zoom levels, all density values converge on displaying every available point of interest.  This parameter is valid only for the Standard and Hybrid map styles. In ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers, this parameter is valid only for the Standard map style",
          args: {
            name: "string",
            suggestions: [
              "Off",
              "VerySparse",
              "Sparse",
              "Default",
              "Dense",
              "VeryDense",
            ],
          },
        },
        {
          name: "--poi-categories",
          description:
            "Renders only the specified categories of points of interest. When you omit this parameter, the map renders all categories. The following categories are currently supported:    FoodAndDrink     Entertainment     SightsAndMuseums     Transportation     Accommodations     LeisureAndOutdoor     Shopping     BusinessAndServices     FacilitiesAndBuildings    Specify each category as a separate poi-categories query parameter. Duplicate values are rejected.  This parameter has no effect when poi-density is set to Off, which hides all points of interest regardless of category.  This parameter is valid only for the Standard and Hybrid map styles. In ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers, this parameter is valid only for the Standard map style",
          args: {
            name: "list",
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
      ],
      args: {
        name: "outfile",
        description: "Filename where the content will be saved",
        template: "filepaths",
      },
    },
    {
      name: "get-tile",
      description:
        "GetTile returns a tile. Map tiles are used by clients to render a map. They're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. For more information, see Tiles in the Amazon Location Service Developer Guide",
      options: [
        {
          name: "--additional-features",
          description:
            "A list of optional additional parameters such as map styles that can be requested for each result. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers",
          args: {
            name: "list",
          },
        },
        {
          name: "--tileset",
          description:
            "Specifies the desired tile set. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the vector.basemap value. Valid Values: raster.satellite | vector.basemap | vector.traffic | raster.dem",
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
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
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
  ],
};

export default completionSpec;
