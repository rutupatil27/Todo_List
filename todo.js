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













// let btn= document.querySelector('button');
// let inp= document.querySelector('input');
// let ul= document.querySelector('ul');

// btn.addEventListener("click",()=>{
//     let li= document.createElement('li');
//     li.innerText= inp.value;
//     let delbtn= document.createElement('button');
//     delbtn.innerText="delete";
//     delbtn.classList.add('del')
//     li.append(delbtn);
//     ul.append(li);
// });

// ul.addEventListener('click',function(event){
//     if(event.target.nodeName=='BUTTON'){
//         let parent= event.target.parentElement;
//         parent.remove();
//     }
// })















// let todo=[];
// let req= prompt("Enter your request!!")

// while(true){
//     if(req=="quit"){
//         console.log("Quitting the app")
//         break;
//     }

//     if(req=="list"){
//         console.log("------------------------")
//         for(dos of todo){
//                 console.log(dos);
//             }
//         console.log("------------------------")
//     } 
    
//     else if(req=="add"){
//         let add = prompt("add new to-do");
//         todo.push(add);
//         console.log(`${add} added to the to-do list`);
//     }

//     else if(req=="delete"){
//         let del = prompt("which to-do you want to delete");
//         let ind= todo.indexOf(del);
//         todo.splice(ind,1);
//         console.log(`${del} is deleted`)
//     }

//     else{
//         console.log("wrong input!!")
//     }
        
//     req= prompt("Enter your request!!")
// }

