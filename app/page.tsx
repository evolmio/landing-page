import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import WaitingListForm from "./components/WaitingListForm";
import EvolmioFooter from "./components/EvolmioFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <WaitingListForm />
      </main>
      <EvolmioFooter />
    </div>
  );
}
