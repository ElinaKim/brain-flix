import './Comment.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg'

export default function Comment({comments}){
    return (
        <div className='comment'>
            <h3>{comments.length} Comments</h3>
            <form className='form'>
                <div className='form__imgDiv'>
                    <img className='form__avatar'src={avatar} alt='user avatar'></img>
                </div>
                <div className='form__textDiv'>
                    <div className='form__comment'>
                    <label htmlFor="form__comment">JOIN THE CONVERSATION</label>
                    <textarea id='form__comment' placeholder='Add a new comment' type='text'/>
                    </div>
                    <button className='form__btn' type='submit'>COMMENT</button>
                </div>
            </form>
            <div className='commentList'>
                <ul className='commentList__list'>
                    {comments.map(comment => (
                    <li className='commentList__item'>
                        <div className='comment__imgDiv'>
                            <div className='comment__img'></div>
                        </div>
                        <div className='comment__textDiv'>
                            <div className='textDiv__container'>
                            <h3 className='textDiv__name'>{comment.name}</h3>
                            <p className='textDiv__date'>{comment.date}</p>
                            </div>
                            <p className='comment__content'>{comment.comment}</p>
                        </div>
                    </li>
                     ))}
                </ul>
            </div>
        </div>
    )
}