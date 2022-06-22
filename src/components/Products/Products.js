import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

import "./Products.css";
const Products = () => {
    const auth=getAuth(app)
    const [user]=useAuthState(auth)
    return (
        <div>
            <h2>Knock knock!! Who is there?</h2>
           <p> Current user is : {user? user.displayName : "Voooooooooot"}</p>
        </div>
    );
};

export default Products;