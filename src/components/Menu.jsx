import '../styles/Menu.scss'
import { ReactComponent as Home } from '../assets/icons/home.svg'
import { ReactComponent as Direct } from '../assets/icons/direct.svg'
import { ReactComponent as NewPost } from '../assets/icons/newPost.svg'
import { ReactComponent as Explore } from '../assets/icons/explore.svg'
import { ReactComponent as Notifications } from '../assets/icons/notifications.svg'
import ProfileImage from './ProfileImage'
import image from '../assets/images/rahi.jpg'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="menu">
      <Link to="/"><Home className="icon" /></Link>
      <Direct className='icon' />
      <NewPost className='icon' />
      <Explore className='icon' />
      <Notifications className='icon' />
      <Link to="profile">
        <ProfileImage imageSize="small" imagePath={image} />
      </Link>
    </div>
  )
}

export default Menu