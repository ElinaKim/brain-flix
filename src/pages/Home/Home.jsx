import { useEffect, useState } from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoDetails from '../../components/Video/VideoDetails'
import VideoList from '../../components/VideoList/VideoList'
import { fetchVideos } from '../../api/videoApi'
import {useParams, useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const { videoId } = useParams()
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null);

    // 1st render: load videos -> set selected video to the first video -> load selected video details by video id
    // when user selects video: get video id from URL -> find video in video array -> set selected video the video we found -> load selected video details by video id

    useEffect(() => {
        fetchVideos()
            .then((videos) => setVideos(videos))
    }, [])

    useEffect(() => {
        if (videos.length === 0) {
            return
        }
        setSelectedVideo(videos[0])
        navigate(`/videos/${videos[0].id}`)
    }, [videos])

    useEffect(() => {
        if (!videoId) {
            return
        }

        const video = videos.find(video => video.id === videoId)

        setSelectedVideo(video)
    }, [videoId])

    const handleVideoClick = (video) => {
        if (!video.id) {
            throw new Error('Invalid video');
        }
        setSelectedVideo(video);
    }

    return (
    <div className='home'>
        <Header />
        <div className='videoMain'>
            <VideoPlayer selectedVideo={selectedVideo} />
            <div className='videoComponent'>
                <VideoDetails videoId={ selectedVideo?.id ?? null} />
                
                <VideoList
                    video={videos}
                    selectedVideoId={selectedVideo?.id ?? null}
                    handleVideoClick={handleVideoClick}
                />
            </div>
        </div>
    </div>
    )
}