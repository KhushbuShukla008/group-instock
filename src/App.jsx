import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* placeholder for paths */}
        {/* <Route path="/inventory" element={<Inventory />} />
        <Route path="/warehouses" element={<Warehouses />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
