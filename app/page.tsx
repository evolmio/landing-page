import Navigation from "./components/Navigation";
import Features from "./components/Features";
import ImageShowcase from "./components/ImageShowcase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Features />
        <ImageShowcase />
      </main>
      <Footer />
    </div>
  );
}
