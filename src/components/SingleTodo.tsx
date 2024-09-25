import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'

interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: (todos: Todo[]) => void
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

  // const handleDone = (id: number) => {
  //   setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  // }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, todo: editTodo } : todo))
    setEdit(false)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <form className='todos_single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input type="text" ref={inputRef} className='todos_single--text' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
      ) :
        todo.isDone ? (
          <span className='todos_single--text'>{todo.todo}</span>
        ) : (
          <span className='todos_single--text'>{todo.todo}</span>
        )}
      <div>
        <span className='icon' onClick={() => !edit && !todo.isDone ? setEdit(!edit) : null}>
          <AiFillEdit />
        </span>
        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={(e) => handleEdit(e, todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo