import { useEffect } from "react"

export default (cb: () => any, key?: string, a?: any[]) => {
  return useEffect(() => {
    if(typeof window === undefined) {
      return
    }
    if(key) {
      document.onkeydown = (ev) => {
        if(ev.key.toLowerCase() === key.toLowerCase()) {
          cb()
        }
      }
    } else {
      cb()
    }
  }, a)
}