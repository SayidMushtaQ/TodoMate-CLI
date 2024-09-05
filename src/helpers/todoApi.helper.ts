import axios from "axios";
import type {NewTodoType} from '../types/todo'
export const getAllTodosHandler = async()=>{
    try{
        const data = await axios.get('/api/todo/todos',{withCredentials:true})
        return data.data?.data?.todos;
    }catch(err){
        console.log("ERROR: During Get all TODOS: ",err)
        throw err;
    }
}

export const createNewTodoHandler = async(newTodo:NewTodoType)=>{
    try{
        const data = await axios.post('/api/todo/createTodo',newTodo);
        return data;
    }catch(err){
        console.log("ERROR: During Creating TODOS: ",err)
        throw err;
    }
}