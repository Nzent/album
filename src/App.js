import AlbumCard from './components/AlbumCard';
import './App.css';
import { useState,useEffect } from 'react';
function App() {

const [albums ,setAlbums] = useState()
useEffect(() => {
  async function fetchData(){
   await fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data) => setAlbums(data));
    
  }

  fetchData()
}, [])

  return (
    <div className="app">
      <h1 className='h-title'>Album</h1>
      <section className='cardSection'>
        {albums?.map((album) =>
             <AlbumCard key={album.id} title={album.title}/>
          )}
      </section>
    </div>
  );
}

export default App;
