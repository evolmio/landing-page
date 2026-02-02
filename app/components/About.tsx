export default function About() {
  const features = [
    { icon: '🎮', title: 'Behaviour-based, not grades' },
    { icon: '💪', title: 'Built for confidence and self-belief' },
    { icon: '🗺️', title: 'Designed for real-world pathways' }
  ];

  return (
    <section className="about-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Section Header */}
        <h2 className="section-title">What is Evolmio?</h2>

        {/* Main Description */}
        <p className="section-description">
          Evolmio is a game-based, behaviour-led career discovery app that helps learners build clarity, confidence, and direction. Instead of tests or labels, Evolmio uses interactive challenges and reflection to turn everyday behaviours into real skills — helping people explore pathways that actually fit them.
        </p>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
