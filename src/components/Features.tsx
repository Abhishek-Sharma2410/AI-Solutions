// import { CheckCircle, Rocket, BarChart3, Lock } from 'lucide-react';

// const features = [
//   {
//     icon: Rocket,
//     title: 'Rapid Deployment',
//     description: 'Get up and running in minutes, not months. Our platform is designed for quick integration with your existing systems.'
//   },
//   {
//     icon: BarChart3,
//     title: 'Real-time Insights',
//     description: 'Monitor performance and get actionable insights as they happen with live dashboards and alerts.'
//   },
//   {
//     icon: Lock,
//     title: 'Enterprise Security',
//     description: 'Bank-level encryption, compliance certifications, and robust access controls keep your data safe.'
//   },
//   {
//     icon: CheckCircle,
//     title: 'Proven Accuracy',
//     description: 'Industry-leading AI models trained on billions of data points deliver consistent, reliable results.'
//   }
// ];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for scale, designed for simplicity
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our AI platform combines cutting-edge technology with intuitive design,
              making advanced AI accessible to teams of all sizes.
            </p>

            {/* <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-10 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-slide-right">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Sales Forecast Accuracy</div>
                    <div className="text-2xl font-bold">66.67%</div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[90%] animate-progress"></div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-slide-right" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Conversion Rate </div>
                    <div className="text-2xl font-bold">3x</div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[98%] animate-progress"></div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-slide-right" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Inventory Cost reduction</div>
                    <div className="text-2xl font-bold">2x</div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[45%] animate-progress"></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-slide-right" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Stock outs</div>
                    <div className="text-2xl font-bold">1.5x</div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[45%] animate-progress"></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-slide-right" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Customer Retention </div>
                    <div className="text-2xl font-bold">66.67%</div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[45%] animate-progress"></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-slide-right" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Marketing</div>
                    <div className="text-2xl font-bold">2x</div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-2 w-[45%] animate-progress"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}