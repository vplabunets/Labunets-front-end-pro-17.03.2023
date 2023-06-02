 (function () {
     const LOCALSTORAGE_KEY = "todosList"
     const formEl = document.querySelector("#todoForm")
     const inputResetEl = document.querySelector(".btn.btn-danger")
     inputResetEl.addEventListener("click",()=>formEl.reset())
     const todosWrapperEl  = document.querySelector("#todoItems")

     function getLocalStorageData(){
         try{
             const localStorageData = localStorage.getItem(LOCALSTORAGE_KEY)
             return localStorageData ? JSON.parse(localStorageData):[]
         }catch (error){
             console.log(error.message)
         }
     }
     function setLocalStorageData(data){
         if (getLocalStorageData().length>0){
                 const todoList = getLocalStorageData()
                 const updatedTodoList = [data,...todoList]
                 localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedTodoList))
             }
         else localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify([data]))

}
     function deleteLocalStorageItem(evt) {
         evt.stopPropagation()
         if(evt.target.nodeName==="BUTTON") {
             const data = getLocalStorageData().filter(todo=>
                 todo.id!==+evt.target.dataset.id)
             localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data))
             createTodosMarkup()
         }
         return
     }
     function createTodoMarkup({id,title,description}) {
        return `<div class="col-3 bg-info p-2 rc rounded-1"> 
           <p>${title}</p>
           <p>${description}</p>
           <button class="btn btn-danger" data-id=${id}>Delete</button>
       </div>`

     }
     function createTodosMarkup(){
        const todos = getLocalStorageData()
        if (todos) {
           todosWrapperEl.innerHTML = todos.map(todo => createTodoMarkup(todo)).join('')
        }
        return ""
    }
     createTodosMarkup()

     function onFormSubmit (evt){
       evt.preventDefault()
         const data = new FormData(formEl)
         const title = data.get("title")
         const description = data.get("description")
         const todo= {id:Date.now(),title,description,}
         setLocalStorageData(todo)
         formEl.reset()
         todosWrapperEl.insertAdjacentHTML("afterbegin", createTodoMarkup(todo) )
      }
     formEl.addEventListener("submit",onFormSubmit)
     todosWrapperEl.addEventListener("click", deleteLocalStorageItem)

 })()