import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUppercaseClick = () => {
    // console.log("uppercase click" + text);

    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowercaseClick = () => {
    let newLowerCase = text.toLowerCase();
    setText(newLowerCase);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className="mb-3 contianer">
        <h1>{props.heading}</h1>

        <textarea
          name=""
          id="myBox"
          cols="30"
          rows="8"
          className="form-control"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>
        conver to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>
        conver to LowerCase
      </button>
      <div className="mt-3 container">
        <h4>Your text summary</h4>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextForm;
