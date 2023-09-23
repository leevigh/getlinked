import React from 'react'

const BigIdea = () => {
  return (
    <div>
        <section className='flex flex-col items-center lg:flex-row lg:justify-evenly text-center border-b-[0.1px] border-opacity-20 border-b-white lg:items-center lg:max-w-[1500px] mx-auto py-8 px-8'>

            <div className='py-2 lg:px-8 lg:min-w-[500px]'>
                <img src='/the-big-idea.png' alt='the big idea' />
            </div>
            <div className='lg:px-24'>
                <div className=' lg:max-w-[398px]'>
                    <h2 className='text-white w-full text-center lg:text-left lg:text-[32px] font-semibold'>Introduction to getlinked <span className='text-[#D434FE]'>tech Hackathon 1.0</span></h2>
                </div>
                
                <div className='lg:max-w-[535px]'>
                    <p className='text-white text-center font-[montserrat] lg:text-left'>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as 
    day: to shape the future. Whether you're 
    a coding genius, a design maverick, or a 
    concept wizard, you'll have the chance to transform your ideas into reality. Solving 
    real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world, that's what we're all about!
                    </p>
                </div>
            </div>

        </section>
    </div>
  )
}

export default BigIdea