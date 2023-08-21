import React from 'react';
import {ReactComponent as Movieicon4home} from '../assets/Movie.icon4home.svg';
import {ReactComponent as Trendingicon} from '../assets/Trending.icon.svg';
import {ReactComponent as Movieslisticon} from '../assets/Movies.list.icon.svg';
import {ReactComponent as TVicon} from '../assets/Tv.icon.svg';
import {ReactComponent as Bookmarkicon} from '../assets/Bookmark.icon.svg';
import {ReactComponent as Profileicon} from '../assets/Profile.icon.svg';
import {ReactComponent as Searchicon} from '../assets/Search.icon.svg';
import { useNavigate } from "react-router-dom";





function TVSeries() {
  const navigate = useNavigate();
  const handleToTrendingMovies = () => {
    navigate('/home');
  };
  const handleToAllMovies = () => {
    navigate('/allmovies');
  };
  const handleToTVSeries = () => {
    navigate('/tvseries');
  };const handleToBookmarkedMovies = () => {
    navigate('/bookmarked');
  };
  return (
    <div className='Home'>
      <div className='Nav'>
      <Movieicon4home />
        <div className='Sections'>
        <span className='Formlink' onClick={handleToTrendingMovies}>
          <Trendingicon className='Trendingicon nav-icon'/>
        </span>
        <span className='Formlink' onClick={handleToAllMovies}>
          <Movieslisticon className='Movieslisticon nav-icon'/>
        </span>
        <span className='Formlink' onClick={handleToTVSeries}>
         <TVicon className='TVicon nav-icon'/>
        </span>
        <span className='Formlink' onClick={handleToBookmarkedMovies}>
          <Bookmarkicon className='Bookmarkicon nav-icon'/>
        </span>
        </div>
        <Profileicon />
      </div>
      <div className='MoviesContainer'>
        <div className='Search'>
          <Searchicon />
          <input type='text' placeholder='Search for movies or TV series' className='Search-input'/>
        </div>
        <div className='TVSeries trend'>
          <p className='tv-series filteredcategories'>TV Series</p>
          
        </div>
      </div>
    </div>
  )
}

export default TVSeries
