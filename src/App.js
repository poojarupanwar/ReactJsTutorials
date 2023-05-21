import "./App.css";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";
 
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
