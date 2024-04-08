import './Header.scss';
import logoImage from '../../assets/images/BrainFlix-logo.svg'
import userImg from '../../assets/images/Mohan-muruge.jpg'
import { Link } from 'react-router-dom'
export default function Header(){
    return(
    <div className="header">
        <Link to='/'>
            <img className="header__logo" src={logoImage} alt='brand logo'/>
        </Link>
            <div className='search__container'>
                <div className="search__input">
                <input className="search__field" type="text" placeholder='Search'/>
            </div>
            <div className='search__avatar-cropper'>
                <img className='search__avatar' src={userImg} alt='user avatar'></img>
            </div>
            <Link to='/upload'>
                <button className='search__upload'>UPLOAD</button>
            </Link>
            </div>
        </div>
    )
}