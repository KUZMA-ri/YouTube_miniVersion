import React from 'react';
import CommentItem from './CommentItem';

const BlockComments = (props) => {
    const { comments } = props;

    const commentItems = comments.map((comment) => {
        <CommentItem key={comment.name} {...comment} comments={comments} />
    })
    
        return(
            <div>
                { commentItems }
            </div>
        )   
}

export default BlockComments;