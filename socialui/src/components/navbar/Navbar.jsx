import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Logo</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          {/* <Search className="searchIcon" /> */}
          <input
            placeholder="Search Anything"
            className="searchInput"
          />
        </div>
      </div>
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Account</span>
        </div>
      </div>
  )
}

export default Navbar
