// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';

import TextForm from './components/TextForm'


function App() {
  return (
    <>
  
    <Navbar tittle ="TextUtils" about = "About"  submit ={"submit"}/>
   
    <div className="container my-3">
   <TextForm heading  = "Enter the text to Analys"/>
    </div>

    </>
  )
} 

export default App;
