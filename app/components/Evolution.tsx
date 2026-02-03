
export default function Evolution() {
  const stats = [
    { value: 1000, label: 'workshops & events delivered' },
    { value: 10000, label: 'learners engaged across the UK' },
    { value: 99, label: 'conversations revealing the same challenge' }
  ];
  
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
             Evolmio powered by Skillstruct
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Built from real-world experience. Designed for what learners actually need.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Journey</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Evolmio didn’t start as an app. It started with <strong>SkillStruct</strong> a programme delivered in classrooms, community spaces, and employability settings across the UK.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Across every session, the same story emerged. Learners felt uncertain about their strengths, unsure where they fit, and disconnected from traditional careers tools.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Evolmio is the evolution of that work transforming real-world insight into a game-based, behaviour-led experience that helps people discover who they are and where they can go.
              </p>
            </div>
            
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                      {stat.value === 99 ? 'Countless' : `${stat.value.toLocaleString()}+`}
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-md text-gray-700 dark:text-gray-200">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mt-24 flex justify-center items-center space-x-4 text-center">
            <div className="flex flex-col items-center">
                <div className="p-3 bg-gray-200 rounded-full">
                    <p className="text-lg font-semibold">SkillStruct</p>
                </div>
            </div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className="flex flex-col items-center">
                <div className="p-3 bg-gray-200 rounded-full">
                    <p className="text-lg font-semibold">Insight</p>
                </div>
            </div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className="flex flex-col items-center">
                <div className="p-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full">
                    <p className="text-lg font-semibold text-white">Evolmio</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
