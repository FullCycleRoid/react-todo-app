import React from 'react';
import './add-item-form.css';

export default class AddItemForm extends React.Component {


    render() {
        return (
            <div className='top-panel d-flex'>
                <input placeholder='add task'/>
                <button type='button'
                className='btn btn-outline-secondary'
                onClick={ this.props.addForm }>
                Add</button>
            </div>

        );
    };
}