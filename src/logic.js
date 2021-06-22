import { v4 as uuidv4 } from 'uuid';

const proTitle = document.getElementById('project-input');

class Project {
	constructor(title) {
		this.title = title;
		this.tasks = [];
		this.head_id = uuidv4();
		this.body_id = uuidv4();
	}
	allProjects = [{ name: 'Example project', tasks: [{ name: 'example task' }] }];
}

const Todo = function (name, date, priority) {
	this.name = name;
	this.date = date;
	this.priority = priority;
	this.id = uuidv4();
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