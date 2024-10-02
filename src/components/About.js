import React, { useState } from "react";

export default function About() {
  const [mystyle, setmystyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [mybut, setmybut] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [mytxt, setmytxt] = useState("Enable Dark Mode");

  const changestyle = () => {
    if (mystyle.color === "white") {
      setmystyle({
        color: "black",
        backgroundColor: "white",
        border: "4px solid white",
      });
      setmybut({
        color: "white",
        backgroundColor: "blue",
      });
      setmytxt("Enable Dark Mode");
    } else {
      setmystyle({
        color: "white",
        backgroundColor: "black",
      });
      setmybut({
        color: "black",
        backgroundColor: "white",
      });
      setmytxt("Enable Light Mode");
    }
  };

  return (
    <div className="Container my-3" style={mystyle}>
      <h1>About TextUtils</h1>
      <div className="accordion my-3 mb-3" style={mystyle} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              What is TextUtils?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> is a simple utility that helps you manipulate your text in various ways. You can easily:
              <ul>
                <li>Convert text to uppercase</li>
                <li>Convert text to lowercase</li>
                <li>Clear text input</li>
                <li>Copy the text to the clipboard</li>
                <li>Remove extra spaces between words</li>
                <li>Capitalize the first letter of each sentence</li>
                <li>View statistics like word count, character count, sentence count, and estimated reading time.</li>
              </ul>
              TextUtils is designed to be easy to use and efficient, providing you with the tools you need to format your text quickly.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              How does it work?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils provides several actions that can be performed on your text. When you enter or paste text into the text area, you can:
              <ul>
                <li>Click on "Convert to UpperCase" to transform your text into all uppercase letters.</li>
                <li>Click on "Convert to LowerCase" to change all your text to lowercase.</li>
                <li>Click on "Clear Text" to remove all the text from the input field.</li>
                <li>Click on "Copy Text" to copy the text to your clipboard for use elsewhere.</li>
                <li>Click on "Remove Extra Spaces" to clean up multiple spaces between words.</li>
                <li>Click on "Capitalize Sentences" to capitalize the first letter of each sentence in the text.</li>
              </ul>
              Additionally, you can see a summary of the text you entered, including the number of words, characters, sentences, and the estimated reading time.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Why use TextUtils?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> is perfect for anyone who works with text regularly. Whether you need to quickly change the case of text, clean it up, or just get some insights about your writing, TextUtils makes it simple. It's lightweight, fast, and user-friendly, so you can focus on your content without being distracted by complex tools.
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <button type="button" className="btn" onClick={changestyle} style={mybut}>
          {mytxt}
        </button>
      </div>
    </div>
  );
}
