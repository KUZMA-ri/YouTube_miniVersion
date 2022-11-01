import React from 'react';
import styles from './styles/commentItem.module.css';

const CommentItem = (props) => {
    const {name, comment, date} = props;

    return(
        <div className={styles.container}>
            <p className={styles.date}>Date: {date}</p>
            <br />
            <h3 className={styles.name}>Name: {name}</h3>
            <p className={styles.comment}>Comment: {comment}</p>
        </div>
    )
}

export default CommentItem;