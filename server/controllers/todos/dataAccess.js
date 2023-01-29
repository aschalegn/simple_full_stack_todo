const { Todo } = require("../../model/Todo")

const inserTodo = async (body) => {
    const newTodo = new Todo(body);
    return await newTodo.save();
}

const findTodos = async (query = {}) => {
    const todos = await Todo.find({ ...query });
    return todos;
}

module.exports = { inserTodo, findTodos }