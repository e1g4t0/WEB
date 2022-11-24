"use client";
import React, { useState } from "react";

import Link from "next/link";
function Card(props) {
  const [notHidden, setNotHidden] = useState(true);
  let hide = () => setNotHidden(false);
  return (
    notHidden && (
      <div>
        <div className="card">
          <div className="image--holder">
            <img src={props.item.imgUrl} width="200" height="200" />
            <Link href={`projects/${props.item.Id}`}>Link to the project</Link>
            <button onClick={hide}>Hide this card </button>
          </div>

          <div className="card--text">
            <h1>{props.item.title}</h1>
            <p>{props.item.description} </p>
          </div>
        </div>
      </div>
    )
  );
}
export default Card;
