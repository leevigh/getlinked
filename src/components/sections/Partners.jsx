import React from 'react'
import partner from '../../assets/Partner.png'

const Partners = () => {
  return (
    <div className='bg-custom-bg-color p-[4rem] pb-[6rem] border border-purple-400 border-l-0 border-r-0 border-t-0  border-b-1'>

        <div className='text-center text-white mb-[32px]'>
            <p className='text-[20px] font-extrabold font-ClashDisplay'><span>Partners and Sponsor</span></p>
            <p className='font-[montserrat] text-[16px] font-bold lg:px-[20rem] pb-[2rem]'>
                Getlinked Hackathon 1.0 is honored to have the
                following major companies as its partners and 
                sponsors
            </p>
        </div>
        <div className='lg:px-[3rem] lg:pb-[4rem]'>
            <img src={partner} alt="IMG" className='border-[1px] border-purple-600 rounded'/>
        </div>

    </div>
  )
}

export default Partners