import '../styles/ProfileImage.scss';

function ProfileImage({ imageSize, storyBorder, imagePath }) {

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let randomId = getRandomInt(1, 70);

    let profileImage = imagePath ? imagePath : `https://i.pravatar.cc/150?img=${randomId}`;

    return (
        <div className={storyBorder ? "story_border" : ""}>
            <img src={profileImage} className={`profile_image ${imageSize}`} alt="Profile" />
        </div>
    )
}

export default ProfileImage