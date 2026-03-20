import { create } from 'zustand';

export const useTodolistText = create((set) => ({
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

// export const useTodolistDate = create((set) => ({
// 	currentInput: '',
// 	todolistDate: [],

// 	setCurrentInput: (value) => set({ currentInput: value }),

// 	addTodoDate: () =>
// 		set((state) => ({
// 			todolistDate: [...state.todolistDate, state.currentInput],
// 			currentInput: '',
// 		})),
// }));
