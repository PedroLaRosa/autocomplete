// svtplay-dl 4.211 (latest release tag on github.com/spaam/svtplay-dl and PyPI, 2026-11-19).
// Source: read statically from the 4.211 tag (lib/svtplay_dl/utils/parser.py argparse definitions and the
// lib/svtplay_dl/service/*.py supported domains); the program was not executed.

// Domains handled by the services of svtplay-dl 4.211 (used to recognise a URL on the clipboard)
const supportedDomains = [
  "aftonbladet.se",
  "tv.aftonbladet.se",
  "affarsvarlden.se",
  "angelstudios.com",
  "atgplay.se",
  "bigbrother.se",
  "cmore.se",
  "cmore.dk",
  "cmore.no",
  "cmore.fi",
  "colbertnation.com",
  "comedycentral.se",
  "thedailyshow.com",
  "di.se",
  "dn.se",
  "mobil.dn.se",
  "csp.picsearch.com",
  "csp.screen9.com",
  "cdn.screen9.com",
  "disney.se",
  "video.disney.se",
  "disneyjunior.disney.se",
  "discoveryplus.se",
  "discoveryplus.no",
  "discoveryplus.dk",
  "discoveryplus.com",
  "dr.dk",
  "efn.se",
  "eurosportplayer.com",
  "expressen.se",
  "facebook.com",
  "filmarkivet.se",
  "flowonline.tv",
  "juicyplay.se",
  "koket.se",
  "lemonwhale.com",
  "mtv.se",
  "nhl.com",
  "nickelodeon.dk",
  "nickelodeon.nl",
  "nickelodeon.no",
  "nickelodeon.se",
  "npo.nl",
  "npo3.nl",
  "ntr.nl",
  "omroepwnl.nl",
  "zapp.nl",
  "nrk.no",
  "tv.nrk.no",
  "tv.nrksuper.no",
  "p3.no",
  "oppetarkiv.se",
  "pluto.tv",
  "radioplay.se",
  "regeringen.se",
  "riksdagen.se",
  "ruv.is",
  "solidsport.com",
  "solidtango.com",
  "sportlib.se",
  "sverigesradio.se",
  "svd.se",
  "svt.se",
  "svtbarn.se",
  "svtflow.se",
  "svtplay.se",
  "beta.svtplay.se",
  "tv3play.ee",
  "tv3play.lt",
  "tv3play.lv",
  "tv3play.tv3.ee",
  "tv4.se",
  "tv4play.se",
  "tvplay.lv",
  "tvplay.skaties.lv",
  "play.tv3.lt",
  "twitch.tv",
  "clips.twitch.tv",
  "ur.se",
  "betaplay.ur.se",
  "urplay.se",
  "urskola.se",
  "vasaloppet.tv",
  "vg.no",
  "vgtv.no",
  "viafree.se",
  "viafree.no",
  "viafree.dk",
  "viafree.fi",
  "viagame.com",
  "viasatsport.se",
  "vimeo.com",
  "player.vimeo.com",
  "watch.pokemon.com",
];

