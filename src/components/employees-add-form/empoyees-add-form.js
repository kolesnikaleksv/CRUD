import {Component} from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // This we can connect up to two "input" at the same time
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
    render() {
        const {name, salary} = this.state;
        return(
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input 
                        type="text"
                        name="name"
                        value={name}// property 'value' fot managed components
                        className="form-control new-post-label"
                        placeholder="What's his name?" 
                        onChange={this.onValueChange} />
                    <input 
                        type="number"
                        name="salary"
                        value={salary}
                        className="form-control new-post-label"
                        placeholder="Salary in $?" 
                        onChange={this.onValueChange} />
                    <button 
                    type='submit'
                    className="btn btn-outline-light"
                    >Add</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;