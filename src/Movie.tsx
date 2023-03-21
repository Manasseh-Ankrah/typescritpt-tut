import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

const Movie = () => {
  type MovieState = {
    data: {
      title: string;
      url: string;
      views: number;
      isWatched: boolean;
    }[];
  };

  const [movieObj, setMovieObj] = useState<MovieState["data"]>([]);

  let movieData = [
    {
      title: "Avengers",
      url: "https://youtube.com/48438385/avangers.mp4",
      views: 500,
      isWatched: false,
    },
  ];

  useEffect(() => {
    setMovieObj(movieData);
  }, []);

  return (
    <div>
      <MovieList data={movieObj} />
    </div>
  );
};

export default Movie;
