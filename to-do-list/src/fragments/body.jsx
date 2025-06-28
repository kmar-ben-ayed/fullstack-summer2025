import './body.css';
import React, { useState } from 'react';

function body() {
    const[tasks, setTasks] = useState([]);
    const[task, setTask] = useState("");

    function handleNewTask(event) {
        setTask(event.target.value);
    }
    function handleAddingTask(){
        const newTask=task.trim();
        setTasks(ts => [...ts, newTask]);
        setTask("");
    }
    function handleRemoveTask(index){
        setTasks(ts => ts.filter((_, i) => i !== index)
        );
    }
    function handleMoveTaskUp(index){
        if(index===0){
            return;
        }else{
            const prevTask= tasks[index-1];
            const currentTask= tasks[index];
            setTasks(ts =>
                ts.map((t,i) =>
                (i === index ? prevTask : t))
            )
            setTasks(ts =>
                ts.map((t,i) =>
                (i === index-1 ? currentTask : t))
            )

        }
    }

        function handleMoveTaskDown(index){
        if(index=== tasks.length-1){
            return;
        }else{
            const nextTask= tasks[index+1];
            const currentTask= tasks[index];
            setTasks(ts =>
                ts.map((t,i) =>
                (i === index ? nextTask : t))
            )
            setTasks(ts =>
                ts.map((t,i) =>
                (i === index+1 ? currentTask : t))
            )

        }
    }

    return (
        <div className="body-container">
            <div className="addTask">
                <input class="form-control" type="text" placeholder="Add a task..." aria-label="default input example" value={task} onChange={handleNewTask}>
                </input>
                <button type="button" class="btn btn-success" onClick={handleAddingTask}>Add</button>

            </div>
            <div className="taskList">
                <ul>
                    {tasks.map((t,index) => (
                    <li className="taskItem" key={index}>
                        <span className='taskText'>
                            {t}
                        </span>
                        <div className='buttonsDiv'>
                            <button type="button" class="btn btn-danger" onClick={() =>handleRemoveTask(index)}>Delete</button>
                            <button type="button" class="btn btn-info" onClick={() => handleMoveTaskUp(index)} >
                                <i class="fa-solid fa-up-long"></i>
                            </button>
                            <button type="button" class="btn btn-info" onClick={() => handleMoveTaskDown(index)}>
                                <i class="fa-solid fa-down-long"></i>
                            </button>
                        </div>

                    </li>
                    ))}
                </ul>
            </div>
        </div>
        );
}

export default body