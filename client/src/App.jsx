import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import {MdSend} from 'react-icons/md'
import Chat from './components/Chat'

function App() {
  const [message, setMessage] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hey, submit")
  }
  return (
    <div className='h-screen font-inter bg-[#282c34] flex flex-col lg:flex-row'>
      <Sidebar />
      <div className='flex-1 w-full'>
        <div className="flex flex-col justify-between h-full lg:py-8 py-0">
          <div className='flex overflow-y-scroll scroll-hidden h-[84.5vh] lg:h-[86vh] flex-col py-2 text-white'>
            <Chat isAi={false} user={"Grace"} text={"How are you?"}/>
            <Chat isAi={true} user={"AI"} text={"Yes, I am going great, how about you?"}/>
          </div>
          <form onSubmit={handleSubmit} className='py-3 px-4 w-full max-w-3xl mx-auto bg-[#363c46] shadow-lg rounded-xl flex items-center mb-4 lg:mb-0'>
            <input onChange={(e)=> setMessage(e.target.value)} className='w-full text-gray-200 px-4 bg-[#363c46] py-2 outline-none rounded' placeholder='Send a Message' type="text" name="" id="" />
            <button className='text-gray-400 cursor-pointer'>
              <MdSend size={25}/>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
