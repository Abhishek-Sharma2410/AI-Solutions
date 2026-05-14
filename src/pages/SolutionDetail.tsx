import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Zap, Target, Calendar } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';

interface FormData {
  name: string;
  phone: string;
  email: string;
  organization: string;
  requirement: string;
}

const emptyForm: FormData = { name: '', phone: '', email: '', organization: '', requirement: '' };

const solutionDetails = {
  'intelligent-analytics': {
    title: 'AI Document & Content Intelligence',
    subtitle: 'Transform document-heavy operations into intelligent, automated workflows with AI-powered drafting, compliance monitoring, reporting, and data extraction.',
    description: 'Documents are at the core of every business operation—contracts, invoices, reports, proposals, forms, policies, emails, legal files, and compliance records. Yet many organizations still rely on manual processes to create, review, organize, and extract information from these documents. This leads to delays, higher operational costs, repetitive workloads, inconsistent quality, and increased compliance risk. Our AI Document & Content Intelligence solution uses Artificial Intelligence, Natural Language Processing (NLP), Optical Character Recognition (OCR), and Machine Learning to automate document-heavy workflows, improve accuracy, and convert business content into actionable intelligence. We help businesses move from static paperwork to smart, scalable document systems.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Create documents faster with AI drafting tools',
      'Extract data from files automatically',
      'Summarize long documents instantly',
      'Detect compliance risks and missing information',
      'Automate internal reporting processes',
      'Improve collaboration and productivity',
      'Search and retrieve knowledge instantly'
    ],
    benefits: [
      { title: 'AI Document Drafting', description: 'Generate professional and accurate business documents in minutes using AI. Create - Contracts & agreements, Proposals & quotations, HR letters & onboarding documents, Policies & SOPs, Client emails & communication, Reports & presentations, Legal templates & notices' },
      { title: 'Compliance Checks & Risk Flagging', description: 'AI reviews documents against internal rules, regulations, and legal standards. Detect: Missing clauses, Expired terms, Inconsistent language, Regulatory violations, Sensitive data exposure, Risk-heavy statements, Outdated policy references' },
      { title: 'Automated Reporting', description: 'Convert raw business data and documents into smart reports instantly. Generate: Weekly / monthly reports, Executive summaries, Compliance reports, Financial documentation, Performance dashboards, Client-ready updates' },
      { title: 'Data Extraction & Summarization', description: 'Extract key information from structured and unstructured documents automatically. Supported files: PDFs, Scanned images, Invoices, Contracts, Emails, Forms, Excel sheets, Meeting notes' }
    ],
    useCases: [
      { industry: 'Retail', example: 'Analyze customer behavior patterns to optimize inventory, pricing strategies, and personalized marketing campaigns.' },
      { industry: 'Finance', example: 'Detect market anomalies, assess risk factors in real-time, and identify portfolio optimization opportunities.' },
      { industry: 'Healthcare', example: 'Uncover patient health trends, optimize resource allocation, and improve treatment outcomes through data-driven insights.' },
      { industry: 'Manufacturing', example: 'Monitor production efficiency, predict equipment failures before they occur, and optimize operational performance.' }
    ]
  },
  'process-automation': {
    title: 'AI Document & Content Intelligence',
    subtitle: 'Turn Documents into Intelligent Workflows',
    description: 'Transform unstructured, document-heavy work—PDFs, contracts, emails, reports, and forms—into automated, intelligent workflows using AI. Instead of humans manually reading, writing, and checking documents, AI assists or even handles large parts of the process.',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'AI-powered document drafting in seconds using NLP and Generative AI',
      'Automated compliance checks and risk flagging against GDPR, HIPAA, and more',
      'Intelligent reporting from raw data with trend analysis and narratives',
      'Data extraction and summarization from large unstructured documents',
      'OCR support for scanned documents and forms',
      '60–90% reduction in manual effort across document workflows'
    ],
    benefits: [
      { title: 'Faster Document Drafting', description: 'AI generates first drafts of contracts, proposals, and reports in seconds — 80–90% faster than manual drafting — with consistent tone and formatting.' },
      { title: 'Compliance & Risk Reduction', description: 'Automatically scan documents for missing clauses, non-compliant language, data privacy violations, and financial inconsistencies before they become issues.' },
      { title: 'Automated Reporting', description: 'Pull data from multiple sources and generate business reports, financial summaries, and performance reviews automatically — eliminating manual report writing.' },
      { title: 'Instant Data Extraction', description: 'Extract key entities like names, dates, amounts, and contract terms from large documents and get concise summaries to accelerate decision-making.' }
    ],
    useCases: [
      { industry: 'Legal', example: 'Input client details and AI generates a first draft contract in seconds. Flags missing indemnity clauses and highlights high-risk payment terms automatically.' },
      { industry: 'Finance', example: 'Extract invoice details, vendor info, and amounts from scanned documents. Auto-generate monthly financial summaries with key insights and anomalies.' },
      { industry: 'Human Resources', example: 'Automate policy document generation, resume screening summaries, and compliance checks across employee records and onboarding forms.' },
      { industry: 'Healthcare', example: 'Extract and summarize patient records, flag compliance issues with healthcare regulations, and automate reporting across clinical documents.' }
    ]
  },
  'predictive-forecasting': {
    title: 'AI Customer Support Automation',
    subtitle: 'Fast, Consistent & Always-Available Support',
    description: 'Deliver fast, consistent, and always-available customer service using AI across chat, voice, and backend systems. Reduce manual workload while improving response speed and customer experience at scale.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'AI-powered chatbots across WhatsApp, Facebook Messenger, Slack, and websites',
      'Helpdesk automation with auto-ticketing, routing, and priority detection',
      'AI voice assistants for inbound calls with Speech-to-Text and NLP',
      'CRM & ERP integrations with Salesforce and SAP for personalized support',
      '70–90% faster response times with 24/7 availability',
      'Seamless escalation to human agents for complex issues'
    ],
    benefits: [
      { title: '24/7 Instant Responses', description: 'AI chatbots and voice assistants handle customer queries around the clock — answering FAQs, tracking orders, and guiding users through processes without any wait time.' },
      { title: 'Helpdesk Automation', description: 'Auto-create and classify support tickets from emails and chat, assign them to the right team, detect urgency and sentiment, and suggest reply drafts to agents instantly.' },
      { title: 'AI Voice Support', description: 'Handle inbound calls intelligently using Speech-to-Text and NLP. Resolve common queries, perform transactions, and route calls — reducing call center load by up to 70%.' },
      { title: 'Personalized CRM-Driven Support', description: 'Pull real-time customer history from CRM and ERP systems to personalize every interaction, auto-update records, and trigger workflows like refunds or escalations automatically.' }
    ],
    useCases: [
      { industry: 'E-commerce', example: 'Chatbot handles order tracking and returns instantly. AI creates tickets for complex issues, routes them to the right team, and updates the CRM automatically.' },
      { industry: 'Banking & Finance', example: 'AI voice assistant handles account balance queries, transaction history, and card blocking — 24/7 without human agents for routine requests.' },
      { industry: 'Telecom', example: 'Automate plan inquiries, billing support, and technical troubleshooting across WhatsApp and website chat with real-time ERP integration.' },
      { industry: 'SaaS & Technology', example: 'AI triages technical support tickets by severity, suggests solutions from the knowledge base, and escalates unresolved issues to the right engineering team.' }
    ]
  },
  'customer-intelligence': {
    title: 'AI Data Management & Business Intelligence',
    subtitle: 'Transform Raw Data Into Actionable Insights',
    description: 'Transform raw, scattered data into clear, actionable insights that drive smarter business decisions. Combining data engineering, analytics, and AI to give organizations real-time visibility, automated reporting, and predictive power.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'KPI dashboards with Power BI and Tableau pulling live data from CRM, ERP, and APIs',
      'Real-time performance tracking with AI anomaly detection and instant alerts',
      'Automated BI reporting with Natural Language Generation for readable narratives',
      'Sales & operations analytics with ML-powered forecasting and demand prediction',
      'End-to-end data pipelines with ETL/ELT integration and cloud data warehousing',
      'Real-time insights replacing delayed manual reports across all business functions'
    ],
    benefits: [
      { title: 'KPI Dashboards', description: 'Centralize all key metrics — revenue, sales growth, conversion rates, and operational efficiency — in one live dashboard. Auto-updated from all your data sources for instant decision-making.' },
      { title: 'Real-Time Performance Tracking', description: 'Monitor operations as they happen. AI detects anomalies, performance drops, and trends instantly — like a sudden drop in checkout conversions — and alerts your team before losses occur.' },
      { title: 'Automated BI Reporting', description: 'AI generates daily, weekly, and monthly reports with insights and narratives automatically. Instead of manual work, get summaries like "Sales increased 12% due to higher demand in Region X."' },
      { title: 'Sales & Operations Analytics', description: 'Forecast which products will sell next month, optimize inventory, segment customers, and align marketing strategy — all powered by historical and real-time ML analysis.' }
    ],
    useCases: [
      { industry: 'Retail & E-commerce', example: 'Live sales dashboards track revenue by region and product. AI detects demand spikes, auto-adjusts inventory recommendations, and generates weekly performance reports.' },
      { industry: 'Finance', example: 'Automate risk analysis reporting, track real-time transaction anomalies, and generate executive financial summaries with AI-driven narratives and forecasts.' },
      { industry: 'Manufacturing', example: 'Monitor production line performance in real time, detect operational bottlenecks instantly, and forecast maintenance needs using live sensor and operations data.' },
      { industry: 'Marketing', example: 'Track campaign performance across all channels in one dashboard, identify top-performing segments, and auto-generate campaign reports with optimization recommendations.' }
    ]
  },
  'smart-data-management': {
    title: 'Advanced Analytics & Operational Optimization',
    subtitle: 'Predict, Optimize & Operate Smarter',
    description: 'Go beyond basic reporting with AI and data science that predicts outcomes, identifies inefficiencies, and continuously improves business processes. Actively guide decisions and optimize operations in real time — not after the fact.',
    image: 'https://images.pexels.com/photos/6389075/pexels-photo-6389075.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Demand forecasting using ML models with seasonality, trends, and external factors',
      'Cost optimization models for logistics, procurement, workforce, and energy',
      'Bottleneck identification using process mining and workflow analytics',
      'AI-powered decision-support systems with what-if scenario modeling',
      'Predictive analytics replacing intuition-based operational decisions',
      'Reduced operational costs and increased profitability through continuous optimization'
    ],
    benefits: [
      { title: 'Demand Forecasting', description: 'Predict future sales using ML models that factor in seasonality, market trends, promotions, and external conditions — enabling accurate inventory planning and production scheduling.' },
      { title: 'Cost Optimization', description: 'AI analyzes operational expenses, logistics routes, procurement strategies, and resource allocation to identify savings — like reducing logistics costs by 15% through smarter routing.' },
      { title: 'Bottleneck Identification', description: 'Use process mining and workflow analytics to detect delays, overloaded resources, and inefficient steps in real time — then act before they impact output or customer experience.' },
      { title: 'Decision-Support Systems', description: 'AI evaluates multiple scenarios and recommends the best actions. Ask "What happens if demand increases 20%?" and get simulated outcomes with optimal strategies instantly.' }
    ],
    useCases: [
      { industry: 'Retail & E-commerce', example: 'Forecast festive season demand by product category, optimize pricing strategies dynamically, and adjust inventory levels weeks in advance to prevent stockouts.' },
      { industry: 'Manufacturing', example: 'AI detects machines causing production delays, recommends maintenance schedules, and optimizes shift allocation to reduce cycle times and increase throughput.' },
      { industry: 'Logistics', example: 'Optimize delivery routes in real time, reduce fuel and shipping costs, and predict delivery volumes to allocate fleet and warehouse resources efficiently.' },
      { industry: 'Finance', example: 'Model risk scenarios, optimize cost structures across departments, and support strategic investment decisions with AI-powered what-if analysis and recommendations.' }
    ]
  },
  'ai-security': {
    title: 'AI in HR & Talent Intelligence',
    subtitle: 'Hire Better, Retain Longer, Operate Smarter',
    description: 'Transform traditional HR into a data-driven, proactive function — helping organizations hire better, retain talent, and streamline operations using AI. From resume screening to attrition prediction, make every HR decision smarter.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Resume screening and recruitment automation using NLP to rank and shortlist candidates',
      'Attrition prediction using ML models trained on engagement, performance, and compensation data',
      'Workforce analytics dashboards with real-time headcount, attrition, and diversity metrics',
      'HR process automation for onboarding, payroll, leave management, and policy queries',
      'Chatbot-based initial interviews and automated interview scheduling',
      'End-to-end HRMS integration with Power BI and Tableau for workforce insights'
    ],
    benefits: [
      { title: 'Resume Screening & Recruitment', description: 'Screen thousands of resumes in minutes using NLP. AI ranks candidates by skills and fit, shortlists the top profiles, and sends interview invites automatically — cutting hiring cycles dramatically.' },
      { title: 'Attrition Prediction', description: 'ML models analyze engagement scores, performance trends, and compensation data to flag high-risk employees early — enabling proactive retention before talent walks out the door.' },
      { title: 'Workforce Analytics Dashboards', description: 'Get real-time visibility into headcount trends, attrition rates, diversity metrics, and department performance — all in one live dashboard integrated across your HR systems.' },
      { title: 'HR Process Automation', description: 'Automate onboarding document dispatch, system account creation, training scheduling, payroll processing, and leave management — reducing manual effort and improving employee experience.' }
    ],
    useCases: [
      { industry: 'Corporates & Enterprises', example: 'AI screens 5,000 applications, filters top 50 candidates, scores them by relevance, and sends interview invites — all within hours instead of weeks.' },
      { industry: 'IT & Tech Companies', example: 'Predict which engineers are at attrition risk using engagement and growth data. Trigger personalized retention actions before they resign.' },
      { industry: 'Healthcare', example: 'Automate nurse and staff onboarding workflows, track compliance certifications, and monitor workforce utilization across departments in real time.' },
      { industry: 'Retail & Large Workforce', example: 'Manage high-volume hiring with automated screening, track shift attendance, and generate department-wise performance reports automatically.' }
    ]
  },
  'chain management': {
    title: 'AI-Powered Supply Chain Intelligence',
    subtitle: 'Efficient, Agile & Resilient Supply Chain Operations',
    description: 'Transform your supply chain with AI that forecasts demand accurately, optimizes inventory automatically, plans smarter logistics routes, and monitors supplier risks in real time — eliminating inefficiencies and building resilience at every stage.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Inventory optimization using predictive models to maintain safety stock and automate replenishment',
      'AI-powered logistics and route planning with real-time traffic, weather, and fuel cost data',
      'Supplier risk assessment monitoring delivery timelines, quality metrics, and financial health',
      'Demand planning using ML models combining historical data, seasonality, and market trends',
      'Dynamic route adjustment and fleet utilization optimization for faster, cheaper deliveries',
      'End-to-end supply chain visibility with IoT tracking and cloud-based integration'
    ],
    benefits: [
      { title: 'Inventory Optimization', description: 'AI analyzes sales history, demand patterns, lead times, and seasonality to recommend optimal stock levels — automating replenishment and eliminating both stockouts and excess holding costs.' },
      { title: 'Logistics & Route Planning', description: 'Optimize delivery routes dynamically using real-time traffic, weather, and fuel cost data. Minimize delivery times, reduce fuel consumption, and maximize fleet utilization automatically.' },
      { title: 'Supplier Risk Assessment', description: 'Continuously monitor supplier performance across delivery timelines, quality metrics, and financial health. AI flags risky suppliers early and suggests reliable alternatives before disruptions occur.' },
      { title: 'Demand Planning', description: 'Forecast demand fluctuations accurately by combining historical data, market trends, promotions, and seasonality — aligning production schedules, inventory, and logistics plans well in advance.' }
    ],
    useCases: [
      { industry: 'Retail & E-commerce', example: 'AI forecasts festive season demand spikes, automatically increases reorder quantities, and adjusts logistics plans — ensuring products are available without overstocking warehouses.' },
      { industry: 'Manufacturing', example: 'Align production schedules with demand forecasts, optimize raw material procurement, and flag supplier risks before they halt production lines.' },
      { industry: 'Logistics & Transportation', example: 'Dynamically adjust delivery routes to avoid congestion, optimize fleet allocation across regions, and reduce fuel costs through AI-powered route optimization.' },
      { industry: 'Pharmaceuticals', example: 'Maintain optimal medicine inventory levels, monitor supplier compliance and quality in real time, and ensure critical stock availability across distribution centers.' }
    ]
  },
  ' Price Optimization': {
    title: 'AI-Powered Pricing & Revenue Optimization',
    subtitle: 'Maximize Revenue With Smarter Pricing Decisions',
    description: 'Optimize pricing in real time using AI that analyzes demand, competitor strategies, cost structures, and market conditions — enabling dynamic pricing, margin control, and revenue simulations that drive consistent profitability.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Dynamic pricing models adjusting prices in real time based on demand, supply, and competition',
      'Margin optimization balancing COGS, operational costs, and pricing elasticity for profitability',
      'Competitive benchmarking tracking competitor prices, discounts, and market positioning automatically',
      'Revenue simulations with what-if analysis to forecast impact before applying price changes',
      'Personalized pricing strategies for different customer segments and markets',
      'Real-time data processing with ML models for continuous pricing accuracy'
    ],
    benefits: [
      { title: 'Dynamic Pricing Models', description: 'AI continuously adjusts prices based on live demand patterns, competitor pricing, seasonality, and inventory levels — increasing prices during peak demand and lowering them to boost sales when needed.' },
      { title: 'Margin Optimization', description: 'Analyze cost of goods, operational expenses, and pricing elasticity to identify low-margin products and recommend price adjustments that maximize profitability without losing customers.' },
      { title: 'Competitive Benchmarking', description: 'Automatically collect and analyze competitor pricing from websites, marketplaces, and external sources. Identify pricing gaps and respond with strategic adjustments to stay ahead in the market.' },
      { title: 'Revenue Simulations', description: 'Run what-if scenarios before committing to price changes. AI predicts demand shifts, revenue impact, and market reactions — so every pricing decision is backed by data, not guesswork.' }
    ],
    useCases: [
      { industry: 'E-commerce & Retail', example: 'AI dynamically adjusts product prices based on competitor changes, demand spikes, and inventory levels — optimizing discounts and maximizing margins across thousands of SKUs simultaneously.' },
      { industry: 'Airlines & Travel', example: 'Implement dynamic ticket pricing based on booking patterns, seat availability, and seasonality. Simulate revenue outcomes for different fare strategies before rolling them out.' },
      { industry: 'Ride-Hailing Services', example: 'Surge pricing activates automatically during peak demand hours. AI balances driver availability, rider demand, and competitive rates to maximize revenue per trip.' },
      { industry: 'Hospitality', example: 'Adjust room rates dynamically based on occupancy, local events, and competitor hotel pricing — ensuring maximum revenue per available room across all seasons.' }
    ]
  },
  'Marketing': {
    title: 'AI Sales & Marketing Intelligence',
    subtitle: 'Faster Growth, Higher Conversions, Smarter Decisions',
    description: 'Supercharge your sales and marketing with AI that scores leads automatically, forecasts pipeline outcomes, optimizes campaigns in real time, and automates CRM workflows — turning data into revenue at every stage of the funnel.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'AI lead scoring using website behavior, engagement, demographics, and firmographics',
      'Pipeline forecasting with predictive analytics on deal stages and sales rep performance',
      'Campaign performance analytics tracking CTR, conversions, and channel effectiveness',
      'CRM automation with Salesforce and HubSpot integration for auto-updates and follow-ups',
      'Next-best-action recommendations and personalized communication triggers',
      'Real-time budget reallocation suggestions based on top-performing marketing channels'
    ],
    benefits: [
      { title: 'AI Lead Scoring', description: 'Predictive models analyze website behavior, email engagement, clicks, and demographics to rank leads by conversion probability — so your sales team focuses only on the top 10% most likely to close.' },
      { title: 'Pipeline Forecasting', description: 'AI analyzes deal stages, historical win rates, and sales rep performance to forecast monthly and quarterly revenue accurately — flagging at-risk deals and pipeline gaps before they impact targets.' },
      { title: 'Campaign Performance Analytics', description: 'Track CTR, conversion rates, and engagement across all channels. AI identifies top-performing campaigns and recommends budget reallocation — like shifting spend from social ads to email when it outperforms.' },
      { title: 'CRM Automation', description: 'After every customer interaction, AI logs activity, updates records, suggests the next best action, and schedules follow-ups automatically — keeping your pipeline moving without manual effort.' }
    ],
    useCases: [
      { industry: 'B2B Sales', example: 'Out of 1,000 leads, AI identifies the top 100 with the highest conversion probability. Sales team focuses only on them — reducing cycle time and increasing close rates significantly.' },
      { industry: 'E-commerce & Retail', example: 'AI personalizes email campaigns based on browsing history and purchase behavior, tracks campaign ROI in real time, and recommends the best time and channel to reach each customer.' },
      { industry: 'SaaS Companies', example: 'Forecast quarterly ARR from current pipeline, flag deals at risk of churn or delay, and trigger personalized onboarding sequences based on user behavior and engagement scores.' },
      { industry: 'Financial Services', example: 'Score leads by financial profile and intent signals, automate follow-up communication for loan or investment inquiries, and track advisor pipeline performance with AI-driven forecasting.' }
    ]
  },
  'Performance Enablement': {
    title: 'AI Social Media & Performance Intelligence',
    subtitle: 'Stronger Brand Presence & High-Performing Workforce',
    description: 'Combine AI-powered social media automation with workforce performance intelligence — planning and scheduling content automatically, analyzing engagement patterns, coaching employees with personalized feedback, and mapping skill gaps to keep your brand and teams ahead.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'AI content planning and scheduling with Hootsuite and Buffer integration for peak engagement',
      'Engagement analytics tracking likes, shares, CTR, sentiment, and follower growth trends',
      'Performance coaching systems providing real-time personalized feedback based on KPIs',
      'Skill development insights mapping current vs required skills with targeted training recommendations',
      'Generative AI for captions, post ideas, and brand-consistent content creation at scale',
      'Continuous learning progress tracking aligned with business goals and industry benchmarks'
    ],
    benefits: [
      { title: 'Content Planning & Automation', description: 'AI analyzes audience behavior, trending topics, and past performance to generate post ideas, recommend optimal posting times, and auto-schedule content — maintaining a consistent brand voice without manual effort.' },
      { title: 'Engagement Analytics', description: 'Track likes, shares, CTR, and follower growth across all channels. AI identifies high-performing content patterns — like video getting 3x more engagement than images — and recommends strategy shifts accordingly.' },
      { title: 'Performance Coaching Systems', description: 'Analyze individual KPIs, goals, and behavioral patterns to deliver real-time personalized coaching. AI identifies exactly where each team member needs to improve — like follow-up timing or lead prioritization for sales reps.' },
      { title: 'Skill Development Insights', description: 'Map current employee skills against role requirements and industry benchmarks. AI recommends targeted training modules, tracks learning progress, and aligns workforce capabilities with evolving business goals.' }
    ],
    useCases: [
      { industry: 'Digital Marketing Teams', example: 'AI generates a full week of social media content, schedules posts at optimal times per platform, tracks real-time engagement, and recommends budget shifts toward top-performing channels.' },
      { industry: 'Enterprises & Large Workforces', example: 'Performance coaching systems analyze sales rep data and suggest personalized improvement actions. Skill gap reports trigger targeted training programs across departments automatically.' },
      { industry: 'EdTech & Corporate Training', example: "AI maps each employee's current skills against role benchmarks, recommends learning paths, tracks course completion, and measures skill improvement over time with progress dashboards." },
      { industry: 'Sales & Customer Success Teams', example: 'AI monitors individual rep performance against KPIs, flags coaching opportunities in real time, and recommends specific actions — like focusing on high-value leads or improving response time — to increase conversions.' }
    ]
  }
};

