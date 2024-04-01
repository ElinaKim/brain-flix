import './Header.scss';
import logoImage from '../../assets/images/BrainFlix-logo.svg'
// import searchIcon from '../../assets/icons/search.svg'
import uploadIcon from '../../assets/icons/upload.svg'
import userImg from '../../assets/images/Mohan-muruge.jpg'
export default function Header(){
    return(
    <div className="header">
    <img className="header__logo" src={logoImage} alt='brand logo'/>
            <div className='search__container'>
            <div className="search__input">
                <input className="search__field" type="text" placeholder='Search'/>
            </div>
            <div className='search__avatar-cropper'>
                <img className='search__avatar' src={userImg} alt='user avatar'></img>
            </div>
            <button className='search__upload'>UPLOAD</button>
            </div>
        </div>
    )
}