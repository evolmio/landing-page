'use client';

import { useState } from 'react';

export default function WaitingListForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate form submission
      // In production, you would send this to your backend or Reslink
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      setFormData({ name: '', email: '', userType: '' });
      
      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waiting-list-form" className="form-section">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-center">Be the first to try Evolmio</h2>
          <p className="section-description text-center">
            We're launching soon. Join the waiting list for early access.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form-container">
          {submitted && (
            <div className="success-message">
              ✓ Thanks for joining! Check your email for updates.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="userType" className="form-label">
              I'm a... (Optional)
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select your role</option>
              <option value="learner">Learner</option>
              <option value="educator">Educator</option>
              <option value="employer">Employability Partner</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cta-button w-full"
          >
            {loading ? 'Joining...' : 'Join the Waiting List'}
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            We respect your privacy. No spam, just updates about Evolmio.
          </p>
        </form>
      </div>
    </section>
  );
}
