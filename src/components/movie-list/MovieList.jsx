import React, { useEffect, useState } from "react";
import "./movie-list.scss";
import { SwiperSlide, Swiper } from "swiper/react";

import MovieCard from "../movie-card/MovieCard";

import tmdbApi, { category } from "../../api/api";

const MovieList = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      // console.log("props category", props.category);
      // console.log("category ", category);
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, {
              params,
            });
            console.log("res results >>>> ", response.results);
            break;
          default:
            response = await tmdbApi.getTvList(props.type, {
              params,
            });
          // console.log("res2 >>>> ", response);
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }

      setItems(response.results);
    };
    getList();
  }, []);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((movie, index) => (
          <SwiperSlide>
            <MovieCard item={movie} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
