import React from 'react'
import './Folder.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Folder(props) {
    return(
        <Link to={`/${props.id}`}><div className="folder">{props.name}</div></Link>
    )
}

export default Folder

Folder.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
}