import React from 'react'
import APIContext from "./APIContext";

class AddFolder extends React.Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
    }
    static contextType = APIContext;

    handleSubmit = (event) => {
        event.preventDefault()
        const newFolder = {
            name: event.target['folderName'].value
        }

        fetch('http://localhost:9090/folders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newFolder)
        })
            .then(result => {
                if(!result.ok)
                    return result.json().then(event => Promise.reject(event))
                return result.json()
            })
            .then(newFolder => {
                this.context.addFolder(newFolder)
                this.props.history.push('/')
            })
            .catch(error => {
            console.error({error})
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Create a folder</h2>
                    <label for="folderName">Folder name: </label>
                    <input type="text" id="folderName" name="folderName"/>
                    <br/>
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

export default AddFolder