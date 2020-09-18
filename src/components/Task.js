// ./src/components/Task.js

import React from 'react';

const Task = ({deleteTask, task: { id, message } }) => {
    const handleClick = (e) => {
        // console.log(e.target)
        // TODO: Delete task
        deleteTask(id);
    }

    return (
        <li>
        <h1>{message}</h1>
        <button onClick={handleClick}>Delete Task</button>
        </li>
    );
}

export default Task
