import Post from "./post"
import Json from "./assets/json"
import "./styles/styles.css"
import WebpackLogo from "./assets/webpack-logo.png"


const post = new Post("webpack post title", WebpackLogo)

console.log("post to string", post.toString())

console.log("post to json", Json) 

