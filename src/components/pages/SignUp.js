import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <body className='body'>
      <div className="MainContainer">
        <h2 className="welcometext">WELCOME</h2>
        <input className='sign-up-input' type="email" placeholder='Enter your email' />
        <input className='sign-up-input' type="password" placeholder='Enter your password' />
        <button className="signup">Sign Up</button>
        <h4 className="or">or Sign-Up with</h4>
        <div className="divider"></div>
        <div className="social">
          <Link className="social-icons">
            <img src="images/google-search.png" className="google" />
            <h4>Sign Up with Google</h4>
          </Link>
          <Link className="social-icons">
            <img src="images/twitter.png" alt="google" className="twitter" />
            <h4>Sign Up with Twitter</h4>
          </Link>
          <Link className="social-icons">
            <img src="images/apple-logo.png" alt="google" className="apple" />
            <h4>Sign Up with Apple</h4>
          </Link>



        </div>
      </div>
    </body>

  );
}


export default SignUp;