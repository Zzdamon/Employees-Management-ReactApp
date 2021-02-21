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
            date:null
        };
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return(
            <form
                
                onSubmit={(event) =>
                    {   event.preventDefault();
                        let date= new Date();
                        this.setState({date:date})
                        const employee = this.state;
                        this.props.addEmployee(employee)}
                    }
            >
                <h2>Add Employee:</h2>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.changeHandler(event)}
                />
                <label htmlFor="surname">Surname:</label>
                <input
                    type="text"
                    name="surname"
                    onChange={(event) => this.changeHandler(event)}
                />
                
                <label htmlFor="job">Job:</label>
                <input
                    type="text"
                    name="job"
                    onChange={(event) => this.changeHandler(event)}
                />

                <label htmlFor="salary">Salary:</label>
                <input
                    type="number"
                    name="salary"
                    onChange={(event) => this.changeHandler(event)}
                />
                <input type="submit" value="Save"/>

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