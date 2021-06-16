window.onload = function () {
	const title = document.getElementById('title');
	const description = document.getElementById('description')
	const duedate = document.getElementById('duedate')
	const priority = document.getElementById('priority')
	const btn = document.getElementsByClassName('button')
	const todoItems = [];
	const form = document.querySelector('form')

	const Todo = function (_title, _description, _duedate, _priority) {
		this._title = _title;
		this._description = _description;
		this._duedate = _duedate;
		this._priority = _priority;

	}
	function clearField() {
		title.value = '';
		description.value = "";
		duedate.value = '';
		priority.value = '';

	}


	form.addEventListener('submit', event => {
		event.preventDefault();
		const title = document.getElementById('title').value;
		const description = document.getElementById('description').value
		const duedate = document.getElementById('duedate').value
		const priority = document.getElementById('priority').value
		if (title === '' || description === '' || duedate === '' || priority === '') {
			alert("Enter all fields")
		}
		else {
			const newTodo = new Todo(title, description, duedate, priority)
			todoItems.push(newTodo);
			console.log(todoItems)
			clearField()
		}
	})



}

