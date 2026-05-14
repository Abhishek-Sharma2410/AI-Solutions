import { ShoppingCart, HeartPulse, Landmark, GraduationCap, Factory, Plane, Plug } from 'lucide-react';

const industries = [
  {
    icon: ShoppingCart,
    name: 'Retail & E-commerce',
    description: 'Personalized recommendations, inventory optimization, and demand forecasting.'
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description: 'Patient data analysis, diagnostic assistance, and treatment optimization.'
  },
  {
    icon: Landmark,
    name: 'Financial Services',
    description: 'Fraud detection, risk assessment, and automated trading strategies.'
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Personalized learning paths, student performance analytics, and content creation.'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Quality control, predictive maintenance, and supply chain optimization.'
  },
  {
    icon: Plane,
    name: 'Travel & Hospitality',
    description: 'Dynamic pricing, customer service automation, and experience personalization.'
  },
  {
    icon: Plug,
    name: 'Other',
    description: 'Customized based on your industries requirement'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transforming Industries Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI solutions are trusted by leading organizations across diverse sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
