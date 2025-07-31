let addbtn= document.querySelector('.newTodo');
let header= document.querySelector('.header');
let content= document.querySelector('.content');
let input= document.querySelector('.enterTodo');
let newTodo;

addbtn.addEventListener("click",()=>{
    newTodo= addNew();
    if(!newTodo) return;
    let div= document.createElement('div');
    div.classList.add('list');
    let inp= document.createElement('input');
    inp.type="checkbox";
    let label= document.createElement('label');
    label.innerText=`${newTodo}`;
    let editicon= document.createElement('i');
    editicon.className="fa-solid fa-pen-to-square";
    editicon.classList.add('icon');
    editicon.type="button";
    let delicon= document.createElement('i');
    delicon.className="fa-solid fa-trash-can";
    delicon.classList.add('icon');
    delicon.type="button";
    content.prepend(div);
    div.append(inp);
    div.append(label);
    div.append(editicon);
    div.append(delicon);
})

function addNew(){
    let todo= input.value.trim();
    if(todo===""||todo.length>23){
        alert("Invalid Todo OR too long Todo");
        input.value="";
        return null;
    }
    input.value="";
    return todo;
}

function editTodo(){
    newTodo=prompt("Edit the todo");
    while(true){
        if(newTodo.trim()===""||newTodo===null){
            newTodo=prompt("Enter a valid todo");
        }
        else{
            return false;
        }
    }
};

content.addEventListener('click',function(event){
    if(event.target.className=='fa-solid fa-trash-can icon'){
        let parent= event.target.parentElement;
        parent.remove();
    }
});

content.addEventListener('click',function(event){
    if(event.target.className=='fa-solid fa-pen-to-square icon'){
        editTodo();
        let prevlabel= event.target.previousElementSibling;
        prevlabel.innerText=`${newTodo}`;
    }
});
