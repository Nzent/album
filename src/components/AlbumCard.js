import React from 'react'
import './AlbumCard.css'
export default function AlbumCard({title,id}) {
  return (
    <a href={`/photo/${id}`}>
      <div className='ac-body'>{title}</div>
    </a>
  )
}
