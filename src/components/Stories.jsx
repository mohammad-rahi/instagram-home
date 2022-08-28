import '../styles/Stories.scss'
import HorizontalScroll from 'react-scroll-horizontal'
import Story from './Story'
import users from '../data/users'

function Stories() {
  return (
    <div className="stories">
      <HorizontalScroll className='scroll' reverseScroll={true}>
        {
          users.map(user => <Story />)
        }
      </HorizontalScroll>
    </div>
  )
}

export default Stories