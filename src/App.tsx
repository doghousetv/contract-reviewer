import React from 'react';
import NavBar from './components/navbar';
import FileUpload from 'components/file-upload';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FileUpload />
    </div>
  );
}

export default App;
