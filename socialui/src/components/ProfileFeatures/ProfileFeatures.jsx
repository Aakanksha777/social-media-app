const ProfileFeatures = () => {
    return (
        <div class="flex flex-column flex-center">
            <div class="lynx-gray-bg width-7 height-7 br-full"></div>
            <h3 class="pt-s">Tanay Pratap</h3>
            <p class="grey-color txt-s">@tanaypratap</p>
            <button class="border lynx-white-bg p-xs m-xs fw-semibold width-8">
                Edit Profile
            </button>
            <p class="m-xs p-xs">
                Senior Software Engineer @Microsoft | Creator of India’s biggest
                programming community | Tweets about JavaScript, ReactJS, Career and
                Startups
            </p>
            <p class="primary-color">tanaypratap.com</p>
            <div class="white-bg p-xs m-xs flex flex-row flex-space-evenly">
                <div class="flex flex-column flex-center m-s ml-m mr-m">
                    <p class="fw-black">0</p>
                    <p class="fw-semibold">Following</p>
                </div>
                <div class="flex flex-column flex-center m-s ml-m mr-m">
                    <p class="fw-black">2K</p>
                    <p class="fw-semibold">Posts</p>
                </div>
                <div class="flex flex-column flex-center m-s ml-m mr-m">
                    <p class="fw-black">37.3K</p>
                    <p class="fw-semibold">Followers</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileFeatures