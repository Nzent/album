import React from 'react'
import '../styles/albumCard.css'
import { Link } from 'react-router-dom'

export default function AlbumCard({ id, }) {
// single album card compoenent
  return (
    <Link to={`/${id}`}>
      <div className='ac-body'>
        <div className='ac-title'>Album {id}</div>
      </div>
    </Link>
  )
}
