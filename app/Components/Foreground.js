"use client"
import React from 'react'
import Cards from './Cards'
import { useRef } from 'react';
const Foreground = () => {
    const ref = useRef(null);
    const data=[
        {desc:"Made glorious summer by this sun of York And all the clouds that lour'd upon our house.Hi This is a sample card to my project",tag:{
            tagTitle:"Delete" 
        }},
        {desc:"Made glorious summer by this sun of York And all the clouds that lour'd upon our house.Hi This is a sample card to my project",tag:{
            tagTitle:"Delete"
        }},
        {desc:"Made glorious summer by this sun of York And all the clouds that lour'd upon our house.Hi This is a sample card to my project",tag:{
            tagTitle:"Delete"
        }},
        {desc:"Made glorious summer by this sun of York And all the clouds that lour'd upon our house.Hi This is a sample card to my project",tag:{
            tagTitle:"Delete"
        }},
        {desc:"Made glorious summer by this sun of York And all the clouds that lour'd upon our house.Hi This is a sample card to my project", tag:{
            tagTitle:"Delete"
        }},
        {desc:"Made glorious summer by this sun of York And all the clouds that lour'd upon our house.Hi This is a sample card to my project", tag:{
            tagTitle:"Delete"
        }}
    ]
    
  return (
    <div ref={ref} className=" fixed w-full h-full bg-transparent z-[3] flex gap-5 p-8 flex-wrap">
        {data.map((item, index) => (
        <Cards data={item} key={index} reference={ref}/>))}

    </div>
  )
}

export default Foreground
