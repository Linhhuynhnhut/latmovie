import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../api/api";
import apiConfig from "../../api/apiConfig";

import "./detail.scss";

import MovieList from "../../components/movie-list/MovieList";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [casts, setCasts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await tmdbApi.detail(category, id, { params: {} });
      setItem(res);

      const castResponse = await tmdbApi.credits(category, id);
      setCasts(castResponse.cast.slice(0, 5));

      const videoResponse = await tmdbApi.getVideos(category, id);
      setVideos(videoResponse.results.slice(0, 5));

      console.log("res>>>", res);
    };
    getData();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <div className="casts">
                  {casts.map((item, i) => (
                    <div key={i} className="casts__item">
                      <div
                        className="casts__item__img"
                        style={{
                          backgroundImage: `url(${apiConfig.w500Image(
                            item.profile_path
                          )})`,
                        }}
                      ></div>
                      <p className="casts__item__name">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              {videos.map((item, i) => (
                <Video key={i} item={item} />
              ))}
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

const Video = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default Detail;
