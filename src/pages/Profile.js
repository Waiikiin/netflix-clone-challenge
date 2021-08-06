import React from 'react';
import Nav from '../components/Nav';
import Plan from '../components/Plan'
import About from '../components/About'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import '../styles/Profile.css';
import { auth } from '../firebase';

function Profile() {
    const user = useSelector(selectUser);

    return (
        <div className="profile">
            <Nav showFull={true}/>
            <div className="profile__body">
            <h1>Account </h1>
                <div className="profile__info">
                    <img 
                        src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"
                        alt=""/>

                    <div className="profile__details">
                        <h2> {user.email} </h2>
                        <div className="profile__plans">
                            <h3> Plans </h3>
                            <Plan />
                        </div>
                        <button 
                                className="profile__signOut"
                                onClick={()=> auth.signOut()}
                            >
                                Sign Out
                        </button>
                    </div>
                </div>

                <About />
            </div>
        </div>
    )
}

export default Profile
