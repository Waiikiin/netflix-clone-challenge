import React from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import requests from '../utils/Requests';
import Row from '../components/Row';

import '../styles/HomeScreen.css';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={false} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}
            isLargeRow={false} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}
            isLargeRow={false} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}
            isLargeRow={false} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}
            isLargeRow={false} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}
            isLargeRow={false} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}
            isLargeRow={false} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies}
            isLargeRow={false} />
        </div>
    )
}

export default HomeScreen
