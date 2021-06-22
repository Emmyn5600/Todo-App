import './style.css';
import displayData from './print';
import { Project, Todo, clearField, addOption, toggleDone, deleteTodo, clearFieldPro } from './logic.js';
window.onload = function () {
	const title = document.getElementById('title');
	const description = document.getElementById('description');
	const duedate = document.getElementById('duedate');
	const addProject = document.getElementById('addProject');

	let todoItems = [];
	const projectName = [];
	let stored_todo = JSON.parse(localStorage.getItem('todos'));

	const form = document.querySelector('form');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const title = document.getElementById('title').value;
		const description = document.getElementById('description').value;
		const duedate = document.getElementById('duedate').value;
		const project = document.getElementById('project').value;

		if (title === '' || description === '' || duedate === '') {
			alert('Enter all fields');
		} else {
			const newTodo = new Todo(title, description, duedate, project);
			todoItems.push(newTodo);
			setItem('todos', todoItems);
			getItemFromLocalStorage('todos');

			clearField();
		}



	});

	addProject.addEventListener('click', (event) => {
		event.preventDefault();

		if (proTitle.value === '') {
			alert('add title');
		}
		else {
			const newProject = new Project(proTitle.value);
			projectName.push(newProject);
			addOption(newProject);

			clearFieldPro();
		}
		setItem('pros', projectName);


	});

	const list = document.querySelector('#content');
	list.addEventListener('click', (event) => {
		if (event.target.classList.contains('js-tick')) {
			const itemKey = event.target.parentElement.dataset.key;
			toggleDone(itemKey);

		}
		if (event.target.classList.contains('js-delete-todo')) {
			const itemKey = event.target.parentElement.dataset.key;
			deleteTodo(itemKey);
		}
	});




};