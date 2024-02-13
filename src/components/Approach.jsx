import React from 'react'
import { ArrowUpRight } from 'react-feather'

const Approach = () => {
  return (
    <>
    <div className='w-full py-10 bg-[#cdea68] font-["Neue Montreal"]'>
        <div className='w-[80vw] px-20 text-5xl mt-10'>
            <h2>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people. </h2>
        
        </div>
        <hr className='border-black mt-10'/>

        <div className='flex justify-between mt-10 px-20'>
            <p>What you can expect:</p>

            <span className='w-[20vw] flex flex-col gap-y-8 ml-[20vw]'>
            <p >We create tailored presentations to help you persuade your colleagues, 
                clients, or investors. Whether it's live or digital, delivered for one or a hundred people. </p>  
            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </span>

            <span className='links flex flex-col underline cursor-pointer mt-28 mr-[10vw]'>
            {["instagram", "Behance", "Facebook", "Linkedin"].map((item, index)=>(
                <a  key={index} className=''>{item}</a>
            ))}
            </span>        
        </div>

        <hr className='border-black mt-8'/>
                
        <div className='approach flex mt-10 justify-between'>
                <div className='px-20'>
                    <h2 className=' font-semibold text-[3vw] '>Our approach:</h2>
                    <button className='flex justify-between items-center gap-8 py-4 px-8 bg-black rounded-full text-white  mt-4'>READ MORE
                    <div className='w-3 h-3 bg-white rounded-full'></div>
                    </button>
                </div>
                <div className='image'>
                    <img className='w-[45vw] h-[30vw] rounded-lg mr-20' src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg'></img>
                </div>
        </div>
    </div>
    </>
  )
}

export default Approach