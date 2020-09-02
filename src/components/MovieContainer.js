import React from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import Movie from './Movie';

const params = {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
};

const MovieContainer = ({ movies }) => {
  return (
    <Swiper spaceBetween={0} slidesPerView={2}>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <SwiperSlide key={movie}>
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
