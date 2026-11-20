// unix2dos v7.5.7 (shipped in the dos2unix 7.5.7 release of 2026-08-27, 2026-11-19). Source: dos2unix-7.5.7 source tarball (man/man1/dos2unix.pod and PrintUsage in common.c, which print the unix2dos-specific defaults); read only, not built or run.
import dos2unix from "./dos2unix";

// Option descriptions whose default differs between unix2dos and dos2unix
const unix2dosDescriptions: Record<string, string> = {
  "-b": "Keep Byte Order Mark (BOM). When the input file has a BOM, write a BOM in the output file. This is the default",
  "-l": "Add additional newline. Only Unix line breaks are changed to two DOS line breaks. In Mac mode Unix line breaks are changed to two Mac line breaks",
};

const base = dos2unix as Fig.Subcommand;

const completionSpec: Fig.Spec = {
  ...base,
  name: "unix2dos",
  description: "Unix to DOS text file format converter",
  options: base.options?.map((option) => {
    const names = Array.isArray(option.name) ? option.name : [option.name];
    const key = names.find((name) => name in unix2dosDescriptions);
    return key ? { ...option, description: unix2dosDescriptions[key] } : option;
  }),
};
export default completionSpec;
