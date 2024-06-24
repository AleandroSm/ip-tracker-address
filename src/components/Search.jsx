import { useState } from 'react'
import iconArrow from '../assets/images/icon-arrow.svg'

export const Search = ({getTarget}) => {
    
    const [err,setErr] = useState("")

    return (
        <form className='relative w-[80%] md:w-[30%]' onSubmit={(e) => getTarget(e,setErr)}>
        <div className="w-full">
            {err && <p className='text-red-600'>{err}</p>}
            <input 
            type="text" 
            placeholder="Search for any IP address or domain" 
            className={`px-5 py-3 w-[80%] rounded-l-xl  ${err && 'border-2 border-red-700 border-solid'}`}
            name='target'
            />
            <button className="bg-black px-5 py-4 rounded-r-xl ">
                <img src={iconArrow} alt="arrow icon" />
            </button>
        </div>        

        </form>
    )
}