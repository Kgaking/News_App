import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';


const Navbar=()=> {

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">News_App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/general">General</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link> </li>
            </ul>
            </div>
            </div>
            <Dropdown>
        <Dropdown.Toggle variant="link" id="dropdown-basic">
          <img src="profile-icon.jpg" alt="Profile" width="30" height="30" style={{borderRadius:"50%",opacity:"50%"}}/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#profile">Profile</Dropdown.Item>
          <Dropdown.Item href="#settings">Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </nav>
      </div>
    )
}

export default Navbar
