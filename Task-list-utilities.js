const addTask = (tasks, title) => {

    const ids = tasks.map(task => task.id);
    let suma = Math.max(...ids);
    let arr = {id:++suma, title: title, completed: false};
    tasks.push(arr);
    
    return tasks;
};

function completeTask(tasks, taskId){

    let ids = tasks.map(task => task.id);
    let index = ids.indexOf(taskId);
    tasks[index].completed = true

    return tasks
}

function removeTask(tasks, taskId){
    let ids = tasks.map(task => task.id);
    let index = ids.indexOf(taskId);
    
    tasks.splice(index, 1);

    return tasks
}

function countIncompleteTasks(tasks){
    let task = tasks.map(task => task.completed);
    let incompletedTask = task.filter(completed => completed === false);

    return incompletedTask.length;
}

// LOG EXAMPLES
const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));

console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));