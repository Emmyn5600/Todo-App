import './style.css';
import displayData from './print.js'
import { selector } from 'postcss-selector-parser';
window.onload = function () {
	const title = document.getElementById('title');
	const description = document.getElementById('description')
	const duedate = document.getElementById('duedate')
	const addProject = document.getElementById('addProject');
	const btn = document.getElementById('addList');
	const proTitle = document.getElementById('project-input');
	let todoItems = [];
	let projectName = [];
	const form = document.querySelector('form')
	const project = function (title) {
		this.title = title;


	}

	const todo = function (_title, _description, _duedate, _project = "defualt") {
		this._title = _title;
		this._description = _description;
		this._duedate = _duedate;
		this._checked = false;
		this._project = _project;
		this._id = Date.now();


	}
	function clearField() {
		title.value = '';
		description.value = "";
		duedate.value = '';



	}
	function clearFieldPro() {
		proTitle.value = '';
	}
	const addOption = function (pro) {
		const selectOption = document.getElementById('project')

		const opt = document.createElement('option');
		opt.value = pro.title
		opt.innerHTML = pro.title;
		selectOption.append(opt);



	}


	const toggleDone = function (key) {
		const index = todoItems.findIndex(item => item._id === Number(key));
		todoItems[index]._checked = !todoItems[index]._checked;
		displayData(todoItems[index]);

	}
	const deleteTodo = function (key) {
		const index = todoItems.findIndex(item => item._id === Number(key));
		const todo = {
			deleted: true,
			...todoItems[index]
		};
		todoItems = todoItems.filter(item => item._id !== Number(key));
		displayData(todo);
	}

	form.addEventListener('submit', event => {
		event.preventDefault();
		const title = document.getElementById('title').value;
		const description = document.getElementById('description').value
		const duedate = document.getElementById('duedate').value
		const project = document.getElementById('project').value



		if (title === '' || description === '' || duedate === '') {
			alert("Enter all fields")
		}
		else {
			const newTodo = new todo(title, description, duedate, project)
			todoItems.push(newTodo);

			displayData(newTodo, project);
			console.log(newTodo);
			clearField()
		}

	})


	addProject.addEventListener('click', event => {
		event.preventDefault();

		if (proTitle.value === '') {
			alert("add title")
		}
		else {
			const newProject = new project(proTitle.value);
			projectName.push(newProject)
			console.log(projectName);
			addOption(newProject);
			clearFieldPro();
		}




	})






	const list = document.querySelector('#content')
	list.addEventListener('click', event => {
		if (event.target.classList.contains('js-tick')) {
			const itemKey = event.target.parentElement.dataset.key;
			toggleDone(itemKey);
			console.log(todoItems);
		}
		if (event.target.classList.contains('js-delete-todo')) {
			const itemKey = event.target.parentElement.dataset.key;
			deleteTodo(itemKey);

		}

	});


}

