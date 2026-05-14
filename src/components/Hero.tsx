import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Calendar, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const rotatingTexts = [
  'smarter decisions',
  'faster insights',
  'better outcomes',
  'transformative growth'
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  organization: string;
  requirement: string;
}

const emptyForm: FormData = { name: '', phone: '', email: '', organization: '', requirement: '' };

interface HeroProps {
  onStartTrial: () => void;
}

export default function Hero({ onStartTrial }: HeroProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (title: string) => {
    setModalTitle(title);
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
        message: `[${modalTitle}]\n\nBrief Requirement: ${formData.requirement}`,
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

  return (
    <>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Sparkles size={16} />
              <span>Powered by Advanced AI Technology</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              AI solutions for{' '}
              <span className="relative inline-block">
                <span
                  className={`text-blue-600 transition-all duration-300 ${
                    isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                  }`}
                >
                  {rotatingTexts[currentTextIndex]}
                </span>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business operations,
              automate workflows, and unlock unprecedented insights from your data.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => openModal('Talk to an Expert')}
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:scale-105 flex items-center space-x-2"
              >
                <span>Talk to an Expert</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden">

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-6">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-xl font-bold transition-colors"
              >✕</button>
              <div className="flex items-center gap-3">
                {modalTitle === 'Talk to an Expert'
                  ? <MessageSquare size={24} className="text-white" />
                  : <Calendar size={24} className="text-white" />}
                <div>
                  <h3 className="text-xl font-bold text-white">{modalTitle}</h3>
                  <p className="text-blue-100 text-sm">We'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
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
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Organization Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.organization}
                      onChange={e => setFormData({...formData, organization: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Brief Requirement <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      placeholder="Tell us about your project or requirement..."
                      value={formData.requirement}
                      onChange={e => setFormData({...formData, requirement: e.target.value})}
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
                    {status === 'sending' ? 'Submitting...' : `Submit ${modalTitle}`}
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
    </>
  );
}