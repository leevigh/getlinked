import React from 'react'
import vector from '../../assets/Vector.png'
import man from '../../assets/man.png'
import list from '../../assets/list.png'


const Privacy = () => {
  return (
    <div className='bg-custom-bg-color text-white '>
        <div className='lg:flex justify-center pt-[6rem] '>


            <div className='lg:w-[50%] '>
                <div className='lg:text-left lg:ml-[2px] '>
                    <p className='font-extrabold text-[1.5rem] font-[montserrat] font-400 lg:px-[4.2rem] '> 
                        <span>Privacy Policy and </span><br/>
                        <span className='text-[#d434fe] '>Terms</span>
                    </p>
                    <p className='font-bold mb-[2rem] lg:px-[4.2rem] '>
                        Last updated on September 23, 2023
                    </p>


                    <p className='px-[4.2rem] '>
                        Below are our privacy & policy, which outline a lot of goodies. 
                        it’s our aim to always take of our participant
                    </p>

                </div>

                <div className='text-left border border-[#d434fe] rounded m-[5rem] mt-[3rem] p-[22px] text-center font-[montserrat] lg:p-[38px] '>

                    <p className=' mb-[2rem] mt-[2rem] lg:text-left'>

                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose, 
                        and safeguard your data when you participate in our tech 
                        hackathon event. By participating in our event, you consent 
                        to the practices described in this policy.
                    </p>

                    <p className='text-[#d434fe] text-left font-bold text-[1.2rem] '>
                        Licensing Policy
                    </p>

                    <p className='text-left font-bold my-4'>
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


            <div className='py-[4rem] lg:w-[40%] lg:pr-[2rem] '>


                <div class="relative h-[400px]  bottom-[2rem] pl-[5rem] lg:h-[85%] lg:w-full lg:right-[10%] lg:bottom-[11%]  ">
                    <img src={vector} alt="IMG" className="absolute w-92 bottom-4 h-full lg:w-full lg:insert-0  " />
                    <img src={man} alt="IMG" className="absolute   top-[31%] h-full z-10 lg:w-full lg:insert-0 lg:top-[30%] lg:pr-8  " />
                </div>

            </div>






        </div>
        

    </div>
  )
}

export default Privacy