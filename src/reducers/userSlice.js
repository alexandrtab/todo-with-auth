import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {
		firstName: "",
		lastName: "",
		username: "",
		password: "",
		image: null,
	},
	todos: [],
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		registerUser: (state, action) => {
			state.user = {
				...state.user,
				...action.payload,
			};
		},
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		editTodo: (state, action) => {
			const { id, title, description } = action.payload;
			state.todos = state.todos.map((todo) =>
				todo.id === id ? { ...todo, title, description } : todo
			);
		},
		deleteTodo: (state, action) => {
			const todoId = action.payload;
			state.todos = state.todos.filter((todo) => todo.id !== todoId);
		},
	},
});

export const { registerUser, addTodo, editTodo, deleteTodo } =
	userSlice.actions;

export default userSlice.reducer;
