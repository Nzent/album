import React from 'react'
// import { useState,useEffect } from 'react';
import AlbumCard from '../components/AlbumCard';
import "../styles/home.css"
import { useAlbums } from '../hooks/useAlbums';
export default function Home() {

  const albums = useAlbums()

  return (
    <div className="app">
      <h1 className='h-title'>Albums</h1>
      <section className='h-cardgrid'>
        {
          albums == null ? <h3>Loading ...</h3> :
            albums.map((album) =>
              // add all album data to album card compoenent
              <AlbumCard key={album.id} id={album.id} title={album.title} />
            )}
      </section>
    </div>
  )
}
