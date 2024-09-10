import Todo from './Todo.component'
import style from '../styles/todos.module.css'
import {useQuery} from '@tanstack/react-query'
import { getAllTodosHandler } from '../helpers/todoApi.helper'

import type { TodoType } from '../types
export default function Todos() {/todo'
  const {data:todos,isLoading} = useQuery<TodoType[]>({
    queryKey:['todos'],
    queryFn:getAllTodosHandler,
  })

  if(isLoading){
    return(
      <p>Loading...</p>
    )
  }

  return (
    <div className={style.todos}>
      {todos?.map((todo)=>(
        <Todo key={todo._id} todo={todo}/>
      ))}
    </div>
  )
}
