export default function Features() {
  const features = [
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Heading</h2>
          <p className="text-xl text-gray-500">Subheading</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="1" fill="#000"/>
                    <path d="M12 8v8M8 12h8" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
