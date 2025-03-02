import React from 'react'

function Background() {
    return (
        <>
        <div className="fixed z-[2] w-full h-screen">
            <div className="w-full py-10 flex justify-center text-zinc-600 absolute top-[5%] text-xl font-semibold ">Blog</div>
            <h1 className="text-[14vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900">Blogs.</h1>
        </div>
        </>
    )
}

export default Background