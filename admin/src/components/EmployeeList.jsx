import React, { Component } from 'react'
import { connect } from 'react-redux';
import Employee from './Employee';
import {Link} from 'react-router-dom'

class EmployeeList extends Component {
    constructor(props){
        super(props);
        this.state={
            employees: props.employees 
        }
    }

    render() {
        console.log("EmployeeList: ")
        console.log(this.state.employees)


        return (
            <div>
            <Link to="/home">
                Home
            </Link>
                {this.state.employees.map((emp)=>{
                    return <Employee {...emp} />
                })}
            </div>
        )
    }
}

   
function mapStateToProps(state) {
    return {
        employees: state.employees
    };
}

export default connect(mapStateToProps)(EmployeeList);
