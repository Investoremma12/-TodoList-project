import './TodolistTextBar.css';
import { useTodolistText } from '../store/todolist';
export function TodolistTextBar() {
	const currentInput = useTodolistText((state) => state.currentInput);
	const setCurrentInput = useTodolistText((state) => state.setCurrentInput);
	const currentDate = useTodolistText((state) => state.currentDate);
	const setCurrentDate = useTodolistText((state) => state.setCurrentDate);
	const addTodo = useTodolistText((state) => state.addTodo);

	const changingText = (event) => {
		setCurrentInput(event.target.value);
	};
	const changingDate = (event) => {
		setCurrentDate(event.target.value);
	};
	const enterKeyAddTodo = (event) => {
		if (event.key === 'Enter') {
			addTodo();
		}
	};

	window.addEventListener('keydown', enterKeyAddTodo);
	return (
		<>
			<input
				className="todolist-text-input"
				type="text"
				placeholder="Add text"
				value={currentInput}
				onChange={changingText}
			/>
			<input type="date" value={currentDate} onChange={changingDate} />
			<button className="todolist-add-button" onClick={addTodo}>
				Add
			</button>
		</>
	);
}
