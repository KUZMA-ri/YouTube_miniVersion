import React from "react";
const PreviewItem = (props) => {
    const { onClick, id } = props;

    return(
        <img 
            src={props.snippet.thumbnails.default.url}
            alt="preview"
            style={{ margin:'0 20px' }}
            onClick={() => onClick(id.videoId)}
        />
    )
}

export default PreviewItem; 