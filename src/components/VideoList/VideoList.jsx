import './VideoList.scss'
import '../../pages/Home/Home.scss'

export default function VideoList({video, selectedVideo, handleVideoClick}) {
    const filteredVideos = video.filter((item) => selectedVideo.id !== item.id);

    return(
            <div className='videoList'>
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
                    ))
                }
            </div>
    )
}