import React from 'react'
import "./Note.css"
import {Link} from 'react-router-dom'
import moment from "moment";

function Note(props) {
    const date = moment(props.modified)
    return(
        <div className="note">
            <Link to={`./${props.folderId}/${props.id}`}><h2 className="noteName">{props.name}</h2></Link>
            <div className="noteInfo">
                <p>Date modified on {date._d.toString()}</p>
                <button className="noteName">Delete Note</button>
            </div>
        </div>
    )
}

export default Note