import React from 'react'

 function Alert(props) {
  return (
        
            <div style={ {height:'40px'}}>
     {   props.alert && <div class="alert alert-success d-flex align-items-center" role="alert">
      <strong>{props.alert.type}</strong>:{props.alert.msg}
      </div>}
      </div>
        
    
  )
}


export default Alert 