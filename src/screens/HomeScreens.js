import React from "react";
import "./HomeScreens.css";
import Requests from "../Requests";
//Import Functional components
import Nav from "../Navs/Nav";
import Banner from "../Banners/Banner";
import Row from "../Rows/Row";

function HomeScreens() {
  return (
    <div className="homeScreens">
      <Nav />
      <Banner />
      <Row
        title="Netflix Original"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreens;
