const { Router } = require("express");
const { getTodos, addTodo, updateTodo, deleteTodo } = require("../controllers/todos");

const router = Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);


module.exports = router;