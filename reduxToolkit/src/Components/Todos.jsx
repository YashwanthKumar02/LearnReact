import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Features/Todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
    <>
    {todos.map(todo => (
        <div key={todo.id} className="flex justify-between items-center bg-gray-800 p-4 my-2 rounded">
            <h2 className="text-lg text-gray-100">{todo.text}</h2>
            <button className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded" onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
            </button>
        </div>
    ))}
    </>
  )
}

export default Todos