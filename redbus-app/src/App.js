function App() {
  return (
    <>
      <div>
        <header className=' w-screen overflow-hidden flex items-center relative p-5 border-4 font-bold text-rose-800'> 
          <div className='flex gap-5 '>
            <div className='bg-slate-500'><img src='https://i.pinimg.com/736x/58/91/2b/58912b2e3ad6a279347eebb47751a9c1.jpg' className='h-10'alt='bus logo'></img></div>
            <div className='text-3xl absolute left-1/3 translate-x-1'>Bus Ticket</div>
          </div>

          <div className='flex gap-5 ml-auto'>
            <div>help</div>
            <div>English</div>
            <div>Account</div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
