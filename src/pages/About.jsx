import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'react-feather'
import Cards from '../components/Cards'
import Footer from '../components/Footer'


const About = () => {

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
    <>
    <Navbar/>
    <div className='masker mt-48 px-20'>
            {["We are", "OCHI DESIGN"].map((item, index)=>(
            <div className='w-fit  flex items-end overflow-hidden '>
                {index === 1 && (<motion.div 
                initial={{width: "0"}} 
                animate={{width: "8vw"}} 
                transition={{ease: [0.76, 0, 0.24, 1], duaration: 5}}
                 
                >
                    <img className='w-[8vw] h-[4.8vw] rounded-md relative' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'></img>
                </motion.div>)}
                <h2 className='text-8xl font-bold text-black  tracking-tighter uppercase leading-[5.5vw] font-["Founders Grotesk"]'>
                    {item}
                </h2>    
            </div>
            
            ))}
    </div>
    <hr className='border-[1px] border-zinc-500 mt-44'/>

    <div className='w-full h-auto'>

    
    <div className='flex justify-between py-8 px-20'>
            <p>About us:</p>

            <span className='w-[20vw] flex flex-col gap-y-8 ml-[20vw]'>
            <p >In Ukrainian, ochi - means eyes. It's not just a beautiful word, but our philosophy. Almost everything that needs to be communicated is better shown than explained.</p>  
            <p>We believe a great presentation evokes interest and drives business results far better than any saying can. Hence, we founded ochi to help you persuade colleagues and clients by creating eye-opening presentations.</p>
            </span>

            
            <div className='start flex items-center gap-2'>
                    <button className='py-2 px-4 border-[1px] border-black rounded-full hover:bg-black hover:text-white'>OUR WORKS</button> 
                    <div className='py-[6px] px-[6px] border-[1px] border-black rounded-full hover:bg-black hover:text-white'><ArrowUpRight/></div> 
            </div>       
    </div>

    <div className='eyes flex justify-center items-center mt-20 gap-6'>
       <div className='w-72 h-72 rounded-full bg-white border-[1px] border-black flex justify-center items-center'>
          <div className='w-40 h-40 bg-black rounded-full flex justify-center items-center'>
                            
            <div style={{transform: `rotate(${rotate}deg)`}} className='line w-full h-10'>
              <div className='h-8  w-8 rounded-full bg-white'></div>
                </div>
          </div>
                    </div>
                    <div className='w-72 h-72 rounded-full bg-white border-[1px] border-black flex justify-center items-center'>
                        <div className='w-40 h-40 bg-black rounded-full flex justify-center items-center'>
                        <div style={{transform: `rotate(${rotate}deg)`}} className='line w-full h-10'>
                <div className='h-8  w-8 rounded-full bg-white'></div>
              </div>
          </div>
      </div>
    </div>
    <h2 className='px-20 mt-20 text-5xl'>We save businesses from ugly and<br/> ineffective presentations.</h2>
    <hr className='border-[1px] border-zinc-500 mt-16 '/>      
    </div>

    <div className='flex py-8 px-20'>
            <p>We are ochi design:</p>

            <span className='w-[20vw] flex flex-col gap-y-8 ml-[20vw]'>
            <p >The team of designers, storytellers, and passionate collaborators, who work together to create industry-shifting presentations that win people's hearts and minds.</p>  
            <p>And we strive to become one of the most recognizable & influential presentation agencies of the time who does that.</p>
            </span> 
    </div>

    <div  className='px-20 py-8'>
        <img className='w-full h-full rounded-2xl'  src='https://ochi.design/wp-content/uploads/2022/05/017091720030.jpg'>
        </img>
        <h2 className='text-6xl mt-32'>Two principles we stand behind<br/> in every part of our work:</h2>
        <hr className='border-[1px] border-zinc-500 mt-20'/>
        <div className='cards flex gap-6 py-8'>
              <div className='card-1 w-1/2'>
                <img className='rounded-xl' src='https://ochi.design/wp-content/uploads/2022/05/Asset-52@2x-20-1.jpg'></img>
                <p className='w-1/2 pt-4'>Whether the presentation needs to convince or educate it always has to change audience perception. We seek insights to make decks unexpectedly enlightening for our audience.</p>
              </div>
              <div className='card-2  w-1/2'>
                <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Asset-51@2x-20-1.jpg" alt="" />
                <p className='w-1/2 pt-4'>The presentation helps to see what's hidden, unseen, or simply never known before. We use design to drive their attention, focus them to clearly see, and help them feel the message.</p>
              </div>
        </div>
        
        
     </div>
     <hr className='border-[1px] border-zinc-500 '/>
      <Cards/>
      <Footer/>
     
    
    </>
  )
}

export default About
