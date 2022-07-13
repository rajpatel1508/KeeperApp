import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Note from './components/note.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;