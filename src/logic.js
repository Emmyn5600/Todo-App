import { v4 as uuidv4 } from 'uuid';

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

export {
  Project, Todo,
};