import { useState } from 'react';
import '../../index.css'

function BlogForm(props) {

    //INPUT HOOKS
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');


    //INPUT HANDLERS
    const titleInputHandler = (event) => {setTitleInput(event.target.value);}
    const descriptionInputHandler = (event) => {setDescriptionInput(event.target.value);}
    const submitHandler = (event) => {
        event.preventDefault();
        const submittedData = {
            titleInput: titleInput,
            descriptionInput: descriptionInput
        }
        props.processSubmittedData(submittedData);

    }

    return(
    <div className="form-container">
        <form onSubmit={submitHandler}>
        
        <button
            id="blog-form-action"
            className="form-action">Add Blog
        </button>
        
        <input 
            name= "title" 
            className="input-card" 
            type="text" 
            placeholder="Title"
            onChange={titleInputHandler}>
        </input>
        
        <input 
            name= "description" 
            className="input-card" 
            type="text" 
            placeholder="Description"
            onChange={descriptionInputHandler}>  
        </input>
        
        </form>
    </div>
    );
}
export default BlogForm;