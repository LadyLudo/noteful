import React from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import STORE from './dummy-store'

function FolderNav(props) {
    const params = useParams()
    const title = STORE.folders.map(folder => {
        if (folder.id === params.folderId) {
            return folder.name
        }
    })
    const history = useHistory()
    return(
        <>
            <h2>{title}</h2>
            <button onClick={history.goBack}>Go Back</button>
        </>
    )

}

export default FolderNav