import {Routes, Route} from 'react-router-dom'
import './App.css';
import Profile from './components/Profile';
import SetProfile from './components/SetProfile';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='/setProfile' element={<SetProfile/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
