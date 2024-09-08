import axios from "axios";
export const getAllTodosHandler = async()=>{
    try{
        const data = await axios.get('/api/todo/todos',{withCredentials:true})
        return data.data?.data?.todos;
    }catch(err){
        console.log("ERROR: During Get all TODOS: ",err)
        throw err;
    }
}

export const createNewTodoHandler = async(newTodo:string)=>{
    try{
        const data = await axios.post('/api/todo/createTodo',{title:newTodo});
        return data;
    }catch(err){
        console.log("ERROR: During Creating TODOS: ",err)
        throw err;
    }
}

export const createNewSubTodoHandler = async({newSubTodo,todoID}:{newSubTodo:string,todoID:string})=>{
    try{
        const data = await axios.post('/api/subTodo/createSubTodo',{content:newSubTodo,todoID});
        return data;
    }catch(err){
        console.log("ERROR: During Creating TODOS: ",err)
        throw err;
    }
}

export const getAllSubTodosHandler = async(todoID:string)=>{
    try{
        const data = await axios.post('/api/subTodo/subTodos',{todoID});
        console.log(todoID)
        return data.data?.data?.subTodos;
    }catch(err){
        console.log("ERROR: During Getting SUB TODOS: ",err)
        throw err;
    }
}