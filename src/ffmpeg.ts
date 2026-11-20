// FFmpeg v9.0.2 (latest release tag n9.0.2 of github.com/FFmpeg/FFmpeg; matches the Homebrew formula ffmpeg-9.0.2, 2026-11-19). Source: static read of the n9.0.2 tree
// (fftools/ffmpeg_opt.c options table, fftools/opt_common.h, fftools/cmdutils.c option parsing, doc/ffmpeg.texi, doc/fftools-common-opts.texi, Changelog).
// The 9.0.2 binary was not run, only its sources were read. The -c/-f/-pix_fmt/-sample_fmt/-bsf/-disposition generators parse the output of the
// `ffmpeg -codecs/-formats/-pix_fmts/-sample_fmts/-bsfs/-dispositions` listing commands, so they follow whatever build the user has installed.
// No longer in the 9.0.2 options table, so dropped: -vsync, -async, -adrift_threshold, -qphist, -psnr, -map_channel, -top, -vol, -vbsf, -absf,
// -filter_script and -filter_complex_script (a filtergraph is now read from a file with the generic -/filter form, e.g. -/filter:v graph.txt).
// Not modelled: per-stream specifier forms (-c:v, -b:a, ...), the -/opt <file> form, -no<flag> negation and the encoder/decoder/muxer/filter
// private AVOptions (e.g. -preset, -crf, -g) that ffmpeg also accepts.

// Rows of the tables printed by `ffmpeg -codecs`, `-formats`, `-devices` and `-pix_fmts`:
// a header ending with a "-----" separator, then "<flags> <name> <description>" lines
const tableRows = (out: string): string[][] => {
  const lines = out.split("\n");
  const separator = lines.findIndex((line) => /^\s*-+\s*$/.test(line));
  return lines
    .slice(separator + 1)
    .map((line) => line.split(" ").filter(Boolean))
    .filter((columns) => columns.length > 1);
};

// One name per line (`-bsfs`, `-hwaccels`, `-sample_fmts`, `-dispositions`), optionally after a header line
const listedNames = (out: string, header: boolean): Fig.Suggestion[] =>
  out
    .split("\n")
    .slice(header ? 1 : 0)
    .map((line) => line.trim().split(/\s+/)[0])
    .filter(Boolean)
    .map((name) => ({ name }));

const deviceGenerator: Fig.Generator = {
  script: ["ffmpeg", "-devices"],
  postProcess: (out) => tableRows(out).map(([, name]) => ({ name })),
};

// `-codecs` lists the encoders and decoders of each codec in its description,
// e.g. "H.264 / AVC (decoders: h264 h264_qsv) (encoders: libx264 h264_nvenc)"
const codecGenerator: Fig.Generator = {
  script: ["ffmpeg", "-codecs"],
  postProcess: (out) => {
    const suggestions = new Map<string, Fig.Suggestion>();
    for (const [, codec, ...words] of tableRows(out)) {
      const text = words.join(" ");
      const implementations = /\((decoders|encoders): ([^)]*)\)/g;
      suggestions.set(codec, {
        name: codec,
        description: text.replace(implementations, "").trim() || undefined,
      });
      for (
        let m = implementations.exec(text);
        m;
        m = implementations.exec(text)
      ) {
        for (const name of m[2].split(" ")) {
          if (name && !suggestions.has(name)) {
            suggestions.set(name, {
              name,
              description: `${m[1] === "encoders" ? "Encoder" : "Decoder"} for ${codec}`,
            });
          }
        }
      }
    }
    return [...suggestions.values()];
  },
};

// Demuxers can list several names for one format ("mov,mp4,m4a,3gp,3g2,mj2")
const formatGenerator: Fig.Generator = {
  script: ["ffmpeg", "-formats"],
  postProcess: (out) => {
    const suggestions = new Map<string, Fig.Suggestion>();
    for (const [, names, ...description] of tableRows(out)) {
      for (const name of names.split(",")) {
        if (!suggestions.has(name)) {
          suggestions.set(name, {
            name,
            description: description.join(" ") || undefined,
          });
        }
      }
    }
    return [...suggestions.values()];
  },
};

