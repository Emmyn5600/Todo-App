import './style.css';
import displayData from './print';
import { set } from 'lodash';

window.onload = function () {
	const title = document.getElementById('title');
	const description = document.getElementById('description');
	const duedate = document.getElementById('duedate');
	const addProject = document.getElementById('addProject');
	const proTitle = document.getElementById('project-input');
	let todoItems = [];
	const projectName = [];
	let stored_todo = JSON.parse(localStorage.getItem('todos'));
	const form = document.querySelector('form');
	const Project = function (title) {
		this.title = title;
	};

	const Todo = function (title, description, duedate, project = 'defualt') {
		this.title = title;
		this.description = description;
		this.duedate = duedate;
		this.checked = false;
		this.project = project;
		this.id = Date.now();
	};

	function clearField() {
		title.value = '';
		description.value = '';
		duedate.value = '';
	}
	function clearFieldPro() {
		proTitle.value = '';
	}
	const addOption = function (pro) {
		const selectOption = document.getElementById('project');

		const opt = document.createElement('option');
		opt.value = pro.title;
		opt.innerHTML = pro.title;
		selectOption.append(opt);
	};

	const toggleDone = function (key) {
		const index = todoItems.findIndex((item) => item.id === Number(key));
		todoItems[index].checked = !todoItems[index].checked;
		displayData(todoItems[index]);
	};
	const deleteTodo = function (key) {
		const index = todoItems.findIndex((item) => item.id === Number(key));
		const todo = {
			deleted: true,
			...todoItems[index],
		};
		todoItems = todoItems.filter((item) => item.id !== Number(key));
		displayData(todo);
	};

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

			displayData(newTodo);

			console.log(newTodo);
			clearField();
		}
		setItem('todos', todoItems);

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
		getItemFromLocalStorage('pros');

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

	//trying for accessing data from local storage
	const getItemFromLocalStorage = function (names) {
		let project_name = JSON.parse(localStorage.getItem(names));
		//	let todos_item = JSON.parse(localStorage.getItem('todos'));
		const project_list = document.createElement('li');
		const lists = document.getElementById('content');
		for (let i = 0; i < project_name.length; i++) {
			project_list.innerHTML += project_name[i].title;
			lists.appendChild(project_list);
			console.log(project_name);
		}
	}
	const setItem = function (name, arr) {
		localStorage.setItem(name, JSON.stringify(arr));

	}
	displayData(stored_todo);
};