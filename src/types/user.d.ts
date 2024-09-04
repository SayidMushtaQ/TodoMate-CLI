export interface ApiError extends Error{
    status?:number
}
interface User{
    userName: string;
    fullname: string;
    email: string;
}
export interface RegisterUser extends User {
    password: string;
    phone: string;
}
export interface RegisterRes{
    newUser: User & {
        role:string
    }
}

export interface LoginUser {
    userInput:string
    password:string
}

export interface UserRes {
    id:string,
    accessToken:string,
    redirectURL:string,
    refreshToken:string
}