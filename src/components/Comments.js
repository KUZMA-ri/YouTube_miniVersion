import React, { useEffect, useState } from 'react';
import styles from "./styles/comments.module.css";
import moment from "moment";

const Comments = (props) => {
    const { addComment } = props;

    const [commentInfo, setCommentInfo] = useState({
        name: '',
        comment: '',
        date: moment().format('llll'),
    })

    const handleChange = (e) => {
        setCommentInfo({...commentInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(commentInfo);
        setCommentInfo({ name: '', comment: '', date: moment().format('llll')})
    }

    return(
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.title}>
                    <h2>Comments</h2>
                </div>
                <div className={styles.formForComments}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form_group}>
                            <label htmlFor="comment-name">Name:</label>
                                <input 
                                type="name"
                                name="name"
                                className={styles.form_control}
                                id="comment-name"
                                placeholder="Enter your name"
                                value={commentInfo.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="comment-body">Comment:</label>
                            <input 
                                type="text"
                                name="comment"
                                className={styles.form_control}
                                id="comment-body"
                                placeholder="Your comment"
                                value={commentInfo.comment}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.form_group}>
                            <button 
                                type="submit"
                                id="comment-add"
                                className={styles.btn_addComment}
                                >Add comment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Comments;