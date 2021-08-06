import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__socialMedia">
                    <div className="socialMedia__icon">
                        <FacebookIcon fontSize="large" />
                    </div>
                    <div className="socialMedia__icon">
                        <InstagramIcon fontSize="large"/>
                    </div>
                    <div className="socialMedia__icon">
                        <TwitterIcon fontSize="large" />
                    </div>
                    <div className="socialMedia__icon">
                        <YouTubeIcon fontSize="large"/>
                    </div>                               
                </div>
                <div className="about__info">
                    <ul>
                        <li>Audios and Subtitles</li>
                        <li>Audio Description</li>
                        <li>Help Center</li>
                        <li>Gift Cards</li>
                        <li>Media Center</li>
                        <li>Investor Relations</li>
                        <li>Jobs</li>
                        <li>Terms of Use</li>
                        <li>Privacy</li>
                        <li>Legal Notices</li>
                        <li>Cookie Preferences</li>
                        <li>Corporate information</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
