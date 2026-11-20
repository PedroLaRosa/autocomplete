// unzip 6.00 (Info-ZIP UnZip 6.0 of 2009-04-20, the final upstream release, as shipped in macOS 15; apple-oss-distributions/zip tag zip-27, 2026-11-19). Source: unzip60/unzip.c (uz_opts) and unzip60/man/unzip.1 from the Apple mirror, plus `unzip -h` of Debian's UnZip 6.00 on Linux (not a live run on macOS).
// -O and -I (character set) exist only in Debian/Ubuntu's patched unzip, not in Info-ZIP/macOS; they replace the old mistyped "-0" option. VMS/OS2/DOS-only modifiers are left out.
const completionSpec: Fig.Spec = {
  name: "unzip",
  description: "Extract compressed files in a ZIP archive",
  args: [
    {
      name: "file",
      description: "ZIP archive (the .zip suffix may be omitted)",
      template: "filepaths",
    },
    {
      name: "list",
      description: "Archive members to process (wildcards allowed)",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    {
      name: "-Z",
      description:
        "ZipInfo mode: the remaining options are taken to be zipinfo options",
    },
    {
      name: "-h",
      description: "Show a short help and exit",
    },
    {
      name: "-c",
      description:
        "Extract files to stdout, printing the name of each file as it is extracted",
    },
    {
      name: "-f",
      description:
        "Freshen existing files: extract only files that already exist on disk and are older than the archive copies",
    },
    {
      name: "-l",
      description: "List archive files (short format) without extracting",
    },
    {
      name: "-p",
      description:
        "Extract files to a pipe (stdout), with no messages and no conversions",
    },
    {
      name: "-t",
      description: "Test archive files by checking their CRCs",
    },
    {
      name: "-T",
      description:
        "Set the timestamp on the archive to that of the newest file in it",
    },
    {
      name: "-u",
      description: "Update existing files and create new ones if needed",
    },
    {
      name: "-v",
      description:
        "List archive files verbosely, or show version information when no archive is given",
    },
    {
      name: "-z",
      description: "Display only the archive comment",
    },
    {
      name: "-a",
      description:
        "Convert text files (line endings and character set); -aa treats all files as text",
    },
    {
      name: "-b",
      description: "Treat all files as binary (no text conversions)",
    },
    {
      name: "-C",
      description: "Match archive entry names case-insensitively",
    },
    {
      name: "-D",
      description:
        "Skip restoration of timestamps for extracted directories; -DD skips it for all extracted items",
    },
    {
      name: "-j",
      description:
        "Junk paths: do not recreate the archive's directory structure",
    },
    {
      name: "-K",
      description: "Retain SUID/SGID/sticky file attributes",
    },
    {
      name: "-L",
      description:
        "Convert to lowercase any filename originating on an uppercase-only system; -LL converts every filename",
    },
    {
      name: "-M",
      description:
        "Pipe all output through an internal pager similar to more(1)",
    },
    {
      name: "-n",
      description:
        "Never overwrite existing files, skip them without prompting",
    },
    {
      name: "-o",
      description: "Overwrite existing files without prompting",
    },
    {
      name: "-P",
      description:
        "Use this password to decrypt encrypted entries (insecure, prefer the interactive prompt)",
      args: {
        name: "password",
      },
    },
    {
      name: "-q",
      description: "Perform operations quietly; -qq is even quieter",
    },
    {
      name: "-U",
      description:
        "Escape all non-ASCII characters in UTF-8 filenames as #Uxxxx; -UU disables UTF-8 handling",
    },
    {
      name: "-V",
      description: "Retain VMS file version numbers",
    },
    {
      name: "-W",
      description:
        "Make ? and * not match the directory separator in patterns (** does)",
    },
    {
      name: "-X",
      description:
        "Restore owner (UID/GID) information, usually needs privileges",
    },
    {
      name: "-:",
      description:
        "Allow extracting archive members into locations outside the extraction directory (../ components), use with caution",
    },
    {
      name: "-^",
      description: "Allow control characters in names of extracted entries",
    },
    {
      name: "-d",
      description: "Extract files into this directory",
      args: {
        name: "exdir",
        template: "folders",
      },
    },
    {
      name: "-x",
      description: "Exclude the archive members that follow",
      args: {
        name: "xlist",
        description: "Archive members to exclude (wildcards allowed)",
        isVariadic: true,
      },
    },
    {
      name: "-O",
      description:
        "Specify a character encoding for DOS, Windows and OS/2 archives (Debian/Ubuntu unzip only)",
      args: {
        name: "charset",
        suggestions: ["GBK", "CP936", "CP437", "CP850", "SHIFT_JIS", "BIG5"],
      },
    },
    {
      name: "-I",
      description:
        "Specify a character encoding for UNIX and other archives (Debian/Ubuntu unzip only)",
      args: {
        name: "charset",
        suggestions: ["UTF-8", "GBK", "ISO-8859-1"],
      },
    },
  ],
};

export default completionSpec;
