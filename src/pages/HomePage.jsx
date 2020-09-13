import React from "react";
import Row from "../components/Row.jsx";
import Banner from "../components/Banner.jsx";
import Nav from "../components/Nav.jsx";
import request from "../request";

function HomePage() {
  return (
    <div style={{ backgroundColor: "#111" }}>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflexOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaties" fetchUrl={request.fetchDocumentries} />
    </div>
  );
}

export default HomePage;
