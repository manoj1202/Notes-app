const todos = [{
    title: 'Order cat food',
    completed: false
}, {
    title: 'Clean Kitchen',
    completed: true
}, {
    title: 'Buy food',
    completed: true
}, {
    title: 'Do Work',
    completed: false
}, {
    title: 'Excersise',
    completed: true
}]

const filters ={
    searchText: ''
}

const renderTodo = function(todos, filters){
    const filterTodos  = todos.filter(function(todo){
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filterTodos.filter(function (todo) {
        return !todo.completed;
    })

    document.querySelector('#todo1').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todo1').appendChild(summary);

    filterTodos.forEach(function (todo) {
        const p = document.createElement('p');
        p.textContent = todo.title;
        document.querySelector('#todo1').appendChild(p)
    })

    
    
    filterTodos.forEach(function(todo){
    const todoEl = document.createElement('p');
    todoEl.textContent = todo.title;
    document.querySelector('#todo1').appendChild(todoEl)
})
}
renderTodo(todos,filters);


document.querySelector('#add-todo').addEventListener('click', function(e){
    e.target.textContent = 'clicked add todo'
    
})
document.querySelector('#todo').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderTodo(todos, filters)
})