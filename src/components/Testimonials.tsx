import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "This AI platform has completely transformed how we analyze customer data. We've seen a 60% increase in conversion rates since implementation.",
    author: "Sarah Johnson",
    role: "VP of Analytics",
    company: "TechCorp Industries"
  },
  {
    quote: "The automation capabilities saved our team hundreds of hours monthly. It's like having an extra team member who never sleeps.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Global Retail Co"
  },
  {
    quote: "Predictive insights have given us a competitive edge we never thought possible. The ROI was evident within the first quarter.",
    author: "Emily Rodriguez",
    role: "Chief Data Officer",
    company: "Finance Solutions Ltd"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-gray-200 pt-6">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-blue-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