const pixFmtGenerator: Fig.Generator = {
  script: ["ffmpeg", "-pix_fmts"],
  postProcess: (out) => tableRows(out).map(([, name]) => ({ name })),
};

const sampleFmtGenerator: Fig.Generator = {
  script: ["ffmpeg", "-sample_fmts"],
  postProcess: (out) => listedNames(out, true),
};

const bsfGenerator: Fig.Generator = {
  script: ["ffmpeg", "-bsfs"],
  postProcess: (out) => listedNames(out, true),
};

const dispositionGenerator: Fig.Generator = {
  script: ["ffmpeg", "-dispositions"],
  postProcess: (out) => listedNames(out, false),
};

const completionSpec: Fig.Spec = {
  name: "ffmpeg",
  description: "Play, record, convert, and stream audio and video",

  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },

  args: {
    name: "outfile",
    description: "Output file",
    template: "filepaths",
  },

  options: [
    {
      name: "-i",
      description: "Input file or URL",
      isRequired: true,
      isRepeatable: true,
      args: { name: "infile", template: "filepaths" },
    },
    {
      name: ["-L", "-license"],
      description: "Show license",
    },
    {
      name: ["-h", "-?", "-help", "--help"],
      description: "Show help",
      args: {
        name: "topic",
        isOptional: true,
        suggestions: [
          {
            name: "long",
            description:
              "Print advanced tool options in addition to the basic tool options",
          },
          {
            name: "full",
            description:
              "Print the complete list of options, including shared and private options",
          },
          "decoder=",
          "encoder=",
          "demuxer=",
          "muxer=",
          "filter=",
          "bsf=",
          "protocol=",
        ],
      },
    },
    {
      name: "-version",
      description: "Show version",
    },
    {
      name: "-buildconf",
      description: "Show build configuration",
    },
    {
      name: "-formats",
      description: "Show available formats",
    },
    {
      name: "-muxers",
      description: "Show available muxers",
    },
    {
      name: "-demuxers",
      description: "Show available demuxers",
    },
    {
      name: "-devices",
      description: "Show available devices",
    },
    {
      name: "-codecs",
      description: "Show available codecs",
    },
    {
      name: "-decoders",
      description: "Show available decoders",
    },
    {
      name: "-encoders",
      description: "Show available encoders",
    },
    {
      name: "-bsfs",
      description: "Show available bit stream filters",
    },
    {
      name: "-protocols",
      description: "Show available protocols",
    },
    {
      name: "-filters",
      description: "Show available filters",
    },
    {
      name: "-pix_fmts",
      description: "Show available pixel formats",
    },
    {
      name: "-layouts",
      description: "Show standard channel layouts",
    },
    {
      name: "-sample_fmts",
      description: "Show available audio sample formats",
    },
    {
      name: "-dispositions",
      description: "Show available stream dispositions",
    },
    {
      name: "-colors",
      description: "Show available color names",
    },
    {
      name: "-sources",
      description: "List sources of the input device",
      args: { name: "device", generators: deviceGenerator },
    },
    {
      name: "-sinks",
      description: "List sinks of the output device",
      args: { name: "device", generators: deviceGenerator },
    },
    {
      name: ["-v", "-loglevel"],
      description: "Set logging level",
      args: {
        name: "loglevel",
        suggestions: [
          { name: "quiet", description: "Show nothing at all" },
          {
            name: "panic",
            description:
              "Only show fatal errors which could lead the process to crash",
          },
          { name: "fatal", description: "Only show fatal errors" },
          {
            name: "error",
            description:
              "Show all errors, including ones which can be recovered from",
          },
          { name: "warning", description: "Show all warnings and errors" },
          {
            name: "info",
            description:
              "Show informative messages during processing (the default)",
          },
          { name: "verbose", description: "Same as info, except more verbose" },
          {
            name: "debug",
            description: "Show everything, including debugging information",
          },
          {
            name: "trace",
            description:
              "Show everything, including very verbose debugging information",
          },
        ],
      },
    },
    {
      name: "-report",
      description: "Generate a report",
    },
    {
      name: "-max_alloc",
      description: "Set maximum size of a single allocated block",
      args: { name: "bytes" },
    },
    {
      name: "-cpuflags",
      description: "Force specific cpu flags",
      args: { name: "flags" },
    },
    {
      name: "-cpucount",
      description: "Force specific cpu count",
      args: { name: "count" },
    },
    {
      name: "-hide_banner",
      description: "Do not show program banner",
    },
    {
      name: "-f",
      description: "Force container format (auto-detected otherwise)",
      args: { name: "fmt", generators: formatGenerator },
    },
    {
      name: "-y",
      description: "Overwrite output files",
    },
    {
      name: "-n",
      description: "Never overwrite output files",
    },
    {
      name: "-ignore_unknown",
      description: "Ignore unknown stream types",
    },
    {
      name: "-copy_unknown",
      description: "Copy unknown stream types",
    },
    {
      name: "-recast_media",
      description:
        "Allow recasting stream type in order to force a decoder of different media type",
    },
    {
      name: ["-c", "-codec"],
      description:
        "Select encoder/decoder ('copy' to copy stream without reencoding)",
      args: {
        name: "codec",
        suggestions: ["copy"],
        generators: codecGenerator,
      },
    },
    {
      name: "-pre",
      description: "Preset name",
      args: { name: "preset" },
    },
    {
      name: "-map",
      description: "Set input stream mapping",
      isRepeatable: true,
      args: {
        name: "[-]input_file_id[:stream_specifier][:view_specifier][:?]|[linklabel]",
      },
    },
    {
      name: "-map_metadata",
      description: "Set metadata information of outfile from infile",
      isRepeatable: true,
      args: { name: "outfile[,metadata]:infile[,metadata]" },
    },
    {
      name: "-map_chapters",
      description: "Set chapters mapping",
      args: { name: "input_file_index" },
    },
    {
      name: "-t",
      description: "Stop transcoding after specified duration",
      args: { name: "duration" },
    },
    {
      name: "-to",
      description: "Stop transcoding after specified time is reached",
      args: { name: "time_stop" },
    },
    {
      name: "-fs",
      description: "Set the limit file size in bytes",
      args: { name: "limit_size" },
    },
    {
      name: "-ss",
      description: "Start transcoding at specified time",
      args: { name: "time_off" },
    },
    {
      name: "-sseof",
      description: "Set the start time offset relative to EOF",
      args: { name: "time_off" },
    },
    {
      name: "-seek_timestamp",
      description: "Enable/disable seeking by timestamp with -ss",
      args: { name: "enable", suggestions: ["0", "1"] },
    },
    {
      name: "-accurate_seek",
      description: "Enable/disable accurate seeking with -ss",
    },
    {
      name: "-isync",
      description: "Indicate the input index for sync reference",
      args: { name: "input_index" },
    },
    {
      name: "-itsoffset",
      description: "Set the input ts offset",
      args: { name: "time_off" },
    },
    {
      name: "-itsscale",
      description: "Set the input ts scale",
      args: { name: "scale" },
    },
    {
      name: "-timestamp",
      description:
        "Set the recording timestamp ('now' to set the current time)",
      args: { name: "time", suggestions: ["now"] },
    },
    {
      name: "-metadata",
      description: "Add metadata",
      isRepeatable: true,
      args: { name: "key=value" },
    },
    {
      name: "-program",
      description: "Add program with specified streams",
      isRepeatable: true,
      args: { name: "title=string:st=number..." },
    },
    {
      name: "-stream_group",
      description:
        "Add stream group with specified streams and group type-specific arguments",
      isRepeatable: true,
      args: { name: "id=number:st=number..." },
    },
    {
      name: "-dframes",
      description:
        "Set the number of data frames to output; obsolete, use -frames:d instead",
      deprecated: true,
      args: { name: "number" },
    },
    {
      name: "-benchmark",
      description: "Add timings for benchmarking",
    },
    {
      name: "-benchmark_all",
      description: "Add timings for each task",
    },
    {
      name: "-progress",
      description: "Write program-readable progress information",
      args: { name: "url" },
    },
    {
      name: "-stdin",
      description: "Enable or disable interaction on standard input",
    },
    {
      name: "-timelimit",
      description: "Set max runtime in seconds in CPU user time",
      args: { name: "limit" },
    },
    {
      name: "-dump",
      description: "Dump each input packet",
    },
    {
      name: "-hex",
      description: "When dumping packets, also dump the payload",
    },
    {
      name: "-re",
      description: "Read input at native frame rate; equivalent to -readrate 1",
    },
    {
      name: "-readrate",
      description: "Read input at specified rate",
      args: { name: "speed" },
    },
    {
      name: "-readrate_initial_burst",
      description:
        "The initial amount of input to burst read before imposing any readrate",
      args: { name: "seconds" },
    },
    {
      name: "-readrate_catchup",
      description:
        "Temporary readrate used to catch up if an input lags behind the specified readrate",
      args: { name: "speed" },
    },
    {
      name: "-target",
      description:
        "Specify target file type (vcd, svcd, dvd, dv or dv50 with optional pal-, ntsc- or film- prefix)",
      args: {
        name: "type",
        suggestions: [
          "vcd",
          "svcd",
          "dvd",
          "dv",
          "dv50",
          "pal-vcd",
          "pal-svcd",
          "pal-dvd",
          "pal-dv",
          "pal-dv50",
          "ntsc-vcd",
          "ntsc-svcd",
          "ntsc-dvd",
          "ntsc-dv",
          "ntsc-dv50",
          "film-vcd",
          "film-svcd",
          "film-dvd",
          "film-dv",
          "film-dv50",
        ],
      },
    },
    {
      name: "-frame_drop_threshold",
      description: "Frame drop threshold",
      args: { name: "threshold" },
    },
    {
      name: "-copyts",
      description: "Copy timestamps",
    },
    {
      name: "-start_at_zero",
      description: "Shift input timestamps to start at 0 when using copyts",
    },
    {
      name: "-copytb",
      description: "Copy input stream time base when stream copying",
      args: {
        name: "mode",
        suggestions: [
          {
            name: "-1",
            description:
              "Choose the encoder timebase automatically (the default)",
          },
          { name: "0", description: "Use the decoder timebase" },
          { name: "1", description: "Use the demuxer timebase" },
        ],
      },
    },
    {
      name: "-shortest",
      description: "Finish encoding within shortest input",
    },
    {
      name: "-shortest_buf_duration",
      description:
        "Maximum buffering duration (in seconds) for the -shortest option",
      args: { name: "duration" },
    },
    {
      name: "-bitexact",
      description: "Bitexact mode",
    },
    {
      name: "-dts_delta_threshold",
      description: "Timestamp discontinuity delta threshold",
      args: { name: "threshold" },
    },
    {
      name: "-dts_error_threshold",
      description: "Timestamp error delta threshold",
      args: { name: "threshold" },
    },
    {
      name: "-xerror",
      description: "Exit on error",
    },
    {
      name: "-abort_on",
      description: "Abort on the specified condition flags",
      args: {
        name: "flags",
        suggestions: [
          {
            name: "empty_output",
            description:
              "No packets were passed to the muxer, the output is empty",
          },
          {
            name: "empty_output_stream",
            description:
              "No packets were passed to the muxer in some of the output streams",
          },
        ],
      },
    },
    {
      name: "-copyinkf",
      description: "Copy initial non-keyframes",
    },
    {
      name: "-copypriorss",
      description: "Copy or discard frames before start time",
      args: { name: "number" },
    },
    {
      name: "-frames",
      description: "Set the number of frames to output",
      args: { name: "number" },
    },
    {
      name: "-tag",
      description: "Force codec tag/fourcc",
      args: { name: "fourcc/tag" },
    },
    {
      name: ["-q", "-qscale"],
      description: "Use fixed quality scale (VBR)",
      args: { name: "q" },
    },
    {
      name: "-profile",
      description: "Set profile",
      args: { name: "profile" },
    },
    {
      name: "-filter",
      description: "Apply specified filters to audio/video",
      args: { name: "filter_graph" },
    },
    {
      name: "-filter_threads",
      description: "Number of non-complex filter threads",
      args: { name: "nb_threads" },
    },
    {
      name: "-filter_buffered_frames",
      description: "Maximum number of buffered frames in a filter graph",
      args: { name: "nb_frames" },
    },
    {
      name: "-reinit_filter",
      description: "Reinit filtergraph on input parameter changes",
      args: { name: "integer", suggestions: ["0", "1"] },
    },
    {
      name: "-drop_changed",
      description:
        "Drop frame instead of reiniting filtergraph on input parameter changes",
      args: { name: "integer", suggestions: ["0", "1"] },
    },
    {
      name: ["-filter_complex", "-lavfi"],
      description: "Create a complex filtergraph",
      isRepeatable: true,
      args: { name: "graph_description" },
    },
    {
      name: "-filter_complex_threads",
      description: "Number of threads for -filter_complex",
      args: { name: "nb_threads" },
    },
    {
      name: "-print_graphs",
      description: "Print execution graph data to stderr",
    },
    {
      name: "-print_graphs_file",
      description: "Write execution graph data to the specified file",
      args: { name: "filename", template: "filepaths" },
    },
    {
      name: "-print_graphs_format",
      description: "Set the output printing format",
      args: {
        name: "format",
        suggestions: [
          "default",
          "compact",
          "csv",
          "flat",
          "ini",
          "json",
          "xml",
          "mermaid",
          "mermaidhtml",
        ],
      },
    },
    {
      name: "-auto_conversion_filters",
      description: "Enable automatic conversion filters globally",
    },
    {
      name: "-stats",
      description: "Print progress report during encoding",
    },
    {
      name: "-stats_period",
      description:
        "Set the period at which ffmpeg updates stats and -progress output",
      args: { name: "time" },
    },
    {
      name: "-attach",
      description: "Add an attachment to the output file",
      isRepeatable: true,
      args: { name: "filename", template: "filepaths" },
    },
    {
      name: "-dump_attachment",
      description: "Extract an attachment into a file",
      args: { name: "filename", template: "filepaths" },
    },
    {
      name: "-stream_loop",
      description:
        "Set number of times input stream shall be looped (-1 for infinite)",
      args: { name: "number" },
    },
    {
      name: "-debug_ts",
      description: "Print timestamp debugging info",
    },
    {
      name: "-max_error_rate",
      description:
        "Ratio of decoding errors (0.0: no errors, 1.0: 100% errors) above which ffmpeg returns an error instead of success",
      args: { name: "rate" },
    },
    {
      name: "-discard",
      description: "Discard streams or frames from streams",
      args: {
        name: "discard",
        suggestions: [
          { name: "none", description: "Discard no frame" },
          { name: "default", description: "Discard no frames (the default)" },
          { name: "noref", description: "Discard all non-reference frames" },
          { name: "bidir", description: "Discard all bidirectional frames" },
          { name: "nokey", description: "Discard all frames except keyframes" },
          { name: "all", description: "Discard all frames" },
        ],
      },
    },
    {
      name: "-disposition",
      description: "Set stream disposition flags",
      args: { name: "disposition", generators: dispositionGenerator },
    },
    {
      name: "-thread_queue_size",
      description: "Set the maximum number of queued packets from the demuxer",
      args: { name: "size" },
    },
    {
      name: "-find_stream_info",
      description:
        "Read and decode the streams to fill missing information with heuristics",
    },
    {
      name: "-bits_per_raw_sample",
      description: "Set the number of bits per raw sample",
      args: { name: "number" },
    },
    {
      name: "-stats_enc_pre",
      description: "Write encoding stats before encoding",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "-stats_enc_post",
      description: "Write encoding stats after encoding",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "-stats_mux_pre",
      description: "Write packets stats before muxing",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "-stats_enc_pre_fmt",
      description: "Format of the stats written with -stats_enc_pre",
      args: { name: "format_spec" },
    },
    {
      name: "-stats_enc_post_fmt",
      description: "Format of the stats written with -stats_enc_post",
      args: { name: "format_spec" },
    },
    {
      name: "-stats_mux_pre_fmt",
      description: "Format of the stats written with -stats_mux_pre",
      args: { name: "format_spec" },
    },
    {
      name: "-vframes",
      description:
        "Set the number of video frames to output; obsolete, use -frames:v instead",
      deprecated: true,
      args: { name: "number" },
    },
    {
      name: "-r",
      description:
        "Override input framerate/convert to given output framerate (Hz value, fraction or abbreviation)",
      args: { name: "rate" },
    },
    {
      name: "-fpsmax",
      description: "Set max frame rate (Hz value, fraction or abbreviation)",
      args: { name: "rate" },
    },
    {
      name: "-s",
      description: "Set frame size (WxH or abbreviation)",
      args: { name: "size" },
    },
    {
      name: "-aspect",
      description: "Set aspect ratio (4:3, 16:9 or 1.3333, 1.7777)",
      args: { name: "aspect" },
    },
    {
      name: "-pix_fmt",
      description: "Set pixel format",
      args: { name: "format", generators: pixFmtGenerator },
    },
    {
      name: "-display_rotation",
      description:
        "Set pure counter-clockwise rotation in degrees for stream(s)",
      args: { name: "angle" },
    },
    {
      name: "-display_hflip",
      description:
        "Set display horizontal flip for stream(s) (overrides any display rotation if it is not set)",
    },
    {
      name: "-display_vflip",
      description:
        "Set display vertical flip for stream(s) (overrides any display rotation if it is not set)",
    },
    {
      name: "-mastering_display",
      description: "Set SMPTE2084 mastering display color volume info",
      args: { name: "G(%u,%u)B(%u,%u)R(%u,%u)WP(%u,%u)L(%u,%u)" },
    },
    {
      name: "-content_light",
      description: "Set SMPTE2084 Max CLL and Max FALL values",
      args: { name: "%u,%u" },
    },
    {
      name: "-vn",
      description: "Disable video",
    },
    {
      name: "-rc_override",
      description: "Rate control override for specific intervals",
      args: { name: "override" },
    },
    {
      name: "-vcodec",
      description: "Alias for -c:v (select encoder/decoder for video streams)",
      args: {
        name: "codec",
        suggestions: ["copy"],
        generators: codecGenerator,
      },
    },
    {
      name: "-timecode",
      description: "Set initial TimeCode value",
      args: { name: "hh:mm:ss[:;.]ff" },
    },
    {
      name: "-pass",
      description: "Select the pass number (1 to 3)",
      args: { name: "n", suggestions: ["1", "2", "3"] },
    },
    {
      name: "-passlogfile",
      description: "Select two pass log file name prefix",
      args: { name: "prefix" },
    },
    {
      name: "-vstats",
      description: "Dump video coding statistics to file",
    },
    {
      name: "-vstats_file",
      description: "Dump video coding statistics to file",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "-vstats_version",
      description: "Version of the vstats format to use",
      args: { name: "version", suggestions: ["1", "2"] },
    },
    {
      name: "-vf",
      description: "Alias for -filter:v (apply filters to video streams)",
      args: { name: "filter_graph" },
    },
    {
      name: "-intra_matrix",
      description: "Specify intra matrix coeffs",
      args: { name: "matrix" },
    },
    {
      name: "-inter_matrix",
      description: "Specify inter matrix coeffs",
      args: { name: "matrix" },
    },
    {
      name: "-chroma_intra_matrix",
      description: "Specify intra matrix coeffs",
      args: { name: "matrix" },
    },
    {
      name: "-vtag",
      description: "Force video tag/fourcc",
      args: { name: "fourcc/tag" },
    },
    {
      name: "-fps_mode",
      description: "Set framerate mode for matching video streams",
      args: {
        name: "mode",
        suggestions: [
          {
            name: "passthrough",
            description:
              "Pass each frame with its timestamp from the demuxer to the muxer",
          },
          {
            name: "cfr",
            description:
              "Duplicate and drop frames to achieve exactly the requested constant frame rate",
          },
          {
            name: "vfr",
            description:
              "Pass frames with their timestamp or drop them to prevent two frames having the same timestamp",
          },
          {
            name: "auto",
            description:
              "Choose between cfr and vfr depending on muxer capabilities (the default)",
          },
        ],
      },
    },
    {
      name: "-force_fps",
      description:
        "Force the selected framerate, disable the best supported framerate selection",
    },
    {
      name: "-streamid",
      description: "Set the value of an outfile streamid",
      isRepeatable: true,
      args: { name: "streamIndex:value" },
    },
    {
      name: "-force_key_frames",
      description: "Force key frames at specified timestamps",
      args: {
        name: "timestamps",
        suggestions: [
          {
            name: "source",
            description:
              "Force a key frame if the frame being encoded is marked as a key frame in its source",
          },
          {
            name: "scd_metadata",
            description:
              "Force a key frame if the frame has a lavfi.scd.time metadata entry",
          },
          {
            name: "expr:",
            description:
              "Force a key frame when the expression is non-zero for a frame",
          },
        ],
      },
    },
    {
      name: "-b",
      description: "Video bitrate (please use -b:v)",
      args: { name: "bitrate" },
    },
    {
      name: "-hwaccel",
      description: "Use HW accelerated decoding",
      args: {
        name: "hwaccel name",
        suggestions: [
          {
            name: "none",
            description: "Do not use any hardware acceleration (the default)",
          },
          {
            name: "auto",
            description:
              "Automatically select the hardware acceleration method",
          },
          "cuda",
          "drm",
          "dxva2",
          "d3d11va",
          "d3d12va",
          "opencl",
          "qsv",
          "vaapi",
          "vdpau",
          "videotoolbox",
          "mediacodec",
          "vulkan",
          "amf",
          "ohcodec",
        ],
      },
    },
    {
      name: "-hwaccel_device",
      description: "Select a device for HW acceleration",
      args: { name: "devicename" },
    },
    {
      name: "-hwaccel_output_format",
      description: "Select output format used with HW accelerated decoding",
      args: { name: "format", generators: pixFmtGenerator },
    },
    {
      name: "-hwaccels",
      description: "Show available HW acceleration methods",
    },
    {
      name: "-autorotate",
      description: "Automatically insert correct rotate filters",
    },
    {
      name: "-autoscale",
      description:
        "Automatically insert a scale filter at the end of the filter graph",
    },
    {
      name: "-apply_cropping",
      description: "Select the cropping to apply",
      args: {
        name: "source",
        suggestions: [
          { name: "none", description: "Do not apply any cropping metadata" },
          {
            name: "all",
            description:
              "Apply both codec and container level cropping (the default)",
          },
          { name: "codec", description: "Apply codec level cropping" },
          { name: "container", description: "Apply container level cropping" },
        ],
      },
    },
    {
      name: "-fix_sub_duration_heartbeat",
      description:
        "Set this video output stream to be a heartbeat stream for fix_sub_duration, according to which subtitles should be split at random access points",
    },
    {
      name: "-aframes",
      description:
        "Set the number of audio frames to output; obsolete, use -frames:a instead",
      deprecated: true,
      args: { name: "number" },
    },
    {
      name: "-aq",
      description: "Set audio quality (codec-specific)",
      args: { name: "quality" },
    },
    {
      name: "-ar",
      description: "Set audio sampling rate (in Hz)",
      args: { name: "rate" },
    },
    {
      name: "-ac",
      description: "Set number of audio channels",
      args: { name: "channels" },
    },
    {
      name: "-an",
      description: "Disable audio",
    },
    {
      name: "-acodec",
      description: "Alias for -c:a (select encoder/decoder for audio streams)",
      args: {
        name: "codec",
        suggestions: ["copy"],
        generators: codecGenerator,
      },
    },
    {
      name: "-ab",
      description: "Alias for -b:a (select bitrate for audio streams)",
      args: { name: "bitrate" },
    },
    {
      name: "-apad",
      description: "Audio pad",
      args: { name: "parameters" },
    },
    {
      name: "-atag",
      description: "Force audio tag/fourcc",
      args: { name: "fourcc/tag" },
    },
    {
      name: "-sample_fmt",
      description: "Set sample format",
      args: { name: "format", generators: sampleFmtGenerator },
    },
    {
      name: ["-channel_layout", "-ch_layout"],
      description: "Set channel layout",
      args: { name: "layout" },
    },
    {
      name: "-af",
      description: "Alias for -filter:a (apply filters to audio streams)",
      args: { name: "filter_graph" },
    },
    {
      name: "-guess_layout_max",
      description:
        "Set the maximum number of channels to try to guess the channel layout",
      args: { name: "channels" },
    },
    {
      name: "-sn",
      description: "Disable subtitle",
    },
    {
      name: "-scodec",
      description:
        "Alias for -c:s (select encoder/decoder for subtitle streams)",
      args: {
        name: "codec",
        suggestions: ["copy"],
        generators: codecGenerator,
      },
    },
    {
      name: "-stag",
      description: "Force subtitle tag/fourcc",
      args: { name: "fourcc/tag" },
    },
    {
      name: "-fix_sub_duration",
      description: "Fix subtitles duration",
    },
    {
      name: "-canvas_size",
      description: "Set canvas size (WxH or abbreviation)",
      args: { name: "size" },
    },
    {
      name: "-muxdelay",
      description: "Set the maximum demux-decode delay",
      args: { name: "seconds" },
    },
    {
      name: "-muxpreload",
      description: "Set the initial demux-decode delay",
      args: { name: "seconds" },
    },
    {
      name: "-sdp_file",
      description: "Specify a file in which to print sdp information",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "-time_base",
      description:
        "Set the desired time base hint for output stream (1:24, 1:48000 or 0.04166, 2.0833e-5)",
      args: { name: "ratio" },
    },
    {
      name: "-enc_time_base",
      description:
        "Set the desired time base for the encoder (1:24, 1:48000 or 0.04166, 2.0833e-5); 0 uses the frame rate (video) or sample rate (audio), -1 matches the source time base",
      args: { name: "ratio", suggestions: ["0", "-1"] },
    },
    {
      name: "-bsf",
      description: "A comma-separated list of bitstream filters",
      args: { name: "bitstream_filters", generators: bsfGenerator },
    },
    {
      name: "-apre",
      description: "Set the audio options to the indicated preset",
      args: { name: "preset" },
    },
    {
      name: "-vpre",
      description: "Set the video options to the indicated preset",
      args: { name: "preset" },
    },
    {
      name: "-spre",
      description: "Set the subtitle options to the indicated preset",
      args: { name: "preset" },
    },
    {
      name: "-fpre",
      description: "Set options from indicated preset file",
      args: { name: "filename", template: "filepaths" },
    },
    {
      name: "-max_muxing_queue_size",
      description:
        "Maximum number of packets that can be buffered while waiting for all streams to initialize",
      args: { name: "packets" },
    },
    {
      name: "-muxing_queue_data_threshold",
      description:
        "Set the threshold after which max_muxing_queue_size is taken into account",
      args: { name: "bytes" },
    },
    {
      name: "-dcodec",
      description: "Alias for -c:d (select encoder/decoder for data streams)",
      args: {
        name: "codec",
        suggestions: ["copy"],
        generators: codecGenerator,
      },
    },
    {
      name: "-dn",
      description: "Disable data",
    },
    {
      name: "-vaapi_device",
      description:
        "Set VAAPI hardware device (DirectX adapter index, DRM path or X11 display name)",
      args: { name: "device" },
    },
    {
      name: "-qsv_device",
      description:
        "Set QSV hardware device (DirectX adapter index, DRM path or X11 display name)",
      args: { name: "device" },
    },
    {
      name: "-init_hw_device",
      description: "Initialise hardware device",
      isRepeatable: true,
      args: {
        name: "type[=name][:device[,key=value...]]",
        suggestions: [
          "list",
          "cuda",
          "drm",
          "dxva2",
          "d3d11va",
          "d3d12va",
          "opencl",
          "qsv",
          "vaapi",
          "vdpau",
          "videotoolbox",
          "mediacodec",
          "vulkan",
          "amf",
          "ohcodec",
        ],
      },
    },
    {
      name: "-filter_hw_device",
      description: "Set hardware device used when filtering",
      args: { name: "name" },
    },
    {
      name: "-sws_flags",
      description: "Set default flags for the libswscale library",
      args: { name: "flags" },
    },
  ],
};

export default completionSpec;
