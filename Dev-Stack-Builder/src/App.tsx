import { Toaster } from 'react-hot-toast';
import { Nav } from './components/Nav'; 
import { TechExplorer } from './components/TechExplorer';
import { Footer } from './components/Footer'; 

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
    
      <Nav />
      
 
      <TechExplorer />

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;