import About from './assets/component/about'
import Contact from './assets/component/contact'
import Experience from './assets/component/experience'
// import Hero from './assets/component/hero'
import Header from './assets/component/layours/header'
import Portfolio from './assets/component/portfolio'
import Services from './assets/component/services'
import WorkProcess from './assets/component/workProcess'

function App() {
 

  return (
    <>
    {/* <div  > */}
     <Header /> 
     {/* <Hero /> */}
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <WorkProcess />
     <Contact />
    {/* </div> */}
    </>
  )
}

export default App
