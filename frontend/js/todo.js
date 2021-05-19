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
   document.querySelector(".list").innerHTML+=elements[i]+" <button id='styling' onclick='Strike("+i+")'>strike it</button> "+" <button id='styling' onclick='Del("+i+")'>dele</button> "+" <button id='styling' onclick='unstrike("+i+")'>unstrike it</button> "+"<br>";
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

