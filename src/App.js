import Blogitem from "./components/blog/BlogItem";
import Header from "./components/header/Header";
import BlogForm from "./components/form/BlogForm";
import { useEffect, useState } from "react";


const INITIAL_BLOGS = [];
const LOCAL_STORAGE_KEY = "blogStorage";

function App() {




  //Create a state for the blogs object.
  const [blogs, setBlogs] = useState(INITIAL_BLOGS); //this is the initial state.
  const [blogAdded, setBlogAdded] = useState(false);

  //Effect Takes you to the Latest Added Blog on the browser.
  useEffect(() => {
    return () => {
      window.scrollTo({
        top: 10000,
        behavior: 'smooth'
      });
    }
  }, [blogAdded]);

  //Effect to check if Blogs already Exist in local-storage during page refresh.
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedBlogs) {
      setBlogs(() => {
        return storedBlogs;
      });
    }
    return () => { }
  }, [])

  //This will check if a Blog submitted through Form already Exists in Local Storage. Return Index if found else -1.
  const blogExist = (storedBlogs, data) => {
    return storedBlogs.findIndex(
      (element) => element.id === data.id
    )
  }

  //Process New Blog Submitted through the Form.
  const processSubmittedData = (data) => {
    const storedBlogs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedBlogs) {  //If Blog Array Already exist in local Storage.
      const existingIndex = blogExist(storedBlogs, data);
      if (existingIndex !== -1) {
        storedBlogs[existingIndex] = { id: data.id, title: data.titleInput, description: data.descriptionInput, comments: [] }
        updateStorageAndState(storedBlogs);
      } else {
        storedBlogs.push({
          id: data.id,
          title: data.titleInput,
          description: data.descriptionInput,
          comments: []
        });
        updateStorageAndState(storedBlogs);

      }
    } else { //Other wise push a new Object
      const firstBlog = [{ id: data.id, title: data.titleInput, description: data.descriptionInput, comments: [] }];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(firstBlog));
      setBlogs(() => {
        return firstBlog;
      });
    }
  }

  const updateStorageAndState = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    setBlogs(() => {
      return data;
    });
    setBlogAdded((prevState) => {
      return !prevState;
    })
  }

  return (
    <div>
      <Header></Header>
      <BlogForm processSubmittedData={processSubmittedData}></BlogForm>
      {blogs.map(item =>
        <Blogitem key={item.id} id={item.id} title={item.title} description={item.description} comments={item.comments} hideComments={true}></Blogitem>
      )}
    </div>
  );
}
export default App;
