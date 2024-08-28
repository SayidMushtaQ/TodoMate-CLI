import style from "../styles/todos.module.css";
import { FaCircleArrowDown } from "react-icons/fa6";

export default function Todo() {
  return (
    <div className={style.todo}>
      <span>Add project details</span>
      <div className={style.subTodos}>
        <label>
          <input type="checkbox" name="option1" value="Option 1" />
          <span> Lorem, ipsum dolor. </span>
        </label>
      </div>
      <div className={style.todoBottomBlur}>
        <FaCircleArrowDown size={22} color="4c4a4a"/>
      </div>
    </div>
  );
}
