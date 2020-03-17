import React from 'react'
import STORE from "./dummy-store";
import Folder from "./Folder";

class SideNav extends React.Component {
    createFolders = (folders) => {
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
                    {this.createFolders(STORE.folders)}
                    <button className="folder">Create Folder</button>
                </div>


        )
    }

}

export default SideNav