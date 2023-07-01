import React from 'react'
import './Home.scss'
import axios from "axios";
import { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Youtube from 'react-youtube';



const apiKey = "e0d773d951a8f7f59d898e927f177fe9";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular="popular";
const topRated = "top_rated";

// const fetchMovie = async(id)=>{
//   const {data}=await axios.get(`${url}/movie/${id}`,{
//     params:{
//       api_key:apiKey,
//       append_to_respond:'videos'
//     }
//   })
//   return data;
// }

// const selectMovie = async(movie)=>{
//   const data = await fetchMovie(movie.id);
//   console.log(data);
  
// }

const Cards = ({ img }) => (
  <img className='cards' src={img}></img>
)


const Row = ({ title, arr = []  }) => (

  <div className="row">
    
 
    <h2>{title}</h2>
    <div>
      {
        arr.map((item) => (
          <Cards  key={item.id} img={`${imgUrl}/${item.poster_path}`} />
        ))
      }

    </div>
  </div>
)


const Home = () => {


  const [upcomigMovies,setUpcomingMovies]= useState([]);
  const [nowPlayingMovies,setNowPlayingMovies]= useState([]);
  const [popularMovies,setPopularMovies]= useState([]);
  const [topRatedMovies,setTopRatedMovies]= useState([]);
 

  

useEffect(() => {
    const fetchUpcoming=async()=>{
      const {
        data:{results},
      }=await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&append_to_response=videos`);
      console.log('movie data',results);
      setUpcomingMovies(results);
    };
    const fetchNowPlaying = async () => {
      const {
          data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
  };
  const fetchPopular = async () => {
    const {
        data: { results },
    } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
    setPopularMovies(results);
};
const fetchTopRated = async () => {
  const {
      data: { results },
  } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
  setTopRatedMovies(results);
};
    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
    
}, []);





  return (
    <section className='home'>
      <div className='banner'
       style={{backgroundImage:topRatedMovies[0]
        ? `url(${`${imgUrl}/${topRatedMovies[0].poster_path}`})`:"rgb(16, 16, 16)",}}>
     
     {topRatedMovies[0] && <h1>{topRatedMovies[0].original_title}</h1>}
     {topRatedMovies[0] && <p>{topRatedMovies[0].overview}</p>}
     

     {/* <Youtube  /> */}
     
     <div>
        <button><BiPlay /> Play  </button>
       <button>My List <AiOutlinePlus /> </button>
      </div>
     
      </div>

      <Row title={"Upcoming"} arr={upcomigMovies}  />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies}/> 
    </section>
  )
}
export default Home;
