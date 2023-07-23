import React from "react";
import "./movie-card.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { BiMoviePlay } from "react-icons/bi";

import { category } from "../../api/api";
import apiConfig from "../../api/apiConfig";

const MovieCard = (props) => {
  const item = props.item;
  const link = `/${category[props.category]}/${item.id}`;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link} className="movie-card-wrap">
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <BiMoviePlay />
        </Button>
      </div>
      <div>{item.title || item.name}</div>
    </Link>
  );
};

export default MovieCard;
