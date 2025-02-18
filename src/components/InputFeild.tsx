import './styles.css'

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>> // (todo: string) => void
  handleAdd: (e: React.FormEvent) => void; //function type
}

const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      <input type="input" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter a task" className="input_box" />
      <button className="input_submit" type="submit">Go</button>
    </form>
  )
}

export default InputFeild