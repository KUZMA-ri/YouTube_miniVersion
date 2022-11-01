import { useEffect, useState } from 'react';
import styles from './styles/app.module.css';
import useLocalStorage from './useLocalStorage';
import axios from 'axios';
import SearchForm from './SearchForm';
import YoutubePlayer from './YoutubePlayer';
import PreviewList from './PreviewList';
import Comments from './Comments';
import BlockComments from './BlockComments';

const YouTubeApp = () => {

  const [videos, setVideos] = useLocalStorage("videos", "");
  const [activeVideoId, setActiveVideoId] = useLocalStorage("firstVideo", "");
  const [comments, updateComments] = useState([]);

  const addComment = (comment) => {
    updateComments([...comments, comment]);
  };
  
  const searchVideo = (searchPhrase) => {
    if(searchPhrase) {
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCWZIqP7j3fCz2AQ9SUVQEV76szwCButOU&q=${searchPhrase}&type=video`)
        .then((response) => {
          const videos = response.data;
          const firstVideo = videos.items[0].id.videoId;
          localStorage.setItem('firstVideo', JSON.stringify(firstVideo));
          localStorage.setItem('videos', JSON.stringify(videos));
          setVideos(videos);
          setActiveVideoId(firstVideo);     
        })
    } else {
      alert('Вы еще ничего не ввели');
    }
  }

  const selectVideo = (videoId) => {    
    setActiveVideoId(videoId);
  }


  // для отображения 3 видео: videos.pageInfo.resultsPerPage: 3 (стоит 5)


  return (
    <>
      <SearchForm onSubmit={searchVideo} videoId={activeVideoId} videos={videos}/>
      {videos && (
        <div className={styles.mainBlock}>
          <YoutubePlayer videoId={activeVideoId}/>
          <br />
          <Comments addComment={addComment}/>
          <BlockComments comments={comments} addComment={addComment}/>
          <PreviewList videos={videos} onClick={selectVideo}/>
          <br />
          <button className={styles.btnClear} onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}>Clear all</button>
        </div>
      )}
      
    </>
  );
}

export default YouTubeApp;
