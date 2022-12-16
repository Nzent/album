import { Route, Routes, redirect } from 'react-router-dom';
import Home from './Home';
import Photo from './Photo';
import "../styles/app.css"
import NavBar from '../components/NavBar';
function App() {

  return (
    <>
      {/* navbar compoent */}
      <NavBar />
      <Routes>
        {/* home route compoent */}
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Photo />} />
      </Routes>
    </>
  );
}

export default App;
