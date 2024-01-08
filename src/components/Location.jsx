import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({locationInfo, setLocationInfo}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newLocationId = e.target.newLocation.value
        axios.get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
        .then(({data}) => setLocationInfo(data))
        .catch((error) => console.log(error))
    }
  return (
    <section className="flex flex-col gap-5 justify-center items-center">
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <input className="bg-black text-white p-2 border-2 border-green-500
                 w-[32rem] focus:outline-none" type="number" name="newLocation" 
                 placeholder="Type a location ID..." required/>
                <button className="bg-green-900 border-2 border-green-500 text-white flex gap-3 justify-center items-center p-1 px-5" type="submit">Search <IconSearch size={15}/> </button>
            </div>
        </form>

        <article className="text-white border-2  border-green-500 max-w-[1024px] mx-auto py-5 px-10
         flex flex-col gap-3">
            <h2 className="text-green-500 text-center">¡Welcome to {locationInfo?.name}!</h2>
            <ul className="flex gap-3">
                <li className="text-gray-400 font-semibold">Type: {locationInfo?.type}</li>
                <li className="text-gray-400 font-semibold">Dimension: {locationInfo?.dimension}</li>
                <li className="text-gray-400 font-semibold">Population: {locationInfo?.residents.length}</li>
            </ul>
        </article>
    </section>
  )
}
export default Location