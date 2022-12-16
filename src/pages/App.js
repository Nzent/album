import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Photo from './Photo';
import "../styles/app.css"
function App() {

  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/photo/:id' element={<Photo/>}/>
   </Routes>
  );
}

export default App;
