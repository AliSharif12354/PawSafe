import '../Styles/App.css'
import Navbar_V2 from '../Components/Navbar_V2.jsx'
import Flyer from '../Components/Flyer.jsx'
import Footer from '../Components/Footer.jsx'
import Information from '../Components/Information'
import NewsLetterSignup from '../Components/NewsLetterSignup'
// import Product from '../Components/Product'
import { useEffect } from 'react'
import { useState } from 'react'
import { auth } from '../Firebase'
import { updateOther } from '../Firebase'
import { db } from '../Firebase'
import { getDocs, collection } from 'firebase/firestore'
// import { Card, Modal, Button } from "react-bootstrap"


function App() {

  //Get user stuff
  const [authUser, setAuthUser] = useState(null);
  const [flyerURLS, setFlyerURLs] = useState([]);
  // const [otherURLS, setOtherURLs] = useState([]);

  // useEffect(() => { //For fetching flyer and other image from firebase on load
  //   async function fetchData() {
  //     try {
  //       const oURLS = await updateOther();
  //       setOtherURLs(oURLS);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   async function fetchFlyers() {
  //     const querySnapshot = await getDocs(collection(db, 'flyers'));
  //     setFlyerURLs(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log("cmon", flyerURLS)
  //   };
  //   fetchFlyers();
  //   fetchData();
  // }, []);

  //Use effect for signed in or not
  useEffect(() => {

    auth.onAuthStateChanged(user => {
      if (user) {
        console.log("There currently is a user signed in with the email: ")
        console.log(user.email)
        setAuthUser(user)
      }
      else {
        console.log("There currently is no one signed in right now.")
        setAuthUser(null)
      }
    })

  }, [])

  return (
    <>
      <Navbar_V2 />

      <div className='Flyers'>

        <h1>SilentPaws - Your Solution for Unwanted Barking and Training Aids.</h1>
        <h2>The humane answer! Tested by professionals, Enjoy friendly friends without the need of a shock collar.</h2>
        <br />
        <div>
          <Flyer key={0} exp="123" logo={'./src/Images/MaybeFive.png'}></Flyer>
          <Flyer key={1} exp="123" logo={'./src/Images/MaybeFour.png'}></Flyer>
          <Flyer key={2} exp="123" logo={'./src/Images/MaybeThree.png'}></Flyer>
          {/* {
            flyerURLS.length > 0 ? flyerURLS.map((url, i) =>
              !url.archive ? (<Flyer key={i}exp="123" logo={url.imgSrc}></Flyer>) : (<span/>)
            ) : <p className="green">Loading</p>
          } */}
        </div>

      </div>
      {/* <Information logo={otherURLS.at(0)} /> */}
      <NewsLetterSignup />
      <Footer />
    </>
  );
}

export default App;
