//tasks1 = all tasks
//tasks2 = tasks you are working on
//tasks3 = tasks you have completed

//Define UI Vars
const taskTable = document.getElementById( 'task-content' );
const addBtn = document.getElementById( 'btn-add' );
const taskInput = document.getElementById( 'task-input' );
const allRadio = document.getElementById( 'all' );
const doingRadio = document.getElementById( 'doing' );
const doneRadio = document.getElementById( 'done' );

//
let tasks = [];

const doingClass = 'doing';
const doneClass = 'done';

addBtn.addEventListener( 'click', addTask );


function addTask() {
  tasks.push( taskInput.value );
  const trEle = document.createElement( 'tr' );
  const task = document.createElement( 'td' );
  const Id = document.createElement( 'td' );
  const statusBtn = document.createElement( 'button' );
  const removeBtn = document.createElement( 'button' );
  task.innerHTML = taskInput.value;
  Id.innerHTML += tasks.length - 1;
  statusBtn.innerHTML = '作業中';
  statusBtn.setAttribute( 'value', 'doing' )
  removeBtn.innerHTML = '削除';
  trEle.appendChild( Id );
  trEle.appendChild( task );
  trEle.appendChild( statusBtn );
  trEle.appendChild( removeBtn );
  taskTable.appendChild( trEle );

  taskInput.value = '';

  removeBtn.addEventListener( 'click', removeTask );

  function removeTask() {
    trEle.remove();
  }

  statusBtn.addEventListener( 'click', statusTask );

  function statusTask() {
    if ( statusBtn.value === 'doing' ) {
      statusBtn.value = 'done'
      statusBtn.innerHTML = '完了';
    } else {
      statusBtn.value = 'doing';
      statusBtn.innerHTML = '作業中';
    }
  }

  doingRadio.addEventListener( 'click', doingDisplay );
  function doingDisplay() {
    if ( statusBtn.value === 'doing' ) {
      trEle.style.display = "";
    } else {
      trEle.style.display = "none";
    }
  }

  allRadio.addEventListener( 'click', allDisplay );
  function allDisplay() {
    trEle.style.display = ""
  }

  doneRadio.addEventListener( 'click', doneDisplay );
  function doneDisplay() {
    if ( statusBtn.value === 'done' ) {
      trEle.style.display = "";
    } else {
      trEle.style.display = "none";
    }
  }
}

