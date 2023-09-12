import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ListPage from './pages/ListPage';

function App() {
  const [location, setLocation] = useState('home');

  const getLocation = (name: string) => {
    setLocation(name);
  };

  /*Image by <a href="https://www.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_7089700.htm#query=movies&position=0&from_view=search&track=sph">Freepik</a>*/

  return (
    <div className='main-container'>
      <Header location={location}/>
        {location === 'home' ? <HomePage /> : null}
        {location === 'add' ? <AddPage /> : null}
        {location === 'list' ? <ListPage /> : null}
      <Navbar sendLocation={getLocation}/>
    </div>
  )
}

export default App;