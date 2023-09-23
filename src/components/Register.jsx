import React, { useEffect, useState } from 'react'
import Line from './Line'
import Ladywalking from './Ladywalking'
import Manwalking from './Manwalking'
import { api } from '../main'
import Navbar from './Navbar'

const Register = () => {

    const [ showModal, setShowModal ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ categories, setCategories ] = useState([])

    const [data, setData] = useState(
        {
            "email":"",
            "phone_number":"",
            "team_name": "",
            "group_size": 0,
            "project_topic":"",
            "category": 0,
            "privacy_poclicy_accepted": false
        }
    )

    const fetchCategories = async () => {
        try {
            setLoading(true)

            const response = await api.get('/hackathon/categories-list')

            if(response.status === 200) {
                setLoading(false)
                setCategories(response.data)
                console.log("Response",response)
            }
            
        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const response
        
        console.log("data", data)
    }

    const checkPrivacy = () => {
        setData(prevState => (
            {
                ...prevState, 
                "privacy_poclicy_accepted": !prevState['privacy_poclicy_accepted']
            }))
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    useEffect(() => {
        fetchCategories()
    }, [])

  return (
    <div className='relative'>
        <Navbar />
        <div className='px-8 py-8 max-w-[300px] mx-auto lg:flex lg:items-center lg:max-w-[1500px]'>
            <div className='block lg:hidden'>
                <h2 className='text-[#D434FE] text-[15px] font-bold'>Register</h2>
            </div>

            <div>
                <img src="/register-man.png" alt="Register" />
            </div>

            <div className='lg:bg-white lg:bg-opacity-[3%] lg:rounded-xl lg:p-10'>

                <div className='hidden lg:block lg:pb-6'>
                    <h2 className='text-[#D434FE] text-[15px] lg:text-[32px] font-bold'>Register</h2>
                </div>

                <div className='lg:flex lg:flex-col'>
                    <div className='relative text-[12px] lg:text-lg text-white'>
                        <span>Be part of this movement</span>
                        <div className='absolute bottom-1 -right-1 lg:right-[38%]'>
                            <div className='flex items-center pl-2'>
                                <Ladywalking />
                                <Manwalking />
                            </div>
                            <Line />
                        </div>
                    </div>
                    <div className='text-lg lg:text-2xl pb-6 font-medium text-white'>
                        CREATE YOUR ACCOUNT
                    </div>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col w-full'>

                    <div className='flex flex-col lg:flex-row lg:gap-8'>
                        <div className='flex flex-col pb-[18px]'>
                            <label className='text-[13px] text-white' htmlFor="">Team's Name</label>
                            <input value={data['team_name']} onChange={handleChange} name="team_name" className='p-2 text-white rounded-[4px] bg-[#140D27] border-[1px] border-white' placeholder='Enter the name of your group' />
                        </div>
                        <div className='flex flex-col pb-[18px]'>
                            <label className='text-[13px] text-white' htmlFor="">Phone</label>
                            <input value={data['phone_number']} onChange={handleChange} name='phone_number' className='p-2 text-white rounded-[4px] bg-[#140D27] border-[1px] border-white' placeholder='Enter the name of your group' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row lg:gap-8'>
                        <div className='flex flex-col pb-[18px]'>
                            <label className='text-[13px] text-white' htmlFor="">Email</label>
                            <input value={data['email']} onChange={handleChange} name='email' className='p-2 text-white rounded-[4px] bg-[#140D27] border-[1px] border-white' placeholder='Enter the name of your group' />
                        </div>
                        <div className='flex flex-col pb-[18px]'>
                            <label className='text-[13px] text-white' htmlFor="">Project Topic</label>
                            <input value={data['project_topic']} onChange={handleChange} name='project_topic' className='p-2 text-white rounded-[4px] bg-[#140D27] border-[1px] border-white' placeholder='Enter the name of your group' />
                        </div>
                    </div>

                    <div className='flex pb-[18px] lg:gap-8'>
                        <div className='flex flex-col w-[70%] lg:w-full pr-[18px] lg:pr-0'>
                            <label className='text-[13px] text-white' htmlFor="">Category</label>
                            <select value={data['category']} onChange={handleChange} className='p-2 rounded-[4px] bg-[#140D27] text-white border-[1px] border-white' name="category" id="">
                                <option className='text-white' value="">Select your category</option>
                                {categories?.map(category => (
                                    <option 
                                        key={category.id} 
                                        value={category.id}
                                        className='text-white'>
                                            {category.name}
                                    </option>
                                ))}
                            </select>
                        
                        </div>
                        <div className='flex flex-col w-[30%] lg:w-full'>
                            <label className='text-[13px] text-white' htmlFor="">Group Size</label>
                            <select value={data['group_size']} onChange={handleChange} className='p-2 rounded-[4px] bg-[#140D27] text-white border-[1px] border-white' name="group_size" id="">
                                <option>Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            
                        </div>
                    </div>

                    <div>
                        <div className='text-[8.5px] lg:text-[12px] text-[#FF26B9]'>Please review your registration details before submitting</div>
                        <div className='flex items-start pt-3'>
                            <div className='pr-2'>
                                <input onChange={checkPrivacy} type='checkbox' name='privacy_poclicy_accepted' checked={data['privacy_poclicy_accepted']} />
                            </div>
                            <label className='text-[10px] lg:text-[12px] text-white' htmlFor="">I agreed with the event terms and conditions and privacy policy</label>
                        </div>
                    </div>

                    <div className='flex justify-center lg:w-full'>
                        <div  className='py-[1rem] lg:w-full'>
                            <button 
                                type='submit' 
                                className='px-12 py-4 w-fit lg:w-full rounded-sm text-white submit-btn'>
                                    Register Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

        {/* modal */}
        {showModal ? (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative px-8 w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-[1px] border-[#D434FE] lg:p-8 rounded-[5px] shadow-lg relative flex flex-col w-full lg:min-w-[600px] bg-[#150E28ED] outline-none focus:outline-none">
                        {/*header*/}
                        
                        <div className='py-2'>
                            <img className='mx-auto' src='/congratulation.png' alt='congrats man' />
                        </div>
                        {/*body*/}
                        <div className="relative ">
                        <p className="my-4 text-white font-medium max-w-[178px] lg:max-w-[500px] lg:leading-10 mx-auto text-center text-base lg:text-[32px]">
                        Congratulations you have successfully Registered!
                        </p>
                        </div>

                        <div>
                            <p className='text-white text-[12px] lg:text-[14px] max-w-[220px] mx-auto text-center'>Yes, it was easy and you did it! check your mail box for next step</p>
                        </div>
                        {/*footer*/}

                        <div className='flex justify-center'>
                            <button onClick={() => setShowModal(false)} className='py-[1rem] w-full px-8'>
                                <div className='px-12 py-4 w-full rounded-sm text-white font-medium register-btn'>Back</div>
                            </button>
                        </div>

                        {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Save Changes
                        </button>
                        </div> */}
                    </div>
                    </div>
                </div>
                <div className="opacity-100 fixed inset-0 z-40 bg-[#150E28ED]"></div>
            </>
        ) : null}
    </div>
  )
}

export default Register