import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'
import RelatedDoctors from '../componenets/RelatedDoctors'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors,currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [docslot, setDocSlot] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const daysOfWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  const fetchDocInfo = () => {
    const doc = doctors.find(doc => doc._id === docId)
    setDocInfo(doc)
    console.log(doc)
  }

  const getAvailableSlots = async () => {
  setDocSlot([]);

  let today = new Date();

  for (let i = 0; i < 7; i++) {
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    let endTime = new Date(currentDate);
    endTime.setHours(21, 0, 0, 0);

    if (i === 0) {
      currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
    } else {
      currentDate.setHours(10);
      currentDate.setMinutes(0);
    }

    let timeSlots = [];
    while (currentDate < endTime) {
      let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime
      });

      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    setDocSlot(prev => [...prev, timeSlots]);
  }
};


  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])


  useEffect(() => {
    getAvailableSlots()
  }, [docInfo ])

  useEffect(() => {
   console.log(docslot)
  }, [docslot])
  
  

  return docInfo && (
    <div className="px-4 py-6 max-w-5xl mx-auto">
      {/* Doctor Profile Section */}
      <div className="flex flex-col sm:flex-row gap-6 bg-white shadow-md rounded-lg p-4">
        
        {/* Doctor Image */}
        <div className="flex justify-center sm:justify-start">
          <img
            className="w-full sm:w-60 object-cover rounded-full border-2 border-primary"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        {/* Doctor Info */}
        <div className="flex flex-col justify-center gap-4">
          {/* Name & Verified Icon */}
          <p className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
            {docInfo.name}
            <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
          </p>

          {/* Degree & Specialty */}
          <p className="text-gray-600 text-sm sm:text-base">
            {docInfo.degree} — <span className="text-primary font-medium">{docInfo.speciality}</span>
          </p>

          {/* Experience Button */}
          <button className="bg-primary text-white text-sm px-4 py-1 rounded-full w-fit">
            {docInfo.experience}
          </button>

          {/* About Section */}
          <div>
            <p className="font-semibold flex items-center gap-2 text-gray-800">
              About
              <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
            </p>
            <p className="text-gray-600 text-sm mt-1">{docInfo.about}</p>
          </div>
          <p className='font-semibold text-gray-500'>Appointment Fee: <span>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>

      {/* ------ Booking slots ------- */}
      
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-500'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'> 
          {
            docslot.length && docslot.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? `bg-primary text-white` : `border border-gray-200`}`}  key={index}>
                 
                 <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                 <p>{item[0] && [item[0].datetime.getDate()]}</p>

              </div>

            )

            )
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docslot.length && docslot[slotIndex].map((item,index)=>(
              <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 min-w-[100px] px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? `bg-primary text-white` : `border border-gray-200 text-gray-400`}`}  key={index}>
                
                {
                  item.time.toLowerCase()
                }

              </p>
            ))
          }
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full mt-3'>Book an Appointment</button>
         <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
     
    </div>
  )
}

export default Appointment
           