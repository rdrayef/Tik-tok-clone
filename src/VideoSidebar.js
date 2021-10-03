import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SmsIcon from '@material-ui/icons/Sms';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

function VideoSidebar({ likes, shares, messages }) {
    const [liked, setliked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon
                        onClick={(e) => setliked(false)}
                    />

                ) : (<FavoriteBorderIcon
                    onClick={(e) => setliked(true)}

                />)}
                <p>{liked ? parseInt(likes) + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <SmsIcon />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
