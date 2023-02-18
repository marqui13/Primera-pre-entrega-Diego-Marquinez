import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {


  return (
    <div className="app">
      <Navbar/>
      <ItemListContainer/>
      <h1 className="text-3x1 font-bold underline"> Hello world</h1>

    </div>
  );
}

export default App
