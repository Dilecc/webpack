import * as $ from "jquery"
import Post from "@models/post"
import Json from "./assets/json"
import Xml from "./assets/data.xml"
import Csv from "./assets/data.csv"
import WebpackLogo from "./assets/webpack-logo.png"
import "./styles/styles.css"


const post = new Post("webpack post title", WebpackLogo)

console.log("post to string", post.toString())

/* console.log("post to json", Json) 

console.log("post to xml", Xml) 

console.log("post to csv", Csv) */ 

$('pre').html(post.toString())
 