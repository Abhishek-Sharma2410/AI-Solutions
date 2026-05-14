import { Calendar, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  phone: string;
  email: string;
  organization: string;
  requirement: string;
}

const emptyForm: FormData = { name: '', phone: '', email: '', organization: '', requirement: '' };

export default function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

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
      <section id="resources" className="py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your<br />Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of companies already using our AI solutions to drive growth, efficiency, and innovation.
          </p>

          {/* Two Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openModal('Schedule a Consultation')}
              className="group w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
              Schedule a Consultation
            </button>
            <button
              onClick={() => openModal('Contact us')}
              className="group w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              <MessageSquare size={20} className="group-hover:rotate-12 transition-transform" />
              Contact us
            </button>
          </div>

          {/* <p className="text-blue-200 mt-8 text-sm">
            No credit card required &bull; 14-day free trial &bull; Cancel anytime
          </p> */}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden">

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-6">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-xl font-bold transition-colors"
              >✕</button>
              <div className="flex items-center gap-3">
                {modalTitle === 'Schedule a Consultation'
                  ? <Calendar size={24} className="text-white" />
                  : <MessageSquare size={24} className="text-white" />}
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
                  <p className="text-gray-500 text-sm">We'll reach out to you at <span className="font-medium text-blue-600">{formData.email}</span> shortly.</p>
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
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Phone Number <span className="text-red-400">*</span></label>
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
                    <label className="block text-xs font-medium text-gray-500 mb-1">Email Address <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Organization Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.organization}
                      onChange={e => setFormData({...formData, organization: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Brief Requirement <span className="text-red-400">*</span></label>
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