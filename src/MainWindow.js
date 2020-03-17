import React from 'react'
import STORE from "./dummy-store";
import Note from "./Note";

class MainWindow extends React.Component {
    createNotes = (notes) => {
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
                    {this.createNotes(STORE.notes)}
                    <button >Create Note</button>
                </div>

        )
    }
}


export default MainWindow