// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {title, id} = todoDetails

  const onClickDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="todo-item-container">
      <p className="todo-item-h">{title}</p>
      <button
        className="todo-item-btn"
        type="button"
        onClick={onClickDeleteButton}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
