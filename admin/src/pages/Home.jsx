import React from 'react'
import EmployeeAddForm from '../components/EmployeeAddForm'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div  className="container-min-max-width m-2">
            <Link to= "/people" className="border border-primary border-bottom-0">
            <span className="border border-primary border-bottom-0">
               Employee List
            </span>
            </Link>
            <EmployeeAddForm/>
        </div>
    )
}