export default function SolutionDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const solution = solutionDetails[slug as keyof typeof solutionDetails];

  const openModal = () => {
    setFormData(emptyForm);
    setStatus('idle');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setStatus('idle');
    setFormData(emptyForm);
  };

  const handleSend = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.organization || !formData.requirement) return;
    setStatus('sending');

    emailjs.send(
      'service_i3gents',
      'template_a2at9yj',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        message: `[Start Free Trial – ${solution?.title}]\n\nBrief Requirement: ${formData.requirement}`,
        reply_to: formData.email,
        to_name: 'Harsh',
        to_email: 'harsh1582@gmail.com'
      },
      'Aq22ose6lGD2zXT-W'
    ).then(() => {
      setStatus('sent');
      setTimeout(closeModal, 3000);
    }).catch(() => setStatus('error'));
  };

  const allFilled = formData.name && formData.phone && formData.email && formData.organization && formData.requirement;

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Solution not found</h1>
          <button onClick={() => navigate('/')} className="text-blue-600 hover:text-blue-700">
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <Header onStartTrial={openModal} />

      <button
        onClick={() => navigate('/')}
        className="fixed top-24 left-6 z-40 flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      {/* ── MODAL ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden">

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-6">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-xl font-bold transition-colors"
              >✕</button>
              <div className="flex items-center gap-3">
                <Calendar size={24} className="text-white" />
                <div>
                  <h3 className="text-xl font-bold text-white">Start Free Trial</h3>
                  <p className="text-blue-100 text-sm">We'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="px-8 py-6">
              {status === 'sent' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-500 text-3xl">✓</span>
                  </div>
                  <p className="text-xl font-bold text-gray-800 mb-2">Request Submitted!</p>
                  <p className="text-gray-500 text-sm">
                    We'll reach out to you at{' '}
                    <span className="font-medium text-blue-600">{formData.email}</span> shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Full Name <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Phone Number <span className="text-red-400">*</span></label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Email Address <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Organization Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.organization}
                      onChange={e => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Brief Requirement <span className="text-red-400">*</span></label>
                    <textarea
                      placeholder="Tell us about your project or requirement..."
                      value={formData.requirement}
                      onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none h-24"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm mb-3 text-center">Failed to send. Please try again.</p>
                  )}

                  <button
                    onClick={handleSend}
                    disabled={status === 'sending' || !allFilled}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {status === 'sending' ? 'Submitting...' : 'Submit Request'}
                  </button>

                  <p className="text-center text-gray-400 text-xs mt-3">
                    All fields marked <span className="text-red-400">*</span> are required
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{solution.title}</h1>
          <p className="text-3xl text-blue-600 font-semibold mb-6">{solution.subtitle}</p>
          <p className="text-xl text-gray-600 leading-relaxed">{solution.description}</p>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <div className="relative w-full h-96 overflow-hidden">
        <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* ── Key Features ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solution.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Business Benefits ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Business Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solution.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Industry Use Cases</h2>
          <div className="space-y-6">
            {solution.useCases.map((useCase, idx) => (
              <div key={idx} className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.industry}</h3>
                    <p className="text-gray-700 leading-relaxed">{useCase.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10">Experience the power of {solution.title}.</p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-xl"
          >
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}