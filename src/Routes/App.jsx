import '../Styles/App.css'
import Navbar_V2 from '../Components/Navbar_V2.jsx'
import Flyer from '../Components/Flyer.jsx'
import Footer from '../Components/Footer.jsx'
import NewsLetterSignup from '../Components/NewsLetterSignup'
// import Product from '../Components/Product'

import AmazonAd from '../Components/AmazonAd'
// import { Card, Modal, Button } from "react-bootstrap"


function App() {

  //Get user stuff
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

  return (
    <>
      <Navbar_V2 />

      <div className='Flyers'>

        <h1>SilentPaws</h1>
        <h2>Your Solution for Unwanted Barking!</h2>
        <br />
        <div>
          <Flyer key={0} exp="123" logo={'/Images/MaybeFive.png'}></Flyer>
          <Flyer key={1} exp="123" logo={'/Images/MaybeFour.png'}></Flyer>
          <Flyer key={2} exp="123" logo={'/Images/MaybeThree.png'}></Flyer>
          {/* {
            flyerURLS.length > 0 ? flyerURLS.map((url, i) =>
              !url.archive ? (<Flyer key={i}exp="123" logo={url.imgSrc}></Flyer>) : (<span/>)
            ) : <p className="green">Loading</p>
          } */}
        </div>

      </div>
      {/* <Information logo={otherURLS.at(0)} /> */}
      <AmazonAd/>
      <NewsLetterSignup />
      <Footer />
    </>
  );
}

export default App;
