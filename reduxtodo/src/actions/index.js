export const addTodo = () => {
    return {
        type: "ADD_TODO",
        payload : {
           id: new Date().getTime().toString(),
        }
    }
}

export const deleleTodo = () => {
    return {
        type: "DELETE_TODO"
    }
}

export const removeTodo = () => {
    return {
        type: "REMOVE_TODO"
    }
}