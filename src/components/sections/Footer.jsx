import React from 'react'
import get from '../../assets/getlinkeds.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/Facebook.png'
import X from '../../assets/X.png'
import linkedin from '../../assets/linkedin.png'
import vectors from '../../assets/Vectors.png'
import group from '../../assets/Group.png'


const Footer = () => {
  return (
    <div className='bg-custom-bg-color text-left p-[5rem] lg:pr-0  lg:pb-[2rem] text-white '>

        <div className='lg:flex justify-around lg:pl-[6rem] '>

            
                    {/* left side in desktop */}
            <div className='bg-custom-bg-color text-left lg:pr-[2rem] lg:w-[45%] '>


                <img src={get} alt="IMG" className='h-6' />
                <p className='text-[12px] text-white font-bold mb-[4rem] mt-[2rem] mr-[2rem] '>
                    Getlinked Tech Hackathon is a technology
                    innovation program established by a group 
                    of organizations with the aim of showcasing 
                    young and talented individuals in the field 
                    of technology
                </p>
                <div class="flex items-center text-white font-bold mb-[4rem] ">
                    <span class="mr-2">Terms of Use</span>
                    <div class="border-[2px] border-purple-600 h-6"></div>
                    <span class="ml-2">Privacy Policy</span>   
                </div>

            </div>

            {/* mid section */}


            <div className=' mb-[4rem] lg:w-[40%] lg:ml-[8rem] ' > 

                <p className='text-[#D434FE] text-[1.5rem] font-bold p-2 lg:p-0 '> Useful Links</p>
                <p className='text-[1rem] font-bold p-2'> Overview</p>
                <p className='text-[1rem] font-bold p-2'> Timeline</p>
                <p className='text-[1rem] font-bold p-2'>FAQs</p>
                <p className='text-[1rem] font-bold p-2'> Register</p>
                <p className='flex items-center p-2 '> 
                    <span className='text-[1rem] text-[#d434fe] font-bold pr-4 '>Follow us</span> 
                    <img src={instagram} alt="IMG" className='h-6 pr-4' />
                    <img src={X} alt="IMG" className='h-6 pr-4' />
                    <img src={facebook} alt="IMG" className='h-6 pr-4' />
                    <img src={linkedin} alt="IMG" className='h-6 pr-4' />
                </p>
            </div>

            {/* right extreme in desktop screen */}

            <div className='mb-[4rem] pl-4 lg:ml-[3rem] '>
                <div className='text-[#d434fe] font-bold text-[1.5rem] pb-[2rem] '>Contact Us</div>
                
                <div className='flex  mb-[2rem] '>
                    <img src={group} alt="IMG"  className='pr-4 h-5'/>
                    <p className='text-center  text-[14px] font-400 font-montserrat'> +234 6707 653444</p>
                </div>

                <div className='flex mr-[10rem] lg:mr-[8rem] text-left'>
                    <img src={vectors} alt="IMG" className='pr-4 h-5' />
                    <p className='text-center  text-[14px] font-400 font-montserrat'>27,Alara Street Yaba 100012 Lagos State</p>
                </div>
            </div>
        </div>

        <div className='text-center  text-[1rem] font-400 font-montserrat mt-[2rem] '>
            All rights reserved. © getlinked Ltd.
        </div>

    </div>
  )
}

export default Footer