import React from 'react'
import vector from '../../assets/Vector.png'
import man from '../../assets/man.png'
import list from '../../assets/list.png'


const Privacy = () => {
  return (
    <div className='bg-custom-bg-color text-white '>
        <div className='max-w-[1500px] mx-auto lg:flex justify-center pt-[6rem] '>


            <div className='flex flex-col justify-center w-full lg:w-[50%] '>
                <div className='flex flex-col px-8 lg:text-left lg:ml-[2px]'>
                    <p className='self-center lg:self-start font-bold max-w-[188px] lg:max-w-[300px] text-[20px] lg:text-[32px] text-center lg:text-left font-[montserrat] font-400 '> 
                        <span>Privacy Policy and </span>
                        <span className='text-[#d434fe] '>Terms</span>
                    </p>
                    <p className='self-center lg:self-start text-[12px] lg:text-[14px] mb-[2rem] '>
                        Last updated on September 23, 2023
                    </p>


                    <p className='text-[12px] lg:text-[14px] font-[montserrat] text-center lg:text-left lg:max-w-[438px]'>
                        Below are our privacy & policy, which outline a lot of goodies. 
                        it s our aim to always take of our participant
                    </p>

                </div>

                <div className='px-8'>
                    <div className='border border-[#d434fe] rounded mt-[3rem] p-[22px] text-center font-[montserrat] lg:p-[38px] '>
                        <div>

                            <p className=' mb-[2rem] mt-[2rem] lg:text-left'>

                                At getlinked tech Hackathon 1.0, we value your privacy
                                and are committed to protecting your personal information.
                                This Privacy Policy outlines how we collect, use, disclose, 
                                and safeguard your data when you participate in our tech 
                                hackathon event. By participating in our event, you consent 
                                to the practices described in this policy.
                            </p>

                            <p className='text-[#d434fe] text-left font-bold text-[13px] '>
                                Licensing Policy
                            </p>

                            <p className='text-left font-bold text-[12px] my-4'>
                                Here are terms of our Standard License:
                            </p>

                            <p className='flex text-left mb-4'> 
                                <img src={list} alt="IMG" className='h-5 pr-4' />
                                <span>
                                    The Standard License grants you a non-exclusive right to
                                    navigate and register for our event
                                </span>
                            
                            </p>

                            <p className='flex text-left'>
                                <img src={list} alt="IMG" className='h-5 pr-4' />
                                <span>
                                    You are licensed to use the item 
                                    available at any free source
                                    sites, for your project developement
                                </span>
                            </p>

                            <button className='bg-gradient-to-r from-[#FF26B9] via-[#FF26B9]-purple-200 to-purple-500 border rounded border-transparent px-3 py-1.5 mb-[2rem] mt-[2rem] font-extrabold text-white font-[montserrat] '>Read More</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='py-[2rem] lg:w-[40%] lg:pr-[2rem] px-8'>

                <div className='bg-[url("/lock.png")] bg-no-repeat bg-contain bg-top pt-[11rem] pr-[2rem] '>
                    <img src="/policy-man.png" alt="Privacy policy" />
                </div>
                {/* <div class="relative  bottom-[2rem] pl-[5rem] lg:h-[85%] lg:w-full lg:right-[10%] lg:bottom-[11%]  "> */}
                {/* h-[400px] */}
                    {/* <img src={vector} alt="IMG" className="absolute w-92 bottom-4 h-full lg:w-full lg:insert-0  " /> */}
                    {/* <img src={'/policy-man.png'} alt="IMG" className="absolute   top-[31%] h-full z-10 lg:w-full lg:insert-0 lg:top-[30%] lg:pr-8 " /> */}
                {/* </div> */}

            </div>






        </div>
        

    </div>
  )
}

export default Privacy