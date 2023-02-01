import React from 'react'
import GoogleButton from 'react-google-button'
import { FacebookLoginButton } from "react-social-login-buttons";
// import FacebookButton from 'react-facebook-button'

import {auth} from '../firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import {signInWithPopup, FacebookAuthProvider} from 'firebase/auth'

const style = {
    wrapper: `flex justify-center flex-col`,
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
    .then((result) => console.log(result))
    .catch((error) => {
      if (error.code === 'auth/account-exists-with-different-credential'){
        console.log(error);
        facebookSignIn();
      }
        console.log(error)})
}

const facebookSignIn = () => {
  const provider = new FacebookAuthProvider()
  signInWithPopup(auth, provider)
  .then((result) => console.log(result))
  .catch((error) => {
    if (error.code === 'auth/account-exists-with-different-credential'){
      googleSignIn();
    }
      console.log(error)})
}


const SignIn = () => {
  return (
    <div className={style.wrapper}>
        <FacebookLoginButton onClick={facebookSignIn} className={style.facebook}/>
        <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn