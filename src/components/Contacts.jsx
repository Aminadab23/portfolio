import React from 'react'

const Contacts = () => {
  return (
    <div name="contact"  className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white " >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='mt-3 text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className="py-6 ">Submit the form beow to get in touch with me!</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/801c78e1-9f52-4771-830f-05a0d40eff22' method='post' className='flex flex-col w-full md:w-1/2 '>
                    <input type="text" name='name' 
                    
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md  focus:outline-none'
                    />
 <input type="email" name='emial' 
                    
                    placeholder='Enter your email' 
                    className='p-2 my-4 bg-transparent border-2 rounded-md  focus:outline-none'
                    />
                    <textarea name='message' placeholder='write your message here'
                     rows="10"
                     className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
               
               <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md px-6 py-3 my-8 mx-auto flex item-center  text-2xl hover:scale-105'> Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contacts