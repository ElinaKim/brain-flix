import './VideoList.scss'
import '../../pages/HomePage/HomePage.scss'
import {Link} from 'react-router-dom'

export default function VideoList({video, selectedVideoId, handleVideoClick}) {
    if (!selectedVideoId) {
        return null
    }
    const filteredVideos = video.filter((item) => selectedVideoId !== item.id);
    return(
        <div className='videoComponent__videoList'>
            <div className='videoList'>
                <h2 className='videoList__heading'>NEXT VIDEOS</h2>
                {
                    filteredVideos.map((video)=>(
                        <Link to={`/videos/${video.id}`} key={video.id}>
                            <div className='video' key={video.id} onClick={() => handleVideoClick(video)}>
                            <img className='video__img' src={video.image} alt={video.title}/>
                                <div className='details'>
                                    <h3 className='details__title'>{video.title}</h3>
                                    <p className='details__author'>{video.channel}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}