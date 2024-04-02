import './Video.scss'

export default function Video({ selectedVideo }){
    if(!selectedVideo){
        return null
    }
    const {image, title, channel, timestamp, views, likes,description} = selectedVideo

    return(
        <div className='videoPreview'>
            <video className='videoPreview__video' controls poster={image}></video>
            <h2 className='videoPreview__title'>{title}</h2>
            <div className='videoDetails'>
            <div className='videoDetails__container'>
                <p className='videoDetails__author'>By {channel}</p>
                <p className='videoDetails__date'>{formatDate(new Date(timestamp))}</p>
            </div>
            <div className='videoDetails__container'>
                <p className='videoDetails__views'>{views}</p>
                <p className='videoDetails__likes'>{likes}</p>
            </div>
            <div>
            </div>
            </div>
            <div className='videoDescription'>
                <p className='videoDescription__text'>{description}</p>
            </div>
        </div>
    )
    function formatDate(date){
        return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`}
}