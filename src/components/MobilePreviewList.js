import PreviewItem from "./PreviewItem";

const MobilePreviewList = (props) => {
    const { mobileVideos, onClick} = props;

    const mobileItems = mobileVideos.items.map((video) =>  (         
        <PreviewItem  key={video.id.videoId} {...video} onClick={onClick} />
    ))

    return(
        <div>
            {mobileItems}
        </div>
    )
}

export default MobilePreviewList;