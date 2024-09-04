export interface ApiError extends Error{
    status?:number
}
interface User{
    userName: string;
    fullname: string;
    email: string;
}
export interface FormData extends User {
    password: string;
    phone: string;
}
export interface UserRes{
    newUser: User & {
        role:string
    }
}