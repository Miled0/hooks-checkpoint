import React from "react";
import { Card } from "react-bootstrap"

const MovieList =(props)=>{
    let filtred=props.movies.filter((c)=>(c.rating>=props.filter.rating||c.name==props.filter.name));
    return(
        <div className="MovieList">
            {filtred.map((el)=>(
              <div className="movie">
            <Card style={{ width: "18rem", minHeight:542 }}>
              <Card.Img
                variant="top"
                src={el.image}
              />
              <Card.Body style={{textAlign:"center"}}>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>{el.year}</Card.Text>
                <Card.Text>{el.rating}</Card.Text>
              </Card.Body>
            </Card>
            </div>
            ))
            }

        </div>
    )
}
export default MovieList;