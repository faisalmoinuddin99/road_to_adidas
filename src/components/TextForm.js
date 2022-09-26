import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Enter the text");

  const handleUppercaseClick = () => {
    // console.log("uppercase click" + text);

    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>

        <textarea
          name=""
          id="myBox"
          cols="30"
          rows="8"
          className="form-control"
          //   placeholder={text}
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUppercaseClick}>
        conver to Uppercase
      </button>
    </div>
  );
};

export default TextForm;
