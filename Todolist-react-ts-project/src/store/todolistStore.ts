import { create } from 'zustand';

interface TodoState {
	currentInput: string;
	currentDate: string;
	todolist: { id: string; text: string; date: string }[];
	setCurrentInput: (value: string) => void;
	setCurrentDate: (value: string) => void;
	addTodo: () => void;
	deleteTodo: (id: string) => void;
}

export const useTodolistText = create<TodoState>((set) => ({
	currentInput: '',
	currentDate: '',
	todolist: [],

	setCurrentInput: (value) => set({ currentInput: value }),
	setCurrentDate: (value) => set({ currentDate: value }),

	addTodo: () =>
		set((state) => {
			if (state.currentInput.trim() === '') {
				return state;
			} else if (state.currentDate === '' || state.currentInput === '') {
				return state;
			}

			return {
				todolist: [
					...state.todolist,
					{
						id: crypto.randomUUID(),
						text: state.currentInput,
						date: state.currentDate,
					},
				],
				currentInput: '',
				currentDate: '',
			};
		}),

	deleteTodo: (id) =>
		set((state) => {
			const newTodoList = state.todolist.filter((todo) => todo.id !== id);

			return {
				todolist: newTodoList,
			};
		}),
}));
