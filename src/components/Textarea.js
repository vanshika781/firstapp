import React, { useState } from "react";

export default function Textarea(props) {
  const [text, settext] = useState("");

  function handleUpClick() {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Uppercase Converted", "success");
  }

  function handleLowClick() {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Lowercase Converted", "success");
  }

  function handleClrClick() {
    settext("");
    props.showalert("Text Cleared", "success");
  }

  function handleCopyClick() {
    var copyText = document.getElementById("Textarea");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    props.showalert("Text Copied", "success");
  }

  function handleRemoveSpaces() {
    let newtext = text.split(/\s+/).join(" ");
    settext(newtext);
    props.showalert("Extra Spaces Removed", "success");
  }

  function handleCapitalizeSentences() {
    let newtext = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!\\?]\s*\w)/g, (c) => c.toUpperCase());
    settext(newtext);
    props.showalert("First Letter of Sentences Capitalized", "success");
  }

  function handleOnChange(event) {
    settext(event.target.value);
  }

  function senten() {
    let sentencesArray = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0);
    return sentencesArray.length;
  }

  function click() {
    let wordsArray = text.trim().split(/\s+/);
    return wordsArray.filter((word) => word.length > 0).length;
  }

  return (
    <>
      <div className="maincontainer" style={{
          color: `${props.mode === "dark" ? "white" : "black"}`,
        }}>
        <div className="container">
          <h2 className="my-3">{props.title}</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="Textarea"
              rows="10"
              onChange={handleOnChange}
              value={text}
              style={{
                backgroundColor: `${props.mode === "light" ? "white" : "grey"}`,
                color: `${props.mode === "light" ? "black" : "white"}`
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1 mb-1" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-1 mb-1" onClick={handleLowClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-1 mb-1" onClick={handleClrClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-1 mb-1" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1 mb-1" onClick={handleRemoveSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mx-1 mb-1" onClick={handleCapitalizeSentences}>
            Capitalize Sentences
          </button>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body" style={{
                  color: `${props.mode === "dark" ? "white" : "black"}`,
                  backgroundColor: `${props.mode === "light" ? "white" : "grey"}`,
                }}>
                  <h2 className="card-title">Text Summary:</h2>
                  <p className="card-text">
                    Words: {click()} <br />
                    Characters: {text.length} <br />
                    Sentences: {senten()} <br />
                    Minutes to read the text: {(0.0008 * click()).toFixed(4)}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body" style={{
                  color: `${props.mode === "dark" ? "white" : "black"}`,
                  backgroundColor: `${props.mode === "light" ? "white" : "grey"}`,
                }}>
                  <h2 className="card-title">Preview:</h2>
                  <p className="card-text">
                    {text.length > 0 ? text : "Enter something in the field to preview it here."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
