// ./src/components/TodoList.js

import React from 'react';
import Task from './Task';
// TODO: Import context
import TodoContext from '../contexts/TodoContext';

class TodoList extends React.Component {
    // TODO: Access context
    static contextType = TodoContext;

    render() {
        const {deleteTask, tasks} = this.context


        const taskArray = Object.values(tasks);
        // for(let task in this.context.tasks){
        //     console.log(task);
        //     taskArray.push(task);
        // }
        // console.log(taskArray);
        // console.log(this.context.tasks);
        console.log(deleteTask);
        // debugger
        /* TODO: Render a `Task` component for each of the `tasks` stored in context */
        return (
            <ul>
                {taskArray.map((task)=> {
                    // console.log(task);
                return <Task
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            />})}
            </ul>
        );
    }
}

export default TodoList;
