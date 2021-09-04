import { useState } from 'react';
import '../../index.css'

function BlogForm(props) {

    //INPUT HOOKS
    const [idInput, setIdInput] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');


    //INPUT HANDLERS
    const idInputHandler = (event) => { setIdInput(event.target.value); }
    const titleInputHandler = (event) => { setTitleInput(event.target.value); }
    const descriptionInputHandler = (event) => { setDescriptionInput(event.target.value); }
    const submitHandler = (event) => {
        event.preventDefault();
        const submittedData = {
            id: idInput,
            titleInput: titleInput,
            descriptionInput: descriptionInput,
            timestamp: new Date()
        }
        props.processSubmittedData(submittedData);

    }

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>

                <button
                    className="form-action">Add Blog
                </button>

                <input
                    name="id"
                    className="input-card"
                    type="number"
                    placeholder="ID"
                    onChange={idInputHandler}>
                </input>

                <input
                    name="title"
                    className="input-card"
                    type="text"
                    placeholder="Title"
                    onChange={titleInputHandler}>
                </input>

                <input
                    name="description"
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