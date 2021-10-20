import React from "react";
import { Link } from "react-router-dom";


export default function  Pagination ({counts,pages,changePage,prev,next,cat}){
    
    return(
        <>
        <ul className="pagination justify-content-center">
                <Link to={cat?`page${counts-1}`:`/page${counts-1}`}><button style={{backgroundColor:'grey',color:'black'}} onClick={prev} disabled={counts===1?true:false}>Previous</button></Link>
                    <Link to={cat?`page${counts}`:`/page${counts}`}><button  style={{backgroundColor:'white',color:'black'}} value={counts} onClick={changePage}   className="page-item ">{counts}</button></Link>
                    {counts===pages?null:<Link to={cat?`page${counts+1}`:`/page${counts+1}`}><button style={{backgroundColor:'grey',color:'black'}}  value={counts+1} onClick={changePage}  className="page-item">{counts+1}</button></Link>}
                    {counts>=pages-1?null:<Link to={cat?`page${counts+2}`:`/page${counts+2}`}><button style={{backgroundColor:'grey',color:'black'}}  value={counts+2} onClick={changePage}  className="page-item">{counts+2}</button></Link>}
                    <Link to={cat?`page${counts+1}`:`/page${counts+1}`}><button style={{backgroundColor:'grey',color:'black'}}  onClick={next} className='page-item' disabled={counts===pages?true:false}>Next</button></Link>
                </ul>
        </>
    )
}