import React from 'react'
import APIContext from "./APIContext";

class FolderNav extends React.Component {
    static defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }
    static contextType = APIContext

    render(){
    const title = this.context.folders.map(folder => {
        if (folder.id === this.props.match.params.folderId) {
            return folder.name
        }
    })
    return(
        <>
            <h2>{title}</h2>
            <button onClick={this.props.history.goBack}>Go Back</button>
        </>
    )
    }
}

export default FolderNav