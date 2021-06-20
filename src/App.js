import './App.css';
import logo from './assets/logo/logo@3x.png';
import progress from './assets/icons/progress@3x.png';
import Allplayers from './Components/whiteboard/Allplayers';
import Allpoints from './Components/whiteboard/Allpoints';
import Allbutons from './Components/whiteboard/Allbutons';
import Playstorebuttons from './Components/whiteboard/Playstorebuttons';
import Footer from './Components/footer';
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="sports_logo">
          <img src={logo} alt="logo"/>
        </div>
      </div>
        <div className="whiteboard ">
          <div className="progress">
            <img src={progress} alt="" />
          </div>
            <div className="board_title">
               <h1>YOUR PLAYLINE IS SET</h1>
               <h2>COME BACK @7:30 TO TRACK IT LIVE</h2>
               <hr className="head_uLine"/>
               <p className="protip">Pro Tip: You can manage your PlaLine's until they go live in Upcoming area</p>
           </div>

          <Allplayers />
          <Allpoints/>
           <Allbutons />
          <div className="download">
            <h1 >Download the App</h1>
            </div>
            <Playstorebuttons />
          </div>
          <div className="footer-container">
          <Footer/>
          </div>
    </div>
  );
}

export default App;
