import React from 'react'

const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='px-20 flex gap-6 pt-32 pb-40'>
        <div className='card-1 relative w-1/2 h-[45vh] bg-[#004D43] rounded-xl flex justify-center items-center'>
        <picture>
						<img className="entered loaded" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" height="150" width="150" data-src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" data-ll-status="loaded" />
        </picture>
        <button className='absolute left-8 bottom-6 py-[3px] px-4 border-[1px] border-[#cdea68] rounded-full text-[#cdea68]'>&copy;2019-2022</button> 
        </div>

        <div className='card-2 relative w-1/4 h-[45vh] bg-[#212121] rounded-xl flex justify-center items-center'>
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
            <button className='absolute left-8 bottom-6 py-[3px] px-4 border-[1px] border-white rounded-full text-white'>RATING 5.0 ON CLUTCH</button>           
        </div>

        <div className='card-3 relative w-1/4 h-[45vh] bg-[#212121] rounded-xl flex justify-center items-center'>
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' height="100" width="100"></img> 
            <button className='absolute left-8 bottom-6 py-[3px] px-4 border-[1px] border-white rounded-full text-white'>BUSINESS BOOTCAMP ALUMNI</button>           
        </div>
    </div>
  )
}

export default Cards