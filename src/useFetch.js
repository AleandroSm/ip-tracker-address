import { useState,useEffect } from "react"
import { getTarget } from "./getTarget"

export function useFetch(){
    const [data,setData] = useState(null)
    const {target,isIpAddress} = getTarget()
    const urlIp = isIpAddress && `https://geo.ipify.org/api/v2/country,city?apiKey=at_5go7XM6HjdaKTxHAXWRh4PTTrG14n&ipAddress=${target}`
    const urlDomain = !isIpAddress &&`https://geo.ipify.org/api/v2/country,city?apiKey=at_5go7XM6HjdaKTxHAXWRh4PTTrG14n&domain=${target}`
    const url = isIpAddress ? urlIp : urlDomain
    useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  return {data}
}