const svtplayDlGenerators: Record<string, Fig.Generator> = {
  listClipboard: {
    script: ["pbpaste"],
    postProcess: function (out) {
      const regex = new RegExp(
        `^(https?://)?(www\\.)?(${supportedDomains
          .map((domain) => domain.replace(/\./g, "\\."))
          .join("|")})/.+$`
      );
      try {
        if (regex.test(out))
          return [
            {
              name: out,
              description: "Clipboard",
              icon: "fig://template?badge=🔗",
            },
          ];
      } catch (e) {
        console.error(e);
        return [];
      }
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "svtplay-dl",
  description: "Download videos from your favourite play services",
  args: {
    name: "urls",
    description: "URLs for the videos you want to download",
    generators: svtplayDlGenerators.listClipboard,
    isVariadic: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for svtplay-dl",
    },
    {
      name: "--version",
      description: "Show program's version number and exit",
    },
    {
      name: ["-o", "--output"],
      description: "Outputs to the given filename or folder",
      args: { name: "output", template: ["filepaths", "folders"] },
    },
    {
      name: "--filename",
      description:
        "Filename format (default: {title}.s{season}e{episode}.{episodename}-{id}-{service}.{ext})",
      args: { name: "filename" },
    },
    {
      name: "--subfolder",
      description:
        "Create a subfolder titled as the show, non-series gets in folder movies",
    },
    {
      name: "--config",
      args: { name: "configfile", template: "filepaths" },
      description: "Specify configuration file",
    },
    {
      name: ["-f", "--force"],
      description: "Overwrite if file exists already",
    },
    {
      name: ["-l", "--live"],
      description: "Enable for live streams (RTMP based ones)",
    },
    {
      name: ["-c", "--capture_time"],
      args: { name: "capture_time" },
      description: "Define capture time in minutes of a live stream",
    },
    {
      name: ["-s", "--silent"],
      description: "Be less verbose",
    },
    {
      name: "--silent-semi",
      description: "Only show a message when the file is downloaded",
    },
    {
      name: ["-u", "--username"],
      args: { name: "username" },
      description: "Username",
    },
    {
      name: ["-p", "--password"],
      args: { name: "password" },
      description: "Password",
    },
    {
      name: "--token",
      args: { name: "token" },
      description: "Token",
    },
    {
      name: ["-t", "--thumbnail"],
      description: "Download thumbnail from the site if available",
    },
    {
      name: ["-g", "--get-url"],
      description: "Do not download any video, but instead print the URL",
    },
    {
      name: "--get-only-episode-url",
      description: "Do not get video URLs, only print the episode URL",
    },
    {
      name: "--dont-verify-ssl-cert",
      description: "Don't attempt to verify SSL certificates",
    },
    {
      name: "--http-header",
      args: { name: "header1=value;header2=value2" },
      description: "A header to add to each HTTP request",
    },
    {
      name: "--cookies",
      args: { name: "cookie1=value;cookie2=value2" },
      description: "A cookies to add to each HTTP request",
    },
    {
      name: "--exclude",
      args: { name: "WORD1,WORD2,..." },
      description:
        "Exclude videos with the WORD(s) in the filename. Comma separated",
    },
    {
      name: "--after-date",
      args: { name: "yyyy-MM-dd" },
      description: "Only videos published on or after this date",
    },
    {
      name: "--proxy",
      args: { name: "proxy" },
      description:
        "Use the specified HTTP/HTTPS/SOCKS proxy. To enable experimental SOCKS proxy, specify a proper scheme. For example socks5://127.0.0.1:1080/",
    },
    {
      name: ["-v", "--verbose"],
      description: "Explain what is going on",
    },
    {
      name: "--nfo",
      description: "Create a NFO file",
    },
    {
      name: "--force-nfo",
      description: "Download only NFO if used with --nfo",
    },
    {
      name: "--only-audio",
      description: "Only download audio if audio and video is separated",
    },
    {
      name: "--only-video",
      description: "Only download video if audio and video is separated",
    },
    {
      name: "--socket-timeout",
      args: { name: "SECONDS" },
      description: "Time to wait before giving up in seconds (default: 20)",
    },
    {
      name: "--max-retries",
      args: { name: "N" },
      description: "Number of times to retry a failed download (default: 5)",
    },
    {
      name: "--abort-on-error",
      description: "Abort on error, it won't continue downloading more videos",
    },
    {
      name: "--tydligare-tal",
      description:
        "Only download videos with 'tydligare tal' independent on language",
    },
    {
      name: ["-q", "--quality"],
      args: { name: "quality" },
      description:
        "Choose what format to download based on bitrate/video resolution. It will download the best format by default",
    },
    {
      name: ["-Q", "--flexible-quality"],
      args: { name: "amount" },
      description: "Allow given quality (as above) to differ by an amount",
    },
    {
      name: ["-P", "--preferred"],
      args: { name: "preferred", suggestions: ["dash", "hls", "http"] },
      description: "Preferred download method (dash, hls, or http)",
    },
    {
      name: "--list-quality",
      description: "List the quality for a video",
    },
    {
      name: "--stream-priority",
      args: { name: "dash,hls,http" },
      description:
        "If two streams have the same quality, choose the one you prefer",
    },
    {
      name: "--format-preferred",
      args: { name: "h264,h264-51" },
      description:
        "Choose the format you prefer, use --list-quality to show which one to choose from",
    },
    {
      name: "--audio-language",
      args: { name: "AUDIO_LANGUAGE" },
      description:
        "Choose the language of the audio (it can override the default one), use --list-quality to show which one to choose from",
    },
    {
      name: "--video-role",
      args: { name: "VIDEO_ROLE" },
      description:
        "Choose the role of the video (it can override the default one), use --list-quality to show which one to choose from. Default: main",
    },
    {
      name: "--resolution",
      args: { name: "RESOLUTION" },
      description:
        "Choose what video resolution to download e.g. 480,720,1080. Comma separated",
    },
    {
      name: ["-S", "--subtitle"],
      description:
        "Download subtitle from the site if available. Both merged and separately stored if used with -M",
    },
    {
      name: ["-M", "--merge-subtitle"],
      description:
        "Merge subtitle with video/audio file with corresponding ISO639-3 language code. Also saved separately if used with -S",
    },
    {
      name: "--force-subtitle",
      description: "Download only subtitle if its used with -S",
    },
    {
      name: "--require-subtitle",
      description: "Download only if a subtitle is available",
    },
    {
      name: "--all-subtitles",
      description: "Download all available subtitles for the video",
    },
    {
      name: "--raw-subtitles",
      description: "Also download the subtitles in their native format",
    },
    {
      name: "--convert-subtitle-colors",
      description: `Converts the color information in subtitles, to <font color=""> tags`,
    },
    {
      name: ["-A", "--all-episodes"],
      description: "Try to download all episodes",
    },
    {
      name: "--all-last",
      args: { name: "NN" },
      description: "Get last NN episodes instead of all episodes",
    },
    {
      name: "--include-clips",
      description: "Include clips from websites when using -A",
    },
    {
      name: ["-R", "--reverse"],
      description: "Reverse download order",
    },
    {
      name: "--no-remux",
      description: "Do not automatically remux to mp4",
    },
    {
      name: "--no-merge",
      description:
        "Do not automatically merge video, audio and possibly also subtitle(s) together",
    },
    {
      name: "--no-postprocess",
      description: "Do not postprocess anything",
    },
    {
      name: "--keep-original",
      description: "Do postprocessing while also keeping original files",
    },
    {
      name: "--output-format",
      args: { name: "output_format", suggestions: ["mp4", "mkv"] },
      description:
        "Format you want resulting file in (mkv or mp4), mp4 is default",
    },
    {
      name: "--chapters",
      description: "Get chapters and add it to the file",
    },
  ],
};
export default completionSpec;
