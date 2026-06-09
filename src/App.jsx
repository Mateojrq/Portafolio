import Header from "./components/header/Header";
import About from "./components/about/About";
import Project from "./components/project/Project"; // Ahora va primero
import Experience from "./components/experience/Experience"; // Ahora va después
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <About/>
      <Project/> 
      <Experience/>
      <Footer/>
    </>
  )
}

export default App;