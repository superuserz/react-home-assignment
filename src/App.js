import Blogitem from "./components/blog/BlogItem";
import Header from "./components/header/Header";
import * as response from "./data/data-response";

function App() {
  const blogs = response.blogs;
  processData(blogs,response.comments);
  return (
    <div>
      <Header></Header>
      {blogs.map(item => (
            <Blogitem key={item.id} id ={item.id} title ={item.title} description ={item.description} comments={item.comments} hideComments={true}></Blogitem>
      ))}
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
