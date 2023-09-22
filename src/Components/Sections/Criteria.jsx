import React from 'react'
import judge from '../../assets/judging.png'

const Criteria = () => {
  return (
    <div className='bg-custom-bg-color border border-purple-400 p-4 py-8'>


        <div className=' flex flex-wrap lg:flex-nowrap justify-center items-center px-5 py-[40px] '>

            <div className='flex justify-center '>
                <img src={judge} alt="IMG" className=' h-200 w-200 items-center '/>
            </div>

            <div className=' text-center font-sans  px-5 lg:w-1/2 lg:text-left lg:ml-[3rem]  lg:mr-[2rem] lg:pr-[1.5rem]'>
                <p  className='text-xl font-bold fontfont-ClashDisplay lg:pb-[32px]'>
                    <span className='text-white '>Judging Criteria</span><br/>
                    <span className='text-[#D434FE]'>Key Attributes</span>
                </p>

                <p className='text-white text-[14px] p-4 lg:p-0 font-bold lg:pb-[16px]'>
                   <span className='text-[#FF26B9] font-[16px]'> Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                    solution. Consider whether it addresses a real-world problem in a novel 
                    way or introduces innovative features.
                </p>


                <p className='text-white text-[14px] p-4 lg:p-0 font-bold lg:pb-[16px]'>
                   <span className='text-[#FF26B9] font-[16px]'> Functionality:</span> Assess how well the solution works. Does it perform its 
                    intended functions effectively and without major issues? Judges would
                    consider the completeness and robustness of the solution.
                </p>


                <p className='text-white text-[14px] p-4 lg:p-0 font-bold lg:pb-[16px]'>
                    <span className='text-[#FF26B9] font-[16px]'>Impact and Relevance:</span> Determine the potential impact of the solution 
                    in the real world. Does it address a significant problem, and is it relevant 
                    to the target audience? Judges would assess the potential social, 
                    economic, or environmental benefits.
                </p>


                <p className='text-white text-[14px] p-4 lg:p-0 font-bold lg:pb-[16px]'>
                   <span className='text-[#FF26B9] font-[16px]'>Technical Complexity: </span> Evaluate the technical sophistication of the solution. 
                    Judges would consider the complexity of the code, the use of advanced 
                    technologies or algorithms, and the scalability of the solution.
                </p>


                <p className='text-white text-[14px] p-4 lg:p-0 font-bold lg:pb-[16px]'>
                    <span className='text-[#FF26B9] font-[16px]'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
                    to the rules and guidelines of the hackathon, including deadlines, use of 
                    specific technologies or APIs, and any other competition-specific requirements.
                </p>
                <button className='bg-gradient-to-r from-[#FF26B9] via-[#FF26B9]-purple-200 to-purple-500 border rounded border-transparent px-3 py-1.5 font-extrabold text-white'>Read More</button>

            </div>

            
        </div>

    </div>
  )
}

export default Criteria