const { Schema, model } = require("mongoose")

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true,
        default: false
    },
})

const Todo = model("Todo", todoSchema);
module.exports = { Todo };