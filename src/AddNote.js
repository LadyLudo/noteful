import React from 'react'
import APIContext from "./APIContext";

class AddNote extends React.Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
    }
    static contextType = APIContext;

    handleSubmit = (event) => {
        event.preventDefault()
        const newNote = {
            name: event.target['noteTitle'].value,
            content: event.target['noteContent'].value,
            folderId: event.target['folderSelect'].value,
            modified: new Date(),
        }
        fetch('http://localhost:9090/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
            .then(result => {
                if (!result.ok)
                    return result.json().then(event => Promise.reject(event))
                return result.json()
            })
            .then(note => {
                this.context.createNote(note)
                this.props.history.push(`/${note.folderId}`)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        const { folders = [] } = this.context
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Create a Note</h2>
                    <label for='noteTitle'>Title: </label>
                    <input type='text' id='noteTitle' name='noteTitle' />
                    <br/>
                    <label for='noteContent'>Content: </label>
                    <textarea id='noteContent' name='noteContent' />
                    <br/>
                    <label for='folderSelect'>Folder: </label>
                    <select id='folderSelect' name='folderSelect'>
                        <option value={null}>...</option>
                        {folders.map(folder =>
                            <option key={folder.id} value={folder.id}>{folder.name}</option>
                        )}
                    </select>
                    <br/>
                    <button type='submit'>Create</button>
                </form>
            </div>
        )
    }
}

export default AddNote