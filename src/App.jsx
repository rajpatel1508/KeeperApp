import React, { useState } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Note from './components/note.jsx';
import notes from './notes';
import CreateArea from './components/createarea.jsx';


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(pre => {
            return [...pre, note];
        });
    }

    function deleteNote(id) {
        setNotes(pre => {
            return pre.filter((noteitem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="App">
            <Header />
            <CreateArea
                onAdd={addNote}
            />
            {notes.map((noteitem, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={noteitem.title}
                    content={noteitem.content}
                    onDelete={deleteNote}
                />
            })}

            <Footer />
        </div>
    );
}

export default App;