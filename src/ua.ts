// ua v38 (alias of the Ubuntu Pro Client `pro`, ubuntu-advantage-tools 38ubuntu0~26.04, 2026-11-19). Source: re-exports src/pro.ts, which was synced
// from canonical/ubuntu-pro-client main (debian/ubuntu-pro-client.links links /usr/bin/ua and /usr/bin/pro to /usr/bin/ubuntu-advantage, one program).
import completionSpec from "./pro";
const Spec: Fig.Spec = {
  ...completionSpec,
  name: "ua",
};

export default Spec;
