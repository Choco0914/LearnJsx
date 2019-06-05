// first import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component

const App = () => {
  const buttonText = { text: "눌러주세요" };
  const labelText = "이름을 입력하세요:";

  return (
    <div>
      <label class="label" for="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
