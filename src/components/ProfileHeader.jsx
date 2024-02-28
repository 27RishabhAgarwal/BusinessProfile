const ProfileHeader = ({ image, name, title, locate }) => {
    return (
        <div className="card-header-profile">
            <img className="profile-photo" src={image} alt="profile" />
            <h1>{name}</h1>
            <p>{title}</p>
            <p>{locate}</p>
        </div>
    );
}

export default ProfileHeader;