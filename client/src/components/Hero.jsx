import React, { useContext , useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from "../context/AppContext";

const Hero = () => {

  const {setSerachFilter , setIsSearched} = useContext(AppContext)

  const titleRef = useRef(null)
  const locationRef = useRef(null)

  const onSearch = () => {
    setSerachFilter({
      title : titleRef.current.value,
      location: locationRef.current.value
    })
    setIsSearched(true)
    
  }

  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl '>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
        <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
            <div className='flex items-center gap-2 py-2'>
                <img className='h-4 sm:h-5' src={assets.search_icon} alt="" />
                <input ref={titleRef} type="text" placeholder='Search for jobs' className='max-sm:text-sm p2 rounded outline-none w-full bg-white' />
            </div>
            <div className='flex items-center gap-2 py-2'>
                <img className='h-4 sm:h-5' src={assets.location_icon} alt="" />
                <input ref={locationRef} type="text" placeholder='Location' className='max-sm:text-sm p2 rounded outline-none w-full bg-white' />
            </div>
            <button onClick={onSearch} className='bg-blue-600 px-6 py-2 rounded text-white m-1'>Search</button>
        </div>
      </div>

      <div className='border border-gray-300 shadow-md rounded-md p-6 mx-2 mt-5 flex'>
        <div className='flex justify-center gap-6 lg:gap-16 text-wrap'>
            <p className='font-bold max-sm:text-sm w-35'>Trusted by:</p>
            <div className='flex gap-4 items-center flex-wrap'>

            <img className='h-6 max-sm:h-4 ' src={assets.microsoft_logo} alt="" />
            <img className='h-6 max-sm:h-4' src={assets.walmart_logo} alt="" />
            <img className='h-6 max-sm:h-4' src={assets.accenture_logo} alt="" />
            <img className='h-6 max-sm:h-4' src={assets.samsung_logo} alt="" />
            <img className='h-6 max-sm:h-4' src={assets.amazon_logo} alt="" />
            <img className='h-6 max-sm:h-4' src={assets.adobe_logo} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
