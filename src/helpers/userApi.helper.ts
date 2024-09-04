import axios from 'axios'
import type {RegisterUser,LoginUser} from '../types/user'

export const registerNewUserHandler = async (user:RegisterUser)=>{
    try{
        const res = await axios.post('/api/users/register',user);   
        return res.data;
    }catch(err){
        console.log("ERROR: During RegisterUser: ",err)
        throw err;
    }
}

export const loginUserHanlder = async(user:LoginUser)=>{
    try{
        const res = await axios.post('/api/users/login',user);   
        return res.data;
    }catch(err){
        console.log("ERROR: During Login: ",err)
        throw err;
    }
}