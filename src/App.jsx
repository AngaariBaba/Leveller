import { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainMenu from '../Pages/MainMenu';
import LandingPage from '../Pages/LandingPage';
import POD from '../Pages/POD'
import RageBar from '../Components/RageBar'
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


function App() {
  const [count, setCount] = useState(0)
  const [user,SetUser] = useState('');
  const [rank,SetRank] = useState('');
  const [ActiveDay,SetActiveDay] = useState(0);
  const [streak,SetStreak] = useState(0);
  const [rage,SetRage] = useState(100);

  

 
  
  async function GetActiveDays()
  {
    console.log("Get Active days called...for,",user);
    const resp = await axios.post("http://localhost:3001/activeday",{user});
    SetActiveDay(resp.data.active_day);
    console.log("27",resp.data.active_day);
    const rageResp = await axios.post('http://localhost:3001/GetDetails',{user});
    console.log(rageResp.data," i am here...");
    SetRage(rageResp.data.rage);
    SetStreak(rageResp.data.streak);
  }

  GetActiveDays();
  


  return (
    
    <>
    <RageBar rage={rage} streak={streak}/>
    <button onClick={()=>{
      console.log(audio.paused);
      audio.pause();
    }} style={{position:'absolute',top:7,left:7,border:'solid 1px blue',backgroundColor:'rgb(0,200,100)',boxShadow:'5px 5px 10px rgb(0,200,200)',color:'white'}}>Music</button>
    {/* <h1>{user}</h1>   */}

    <BrowserRouter>
    <Routes>
      <Route path='/mainmenu' element={<MainMenu GetActiveDays={GetActiveDays}/>}/>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/introduction' element={<Introduction/>} />
      <Route path='/continue' element={user?<Questions user={user} ActiveDay={ActiveDay} SetActiveDay={GetActiveDays}/> : <Login setUser={SetUser}/>} />
      <Route path='/introduction/forward' element={<IntroductionHW/>} />
      <Route path='/register' element={<Registration setuser={SetUser}/>}/>
      <Route path='/login' element={<Login setUser={SetUser}/>}/>
      <Route path='/goodluck' element={user?<Goodluck user={user}/>:<Login setUser={SetUser}/>}/>
      <Route path='/states' element={user?<States/>: <Login setUser={SetUser}/> }/>
      <Route path="/ach" element={<Ach/>}/>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
