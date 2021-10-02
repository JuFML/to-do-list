const form = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')


form.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()
    const insertTodoHTML = todosContainer.innerHTML += 
        `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`

    if(inputValue) insertTodoHTML      
    
    event.target.reset()    
})


todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    if(Array.from(clickedElement.classList).includes('delete')) {
        clickedElement.parentElement.remove()
    }
})



inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const hideTodoNotSearched = Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })
    const showTodoSearched =Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
})

    hideTodoNotSearched

    showTodoSearched
})