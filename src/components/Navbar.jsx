import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-md border-b-2 sticky top-0 z-10">
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="inline-block me-3 my-auto">
              <p className="font-bold">Notice<span className='text-[#4B49A6]'>Wizard</span></p>
            </div>
            {/* <div className="inline-block">
              <input type="text" placeholder="Type of notice" className="placeholder-slate-400 placeholder:font-semibold border-[1px] w-[100%] rounded-md p-2" />
            </div> */}
          </div>
          <div className="flex items-center gap-2 text-black/60">
            <div className='p-2 rounded-md hover:bg-black/5'><BiSearchAlt size={25}/></div>
            {/* <div className='p-2 rounded-md hover:bg-black/5'><PiStorefrontDuotone size={25}/></div>
            <div className='p-2 rounded-md hover:bg-black/5'><FaRegBell size={23}/></div> */}
            <div>Hey Mukul Tiwari!</div>
            <div className="w-10 h-10 rounded-full bg-[#4B49A6] text-center text-white flex items-center justify-center">MT</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
