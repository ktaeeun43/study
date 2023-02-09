const express = require("express");
const app = express();

const authRoutes = require("./routes/auth.js")
const userRoutes = require ("./routes/users.js")
const postRoutes = require ("./routes/posts.js")
const commentRoutes = require ("./routes/comments.js")
const likeRoutes = require ("./routes/likes.js")

//미들웨어
app.use(express.json)

app.get("/hello", (req, res) => res.send("Hello"));



app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)

app.listen(8800, () => {
    console.log("API Working!")
})