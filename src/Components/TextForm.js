import React, {useState} from 'react'

export default function TextForm(props) {
    const HandleUpClick = () =>{

        let newText = text.toUpperCase();

        setText(newText)
        props.showAlert(" Converted to upper case", "Success")
    }

    const HandleLoClick = () =>{

        let newText = text.toLowerCase();

        setText(newText)
        props.showAlert(" Converted to lower case", "Success")
    }
    const HandleClearClick = () =>{
      let newText = '';

      setText(newText)
      props.showAlert(" Text is Cleared", "Success")
  }

  const HandleCopy = () =>{
    
    navigator.clipboard.writeText(text);

    props.showAlert(" Text is copied to clipboard", "Success")
  }

   const HandleExtraSpaces = () =>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
     props.showAlert(" Extra spaces has been removed", "Success")
   }
    
 
    const HandleOnChange = (event) =>{

        setText(event.target.value)
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className='container' style = {{color :props.mode==='dark' ? 'white' : '#042743' }}>
        <h3>{props.heading}</h3>
    <div className="mb-3">
   
    <textarea className="form-control" onChange={HandleOnChange}
     style = {{backgroundColor :props.mode==='dark' ? '#13466e' : 'white' ,
     color : props.mode==='dark' ? 'white' : '#042743' }} id="myBox" rows="8" value = {text}></textarea>

    </div>
    <button disabled= {text.length===0} className="btn btn-primary" onClick={HandleUpClick} >ConvertToUpperCase</button>
    <button disabled= {text.length===0}  className="btn btn-primary mx-2 my-2" onClick={HandleLoClick} >ConvertToLowerCase</button>
    <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleCopy} >Copy Text</button>
    <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleExtraSpaces} >Remove Extra Spaces</button>
    <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleClearClick} >Clear Text</button>
    </div>

    <div className="container my-2" style = {{color :props.mode==='dark' ? 'white' : '#042743' }}>
     <h3>Your Text Summary</h3>
     <p>{text.split(/\s+/).filter((element)=>{ return element.length !==0}).length} words and {text.length} character</p>
     <p> {0.008 * text.split(" ").filter((element)=>{ return element.length !==0}).length }  Minutes read</p>
     <h4>Preview</h4>
      <p>{text.length>0 ? text : "Nothing to preview"}</p>
     </div>

    </>
  )
}
