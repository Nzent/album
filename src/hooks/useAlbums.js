import {useState,useEffect} from "react"

export function useAlbums() {

    const [albums,setAlbums] = useState(null);

    useEffect(() => {
        async function fetchData(){
            try{
                await fetch(`https://jsonplaceholder.typicode.com/albums`)
                .then((response) => response.json())
                .then((data) => setAlbums(data));
            }catch (E){
                console.log(E);
            }
        }
        fetchData()
      }, [])
  
    return albums;
  }