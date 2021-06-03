import './Tutorial.css';
const Tutorial = () => {

    const updateStatus = () => {
        console.log('update status');
    }

    const updateContent = () => {
        console.log('update content');
    }

    const removeTutorial = () => {
        console.log('remove tutorial');
    }

    return (
        <div className = "edit-form submit-form">
          <h3> Tutorial</h3>
          <form>
              <div className = "form-group">
                  <label htmlFor = "title">Title</label>
                  <input 
                    type = 'text'
                    className = "form-control"
                    id="title"
                    name = "title"
                    value = "" 
                    onChange = ""
                    />
              </div>
              <div className = "form-group">
                  <label htmlFor = "description">Description</label>
                  <input 
                    type = 'text'
                    className = "form-control"
                    id="description"
                    name = "description"
                    value = "" 
                    onChange = ""
                    />
              </div>
              <div className = "form-group">
                  <label>
                      <strong>Status:</strong>
                  </label>
                  Published
              </div>
              {
                  "published" ? 
                  (<button className = "badge badge-primary bg-warning text-dark me-2"
                  onClick = {() => updateStatus(false)}>UnPublish</button>)
                  : (<button className = "badge badge-primary me-2"
                  onClick = {() => updateStatus(true)}>Publish</button>)
              }
              <button className = "badge bg-danger text-dark me-2" 
              onClick = {removeTutorial}>Delete</button>
              <button type = "submit" className = "badge bg-success text-dark"
              onClick = {updateContent}>
                  Update
              </button>
          </form>

        </div>
    )
}

export default Tutorial;