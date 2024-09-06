import style from "../styles/userInput.module.css";
import { useState, FormEvent } from "react";
import { ErrorPopUP } from "../util/resPopUp";
export default function AddingSubTodo({setAddToggle}:{setAddToggle: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [newTodo, setNewTodo] = useState("");
  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    if (newTodo) {
        console.log(newTodo)
    } else {
      ErrorPopUP("Oops! Please enter a task");
    }
  };
  return (
    <div className={style.subTodoContainer}>
      <div className={style.userInputBox}>
        <div className={style.userInputsSubBox}>
          <section className={style.userInputsHeading}>
            <h1>Add your Tasks</h1>
            <p>
              Add a task by typing in the input and clicking <b>save.</b>
            </p>
          </section>
          <div className={style.userInputFormBox}>
            <form onSubmit={handleSave}>
              <input
                type="text"
                name="todo"
                id="todo"
                placeholder="Enter a todo item"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
              />
             <div className={style.formButtons}>
                <button type="submit">save</button>
                <button onClick={()=>setAddToggle(false)}>Cancel</button>
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
