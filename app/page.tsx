import Hero from "./components/Hero";
import dynamic from 'next/dynamic';

const Evolution = dynamic(() => import('./components/Evolution'));
const About = dynamic(() => import('./components/About'));
const HowItWorks = dynamic(() => import('./components/HowItWorks'));
const WaitingListForm = dynamic(() => import('./components/WaitingListForm'));
const EvolmioFooter = dynamic(() => import('./components/EvolmioFooter'));

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Evolution />
        <About />
        <HowItWorks />
        <WaitingListForm />
      </main>
      <EvolmioFooter />
    </div>
  );
}
