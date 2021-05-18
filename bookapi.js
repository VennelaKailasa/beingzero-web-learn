const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const port=3000;
var books=[];
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book=req.body;
    books.push(book);
    res.json('Added to database');
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/frontend/html/newbook.html");
    
});
app.get('/books',(req,res)=>{
    res.json(books);
});
app.get('/book/:isbn',(req,res)=>{
    const isbn=req.params.isbn;
    for(let book of books){
        if(book.isbn===isbn){
            res.json(book);
            return;
        }
    }
    res.status(404).send('Book not found');
});
app.delete('/book/:isbn',(req,res)=>{
    const isbn=rea.params.isbn;
    books=books.filter(i=>{
        if(i.isbn!==isbn){
            return true;
        }
        return false;
    })
res.send('Book is deleted');
})
app.put('/book/:isbn',(req,res)=>{
    const isbn=req.params.isbn;
    const newBook=req.body;
    for(let i=0;i<books.length;i++)
    {
        if(book[i].isbn===isbn){
            books[i]=newBook;
        }
    }
    res.send('Book is edited');
})
app.get('/deleteall',(req,res)=>{
   let i=books.length;
   books.splice(0,i);
   res.send(books);

})

app.listen(port, () => console.log(`Running on ${port}!`));