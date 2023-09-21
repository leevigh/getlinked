import React from 'react'
import read from "../../assets/read.png"

export const Rules = () => {
  return (
    <div className='bg-custom-bg-color'>


        <div className=' flex flex-wrap-reverse lg:flex-nowrap justify-center items-center px-5 '>

            <div className=' text-center  px-14 lg:w-1/2 lg:text-left lg:ml-[3rem]  lg:mr-[2rem] lg:pr-[1.5rem]'>
                <p  className='text-xl font-bold font-[32px] font-ClashDisplay'>
                    <span className='text-white '>Rules and</span><br/>
                    <span className='text-[#D434FE]'>Guidelines</span>
                </p>

                <p className='text-white text-[14px] p-4 lg:p-0'>
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
