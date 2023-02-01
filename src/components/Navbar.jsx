import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
const style = {
    nav: `bg-gray-800 h-30 flex justify-between items-center p-4 max-sm:flex-col`,
    heading: `text-white text-3xl max-sm:pb-4`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>ChatSphere</h1>
      {user ? <LogOut /> : <SignIn />}

    </div>
  );
};

export default Navbar;
