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
