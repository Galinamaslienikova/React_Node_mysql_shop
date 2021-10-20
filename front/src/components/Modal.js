import React from "react";
import { Link } from "react-router-dom";



export default  function Modal({ children, onClose,visibility,visibilitySmall,small,home}){
  return(
    <div style={{
      visibility:visibilitySmall||visibility,
      position: 'fixed',
      width: small?'50vw':'100vw',
      height: small?'50vh': '100vh',
      background:'orange',
      top: small?'25vh':'-3px',
      left: small?'25vw':'-3px',
    }}>
    
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Внимание!</h5>
        {home?<Link to='/'><button onClick={onClose&&onClose}  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></Link>:
        <button onClick={onClose&&onClose}  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>}
      </div>
      <div className="modal-body">
        <p>{children} </p>
      </div>
      <div className="modal-footer">
        {home?<Link to='/page1'><button onClick={onClose&&onClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button></Link>:<button onClick={onClose&&onClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>}
        
      </div>
    </div>
  </div>

</div>
  )
}



