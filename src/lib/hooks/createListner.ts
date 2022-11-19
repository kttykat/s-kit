import { useEffect } from "react"

export default (cb: () => any, key?: string, ctrl?: boolean, a?: any[]) => {
  return useEffect(() => {
    if(typeof window === undefined) {
      return
    }
    if(key) {
      document.onkeydown = (ev) => {
        const _ = () => { if(ev.key.toLowerCase() === key.toLowerCase()) {
          cb()
        }}
        if(ctrl) {
          if(ev.ctrlKey) {
            _()
          }
        } else {
          _()
        }
      }
    } else {
      cb()
    }
  }, a)
}