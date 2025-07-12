import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richadjaseswap@gmil.com',
    phone: '+1 324 3503403',
    address: {
      line1: '57 cross Richond',
      line2: 'circle chand road landon'
    },
    gender: 'Male',
    dob: '2000-01-06'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md">
      {/* Profile Image & Name */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <img src={userData.image} alt="Profile" className="w-28 h-28 rounded-full object-cover" />
        {
          isEdit
            ? <input
                type="text"
                value={userData.name}
                onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                className="text-xl font-semibold text-center border rounded px-3 py-1 w-full max-w-sm"
              />
            : <p className="text-xl font-semibold">{userData.name}</p>
        }
      </div>

      <hr className="my-4" />

      {/* Contact Information */}
      <div className="mb-6">
        <p className="text-lg font-semibold mb-2">Contact Information</p>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600">Email:</p>
            <p className="text-base">{userData.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Phone:</p>
            {
              isEdit
                ? <input
                    type="text"
                    value={userData.phone}
                    onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                    className="border rounded px-3 py-1 w-full"
                  />
                : <p className="text-base">{userData.phone}</p>
            }
          </div>
          <div>
            <p className="text-sm text-gray-600">Address:</p>
            {
              isEdit
                ? (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      value={userData.address.line1}
                      onChange={(e) => setUserData(prev => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value }
                      }))}
                      className="border rounded px-3 py-1"
                    />
                    <input
                      type="text"
                      value={userData.address.line2}
                      onChange={(e) => setUserData(prev => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value }
                      }))}
                      className="border rounded px-3 py-1"
                    />
                  </div>
                )
                : (
                  <p className="text-base">
                    {userData.address.line1}<br />
                    {userData.address.line2}
                  </p>
                )
            }
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div className="mb-6">
        <p className="text-lg font-semibold mb-2">Basic Information</p>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Gender:</p>
            {
              isEdit
                ? (
                  <select
                    value={userData.gender}
                    onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                    className="border rounded px-3 py-1 w-full"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                )
                : <p className="text-base">{userData.gender}</p>
            }
          </div>
          <div>
            <p className="text-sm text-gray-600">BirthDay:</p>
            {
              isEdit
                ? <input
                    type="date"
                    value={userData.dob}
                    onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                    className="border rounded px-3 py-1 w-full"
                  />
                : <p className="text-base">{userData.dob}</p>
            }
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        {
          isEdit
            ? <button
                onClick={() => setIsEdit(false)}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
              >
                Save Information
              </button>
            : <button
                onClick={() => setIsEdit(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Edit
              </button>
        }
      </div>
    </div>
  )
}

export default MyProfile
