import React from 'react'
import Note from "./Note";
import APIContext from "./APIContext";
import {Link} from 'react-router-dom'

class MainWindow extends React.Component {
    static contextType = APIContext

    renderNotes = (notes) => {
        const created = notes.map(note => {
            return(
                <Note key={note.id.toString()} id={note.id.toString()} folderId={note.folderId} name={note.title} modified={note.modified} />
            )
        })
        return(created)
    }
    render() {
        return(

                <div className="notes">
                    <Link to="/addNote"><button>Create Note</button></Link>
                    {this.renderNotes(this.context.notes)}
                </div>

        )
    }
}


export default MainWindow