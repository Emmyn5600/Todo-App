export default function displayData(todo) {
	const list = document.getElementById('content');
	const item = document.querySelector(`[data-key='${todo.id}']`);
	if (todo.deleted) {
		item.remove();
		return;
	}

	const isChecked = todo.checked ? 'done' : '';
	const node = document.createElement('li');
	node.setAttribute('class', `todo-item ${isChecked}`);
	node.setAttribute('data-key', todo.id);
	if (todo.project === 'Defualt') {
		node.innerHTML += `
<span>Project: ${todo.project}</span>
<span>Title:${todo.title}</span><br>
<span>${todo.description}</span><br>
<span>${todo.duedate}</span><br>
<label for = "${todo.id}" class = 'js-tick'>Checkbox</label>
<input id = "${todo.id}" type = "checkbox" ><br>
<button class="delete-todo js-delete-todo">Delete</button>
`;
	} else {
		node.innerHTML = `
<span>Project: ${todo.project}</span>
<span>Title:${todo.title}</span><br>
<span>${todo.description}</span><br>
<span>${todo.duedate}</span><br>
<label for = "${todo.id}" class = 'js-tick'>Checkbox</label>
<input id = "${todo.id}" type = "checkbox" ><br>
<button class="delete-todo js-delete-todo">Delete</button>`;
	}
	if (item) {
		list.replaceChild(node, item);
	} else {
		list.append(node);
	}
}
