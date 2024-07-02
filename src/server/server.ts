import express from "express";

import apiRouter from "./api-router"
import config from "./config";
const server = express()

server.use(express.static("dist"))

server.set("view engine", "ejs")

server.use("/api", apiRouter)

server.get("/", (req, res) => {
    res.render("index",{
        initialContent:"Loading...",
    })
})

server.listen(config.PORT, config.HOST, () => {
    console.info((
        "Express server is listening"
    ))
})