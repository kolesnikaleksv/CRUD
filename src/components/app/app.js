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
            {name: 'lyubov Monakova', salary: 450, increase: true, star: false, id: 1},
            {name: 'Kyrulo Kolisnyk', salary: 12, increase: false, star: true, id: 2},
            {name: 'Oleksandr Kolisnyk', salary: 0, increase: true, star: false, id: 3}
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
    
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            star: false,
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
    // addItem = (name, salary) => {
    //     const newItem = {
    //         name, 
    //         salary,
    //         star: false,
    //         increase: false,
    //         id: this.maxId++
    //     }
    //    if(name !== '' && name.length >= 3 && salary !== '') {
    //        console.log(name.length);
    //     this.setState(({data}) => {
    //         const newArr = [...data, newItem];
    //         return {
    //             data: newArr
    //         }
    //     });
    //    }
    // }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    render() {
        const totalEmployees = this.state.data.length;
        const increaseEmployees = this.state.data.filter(item => item.increase).length;
        return(
            <div className="app">
                <AppInfo 
                    totalEmployees={totalEmployees}
                    increaseEmployees={increaseEmployees} />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm 
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;