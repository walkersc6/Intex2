import React from "react";

const MovieSearch: React.FC = () => {
  return (
    <div className="movie-search-container">
      <div className="search-bar">
        <div className="search-input">search bar</div>
        <div className="close-icon">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.5L4 12.5M4 4.5L12 12.5"
              stroke="#1E1E1E"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="search-divider"></div>
      <div className="alphabet-filter">
        <div className="filter-all">All</div>
        <div className="filter-letters">
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
