import React from 'react';
import Header from './components/Header';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <ProblemSolution />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <LeadCapture />
      <Footer />
    </div>
  );
}

export default App;