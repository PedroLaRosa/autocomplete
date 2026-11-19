// ditto macOS 13.0 man page (ditto(1) dated June 1, 2022; text taken from the Xcode 27.3 beta 2 export, 2026-11-19).
// Source: ditto.1 HTML in the keith/xcode-man-pages mirror, read statically (no live run on macOS).
// Apple publishes no ditto source, so -b, -o and -l (only mentioned in other option texts) are not included
const completionSpec: Fig.Spec = {
  name: "ditto",
  description: "Copy directory hierarchies, create and extract archives",
  options: [
    {
      name: ["-h", "--help"],
      description: "Print full usage",
    },
    {
      name: "-X",
      description:
        "When copying one or more source directories, do not descend into directories that have a different device ID",
    },
    {
      name: "-c",
      description:
        "Create an archive at the destination path. The default format is CPIO, unless -k is given",
      exclusiveOn: ["-x"],
    },
    {
      name: "-z",
      description: "Create compressed CPIO archives, using gzip(1) compression",
      exclusiveOn: ["-j", "-k"],
    },
    {
      name: "-j",
      description:
        "Create compressed CPIO archives, using bzip2(1) compression",
      exclusiveOn: ["-z", "-k"],
    },
    {
      name: "-v",
      description:
        "Print a line of output to stderr for each source directory copied",
    },
    {
      name: "-V",
      description:
        "Print a line of output to stderr for every file, symbolic link, and device copied",
    },
    {
      name: "-x",
      description:
        "Extract the archives given as source arguments. The format is assumed to be CPIO, unless -k is given",
      exclusiveOn: ["-c"],
    },
    {
      name: "-k",
      description:
        "Create or extract from a PKZip archive instead of the default CPIO",
      exclusiveOn: ["-z", "-j"],
    },
    {
      name: "--keepParent",
      description:
        "When creating an archive, embed the parent directory name src in dst_archive",
    },
    {
      name: "--arch",
      description:
        "Thin Universal binaries to the specified architecture. If multiple --arch options are specified then the resulting destination file will contain each of the specified architectures (if they are present in the source file)",
      isRepeatable: true,
      args: {
        name: "arch",
        suggestions: ["arm64", "x86_64"],
      },
    },
    {
      name: "--bom",
      description:
        "Copy only files, links, devices, and directories that are present in the specified BOM",
      args: {
        name: "bom",
        template: "filepaths",
      },
    },
    {
      name: "--rsrc",
      description:
        "Preserve resource forks and HFS meta-data. ditto will store this data in Carbon-compatible ._ AppleDouble files on filesystems that do not natively support resource forks. As of Mac OS X 10.4, --rsrc is default behavior",
    },
    {
      name: "--norsrc",
      description:
        "Do not preserve resource forks and HFS meta-data. If both --norsrc and --rsrc are passed, whichever is passed last will take precedence. Both options override DITTONORSRC. Unless explicitly specified, --norsrc also implies --noextattr and --noacl to match the behavior of Mac OS X 10.4",
    },
    {
      name: "--extattr",
      description:
        "Preserve extended attributes (requires --rsrc). As of Mac OS X 10.5, --extattr is the default",
    },
    {
      name: "--noextattr",
      description: "Do not preserve extended attributes (requires --norsrc)",
    },
    {
      name: "--qtn",
      description:
        "Preserve quarantine information. As of Mac OS X 10.5, --qtn is the default",
    },
    {
      name: "--noqtn",
      description: "Do not preserve quarantine information",
    },
    {
      name: "--acl",
      description:
        "Preserve Access Control Lists (ACLs). As of Mac OS X 10.5, --acl is the default",
    },
    {
      name: "--noacl",
      description: "Do not preserve ACLs",
    },
    {
      name: "--nocache",
      description:
        "Do not perform copies using the Mac OS X Unified Buffer Cache. Files read and written will not be cached, although if the file is already present in the cache, the cached information will be used",
    },
    {
      name: "--hfsCompression",
      description:
        "When copying files or extracting content from an archive, if the destination is an HFS+ or APFS volume that supports filesystem compression, all the content will be compressed if appropriate. This is only intended to be used in installation and backup scenarios that involve system files, and should not be used with non-system files or other user-generated content that will be used on a version of Mac OS X earlier than 10.6",
    },
    {
      name: "--nohfsCompression",
      description:
        "Do not compress files with filesystem compression when copying or extracting content from an archive unless the content is already compressed with filesystem compression. --nohfsCompression is the default",
    },
    {
      name: "--preserveHFSCompression",
      description:
        "When copying files to an HFS+ or APFS volume that supports compression, ditto will preserve the compression of any source files that were using filesystem compression. --preserveHFSCompression is the default",
    },
    {
      name: "--nopreserveHFSCompression",
      description:
        "Do not preserve filesystem compression when copying files that are already compressed with filesystem compression",
    },
    {
      name: "--sequesterRsrc",
      description:
        "When creating a PKZip archive, preserve resource forks and HFS meta-data in the subdirectory __MACOSX. PKZip extraction will automatically find these resources",
    },
    {
      name: "--zlibCompressionLevel",
      description:
        "Sets the compression level to use when creating a PKZip archive. The compression level can be set from 0 to 9, where 0 represents no compression, and 9 represents optimal (slowest) compression. By default, ditto will use the default compression level as defined by zlib",
      args: {
        name: "num",
        suggestions: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
    },
    {
      name: "--password",
      description:
        "When extracting a password-encrypted ZIP archive, you must specify --password to allow ditto to prompt for a password to use to extract the contents of the file. If this option is not provided, and a password-encrypted file is encountered, ditto will emit an error message",
    },
    {
      name: "--persistRootless",
      description:
        "If a file being replaced has the SF_RESTRICTED flag or the com.apple.rootless extended attribute set, retain it even if the source file may not have had the same flag or attribute",
    },
    {
      name: "--nopersistRootless",
      description:
        "Do not persist the SF_RESTRICTED flag or the com.apple.rootless extended attribute for files being replaced",
    },
    {
      name: "--nonAtomicCopies",
      description:
        "Do not perform atomic copies when replacing existing files. By default ditto will atomically swap new files into place when completing a copy",
    },
    {
      name: "--segmentLargeFiles",
      description:
        "When copying files to a CPIO archive, segment files larger than 8 gigabytes into multiple entries",
    },
    {
      name: "--keepBinaries",
      description:
        "When copying files, set aside the original Mach-O binary when it is being replaced. The file name will be changed to a random number preceded by the prefix .BC.T_",
    },
    {
      name: "--keepBinariesList",
      description:
        "When ditto keeps binary files it will record the location of the kept file in the file at the specified path",
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "--keepBinariesPattern",
      description:
        "Keep any regular file that matches the specified regular expression. Note that this file must not be a Mach-O binary",
      args: {
        name: "regex",
      },
    },
    {
      name: "--lang",
      description:
        "When copying files with an index bom specified, filter language variants from the index bom. By default ditto will create a new index bom at /tmp/ditto.XXXXX representing the filtered contents",
      args: {
        name: "lang",
      },
    },
    {
      name: "--outBom",
      description:
        "Specify an explicit path for the output bom. This bom will only be created if the -o or -l flags were specified",
      args: {
        name: "bom",
        template: "filepaths",
      },
    },
    {
      name: "--clone",
      description: "Attempt to clone regular files when copying",
    },
    {
      name: "--noclone",
      description: "Do not attempt to clone files",
    },
    {
      name: "--option",
      description:
        "Specify an arbitrary key value pair to be passed to the copier. The value can be a string, boolean, or integer. Booleans can be specified as 'true', 'false', 'yes', or 'no'",
      args: {
        name: "key=value",
      },
    },
  ],
  args: [
    {
      name: "source",
      template: ["filepaths", "folders"],
      isVariadic: true,
    },
    {
      name: "dest",
      template: "folders",
      suggestCurrentToken: true,
    },
  ],
};
export default completionSpec;
