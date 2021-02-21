import React from 'react'

export default function Employee(props) {
    const {name,surname,salary,job} = props;
    console.log("Employee: "+props)

    return (
        <div>
            <h3>{name} {surname}</h3>        
            <h5>Title: {job}</h5>
            <h6>Salary: {salary}$</h6>    
        </div>
    )
}
