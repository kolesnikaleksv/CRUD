import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

    const EmployeesList = ({data, onDelete, onToggleStar, onToggleIncrease}) => {
        const elements = data.map(item => {
            const {id, ...itemProps} = item;
            return(
                
                <EmployeesListItem 
                key={id} {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleStar={() => onToggleStar(id)}
                onToggleIncrease={() => onToggleIncrease(id)} />// we pass the new props
            )
        })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;