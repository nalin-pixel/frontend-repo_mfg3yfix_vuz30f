import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import KeyMetrics from './components/KeyMetrics';
import Services from './components/Services';

function App() {
  return (
    <div className="font-inter bg-white text-neutral-900">
      <Header />
      <main className="pt-20">
        <Hero />
        <SocialProof />
        <KeyMetrics />
        <Services />
      </main>
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Studio Arc. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#about" className="hover:text-neutral-900">About</a>
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
