import React from "react";
import "./home.scss";
import HeroSlide from "../../components/hero-slide/HeroSlide";
import MovieList from "../../components/movie-list/MovieList";
import { category, movieType, tvType } from "../../api/api";
import { Link } from "react-router-dom";
import { OutlineButton } from "../../components/button/Button";
const Home = () => {
  return (
    <div className="home">
      <div className="home__wrap">
        <HeroSlide />
        <div className="container">
          <div className="section mb-3">
            <div className="section__header mb-2">
              <div style={{ fontSize: "2rem", fontWeight: "600" }}>
                Trending movies
              </div>
              <Link to={"/movie"}>
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.popular} />
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <div style={{ fontSize: "2rem", fontWeight: "600" }}>
                Top Rated Movies
              </div>
              <Link to={"/movie"}>
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.movie} type={movieType.top_rated} />
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <div style={{ fontSize: "2rem", fontWeight: "600" }}>
                Trending TV
              </div>
              <Link to={"/movie"}>
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.tv} type={tvType.popular} />
          </div>

          <div className="section mb-3">
            <div className="section__header mb-2">
              <div style={{ fontSize: "2rem", fontWeight: "600" }}>
                Top Rated TV
              </div>
              <Link to={"/movie"}>
                <OutlineButton className="small">View more</OutlineButton>
              </Link>
            </div>
            <MovieList category={category.tv} type={tvType.top_rated} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
