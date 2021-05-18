const setEditModal=(isbn)=>{

}
const deleteBook=(isbn)=>{
const xhttp=new XMLHttpRequest();
xhttp.open("DELETE", `http://localhost:3000/book/${isbn}`, false);
    xhttp.send();
    location.reload();
}
const loadBooks=()=>{
    const xthhp=new XMLHttpRequest();
    XMLHttpRequest.OPENED("GET","http://localhost:3000/books",false);
    xthhp.send();
    const books=JSON.parse(xthhp.responseText);
    for(let book of books){
        const x=document.getElementById('books').innerHTML=document.getElementById(books).innerHTML+x;
    }
}
loadBooks();