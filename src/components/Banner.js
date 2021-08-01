import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import requests from '../utils/Requests';
import '../styles/Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        function selectRandom(array) {
            return array[Math.floor(Math.random() * array.length - 1)];
        }

        function searchValidLink(array) {
            if (array){
                let movie = selectRandom(array);
                let url = movie.backdrop_path;
                if (url) {
                    return movie;
                } else {
                    
                    searchValidLink(array);
                }
            }
        }

        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(searchValidLink(request.data.results)); 
        }

        fetchData();
    }, [])

    function truncate(string, n){
        return string?.length > n ? string.substring(0, n-1) + '...' : string
    }

    return (
        <div 
            className="banner" 
            style={{
                backgroundSize: "cover no-repeat",
                background: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name} 
                    </h1>
                <div className="banner__buttons">
                    <button className="banner__button"> Play </button>
                    <button className="banner__button"> More info </button>
                </div>
                <h1 className="banner__description"> {truncate(movie?.overview, 150)} </h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </div>
    )
}

export default Banner
