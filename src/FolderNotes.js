import React from 'react'
import Note from './Note'
import APIContext from "./APIContext";

class FolderNotes extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = APIContext
    render(){
    const created = this.context.notes.map(note => {
        if (note.folder == this.props.match.params.folderId) {
            return(
                <Note key={note.id.toString()} id={note.id.toString()} folderId={note.folder.toString()} name={note.title} modified={note.modified} />
            )
        }
    })

    return(
                <>{created}</>
            )
    }
}

export default FolderNotes