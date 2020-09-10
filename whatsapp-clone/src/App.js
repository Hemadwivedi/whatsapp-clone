import React from 'react';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chats/Chats'

import './App.css';

function App() {
  return (
    //BEM naming convention
    <div className="App">
    <h1>Lets build a whatsapp</h1>
    <div className='app_body'>
      {/* sidebar*/}
      <Sidebar/>
      <Chat/>
      {/* Chat*/}
    </div>
    </div>
  );
}

export default App;
