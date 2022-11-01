import React from 'react';
import CommentItem from './CommentItem';
import styles from './styles/blockComment.module.css';

const BlockComments = (props) => {
    const { comments } = props;

    const commentItems = comments.map((comment) => (
        <CommentItem key={comment.name} {...comment} comments={comments} />
    ))
    
        return(
            <div className={styles.blockContainer}>
                { commentItems }
            </div>
        )   
}

export default BlockComments;