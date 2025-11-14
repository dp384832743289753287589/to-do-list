//it was easier this way instead of redeclaring variables
function ManageTasks(e){
    e.preventDefault();
    let div=document.getElementById('container');
    let input=document.getElementById('taskinput');
    let task = document.createElement('div');
    let checkbox= document.createElement('input');
    let removeBtn = document.createElement('button');
    let taskdiv=document.createElement('div');
    let completiondate=document.createElement('input')

    taskdiv.setAttribute('class', 'task-div');
    removeBtn.setAttribute('class', 'remove-btn');
    removeBtn.innerText = 'X';
    checkbox.setAttribute('class', 'checkbox');
    checkbox.setAttribute('type', 'checkbox');
    task.setAttribute('class', 'task');
    task.innerText = input.value;
    completiondate.setAttribute('type', 'date');
    completiondate.setAttribute('class', 'completion-date');
    let taskamount=document.createElement('div');
    let numberoftasks=document.getElementsByClassName('task').length;
    taskamount.setAttribute('class', 'task-amount');
    taskamount.innerText = "Number of tasks: " + (numberoftasks+1);
    if (input.value === ''){
        alert("Task cannot be empty");
        return;
    }else{
        div.appendChild(taskdiv);
        taskdiv.appendChild(task);
        taskdiv.appendChild(removeBtn);
        taskdiv.appendChild(checkbox);
        taskdiv.appendChild(completiondate);
        taskdiv.appendChild(taskamount);

    }

    removeBtn.addEventListener('click', function(){
        div.removeChild(taskdiv);
        div.removeChild(task);
        div.removeChild(removeBtn);
        div.removeChild(checkbox);
        div.removeChild(completiondate);
        div.removeChild(taskamount);
    });
}
document.getElementById('addtask').addEventListener('click', ManageTasks);

