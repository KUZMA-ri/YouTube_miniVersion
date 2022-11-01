import { useState } from "react";
import styles from './styles/form.module.css';

const SearchForm = (props) => {
    const { onSubmit, videos, videoId } = props;
    const [searchFieldValue, setSearchFieldValue] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchFieldValue(value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        onSubmit(searchFieldValue.trim());
        e.target.reset();
    }

    return(
        <form className={styles.findVideo} onSubmit={submitForm}>
            <input 
                type="text"
                name="textarea"
                placeholder="Что будем искать?"
                className={styles.searchField}
                autoComplete='off'
                onChange={handleChange}
            />
            <button className={styles.searchBtn}>Поиск</button>
        </form>
    )
}

export default SearchForm;