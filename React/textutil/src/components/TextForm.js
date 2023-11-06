
import React , {useState} from 'react';
export default function TextForm(props) {
 const  handleUpClick =()=>{
  console.log("upppercase was clicked")
  }

   const handleOnChange = () => {

   }

  const [text, setText] = useState('Enter Text Here');

  return (
    <div>
      {/* <h1> {props.heading}</h1> */}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <lable htmlFor="mybox" class="form-label">
          
        </lable>
        <textarea className="form-control" value={text} onChange={handcleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>convertToUpperCase</button>
    </div>
  );
}
