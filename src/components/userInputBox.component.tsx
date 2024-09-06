import { FormEvent, useState } from "react";
import style from "../styles/userInput.module.css";
import { useMutation } from "@tanstack/react-query";
import { createNewTodoHandler } from "../helpers/todoApi.helper";
import { ErrorPopUP } from "../util/resPopUp";

export default function UserInputBox() {
  const [newTodo, setNewTodo] = useState("");
  const {mutate} = useMutation({
    mutationKey: ["addNewTodo"],
    mutationFn: createNewTodoHandler,
  });
  const handleSave = (e:FormEvent) => {
    e.preventDefault()
    if(newTodo){
      mutate({title:newTodo})
    }else{
      ErrorPopUP("Oops! Please enter a task")
    }
  };
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
          <form onSubmit={handleSave}>
            <input
              type="text"
              name="todo"
              id="todo"
              placeholder="Enter a todo item"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <button type="submit">save</button>
          </form>
        </div>
      </div>
    </div>
  );
}
