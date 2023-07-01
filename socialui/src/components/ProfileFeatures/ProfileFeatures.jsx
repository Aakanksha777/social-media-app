import "./ProfileFeatures.css"

const ProfileFeatures = () => {
    return (
        <div className="profile__container">
            <div className="profile__img__container"><img src="" alt="Profile Pic" /></div>
            <h3 className="profile__fullname">Tanay Pratap</h3>
            <p className="profile__username">@tanaypratap</p>
            <button className="profile__edit__btn">
                Edit Profile
            </button>
            <p className="profile__userdesc">
                Senior Software Engineer @Microsoft | Creator of India’s biggest
                programming community | Tweets about JavaScript, ReactJS, Career and
                Startups
            </p>
            <p className="profile__portfolio_link">tanaypratap.com</p>
            <div className="profile__follow__container">
                <div className="profile__details">
                    <p className="profile__following__count">0</p>
                    <p className="profile__details__text">Following</p>
                </div>
                <div className="profile__details">
                    <p className="profile__following__count">2K</p>
                    <p className="profile__details__text">Posts</p>
                </div>
                <div className="profile__details">
                    <p className="profile__following__count">37.3K</p>
                    <p className="profile__details__text">Followers</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileFeatures