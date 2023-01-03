import React, {useState} from "react"

export default function SignIn(){
    // The signIn page
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState("")

     function handleInput(e){
        const key = e.target.name
        const value = e.target.value
        
        setErrors("")
        setFormData({...formData, [key]: value})
     }

    return (<div className="sign-in">
        <div className="registration">
      <div className="registration-nav">
        <h2>PIONEER BOOKSHOP MANAGERS</h2>
        <button>Home</button>
      </div>
      <div className="registration-container">
        <div className="registration-signup-form">
          <h3>Welcome back</h3>
          <form  autoComplete="off">
            <div className="registration-inputs-container">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                // value={formState.email}
                required
              />
                            <br/>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                // value={formState.password}
                required
              />        
            </div>
            <br/>
            <div className="registration-button-form">
              <button>Login</button>
              <button>Register</button>
            </div>
          </form>
        </div>
        <div className="registration-welcome-message">
          {/* <img  src={logo} alt="#"/> */}
          <h5>Hey, welcome back</h5>
          <p>Good to see you again</p>
        </div>
      </div>
    </div>
    </div>)
}