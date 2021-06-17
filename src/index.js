import './style.css';
import displayData from './print.js'
window.onload = function () {
	const title = document.getElementById('title');
	const description = document.getElementById('description')
	const duedate = document.getElementById('duedate')

	const btn = document.getElementsByClassName('button')
	let todoItems = [];
	const form = document.querySelector('form')

	const todo = function (_title, _description, _duedate, _priority) {
		this._title = _title;
		this._description = _description;
		this._duedate = _duedate;
		this._checked = false;
		this._id = Date.now();


	}
	function clearField() {
		title.value = '';
		description.value = "";
		duedate.value = '';


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

		if (title === '' || description === '' || duedate === '') {
			alert("Enter all fields")
		}
		else {
			const newTodo = new todo(title, description, duedate)
			todoItems.push(newTodo);
			displayData(newTodo);
			console.log(newTodo);
			clearField()
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

