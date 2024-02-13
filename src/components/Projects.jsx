import { motion, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap'
import React, { useState } from 'react'

const Projects = () => {

    const cards = [useAnimation(), useAnimation()]

    const handleHover = (index) =>{
        cards[index].start({y: "0"})
        
    }

    const handleHoverEnd = (index)=>{
        cards[index].start({y: "100%"})
    }
    
  return (
    
    <>
      <div>
    <h2 className='px-20 pt-32 pb-14 text-6xl border-b-[1px] border-black mb-10'>Featured projects</h2>

    <div className='px-20 cards w-full flex flex-wrap gap-6 overflow-hidden'>

        {/* First row */}
        <div className="flex justify-between w-full mb-6 gap-4">
            {/* card 1 */}
            <motion.div onHoverStart={()=> handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className='cardcontainer relative w-1/2 h-[70vh]'>
                
                <h1 className='absolute flex overflow-hidden text-8xl font-bold tracking-tighter leading-none 
                text-[#cdea68] left-full z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2'>
                    {"FYDE".split("").map((item, index)=>(
                        <motion.span
                        initial={{y: "100%"}}
                        animate={cards[0]}
                        transition={{ease: [0.16, 1, 0.3, 1], delay: index*.06}}
                        className='inline-block'>{item}
                        </motion.span>
                    ))}
                </h1>
                <div  className='card w-full h-full rounded-xl overflow-hidden'>
                    <motion.img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png' className='w-full h-full'></motion.img>
                </div>

            </motion.div>

            {/* card 2 */}
            <motion.div onHoverStart={()=> handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[70vh]'>
                <h1 className='absolute flex overflow-hidden text-8xl font-bold tracking-tighter leading-none text-[#cdea68] right-full z-[9] translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"VISE".split("").map((item, index)=>(
                        <motion.span
                        initial={{y: "100%"}}
                        animate={cards[1]}
                        transition={{ease: [0.16, 1, 0.3, 1], delay: index*.06}}
                        className='inline-block'>{item}
                        </motion.span>
                    ))}
                </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg' className='w-full h-full'></img>
                </div>
            </motion.div>
        </div>

        {/* Second row */}
        <div className="flex justify-between w-full gap-4">
            {/* card 3 */}
            <motion.div onHoverStart={()=> handleHover(2)} onHoverEnd={()=> handleHoverEnd(2)} className='cardcontainer relative w-1/2 h-[70vh]'>
                <h1 className='absolute flex overflow-hidden text-8xl font-bold tracking-tighter leading-none 
                text-[#cdea68] left-full z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2'>
                    {"TRAWA".split("").map((item, index)=>(
                        <motion.span
                        initial={{y: "100%"}}
                        animate={cards[2]}
                        transition={{ease: [0.16, 1, 0.3, 1], delay: index*.06}}
                        className='inline-block'>{item}
                        </motion.span>
                    ))}
                </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg' className='w-full h-full'></img>
                </div>
            </motion.div>

            {/* card 4 */}
            <motion.div onHoverStart={()=> handleHover(3)} onHoverEnd={()=> handleHover(3)} className='cardcontainer relative w-1/2 h-[70vh]'>
                <h1 className='absolute flex overflow-hidden text-8xl font-bold tracking-tighter leading-none text-[#cdea68] right-full z-[9] translate-x-1/2 top-1/2 -translate-y-1/2'>
                    {"PREMIUM".split("").map((item, index)=>(
                        <motion.span
                        initial={{y: "100%"}}
                        animate={cards[3]}
                        transition={{ease: [0.16, 1, 0.3, 1], delay: index*.06}}
                        className='inline-block'>{item}
                        </motion.span>
                    ))}
                </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png' className='w-full h-full'></img>
                </div>
            </motion.div>
        </div>
    </div>

    <div className='flex justify-center py-20'>
      <button className='flex justify-between items-center gap-8 py-4 px-8 bg-[#212121] rounded-full text-white  mt-4'>VIEW ALL CASE STUDIES
          <div className='w-3 h-3 bg-white rounded-full'></div>
      </button>
    </div>       
</div>

    </>
  )
}

export default Projects