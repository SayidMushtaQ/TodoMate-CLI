/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useState } from "react";
import style from "../styles/todos.module.css";
import { FaCircleArrowDown } from "react-icons/fa6";
import clsx from "clsx";
import { IoMdAddCircleOutline } from "react-icons/io";
import AddingSubTodo from "./AddingSubTodo.component";
import {useQuery,UseQueryResult} from '@tanstack/react-query'
import {TodoType} from '../types/todo'
import { getAllSubTodosHandler } from "../helpers/todoApi.helper";
export default function Todo({todo}:{todo:TodoType}) {
  const [toggle, setToggle] = useState(false);
  const [addToglle, setAddToggle] = useState(false);
  const {data:subTodo,isLoading}:UseQueryResult<TodoType[]> = useQuery({
    queryKey:['subTodo',todo._id],
    queryFn:() => getAllSubTodosHandler(todo._id)
  })
  if(isLoading){
    return <p>Loading...</p>
  }
  
  return (
    <div className={style.todo}>
      <span>{todo.title}</span>
      <div>
        <div className={clsx(style.subTodos, { [style.openTodos]: toggle })}>
          {subTodo?.map((todo)=>(
            <label key={todo._id}>
              <input type="checkbox" name="option1" value="Option 1" />
              <span>{todo.title}</span>
            </label>
          ))}
          {!subTodo?.length&& (
            <p>You don&apos;t have any sub-todo</p>
          )
          }
        </div>

        {subTodo?.length && (
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
        )}
      </div>

      <div className={clsx(style.addingSubTodo,{[style.addingActionToggle]:toggle,[style.addSubTodoVisibility]:!subTodo?.length})}>
        <button
          aria-label="Adding"
          title="Add sub Todos"
          onClick={() => setAddToggle(true)}
        >
          <IoMdAddCircleOutline size={25} />
        </button>
      </div>
      {addToglle && <AddingSubTodo todoID={todo._id}/>}
    </div>
  );
}
