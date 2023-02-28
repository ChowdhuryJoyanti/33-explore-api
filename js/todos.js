function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>displayTodos(data))
    .th
}

function displayTodos(todos){
    // get the container
const todoContainer = document.getElementById('todos-container')

   for(const todo of todos){
    // creat the child element
        const todoDiv = document.createElement('div');
        // set innerText or innerHtml
        todoDiv.innerHTML =`
        <h3>title:${todo.title}</h3>
        <p>User id :${todo.userId}</p>
        <p>Is completed :${todo.completed === true ? 'completed' : 'not completed'}</p>
        
        `;
        //    append child
        todoContainer.appendChild(todoDiv);
   }

}
loadTodos();