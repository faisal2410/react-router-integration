import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import app from '../../firebase.init';

import "./Login.css";

const Login = () => {
    const auth=getAuth(app)
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
    return (
        <div>
            <h2>This is login page</h2>
            <div style={{margin:'20px'}}>
            <button onClick={()=>signInWithGoogle()}>Google Signin</button>
            </div>
            <form>               
                <input type="email" placeholder='Your Email' />
                <br/>
                <input type="password" placeholder='Your Password' />
                <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;