import React, { useState, useEffect, useCallback } from "react";
import "./catalog.scss";
import { useParams } from "react-router-dom";
import bg from "../../assets/listmovie.jpg";

import { OutlineButton } from "../../components/button/Button";
import Button from "../../components/button/Button";
import MovieCard from "../../components/movie-card/MovieCard";
import tmdbApi, { category as cateApi, movieType, tvType } from "../../api/api";

import { useNavigate } from "react-router-dom";

const Catalog = (props) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const { keyword } = useParams();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (category) {
          case cateApi.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            setMovieSearch("");
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, {
              params,
            });
            setMovieSearch("");
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(category, { params });
      }
      console.log("props >> ", keyword);

      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(category, { params });
    }

    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  const searchMovie = useCallback(
    // console.log("moviesearch>>>", movieSearch);
    () => {
      if (movieSearch.trim().length > 0) {
        navigate(`/${cateApi[category]}/search/${movieSearch}`);
      }
    },
    [movieSearch, category]
  );

  return (
    <div className="catalog container">
      <div
        className="catalog-background"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className="catalog-title"
          style={{
            position: "relative",
            zIndex: 99,
            fontSize: "2rem",
            fontWeight: "600",
          }}
        >
          {category === cateApi.movie ? "Movies" : "TV Series"}
        </div>
      </div>

      <div className="catalog-wrap">
        <div className="section mb-3">
          <div className="movie-search">
            <input
              type="text"
              placeholder="Enter keyword"
              value={movieSearch}
              onChange={(e) => setMovieSearch(e.target.value)}
            />
            <Button className="small" onClick={searchMovie}>
              Search
            </Button>
          </div>
        </div>
        <div className="movie-grid">
          {items.map((item, i) => (
            <MovieCard category={category} item={item} key={i} />
          ))}
        </div>
        {page < totalPage ? (
          <div className="movie-grid__loadmore">
            <OutlineButton className="small" onClick={loadMore}>
              Load more
            </OutlineButton>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Catalog;
