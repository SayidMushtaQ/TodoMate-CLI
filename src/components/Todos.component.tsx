import Todo from './Todo.component'
import style from '../styles/todos.module.css'
import {useQuery} from '@tanstack/react-query'
import { getAllTodosHandler } from '../helpers/todoApi.helper'
export default function Todos() {
  const {data:todos} = useQuery({
    queryKey:['todos'],
    queryFn:getAllTodosHandler,
  })
  console.log(todos)
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
