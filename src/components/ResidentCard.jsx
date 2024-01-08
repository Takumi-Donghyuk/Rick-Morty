import axios from "axios"
import { useEffect, useState } from "react"

const ResidentCard = ({residentURL}) => {
    const [residentInfo, setResidentInfo] = useState(null)
    const bgByStatus={
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-950"
    }
    useEffect(() => {
        axios
        .get(residentURL)
        .then(({data}) => setResidentInfo(data))
        .catch((error) => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <article className="border-2 border-green-500 text-white">
        <header className="relative">
            <img src={residentInfo?.image} alt="" />
            <div className="flex items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white p-1 
            px-2 border-2 border-green-500">
                <div className={`h-3 aspect-square rounded-full ${bgByStatus[residentInfo?.status]}`}></div>
                <span>{residentInfo?.status}</span>
            </div>
        </header>
        <section>
            <h5 className="flex justify-center items-center text-lg font-semibold p-2">{residentInfo?.name}</h5>
            <ul className="text-md p-5">
                <li className="flex gap-5">
                    <span className="text-gray-400 font-semibold">Species</span> {residentInfo?.species}
                </li>
                <li className="flex gap-5">
                    <span className="text-gray-400 font-semibold">Origin</span> {residentInfo?.origin.name}
                </li>
                <li className="flex gap-5">
                    <span className="text-gray-400 font-semibold">Times appear</span> {residentInfo?.episode.length}
                </li>
            </ul>
        </section>
    </article>
  )
}
export default ResidentCard