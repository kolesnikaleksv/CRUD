import {Component} from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
// Class Fields
// We can use the 'state' without creating the constructor

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         salary: ''
    //     }
    // }

        state = {
            name: '',
            salary: ''
        }
//The static
//A static method can be called through a dot. for example:
//Math.random()
//Methods of our class are not static so they can't be called through a dot
//Let's call the method at the bottom of the page
//EmployeesAddForm.onValueChange(); 
//it won't work
//let's create couple of function with the keyWord 'static'
        static onLog = () => {
            console.log("hey");
        }
//Let's call the method at the bottom of the page
//We can also output the property
        static logged = 'on';
//Let's call the property at the bottom of the page
//   console.log(EmployeesAddForm.logged);
// in the console we receive - on
    onValueChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value // This we can connect up to two "input" at the same time
            });
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
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
    console.log(EmployeesAddForm.logged);

    // EmployeesAddForm.onLog();
// EmployeesAddForm.onValueChange();
export default EmployeesAddForm;