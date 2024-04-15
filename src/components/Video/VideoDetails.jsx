import './Video.scss'
import Comment from '../Comment/Comment'

export default function VideoDetails({ videoDetails }){
    if(!videoDetails){
        return null
    }

    const {
        title, 
        channel, 
        timestamp, 
        views, 
        likes, 
        description,
        comments 
    } = videoDetails

    return (
        <div className='videoComponent__video'>
            <div className='videoPreview'>
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
            <Comment comments={comments} />
        </div>
    )
    function formatDate(date){
        return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`}
}