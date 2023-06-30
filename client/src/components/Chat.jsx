import React from 'react'
import { RiOpenaiFill } from 'react-icons/ri'
function Chat({ isAi, text, user }) {
    return (
        <div className={`${isAi && 'bg-[#484f5d]'} w-full lg:px-0 px-2 py-4`}>
            <div className='max-w-3xl mx-auto flex gap-3 items-start'>
                <span className={`${isAi ? "bg-lime-950":"bg-yellow-600"}  px-3 py-2 text-sm font-medium rounded-lg`}>
                    {isAi ? <RiOpenaiFill size={20} /> : user?.split('').slice(0, 2).join('').toUpperCase()}
                </span>
                <p className='text-sm text-gray-300'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Chat
