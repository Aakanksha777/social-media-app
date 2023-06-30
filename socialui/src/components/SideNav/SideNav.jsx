import { Link } from "react-router-dom"
import "./SideNav.css"

const sideNavData = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Explore",
        link: "/explore-feeds"
    },
    {
        name: "Bookmark",
        link: "/bookmarks"
    },
    {
        name: "Profile",
        link: "/profile"
    }
]
export const SideNav = () => {
    return (
        <div className="sidenav__container">
            {sideNavData.length > 0 && sideNavData.map(({ name, link }) => (
                <div className="nav__links">
                    <Link to={link} className="nav__name">
                        {name}
                    </Link>
                </div>
            ))
            }
        </div>
    )
}
