import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    // constructor(props) {
    //     super(props);
    // }

    toFindEmpLocal = (e) => {
        const find = e.currentTarget.getAttribute('data-toggle');
        // const find = 'increase'
        console.log(find);
        this.props.toRise(find);

    }
    
    render() {
        return(
            <div className="btn-group">
                <button
                className= 'btn btn-light'

                type='button'>
                    All employees
                </button>
                <button
                className= 'btn btn-outline-light'
                type='button'
                data-toggle="increase"
                onClick={this.toFindEmpLocal} >
                    To raise
                </button>
                <button
                className= 'btn btn-outline-light'
                type='button'>
                    Salary over 1000
                </button>
            </div>
        );
    }
}

export default AppFilter;