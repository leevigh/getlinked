import React from 'react'
import cup from '../../assets/cup.png'
import rewards from '../../assets/Rewards.png'

const Prizes = () => {
  return (
    <div className='bg-custom-bg-color border-opacity-10 p-8 lg:py-12 '>

        <div className='lg:max-w-[1500px] mx-auto'>

            <div className='block text-center lg:text-left lg:hidden lg:ml-[40rem] lg:mr-[14rem] pt-4'>
                <p  className='text-[20px] font-bold max-w-[109px] mx-auto lg:pb-[16px]'>
                        <span className='text-white '>Prizes and </span>
                        <span className='text-[#D434FE]'>Rewards</span>
                </p>
                <p className='text-white text-[12px] font-[montserrat] lg:px-0'>
                    Highlight of the prizes or rewards for winners and for participants.
                </p>
            </div>
            {/* The award images */}
            <div className='lg:flex lg:items-end lg:flex-nowrap justify-around items-center lg:px-[7rem]'>
                <div>
                    <img src={cup} alt="IMG"className='pb-6' />
                </div>

                <div>
                    <div className='hidden lg:block'>
                        <div className='lg:text-left lg:flex lg:flex-col lg:items-center w-full pt-4'>
                            <div>
                                <p  className='text-[20px] font-bold max-w-[109px] lg:max-w-[174px] lg:pb-[16px]'>
                                        <span className='text-white '>Prizes and </span>
                                        <span className='text-[#D434FE]'>Rewards</span>
                                </p>
                                <p className='text-white lg:max-w-[400px] font-[montserrat] px-16 lg:px-0'>
                                    Highlight of the prizes or rewards for winners and for participants.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={rewards} alt="IMG" className='pt-8 pb-4' />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Prizes