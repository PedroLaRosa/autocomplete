// shpotify v2.1 (Homebrew formula "shpotify" / github.com/hnarayanan/shpotify, 2026-11-19), https://github.com/hnarayanan/shpotify
// Source: the `spotify` bash script (showHelp text and command dispatch) at tag 2.1 and main f764f54, which have the same commands.
// Not run: it drives the macOS Spotify app through osascript. It has no --help/-h flag, `help` (or any unknown command) prints the usage.
const completionSpec: Fig.Spec = {
  name: "spotify",
  description: "CLI to use Spotify from the terminal",
  subcommands: [
    {
      name: "play",
      description: "Resume playback where Spotify last left off",
      args: {
        name: "song name",
        description: "The name of the song to find and start playing",
        isOptional: true,
        isVariadic: true,
      },
      subcommands: [
        {
          name: "album",
          description: "Find an album by name and play it",
          args: {
            name: "album name",
            description: "The album name you want to play",
            isVariadic: true,
          },
        },
        {
          name: "artist",
          description: "Find an artist by name and play it",
          args: {
            name: "artist name",
            description: "The artist name you want to play",
            isVariadic: true,
          },
        },
        {
          name: "list",
          description: "Find a playlist by name and play it",
          args: {
            name: "playlist name",
            description: "The playlist name you want to play",
            isVariadic: true,
          },
        },
        {
          name: "track",
          description: "Find a track by name and play it",
          args: {
            name: "track name",
            description: "The track name you want to play",
            isVariadic: true,
          },
        },
        {
          name: "uri",
          description: "Play songs from specific uri",
          args: {
            name: "uri",
            description: "The uri of the song you want to play",
          },
        },
      ],
    },
    {
      name: "next",
      description: "Skip to the next song in a playlist",
    },
    {
      name: "prev",
      description: "Return to the previous song in a playlist",
    },
    {
      name: "replay",
      description: "Replay the current track from the beginning",
    },
    {
      name: "pos",
      description: "Jump to a time (in secs) in the current song",
      args: {
        name: "time",
        description: "Exact time in secs to jump in",
      },
    },
    {
      name: "pause",
      description: "Pause (or resume) Spotify playback",
    },
    {
      name: "stop",
      description: "Stop playback",
    },
    {
      name: "quit",
      description: "Stop playback and quit Spotify",
    },
    {
      name: "vol",
      description: "Show the current Spotify volume",
      args: {
        name: "amount",
        description: "Set the volume to an amount between 0 and 100",
        isOptional: true,
        suggestions: [
          { name: "up", description: "Increase the volume by 10%" },
          { name: "down", description: "Decrease the volume by 10%" },
          { name: "show", description: "Show the current Spotify volume" },
        ],
      },
    },
    {
      name: "status",
      description: "Show the current player status",
      subcommands: [
        { name: "artist", description: "Show the currently playing artist" },
        { name: "album", description: "Show the currently playing album" },
        { name: "track", description: "Show the currently playing track" },
      ],
    },
    {
      name: "info",
      description: "Show detailed information about the current track",
    },
    {
      name: "share",
      description: "Display the current song's Spotify URL and URI",
      subcommands: [
        {
          name: "url",
          description:
            "Display the current song's Spotify URL and copies it to the clipboard",
        },
        {
          name: "uri",
          description:
            "Display the current song's Spotify URI and copies it to the clipboard",
        },
      ],
    },
    {
      name: "toggle",
      description: "Toggle a playback mode",
      subcommands: [
        { name: "shuffle", description: "Toggle shuffle playback mode" },
        { name: "repeat", description: "Toggle repeat playback mode" },
      ],
    },
    {
      name: "help",
      description: "Show help for spotify",
    },
  ],
};
export default completionSpec;
