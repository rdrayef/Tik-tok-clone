import React, { useRef, useState } from 'react'
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);



    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();

            setPlay(false);

        } else {
            videoRef.current.play();

            setPlay(true);


        }
    };
    return (
        <div className="video">
            <video
                ref={videoRef} className="video__player" loop onClick={onVideoPress} src={url} >

            </video>
            <VideoFooter channel={channel} song={song} description={description} />
            {/* Video SideBar */}
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
