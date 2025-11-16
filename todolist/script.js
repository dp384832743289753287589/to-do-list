//it was easier this way instead of redeclaring variables
function ManageTasks(e){
    e.preventDefault();
    let date = new Date();
    let div=document.getElementById('container');
    let input=document.getElementById('taskinput');
    let task = document.createElement('div');
    let checkbox= document.createElement('input');
    let removeBtn = document.createElement('button');
    let taskdiv=document.createElement('div');
    let controlsDiv = document.createElement('div');
    let completiondate=document.createElement('input')

    taskdiv.setAttribute('class', 'task-div');
    controlsDiv.setAttribute('class', 'task-controls');
    removeBtn.setAttribute('class', 'remove-btn');
    removeBtn.innerText = 'X';
    checkbox.setAttribute('class', 'checkbox');
    checkbox.setAttribute('type', 'checkbox');
    task.setAttribute('class', 'task');
    task.innerText = input.value;
    completiondate.setAttribute('type', 'date');
    completiondate.setAttribute('class', 'completion-date');
    completiondate.setAttribute('value', '');
    let taskamount=document.createElement('p');
    let numberoftasks=document.getElementsByClassName('task').length;
    taskamount.setAttribute('class', 'task-amount');
    taskamount.innerText = "Task "+(numberoftasks+1)+" "+"Created: "+date.toLocaleString();
    if (input.value === ''){
        alert("Task cannot be empty");
        return;
    }else{
        div.appendChild(taskdiv);
        taskdiv.appendChild(task);
        taskdiv.appendChild(controlsDiv);
        controlsDiv.appendChild(checkbox);
        controlsDiv.appendChild(completiondate);
        controlsDiv.appendChild(removeBtn);
        taskdiv.appendChild(taskamount);

    }


    removeBtn.addEventListener('click', function(){
        div.removeChild(taskdiv);
    });
}
document.getElementById('addtask').addEventListener('click', ManageTasks);

