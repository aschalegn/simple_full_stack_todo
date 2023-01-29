import React from 'react'

function TodoCard({ todo }) {

    return (
        <div key={todo._id}>
            <h2>{todo.title}</h2>
        </div>
    )
}

export default TodoCard