const setDisplayNone = (name, date, priority, button) => {
  name.style.display = 'none';
  date.style.display = 'none';
  priority.style.display = 'none';
  button.style.display = 'none';
};

const storeProjectInLocalStorage = (project) => {
  let projects;
  if (localStorage.getItem('projects') === null) {
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem('projects'));
  }
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
};
const storeTaskInLocalStorage = (task, project) => {
  const projects = JSON.parse(localStorage.getItem('projects'));

  projects.forEach((proj) => {
    if (project.head_id === proj.head_id) {
      proj.tasks.push(task);

      localStorage.removeItem('projects');
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  });
};

const removeProjectFromLocalStorage = (project) => {
  const projects = JSON.parse(localStorage.getItem('projects'));

  projects.forEach((proj) => {
    if (project.head_id === proj.head_id) {
      const index = projects.indexOf(proj);
      projects.splice(index, 1);
      localStorage.removeItem('projects');
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  });
};
const deleteTask = function (project, task) {
  const index = project.tasks.indexOf(task);
  project.tasks.splice(index, 1);
};
export {
  setDisplayNone, storeProjectInLocalStorage, storeTaskInLocalStorage,
  removeProjectFromLocalStorage, deleteTask,
};