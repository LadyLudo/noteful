import React from 'react'
import Folder from "./Folder";
import APIContext from "./APIContext";
import {Link} from 'react-router-dom'

class SideNav extends React.Component {
    static contextType = APIContext

    renderFolders = (folders) => {
        const created = folders.map(folder => {
            return(
                <Folder key={folder.id} id={folder.id} name={folder.name} />
            )
        })
        return(created)
    }
    render() {
        return(

                <div className="folders">
                    {this.renderFolders(this.context.folders)}
                    <Link to="/addFolder"><button className="folder">Create Folder</button></Link>
                </div>


        )
    }

}

export default SideNav