import axios from 'axios'
import type {FormData} from '../types/register'

export const registerNewUserHandler = async (formData:FormData)=>{
    try{
        const res = await axios.post('/api/users/register',formData);   
        return res.data;
    }catch(err){
        console.log("ERROR: During RegisterUser: ",err)
        throw err;
    }
}