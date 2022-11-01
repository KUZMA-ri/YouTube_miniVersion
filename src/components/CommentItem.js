import React from 'react';
import styles from './styles/commentItem.module.css';

const CommentItem = (props) => {
    const {comments} = props;
    console.log(props);

    return(
        <div className={styles.container}>
            <p className={styles.date}>{comments.date}</p>
            <br />
            <h3 className={styles.name}>{comments.name}</h3>
            <p className={styles.comment}>{comments.comment}</p>
        </div>
    )
}

export default CommentItem;