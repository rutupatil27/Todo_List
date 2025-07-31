let addbtn= document.querySelector('.newTodo');
let header= document.querySelector('.header');
let content= document.querySelector('.content');
let input= document.querySelector('.enterTodo');
let h4= document.querySelector('h4');
let newTodo;

addbtn.addEventListener("click",()=>{
    h4.style.display="none";
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
    if(todo.trim()===""||todo.length>23){
        alert("Invalid Todo OR too long Todo");
        input.value="";
        return null;
    }
    input.value="";
    return todo;
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addbtn.click();
    }
});

content.addEventListener('click',function(event){
    if(event.target.className=='fa-solid fa-trash-can icon'){
        let parent= event.target.parentElement;
        parent.remove();
        let alltodos= document.querySelectorAll('.list');
        if(alltodos.length===0){
            h4.style.display="block";
        }
    }
});

content.addEventListener('click',function(event){
    if(event.target.className=='fa-solid fa-pen-to-square icon'){
        let prevlabel= event.target.previousElementSibling;
        let currText= prevlabel.innerText;
        let editinp= document.createElement('input');
        editinp.type= "text";
        editinp.value= `${currText}`;
        editinp.id= "editinp";
        prevlabel.replaceWith(editinp);
        editinp.focus();
        editinp.addEventListener('keypress',function(event){
            if(event.key=="Enter"){
                validation(editinp,prevlabel);
            }
        });
        editinp.addEventListener('blur',function(event){
            validation(editinp,prevlabel);
        });
    }
});

function validation(editinp,prevlabel){
    const updated = editinp.value.trim();
    if (updated.trim() === "" || updated.length > 23) {
        editinp.value="";
        editinp.placeholder="Invalid input Or too long input";
        editinp.focus();
        return;
    }
    editinp.replaceWith(prevlabel);
    prevlabel.innerText= `${editinp.value}`;
}
