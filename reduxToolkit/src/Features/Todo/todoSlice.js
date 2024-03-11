import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{
        id: 1,
        text: "Hello world"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo ={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id!==action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            const todo = state.todos.find(todo => todo.id === id)
            if(todo){
                todo.text = text
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

//create awarness of reducers to the store
export default todoSlice.reducer
