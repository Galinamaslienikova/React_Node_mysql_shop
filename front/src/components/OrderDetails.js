

export default function OrderDetails({client,details,subOrder,onchange,payment}){
    return(
        <div >
           
       <form onSubmit={(e)=>subOrder(e)}  >
            <div style={{visibility:'hidden'}}>
                    <input readOnly name='username' value={client.id_client} />
                    <input readOnly name='details'value={details} />
                </div>
            <div className="mb-3 row">
                <label htmlFor="username" className="col-sm-4 col-form-label">Name</label>
               
                <div className="col-sm-8">
                    <input id='username' type="text" readOnly className="form-control-plaintext" value={client.username}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
               
                <div className="col-sm-8">
                    <input id='email' type="text" readOnly className="form-control-plaintext" value={client.email}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="adress" className="col-sm-4 col-form-label">Adress</label>
                <div className="col-sm-8">
                    <input readOnly value={client.adress} type="text" className="form-control-plaintext" id="adress"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="phone" className="col-sm-4 col-form-label">PhoneNumber</label>
                <div className="col-sm-8">
                    <input readOnly value={client.phone} type="text" className="form-control-plaintext" id="phone"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="del" className="col-sm-4 col-form-label">Delivery</label>
                <div className="col-sm-8">
                    <input  type="text" readOnly value='новая почта' className="form-control-plaintext" id="del"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="payment" className="col-sm-4 col-form-label">Payment</label>
                <div className="col-sm-8">
                    <select value={payment} onChange={(e)=>onchange(e)}   name='payment'>
                        <option value='2'>Предоплата</option>
                        <option value='1'>Наложеный платеж</option>
                    </select>
                </div>
            </div>
            <input  type='submit'/>
           
            </form>
            </div>
      
    )
}