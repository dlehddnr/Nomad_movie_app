import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie.js";

const movies = [
  {
    title: "Star-Wars",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-tall-a_6a776211.jpeg?region=0%2C53%2C1536%2C768&width=960"
  },
  {
    title: "Iron-Man",
    poster:
      "https://www.sideshow.com/storage/product-images/903421/iron-man_marvel_gallery_5c4cced10da7f.jpg"
  },
  {
    title: "Avengers",
    poster:
      "https://ichef.bbci.co.uk/news/660/cpsprodpb/13A26/production/_106022408_avnegers976.jpg"
  },
  {
    title: "Dark-Knight",
    poster:
      "https://cdn3.movieweb.com/i/article/MDBokXUxOlvIIVBrPF2PenwAFlajFG/798:50/Dark-Knight-Movie-10th-Anniversary-Theatrical-Rerelease.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
