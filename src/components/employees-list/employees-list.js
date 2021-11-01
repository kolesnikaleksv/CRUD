import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Kyrulo" surname="Kolisnyk" salary={12}/>
            <EmployeesListItem name="lyubov" surname="Monakova" salary={450}/>
            <EmployeesListItem name="Oleksandr" surname="Kolisnyk" salary={0}/>
        </ul>
    )
}

export default EmployeesList;