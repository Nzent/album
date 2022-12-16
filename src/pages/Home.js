import React from 'react'
// import { useState,useEffect } from 'react';
import AlbumCard from '../components/AlbumCard';
import "../styles/home.css"
import { useAlbums } from '../hooks/useAlbums';


export default function Home() {

const albums = useAlbums()
   
  return (
    <div className="app">
    <h1 className='h-title'>Album</h1>
    <section className='cardSection'>
      {albums?.map((album) =>
           <AlbumCard key={album.id} id={album.id} title={album.title} />
        )}
    </section>
  </div>
  )
}
