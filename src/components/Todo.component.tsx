import style from "../styles/todos.module.css";
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
      <div className={style.todoBottomBlur}/>
    </div>
  );
}
