import React from "react";
import MovieNavigation from "../components/MovieNavigation";
import MovieSearch from "../components/MovieSearch";
import MovieCategory from "../components/MovieCategory";
import "../styles/MovieBrowse.css";

const MovieBrowsePage: React.FC = () => {
  return (
    <div className="movie-browse-page">
      <MovieNavigation />
      <div className="movie-content">
        <h1 className="admin-title">Admin Manager</h1>
        <MovieSearch />
        <MovieCategory title="Horror" />
        <MovieCategory title="Comedy" />
      </div>
    </div>
  );
};

export default MovieBrowsePage;
