export default function LoginCreate({login,nameVal,onSub,loginOnSub}){
    
    return(
        <div>{login?
            <form  onSubmit={(e)=>loginOnSub(e)}  >
                <div className='form-group'>
                    <label htmlFor='username'>Email</label>
                    <input onChange={(e)=>nameVal(e)} type='text' name="email" className='form-control' id='username' placeholder='email' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input onChange={(e)=>nameVal(e)} type='password' name="password" className='form-control' id='password' placeholder='Password' />
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
            :
            <form onSubmit={(e)=>onSub(e)}  >
            <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input onChange={(e)=>nameVal(e)}  type='text' name="username" className='form-control' id='username' placeholder='username' />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input onChange={(e)=>nameVal(e)} type='password' name="password" className='form-control' id='password' placeholder='min 5 simbols' />
            </div>
            <div className='form-group'>
                <label htmlFor='adress'>Adress</label>
                <input onChange={(e)=>nameVal(e)} type='text' name="adress"className='form-control'  id='adress' placeholder='adress' />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input onChange={(e)=>nameVal(e)} type='text' name="email"className='form-control'  id='email' placeholder='email' />
            </div>
            <div className='form-group'>
                <label htmlFor='phone'>Phone Number</label>
                <input onChange={(e)=>nameVal(e)} type='text' name="phone"className='form-control'  id='phone' placeholder='0XX-XXX-XX-XX' />
            </div>
            <button  type='submit' className='btn btn-primary'>Registred</button>
        </form>
            
}
        </div>
    )
}