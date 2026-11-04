import { useState } from 'react'
import './App.css'
import { ButtonOk } from './components/ButtonOk/ButtonOk';

function App() {
  var año = "2026";

  return (
    <main>
      <h1>Hello Vite + React en {año}</h1>
      <h2>Adiós</h2>
      <ButtonOk/>
    </main>
    
)}

export default App

/***************************************************/
