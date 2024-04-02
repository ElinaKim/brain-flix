import { useState } from 'react'
import './VideoList.scss'
import video from '../../data/videos.json'
import videoDetails from '../../data/video-details.json'
import Video from '../../components/Video/Video'
import Comment from '../../components/Comment/Comment'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

export default function VideoList() {
    const [selectedVideo, setSelectedVideo] = useState(video[0]);
    const [selectedVideoDetails, setSelectedVideoDetails] = useState(videoDetails.find(item => item.id === videoDetails[0].id) || null);

    const handleVideoClick = (video) => {
        if (!video.id) {
            throw new Error('Invalid video');
        }
        setSelectedVideo(video);
        setSelectedVideoDetails(videoDetails.find(item => item.id === video.id));
    }
    const selectedVideoDetails = videoDetails.find(item => item.id === selectedVideo)
    const filteredVideos = video.filter((item) => selectedVideo.id !== item.id);
    
    return(
    <div className='videoList'>
        <VideoPlayer selectedVideo={selectedVideoDetails} />
        <h2 className='videoList__heading'>NEXT VIDEOS</h2>
                {
                    filteredVideos.map((video)=>(
                        <div className='video' key={video.id} onClick={() => handleVideoClick(video)}>
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