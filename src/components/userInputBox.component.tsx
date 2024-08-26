import style from "../styles/userInput.module.css";
export default function UserInputBox() {
  return (
    <div className={style.userInputBox}>
      <div className={style.userInputsSubBox}>
        <section className={style.userInputsHeading}>
          <h1>Add your Tasks</h1>
          <p>
            Add a task by typing in the input and clicking <b>save.</b>
          </p>
        </section>
        <div className={style.userInputFormBox}>
          <form action="#">
            <input
              type="text"
              name="todo"
              id="todo"
              placeholder="Enter a todo item"
            />
            <button>save</button>
          </form>
        </div>
      </div>
    </div>
  );
}
