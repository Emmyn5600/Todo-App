const project = function (title) {
	this.title = title;
}
class todo {
	constructor(_title, _description, _duedate, _project = "defualt") {
		this._title = _title;
		this._description = _description;
		this._duedate = _duedate;
		this._checked = false;
		this._project = _project;
		this._id = Date.now();


	}
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

export { project, todo, clearField, clearFieldPro, addOption, toggleDone, deleteTodo }