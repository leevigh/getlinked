import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Menu from './Menu'
import Close from './Close'
import '../App.css'

const Navbar = () => {

    const [ isActive, setIsActive ] = useState(false)

    //toggle menu
    const handleMenu = (e) => {
        e.preventDefault()

        setIsActive(!isActive)
    }

  return (
    <div className=''>
        <nav className='border-b-[0.1px] border-b-white lg:max-w-[1500px] mx-auto flex justify-between items-center lg:items-center p-8'>

            <div className='text-[18px] lg:text-[36px] font-bold'>
                <Link to={'/'}>
                    <span className='text-white'>get</span>
                    <span className='text-[#D434FE]'>linked</span>
                </Link>
            </div>

            <div className='hidden lg:flex lg:items-center'>
                <div className='flex text-white font-normal'>
                    <Link to='/'><div className='pr-14'>Timeline</div></Link>
                    <Link to='/'><div className='pr-14'>Overview</div></Link>
                    <Link to='/'><div className='pr-14'>FAQs</div></Link>
                    <Link to='/'><div className='pr-14'>Contact</div></Link>
                </div>

                <div className='py-[1rem] pl-16 lg:cursor-pointer'>
                    <div className='px-12 py-4 w-fit rounded-sm text-white font-semibold register-btn'>Register</div>
                </div>
            </div>

            <div onClick={handleMenu} className='flex lg:hidden'>
                <Menu />
            </div>

            {/* <!-- mobile menu --> */}
            {isActive && (
                <div 
                    className="
                            bg-[#150E28] lg:hidden py-6 
                            mobile-menu right-0 top-0 w-full px-[32px]">

                    <div className='flex justify-end py-[1rem]'>
                        <div onClick={handleMenu}>
                            <Close />
                        </div>
                    </div>
                    <ul className="text-white">
                        <Link to=""><li className='py-[1rem]'>Timeline</li></Link>
                        <Link to=""><li className='py-[1rem]'>Overview</li></Link>
                        <Link to=""><li className='py-[1rem]'>FAQs</li></Link>
                        <Link to=""><li className='py-[1rem]'>Contact</li></Link>

                        <div className='py-[1rem]'>
                            <div className='px-12 py-4 w-fit rounded-sm register-btn'>Register</div>
                        </div>
                        
                    </ul>
                </div>
            )}
            {/* mobile menu end */}
        </nav>
    </div>
  )
}

export default Navbar