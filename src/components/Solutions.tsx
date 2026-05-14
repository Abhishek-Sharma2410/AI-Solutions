import { Headset, Contact, Database, Workflow, Brain, BarChart, Container, Percent, Presentation, InspectionPanelIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


const solutions = [
  {
    icon: Workflow,
    title: 'AI Virtual Assistant & Administrative Automation',
    description: 'Streamline internal operations with AI-powered workflow automation. Email & calendar management Task automation & follow-ups Meeting summaries & action trackingWorkflow optimization',
    color: 'blue',
    slug: 'intelligent-analytics'
  },
  {
    icon: Brain,
    title: 'AI Document & Content Intelligence',
    description: 'Transform document-heavy processes into intelligent, automated systems. AI document drafting Compliance checks & risk flagging, Automated reporting, Data extraction & summarization',
    color: 'cyan',
    slug: 'process-automation'
  },
  {
    icon: Headset,
    title: 'AI Customer Support Automation',
    description: 'Deliver scalable, 24/7 intelligent customer service. Website & messaging chatbots, Helpdesk automation, AI voice assistants, CRM & ERP integrations',
    color: 'teal',
    slug: 'predictive-forecasting'
  },
  {
    icon: Database,
    title: 'AI Data Management & Business Intelligence',
    description: 'Turn raw data into actionable insights. KPI dashboards, Real-time performance tracking, Automated BI reporting, Sales & operations analytics',
    color: 'blue',
    slug: 'customer-intelligence'
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics & Operational Optimization',
    description: 'Improve efficiency through predictive analytics and process intelligence. Demand forecastingCost optimization models, Bottleneck identification, Decision-support systems',
    color: 'cyan',
    slug: 'smart-data-management'
  },
  {
    icon: Contact,
    title: 'AI in HR & Talent Intelligence',
    description: 'Modernize workforce management with AI-driven insights. Resume screening & recruitment automation, Attrition prediction, Workforce analytics dashboards, HR process automation',
    color: 'teal',
    slug: 'ai-security'
  },
  {
    icon: Container,
    title: 'AI-Powered Supply Chain Management',
    description: 'Enhance visibility and control across your supply chain. Inventory optimization, Logistics & route planning, Supplier risk assessment, Demand planning',
    color: 'teal',
    slug: 'chain management'
  },
  {
    icon: Percent,
    title: 'AI-Based Price Optimization',
    description: 'Maximize revenue with intelligent pricing systems. Dynamic pricing models, Margin optimization, Competitive benchmarking, Revenue simulations',
    color: 'teal',
    slug: ' Price Optimization'
  },
  {
    icon: Presentation,
    title: 'AI in Sales & Marketing',
    description: 'Accelerate growth with predictive customer intelligence. Lead scoring & qualification, Pipeline forecasting, Campaign performance analytics, CRM automation',
    color: 'teal',
    slug: 'Marketing'
  },
  
  {
    icon: InspectionPanelIcon,
    title: 'AI for Social Media & Performance Enablement',
    description: 'Enhance brand growth and workforce performance with AI. Content planning & automation, Engagement analytics, Performance coaching systems, Skill development insights',
    color: 'teal',
    slug: 'Performance Enablement'
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our AI Services 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design and deploy intelligent solutions that improve efficiency, reduces cost & enables data driven growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-${solution.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`text-${solution.color}-600`} size={28} />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <Link
  to={`/solution/${solution.slug}`}
  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
>
  Learn more
  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
</Link>


                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}