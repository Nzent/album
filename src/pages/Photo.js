import React from 'react'
import "../styles/photo.css"
import { useParams } from 'react-router-dom';
import {useState,useEffect} from "react"
export default function Photo() {
    const {id} = useParams()

    const [photo,setPhoto] = useState()

    useEffect(() => {
        async function fetchData(){
         await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
          .then((response) => response.json())
          .then((data) => setPhoto(data));
        }
        fetchData()
      }, [id])


  return (
    <div>Photo Page {console.log(photo)}</div>
  )
}
