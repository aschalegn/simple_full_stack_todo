const { Todo } = require("../../model/Todo");
const { inserTodo } = require("./dataAccess");

const addTodo = async (req, res) => {
    try {
        const body = req.body;
        const newTodo = await inserTodo(body);
        res.status(201).send(newTodo);
    } catch (error) {
        console.log(error);
        res.status(400).send("error");
    }
}

const updateTodo = async (req, res) => {
    try {
        const { params, body } = req;
        const updatedTodo = Todo.findByIdAndUpdate(params.id, body, { new: true })
        res.status(200).send(updatedTodo);
    } catch (error) {
        console.log(error);
        res.status(400).send("error");
    }
}

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({name:""});
        res.status(200).send(todos);
    } catch (error) {
        res.status(400).send("error");
    }
}

module.exports = { getTodos, addTodo, updateTodo };