import React from 'react'
import Note from "./Note";
import APIContext from "./APIContext";

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
                    <button >Create Note</button>
                </div>

        )
    }
}


export default MainWindow