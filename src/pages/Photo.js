import React from 'react'
import "../styles/photo.css"
import { useParams } from 'react-router-dom';
import { usePhotos } from '../hooks/usePhotos';
import PhotoCard from '../components/PhotoCard';
export default function Photo() {
  const { id } = useParams()

  const photos = usePhotos(id)

  return (
    <>
      <section>
        <h1>{photos?.length} photos found</h1>
        <div className="p-grid">
          {photos?.map((photo) =>

            <>
              {
                photo == null ? <h3>Loading ... </h3> :
                // populate potos of the selected album 
                  <PhotoCard imgUrl={photo?.url} src={photo?.thumbnailUrl} key={photo?.id} title={photo?.title} />
              }
            </>
          )}
        </div>
      </section>
    </>
  )
}
