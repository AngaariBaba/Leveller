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


function App() {
  const [count, setCount] = useState(0)
  const [user,SetUser] = useState('no user');
  const [rank,SetRank] = useState('');
  

  return (
    
    <>
    <RageBar/>
    {/* <h1>{user}</h1>   */}

    <BrowserRouter>
    <Routes>
     <Route path='/mainmenu' element={<MainMenu/>}/>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/introduction' element={<Introduction/>} />
      <Route path='/continue' element={<POD user={user}/>} />
      <Route path='/introduction/forward' element={<IntroductionHW/>} />
      <Route path='/register' element={<Registration setuser={SetUser}/>}/>
      <Route path='/login' element={<Login setUser={SetUser}/>}/>
      <Route path='/goodluck' element={<Goodluck user={user}/>}/>
      <Route path='/ach' element={<Ach/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
