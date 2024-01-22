import React from 'react'
import Dashboard from '../components/Dashboard'
import { Outlet } from 'react-router-dom'

function MainProfile() {
    return (
        <>
            <h1 className='text-center'>User Profile</h1>
           
            
                <div className="grid ">
                    <div className="col-2">
                        <Dashboard />
                    </div>
                    <div className="col-10">
                        <Outlet />
                    </div>
                </div>
     

        </>
    )
}

export default MainProfile