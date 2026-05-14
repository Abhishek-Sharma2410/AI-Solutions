// import Header from './components/Header';
// import Hero from './components/Hero';
// // import Stats from './components/Stats';
// import Solutions from './components/Solutions';
// import Features from './components/Features';
// import Industries from './components/Industries';
// // import Testimonials from './components/Testimonials';
// import CTA from './components/CTA';
// import Footer from './components/Footer';
// import BlogCarousel from './components/BlogCarousel';

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <Hero />
//       {/* <Stats /> */}
//       <Solutions />
//       <Features />
//       <Industries />
//       <BlogCarousel />
//       {/* <Testimonials /> */}
//       <CTA />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
// import Stats from './components/Stats';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Industries from './components/Industries';
import BlogCarousel from './components/BlogCarousel';
// import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
// import TrialModal from './components/TrialModal';
import SolutionDetail from './pages/SolutionDetail';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onStartTrial={() => setIsModalOpen(true)} />
      <Hero onStartTrial={() => setIsModalOpen(true)} />
      {/* <Stats /> */}
      <Solutions />
      <Features />
      <Industries />
      <BlogCarousel />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
      {/* <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solution/:slug" element={<SolutionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
