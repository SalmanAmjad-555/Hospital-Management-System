import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='px-4 py-10 md:px-10 lg:px-20 bg-white'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-4'>
        Find by Speciality
      </h1>
      <p className='text-center text-gray-600 mb-10 max-w-2xl mx-auto'>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
        {
          specialityData.map((item, index) => (
            <Link key={index} to={`/doctors/${item.speciality}`} className='flex flex-col items-center text-center p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-gray-50 hover:bg-primary hover:text-white overflow-scroll'>
              <img
                src={item.image}  alt={item.speciality}    
                className='w-16 h-16 object-contain mb-2'/>
              <p className='font-medium text-sm md:text-base'>{item.speciality}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SpecialityMenu
