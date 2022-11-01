import PreviewItem from './PreviewItem';
import styles from './styles/previewList.module.css';

const PreviewList = (props) => {
    const { videos, onClick} = props;

    const items = videos.items.map((video) =>  (         
        <PreviewItem  key={video.id.videoId} {...video} onClick={onClick} />
    ))

    return(
        <div className={styles.list}>
            {items}
        </div>
    )
}

export default PreviewList;