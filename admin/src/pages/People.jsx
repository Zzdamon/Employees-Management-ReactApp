import React from 'react'
import EmployeeList from '../components/EmployeeList'
import {Link} from 'react-router-dom'

export default function People() {
    return (
        <div>
              <Link to="/home">
                Home
            </Link>
            <EmployeeList />
        </div>
    )
}
