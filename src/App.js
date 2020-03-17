import React from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'

import SideNav from "./SideNav";
import MainWindow from "./MainWindow";
import FolderNav from "./FolderNav";
import FolderNotes from "./FolderNotes";
import NoteDetail from "./NoteDetail";

class App extends React.Component {


    render() {
        return (
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
        );
    }
}


export default App;
