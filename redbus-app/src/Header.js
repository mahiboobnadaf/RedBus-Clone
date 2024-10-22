function Header(){
    return (
        <div>
            <header className='w-screen overflow-x-hidden flex items-center relative p-5 border-4 font-bold text-rose-800'> 
                <div className='flex gap-5 justify-center '>
                    <div className='bg-slate-500'><img src='/redbus_logo.jpg' 
                                className='h-10'alt='bus logo'></img>
                    </div>
                    <div className='text-3xl absolute left-1/4 translate-x-1/2 '>Bus Ticket Booking</div>
                </div>

                <div className='flex gap-4 ml-auto'>
                    <div className="flex gap-1"> <img src='help_img.png'
                    alt='help image' className=" h-5 w-5" /> Help </div>
                    <div className="flex gap-1"> <img src='https://w7.pngwing.com/pngs/301/114/png-transparent-message-board-online-chat-computer-icons-conversation-livechat-chat-room-chat-miscellaneous-angle-text.png'
                    alt='chat image' className=" h-5 w-5" /> English</div>
                    <div className="flex gap-1"> <img src='https://e7.pngegg.com/pngimages/436/585/png-clipart-computer-icons-user-account-graphics-account-icon-vector-icons-silhouette-thumbnail.png'
                    alt='user profile icon' className="h-6"/> Account</div>
                </div>
            </header>
        </div>
    )
}

export default Header;