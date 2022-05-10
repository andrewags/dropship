import { useState, useEffect } from 'react'
import './App.css'
import './styles.scss'
import Grid from '@mui/material/Grid'
import { Routes, Route, Link } from "react-router-dom"
import instagram from '/Instagram-Logo.wine.svg'
import facebook from '/Facebook-f_Logo-Blue-Logo.wine.svg'






function Home(){
  const [width, setWidth] = useState(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}

useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;

return(
     <Grid container spacing={2}
  direction = {isMobile ? 'column' : 'row'}
  alignItems= {isMobile ? "center" : "flex-start"}
  justifyContent= {isMobile ? "center" : "flex-start"}
  style={{ minHeight: '100vh' }}>
  <Grid item xs={8}>
    <h1>Homepage</h1>
    <h2>sub heading</h2>
    <h2>sub-sub</h2>
  </Grid>
  <Grid item xs={4}>
  <h1>2</h1>

  </Grid>
  <Grid item xs={4}>
  <h1>3</h1>

  </Grid>
  <Grid item xs={8}>
  <h1>4</h1>
  <h2 className='alignr'>right aligned text</h2>
  </Grid>
  <Grid item xs={8}>
  <h1>5</h1>
  <nav>
        <Link to="/about">About</Link>
    </nav>
  </Grid>
  <Grid item xs={4}>
  <h1>6</h1>
  <nav>
        <Link to="/contact">Contact</Link>
    </nav>

  </Grid>
  <Grid item xs={4} className = "social" >
  <div className='social'>
  <h1>7</h1>
  <h2>social</h2>
  <img src={instagram} alt="instagram" className='instagram'/>
  <img src={facebook} alt="facebook" className='facebook'/>
  </div>
  
  </Grid>
  
  <Grid item xs={8}>
    <h1>8</h1>
  </Grid>

  </Grid>
  )
}

function About(){
  return(
    <div>
      <h1>About Page</h1>
      <nav>
        <Link to="/">back to homepage</Link>
    </nav>
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h1>Contact Page</h1>
      <nav>
        <Link to="/">back to homepage</Link>
    </nav>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App
