import React from "react";
import "./index.css";

const Hollywood = ({ data }) => {

  return (
    <div>
      <div className="row ">
        {data[0].movies.map((item) => (
          <div className="col" key={item.title}>
            <div className="card " >
              <img
                src={item?.poster}
                className="card-img-top"
                alt="movie poster"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p>genre: {item.genre}</p>
                <p>director: {item.director}</p>
                <p>actors: {item.actors}</p>
                <p className="card-text">Released on : <strong>{item.year}</strong></p>
                <a href={`${item.trailer}`} >click here to watch movie Trailer </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hollywood;
