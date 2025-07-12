import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">My Appointments</h2>

      <div className="space-y-6">
        {
          doctors.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 md:flex md:items-center md:gap-6"
            >
              {/* Image */}
              <div className="flex justify-center md:w-1/4 mb-4 md:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>

              {/* Doctor Info */}
              <div className="flex-1 space-y-2">
                <p className="text-xl font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.speciality}</p>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Address:</p>
                  <p>{item.address.line1}</p>
                  <p>{item.address.line2}</p>
                </div>
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-medium">Date & Time:</span> 25, July 2025 | 8:30 PM
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 md:mt-0 md:w-1/4 flex flex-col gap-2">
                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Pay Online</button>
                <button className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">Cancel Appointment</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments
