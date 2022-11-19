import { useEffect } from "react"

export default (cb: () => any, a?: any[]) => {
  return useEffect(() => {
    if(typeof window === undefined) {
      return
    }
    cb()
  }, a)
}