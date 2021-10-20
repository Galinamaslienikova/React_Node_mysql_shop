import { Link } from "react-router-dom"


export function StartPageComp(){


    return(
        <div>
            <Link className="nav-link link-secondary" to='/page1'><h3 style={{textAlign:'center'}}>Каталог</h3></Link>
        <div className='container'>
            <div style={{marginTop:'10px'}}  className='row'>
                <div className='  col-3'><Link  style={{textDecoration:'none'}} className="link-secondary" to='/category/1/page1'> <div  style={{background:'yellow',paddingTop:'30px', textAlign:'center', verticalAlign:'center', marginRight:'10px', height:'100px'}}><h3>Авто,мото</h3></div></Link></div>
                <div className='col-4'><Link style={{textDecoration:'none'}} className="link-secondary" to='/category/4/page1'> <div  style={{backgroundColor:'green',paddingTop:'30px', marginRight:'10px',textAlign:'center', verticalAlign:'center',  height:'100px'}}><h3>Праздники</h3></div> </Link></div>
                <div className='col-4'><Link style={{textDecoration:'none'}} className="link-secondary" to='/category/3/page1'> <div  style={{backgroundColor:'red',paddingTop:'30px', marginRight:'0px', textAlign:'center', verticalAlign:'center',  height:'100px'}}><h3>Интернет приколы</h3></div></Link></div>
            </div>
            <div style={{marginTop:'10px'}} className='row'>
                <div className='col-3' ><Link style={{textDecoration:'none'}} className="link-secondary" to='/category/6/page1'> <div style={{backgroundColor:'orange',paddingTop:'30px', textAlign:'center', verticalAlign:'center', marginRight:'10px', height:'100px'}}><h3>Юмор</h3></div></Link></div>
                <div className='col-5'><Link style={{textDecoration:'none'}} className="link-secondary" to='/category/2/page1'> <div  style={{backgroundColor:'purple',paddingTop:'30px',  marginRight:'10px',textAlign:'center', verticalAlign:'center', height:'100px'}}><h3>Айтишникам</h3></div></Link></div>
                <div className='col-3'><Link style={{textDecoration:'none'}} className="link-secondary" to='/category/5/page1'> <div  style={{backgroundColor:'violet',paddingTop:'30px', marginRight:'0px', textAlign:'center', verticalAlign:'center',  height:'100px'}}><h3>Музика</h3></div></Link></div>
            </div>
            <div style={{marginTop:'10px'}} className='row'>
                <div className='col-5'><Link style={{textDecoration:'none'}} className="link-secondary" to='/type/1/page1'> <div  style={{backgroundColor:'gold',paddingTop:'30px', textAlign:'center', verticalAlign:'center', marginRight:'10px', height:'100px'}}><h3>Мужские</h3></div></Link></div>
                <div className='col-2'><Link style={{textDecoration:'none'}} className="link-secondary" to='/type/3/page1'> <div  style={{backgroundColor:'brown',paddingTop:'30px', marginRight:'10px',textAlign:'center', verticalAlign:'center',  height:'100px'}}><h3>Женские</h3></div></Link></div>
                <div className='col-4'><Link style={{textDecoration:'none'}} className="link-secondary" to='/type/4/page1'> <div  style={{backgroundColor:'silver',paddingTop:'30px', marginRight:'0px', textAlign:'center', verticalAlign:'center',  height:'100px'}}><h3>Детские</h3></div></Link></div>
            </div>
            <div style={{marginTop:'10px'}} className='row'>
                <div className='col-3'><Link style={{textDecoration:'none'}} className="link-secondary" to='/type/5/page1'> <div  style={{backgroundColor:'lime',paddingTop:'30px', textAlign:'center', verticalAlign:'center', marginRight:'10px', height:'100px'}}><h3>Длинный рукав</h3></div></Link></div>
                <div className='col-5'><Link style={{textDecoration:'none'}} className="link-secondary" to='/type/6/page1'> <div  style={{backgroundColor:'cyan',paddingTop:'30px',  marginRight:'10px',textAlign:'center', verticalAlign:'center', height:'100px'}}><h3>Ringer</h3></div></Link></div>
                <div className='col-3'><Link style={{textDecoration:'none'}} className="link-secondary" to='/type/2/page1'> <div  style={{backgroundColor:'pink',paddingTop:'30px',  marginRight:'0px',textAlign:'center', verticalAlign:'center',  height:'100px'}}><h3>Унисекс</h3></div></Link></div>
            </div>

            
        </div>
        </div>
    )
}