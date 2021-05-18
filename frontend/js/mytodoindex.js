import express from 'express';
import bodyParser from 'body-parser';
import todos from './routes/mytodos.js';
const app1=require('express');
const PORT=5000;
app1.request(bodyParser.json());
app1.request('/users',todos);
app1.get('/',(req,res)=>res.send('hello in homepage'));
app1.listen(PORT,()=> console.log('Server running on port http://localhost:${PORT}'));
