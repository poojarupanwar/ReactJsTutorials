import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";


function App() {
  return (
   <>
     <Navbar title="TextUtils" home="Home"/> 

  <div className="container my-3">
  <TextForm heading="Enter the Text to analyze below"/>
    </div> 

   </>
  );
}

export default App;
