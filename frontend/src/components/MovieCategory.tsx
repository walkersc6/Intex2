import React from "react";
import MovieCard from "./MovieCard";

interface MovieCategoryProps {
  title: string;
}

const MovieCategory: React.FC<MovieCategoryProps> = ({ title }) => {
  return (
    <div className="movie-category">
      <h2 className="category-title">{title}</h2>
      <div className="category-content">
        <div className="movie-list">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
        <div className="navigate-next">
          <svg
            width="45"
            height="47"
            viewBox="0 0 45 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.625 23.5L15 14.4917L17.625 11.75L28.875 23.5L17.625 35.25L15 32.5083L23.625 23.5Z"
              fill="#1D1B20"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MovieCategory;
