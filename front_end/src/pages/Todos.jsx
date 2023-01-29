import React, { useContext, useEffect, useState } from 'react'
import TodoCard from '../components/Todos/TodoCard';
import { TodosContext } from './../context/Todo';

function Todos() {
    const { todos, addTodo, getTodos } = useContext(TodosContext);
    // const [title, setTitle] = useState('');
    const [todo, setTodo] = useState({ title: "" });

    const changeHandler = e => {
        const { name, value } = e.target
        setTodo({ ...todo, [name]: value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(todo);
    }

    useEffect(() => {
        getTodos();
    }, []);


    return (
        <div>
            <form onSubmit={submitHandler} >
                <input type="text" name='title' onChange={changeHandler} />
                <button>Add Todo</button>
            </form>
            {todos.map(todo => <TodoCard todo={todo} />)}
        </div>
    )
}

export default Todos