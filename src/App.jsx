// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Features from './components/Features'
import {Feature1,Feature2, Feature3, Feature4} from './components/Feature'
import { Hero } from './components/Hero'
import Nav from './components/Nav'
import Solutions from './components/Solutions'
import Title from './components/Title'
import Partners from './components/Partners'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <Solutions />
      <Title title="Our Features" tagLine="Discover the power of DocChain's cutting-edge capabilities." id="features"/>
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Features /> {/* Why choose Us */}
      <Partners />
      

    </>
  )
}

export default App
