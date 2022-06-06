import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import data from "./Data.jsx";

ReactDOM.render(
  <>
    <h1 className="heading_style">List of my Best Netflix Series Till Now!</h1>
   <div>
   {data.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
   })
   }
   </div>
  </>,
  document.getElementById("root")
);
