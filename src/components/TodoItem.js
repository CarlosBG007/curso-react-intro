import "../styles/TodoItem.css";
import { CompleteIcon } from "../components/CompleteIcon.js";
import { DeleteIcon } from "../components/DeleteIcon.js";

function TodoItem({ item, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      {/* <span onClick={onComplete} className={`
        Icon Icon-check
        ${item.completed && 'Icon-check--active'}`}>
          V
        </span> */}
      <CompleteIcon onComplete={onComplete} completed={item.completed} />
      <p
        className={`TodoItem-p 
        ${item.completed && "TodoItem-p--complete"} `}
      >
        {item.text}
      </p>
      {/* <span onClick={onDelete} className='Icon Icon-delete'>
          X
        </span> */}
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
