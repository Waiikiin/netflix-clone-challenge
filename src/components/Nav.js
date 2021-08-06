import React, { useState, useEffect } from 'react'
import { useHistory  } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import '../styles/Nav.css'

function Nav({showFull}) {
    const [show, handleShow] = useState(false); 

    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    
    function changeSelected(e) {
        const selected = document.querySelector(".nav__directory__option-selected");
        selected.classList.remove("nav__directory__option-selected");
        e.target.classList.add("nav__directory__option-selected");
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }

    }, [])

    return (
        <div className={`nav ${ (show || showFull) && "nav__black"} `}>
            <div className="nav__logos">
                <img onError={e => {e.target.src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"}} onClick={() => history.push('/')} className="nav__logo" alt="" src="https://index.impakter.com/wp-content/uploads/2020/11/Netflix-Logo.png"></img>
                <img onClick={() => history.push('/profile')} className="nav__avatar" alt="" src= "https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"></img>
            </div>
            <div className="nav__directory">
                <ul>
                    <li onClick={(e) => { changeSelected(e); history.push('/') }} className="nav__directory__option nav__directory__option-selected">Home</li>
                    <li onClick={(e) =>{ changeSelected(e); history.push('/browse/tvs')}} className="nav__directory__option">TV Shows</li>
                    <li onClick={(e) => { changeSelected(e); history.push('/browse/movies')}} className="nav__directory__option">Movies</li>
                    <li onClick={(e) => { changeSelected(e); history.push('/browse/latest')}} className="nav__directory__option">New & Popular</li>
                    <li className="nav__directory__option">My List</li>
                </ul>
            </div>
            <div className="nav__secondary__directory">
                <div className="nav__secondary__element">
                    <SearchIcon className="search-icon" fontSize="large" />
                </div>
                <div className="nav__secondary__element">
                    <span className="nav__secondary__element-KIDS">KIDS</span>
                </div>
                <div className="nav__secondary__element">
                    <NotificationsIcon className="notifications-icon" fontSize="large" />
                </div> 
            </div>
        </div>
    )
}

export default Nav
