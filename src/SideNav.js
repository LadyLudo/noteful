import React from 'react'
import Folder from "./Folder";
import APIContext from "./APIContext";

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
                    <button className="folder">Create Folder</button>
                </div>


        )
    }

}

export default SideNav