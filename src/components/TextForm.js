import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase","success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase","success");
  };

  const handleClearClick = () => {
    setText("");
     props.showAlert("Text Clear","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success");
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("ExtraSpace Remove","success");
  };

  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button
          className="btn btn-secondary mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-secondary mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-secondary mx-2"
          onClick={handleClearClick}
        >
           Text cleared
        </button>

        <button
          className="btn btn-secondary mx-2"
          onClick={handleCopy}
        >
          Copied to clipboard
        </button>

        <button
          className="btn btn-secondary mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Your Text Summary</h3>

        <p>
          {wordCount} words and {text.length} characters
        </p>

        <p>{(0.008 * wordCount).toFixed(2)} Minutes Read</p>

        <h4>Preview</h4>

        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}