import React from 'react'
import './Folder.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import APIContext from "./APIContext";

class Folder extends React.Component {

    static contextType = APIContext;

    render() {
        return(
            <div className="folder">
            <Link to={`/${this.props.id}`}><div className="folderTitle">{this.props.name}</div></Link>
            <button className="folderButton" onClick={() => this.context.deleteFolder(this.props.id)}>X</button>
            </div>
        )
    }
    
}

export default Folder

Folder.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}