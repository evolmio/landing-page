export default function About() {
  const features = [
    { icon: '🎮', title: 'Focus on Who You Are, Not What You Score' },
    { icon: '💪', title: 'Build Genuine Confidence' },
    { icon: '🗺️', title: 'Explore Pathways That Truly Fit' }
  ];

  return (
    <section className="about-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Section Header */}
        <h2 className="section-title">Go Beyond Grades. Discover Yourself.</h2>

        {/* Main Description */}
        <p className="section-description">
          Tired of being defined by tests and labels? Evolmio is a revolutionary app that transforms self-discovery into an exciting adventure. Through fun, game-based challenges and guided reflection, we help you uncover your natural skills and passions. We translate your everyday behaviours into a clear picture of your strengths, building the confidence you need to explore career and life pathways that genuinely excite you.
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
