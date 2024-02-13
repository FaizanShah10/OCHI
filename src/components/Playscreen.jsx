import React, { useEffect, useState } from 'react'

const Playscreen = () => {

    const [rotate, setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle-180)
        })
    })

  return (
    <div className='w-full h-screen overflow-hidden bg-gray-600'>
        <div data-scroll data-scroll-section data-scroll-speed="-0.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='flex justify-center items-center absolute w-1/2 h-80 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='eyes flex gap-6'>
                    <div className='w-56 h-56 rounded-full bg-white flex justify-center items-center'>
                        <div className='w-32 h-32 bg-black rounded-full flex justify-center items-center'>
                            
                            <div style={{transform: `rotate(${rotate}deg)`}} className='line w-full h-10'>
                            <div className='h-6  w-6 rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-56 h-56 rounded-full bg-white flex justify-center items-center'>
                        <div className='w-32 h-32 bg-black rounded-full flex justify-center items-center'>
                        <div style={{transform: `rotate(${rotate}deg)`}} className='line w-full h-10'>
                            <div className='h-6  w-6 rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Playscreen