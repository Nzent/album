import React from 'react'
import './AlbumCard.css'
import { Link } from 'react-router-dom'
export default function AlbumCard({title,id,src}) {


  return (
    <Link to={`/photo/${id}`}>
      <div>
        <img src={src = undefined ? null:src} alt={title} />
      </div>
      <div className='ac-body'>{title}</div>
    </Link>
  )
}
