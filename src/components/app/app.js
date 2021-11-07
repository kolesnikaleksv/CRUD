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

    onToggleIncrease = (id) => {
        // console.log(`Increase this ${id}`);
        // this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id)
            
            // const old = data[index];
            // const newItem = {...old, increase: !old.increase};
            // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            // return {
            //     data: newArr
            // };
        // })
//or
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleStar = (id) => {
        // console.log(`Rise this ${id}`);
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, star: !item.star}
                }
                return item;
            })
        }))
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
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleStar={this.onToggleStar} />
                <EmployeesAddForm 
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;