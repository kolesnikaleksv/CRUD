import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/empoyees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            {name: 'lyubov Monakova', salary: 450, increase: true, id: 1},
            {name: 'Kyrulo Kolisnyk', salary: 12, increase: false, id: 2},
            {name: 'Oleksandr Kolisnyk', salary: 0, increase: true, id: 3}
            ]
        }
        this.maxId = 4;
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return({
                data: data.filter(item => item.id !== id)
            })

        })
    }
    // onAddEmployee = (salary, name) => {
    //     this.setState(({data}) => {
    //         // const newEmployee = data.map();
            
    //         // return  console.log('hi', name, salary , this.maxId++);
    //         // const newEmployees = [...data, {
    //         //     name: name,
    //         //     salary: salary,
    //         //     id: this.maxId++
    //         // }]
    //         // return console.log({
    //         //     name: name,
    //         //     salary: salary,
    //         //     id: this.maxId++
    //         // })
    //         // return console.log(newEmployees);
    //         return ({
    //             data: [...data, {name, salary, id: this.maxId++}]
    //         })
    //     })
    // }

    // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
   
        return(
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm 
                    // onAddEmployee={this.onAddEmployee}
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;