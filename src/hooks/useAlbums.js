import {useState,useEffect} from "react"

export function useAlbums() {
// set all fetched album data to state
    const [albums,setAlbums] = useState(null);


    useEffect(() => {
        async function fetchData(){
            try{
                // fetch all albums form api
                await fetch(`https://jsonplaceholder.typicode.com/albums`)
                .then((response) => response.json())
                .then((data) => setAlbums(data));
            }catch (E){
                console.log(E);
            }
        }
        fetchData()
      }, [])
//   return all albums data
    return albums;
  }