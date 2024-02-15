import React from 'react'
import { ArrowUpRight } from 'react-feather'
import {motion} from 'framer-motion'

const Landingpage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-gray-100 pt-1'>
        <div className='px-20'>
        <div className='masker mt-48'>
            {["We create", "Eye-opening", "Presentations"].map((item, index)=>(
            <div className='w-fit  flex items-end overflow-hidden '>
                {index === 1 && (<motion.div 
                initial={{width: "0"}} 
                animate={{width: "8vw"}} 
                transition={{ease: [0.76, 0, 0.24, 1], duaration: 5}}
                 
                >
                    <img className='w-[8vw] h-[4.8vw] rounded-md relative' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'></img>
                </motion.div>)}
                <h2 className='text-8xl font-semibold text-black  tracking-tighter uppercase leading-[5.5vw] font-["Founders Grotesk"]'>
                    {item}
                </h2>    
            </div>
            
            ))}
            </div>

            <hr className='mt-40'/>

            <div className=' px-20 py-8 text-black font-["Neue Montreal"]'>
                <div className='flex justify-between items-center'>
                    {["For public and Private companies", "From the first pitch to IPO"].map((item, index)=>(
                    <p>{item}</p>
                    ))}

                    <div className='start flex items-center gap-2'>
                    <button className='py-2 px-4 border-[1px] border-black rounded-full hover:bg-black hover:text-white'>START THE PROJECT</button> 
                    <div className='py-[6px] px-[6px] border-[1px] border-black rounded-full hover:bg-black hover:text-white'><ArrowUpRight/></div> 
                    </div>
                    
                </div>
                <p className='text-center mt-8 text-gray-400'>Scroll Down</p>
                  
            </div>
        </div>
    
    </div>
  )
}

export default Landingpage