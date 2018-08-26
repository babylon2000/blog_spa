import emoji from 'emoji-green-heart';
import React from 'react';

function EmojiGreenHeart(props){
    return (
        <h1>I {emoji} {props.name}</h1>
    );
}


export default EmojiGreenHeart;