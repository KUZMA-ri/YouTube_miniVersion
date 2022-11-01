import { useEffect, useState } from 'react';
// styles
import styles from './styles/app.module.css';

// custom hooks
import useLocalStorage from './useLocalStorage';
import useIsMobile from './useIsMobile';

// axios
import axios from 'axios';

// components
import SearchForm from './SearchForm';
import YoutubePlayer from './YoutubePlayer';
import PreviewList from './PreviewList';
import Comments from './Comments';
import BlockComments from './BlockComments';
import MobilePreviewList from './MobilePreviewList';
//-------------------------------------------------------------------------------------


const YouTubeApp = () => {
  const [videos, setVideos] = useLocalStorage("videos", "");
  const [activeVideoId, setActiveVideoId] = useLocalStorage("firstVideo", "");
  const [comments, updateComments] = useLocalStorage("addComment", []);

  const addComment = (comment) => {
    updateComments([...comments, comment]);
    localStorage.setItem('addComment', JSON.stringify(addComment));
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

  // const isMobile = useIsMobile();
  // useEffect(() => {
  //   isMobile ? <MobilePreviewList mobileVideos={mobileVideos} onClick={selectVideo}/> : <PreviewList videos={videos} onClick={selectVideo}/>
  // }, [isMobile])


  return (
    <>
      <SearchForm onSubmit={searchVideo} videoId={activeVideoId} videos={videos}/>
      {videos && (
        <div className={styles.mainBlock}>
          <YoutubePlayer videoId={activeVideoId}/>
          <br />
          {/* {isMobile && (
              <MobilePreviewList mobileVideos={mobileVideos} onClick={selectVideo}/>
          )}
          {!isMobile && (
              <PreviewList videos={videos} onClick={selectVideo}/>
          )} */}
          <PreviewList videos={videos} onClick={selectVideo}/>
          <Comments addComment={addComment}/>
          <BlockComments comments={comments} addComment={addComment}/>
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
