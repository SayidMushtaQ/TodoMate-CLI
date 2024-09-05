import axios from "axios";

export const getAllTodosHandler = async()=>{
    try{
        const data = await axios.get('/api/todo/todos')
        return data.data?.data?.todos;
    }catch(err){
        console.log("ERROR: During Get all TODOS: ",err)
        throw err;
    }
}