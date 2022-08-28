import '../styles/Sidebar.scss'
import Sticky from 'react-sticky-el'
import Profile from './Profile'
import Suggestins from './Suggestions'
import Footer from './Footer'
import image from '../assets/images/rahi.jpg'

function Sidebar() {
  return (
      <Sticky topOffset={-80} >
        <div className="sidebar">
          <Profile
            username="Mohammad Rahi"
            caption="Frontend Web Developer"
            urlText="Switch"
            imageSize="large"
            image={image}
          />

          <Suggestins />
          <Footer />
        </div>
      </Sticky>
  )
}

export default Sidebar