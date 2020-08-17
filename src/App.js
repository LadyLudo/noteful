import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import APIContext from "./APIContext";
import config from "./config"

import SideNav from "./SideNav";
import MainWindow from "./MainWindow";
import FolderNav from "./FolderNav";
import FolderNotes from "./FolderNotes";
import NoteDetail from "./NoteDetail";
import AddFolder from "./AddFolder";
import AddNote from "./AddNote";
import ServerError from "./ServerError";

class App extends React.Component {
    state = {
        folders: [],
        notes: []
    }

    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/notes`),
            fetch(`${config.API_ENDPOINT}/folders`)
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));
                return Promise.all([notesRes.json(), foldersRes.json()]);
            })
            .then(([notes, folders]) => {
                this.setState({notes, folders});
            })
            .catch(error => {
                console.error({error});
            });
    }

    handleDeleteNote = (noteId, folderId) => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
       fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
           method: 'DELETE',
           headers: {
               'content-type' : 'application/json'
           },
       })
    };

    handleDeleteFolder = (folderId) => {
        this.setState({
            notes: this.state.folders.filter(folder => folder.id !== folderId)
        });
       fetch(`${config.API_ENDPOINT}/folders/${folderId}`, {
           method: 'DELETE',
           headers: {
               'content-type' : 'application/json'
           },
       })
       .then(res => {
        window.location.reload();
       })
    };

    handleAddFolder = (folder) => {
        this.setState({
            folders: [
                ...this.state.folders,
                folder
            ]
        })
    };

    handleAddNote = (note) => {
        this.setState( {
            notes: [
                ...this.state.notes,
                note
            ]
        })
    };

    render() {
        const contextValue = {
            notes: this.state.notes,
            folders: this.state.folders,
            deleteNote: this.handleDeleteNote,
            createFolder: this.handleAddFolder,
            createNote: this.handleAddNote,
            deleteFolder: this.handleDeleteFolder

        }

        return (
            <APIContext.Provider value={contextValue}>
                <div className="App">
                    <header>
                        <Link to="/"><h1 className="app_title">Noteful</h1></Link>
                        <hr></hr>
                    </header>
                    <div className="content">
                        <nav>
                            <ServerError>
                            <Route exact path="/"><SideNav /></Route>
                            <Route path="/:folderId" component={FolderNav} />
                            </ServerError>
                        </nav>
                        <main>
                            <ServerError>
                            <Route exact path="/"><MainWindow /></Route>
                            <Route exact path="/:folderId" component={FolderNotes} />
                            <Route path="/note/:noteId" component={NoteDetail} />
                            <Route path="/addFolder" component={AddFolder} />
                            <Route path="/addNote" component={AddNote} />
                            </ServerError>
                        </main>
                    </div>
                </div>
            </APIContext.Provider >
        );
    }
}


export default App;
