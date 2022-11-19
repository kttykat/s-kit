import { useEffect } from "react"

export default (cb: () => any, key?: string, ctrl?: boolean, shift?: boolean, a?: any[]) => {
  return useEffect(() => {
    if(typeof window === undefined) {
      return
    }
    if(key) {
      document.onkeydown = (ev) => {
        const _ = () => { if(ev.key.toLowerCase() === key.toLowerCase()) {
          cb()
        }}
        const shifted = ev.shiftKey;
        const ctrled = ev.ctrlKey
        if((ctrl && shift) && (ctrled && shifted)) {
          _()
        }
        if(ctrl && ctrled) {
          _()
        }
        if(shift && shifted) {
          _()
        }
        if(!ctrl && !shifted) {
          _()
        } 
      }
    } else {
      cb()
    }
  }, a)
}