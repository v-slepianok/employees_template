import {Component} from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'; 


const data = [
    {name: 'Mary Frezee', salary: 800, increase: false, rise: false, id: 1},
    {name: 'John Smidt', salary: 1000, increase: true, rise: false, id:2 },
    {name: 'Ann Grok', salary: 36000, increase: false, rise: false, id: 3},
];

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {name: 'Mary Frezee', salary: 800, increase: false, rise: false, id: 1},
                {name: 'John Smidt', salary: 1000, increase: true, rise: false, id:2 },
                {name: 'Ann Grok', salary: 36000, increase: false, rise: false, id: 3},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
           return {
               data : data.filter(item => item.id !== id)
           }
        })
    }

    render() {
        return(
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
            </div>
        ); 
    }
}

export default App;