function Location_input(){
    return (
        <div className="flex items-center justify-center h-[60%]"> 
            <div className="text-red-950 p-10 bg-red-600 bg-opacity-30 rounded-lg flex border-2 gap-2">
                
                 {/* From Input */}
                <div className="border-2 rounded-xl border-black p-2">
                    <label htmlFor="from" className=" block mb-1">From:</label>
                    <input
                        type="text"
                        id="from"
                        className="border w-full p-2 rounded-xl"
                        placeholder="Enter departure city"
                    />
                </div>

                {/* To Input */}
                <div className="border-2 border-black p-2">
                    <label htmlFor="to" className="block mb-1">To:</label>
                    <input
                        type="text"
                        id="to"
                        className="border w-full p-1"
                        placeholder="Enter destination city"
                    />
                </div>

                {/* Date Input */}
                <div className="border-2 border-black p-2">
                    <label htmlFor="date" className="block mb-1">Date:</label>
                    <input
                        type="date"
                        id="date"
                        className="border w-full p-1"
                    />
                </div>

                {/* Search Button */}
                <div className="border-2 border-black p-2 flex items-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Location_input;