import React from 'react'
import moment from "moment";
import APIContext from "./APIContext";

class NoteDetail extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = APIContext

    onDelete = (noteId) => {
        this.context.deleteNote(noteId, this.props.match.params.folderId);
        this.props.history.push('/')
    }
    render() {
    const noteDetail = this.context.notes.map(note => {
        if (note.id == this.props.match.params.noteId) {
            return(
                <div className="note" key={note.id}>
                    <h2>{note.title}</h2>
                    <p>Date modified: {moment(note.modified)._d.toString()}</p>
                    <p>{note.content}</p>
                    <button onClick={() => this.onDelete(note.id) }>Delete Note</button>
                </div>
            )
        }
    })
    return(
        <>{noteDetail}</>
    )
}
}

export default NoteDetail