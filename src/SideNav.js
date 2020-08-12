import React from 'react'
import Folder from "./Folder";
import APIContext from "./APIContext";
import {Link} from 'react-router-dom'

class SideNav extends React.Component {
    static contextType = APIContext

    renderFolders = (folders) => {
        const created = folders.map(folder => {
            return(
                <Folder key={folder.id.toString()} id={folder.id.toString()} name={folder.folder_name} />
            )
        })
        return(created)
    }
    render() {
        return(

                <div className="folders">
                    <Link to="/addFolder"><button className="createFolder">Create Folder</button></Link>
                    {this.renderFolders(this.context.folders)}
                </div>


        )
    }

}

export default SideNav