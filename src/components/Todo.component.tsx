import { useEffect, useState } from "react";
import style from "../styles/todos.module.css";
import { FaCircleArrowDown } from "react-icons/fa6";
import clsx from 'clsx'
import axios from "axios";
export default function Todo() {
  const [toggle,setToggle] = useState(false);
  useEffect(()=>{
     const fetchTodos = async()=>{
      try{
        const todos = await axios.get('/api/todo/todos',{withCredentials:true});
        console.log(todos)
      }catch(err){
        console.log(err);
      }
     }
     fetchTodos()
  },[])
  return (
    <div className={style.todo}>
      <span>Add project details</span>
      <div className={clsx(style.subTodos,{[style.openTodos]:toggle})}>
        <label>
          <input type="checkbox" name="option1" value="Option 1" />
          <span> Lorem, ipsum dolor. </span>
        </label>
        <label>
          <input type="checkbox" name="option1" value="Option 1" />
          <span> Lorem, ipsum dolor. </span>
        </label>
        <label>
          <input type="checkbox" name="option1" value="Option 1" />
          <span> Lorem, ipsum dolor. </span>
        </label>
        <label>
          <input type="checkbox" name="option1" value="Option 1" />
          <span> Lorem, ipsum dolor. </span>
        </label>
        <label>
          <input type="checkbox" name="option1" value="Option 1" />
          <span> Lorem, ipsum dolor. </span>
        </label>
      </div>
      <div onClick={()=>setToggle(!toggle)} className={clsx(style.todoBottomDefault,{[style.todoBottomOnBlur]: !toggle})}>
        <FaCircleArrowDown size={22} color="4c4a4a" className={clsx(style.bottomBlurAction,{[style.blurActionToggle]:toggle})} aria-label="Card drop down"/>
      </div>
    </div>
  );
}
