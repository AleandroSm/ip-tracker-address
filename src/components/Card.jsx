

export const Card = ({ip,city,region,asn,timeZone,isp}) => {


    return (
        <div className="relative left-0 right-0 mx-auto z-10 flex flex-col md:flex-row md:justify-around mt-6 w-[80%] md:w-[60%] px-4 py-6 md:py-16 font-semibold rounded-xl bg-white">
            <div className="text-center md:text-start md:mr-auto">
                <span className="text-gray-400 md:align-text-top text-xs tracking-widest">IP ADDRESS</span>
                <p className="text-xl mt-1 md:mt-3">{ip}</p>
            </div>
            <hr />
            <div className="text-center md:text-start md:mr-auto md:ml-8">
                <span className="text-gray-400 md:align-text-top text-xs tracking-widest">LOCATION</span>
                <p className="text-xl mt-1 md:mt-3">{city},{region}</p>
                <p className="text-xl mt-1 md:mt-3">{asn}</p>
            </div>
            <hr />
            <div className="text-center md:text-start md:mr-auto md:ml-8">
                <span className="text-gray-400 md:align-text-top text-xs tracking-widest">TIMEZONE</span>
                <p className="text-xl mt-1 md:mt-3">UTC {timeZone}</p>
            </div>
            <hr />
            <div className="text-center md:text-start md:mr-auto md:ml-8 ">
                <span className="text-gray-400 inline-block md:align-text-top text-xs tracking-widest">ISP</span>
                <p className="text-xl mt-1 md:mt-3">{isp}</p>
            </div>
        </div>
    )
}