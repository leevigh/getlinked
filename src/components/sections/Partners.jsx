import React from 'react'
import partner from '../../assets/Partner.png'

const Partners = () => {
  return (
    <div className='bg-custom-bg-color pb-[6rem] border border-purple-400 border-l-0 border-r-0 border-t-0  border-b-1'>

        <div className='max-w-[1500px] mx-auto'>
          <div className='flex flex-col lg:py-8 lg:items-center text-center text-white mb-[32px]'>
              <p className='text-[20px] font-bold'><span>Partners and Sponsor</span></p>
              <p className='font-[montserrat] text-[12px] lg:text-[14px] lg:max-w-[452px] pb-[2rem]'>
                  Getlinked Hackathon 1.0 is honored to have the
                  following major companies as its partners and 
                  sponsors
              </p>
          </div>
          <div className='flex justify-center px-4 lg:pb-[4rem]'>
            <div>
              <img src={partner} alt="IMG" className='border-[1px] border-purple-600 rounded'/>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Partners