import { Link } from "react-router-dom"
const TutorialsList = () => {
    const id = 1;
    const tutorials  = ["react", "angular", "vue"];
    const onSearchTitleChange = (event) => {
        console.log('inside onSearchTitleChange method');
    }

    const findByTitle = () => {
        console.log('inside findbytitle')
    }

    const setActiveTutorial = () => {
        console.log('set active tutorials');
    }

    const removeAllTutorials = () => {
        console.log('remove all tutorials');
    }
    return( 

        <div className = "tutorials-list ">
            
            <div className = "list row">
                <div className = " search-bar mt-3 col-md-8">
                    <div className = "input-group mb-3">
                        <input type = "text"
                        className = "form-control"
                        placeholder = "Search by Title"
                        value = ""
                        onChange = {onSearchTitleChange}
                        />
                        <div className = "input-group-append">
                            <button className = "btn btn-secondary"
                             onClick = {findByTitle}
                             > 
                             Search
                             </button>
                        </div>
                    </div>

                </div>
                <div className = "col-md-6">
                <h4> Tutorials List</h4>
                <ul className = "list-group">
                    {tutorials && tutorials.map( (tutorial, index) => (
                        <li key = {index} 
                        className = "list-group-item active" onClick = {() => setActiveTutorial(tutorial, index)}>
                            {tutorial}
                        </li>
                     ))}
                </ul>
                <button className = "m-3 ms-1 btn btn-sm btn-danger"
                     onClick = {removeAllTutorials}>
                    Remove All
                </button>
                </div>
                <div className = "col-md-6">
                  <div>
                    <h4>Tutorial</h4>
                    <div>
                        <label>
                            <strong> Title:</strong>
                        </label>
                        Title value
                    </div>
                    <div>
                        <label>
                            <strong> Description:</strong>
                        </label>
                        Description value
                    </div>
                    <div>
                        <label>
                            <strong> Status:</strong>
                        </label>
                        Published
                    </div>
                  </div>      
                
                <Link to = {"/tutorials/"+id} className = "badge  bg-warning text-dark"> Edit </Link>
                </div>
            </div>
        </div>
    );
}

export default TutorialsList;