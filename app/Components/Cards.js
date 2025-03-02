import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from 'framer-motion';
const Cards = ({data, reference}) => {
    return (
        <motion.div drag dragConstraints={reference} className="w-60 h-80 flex-shrink-0 rounded-[30px] bg-zinc-900 px-4 py-8 relative text-zinc-100 overflow-hidden">
            <FaRegFileLines />
            <p className="text-sm mt-5 font-semibold leading-tight mb-5">{data.desc}
            </p>
            <p className='text-gray-400 text-sm'>
                Posted By-:
            </p>
            <p className='text-gray-400 text-md'>Tanmay</p>
            <div className="absolute bottom-0 h-[35%] w-full left-0">
                <div className={`w-full h-[50px] bg-red-600 flex items-center justify-center bottom-0 absolute`}><h3 className="text=md font-semibold">Delete</h3></div>  
            </div>
        </motion.div>
    )
}

export default Cards