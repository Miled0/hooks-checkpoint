import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from "./Modal"
import Filter from "./Filter";
import MovieList from "./MovieList";
import React from "react"
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state ={
    movies:[
      {
        id:uuidv4(),
        name:'limitless',
        image:'https://fr.web.img3.acsta.net/medias/nmedia/18/82/56/25/19720797.jpg',
        rating:4,
        year:2011
      },
      {
        id:uuidv4(),
        name:'interstellar',
        image:'https://m.media-amazon.com/images/I/61pyUElLh7L._AC_SY445_.jpg',
        rating:5,
        year:2014
      },
      {
        id:uuidv4(),
        name:'Lucy',
        image:'https://www.horreur.net/sites/default/files/upload/lucy-poster-scarlett-besson_0.jpg',
        rating:5,
        year:2014
      }
    ],
    searching:{
      rating:1,
      name:null
    }
  }
  Add=(newmovie)=>{
    this.setState({movies:this.state.movies.concat(newmovie)})
  }
  search=(filter)=>{
    this.setState({searching:filter})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movie App</h1>
          <Filter searchMovies={(f)=>this.search(f)} />
          <MovieList movies={this.state.movies} filter={this.state.searching}/>
          <AddModal AddMovie={(movie)=>this.Add(movie)}/>
        </header>
      </div>
    )
  }
}

export default App
