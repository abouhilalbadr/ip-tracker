import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

import Map from './components/Map'
import Details from './components/Details'

import PaternImage from './assets/pattern-bg.png'
const App = () => {
  const search = useRef<HTMLInputElement>(null)
  const [location, setLocation] = useState(null)


  const isIpAddress = (ipaddress: string | undefined) => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

    return ipRegex.test(ipaddress || '')
  }
  const getLocation = async () => {
    try {
      const param = isIpAddress(search.current?.value) ? `ipAddress=${search.current?.value}` : `domain=${search.current?.value}`
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&${param}`
      const { data: getLocation } = await axios.get(url)
      setLocation(getLocation)
    } catch (error: any) {
      console.log(error);
      alert(error.message)
    }
  }

  return (
    <>
      <div className="relative h-[30vh]">
        <img className="w-full h-full object-cover" src={PaternImage} alt="Pattern image" />
        <div className="absolute top-0 left-0 p-8 w-full h-full">
          <div className="flex flex-col justify-center items-center text-center gap-6">
            <h1 className="text-3xl font-bold text-white">IP Address Tracker</h1>
            <div className="flex relative w-full lg:w-1/2">
              <input
                ref={search}
                type="text"
                className="bg-white px-5 h-14 w-full rounded-l-xl focus:outline-none"
                placeholder="Search for any IP address or domain"
              />
              <button
                onClick={getLocation}
                className="bg-black px-6 h-14 text-white rounded-r-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
              </button>
            </div>
          </div>
        </div>
        {location && <Details location={location} />}
      </div>
      {location && <Map location={location} />}
    </>
  )
}

export default App
