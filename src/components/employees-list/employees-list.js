import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

    const EmployeesList = ({data}) => {
        const elements = data.map(item => {
//residal destructuring or partial destructurig
//we can pull the props individually from the item object
            const {id, ...itemProps} = item;
            return(
                
                <EmployeesListItem key={id} {...itemProps} />
            )
        })
//if the element does not change the order in the list we can assign it its number
    // const EmployeesList = ({data}) => {
    //     const elements = data.map((item,i) => {
            
    //         return(
                
    //             <EmployeesListItem key={i} {...item} />
    //         )
    //     })
    // console.log(elements);
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;