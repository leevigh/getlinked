import React from 'react'
import { useState } from 'react';
import casual from '../../assets/casual.png'



function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
            <div>
                 

                <div>
                    <div>

                    <div>
                    <div className='mx-[4rem]  '>

                        <div className="border-b-4 border-[#d434fe]  text-white  ">
                        <div className="flex items-center justify-between py-2 cursor-pointer" onClick={toggleAccordion}>
                        <h2 className="text-[12px] ">{title}</h2>
                        <div className="text-xl">
                            {isOpen ? (
                            <span className="transform rotate-45 text-[#d434f3] ">-</span>
                            ) : (
                            <span className="transform rotate-0 text-[#d434f3] font">+</span>
                            )}
                        </div>
                        </div>
                        {isOpen && (
                        <div className="py-2 px-4">
                            {content}
                        </div>
                        )}
                        </div>
                            
                        </div>
                    </div>

                    </div>


                </div>
                    
            </div>
          );
  }
  
const Faqs = () => {
    
  return (
    <div className='lg:flex justify-center items-center lg:mx-[4rem]  mt-[4rem] '>

            <div className=''>
                <div className='text-center lg:text-left text-white'>
                    <p className='text-[20px] font-bold lg:ml-[4rem] '>
                        <span>Frequently Asked</span><br/>
                        <span className='text-[#d434f3] ' >Questions</span>
                    </p>
                    <p className='mx-[3rem] pt-2 lg:ml-[4rem] '>
                        We got answers to the questions that you might
                        want to ask about getlinked Hackathon 1.0
                    </p>
                </div>

                <div className='py-[2rem] '>

                    <AccordionItem
                    title="Can I work on a project I started before the hackathon?"
                    content={<p>Content  goes here.</p>}
                    />
                    <AccordionItem
                    title="What happens if I need help during the hackathon?"
                    content={<p>Content  goes here.</p>}
                    />


                    <AccordionItem
                    title="What happens if I don't have an idea for a project?"
                    content={<p>Content for Item 2 goes here.</p>}
                    />

                    <AccordionItem
                    title="Can I join a team or do I have to come with one?"
                    content={<p>Content goes here.</p>}
                    />


                    <AccordionItem
                    title="What happens after the hackathon ends"
                    content={<p>Content goes here.</p>}
                    />

                    <AccordionItem
                    title="Can I work on a project I started before the hackathon?"
                    content={<p>Content goes here.</p>}
                    />

                    </div>

            </div>

            <div>
                <img src={casual} alt="IMG" />
            </div>
    </div>
  )
}

export default Faqs