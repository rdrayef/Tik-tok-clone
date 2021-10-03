import { useEffect, useState } from 'react';
import db from './firebase';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    //fires once when the component load
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [])
  return (
    //BEM coonvention
    <div className="app">
      <div className="app__videos">
        {videos.map(({ url, description, channel, messages, likes, song, shares }) => (
          <Video
            url={url}
            channel={channel}
            song={song}
            description={description}
            messages={messages}
            likes={likes}
            shares={shares}
          />

        ))}

      </div>
    </div>
  );
}

export default App;
