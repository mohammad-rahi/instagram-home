import '../styles/Profile.scss'
import ProfileImage from './ProfileImage'
import users from '../data/users'

function Profile({ username, caption, urlText, imageSize, image, captionSize, storyBorder, hideAccountName }) {
  let accountName = username ? username : users[Math.floor(Math.random() * users.length)].username;

  return (
    <div className="profile">
      <ProfileImage imageSize={imageSize} storyBorder={storyBorder} imagePath={image} />
      {
        (accountName || caption) && !hideAccountName && (
          <div className="text_container">
            <span className='account_name'>{accountName}</span>
            <span className={`caption ${captionSize}`}>{caption}</span>
          </div>
        )
      }
      <a href="/">{urlText}</a>
    </div>
  )
}

export default Profile