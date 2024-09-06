import { useState } from "react";
import style from "../styles/todos.module.css";
import { FaCircleArrowDown } from "react-icons/fa6";
import clsx from "clsx";
import { TodosRes } from "../types/todo";
export default function Todo({ todo }: { todo: TodosRes }) {
  const [toggle, setToggle] = useState(false);
  console.log(todo.subTodos);
  return (
    <div className={style.todo}>
      <span>{todo.title}</span>
      {todo.subTodos.length !== 0 && (
        <>
          <div className={clsx(style.subTodos, { [style.openTodos]: toggle })}>
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
          <div
            onClick={() => setToggle(!toggle)}
            className={clsx(style.todoBottomDefault, {
              [style.todoBottomOnBlur]: !toggle,
            })}
          >
            <FaCircleArrowDown
              size={22}
              color="4c4a4a"
              className={clsx(style.bottomBlurAction, {
                [style.blurActionToggle]: toggle,
              })}
              aria-label="Card drop down"
            />
          </div>
        </>
      )}
    </div>
  );
}
