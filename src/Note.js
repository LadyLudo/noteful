import React from 'react'
import "./Note.css"
import {Link} from 'react-router-dom'
import moment from "moment";
import APIContext from "./APIContext";
import PropTypes from 'prop-types'


class Note extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = APIContext

    onDelete = (noteId) => {
        this.context.deleteNote(noteId, this.props.folder);
        window.location.reload();
    }
    render() {
        const date = moment(this.props.modified)

        return(
            <div className="note">
                <Link to={`/note/${this.props.id}`}><h2 className="noteTitle">{this.props.name}</h2></Link>
                <div className="noteInfo">
                    <p className="date"><strong>Date created: </strong>{date.format("MMM Do YYYY")}</p>
                    <button className="noteName" onClick={() => this.onDelete(this.props.id)}>Delete Note</button>
                </div>
            </div>
        )
    }
}

export default Note

Note.propTypes = {
    folderId: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}