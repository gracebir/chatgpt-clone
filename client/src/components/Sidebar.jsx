import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { BsPlus, } from 'react-icons/bs'
function Sidebar() {
    const [isOpen, setisOpen] = useState(false)
    return (
        <aside className='bg-[#202123] lg:w-[226px] lg:h-screen w-full sticky h-auto py-3 text-white border-b lg:border-none border-gray-300 lg:px-4 px-0'>
            <div className='flex lg:hidden w-full justify-between px-4'>
                <span onClick={() => setisOpen(true)}>
                    <GiHamburgerMenu size={20} />
                </span>
                <h3 className='font-semibold'>New chat</h3>
                <span>
                    <BsPlus size={25} />
                </span>
            </div>
            <div className={`fixed top-0 bottom-0 ${isOpen ? '-translate-x-0' : '-translate-x-full'} transition-all ease-in-out duration-300 right-0 flex lg:hidden gap-6 h-screen w-full left-0 inset-0 backdrop-blur-sm z-50`}>
                <div className='flex flex-col w-[70%] bg-[#202123] h-screen py-4 px-2'>
                    <button className='flex gap-2 py-2 w-full px-4 border border-gray-500 rounded-md'>
                        <span><BsPlus size={20} /></span><span className='text-sm font-medium'>New chat</span>
                    </button>
                </div>
                <button onClick={() => setisOpen(false)} className='h-10 w-10 border flex lg:hidden justify-center items-center'>
                    <MdClose size={25} />
                </button>
            </div>
            {/* button for desktop view */}
            <button className='flex gap-2 py-2 w-full px-4 border border-gray-500 rounded-md'>
                <span><BsPlus size={20} /></span><span className='text-base font-medium'>New chat</span>
            </button>
        </aside>
    )
}

export default Sidebar
