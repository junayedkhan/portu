import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Portu from './views/Portu';
import "./assets/scss/main.scss"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portu />} />
    </Routes>
  )
}

export default App;
