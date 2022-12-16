import {useState,useEffect} from "react"

export function usePhotos(id) {
// set album data to state
    const [photosData,setPhotosData] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try{
                // fetch specific album's photo by album id
                await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
                .then((response) => response.json())
                .then((data) => setPhotosData(data));
            }catch (E){
                console.log(E);
            }
       
        }
        fetchData()
      }, [id])

// return album data
  return photosData
}