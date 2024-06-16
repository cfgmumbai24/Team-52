import { useState } from 'react'

import './App.css'
import Login from './components/login'
import TrackVolunteer from './components/TrackVolunteer/TrackVolunteer'
import Footer from './components/Footer'
import Header from './components/Header/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <TrackVolunteer/>
    <Footer />
    </>
  )
}

export default App
