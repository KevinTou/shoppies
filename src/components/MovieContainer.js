import React from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import Movie from './Movie';

const MovieContainer = ({ movies }) => {
  const params = {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  };

  return (
    <Swiper {...params} style={{ zIndex: 0 }}>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <SwiperSlide key={movie.imdbID}>
            <Movie movie={movie} />
          </SwiperSlide>
        ))
      ) : (
        <p className="movie-container-alt-text">
          Search movie titles to nominate your favorites!
        </p>
      )}
    </Swiper>
  );
};

const mapStateToProps = (state) => {
  const { movies } = state.movies;

  return {
    movies: movies,
  };
};

export default connect(mapStateToProps, {})(MovieContainer);
