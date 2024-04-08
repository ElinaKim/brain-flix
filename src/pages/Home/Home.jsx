import { useEffect, useState } from 'react'
import './Home.scss'
import videoDetails from '../../data/video-details.json'
import Header from '../../components/Header/Header'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import Video from '../../components/Video/Video'
import Comment from '../../components/Comment/Comment'
import VideoList from '../../components/VideoList/VideoList'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY

export default function Home() {
    const { videoId } = useParams()
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedVideoDetails, setSelectedVideoDetails] = useState({});
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        const fetchVideos = async()=> {
            try {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=${API_KEY}`)
            setVideos(response.data)
            setSelectedVideo(response.data[0])
            } catch (error) {
                console.error('Invalid get request: ', error)
            }
        }
        fetchVideos()
    },[])

    useEffect(()=>{
        const fetchVideosById = async()=> {
            try{
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=${API_KEY}`)
            setSelectedVideoDetails(response.data)
        } catch (error) {
             console.error('Unable to get video details: ', error)
        }
    }
        fetchVideosById()
    },[videoId, API_KEY])

    const handleVideoClick = (video) => {
        if (!video.id) {
            throw new Error('Invalid video');
        }
        setSelectedVideo(video);
        setSelectedVideoDetails(video);
    }

    return(
    <div className='home'>
        <Header />
        <div className='videoMain'>
            <VideoPlayer selectedVideo={selectedVideoDetails} />
            <div className='videoComponent'>
                <div className='videoComponent__video'>
                    <Video selectedVideo={selectedVideoDetails} />
                    <Comment comments={selectedVideoDetails.comments} />
                </div>
                <div className='videoComponent__videoList'>
                    <VideoList
                    video={videos}
                    selectedVideo={selectedVideo}
                    handleVideoClick={handleVideoClick}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}