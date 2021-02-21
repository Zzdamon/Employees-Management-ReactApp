import React from 'react'
import EmployeeList from '../components/EmployeeList'
import {Link} from 'react-router-dom'

export default function People() {
    return (
        <div  className="container-min-max-width m-2">
              <Link to="/home" >
                    <span className="border border-primary border-bottom-0">
                        Home
                    </span>
            </Link>
            <EmployeeList />
        </div>
    )
}
