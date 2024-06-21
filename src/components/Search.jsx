import iconArrow from '../assets/images/icon-arrow.svg'

export const Search = ({getTarget}) => {
    
    return (
        <form className='relative w-[30%]' onSubmit={(e) => getTarget(e)}>
        <div className="w-full">
            <input 
            type="text" 
            placeholder="Search for any IP address or domain" 
            className="px-5 py-3 w-[80%] rounded-l-xl "
            name='target'
            />
            <button className="bg-black px-5 py-3 rounded-r-xl h-[48px]">
                <img src={iconArrow} alt="arrow icon" />
            </button>
        </div>        

        </form>
    )
}