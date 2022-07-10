import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        // console.log('UpperCase was Clicked' + text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("converted into uppercase" , "success")
    }
    
    //handleloclick is to change text in lower case
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted into Lowercase" , "success")

    }
      
    //clear text
     const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear Text" , "success")

     }

     

     const handleOnChange = (event)=>{     
         //Onchange is required to write something in textarea

        // console.log('handle on change clicked');
        setText(event.target.value);

     }

    const [text , setText] = useState('');
  return (
    <>
    <div className = "conatiner">
    <h2 className="my-3" style = {{color: props.mode==='dark' ? 'white' : 'black'}}>{props.heading}</h2>
     <div className="mb-3">
         
         <textarea className="form-control" value= {text} onChange = {handleOnChange} id="myBox" rows="8" style= {{backgroundColor: 'lightgrey',
            color:'white'}}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>

      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>

      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

      

     
    </div>
    <div className='container my-3'>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
