const proTitle = document.getElementById('project-input');

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
export { Project, Todo, clearField, addOption, toggleDone, deleteTodo, clearFieldPro }