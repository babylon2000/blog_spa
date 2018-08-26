import React from 'react';
import PropTypes from 'prop-types';


const Post = (props) => {
    const {
        id,
        author,
        text,
        photo,
        date
    } = props.post;

    return <div>
                <span>{author}</span>
                *
                <span>{date}</span>
                <div>
                    <img src={photo} />
                </div>
                <div>
                    {text}
                </div>
           </div>;
};


Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string,
        photo: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })
};


export default Post;