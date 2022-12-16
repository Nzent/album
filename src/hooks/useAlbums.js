import {useState,useEffect} from "react"

export function useAlbums() {

    const [albums,setAlbums] = useState(null);
    useEffect(() => {
        // const URL = process.env.API_URL
        async function fetchData(){
         await fetch(`https://jsonplaceholder.typicode.com/albums`)
          .then((response) => response.json())
          .then((data) => setAlbums(data));
        }
      
        fetchData()
      }, [])
  
    return albums;
  }