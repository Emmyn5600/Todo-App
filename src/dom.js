import {
  localstorage1, deletetasklogic, checkboxtrue, checkboxfalse,
} from './logic';

const formBtn = document.querySelector('#form-btn');
const showForm = document.querySelector('#form-display');
const taskbtn = document.querySelector('#task-btn');
const showlist = document.querySelector('#list-display');
const refreshlist = document.querySelector('#refresh-btn');
export const listoflist1 = document.querySelectorAll('.listoflist');
const content1 = document.getElementById('currentclassname');
const defaultlisthome = document.getElementById('defaultlist');
const defaulttomhome = document.getElementById('tommorrowlist');
const defaulttodayhome = document.getElementById('todaylist');
export const readRadios1edit = document.querySelectorAll('.radiobtnedit');
export const taskedit = document.getElementById('taskedit');
export const descriptionedit = document.getElementById('descriptionedit');
export const dateedit = document.getElementById('dateedit');
const canceledittask = document.getElementById('canceledittask');
const cancellist = document.getElementById('cancellist');
const editingform = document.getElementById('editingform');
const cancelcreatetask = document.getElementById('cancelcreatetask');
const formdisplay = document.getElementById('form-display');

export const dom = () => {
  cancellist.addEventListener('click', () => {
    showlist.classList.add('d-none');
  });

  canceledittask.addEventListener('click', () => {
    editingform.classList.add('d-none');
  });

  cancelcreatetask.addEventListener('click', () => {
    formdisplay.classList.add('d-none');
  });

  formBtn.addEventListener('click', () => {
    if (localStorage.getItem('selectedlist')) {
      if (showForm.classList.contains('d-none')) {
        showForm.classList.remove('d-none');
      } else {
        showForm.classList.add('d-none');
      }
    } else {
      /*eslint-disable */
        $('#myModal').modal('show');
        /* eslint-enable */
    }
  });

  taskbtn.addEventListener('click', () => {
    if (showlist.classList.contains('d-none')) {
      showlist.classList.remove('d-none');
    } else {
      showlist.classList.add('d-none');
    }
  });

  refreshlist.addEventListener('click', () => {
    if (localStorage.getItem('selectedlist')) {
      localStorage.removeItem('selectedlist');
      localStorage.removeItem('selectedtask');

      while (content1.lastElementChild) {
        content1.removeChild(content1.lastChild);
      }
    }
  });

  const deletelist = (event) => {
    let remove = event.target.previousSibling.id;
    remove = remove.slice(-1);

    const liststasks = localstorage1();
    liststasks.splice(remove, 1);
    localStorage.setItem('liststore', JSON.stringify(liststasks));
    event.target.parentElement.remove();
    if (localStorage.getItem('selectedlist') === event.target.previousSibling.innerHTML.trim()) {
      localStorage.removeItem('selectedlist');
      while (content1.lastElementChild) {
        content1.removeChild(content1.lastChild);
      }
    }
    window.reload();
  };

  const deletetask = (e) => {
    const listtasks = localstorage1();
    const selecteditem = localStorage.getItem('selectedlist');

    for (let i = 0; i < listtasks.length; i += 1) {
      if (listtasks[i].list === selecteditem) {
        let remove = e.target.parentElement.parentElement.id;
        remove = remove.slice(-1);
        deletetasklogic(i, remove, listtasks);
        localStorage.setItem('liststore', JSON.stringify(listtasks));
        window.location.reload();
        break;
      }
    }
    e.target.parentElement.parentElement.remove();
  };

  const edittask = (e) => {
    if (editingform.classList.contains('d-none')) {
      const currenttaskname = e.target.parentElement.parentElement.id.slice(-1);
      localStorage.setItem('selectedtask', currenttaskname);
      editingform.classList.remove('d-none');
      for (let i = 0; i < 3; i += 1) {
        if (readRadios1edit[i].value === e.target.parentElement.previousSibling.innerHTML) {
          readRadios1edit[i].checked = true;
          break;
        }
      }
      taskedit.value = e.target.parentElement.previousSibling.previousSibling
        .previousSibling.previousSibling.innerHTML;
      descriptionedit.value = e.target.parentElement.previousSibling.previousSibling.previousSibling
        .innerHTML;
      dateedit.value = e.target.parentElement.previousSibling.previousSibling.innerHTML;
    } else {
      editingform.classList.add('d-none');
      localStorage.removeItem('selectedtask');
    }
  };

  const checkboxtask = (e) => {
    const listtasks = localstorage1();
    const currentcheckedtaskclass = e.target.parentElement.parentElement;
    const remove = currentcheckedtaskclass.id.slice(-1);
    const selecteditem = localStorage.getItem('selectedlist');

    if (e.target.checked) {
      currentcheckedtaskclass.classList.add('strikethrough');
      for (let i = 0; i < listtasks.length; i += 1) {
        if (listtasks[i].list === selecteditem) {
          checkboxtrue(listtasks, i, remove);
          localStorage.setItem('liststore', JSON.stringify(listtasks));

          break;
        }
      }
    } else {
      currentcheckedtaskclass.classList.remove('strikethrough');
      for (let i = 0; i < listtasks.length; i += 1) {
        if (listtasks[i].list === selecteditem) {
          checkboxfalse(listtasks, i, remove);
          localStorage.setItem('liststore', JSON.stringify(listtasks));

          break;
        }
      }
    }
  };

  const showalltasks = (listtasks, i, j, tablebody, name = 1) => {
    const tablerow = document.createElement('tr');
    tablerow.setAttribute('id', `task${j}`);
    tablerow.setAttribute('class', 'text-center');
    const varnew = listtasks[i].todos[j];
    const td1 = document.createElement('th');
    if (name === 1) {
      tablerow.appendChild(td1);
      const checkbox = document.createElement('input');
      checkbox.addEventListener('click', checkboxtask);
      td1.appendChild(checkbox);
      checkbox.setAttribute('scope', 'row');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('class', 'form-check-input taskdone');
      if (varnew.status) { checkbox.checked = true; }
    }
    const td2 = document.createElement('td');
    tablerow.appendChild(td2);
    td2.innerHTML = varnew.task;
    const td23 = document.createElement('td');
    tablerow.appendChild(td23);
    td23.innerHTML = varnew.description;
    const td3 = document.createElement('td');
    tablerow.appendChild(td3);
    td3.innerHTML = varnew.date;
    const td4 = document.createElement('td');
    td4.innerHTML = varnew.priority;
    tablerow.appendChild(td4);
    if (name === 1) {
      const td5 = document.createElement('td');
      tablerow.appendChild(td5);
      const editbutton = document.createElement('button');
      editbutton.addEventListener('click', edittask);

      td5.appendChild(editbutton);

      editbutton.setAttribute('class', 'btn btn-primary edittask');
      editbutton.innerHTML = 'Edit';
      const td6 = document.createElement('td');
      tablerow.appendChild(td6);
      const delbutton = document.createElement('button');
      delbutton.addEventListener('click', deletetask);
      td6.appendChild(delbutton);
      delbutton.setAttribute('class', 'btn btn-danger deltask');
      delbutton.innerHTML = 'Delete';
      if (varnew.status) {
        tablerow.classList.add('strikethrough');
      }
    }
    tablebody.appendChild(tablerow);
  };

  const showtasklist = (selecteditem) => {
    formBtn.classList.remove('d-none');

    const listtasks = localstorage1();
    const table = document.createElement('table');
    content1.appendChild(table);
    table.setAttribute('class', 'table table-stripped text-dark container pt-5');
    const tablehead = document.createElement('thead');
    const tableheading = document.createElement('tr');
    tablehead.setAttribute('class', 'text-center');

    tableheading.innerHTML = `  <th scope="column">Status</th>
                      <th>Task</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Priority</th> 
                      <th>Edit</th>
                      <th>Action</th>`;

    tablehead.appendChild(tableheading);
    table.appendChild(tablehead);

    const tablebody = document.createElement('tbody');
    table.appendChild(tablebody);
    for (let i = 0; i < listtasks.length; i += 1) {
      if (listtasks[i].list === selecteditem) {
        for (let j = 0; j < listtasks[i].todos.length; j += 1) {
          showalltasks(listtasks, i, j, tablebody);
        }
      }
    }
  };

  const showlistname = () => {
    if (localStorage.getItem('selectedlist')) {
      while (content1.lastElementChild) {
        content1.removeChild(content1.lastChild);
      }
      const listname = document.createElement('h4');
      content1.appendChild(listname);
      listname.setAttribute('class', 'text-center text-dark mb-4');
      listname.innerHTML = localStorage.selectedlist;
      showtasklist(localStorage.getItem('selectedlist'));
    }
  };

  const addtolist = (e) => {
    const currentList = e.target.textContent.trim();
    localStorage.setItem('selectedlist', currentList);
    showlistname();
  };

  const todaytomolist = (name) => {
    const listtasks = localstorage1();
    const table = document.createElement('table');
    content1.appendChild(table);
    table.setAttribute('class', 'table table-stripped text-dark container pt-5');
    const tablehead = document.createElement('thead');
    table.appendChild(tablehead);

    const tableheading = document.createElement('tr');
    tablehead.setAttribute('class', 'text-center');
    tablehead.appendChild(tableheading);
    tableheading.innerHTML = `  <th scope="column">Task</th>
      <th scope="column">Description</th>
                      <th>Date</th>
                      <th>Priority</th> 
              `;

    const tablebody = document.createElement('tbody');
    table.appendChild(tablebody);
    for (let i = 0; i < listtasks.length; i += 1) {
      for (let j = 0; j < listtasks[i].todos.length; j += 1) {
        const varnew = listtasks[i].todos[j].date;
        const { status } = listtasks[i].todos[j];
        const date1 = new Date(varnew);
        const date2 = new Date();
        const finaldate = (date2 - date1) / (1000 * 3600 * 24);

        if (name === 'Tomorrow ' && (finaldate < 0 && finaldate > -1.10) && status === false) {
          showalltasks(listtasks, i, j, tablebody, name);
        } else if (name === 'Today' && (finaldate >= 0 && finaldate <= 1) && status === false) {
          showalltasks(listtasks, i, j, tablebody, name);
        }
      }
    }
  };

  const tomtodaydefaultlist = (e) => {
    formBtn.classList.add('d-none');

    while (content1.lastElementChild) {
      content1.removeChild(content1.lastChild);
    }
    const listname = document.createElement('h4');
    content1.appendChild(listname);
    listname.setAttribute('class', 'text-center text-dark mb-4');
    listname.innerHTML = e.target.textContent.trim();
    localStorage.removeItem('selectedlist');
    const name = e.target.textContent.trim();
    todaytomolist(name);
  };

  const displaylist = () => {
    if (localStorage.getItem('liststore')) {
      const lists = JSON.parse(localStorage.liststore);

      const table = document.querySelector('#listoftodos');

      for (let i = 1; i < lists.length; i += 1) {
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.setAttribute('class', 'd-flex my-2 justify-content-center nodec');
        const tablerow = document.createElement('h5');
        link.appendChild(tablerow);
        tablerow.addEventListener('click', addtolist);
        tablerow.setAttribute('id', `projectlist${i}`);

        tablerow.setAttribute('class', 'text-white p-2 w-50 text-center listoflist');
        tablerow.innerHTML = `
                       ${lists[i].list} 
                    
                      `;
        const listdelbtn = document.createElement('button');
        listdelbtn.addEventListener('click', deletelist);
        link.appendChild(listdelbtn);
        listdelbtn.setAttribute('class', 'btn btn-danger  btn-sm');
        listdelbtn.innerHTML = 'Delete';
        table.appendChild(link);
      }
    }
  };

  defaultlisthome.addEventListener('click', addtolist);
  defaulttodayhome.addEventListener('click', tomtodaydefaultlist);
  defaulttomhome.addEventListener('click', tomtodaydefaultlist);

  showlistname();

  displaylist();
};
