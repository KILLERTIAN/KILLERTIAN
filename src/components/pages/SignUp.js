import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <body className='body'>
      <div className="MainContainer">
        <h2 className="welcometext">WELCOME</h2>
        <input type="email" placeholder='Enter your email' />
        <input type="password" placeholder='Enter your password' />
        <button className = "signup">Sign Up</button>
        <h4 className="or">or Login with</h4>
        <div className="divider"></div>
        {/* <div className="social">
          <img src="https://icons8.com/icon/17949/google" alt="google" className="google" />
        </div> */}
      </div>
    </body>
    
  );
}


export default SignUp;