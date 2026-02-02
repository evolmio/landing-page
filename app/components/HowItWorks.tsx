export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Play & Reflect',
      description: 'Complete short challenges that reveal how you naturally approach problems'
    },
    {
      number: '02',
      title: 'Understand Your Strengths',
      description: 'See everyday behaviours turn into real, valuable skills'
    },
    {
      number: '03',
      title: 'Explore Pathways',
      description: 'Discover career routes that match how you actually work'
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="section-title text-center">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, engaging, and designed for you
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
