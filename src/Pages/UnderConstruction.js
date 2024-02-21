import React from "react";
import { Link } from "react-router-dom";
import UC from "../Assets/UC.png";
import "./underConstruction.css";

function UnderConstruction() {
  return (
    <div className="UC">
      <div>
        <button type="button" >
          <Link to={"/"} style={{color:"white"}}>Go Home</Link>
        </button>
      </div>  
    </div>
  );
}

export default UnderConstruction;
