import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import AddItemForm from './components/add-item-form';

import './index.css';

export default class App extends React.Component {

    constructor(){
            super();
            this.state = {
            todoData: [
                { label: 'Drink Coffee', important: false, id:1},
                { label: 'Make Awesome App', important: true, id:2 },
                { label: 'Have a lunch', important: false, id:3 }
            ]
        };
        this.deleteItem = (id) => {
            this.setState( ({ todoData }) => {
                const idx = todoData.findIndex((el) => el.id === id );
                const newArr = [
                    ...todoData.splice(0, idx),
                    ...todoData.splice(idx+1)
                ];
                return {
                    todoData: newArr
                };
            });
        };

        this.addForm = (text) => {
            return  console.log('add new task')
        };
        this.OnToggleImportant = (id) => {
            console.log('toggle important', id)
        };
        this.OnToggleDone = (id) => {
            console.log('toggle done', id)
        };
    };
    render() {

        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                    <div className="top-panel d-flex">
                        <ItemStatusFilter />
                        <SearchPanel />
                    </div>

                <TodoList
                    onDeleted={ this.deleteItem }
                    todos={ this.state.todoData }
                    OnToggleDone = { this.OnToggleDone}
                    OnToggleImportant = { this.OnToggleImportant} />
                <AddItemForm
                 addForm={ this.addForm }/>
            </div>
        );
    };
};



ReactDOM.render(<App />, document.getElementById('root'));

