import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
// import {isMobile} from 'react-device-detect';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
  mobile: `mt-40 max-w-[250px] mx-auto text-center`
};

// const DetectMobile = () => {
//   return (
//     <div>
//       <h1 className={style.mobile}>{isMobile ? "Sorry, but this chat application is only supported on web browsers" : null}</h1>
//     </div>
//   );
// };

function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
       {/* <DetectMobile/> */}
      </section>
    </div>
  );
}

export default App;
