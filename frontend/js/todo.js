// // let tbutton=document.getElementById('addtask');
// // let tcontainer=document.getElementById('todobox');
// // let tinput=document.getElementById('listitem');

// // tbutton.addEventListener('click',function()
// // {
// //     var text=document.createElement('p');
// //     text.classList.add('task');
// //     text.innerText=tinput.value;
// //     todobox.appendChild(text);
// //     listitem.value="";
// //     text.addEventListener('click',function(){
// //         text.style.textDecoration="line-through";
// //     })
// //     text.addEventListener('dblclick',function(){
// //         todobox.removeChild(text);
// //     })
// // })
// var input=document.querySelector("#listitem");
// var item=document.querySelector("#list");
// var add=document.querySelector("#addtask");
// var clean=document.querySelector(".btnclear");
// var tasklist=[];
// function disp(e){
//     item.innerHTML="";
//     e.forEach(i => {
//         let newitem=document.createElement("p");
//         newitem.innerHTML=i;
//        // newitem.classList.add("");
//         item.appendChild(newitem);
//     });
// }
// add.addEventListener('click',i =>{
//     if(input.value!=="")
//     {
//     tasklist.push(input.value);
//     input.value="";
//     disp(tasklist);
//     clean.style.display="block";
//     localStorage.setItem("mylist",JSON.stringify(tasklist));
//     }
//     else alert("enter some task");
// });
// let save=localStorage.getItem("mylist");
// if(save){
//     tasklist=JSON.parse(localStorage.getItem("mylist"));
//     disp(tasklist);

// }
//  else clean.style.display="none";
// clean.addEventListener("click",function(){
//     localStorage.clear();
//     item.innerHTML="";
//     tasklist=[];
//     clean.style.display="none";
// })

var elements=[];
window.onload=function(){
    if(JSON.parse(localStorage.getItem("todo-elements"))!=null)
    elements=JSON.parse(localStorage.getItem("todo-elements"));
    display();
}
function addElement(){
    if(document.querySelector(".addtxt").value.trim()!=""){
        elements.push(document.querySelector(".addtxt").value.trim())
    localStorage.setItem("todo-elements",JSON.stringify(elements)); 
        display();
    }
}
function display(){
    document.querySelector(".list").innerHTML="";
    for(var i = 0; i<elements.length;i++)
    {
    document.querySelector(".list").innerHTML+=elements[i]+" <button onclick='Strike("+i+")'>strike it</button> "+" <button onclick='Del("+i+")'>dele</button> "+" <button onclick='unstrike("+i+")'>unstrike it</button> "+"<br>";
    document.querySelector(".addtxt").value="";
    }

}
function Del(index){
    elements.splice(index,1);
    localStorage.setItem("todo-elements",JSON.stringify(elements)); 
    display();
}
function Strike(index){
   elements[index]= "<strike>"+elements[index]+"</strike>";
    localStorage.setItem("todo-elements",JSON.stringify(elements)); 
   display();
}
function unstrike(index){
    
    if(elements[index].includes("<strike>")){
elements[index]=elements[index].replace("<strike>","");
    elements[index]=elements[index].replace("</strike>","");
    }
localStorage.setItem("todo-elements",JSON.stringify(elements)); 
    display();
}

