import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Photo from './Photo';
import "../styles/app.css"
import NavBar from '../components/NavBar';
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/photo/:id' element={<Photo />} />
      </Routes>
    </>
  );
}

export default App;
