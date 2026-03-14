const toDoList = [];
document.querySelector(".js-todo-input").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTask();
    }
})
function addTask(){
    
    const doInput = document.querySelector(".js-todo-input").value;
    const dateInput = document.querySelector(".js-date-input").value;
    if(doInput === "" || dateInput === ""){
        return;
    }
    const task = {
        doInput : doInput,
        dateInput : dateInput,
    }
    console.log(doInput +"  "+ dateInput);
    toDoList.push(task);

    for(let i = 0; i < toDoList.length; i++){
        console.log(toDoList[i]);
    }
    showTasks();
    // clear inputs
    document.querySelector(".js-todo-input").value = "";
    document.querySelector(".js-date-input").value = "";
    // to place the cursor again at the input box
    document.querySelector(".js-todo-input").focus();
}
function showTasks(){
    let showArea = document.querySelector(".tasks-show-area");
    showArea.innerHTML = ""; 
    for(let i = 0; i < toDoList.length; i++){
        showArea.innerHTML += `<pre class="js-showTasks${i}"> ${toDoList[i].doInput}         ${toDoList[i].dateInput}                <button onclick ="deleteTask(${i})" class = "js-delete-button">Delete</button>   <button onclick="editTask(${i})"
         class = "js-edit-task${i} edit-button">Edit</button> </pre> `
    }
}
function deleteTask(i){
    toDoList.splice(i,1);
    showTasks();
}
function editTask(i){
    const newTask = prompt("Enter the edited task",toDoList[i].doInput); // first t=is the prompt seconnd is the default value
    // if the user presses cancel then the prompt returns null otherwise a string if empty then ""
    if(newTask !== null && newTask !== ""){
        toDoList[i].doInput = newTask;
        showTasks();
    }
}