import React from 'react'
import cup from '../../assets/cup.png'
import rewards from '../../assets/Rewards.png'

const Prizes = () => {
  return (
    <div className='bg-custom-bg-color border-opacity-10 p-4 py-12 '>

        <div className='lg:text-left lg:ml-[40rem] lg:mr-[14rem] pt-4'>
            <p  className='text-[20px] font-extrabold font-ClashDisplay lg:pb-[16px]'>
                    <span className='text-white '>Prizes and</span><br/>
                    <span className='text-[#D434FE]'>Rewards</span>
            </p>
            <p className='text-white font-bold font-[montserrat] px-16 lg:px-0'>
                Highlight of the prizes or rewards for winners and for participants.
            </p>
        </div>
        {/* The award images */}
        <div className='p-12 lg:flex lg:flex-nowrap justify-around items-center lg:px-[7rem]'>
            <div>
                <img src={cup} alt="IMG"className='pb-6' />
            </div>

            <div>
                <img src={rewards} alt="IMG" className='pt-8 pb-4' />
            </div>
        </div>

    </div>
  )
}

export default Prizes