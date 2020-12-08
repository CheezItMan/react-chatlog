import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatCollection = props.allChats.map((chat, i) => {
    return (
      <section key={i}>
        <ChatEntry
          sender={chat['sender']}
          body={chat['body']}
          timeStamp={chat['timeStamp']}
        />
      </section>
    )
  })
  
  return (
    <div className='chat-log'>
      {chatCollection}
    </div>
  )
}

ChatLog.propTypes = {
  allChats: PropTypes.arrayOf(PropTypes.object)
}

export default ChatLog;
