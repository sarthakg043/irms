import React from 'react'
import formData from '@/formsdata.json'
import { FormsTable } from '@/components'


const UserDashboard = () => {

  return (
    <div>
      <h1 className='text-3xl lg:text-6xl text-center font-mono'>User Dashboard</h1>
      <div className='w-full p-4 lg:p-10'>
        <h2 className='text-xl lg:text-3xl mb-3 lg:mb-5'>Submitted Incident Forms</h2>
        <div className='rounded-lg overflow-hidden'>
          <FormsTable forms={formData} />
        </div>
      </div>
    </div>
  )
}

export default UserDashboard