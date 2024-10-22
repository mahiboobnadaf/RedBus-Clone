function Mainbody(){
    return (
        <div className="w-screen" style={{
            backgroundImage: "url('/bg_image5.jpg')",
            // Ensures the image covers the entire div
            backgroundSize:"100% 90%",
            // backgroundPosition: "left", // Centers the image
            height: "100vh", // Full height for demonstration
            width:"100vw",
            color: "white", // Just to make the text visible
            backgroundRepeat:"no-repeat"
        }}>
        <div className="text-white text-2xl font-extrabold font-sans flex justify-center p-2">
            Indias No. 1 Online Bus Ticket Booking Site
        </div>

        <div className="text-red-950 p-10">
            <div>from</div>
            <div>To</div>
            <div>Date</div>
            <div>Search</div>
        </div>
    </div>
)
}

export default Mainbody;