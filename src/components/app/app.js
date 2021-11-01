import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/empoyees-add-form';
import './app.css';

function App() {
    const data = [
        {name: 'lyubov', salary: 450, surname: 'Monakova', increase: true},
        {name: 'Kyrulo', salary: 12, surname: 'Kolisnyk', increase: false},
        {name: 'Oleksandr', salary: 0, surname: 'Kolisnyk', increase: true}
    ];
    return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm />
        </div>
    );
}

export default App;