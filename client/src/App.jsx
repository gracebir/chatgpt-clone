import React from 'react'
import Sidebar from './components/Sidebar'
import {MdSend} from 'react-icons/md'

function App() {
  return (
    <div className='h-screen font-inter bg-[#282c34] flex flex-col lg:flex-row'>
      <Sidebar />
      <div className='flex-1 w-full px-2'>
        <div className="flex flex-col justify-between h-full max-w-3xl mx-auto lg:py-8 py-0">
          <div className='flex overflow-y-scroll scroll-hidden h-[84.5vh] lg:h-[86vh] flex-col py-2 text-white'>
          </div>
          <div className='py-3 px-4 w-full bg-[#363c46] shadow-lg rounded-xl flex items-center mb-4 lg:mb-0'>
            <input className='w-full px-4 bg-[#363c46] py-2 outline-none rounded' placeholder='Send a Message' type="text" name="" id="" />
            <span className='text-gray-400 cursor-pointer'>
              <MdSend size={25}/>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
