import { useEffect, useState } from 'react'
import top from './assets/images/pattern-bg-desktop.png'
import { Card } from './components/Card'
import { Search } from './components/Search'
import { validateDomain, validateIpAddress } from './validations'
import {Map} from './components/Map'

function App() {

  const [data,setData] = useState(null)
  const [target,setTarget] = useState('')
  const getTarget = (e,setErr) => {
    e.preventDefault()
    const {target} = e.target
    const val = target.value
    if(!validateIpAddress(val) && !validateDomain(val)){
      setErr("invalid ip address or domain name")
      return
    }
    setErr("")
    setTarget(val)
  }


  useEffect(() => {
  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_5go7XM6HjdaKTxHAXWRh4PTTrG14n&${validateIpAddress(target) ? `ipAddress=${target}` : validateDomain(target) ? `domain=${target}` : ""}`)
  .then(res => res.json())
  .then(data => setData(data))
  console.log(data)
},[target])
  
  return (
    <main className='h-screen relative'>
    <div className='h-[20%] flex items-center justify-center flex-col gap-6'>
      <h1 className="relative z-10 text-white font-bold text-3xl">IP Addres Tracker</h1>
      <img src={top} alt="top" className='absolute top-0 object-cover w-full' />
      <Search getTarget={getTarget} />
    </div>
      <Card ip={data?.ip} city={data?.location?.city} region={data?.location?.region} asn={data?.as?.asn} timeZone={data?.location?.timezone} isp={data?.isp} />
      {data != null && < Map lat={data?.location?.lat} lng={data?.location?.lng}/>}
    </main>
  )
}

export default App
