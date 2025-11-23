import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Excalidraw } from '@excalidraw/excalidraw'
import "@excalidraw/excalidraw/index.css";

function App() {

  return (
    <>
    <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
      <div style={{ height: "90vh", width: "100%" }}>
        <Excalidraw  theme='light'/>
      </div>
    </>
  )
}

export default App
