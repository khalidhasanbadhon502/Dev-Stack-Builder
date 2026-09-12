import { useState } from 'react';
import {Nav} from './components/Nav';
import Banner from './components/Banner';
import { TechExplorer } from './components/TechExplorer';
import {Footer} from './components/Footer';
import { ResponsivePreview } from './components/ResponsivePreview';

function App() {
  const [showPreview, setShowPreview] = useState(false);

  const MainContent = (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Nav />
        <Banner />
        <TechExplorer />
      </div>
      <Footer />
    </div>
  );

  return (
    <>
      <button 
        onClick={() => setShowPreview(!showPreview)}
        className="fixed bottom-4 right-4 z-50 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold transition-all cursor-pointer"
      >
        {showPreview ? 'Exit Preview' : 'Show Multi-Device Preview'}
      </button>

      {showPreview ? (
        <ResponsivePreview>
          {MainContent}
        </ResponsivePreview>
      ) : (
        MainContent
      )}
    </>
  );
}

export default App;