import {useState,useEffect} from "react"

export function usePhotos(id) {

    const [photosData,setPhotosData] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try{
                await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
                .then((response) => response.json())
                .then((data) => setPhotosData(data));
            }catch (E){
                console.log(E);
            }
       
        }
        fetchData()
      }, [id])

// console.log(id);
  return photosData
}