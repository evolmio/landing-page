'use client';

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('waiting-list-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Logo */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7706d7fc25604e9d9f86843c5eb42f2f%2F3081d9763f644a58a472f515478cfaba?format=webp&width=800&height=1200"
            alt="Evolmio Logo"
            className="h-40 sm:h-48 w-auto"
          />
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          Discover your strengths.<br className="hidden sm:block" /> Build your future.
        </h1>

        {/* Subheading */}
        <p className="hero-subheading">
          Evolmio helps you understand your behaviours, skills, and potential — before you choose your next step.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <button 
            onClick={scrollToForm}
            className="cta-button"
          >
            Join the Waiting List
          </button>
        </div>
      </div>
    </section>
  );
}
