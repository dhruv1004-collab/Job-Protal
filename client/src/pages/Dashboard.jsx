import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()


  return (
    <div className='min-h-screen'>
      {/* Navbar for Recuriter Panel */}

      <div className='shadow py-4'>
        <div className='px-6 flex justify-between items-center'>
          <img onClick={e => navigate('/')} className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="" />
          <div className='flex items-center gap-3'>
            <p className='max-sm:hidden'>Welcome, Dhruv kumar</p>
            <div className='realtive group'>
              <img className='w-8 border border-white rounded-full' src={assets.company_icon} alt="" />
              <div className='absolute hidden group-hover:block top-0 right-2 z-10 text-black rounded pt-18'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li className='py-1 px-2 cursor-pointer pr-10 '>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex items-start'>

        {/* left sidebar with option to add job , manage job , viewapplications */}

        <div className='inline-block min-h-screen  shadow'>
          <ul className='flex flex-col items-start pt-5'>
            <NavLink className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500 '}`} to={'/dashboard/Add-Job'}>
              <img className='min-w-4' src={assets.add_icon} alt="" />
              <p className='max-sm:hidden '>Add Job</p>
            </NavLink>
            <NavLink className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500 '}`} to={'/dashboard/Manage-Jobs'}>
              <img className='min-w-4' src={assets.home_icon} alt="" />
              <p className='max-sm:hidden '>Manage Jobs</p>
            </NavLink>
            <NavLink className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500 '}`} to={'/dashboard/View-Applications'}>
              <img className='min-w-4' src={assets.person_tick_icon} alt="" />
              <p className='max-sm:hidden '>View Applications</p>
            </NavLink>
          </ul>
        </div>

        <div>
          <Outlet/>
        </div>


      </div>

    </div>
  )
}

export default Dashboard
