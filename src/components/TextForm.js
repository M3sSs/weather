import React,{useState} from 'react'
export default function TextForm(props) {
  let handleUpclick=()=>{
    // console.log("uppercase was clicked")
    setText(text.toUpperCase())
  }
  let handleOnChange=(event)=>{
    setText(event.target.value)
    // console.log("on change is clicked")
  }
  let handleLowClick=()=>{
    setText(text.toLowerCase());
  }
  const [text,setText]=useState('')
  // setText("enter your textttt"); changing value of text
  return (
    <>
    <div className='container'>
            <div className="mb-3">
              <h3>{props.heading}</h3>
            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label> */}
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="20" value={text} onChange={handleOnChange}></textarea>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        </div>
    </div>
    <div className="container">
        <h1>Your text summary</h1>
        { 
          text.length === 0 ? (
            <p>0 words , 0 characters</p>) 
          : 
          (<p>{text.split(' ').length} words , {text.length} characters</p>)
        }
        
        
        
    </div>
    </>
            
  )
}