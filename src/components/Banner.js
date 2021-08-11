import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import '../styles/Banner.css'

function Banner({fetchUrl}) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]); 
        }

        fetchData();
    }, [fetchUrl])

    function truncate(string, n){
        return string?.length > n ? string.substring(0, n-1) + '...' : string
    }

    return (
        <div 
            className="banner" 
            style={{
                backgroundSize: "cover no-repeat",
                background: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                opacity: 0.8,
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name} 
                </h1>
                <h1 className="banner__description"> {truncate(movie?.overview, 150)} </h1>
                <div className="banner__buttons">
                    <button className="banner__button banner__button-play"> <PlayArrowIcon className="material-icons" /> Play </button>
                    <button className="banner__button banner__button-info"> <HelpOutlineIcon  className="material-icons"/> More info </button>
                </div>
               
            </div>
            <div className="banner--fadeBottom"></div>
        </div>
    )
}

export default Banner
