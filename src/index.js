import './style.css';
import { v4 as uuidv4 } from 'uuid';
import { Project, Todo } from './logic.js';
import {
  setDisplayNone, storeProjectInLocalStorage, storeTaskInLocalStorage, removeProjectFromLocalStorage, deleteTask,
} from './addProject';

const proj = new Project();
window.onload = function () {
  const content = document.getElementById('content');
  const nameInput = document.createElement('input');
  const addButton = document.createElement('button');
  const div = document.createElement('div');
  addButton.innerHTML = '<span style="font-size:18px;font-weight:700;color:#000;border-radius:6px;width:170px;height:40px;text-transform:uppercase;margin-bottom:20px;background-color:#daf6e6;">Add Project</span>';
  nameInput.placeholder = 'Enter Project title';
  div.classList.add('pros');
  div.append(addButton, nameInput);
  content.appendChild(div);
  addButton.addEventListener('click', () => {
    if (nameInput.value === '') {
      const errorMessage = document.createElement('div');
      errorMessage.innerText = 'Please add the title of the project';
      errorMessage.classList.add('error');
      content.appendChild(errorMessage);
      setTimeout(() => {
        errorMessage.innerText = '';
      }, 3000);
    } else {
      const myProject = new Project(nameInput.value);
      proj.allProjects.push(myProject);
      storeProjectInLocalStorage(myProject);
      const myProjects = JSON.parse(localStorage.getItem('projects'));
      const card = document.createElement('div');
      card.classList.add('pro-card');
      const cardBodyId = uuidv4();
      proj.allProjects.forEach((project) => {
        card.innerHTML = `
<div class = 'card-title'>
<h5>Project name: ${project.title}</h5>
<button class = "add-task btn btn-success" data='${myProject.head_id}'><span style="font-size:15px;font-weight:700;color:#000;border-radius:6px;width:170px;height:40px;text-transform:uppercase;margin-bottom:20px;">Add Task</span></button>
<button class = "delete-task btn btn-danger" data= '${myProject.body_id}'><span style="font-size:15px;font-weight:700;color:#000;border-radius:6px;width:170px;height:40px;text-transform:uppercase;margin-bottom:20px;">Delete Project</span></button>
</div>
<div class = 'card-body' data='${cardBodyId}'>
</div>
`;
      });
      content.appendChild(card);
      const deleteBtn = document.querySelector(`[data = '${myProject.body_id}']`);
      nameInput.value = '';
      deleteBtn.addEventListener('click', (e) => {
        removeProjectFromLocalStorage(myProject);
        e.target.parentElement.parentElement.remove();
      });
      const addBtn = document.querySelector(`[data = '${myProject.head_id}']`);
      addBtn.addEventListener('click', () => {
        const submitId = uuidv4();
        const inputId = uuidv4();
        const priorityId = uuidv4();
        const dateId = uuidv4();

        const cardBody = document.querySelector(`[data = '${cardBodyId}']`);
        cardBody.innerHTML = ` 
<form type = 'submit' >
<input type = 'text' Placeholder = 'Enter a task' class = 'task-input' data = '${inputId}'>
 <input type='date' class='dateInput' data='${dateId}'> 
                <select name='priority' class='priority' data='${priorityId}'>
                    <option value='low'>Low</option>
                    <option value='high'>High</option>
                </select> 
            <button type ='submit' class='submit-form' data='${submitId}'><span style="font-size:20px;font-weight:700;color:#000;border-radius:6px;width:170px;height:40px;text-transform:uppercase;margin-bottom:20px;background-color:#daf6e6;">Submit</span></button>
 </form>
`;
        const submitForm = document.querySelector(`[data = '${submitId}']`);
        const taskInput = document.querySelector(`[data = '${inputId}']`);
        const priority = document.querySelector(`[data = '${priorityId}']`);
        const dateInput = document.querySelector(`[data='${dateId}']`);
        submitForm.addEventListener('click', (e) => {
          e.preventDefault();
          if (taskInput.value === '' || dateInput.value === '') {
            const errDiv = document.createElement('div');
            errDiv.innerText = 'Please fill all fields';
            errDiv.classList.add('error');
            content.appendChild(errDiv);
            setTimeout(() => {
              errDiv.innerText = '';
            }, 3000);
          } else {
            const myTask = new Todo(taskInput.value, dateInput.value, priority.value);
            myProjects.forEach((proj) => {
              if (proj.head_id === myProject.head_id) {
                storeTaskInLocalStorage(myTask, myProject);
                setDisplayNone(taskInput, priority, submitForm, dateInput);
                const myProjectWithTasks = JSON.parse(localStorage.getItem('projects'));
                const itemId = uuidv4();

                myProjectWithTasks.forEach((myProj) => {
                  if (myProj.head_id === myProject.head_id) {
                    myProj.tasks.forEach((task) => {
                      cardBody.innerHTML += `
                                    <div class='card-item' data=${itemId}>${task.name} | Due date: ${task.date} | priority: ${task.priority}<button class='btn btn-danger deleteBtn' data=${task.id}>Delete</button></div>
                                `;
                    });
                    document.querySelectorAll('.deleteBtn').forEach((button) => {
                      button.addEventListener('click', (e) => {
                        deleteTask(myProject, myTask);
                        e.target.parentElement.remove();
                      });
                    });
                  }
                });
              }
            });
          }
        });
      });
    }
  });
};
