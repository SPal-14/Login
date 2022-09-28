import React, {useState} from 'react'
function LoginForm({Login, error }) {
    const [details, setDetails]= useState({name: "", address: "", email: "", pasword: ""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }
  return (
   <form onSubmit={submitHandler}>
        <div className="form-inner">

            <h2>LOGIN</h2>
            {(error !="") ? (<div className="error"> {error} </div>): ""}
            
            <div className="form-inner">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                
            </div>
            <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" id="address"onChange={e => setDetails({...details, address: e.target.value})} value={details.address} />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email"  onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
            <label htmlFor="dateofbirth">Date of Birth:</label>
            <input type="date" name="" id="dateofbirth"  onChange={e => setDetails({...details, dateofbirth: e.target.value})} value={details.dateofbirth} />
            </div>
            
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
          
            <div>
                
                <input type="Submit" value="LOGIN"/>
                
            </div>
        </div>
    </form>
  )
}

export default LoginForm
