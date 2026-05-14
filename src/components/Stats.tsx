import { Building2, Users, Globe, Award } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '5,000+',
    label: 'Companies Trust Us'
  },
  {
    icon: Users,
    value: '100K+',
    label: 'Active Users'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Worldwide'
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Uptime SLA'
  }
];

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
