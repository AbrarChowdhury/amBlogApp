const express = require("express");
const config = require("./server/congif");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const commentRoutes = require("./server/routes/comment.routes");
const postRoutes = require("./server/routes/post.routes");


const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

//mounting the routes
app.use("/", commentRoutes);
app.use("/", postRoutes);


// connect to the database
mongoose.connect(
    config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Database connected successfully`))
.catch((err) => console.log(err));


mongoose.Promise = global.Promise;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "./client/build/index.html"));
});

app.listen(config.serverPort, () => {
    console.log(`Example app listening at http://localhost:${config.serverPort}`);
});

