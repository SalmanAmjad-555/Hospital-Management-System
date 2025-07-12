import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

 const navigate=useNavigate()

  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 lg:px-12 md:px-14 my-20 md:mx-10'>

   {/* ----left side---- */}

        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5' >
            <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>Book Appointment <br /> With 100+ Trusted Doctors</p>
             <button onClick={()=>{
                navigate('/login'); scrollTo(0,0)
             }} className='bg-white mt-5 rounded-full py-2 px-4 sm:text-base hover:scale-105 transition-all'>create-button</button>
        </div>
       

        {/* ----right side---- */}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner