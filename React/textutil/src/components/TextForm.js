
import React , { }from 'react';
export default function TextForm(props) {
  return (
    <div>
      {/* <h1> {props.heading}</h1> */}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <lable htmlFor="mybox" class="form-label">
          
        </lable>
        <textarea className="form-control" id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary">convertToUpperCase</button>
    </div>
  );
}
