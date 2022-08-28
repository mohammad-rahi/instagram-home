import '../styles/Story.scss';
import ProfileImage from './ProfileImage';
import users from '../data/users';

function Story() {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if(accountName.length > 10){
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div className="story">
      <ProfileImage imageSize={'large'} storyBorder={true} />
      <span className="account_name">{accountName}</span>
    </div>
  )
}

export default Story