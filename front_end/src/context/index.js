import React from 'react'
import TodoProvider from './Todo'
import UserProvider from './User'

function Store({ children }) {
    return (
        <UserProvider>
            <TodoProvider>
                {children}
            </TodoProvider>
        </UserProvider>
    )
}

export default Store