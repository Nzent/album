import React from 'react'
import "../styles/photo.css"
import { useParams } from 'react-router-dom';
import { usePhotos } from '../hooks/usePhotos';
import PhotoCard from '../components/PhotoCard';
export default function Photo() {
  const { id } = useParams()

  const photos = usePhotos(id)

  console.log(photos);
  return (
    <>
      <section className='p-section'>
        {photos == null?<h3>Loading ... </h3>:<PhotoCard src={photos?.url} title={photos?.title}/>}
      </section>
    </>
  )
}
