import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'

const Contact = () => {
    return (
      <div>
        <Navbar />
  
        <div className='px-20 masker mt-48'>
              {["", "Let's start", "a project together"].map((item, index)=>(
              <div className='w-fit  flex items-end overflow-hidden '>
                  {index === 1 && (<motion.div 
                  initial={{width: "0"}} 
                  animate={{width: "8vw"}} 
                  transition={{ease: [0.76, 0, 0.24, 1], duaration: 5}}
                   
                  >
                      <img className='w-[8vw] h-[4.8vw] rounded-md relative' src='https://ochi.design/wp-content/uploads/2022/05/Asset-41-20-300x203.jpg'></img>
                  </motion.div>)}
                  <h2 className='text-8xl font-semibold text-black  tracking-tighter uppercase leading-[5.5vw] font-["Founders Grotesk"]'>
                      {item}
                  </h2>    
              </div>
              
              ))}
        </div>
  
        <h2 className='px-20 pt-32 pb-16'>Fill the form below:</h2>
        {/* Form */}
        <div className='px-20 pt-20 pb-20 rounded-xl form bg-[#cdea68] overflow-hidden'>
          <div className='row-1 flex mb-4 text-4xl'>
          <p>Hi! My name is </p>
          <span>
            <input className='border-b-[1px] border-zinc-600 text-center bg-[#cdea68]' type="text" placeholder='Enter your name*'/>
          </span>
          <p>and I work with</p>
          <span>
            <input className='border-b-[1px] border-zinc-600 text-center bg-[#cdea68]' type="text" placeholder='Enter your name*'/>
          </span>
          </div>
  
          <div className='row-2 flex gap-3 text-4xl'>
            <p>I'm looking for a partner to help me with</p>
            <span>
            <input className='border-b-[1px] border-zinc-600 text-center bg-[#cdea68]' type="text" placeholder='Your goal type here*'/>
          </span>
          </div>
  
          <div className='row-3 flex gap-3 text-4xl'>
            <p>With an idea of having that completed</p>
            <span>
            <input className='border-b-[1px] border-zinc-600 text-center bg-[#cdea68]' type="text" placeholder='Date*'/>
          </span>
          </div>
  
          <div className='row-3 flex gap-3 text-4xl'>
            <p>I am hoping to stay around a budget range of</p>
            <span>
            <input className='border-b-[1px] border-zinc-600 text-center bg-[#cdea68]' type="text" placeholder='Budget*'/>
          </span>
          </div>
  
          <div className='row-4 flex gap-3 text-4xl'>
            <p>You can reach me at 
              <span>
                <input className='border-b-[1px] border-zinc-600 text-center bg-[#cdea68]' type="text" placeholder='name@example.com'/>
              </span> to start the conversation.</p>
            
          </div>
  
          <div className='row-5 flex gap-3 text-4xl'>
            <p>Optionally, i'm sharing more:</p>
            <span>
            <input className='border-b-[1px] border-zinc-600 text-center bg-[#cdea68]' type="text" placeholder='Product Details type here...*'/>
          </span>
          </div>
  
          <div className='flex place-content-end gap-3 items-center pt-14'>
            <input type="checkbox" />
            <p>I agree with Privacy Policy</p>
            <button className='py-3 px-7 border-[1px] border-black rounded-full hover:bg-black hover:text-white text-sm'>SEND QUIERY</button> 
          </div>
        </div>
  
        
  
        <Footer />
      </div>
    )
  }
  
  export default Contact