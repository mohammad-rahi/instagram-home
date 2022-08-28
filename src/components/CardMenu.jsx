import "../styles/CardMenu.scss";
import { ReactComponent as Direct } from '../assets/icons/direct.svg'
import { ReactComponent as Comments } from "../assets/icons/comments.svg";
import { ReactComponent as Notifications } from '../assets/icons/notifications.svg'
import { ReactComponent as Bookmark } from "../assets/icons/bookmark.svg";

function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="icon" />
        <Comments className="icon" />
        <Direct className="icon" />
      </div>
      <Bookmark className="icon" />
    </div>
  );
}

export default CardMenu;