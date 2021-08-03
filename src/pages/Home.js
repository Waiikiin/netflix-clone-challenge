import React from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import requests from '../utils/Requests';
import Row from '../components/Row';

import '../styles/Home.css';

function Home({category}) {

    function renameFetch(fetchName) {
        const mapObj = {
            fetch: "",
            TVs: "TV Shows",
            And: "and",
          };

        return fetchName.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/(fetch|TVs|And)/gi, matched => mapObj[matched]);;
    }

    const renderRows = (category) => {
        if (category){
            return (
                <>
                    {Object.entries(requests).map(([c, fetches]) => {
                                if (c === category){
                                    return Object.entries(fetches).map(([fetch,url]) => {
                                        return (<Row key={url} title={renameFetch(fetch)} fetchUrl={url}
                                            isLargeRow={false} />)
                                    })
                                }
                        return 1;
                    })}
                </>
            )
        }else {
            return (
                <>
                    {Object.entries(requests).map(([c, fetches]) => {
                        return Object.entries(fetches).map(([fetch,url]) => {
                            return (<Row key={url} title={renameFetch(fetch)} fetchUrl={url}
                                isLargeRow={false} />)
                        })
                    })}
                </>
            )
        }
    }

    return (
        <div className="home">
            <Nav />
            <Banner fetchUrl={requests.movies.fetchNetflixOriginalsMovies}/>
            {renderRows(category)}
        </div>
    )
}

export default Home
