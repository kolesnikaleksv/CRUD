import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
    const elements = data.map(item => {
        
        return(
            // <EmployeesListItem name={item.name} surname={item.surname} salary={item.salary}/>
// or we can use the spread operator
            
            <EmployeesListItem {...item} />
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
            {/* <EmployeesListItem name={name} surname="Kolisnyk" salary={12}/>
            <EmployeesListItem name={name} surname="Monakova" salary={450}/>
            <EmployeesListItem name={name} surname="Kolisnyk" salary={0}/> */}
        </ul>
    )
}

export default EmployeesList;