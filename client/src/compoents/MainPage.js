import React from "react";
import "../css/mainfolter.css";

function MainPage() {
  return (
    <div id="aabc">
    <div className="landnig">
      <div className="saying-container">
        <p className="saying">It's more than</p>
        <p className="saying">just a trip</p>
      </div>
      <div className="input-container">
<center>
        <input className="inputs" type="text" placeholder=" From where?" />
        <input className="inputs" type="text" placeholder="Where to?" />
        <input className="inputs" type="date" placeholder="Where to?" />

        <input className="inputs" type="number" placeholder="adult" />
        <button className="searchBtn">Search</button></center>
      </div>
    </div></div>
  );
}

export default MainPage;
