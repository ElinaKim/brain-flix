import Header from '../../components/Header/Header'
import thumbnailImg from '../../assets/images/Upload-video-preview.jpg'
import './Upload.scss'
export default function Upload(){
    return(
        <div>
            <Header />
            <div className='upload'>
                <h2 className='upload__title'>Upload Video</h2>
                    <form className='form__upload'>
                        <div className='form__body'>
                            <div className='thumbnail'>
                                <h3 className='thumbnail__title'>VIDEO THUMBNAIL</h3>
                                <img className='thumbnail__img' src={thumbnailImg} alt='upload preview' />
                            </div>
                            <div className='form__textContent'>
                                <div className='vidTitle'>
                                    <h3 className='vidTitle__title'>TITLE YOUR VIDEO</h3>
                                    <textarea className='vidTitle__input' name='title'
                                    placeholder='Add a title to your video'>
                                    </textarea>
                                </div>
                                <div className='description'>
                                    <h3 className='description__title'>ADD A VIDEO DESCRIPTION</h3>
                                    <textarea className='description__input' name='description'
                                    placeholder='Add a description to your video'>
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className='btn'>
                                <button className='btn__publish' type='submit'>PUBLISH</button>
                                <button className='btn__cancel'>CANCEL</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}