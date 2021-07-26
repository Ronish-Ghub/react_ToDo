import React, { useState, useRef, useEffect } from 'react'
import './TodoStyl.css'
export const TodoListForm = (props) => {
    const [task, setTask] = useState(props
        .edit ? props.edit.value : "");
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    });
    function handleChange(event) {
        setTask(event.target.value);
    }
    function submitEventHandler(event) {
        event.preventDefault();
        console.log("Submit event..")
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text:task
        });
        setTask("");
    }

    return (
 
        <form onSubmit={submitEventHandler}>
            {
                props.edit ? (
                    <>
                        <label>Add Task</label>
                        <input type="text" 
                        value={task} 
                        onChange={handleChange} 
                        className="todo-input" 
                        placeholder="Enter Your Task"
                        ref={inputRef} /> 

                            <button className="todo-button edit" 
                            onClick={submitEventHandler}>Update</button>
                    </>
                ) : (
                    <>
                        <label>Add Task</label>
                        <input type="text" 
                        value={task} 
                        onChange={handleChange} 
                        className="todo-input" placeholder="Enter Your Task"
                        ref={inputRef} />
                             <button className="todo-button">Add</button>
                    </>
                )
            }
        </form>

    )
}
