import React from 'react';
import { addEmployee } from '../redux/EmployeesActions';
import { connect } from 'react-redux';


class EmployeeAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            job: '',
            salary:0,
            date:''
        };
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    componentDidMount(){
        let date= new Date();
        date=date.toString();
        this.setState({date:date})
    }

    render(){
        return(
            <form className="container-min-max-width d-flex flex-column m-2 w-25 "
                
                onSubmit={(event) =>
                    {   event.preventDefault();
                       
                        const employee = this.state;
                        // employee.date=date;
                        this.props.addEmployee(employee)}
                    }
            >
                <h2>Add Employee:</h2>
                <label htmlFor="name">Name:</label>
                <input
                    className="m-1"
                    type="text"
                    name="name"
                    onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="surname">Surname:</label>
                <input
                    className="m-1"
                    type="text"
                    name="surname"
                    onChange={(event) => this.changeHandler(event)}
                />
                
                <label htmlFor="job">Job:</label>
                <input
                    className="m-1"
                    type="text"
                    name="job"
                    onChange={(event) => this.changeHandler(event)}
                />

                <label htmlFor="salary">Salary:</label>
                <input
                    className="m-1"
                    type="number"
                    name="salary"
                    onChange={(event) => this.changeHandler(event)}
                />
                <input 
                    className="btn btn-secondary m-1 mt-2"
                    type="submit" value="Save"/>

            </form>
        )
    }
}
    
function mapStateToProps(state) {
    return {
        employees: state.employees
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addEmployee: (payload) => dispatch(addEmployee(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAddForm);