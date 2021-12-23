import {Component} from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'; 


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {name: 'Mary Frezee', salary: 800, increase: false, rise: true, id: 1},
                {name: 'John Smidt', salary: 1000, increase: true, rise: false, id:2 },
                {name: 'Ann Grok', salary: 36000, increase: false, rise: false, id: 3},
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
           return {
               data : data.filter(item => item.id !== id)
           }
        })
    }


    addItem = (name, salary ) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise : false,
            id : this.maxId ++
        }
        this.setState(({data}) => {
            const newArr = [...data,newItem];
            return {
                data : newArr
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
                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        ); 
    }
}

export default App;