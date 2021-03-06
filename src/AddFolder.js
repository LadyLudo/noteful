import React from 'react'
import APIContext from "./APIContext";
import config from "./config"

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
            folder_name: event.target['folderName'].value
        }

        fetch(`${config.API_ENDPOINT}/folders`, {
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
                this.context.createFolder(newFolder)
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
                    <label htmlFor="folderName">Folder name: </label>
                    <input type="text" id="folderName" name="folderName" required aria-required="true"/>
                    <br/>
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

export default AddFolder
