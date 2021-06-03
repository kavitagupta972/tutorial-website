import {useState} from "react";
import './Tutorial.css'
const AddTutorial = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] =  useState("");

    function addTutorial() {
        console.log('inside add tutorial method');
    }

    function clearForm() {
        console.log('inside clear form method');
    }
    return(
        <div className = "submit-form">
            <div className = "form-group">
            <label>Title</label>
            <input 
                className = "form-control"
                type = "text"
                id = "title"
                required
                value = {title}
                onChange = {(event) => setTitle(event.target.value)}
            />
            </div>
            <div className = "form-group">
             <label>Description</label>
            <input 
                className = "form-control"
                type = "text"
                id = "description"
                required
                value = {description}
                onChange = {(event) => setDescription(event.target.value)}
            />
            </div>
            <button className = "btn btn-success me-3" onClick = {addTutorial}>Submit</button>
            <button className = "btn btn-secondary" onClick = {clearForm}>Reset</button>

        </div>
    )
    
    }
export default AddTutorial;