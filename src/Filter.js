import React, {Component} from "react";
import {Modal,Button} from "react-bootstrap";
class Filter extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
          
        }

    }
    moviesfilter = () =>{
        let movie={
            name:this.state.title,
           rating:this.state.rating,
   
       }
        this.props.searchMovies(movie)
    }
    handleShow = () => this.setState({show:!this.state.show});
    handleChange = (event) => {this.setState({
        [event.target.name]:event.target.value
    })
   } 
   search = () =>{
    this.handleShow()
    this.moviesfilter()
}
    render(){
    return(
        <div className="filter">
        <Button variant="outline-primary" onClick={this.handleShow}>Search</Button>
  
        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Search</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="inputmovie">
                  <label className="input">Title: </label>
                  <input type="text" name="title" onChange={this.handleChange} ></input>
              </div>
              <div className="inputmovie">
                  <label className="input">Rating: </label>
                  <input type="text" name="rating" onChange={this.handleChange}></input>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.search}>
              Search
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
    }
}
export default Filter;