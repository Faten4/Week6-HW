import  express  from "express";
import { People } from './People/People';
 import { v4 as uuidv4 } from 'uuid';
import morgan from 'morgan';
import {grade } from './grade/grade';
import {task } from './task/task';

const  app= express();


app.use(morgan('dev'));

// app.use((req,res,next) =>{

//      next();
// }
// );
app.use(express.json());
let peo: People[] = [
     {id: 1, name:'Faten'},
     {id: 2, name:'Sultan'},
     {id: 3, name:'Abdullah'}
];

app.get("/name", (req,res,next)=>{
     return res.json(peo);
})

app.post('/name',(req,res,next)=>{
     let newPe = req.body as People;
     // {
     //      id: req.body.id,
     //      name: req.body.name
     // }
     peo.push(newPe);
     return res.json(peo);
})

app.put('/name/:id', (req, res) => {
     let found =peo.find((i)=>{
          return i.id === parseInt(req.params.id)
     })
     if (found){
          let update = req.body as People;
          let targetIndex = peo.indexOf(found)
          peo.splice(targetIndex, 1, update)
          res.send(peo)
     }else{
          res.sendStatus(404)
     }
     
     //const updatPeo = req.body as People;
     //peo.push(updatPeo)
     //res.json(peo);
     
     //const { id } = req.params;
   
     // const updatPeList = peo.filter((pe) => {
     //   return pe.id !== id;
     // });
     // updatPeList.push(updatPe);

     // peo = updatPeList;
   
     // return res.json(peo);
   });
   app.delete('/name/:id', (req, res) => {
     let found =peo.find((i)=>{
          return i.id === parseInt(req.params.id)
     })
     if (found){
          let targetIndex = peo.indexOf(found)
          peo.splice(targetIndex, 1 )
          res.send(peo)
     }else{
          res.sendStatus(404)
     }
});

//////////////////////////////////////////q2
let grade: grade[] = [
     {id: "1", name:'Faten', grade: '3.7'},
     {id:"2" , name:'Sultan', grade: '4'},
     {id: "3", name:'Abdullah', grade: '5'}
];


app.get("/grade", (req,res,next)=>{
     return res.json(grade);
})

app.post('/grade',(req,res,next)=>{

    let newgrade = req.body as grade;

     grade.push(newgrade);
     return res.json(grade);
})


app.put('/grade/:id', (req, res) => {

     const updatedTodo = req.body as grade;
     const { id } = req.params;
   
     const updatedTodoList = grade.filter((gr) => {
       return gr.id !== id;
     });
   
     updatedTodoList.push(updatedTodo);
   
     grade = updatedTodoList;
   
     return res.json({
       message: ' updated !',
     });
    
     
})
app.delete('/grade/:id', (req, res) => {
     const { id } = req.params;
   
     const newTodoList = grade.filter((i) => {
       return i.id !== id;
     });
   
     grade = newTodoList;
   
     return res.json({
       message: 'deleted !',
     });
   });



///////////////////////////////////////////q3

let task :task[]=[

     {id:1,title:'web-developer', description:"mm", status:true},
     {id:2,title:'cyber-security', description:"cc", status:false}
]

app.post('/task',(req,res,next)=>{
     let newtask = req.body as task;

     task.push(newtask);
     return res.json(task);
})


app.get("/task", (req,res,next)=>{
     return res.json(task);
})




app.put('/task/:id', (req, res) => {
     let found =task.find((i)=>{
          return i.id === parseInt(req.params.id)
     })
     if (found){
          let update = req.body as task;
          let targetIndex = task.indexOf(found)
          task.splice(targetIndex, 1, update)
          res.send(task)
     }else{
          res.sendStatus(404)
     }
})


app.delete('/task/:id', (req, res) => {
     let found =task.find((i)=>{
          return i.id === parseInt(req.params.id)
     })
     if (found){
          let targetIndex = task.indexOf(found)
          task.splice(targetIndex, 1 )
          res.send(task)
     }else{
          res.sendStatus(404)
     }
});


app.get ('/task/:title', (req,res)=>{ 
     let t = req.body as task;
      let taskTitle = req.params
      const target1 = task.filter((i) => {
           return i.title.indexOf("search text") > -1;})
           
 
           return res.json(taskTitle);
 
 })




 const PORT =5000;
 app.listen(PORT, ()=>{
      console.log(`server listeng on port ${PORT}`)
 });