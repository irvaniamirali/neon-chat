import { useState } from 'react'
import './App.css'

import SendIcon from '@mui/icons-material/Send';

function App() {
 

  return (
    <>
  

  <div className="h-screen flex flex-col" style={{ background: '#edf2f7',width:'100%' }}>
      {/* Main Container */}
      <div className="flex flex-col h-full w-full">
        {/* Chat Header */}
        <header className="bg-white p-4 text-gray-500 border-b ">
          <h1 className="text-2xl font-semibold">Neon</h1>
        </header>

        {/* Chat Messages */}
        <div className="flex-grow p-4 overflow-y-auto bg-gradient-to-t from-zinc-100 to-slate-200 ">
          {/* Incoming Message */}
          <div className="flex mb-4 cursor-pointer">
            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              <img
                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="flex max-w-96 bg-gradient-to-r from-lime-400 to-green-500 rounded-lg p-3 gap-3 hover:from-lime-500 hover:to-green-600">
              <p className="text-gray-700">Hey Bob, how's it going?</p>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 text-white rounded-lg p-3 gap-3 bg-gradient-to-r from-violet-500 to-blue-400">
              <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
              <img
                src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                alt="My Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>

          {/* Other Messages here */}
        </div>

        {/* Chat Input */}
        <footer className="bg-white border-t border-gray-300 p-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"> <SendIcon /></button>
          </div>
        </footer>
      </div>
    </div>

    </>
  )
}

export default App
