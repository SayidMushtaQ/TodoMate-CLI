import Todo from './Todo.component'
import style from '../styles/todos.module.css'
import {useQuery} from '@tanstack/react-query'
import { getAllTodosHandler } from '../helpers/todoApi.helper'

import type { TodosRes } from '../types/todo'
export default function Todos() {
  const {data:todos,isLoading} = useQuery<TodosRes[]>({
    queryKey:['todos'],
    queryFn:getAllTodosHandler,
  })
  console.log(isLoading)
  console.log(todos)
  return (
    <div className={style.todos}>
      {todos && todos.map((item)=>(
        <Todo key={item._id} todo={item}/>
      ))}
    </div>
  )
}
