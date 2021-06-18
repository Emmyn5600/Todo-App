export default function displayData(todo) {
	const list = document.getElementById('content');
	const item = document.querySelector(`[data-key='${todo._id}']`);
	if (todo.deleted) {
		item.remove();
		return;
	}


	const isChecked = todo._checked ? 'done' : '';
	const node = document.createElement('li');
	node.setAttribute('class', `todo-item ${isChecked}`);
	node.setAttribute('data-key', todo._id);
	if (todo._project === "Default") {
		node.innerHTML = `

<span>Title:${todo._title}</span><br>
<span>${todo._description}</span><br>
<span>${todo._duedate}</span><br>
<label for = "${todo._id}" class = 'js-tick'>Checkbox</label>
<input id = "${todo._id}" type = "checkbox" ><br>
<button class="delete-todo js-delete-todo">Delete</button>
`;
	}
	else {
		node.innerHTML = `
<span>Project: ${todo._project}</span>
<span>Title:${todo._title}</span><br>
<span>${todo._description}</span><br>
<span>${todo._duedate}</span><br>
<label for = "${todo._id}" class = 'js-tick'>Checkbox</label>
<input id = "${todo._id}" type = "checkbox" ><br>
<button class="delete-todo js-delete-todo">Delete</button>`

	}
	if (item) {
		list.replaceChild(node, item);
	}
	else {
		list.append(node);
	}
}

