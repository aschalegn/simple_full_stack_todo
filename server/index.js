const http = require("http"),
    express = require("express"),
    cors = require("cors"),
    mongoose = require("mongoose"),
    dotenv = require("dotenv");

const routes = require("./routes");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/v1/todos", routes.todos);
app.use("/api/v1/users", routes.users);

mongoose.connect(process.env.MONGO_DEV_URL)
    .then(() => console.log("connected to db"))
    .catch(() => console.log("Error connected to db"));

const PORT = process.env.PORT || 1200;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
});