import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  //darkmode
  const [mode, Setmode] = useState("light");
  const [alert, Setalert] = useState(null);
  const togglemode = () => {
    if (mode === "light") {
      Setmode("dark");
      document.body.style.backgroundColor = "#07345b";
      showalert("dark mode enabled", "success");
      // document.title="darkmode"
    } else {
      Setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("dark mode enabled", "success");
    }
  };

  //alerts

  const showalert = (message, type) => {
    Setalert({
      msg: message,
      type: type,
    });
    //we r using so that alert thode time ke liye hi rhe bss
    setTimeout(() => {
      Setalert(null);
    }, 1000);
  };

  return (
    //JSX Fragment --> <></>
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textarea title="Write Your Text Here" mode={mode} showalert={showalert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
