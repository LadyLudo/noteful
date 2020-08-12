import React from 'react'


export default React.createContext({
    notes: [],
    folders: [],
    deleteNote: () => {},
    createFolder: () => {},
    createNote: () => {},
    deleteFolder: () => {}
})