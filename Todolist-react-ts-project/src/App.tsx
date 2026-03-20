import { TodolistTextBar } from './component/TodolistTextBar';
import { Todolist } from './component/Todolist';
import './App.css';

function App() {
	return (
		<>
			<div className="app-container">
				<div className="todolist-add-container">
					<TodolistTextBar />
				</div>
				<Todolist />
			</div>
		</>
	);
}

export default App;
