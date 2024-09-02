export interface ApiError extends Error{
    status?:number
}
export interface FormData {
    userName: string;
    fullname: string;
    email: string;
    password: string;
    phone: string;
}