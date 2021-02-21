import React from 'react'
import EmployeeAddForm from '../components/EmployeeAddForm'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <EmployeeAddForm></EmployeeAddForm>
            <Link to= "/people">
                Employee List
            </Link>
        </div>
    )
}
