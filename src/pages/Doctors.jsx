import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {
  

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const {speciality}= useParams()
  const navigate=useNavigate()
  const {Doctors}=useContext(AppContext)

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality===speciality))
    }
    else{
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors,speciality])
  

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 rounded transition-all text-sm sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev=>(!prev))}>Filters</button>
        <div className={`text-sm text-gray-600 flex flex-col gap-3 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
        <p onClick={()=>{speciality === `General physician` ? navigate(`/doctors`) : navigate(`/doctors/General physician`)}} className='border border-gray-400 rounded-full cursor-pointer p-1 pl-2'>General physician</p>
        <p onClick={()=>{speciality === `Dermatologist` ? navigate(`/doctors`) : navigate(`/doctors/Dermatologist`)}} className='border border-gray-400 rounded-full cursor-pointer p-1 pl-2'>Dermatologist</p>
        <p onClick={()=>{speciality === `Gynecologist` ? navigate(`/doctors`) : navigate(`/doctors/Gynecologist`)}} className='border border-gray-400 rounded-full cursor-pointer p-1 pl-2'>Gynecologist</p>
        <p onClick={()=>{speciality === `Pediatricians` ? navigate(`/doctors`) : navigate(`/doctors/Pediatricians`)}} className='border border-gray-400 rounded-full cursor-pointer p-1 pl-2'>Pediatricians</p>
        <p onClick={()=>{speciality === `Neurologist` ? navigate(`/doctors`) : navigate(`/doctors/Neurologist`)}} className='border border-gray-400 rounded-full cursor-pointer p-1 pl-2'>Neurologist</p>
        <p onClick={()=>{speciality === `Gastroenterologist` ? navigate(`/doctors`) : navigate(`/doctors/Gastroenterologist`)}} className='border border-gray-400 rounded-full cursor-pointer p-1 pl-2'>Gastroenterologist</p>
        </div>
     
      <div className='grid grid-cols-1 md:grid-cols-auto gap-4 mt-5 w-full'>
        {
             filterDoc.map((item,index)=>(
               <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 cursor-pointer rounded-xl overflow-hidden hover:translate-y-[10px] transition-all duration-500' key={index}>
               <img className='bg-blue-50' src={item.image} alt="" />
               <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='h-2 w-2 rounded-full bg-green-700'></p>
                    <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-500 text-sm'>{item.speciality}</p>
               </div>
               </div>
           ))
        }
      </div>
       </div>
    </div>
  )
}

export default Doctors