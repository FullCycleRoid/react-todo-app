import React from 'react';

import './todo-list-item.css';

class TodoListItem extends React.Component {



    render() {
        const { label, onDeleted, OnToggleDone, OnToggleImportant } = this.props;
        let classNames  = 'todo-list-item'

//        if (OnToggleDone) {
//            classNames += ' done';
//        }
//
//        if (OnToggleImportant) {
//            classNames += ' important';
//        }


          return (
            <span className={ classNames }>
              <span
                    className="todo-list-item-label"
                    onClick={ OnToggleDone } >
                    {label}
              </span>

              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                      onClick = { OnToggleImportant }>
                <i className="fa fa-exclamation" />
              </button>

              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right"
                      onClick = { onDeleted }>
                <i className="fa fa-trash-o" />
              </button>
            </span>
          );
    }
}

export default TodoListItem;