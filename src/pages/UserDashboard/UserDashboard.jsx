import React from 'react'
import formData from '@/formsdata.json'
import { FormsTable } from '@/components'


const UserDashboard = () => {

  return (
    <div>
      <h1 className='text-3xl lg:text-6xl text-center font-mono'>User Dashboard</h1>
      <div className='w-full p-4 lg:p-10'>
        <h2 className='text-xl lg:text-3xl'>Submitted Incident Forms</h2>
        <div className='rounded-lg overflow-hidden'>

          <FormsTable forms={formData} />
        </div>
        <div className='w-full p-5 lg:p-10'>
          {formData.map((form, index) => {
            return (
              <div key={form.id} className='w-full bg-gray-200 p-5 lg:p-10 rounded-lg mb-5'>
                <h3 className='text-2xl'>{index} Form Title</h3>
                <p>Department: {form.department}</p>
                <p>Reported Date: {form.reported_date}</p>
                <p>Reported Time: {form.reported_time}</p>
                <p>Incident Status: {form.status}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UserDashboard