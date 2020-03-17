import React from 'react'
import './Folder.css'
import {Link} from 'react-router-dom'

function Folder(props) {
    return(
        <Link to={`/${props.id}`}><div className="folder">{props.name}</div></Link>
    )
}

export default Folder