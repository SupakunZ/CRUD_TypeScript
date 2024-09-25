import React from 'react'
import './styles.css'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
  todos: Todo[],
  setTodos: (todos: Todo[]) => void
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className='todos'>
      {todos.map((todo) => {
        return <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      })}
    </div>
  )
}

export default TodoList