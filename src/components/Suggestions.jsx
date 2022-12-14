import '../styles/Suggestions.scss'
import Profile from './Profile'

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="title_container">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <Profile
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        imageSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by dadatlacak + 1 more"
        urlText="Follow"
        imageSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Follows you"
        urlText="Follow"
        imageSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by dadatlacak + 7 more"
        urlText="Follow"
        imageSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by mapvault + 4 more"
        urlText="Follow"
        imageSize="medium"
        captionSize="small"
      />
    </div>
  )
}

export default Suggestions