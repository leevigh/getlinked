import React from 'react'
import read from "../../assets/read.png"

export const Rules = () => {
  return (
    <div className='bg-custom-bg-color pb-[4rem] '>


        <div className=' flex flex-wrap-reverse px-8 lg:justify-evenly lg:flex-nowrap justify-center items-center  lg:max-w-[1500px] mx-auto'>

<<<<<<< Updated upstream
            <div className=' text-center lg:text-left '>
            {/* lg:ml-[3rem]  lg:mr-[2rem] lg:pr-[1.5rem] */}
                <p  className='text-xl lg:text-[32px] font-bold max-w-[107px] mx-auto lg:mx-0 lg:max-w-[170px]'>
=======
            <div className=' text-center lg:w-1/2 lg:text-left '>
            {/* lg:ml-[3rem]  lg:mr-[2rem] lg:pr-[1.5rem] */}
                <p  className='text-xl font-bold lg:max-w-[170px]'>
>>>>>>> Stashed changes
                    <span className='text-white '>Rules and</span> 
                    <span className='text-purple-700'> Guidelines</span>
                </p>

<<<<<<< Updated upstream
                <p className='text-white text-[14px] font-[montserrat] lg:max-w-[535px] lg:p-0'>
=======
                <p className='text-white text-[14px] lg:max-w-[535px] lg:p-0'>
>>>>>>> Stashed changes
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>

            </div>

            <div className='flex justify-center'>
                <img src={read} alt="IMG" className=' items-center '/>
            </div>
        </div>
    </div>
  )
}
