import React from 'react'
import read from "../../assets/read.png"

export const Rules = () => {
  return (
    <div className='bg-custom-bg-color'>


        <div className=' flex flex-wrap-reverse px-8 border-2 lg:justify-evenly lg:flex-nowrap justify-center items-center  max-w-[1500px] mx-auto'>

            <div className=' text-center lg:w-1/2 lg:text-left '>
            {/* lg:ml-[3rem]  lg:mr-[2rem] lg:pr-[1.5rem] */}
                <p  className='text-xl font-bold lg:max-w-[170px]'>
                    <span className='text-white '>Rules and</span> 
                    <span className='text-purple-700'> Guidelines</span>
                </p>

                <p className='text-white text-[14px] lg:max-w-[535px] lg:p-0'>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>

            </div>

            <div className='flex justify-center '>
                <img src={read} alt="IMG" className=' h-200 w-200 items-center '/>
            </div>
        </div>
    </div>
  )
}
