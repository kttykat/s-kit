import { useEffect } from "react";
// need to fix 

export default (
  cb: () => any,
  key: string,
  ctrl: boolean = false,
  shift: boolean = false,
) => {
  return useEffect(() => {
    if (typeof window === undefined) {
      return;
    }
    if (key) {
      document.onkeydown = (ev) => {
        const _ = () => {
          console.log(ev.key, key)
          if (ev.key.toLowerCase() === key.toLowerCase()) {
            console.log("ran", ev.key);
            cb();
          }
        };
        const shifted = ev.shiftKey;
        const ctrled = ev.ctrlKey;
        if ((ctrl && !ctrled) && (!shift && !shifted)) {
          _();
        } else {
          if ((ctrl && shift) && (ctrled && shifted)) {
            _();
          }
          if (ctrl && ctrled) {
            _();
          }
          if (shift && shifted) {
            _();
          }
        }
      };
    } else {
      cb();
    }
  });
};
