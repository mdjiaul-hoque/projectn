import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from 'react';
import { auth } from "./Firebase/firebaseinit";

 // const auth =getAuth(app);
        


const SignUp = () => {


const provider = new GoogleAuthProvider();

    const signUpHandle =()=>{
        
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result);
    }).catch(error=>{
        console.log(error);
    })
}




    // const formHandle = e =>{
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const pawssord = e.target.pawssord.value;
    //     console.log( email);
    // }



    return (

        <div>
            <h2>please signUp</h2>
            <button onClick={signUpHandle}> signUp</button>
        </div>


        // <div className='' >
        //     <form className='text-center' action="" onSubmit={formHandle}>
        //         <input type="text" id='' name='' placeholder='Enter Your Name' />
        //         <br />
        //         <input type="email" id='' name='' placeholder='Enter Your email' />
        //         <br />
        //         <input type="password" id='' name='' placeholder='Enter Your password' />
        //         <br />
        //         <input type="submit" value="signUp" />
        //     </form>
        // </div>
    );
};

export default SignUp;