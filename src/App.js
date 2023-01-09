import {Routes, Route} from 'react-router-dom'
import './App.css';
import Profile from './components/Profile';
import SetProfile from './components/SetProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<SetProfile/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
