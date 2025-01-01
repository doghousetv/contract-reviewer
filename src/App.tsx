import React from 'react';
import NavBar from './components/navbar';
import FileUpload from 'components/file-upload';

const App = () => {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundImage: 'url(/background.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <NavBar />
      <FileUpload />
    </div>
  );
}

export default App;
