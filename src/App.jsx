import { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from '../Pages/MainMenu';
import LandingPage from '../Pages/LandingPage';
import POD from '../Pages/POD';
import RageBar from '../Components/RageBar';
import Introduction from '../Pages/Introduction';
import IntroductionHW from '../Pages/IntroductionHW';
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';
import Goodluck from '../Pages/GoodLuck';
import Ach from '../Pages/Ach';
import Questions from '../Components/Questions';
import axios from 'axios';
import Special from '../Pages/Spline';
import SplineComponent from '../Pages/Spline';
import States from '../Pages/States';
import LevellerIntro from '../Pages/LevellerIntro';
import Stack from '../Pages/StackSlayer';

function App() {
  const [count, setCount] = useState(0);
  const [user, SetUser] = useState('');
  const [rank, SetRank] = useState('');
  const [ActiveDay, SetActiveDay] = useState(0);
  const [streak, SetStreak] = useState(0);
  const [rage, SetRage] = useState(100);
  const [IsPlaying, SetPlaying] = useState(false);


  // Create the sound object only once using useRef to persist between renders
  const sound = useRef(new Audio('/bgm.mp3'));

  

  function bgm() {
    console.log("sound paused? ..", sound.current.paused);
    console.log("IsPlaying = ", IsPlaying);

    if (!sound.current.paused) {
      sound.current.pause();  // Pausing the existing sound instance
      SetPlaying(false);
      
    } else {
      sound.current.play();   // Playing the existing sound instance
      SetPlaying(true);
    }

    
  }

  useEffect(() => {
    return () => {
      sound.current.play(); // Pause the sound when the component unmounts
    };
  }, []);

  async function GetActiveDays() {
    const resp = await axios.post("https://leveller-backend.onrender.com/activeday", { user });
    SetActiveDay(resp.data.active_day);
    const rageResp = await axios.post('https://leveller-backend.onrender.com/GetDetails', { user });
    console.log("Game Over!");
    SetRage(rageResp.data.rage);
    SetStreak(rageResp.data.streak);
  }

  GetActiveDays();

  return (
    <>
      <RageBar rage={rage} streak={streak} user={user} rank={rank}/>
      <button
        onClick={()=>{
          SetPlaying(true);
          bgm();
        }}
        style={{ position: 'absolute', top: 7, left: 7, border: 'solid 1px blue', backgroundColor: 'rgb(0,200,100)', boxShadow: '5px 5px 10px rgb(0,200,200)', color: 'white' }}>
      {IsPlaying?"Playing":"Pause"}
      </button>

      <BrowserRouter>
        <Routes>
          <Route path='/mainmenu' element={<MainMenu GetActiveDays={GetActiveDays} />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/continue' element={user ? <Questions user={user} ActiveDay={ActiveDay} SetActiveDay={GetActiveDays} /> : <Login setUser={SetUser} />} />
          <Route path='/introduction/forward' element={<IntroductionHW />} />
          <Route path='/register' element={<Registration setuser={SetUser} />} />
          <Route path='/login' element={<Login setUser={SetUser} />} />
          <Route path='/goodluck' element={user ? <Goodluck user={user} /> : <Login setUser={SetUser} />} />
          <Route path='/states' element={user ? <States user={user} /> : <Login setUser={SetUser} />} />
          <Route path="/ach" element={<Ach />} />
          <Route path='/leveller' element={<LevellerIntro />} />
          <Route path='/stack' element={<Stack />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
