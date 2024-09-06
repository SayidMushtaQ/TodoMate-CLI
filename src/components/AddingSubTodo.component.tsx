import style from "../styles/userInput.module.css";
import { useState, FormEvent } from "react";
import { ErrorPopUP, SuccessPopUp } from "../util/resPopUp";
import {useMutation} from '@tanstack/react-query'
import { createNewSubTodoHandler } from "../helpers/todoApi.helper";
export default function AddingSubTodo({setAddToggle,todoID}:{setAddToggle: React.Dispatch<React.SetStateAction<boolean>>;todoID:string}) {
  const [newSubTodo, setNewTodo] = useState("");
  const {mutate} = useMutation({
    mutationFn:createNewSubTodoHandler,
    onSuccess:()=>{
      SuccessPopUp("New Sub-todo Added Succesfully 🚀🚀")
    }
  })
  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    if (newSubTodo) {
        mutate({newSubTodo,todoID})
    } else {
      ErrorPopUP("Oops! Please enter a task");
    }
  };
  return (
    <div className={style.subTodoContainer}>
      <div className={style.userInputBox}>
        <div className={style.userInputsSubBox}>
          <section className={style.userInputsHeading}>
            <h1>Add your Sub Tasks</h1>
            <p>
              Add a sub-task by typing in the input and clicking <b>save.</b>
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
                value={newSubTodo}
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
