import React from 'react'
import Navbar from './Navbar'

const categories = () => {
  return (
<>
<Navbar />
<div className="min-h-screen bg-gray-100 p-6 text-black">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">Our Categories</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Homes Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Homes</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>1 BHK:</strong> Compact homes ideal for singles or small families.
            </li>
            <li>
              <strong>2 BHK:</strong> Perfect for small families with added space for comfort.
            </li>
            <li>
              <strong>3 BHK:</strong> Spacious homes for larger families or shared living.
            </li>
            <li>
              <strong>Luxury Villas:</strong> Premium living spaces with top-notch amenities.
            </li>
            <li>
              <strong>Studio Apartments:</strong> Modern, open-plan living for a trendy lifestyle.
            </li>
          </ul>
        </div>

        {/* Offices Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold text-green-500 mb-4">Office Spaces</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Shared Workspaces:</strong> Cost-effective solutions for freelancers and startups.
            </li>
            <li>
              <strong>Private Cabins:</strong> Dedicated spaces for professionals or small teams.
            </li>
            <li>
              <strong>Meeting Rooms:</strong> Fully-equipped spaces for presentations and discussions.
            </li>
            <li>
              <strong>Co-Working Spaces:</strong> Collaborative environments with flexible plans.
            </li>
            <li>
              <strong>Corporate Offices:</strong> Large-scale setups for established businesses.
            </li>
          </ul>
        </div>
      </div>
    </div>
</>
  )
}

export default categories
