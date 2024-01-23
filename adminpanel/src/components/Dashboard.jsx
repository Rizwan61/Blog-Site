// Dashboard.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Dashboard() {
    return (

        <div className='col-12'>
            <ul className="sidebar">
                <li>
                    <NavLink to="/dashboard" className="">
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/createpost" className="">
                        Create Post
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/category" className="">
                        Create Category
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/dashboard/comment" className="">
                        Comments
                    </NavLink>

                </li>
            </ul>
        </div>

    );
}

export default Dashboard;
