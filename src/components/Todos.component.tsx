import Todo from './Todo.component'
import style from '../styles/todos.module.css'
export default function Todos() {
  return (
    <div className={style.todos}>
      <Todo/>
      <Todo/>
      <Todo/>
      <Todo/>
      <Todo/>
      <Todo/>
      <Todo/>
    </div>
  )
}
