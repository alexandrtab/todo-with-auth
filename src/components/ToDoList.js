import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "../reducers/userSlice";
import "../styles/todo-list.scss";

function ToDoList() {
	const todos = useSelector((state) => state.user.todos);
	const dispatch = useDispatch();
	const [todoData, setTodoData] = useState({ title: "", description: "" });
	const [editingTodoId, setEditingTodoId] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setTodoData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleAddTodo = () => {
		if (todoData.title.trim() === "" || todoData.description.trim() === "") {
			return;
		}
		dispatch(
			addTodo({ title: todoData.title, description: todoData.description })
		);

		setTodoData({ title: "", description: "" });
	};

	const handleEditTodo = (todoId) => {
		setEditingTodoId(todoId);
		const todoToEdit = todos.find((todo) => todo.id === todoId);
		if (todoToEdit) {
			setTodoData({
				title: todoToEdit.title,
				description: todoToEdit.description,
			});
		}
	};

	const handleSaveEdit = () => {
		dispatch(
			editTodo({
				id: editingTodoId,
				title: todoData.title,
				description: todoData.description,
			})
		);
		setEditingTodoId(null);
		setTodoData({ title: "", description: "" });
	};

	const handleDeleteTodo = (todoId) => {
		console.log(todoId);
		dispatch(deleteTodo(todoId));
	};

	return (
		<div className="todo-list">
			<h2>ToDo List</h2>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						{editingTodoId === todo.id ? (
							<>
								<input
									type="text"
									name="title"
									value={todoData.title}
									onChange={handleInputChange}
								/>
								<input
									type="text"
									name="description"
									value={todoData.description}
									onChange={handleInputChange}
								/>
								<button onClick={handleSaveEdit}>Save</button>
							</>
						) : (
							<>
								<h3>{todo.title}</h3>
								<p>{todo.description}</p>
								<button onClick={() => handleEditTodo(todo.id)}>Edit</button>
							</>
						)}
						<button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
			<input
				type="text"
				name="title"
				value={todoData.title}
				onChange={handleInputChange}
				placeholder="Title"
			/>
			<input
				type="text"
				name="description"
				value={todoData.description}
				onChange={handleInputChange}
				placeholder="Description"
			/>
			<button className="add-todo-button" onClick={handleAddTodo}>
				Add ToDo
			</button>
		</div>
	);
}

export default ToDoList;
