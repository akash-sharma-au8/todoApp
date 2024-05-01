const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { Todos } = require("./db")
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req,res) => {
    const todo = req.body;
    const validTodo = createTodo.safeParse(todo);
    if(!validTodo.success){
        res.status(411).json({"error":"You are entering wrong inputs"})
        return
    }

    await Todos.create(todo);
    res.status(200).json({"msg":"Todo created Successfully"})
})

app.post("/completed/:id", async (req,res) => {
    const updatedPayload  = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload)
    if(!parsedPayload){
        res.status(411).json({"error":"You are entering wrong inputs"})
        return
    }

   try{
       await Todos.updateOne({_id : req.params.id},{isCompleted : req.body.isCompleted})
       res.status(201).json({
        "msg":" Todo Updated Successfully"
       })
   } 
   catch(e){
    res.status(400).json({
        "error":"Error in Updating"
    })
   }
})
app.get("/completed", async (req,res) => {

   try{
       const todos = await Todos.find({isCompleted : true})
       res.status(200).json({
        "completedTodos":todos
       })
   } 
   catch(e){
    res.status(400).json({
        "error":"Error in fetching completed todos"
    })
   }
})

app.get("/todos", async(req,res) => {    
    try{
        const todos = await Todos.find({})
        res.status(200).json({"ToDos": todos })
    }catch(e){
        res.status(500).json("Internal Server Error")
    }
})


app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });