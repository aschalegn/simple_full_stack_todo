import React, { createContext, useReducer } from 'react'
import axios from "axios";
import { baseURL } from '../config';

export const TodosContext = createContext();

const todosReducr = (state = [], action) => {
    const { type, payload } = action;
    
    switch (type) {
        case "GET_TODOS":
            state = payload;
            break;
        case "ADD_TODO":
            state = [...state, payload];
            break;

        case "DELETE_TODO":
            state = state.filter(todo => todo._id !== payload);
            break;

        case "UPDATE_TODO":
            for (let i = 0; i < state.length; i++) {
                if (state[i]._id === payload._id) {
                    state[i] = payload;
                    break;
                }
            }
            break;
        default:
            state = [];
            break;
    }

    return state;

}

function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(todosReducr, []);

    const addTodo = async (todoObj) => {
        try {
            //! request to server 
            const res = await axios.post(`${baseURL}/v1/todos`, todoObj);
            const data = res.data;
            //! dispach -> activate the todosReducr.
            dispatch({ type: "ADD_TODO", payload: data })
        } catch (error) {

        }
    }

    const getTodos = async () => {
        try {
            const res = await axios.get(`${baseURL}/v1/todos`);
            const data = res.data;
            dispatch({ type: "GET_TODOS", payload: data });
        } catch (error) {

        }
    }

    const deleteTodo = async (id) => {
        try {
            const res = await axios.delete(`${baseURL}/v1/todos/${id}`);
            if (res.status === 200) {
                dispatch({ type: "DELETE", payload: id });
            }
        } catch (error) {

        }
    }

    const updateTodo = async (id, body) => {
        try {
            const res = await axios.put(`${baseURL}/v1/todos/${id}`, body);
            const data = res.data;
            dispatch({ type: "UPDATE_TODO", payload: data })

        } catch (error) { }
    }

    return (
        <TodosContext.Provider value={{ todos, addTodo, updateTodo, getTodos, deleteTodo }} >
            {children}
        </TodosContext.Provider>
    )
}

export default TodoProvider