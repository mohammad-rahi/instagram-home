import "../styles/Card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../assets/icons/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function Card(props) {
  const {
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours,
  } = props;

  return (
    <div className="card">
      <header>
        <Profile imageSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <div className="card_image_wrapper">
      <img className="cardImage" src={image} />
      </div>
      <CardMenu />
      <div className="likedBy">
        <Profile imageSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">Post</div>
      </div>
    </div>
  );
}

export default Card;