import React from "react";

const Card = props => (
  <div className="card m-1 float-left img-thumbnail">
      <img src={props.image} alt={props.name}  id={props.id} onClick = { () => props.resetCards(props.id) }/>
  </div>
);

export default Card;