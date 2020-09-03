import React from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper from 'react-id-swiper';

import Movie from './Movie';

const MovieContainer = ({ movies }) => {
  const params = {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  return (
    <Swiper {...params}>
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <SwiperSlide key={index} style={{ maxWidth: '200px' }}>
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
