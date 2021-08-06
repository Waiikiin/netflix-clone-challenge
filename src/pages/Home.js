import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import requests from '../utils/Requests';
import Row from '../components/Row';
import NetflixLoader from '../components/NetflixLoader'
import About from '../components/About'
import '../styles/Home.css';

function Home({category}) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1800)
      }, [])

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
        <>
        {loading === false ? (
        <div className="home">
            <Nav />
            <Banner fetchUrl={requests.movies.fetchNetflixOriginalsMovies}/>
            <div className="home__rows">
                {renderRows(category)}
            </div>
            <About />
        </div>
        ) : (
            <div className="home__loader">
                <NetflixLoader 
                rows={4}
                columns={6}
                coverheight={200}
                coverwidth={250}
                padding={30}
                speed={2} 
                />
            </div>
        )}
        </>
    )
}

export default Home