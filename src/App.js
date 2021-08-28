import Blogitem from "./components/blog/BlogItem";
import Header from "./components/header/Header";
import * as response from "./data/data-response";
import BlogForm from "./components/form/BlogForm";
import { useState } from "react";


const INITIAL_BLOGS = response.blogs;
const INITIAL_COMMENTS = response.comments;

function App() {
  //Create a state for the blogs object
  const [blogs, setBlogs] = useState(INITIAL_BLOGS); //this is the initial state.
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const processSubmittedData = (data) => {
    setBlogs(
        (prevState) => {         
          return [
             {
             id : blogs.length + 1,
             title : data.titleInput,
             description : data.descriptionInput,
             comments : [],
             }
            ,...prevState];
        }
    )
    processData(blogs,comments);
}

  return (
    <div>
      <Header></Header>
      <BlogForm processSubmittedData={processSubmittedData}></BlogForm>
      {blogs.map(item => 
            <Blogitem key={item.id} id ={item.id} title ={item.title} description ={item.description} comments={item.comments} hideComments={true}></Blogitem>
      )}
    </div>
  );
}



function processData(blogs,comments) {
  
  
  for(let i = 0; i < blogs.length ; i++)
  {
    for(let j = 0; j < comments.length ; j++) {
      if(comments[j].blogId === blogs[i].id && comments[j].isActive) {
        blogs[i].comments.push(comments[j]);
      }
    }
  }
}


export default App;
