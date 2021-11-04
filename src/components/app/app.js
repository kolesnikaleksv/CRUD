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
    }
    deleteItem = (id) => {
        // console.log(id);
        this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id === id);
            // console.log(index);
            //data.splice(index, 1); //this is the wrong way. this way we changed our state
//We have to create a new array with old elements, but without unnecessary ones
//It is the principle immutability. There are several options
//1 use the 'slice' method - it copies part of the array and creates a new one
            //const before = data.slice(0, index);// it copies from null to index
            //const after = data.slice(index + 1)// it copies from index + 1 to end

            //const newArr = [...before, ...after]; //new array without the 'index'
//2 we can filter it to form an array
            return({
                // data: data
                data: data.filter(item => item.id !== id)
            })

        })
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
                    // onDelete={id => console.log(id)}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm />
            </div>
        );
    }
}

export default App;