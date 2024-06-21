

export const Card = ({ip,city,region,asn,timeZone,isp}) => {


    return (
        <div className="relative left-0 right-0 mx-auto z-10 flex justify-around mt-6 w-[60%] px-4 py-16 font-bold rounded-xl bg-white">
            <div className="mr-auto">
                <span className="text-gray-400 align-text-top">IP ADDRESS</span>
                <p className="text-2xl mt-3">{ip}</p>
            </div>
            <hr />
            <div className="mr-auto ml-8">
                <span className="text-gray-400 align-text-top">LOCATION</span>
                <p className="text-2xl mt-3">{city},{region}</p>
                <p className="text-2xl mt-3">{asn}</p>
            </div>
            <hr />
            <div className="mr-auto ml-8">
                <span className="text-gray-400 align-text-top">TIMEZONE</span>
                <p className="text-2xl mt-3">UTC {timeZone}</p>
            </div>
            <hr />
            <div className="mr-auto ml-8">
                <span className="text-gray-400 inline-block align-text-top">ISP</span>
                <p className="text-2xl mt-3">{isp}</p>
            </div>
        </div>
    )
}