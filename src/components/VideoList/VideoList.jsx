import { useState } from 'react'
import './VideoList.scss'
import video from '../../data/videos.json'
import videoDetails from '../../data/video-details.json'
import Video from '../../components/Video/Video'
import Comment from '../../components/Comment/Comment'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

export default function VideoList(){
    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0])

    const handleVideoClick = (video) => {
        setSelectedVideo(video);

    }
    const selectedVideoDetails = videoDetails.find(item => item.id === selectedVideo)
    const filteredVideos = video.filter((item) => selectedVideo.id !== item.id)
    
    return(
    <div className='videoList'>
        <VideoPlayer selectedVideo={selectedVideoDetails} />
        <h2 className='videoList__heading'>NEXT VIDEOS</h2>
        {filteredVideos.map((video)=>(
            <div className='video' key={video.id} onClick={() => handleVideoClick(video.id)}>
                <img className='video__img' src={video.image} alt={video.title}></img>
                <div className='details'>
                    <h3 className='details__title'>{video.title}</h3>
                    <p className='details__author'>{video.channel}</p>
            </div>
        </div>
        ))}

    </div>
    )
}