import React, { Component } from 'react'
import { connect } from 'react-redux';
import Employee from './Employee';

class EmployeeList extends Component {
    constructor(props){
        super(props);
        this.state={
            employees: props.employees 
        }
    }

    sort(value){
        let empSorted= [...this.state.employees];

        if(value==="salary"){
            empSorted.sort((a,b)=>a.salary-b.salary)
        }
        if(value==="name"){
            empSorted.sort((a,b)=>{
            
                if(a.name>b.name){
                    return 1;
                }
                if(a.name<b.name){
                    return -1;
                }
                
                if(a.name==b.name){
                    return a.surname>=b.surname? 1: -1;
                }

                }
            )
        }

        this.setState({employees:empSorted})
    }

    filter(value){
        let empFiltered= this.props.employees;
        
        if(value===1){
            empFiltered=empFiltered.filter((emp)=>emp.salary<2500)
        }

        if(value===2){
            empFiltered=empFiltered.filter((emp)=>emp.salary>2500&&emp.salary<4000)
        }


        if(value===3){
            empFiltered=empFiltered.filter((emp)=>emp.salary>4000)
        }
        this.setState({employees:empFiltered})

    }

    render() {
        console.log("EmployeeList: ")
        console.log(this.state.employees)

        return (
            <div className="row">
               <div className="col-4 col-md-2 d-flex flex-column">
                <h4>Sort by</h4>
               <button className="btn btn-secondary m-1" onClick={()=>this.sort("name")}>Name</button>
               <button className="btn btn-secondary m-1" onClick={()=>this.sort("salary")}>Salary</button>

               <h4>Filter Salary</h4>
                <input type="button" className="btn btn-secondary m-1" name="" value="<2500"
                    onClick={()=>this.filter(1)} />
               
               <button className="btn btn-secondary m-1"
                    onClick={()=>this.filter(2)}>2500-4000</button>

               <input type="button" name="" value=">4000"
                    className="btn btn-secondary m-1"
                    onClick={()=>this.filter(3)} />


               </div>
                
                <div className="col-10 col-md-10">
                {this.state.employees.map((emp)=>{
                    return <Employee {...emp} />
                })}
                </div>
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
