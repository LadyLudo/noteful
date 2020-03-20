import React from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import APIContext from "./APIContext";

import SideNav from "./SideNav";
import MainWindow from "./MainWindow";
import FolderNav from "./FolderNav";
import FolderNotes from "./FolderNotes";
import NoteDetail from "./NoteDetail";

class App extends React.Component {
    state = {
        folders: [],
        notes: []
    }

    componentDidMount() {
        Promise.all([
            fetch('http://localhost:9090/notes'),
            fetch('http://localhost:9090/folders')
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
       fetch(`http://localhost:9090/${folderId}/${noteId}`, {
           method: 'DELETE',
           headers: {
               'content-type' : 'application/json'
           },
       })
    };

    render() {
        const contextValue = {
            notes: this.state.notes,
            folders: this.state.folders,
            deleteNote: this.handleDeleteNote};

        return (
            <APIContext.Provider value={contextValue}>
                <div className="App">
                    <header>
                        <Link to="/"><h1>Noteful</h1></Link>
                        <hr></hr>
                    </header>
                    <div className="content">
                        <nav>
                        <Switch>
                            <Route exact path="/"><SideNav /></Route>
                            <Route path="/:folderId" component={FolderNav} />
                        </Switch>
                        </nav>
                        <main>
                        <Switch>
                            <Route exact path="/"><MainWindow /></Route>
                            <Route exact path="/:folderId" component={FolderNotes} />
                            <Route path="/:folderId/:noteId" component={NoteDetail} />
                        </Switch>
                        </main>
                    </div>
                </div>
            </APIContext.Provider >
        );
    }
}


export default App;
