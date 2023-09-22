import React from 'react'
import Timeline from '../Timeline'

const TimelineSection = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-2xl mx-auto'>
      <div className='text-center text-white max-w-[346px] px-8 pt-[80px] lg:pt-8 pb-[8rem] lg:pb-[15rem]'>
        <h2 className='text-[20px] lg:text-[32px] font-semibold'>Timeline</h2>
        <p className='text-[14px] lg:text-base'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      </div>
      <div className='flex justify-start lg:justify-center max-w-2xl mx-auto w-full'>
        <Timeline />
      </div>
    </div>
  )
}

export default TimelineSection