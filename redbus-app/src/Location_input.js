function Location_input(){

    return (
        <div className="flex items-center justify-center h-[60%]"> 
            <div className="text-red-950 p-10 bg-opacity-40 rounded-2xl flex flex-wrap gap-2">
                
                 {/* From Input */}
                <div className=" p-2">
                    <label htmlFor="from" className=" block mb-1 text-white font-extrabold ">From:</label>
                    <input
                        type="text"
                        id="from"
                        className="border w-full p-2 rounded-xl"
                        placeholder="Enter departure city"
                    />
                </div>

                {/* To Input */}
                <div className=" p-2 ">
                    <label htmlFor="to" className="block mb-1 text-white font-extrabold">To:</label>
                    <input
                        type="text"
                        id="to"
                        className="border w-full p-2 rounded-xl"
                        placeholder="Enter destination city"
                    />
                </div>

                {/* Date Input */}
                <div className="p-2">
                    <label htmlFor="date" className="block mb-1 text-white font-extrabold">Date:</label>
                    <input
                        type="date"
                        id="date"
                        className="border w-full p-2 rounded-xl "
                    />
                </div>

                {/* Search Button */}
                <div className="p-2 flex w-full justify-center">
                    <button className="bg-slate-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-slate-800">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Location_input;