import React from "react";
import "./index.css";

function App() {
  const css = {};
  var greeting = {};
  let time = new Date();
  time = time.getHours();
  if (1 <= time && time <= 11) {
    greeting = "Good Morning";
    css.color = "red";
  } else if (12 <= time && time < 19) {
    greeting = "Good Afternoon";
    css.color = "blue";
  } else if (19 <= time && time < 24) {
    greeting = "Good Night";
    css.color = "pink";
  }
  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={css}> {greeting} </span>
        </h1>
      </div>
    </>
  );
}

export default App;
