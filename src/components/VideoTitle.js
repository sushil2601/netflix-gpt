import React from 'react'
import { FaPlay} from 'react-icons/fa'
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute px-24 pt-[20%] w-screen aspect-video bg-gradient-to-r from-black text-white'>                                                                                                                                                                                                           
        <h1 className='font-bold text-4xl text-gray-400'>{title}</h1>
        <p className='py-6 w-1/4'>{overview}</p>
        <div className='flex'>
            <div className='flex items-center bg-white text-black rounded-md px-6 gap-2 hover:bg-slate-400 opacity-80'>
                <FaPlay />
                <button className='text-lg text-black '>Play</button>
            </div>
            <div className='flex items-center gap-2 rounded-md bg-gray-500 mx-2 px-3 hover:opacity-80'>
                <FiInfo />
                <button className='text-lg text-white'>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle
