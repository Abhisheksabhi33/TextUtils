import React  from 'react'


export default function About(props) {
      
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black' ,
    //     backgroundColor: 'white'
    // })
    
    let myStyle = {
       color: props.mode ==='dark'?'white' : '#042743',
       backgroundColor: props.mode === 'dark'?'rgb(36 74 104)': 'white',
    
    }
    
   
  return (
    <div className=  "container">
        <h2 className='my-3' style = {{ color: props.mode ==='dark'?'white' : '#042743'}}>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyz Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       TextUtils gives you a way to analyze your text quickly and efficiently. By word count , character count and many more.   
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter toool that provides instatnt character count and word cound statistics 
        for a given text.
        TextUtils report the number of words and character. Thus it is suitable for the writing text for the word / chracter 
        limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any browser such as chrome, firefox,internet explorer,safari, opera, and other also.
        It suits to count the character  in facebook, blog, books, excel, document, pdf-document, essay etc.
      </div>
    </div>
  </div>
</div>
{/* <div className="contaioner my-3">
<button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
</div> */}

    </div>
  )
}
