console.log('start');


const express = require('express');
const app = express();
require('dotenv').config()
const PORT = (process.env.PORT || 5000);
const cors = require('cors');
const pool = require('./db');

//MiddleWare
app.use(cors());
app.use(express.json());

//Routes//
//home
app.get("/api", async (req,res) => {
    try {
        res.send('api')
    } catch (err) {
        console.error(err.message);
        
    }
})

//get all todos
app.get("/api/todos", async(req,res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }catch(err){
        console.error(err.message);
    }
})

//create a todo
app.post("/api/todos", async(req,res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING*",
             [description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message)        
    }
})

//get a todo
app.get("/api/todos/:id", async(req,res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//update a todo
app.put("/api/todos/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo was Updated")
    } catch (err) {
        console.error(err.message);
    }
})

//delete a todo
app.delete("/api/todos/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted")
} catch (err) {
    console.error(err.message);
}
})


app.listen(PORT, () => {
    console.log(`LISTENING ON PORT: ${PORT}`);
})

