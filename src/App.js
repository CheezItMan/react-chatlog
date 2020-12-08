import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import HeaderTitle from './components/HeaderTitle';

const App = () => {
  console.log(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>
          <HeaderTitle allChats={chatMessages}/>
        </h1>
      </header>
      <main>
        <ChatLog allChats={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
