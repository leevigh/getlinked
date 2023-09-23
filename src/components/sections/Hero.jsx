import React from 'react'
import Blast from '../Blast'
import Chain from '../Chain'
import Bulb from '../Bulb'
import Underline from '../Underline'
// import Blast from '../../assets/blast.svg'
// import {hackathonguy} from '../../assets/hackathon-guy.png'

const Hero = () => {
  return (
    <div>
        <header className='flex flex-col text-center border-b-[0.1px] border-opacity-20 border-b-white lg:items-end lg:max-w-[1500px] mx-auto lg:px-8'>
            <div className='pt-8 pb-14'>
                <p className='text-white font-medium text-sm lg:text-[35px]'>Igniting a Revolution in <span className='relative'><span className='absolute -bottom-2 -left-3'><Underline /></span>HR Innovation</span></p>
            </div>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='mx-auto '>
                    <div className='
                        bg-[url("./purple-lens-flare.png")] 
                        bg-no-repeat bg-[2rem]-[2rem] bg-contain bg-opacity-20'>
                        
                        <h1 className=' text-[28px] lg:text-[80px] font-semibold text-center lg:text-left text-white'>
                            {/* <span className='absolute right-[12%] -top-1 xl:right-1/3'>
                                <Bulb />
                            </span> */}
                            getlinked Te<span className='relative'>
                                <span className='absolute -top-2 right-0 lg:-top-5 lg:-right-4 lg:-z-1'>
                                <Bulb />
                                </span>
                                c</span>h Hackathon 
                                <span className='relative text-[#D434FE]'>
                                    1.0 <span className='flex justify-end absolute top-1 left-10 lg:left-[7.1rem]'>
                                    <Chain />
                                    <span><Blast /></span>
                                </span>
                            </span>
                            {/* <span className='flex justify-end absolute top-12 right-2'>
                                <Chain />
                                <span><Blast /></span>
                            </span> */}
                            {/* <span className='absolute top-12'><Chain /></span>
                            <span className='absolute top-12 right-3'><Blast /></span> */}
                            {/* <img className='absolute right-28 bottom-8 border-2 w-16' src='/chain.png' /> */}
                        </h1>
                        <p className='text-center lg:text-left lg:text-[20px] text-white'>
                        Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                        </p>
                    </div>

                    <div className='py-6 flex justify-center lg:justify-start lg:cursor-pointer'>
                        <div className='px-12 py-4 w-fit rounded-sm text-white font-semibold register-btn'>
                            Register
                        </div>
                    </div>

                    <div>
                        <div className='text-white text-center lg:text-left text-5xl'>
                            00<span className='text-sm'>H</span> 00<span className='text-sm'>M</span> 00<span className='text-sm'>S</span>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex justify-start'>
                        <img className='lg:object-fill lg:w-[850px] lg:h-[500px]' src={'/hackathon-guy.png'} alt='Hackathon guy' />
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Hero