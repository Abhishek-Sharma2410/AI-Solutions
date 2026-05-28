import { Menu, X, Calendar, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import logo from '../assets/logo.png';

interface FormData {
  name: string;
  phone: string;
  email: string;
  organization: string;
  requirement: string;
}

const emptyForm: FormData = {
  name: '',
  phone: '',
  email: '',
  organization: '',
  requirement: ''
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const openModal = (title: string) => {
    setModalTitle(title);
    setFormData(emptyForm);
    setStatus('idle');
    setShowModal(true);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setStatus('idle');
    setFormData(emptyForm);
  };

  const handleSend = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.organization ||
      !formData.requirement
    ) return;

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

  const allFilled =
    formData.name &&
    formData.phone &&
    formData.email &&
    formData.organization &&
    formData.requirement;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-gray-900">
                <img src={logo} alt="logo" className="h-14 w-auto" />
                SigmaChain<span className="text-blue-600">AI</span>
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors">Solutions</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                <a href="#industries" className="text-gray-700 hover:text-blue-600 transition-colors">Industries</a>
                <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => openModal('Get Connected')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg"
              >
                Get Connected
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#solutions" className="block text-gray-700 hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#features" className="block text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#industries" className="block text-gray-700 hover:text-blue-600 transition-colors">Industries</a>
              <a href="#resources" className="block text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
              <button
                onClick={() => openModal('Get Connected')}
                className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Get Connected
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden">

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-6">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-xl font-bold transition-colors"
              >
                ✕
              </button>
              <div className="flex items-center gap-3">
                <MessageSquare size={24} className="text-white" />
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
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
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
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
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
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
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
                      onChange={e => setFormData({ ...formData, organization: e.target.value })}
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
                      onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none h-24"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm mb-3 text-center">
                      Failed to send. Please try again.
                    </p>
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
    </>
  );
}