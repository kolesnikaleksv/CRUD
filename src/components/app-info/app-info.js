import './app-info.css';

// const AppInfo = (props) => {
const AppInfo = ({totalEmployees, increaseEmployees}) => {

    // const {totalEmployees, increaseEmployees} = props;
    return(
        <div className="app-info">
            <h1>Accountin of employees in the company KIR</h1>
            <h2>Total number of employees: {totalEmployees}</h2>
            <h2>Bonus will receive: {increaseEmployees}</h2>
        </div>
    )
}

export default AppInfo;