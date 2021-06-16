window.onload = function () {
	const title = document.getElementById('title');
	const description = document.getElementById('description')
	const duedate = document.getElementById('duedate')

	const btn = document.getElementsByClassName('button')
	const todoItems = [];
	const form = document.querySelector('form')

	const todo = function (_title, _description, _duedate, _priority) {
		this._title = _title;
		this._description = _description;
		this._duedate = _duedate;
		this.checked = false;
		this.id = Date.now();


	}
	function clearField() {
		title.value = '';
		description.value = "";
		duedate.value = '';


	}

	const displayData = function (todo) {
		const list = document.getElementById('content');
		const isChecked = todo.checked ? 'done' : '';
		const node = document.createElement('li');
		node.setAttribute('class', `todo-item ${isChecked}`);
		node.setAttribute('data-key', todo.id);
		node.innerHTML = `

<span>Title:${todo.title}</span><br>
<span>${todo.description}</span><br>
<span>${todo.duedate}</span><br>
<label for = "${todo.id}">Checkbox</label>
<input id = "${todo.id}" type = "checkbox"><br>
<button>Delete</button>
`
		list.append(node);
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
			clearField()
		}
		displayData(todoItems);
	})



}

