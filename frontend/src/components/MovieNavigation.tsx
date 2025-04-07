import React from "react";
import { Link } from "react-router-dom";

const MovieNavigation: React.FC = () => {
  return (
    <div className="movie-navigation">
      <div className="logo-container">
        <div className="logo">logo</div>
      </div>
      <div className="nav-links">
        <div className="nav-item">Home</div>
        <div className="nav-item">Movies</div>
        <div className="nav-item">TV Shows</div>
        <div className="nav-item">Watchlist</div>
      </div>
      <div className="user-icon">
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.8333 32.375V29.2917C30.8333 27.6562 30.1836 26.0876 29.0271 24.9312C27.8706 23.7747 26.3021 23.125 24.6666 23.125H12.3333C10.6978 23.125 9.12927 23.7747 7.9728 24.9312C6.81633 26.0876 6.16663 27.6562 6.16663 29.2917V32.375M24.6666 10.7917C24.6666 14.1974 21.9057 16.9583 18.5 16.9583C15.0942 16.9583 12.3333 14.1974 12.3333 10.7917C12.3333 7.38591 15.0942 4.625 18.5 4.625C21.9057 4.625 24.6666 7.38591 24.6666 10.7917Z"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default MovieNavigation;
