import axios from "axios"
import { useEffect, useState } from "react"
import { getRandomNumber } from "./helpers/random"
import Location from "./components/Location"
import ResidentList from "./components/ResidentList"
import Header from "./components/Header"

function App() {
 const [locationInfo, setLocationInfo] = useState(null)
 useEffect(() => {
  axios
  .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
  .then(({data}) => setLocationInfo(data))
  .catch((error) => console.log(error))
 }, [])

  return (
    <main className="min-h-screen bg-cover bg-center relative flex flex-col gap-5" style={{ backgroundImage: "url('/Images/rectangle.png')" }}>
      <Header />
      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo}/>
      <ResidentList residents={locationInfo?.residents ?? []}/>
    </main>
  )
}

export default App
