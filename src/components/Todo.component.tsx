import { useState } from "react";
import style from "../styles/todos.module.css";
import { FaCircleArrowDown } from "react-icons/fa6";
import clsx from 'clsx'
export default function Todo() {
  const [toggle,setToggle] = useState(false);
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
      <div onClick={()=>setToggle(!toggle)} className={style.todoBottomBlur}>
        <FaCircleArrowDown size={22} color="4c4a4a"/>
      </div>
    </div>
  );
}
