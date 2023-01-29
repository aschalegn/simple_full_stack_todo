const { Router } = require("express");
const { getTodos, addTodo, updateTodo } = require("../controllers/todos");

const router = Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", updateTodo);
// router.delete("/", addTodo);


module.exports = router;