import React, {Component} from "react";
import {Modal,Button} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
class AddModal extends Component{
    constructor(props){
        super(props);
        this.state ={
            show:false
        }
       
    }
    
    add = () =>{
        let newmovie={
            id:uuidv4(),
            name:this.state.Name,
           image:this.state.image,
           rating:this.state.rating,
           year:this.state.year
   
       }
        this.props.AddMovie(newmovie)
    }
     handleShow = () => this.setState({show:!this.state.show});
     handleChange = (event) => {this.setState({
         [event.target.name]:event.target.value
     })
    } 
    
    save = () =>{
        this.handleShow()
        this.add()
    }
    render(){
              
                return (
                  <div>
                    <Button variant="outline-info" onClick={this.handleShow}>+</Button>
              
                    <Modal show={this.state.show} onHide={this.handleShow}>
                      <Modal.Header closeButton>
                        <Modal.Title>Add new Movie</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          <div className="inputmovie">
                              <label className="input">Title: </label>
                              <input type="text" name="Name" onChange={this.handleChange} ></input>
                          </div>
                          <div className="inputmovie">
                              <label className="input">Image: </label>
                              <input type="text" name="image" onChange={this.handleChange}></input>
                          </div>
                          <div className="inputmovie">
                              <label className="input">Year: </label>
                              <input type="text" name="year" onChange={this.handleChange}></input>
                          </div>
                          <div className="inputmovie">
                              <label className="input">Rating: </label>
                              <input type="text" name="rating" onChange={this.handleChange}></input>
                          </div>
                          
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" onClick={this.save}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                );
              }
              
            
        
    
}
export default AddModal;