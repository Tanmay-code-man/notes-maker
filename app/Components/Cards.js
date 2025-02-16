import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from 'framer-motion';
const Cards = ({data, reference}) => {
    return (
        <motion.div drag dragConstraints={reference} className="w-60 h-80 flex-shrink-0 rounded-[30px] bg-zinc-900 px-4 py-8 relative text-zinc-100 overflow-hidden">
            <FaRegFileLines />
            <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}
            </p>
            <div className="absolute bottom-0 h-[35%] w-full left-0 ">
                <div className="flex items-center justify-between mb-5 px-8 py-3">
                    <h5>{data.filesize}</h5>
                    <span className="w-5 h-5 rounded-[50%] bg-zinc-600 flex items-center justify-center">
                        {data.close ? <IoIosClose/> : <LuDownload size=".7em" color="white" />}
                    </span>
                </div>
                {
                    data.tag.isOpen ? (<div className={`tag w-full h-[50px] bg-green-500 flex items-center justify-center py-4 ${data.tag.tagColor == 'green' ? "bg-green-500": "bg-blue-500"}`}><h3 className="text=md font-semibold">{data.tag.tagTitle}</h3></div>): null
                }
                
            </div>
        </motion.div>
    )
}

export default Cards