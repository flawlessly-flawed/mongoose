import mongoose from "mongoose";
import Blog from "./model/Blog.js"

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://maryam:SUNcity123@cluster0.wrcoduf.mongodb.net/myfirstdatabase?retryWrites=true&w=majority");

const article = await Blog.create({
    title: "awesome post!",
    slug: "awesome-post",
    author: "jesse hall",
    content: "this is the best post ever",
    tags: ["featured", "announcement"],
});


console.log(article);





