import './app-filter.css';

const AppFilter = (props) => {
    const buttonData = [
        {name: 'all', label: 'All employees'},
        {name: 'star', label: 'To raise'},
        {name: 'moreThen1000', label: 'Salary over 1000'}
    ];

    const button = buttonData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";
        return(
            <button
            className= {`btn ${clazz}`}
            key={name}
            onClick={() => props.onFilterSelect(name)}
            type='button'>
                {label}
            </button>
        )
    })

    
    return(
        <div className="btn-group">
            {button}
        </div>
    );
}

export default AppFilter;