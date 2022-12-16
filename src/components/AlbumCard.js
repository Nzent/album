import React from 'react'
import '../styles/albumCard.css'
import { Link } from 'react-router-dom'

export default function AlbumCard({ id, }) {

  return (
    <Link to={`/photo/${id}`}>
      <div className='ac-body'>
        <div className='ac-title'>Album {id}</div>
      </div>
    </Link>
  )
}
