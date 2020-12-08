import React from 'react';
import PropTypes from 'prop-types';

const HeaderTitle = (props) => {
  const chatCollection = props.allChats
  let chatBetween = []
  let i = 0
  while (chatBetween.length < 2) {
    const sender = chatCollection[i]['sender']
    if (chatBetween[0] !== sender && chatBetween[1] !== sender) {
      chatBetween.push(sender)
    }
    i++
  }

  return (
    <span>
      Chat between {chatBetween[0]} and {chatBetween[1]}
    </span>
  )
}

HeaderTitle.propTypes = {
  allChats: PropTypes.arrayOf(PropTypes.object)
}

export default HeaderTitle;
