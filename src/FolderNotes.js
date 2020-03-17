import React from 'react'
import {useParams} from 'react-router-dom'
import Note from './Note'
import STORE from './dummy-store'

function FolderNotes() {
    const params = useParams()
    const created = STORE.notes.map(note => {
        if (note.folderId === params.folderId) {
            return(
                <Note key={note.id} id={note.id} folderId={note.folderId} name={note.name} modified={note.modified} />
            )
        }
    })

    return(
                <>{created}</>
            )
}

export default FolderNotes