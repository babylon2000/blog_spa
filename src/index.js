import ReactDOM from 'react-dom';
import React from 'react';
import Post from './components/Post';
import POSTS from './database/POSTS';

const post = POSTS[0];

ReactDOM.render(<Post post={post} />, document.getElementById('root'));