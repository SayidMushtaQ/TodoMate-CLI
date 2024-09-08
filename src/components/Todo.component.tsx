/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import style from "../styles/todos.module.css";
import { FaCircleArrowDown } from "react-icons/fa6";
import clsx from "clsx";
import { TodosRes } from "../types/todo";
import { IoMdAddCircleOutline } from "react-icons/io";
import AddingSubTodo from "./AddingSubTodo.component";
import { useMutation } from "@tanstack/react-query";
import { getAllSubTodosHandler } from "../helpers/todoApi.helper";
export default function Todo({ todo }: { todo: TodosRes }) {
  const [toggle, setToggle] = useState(false);
  const [addToglle,setAddToggle] = useState(false);
  const {mutate,data:subTodos} = useMutation({ /*Better to use useQuery */
    mutationFn:getAllSubTodosHandler
  })
  useEffect(()=>{
      const todoID = todo._id
      mutate(todoID)
  },[todo._id,mutate]);
  return (
    <div className={style.todo}>
      <span>{todo.title}</span>
      {subTodos && subTodos.map((item:unknown,index:any)=>(
        <div key={index}>
              <div className={clsx(style.subTodos, { [style.openTodos]: toggle })}>
            <label>
              <input type="checkbox" name="option1" value="Option 1" />
              <span> Lorem, ipsum dolor. </span>
            </label>
          </div>
          <div
            className={clsx(style.todoBottomDefault, {
              [style.todoBottomOnBlur]: !toggle,
            })}
          >
            <FaCircleArrowDown
              size={22}
              color="4c4a4a"
              onClick={() => setToggle(!toggle)}
              className={clsx(style.bottomBlurAction, {
                [style.blurActionToggle]: toggle,
              })}
              aria-label="Card drop down"
            />
          </div>
        </div>
      ))}
    
        {toggle && 
        <div className={style.addingSubTodo}>
          <button aria-label="Adding" title="Add sub Todos" onClick={()=>setAddToggle(true)}>
            <IoMdAddCircleOutline size={23}/>
          </button>
        </div>
        }
      {addToglle && <AddingSubTodo setAddToggle={setAddToggle} todoID={todo._id}/>}
    </div>
  );
}
