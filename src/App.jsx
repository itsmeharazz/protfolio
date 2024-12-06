// import { createContext } from 'react'
import About from './assets/component/about'
import Contact from './assets/component/contact'
import Experience from './assets/component/experience'
import Hero from './assets/component/hero'
import Header from './assets/component/layours/header'
import Portfolio from './assets/component/portfolio'
import Services from './assets/component/services'
import WorkProcess from './assets/component/workProcess'

// import { createContext } from 'react'
// import { useState } from 'react'

// export const ThemeContext =createContext("null");
function App() {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme =() =>{
  //   setTheme ((curr)=>(curr ==="light" ? "dark" : "light"));
  //   };

  return (
    <>
    {/* <ThemeContext.Provider value={{theme, setTheme}}> */}
    {/* <div id='theme'> */}
     <Header /> 
     <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <WorkProcess />
     <Contact />
    {/* </div> */}
    {/* </ThemeContext.Provider> */}
    </>
  )
}

export default App
