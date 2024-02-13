import { motion } from 'framer-motion'
import React from 'react'

const Marqee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-10 bg-[#004D43] rounded-t-2xl'>
        <div  
        className='text whitespace-nowrap text-white font-bold flex  gap-10 
         border-t-[1px] border-b-[1px] border-white overflow-hidden'>
        <motion.h2 
        initial={{x: "0"}} 
        animate={{x: "-100%"}} 
        transition={{ease: "linear", duaration: 5}} 
        className='text-[18vw] leading-none tracking-tighter'>WE ARE OCHI
        </motion.h2>


        <motion.h2 
        initial={{x: "0"}} 
        animate={{x: "-100%"}} 
        transition={{ease: "linear", duaration: 5}} 
        className='text-[18vw] leading-none tracking-tighter'>WE ARE OCHI
        </motion.h2>
        </div>
    </div>
  )
}

export default Marqee