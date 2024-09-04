//LEARNINGS TYPESCRIPT 
let variable = "hello"
let num = 48;
let isString : string | number
isString = "hello";
isString = 33;
let names = ["hello" , "hi" , "bye"];
//names.push(33)  error
names.push("elo");

let testStringArray : (number | string)[]

let user = {
    username:"john",
    age:22,
    isAdmin:false
}
user.username = "jane";
user.age = 22

let userObject : {
    username : string
    age: number
    isAdmin:boolean,
    phone:string|number
}

let func = (num : number) => {
    return num * 2;
}
let func2 = (num1 : number , num2 :number) => {
    return num1 + num2;
}
//Type aliases

type UserType = {
    username: string;
    age: number;
    phone? : string;
}

let user2 : UserType = {
    username:'hello',
    age:22,
    phone:"1345679635"
}

let funcObj = (user: UserType) => {
    console.log(user.username)
}

type myFunc = (a:number , b:string)=> void
let write : myFunc = (num , str)=> {
    return num + str
}

//INTERFACES

interface IUser{
    username:String,
    email:string,
    age:number;
}
interface IEmployee extends IUser{
    employeeId:number;
}
const userOne : IEmployee = {
    username:"User1",
    email:"user@gmail.com",
    age:20,
    employeeId: 1
}

// Generics

interface IAuthor{
    id: number,
    username:string
}
interface ICategory{
    id: number,
    username:string
}

interface IPost{
    id: number,
    title:string,
    desc: string,
    extra : IAuthor[] | ICategory[]; 
}

interface IPostBetter <T>{
    id:number;
    title:string;
    desc: string,
    extra:T[]
}
const testMe : IPostBetter<String> = {
    id:1,
    title:"title",
    desc:"desc",
    extra:["str" , "str2"],

};
const testM1 : IPostBetter<IAuthor> = {
    id:1,
    title:"title",
    desc:"desc",
    extra:[{id:1 , username:'author'}],

};