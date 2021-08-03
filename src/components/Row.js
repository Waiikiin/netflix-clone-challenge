import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'
import '../styles/Row.css'

import { Swiper, SwiperSlide }  from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Lazy} from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const base_url = "http://image.tmdb.org/t/p/original/";
    const slidesPerViewNum = 6;
    SwiperCore.use([Pagination,Navigation, Lazy]);
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results.slice(0, slidesPerViewNum * Math.floor(request.data.results.length/slidesPerViewNum)));
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>

            <div className="row__posters">
                <Swiper
                    slidesPerView={slidesPerViewNum}
                    slidesPerGroup={slidesPerViewNum}
                    spaceBetween={10}
                    navigation={true}
                    speed={700}
                    loop={true}
                    lazy={{
                        loadPrevNext: true,
                    }}

                >         
                    {movies.map(
                        movie => ((
                        (isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                            <SwiperSlide
                            >
                                <img
                                    key={movie.id}
                                    className={`row__poster swiper-lazy ${isLargeRow && "row__posterLarge"}`}
                                    src={`
                                        ${base_url}${isLargeRow ? movie?.poster_path : movie.backdrop_path
                                    }`} 
                                    alt={movie.name}
                                />
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default Row
