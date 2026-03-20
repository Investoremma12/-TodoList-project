import redDeleteIcon from '../assets/delete.png';
import { useTodolistText } from '../store/todolistStore';
import './Todolist.css';

export function Todolist() {
	const todolist = useTodolistText((state) => state.todolist);
	const deleteTodo = useTodolistText((state) => state.deleteTodo);

	return (
		<>
			{todolist.map((todo) => (
				<div className="todolist">
					<div className="todolist-date-text">
						<h3 className="todolist-text">{todo.text}</h3>
						<p className="todolist-date">{todo.date}</p>
					</div>

					<img
						src={redDeleteIcon}
						alt="a red delete icon"
						className="delete-icon"
						onClick={() => deleteTodo(todo.id)}
					/>
				</div>
			))}
		</>
	);
}
