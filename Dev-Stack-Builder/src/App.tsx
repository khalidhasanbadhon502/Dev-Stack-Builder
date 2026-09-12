import  Nav  from './components/Nav'
import Banner from './components/Banner'
import {TechExplorer} from './components/TechExplorer'
import { Footer } from './components/Footer';

function App() {
  

  return (
    <div className="min-h-screen bg-white">
      <div>
      <Nav />
      <Banner />
        <TechExplorer />
      </div>
      <Footer />
    </div>
  )
}

export default App
