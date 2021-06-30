/**
 * @jest-environment jsdom
 */

import {
	localstorage1, Createlist1, Createtask1, deletetasklogic,
	checkboxfalse, checkboxtrue, createtask, createlist, edittaskform,
} from './src/logic';
describe('Creating tasks and lists', () => {
	test('List Creation', () => {
		const newlist = new Createlist1('Newlist');
		expect(new Createlist1('Newlist')).toBeInstanceOf(Createlist1);
		expect(new Createlist1('Newlist')).not.toBeInstanceOf(Createtask1);
		expect(newlist.list).toBe('Newlist');
		expect(newlist.list).not.toBe('Xyz');

	});

	test('Task Creation', () => {
		const task = new Createtask1('12-05-2021', 'Newtask', 'Nothing', 'High', false);
		expect(new Createtask1('12-05-2021', 'Newtask', 'Nothing', 'High', false)).toBeInstanceOf(Createtask1);
		expect(task.date).toBe('12-05-2021');
		expect(task.date).not.toBe('16-02-2021');
		expect(task.task).toBe('Newtask');
		expect(task.task).not.toBe('Random');
		expect(task.description).toBe('Nothing');
		expect(task.description).not.toBe('Random');
		expect(task.priority).toBe('High');
		expect(task.priority).not.toBe('Random');
		expect(task.status).toBeFalsy();
		expect(task.status).not.toBeTruthy();
	});
});

describe('Setting localstorage up using json values', () => {
	test('set localstorage up without an element and comparing', () => {
		const liststasks = [];
		expect(localstorage1()).toEqual(liststasks);
		expect(localstorage1()).not.toEqual([1, 2]);
	});

	test('set localstorage up with an element and strigify it', () => {
		const liststasks = [1, 2];
		localStorage.setItem('liststore', JSON.stringify(liststasks));
		expect(localstorage1()).toEqual(liststasks);
		expect(localstorage1()).not.toEqual([]);

		localStorage.clear();
	});
});
describe('Setting localstorage up and using multiple operations on the same', () => {
	test('test & splice the first element in the objects array', () => {
		const liststasks = [{
			todos: [{ description: 'sjs', priority: 'Medium', status: false },
			{ description: 'none', priority: 'Medium', status: true },
			{ description: 'sjs', priority: 'Medium', status: false }],
		}];

		const liststasksupdated = [{
			todos: [{ description: 'none', priority: 'Medium', status: true },
			{ description: 'sjs', priority: 'Medium', status: false }],
		}];

		deletetasklogic(0, 0, liststasks);

		expect(liststasks).toEqual(liststasksupdated);
		expect(liststasks).not.toEqual([]);
	});

	test('Change status which was false to true', () => {
		const liststasks = [{ todos: [{ description: 'sjs', priority: 'Medium', status: false }] }];

		const liststasksupdated = [{ todos: [{ description: 'sjs', priority: 'Medium', status: true }] }];

		checkboxtrue(liststasks, 0, 0);

		expect(liststasks).toEqual(liststasksupdated);
		expect(liststasks).not.toEqual([]);
	});

	test('Change status which was true to false', () => {
		const liststasks = [{ todos: [{ description: 'sjs', priority: 'Medium', status: true }] }];

		const liststasksupdated = [{ todos: [{ description: 'sjs', priority: 'Medium', status: false }] }];

		checkboxfalse(liststasks, 0, 0);

		expect(liststasks).toEqual(liststasksupdated);
		expect(liststasks).not.toEqual([]);
	});
});

describe('Create a list and push to localstorage', () => {
	test('initialize a list and push it ', () => {
	  const listtaks = 'cool';
	  createlist(listtaks);
	  const list = localstorage1();
	  expect(list.length).toEqual(1);
	  expect(list.length).not.toEqual(2);
	  localStorage.clear();
	});
  });

describe('Create a task and push the selected list on localstorage', () => {
	createlist('list');
	localStorage.setItem('selectedlist', 'list');
	createtask('21-12-2021', 'task', 'cool', 'High');
	const list = localstorage1();
	test('initialize a list and push a task to it ', () => {
	  expect(list[0].todos.length).toEqual(1);
	  expect(list[0].todos.length).not.toEqual(2);
	});
	localStorage.clear();
  });

describe('Create a task and edit it', () => {
	createlist('list');
	localStorage.setItem('selectedlist', 'list');
	localStorage.setItem('selectedtask', 0);
	createtask('21-12-2021', 'task', 'cool', 'High');
	edittaskform('21-12-2021', 'Task-edited-well', 'cool', 'Low');
	const list = localstorage1();
	test('initialize a list and push a task to it ', () => {
	  expect(list[0].todos[0].task).toEqual('Task-edited-well');
	  expect(list[0].todos[0].task).not.toEqual('any text');
	});
	localStorage.clear();
  });
  