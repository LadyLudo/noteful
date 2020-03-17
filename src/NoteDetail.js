import React from 'react'
import STORE from './dummy-store'
import {useParams} from 'react-router-dom'
import moment from "moment";

function NoteDetail() {
    const params = useParams()
    const noteDetail = STORE.notes.map(note => {
        if (note.id === params.noteId) {
            return(
                <div className="note" key={note.id}>
                    <h2>{note.name}</h2>
                    <p>Date modified: {moment(note.modified)._d.toString()}</p>
                    <p>{note.content}</p>
                    <button>Delete Note</button>
                </div>
            )
        }
    })
    return(
        <>{noteDetail}</>
    )
}


export default NoteDetail