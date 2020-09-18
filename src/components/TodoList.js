// ./src/components/TodoList.js

import React from 'react';
import Task from './Task';
// TODO: Import context
import TodoContext from '../contexts/TodoContext';

class TodoList extends React.Component {
    // TODO: Access context
    static contextType = TodoContext
    render() {
        return (
            <ul>
                {/* TODO: Render a `Task` component for each of the `tasks` stored in context */}
            </ul>
        );
    }
}

export default TodoList;
