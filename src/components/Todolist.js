import React from 'react'
import { TodoListForm } from './TodoListForm'
import { useState } from 'react'
import './TodoStyl.css'
import { ToDo } from './ToDo'
export default function Todolist() {
    const [todos, SetTodo] = useState([])
    function addTodo(todo) {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodo = [todo, ...todos];
        SetTodo(newTodo)
        console.log(newTodo)
        //console.log(todos)
    }
    function removeTodo(id) {
        let filterdarry = todos.filter(todo => todo.id !== id)
        SetTodo(filterdarry)
    }
    function completeTodo(id) {
        let updateTodo = todos.map((todo) => {
            if (todo.id == id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        SetTodo(updateTodo);
    }
    function editTodo(id, newtext) {
        console.log(id, newtext);
        if (newtext=="" || /^\s*$/.test(newtext)) {
            return;
        }
        // let updateTodo = todos.map(todo => {
        //     if (todo.id == id) {
        //         todo.text = newtext.text
        //     }
        //     return todo
        // });
        SetTodo(prev=>prev.map(item=>(item.id==id?newtext:item)));
    }
    return (
        <div>
            <header>
                <nav className="mynavbar">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Abou Us</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
            <h1>What's the plan for Today?</h1>
            <TodoListForm onSubmit={addTodo} />
            <ToDo todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} editTodo={editTodo} />
        </div>
    )
}
