let addbtn= document.querySelector('.newTodo');
let header= document.querySelector('.header');
let content= document.querySelector('.content');
let newTodo;

addbtn.addEventListener("click",()=>{
    getinput();
    let div= document.createElement('div');
    div.classList.add('list');
    let inp= document.createElement('input');
    inp.type="checkbox";
    let label= document.createElement('label');
    label.innerText=`${newTodo}`;
    let delicon= document.createElement('i');
    delicon.className="fa-solid fa-trash-can";
    delicon.classList.add('icon');
    delicon.type="button";
    content.prepend(div);
    div.append(inp);
    div.append(label);
    div.append(delicon);
})

function getinput(){
    newTodo=prompt("Enter a todo");
    while(true){
        if(newTodo.trim()===""){
            newTodo=prompt("Enter a valid todo");
        }
        else{
            return false;
        }
    }
};

