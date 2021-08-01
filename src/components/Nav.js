import React, { useState, useEffect } from 'react'
import '../styles/Nav.css'

function Nav() {

    const  [show, handleShow] = useState(false); 

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"} `}>
            <div className="nav__content">
                <img className="nav__logo" src="https://cdn.freebiesupply.com/logos/thumbs/2x/netflix-2-logo.png" alt=""></img>
                <img className="nav__avatar" src= "https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"></img>
            </div>
        </div>
    )
}

export default Nav
