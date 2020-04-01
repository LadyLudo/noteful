import React from 'react'
import Note from "./Note";
import APIContext from "./APIContext";
import {Link} from 'react-router-dom'

class MainWindow extends React.Component {
    static contextType = APIContext

    renderNotes = (notes) => {
        const created = notes.map(note => {
            return(
                <Note key={note.id} id={note.id} folderId={note.folderId} name={note.name} modified={note.modified} />
            )
        })
        return(created)
    }
    render() {
        return(

                <div className="notes">
                    {this.renderNotes(this.context.notes)}
                    <Link to="/addNote"><button>Create Note</button></Link>
                </div>

        )
    }
}


export default MainWindow