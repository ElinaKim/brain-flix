import './VideoPlayer.scss'

export default function VideoPlayer({selectedVideo}){
    if (!selectedVideo) {
        return null
    }
    
    return(
        <div className='videoPlayer'>
            <video className='videoPlayer__video' controls poster={selectedVideo.image}></video>
        </div>
    )
}