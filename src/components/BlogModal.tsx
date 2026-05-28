import { X, Clock, User, Share2, Heart, ArrowRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

interface BlogModalProps {
  isOpen: boolean;
  blog: {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: string;
  } | null;
  onClose: () => void;
}

export default function BlogModal({ isOpen, blog, onClose }: BlogModalProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const openContactModal = () => {
    setFormData(emptyForm);
    setStatus('idle');
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
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
      'service_sorf4gl',
      'template_g7x8wvu',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        message: `[Start Free Trial - Blog: ${blog?.title}]\n\nBrief Requirement: ${formData.requirement}`,
        reply_to: formData.email,
        to_name: 'Pradeep Singh',
        to_email: 'sigmachainai@gmail.com'
      },
      '5fcK7TUYOgTcy-8AK'
    ).then(() => {
      setStatus('sent');
      setTimeout(closeContactModal, 3000);
    }).catch(() => setStatus('error'));
  };

  const allFilled =
    formData.name &&
    formData.phone &&
    formData.email &&
    formData.organization &&
    formData.requirement;

  if (!isOpen || !blog) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
          onClick={onClose}
        />

        <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[95vh] overflow-hidden flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/90 shadow-lg hover:bg-white hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gray-100"
          >
            <X size={24} className="text-gray-700" />
          </button>

          <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex-1">
            <div className="relative overflow-hidden h-96 sm:h-[28rem]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                <div className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 shadow-lg">
                  {blog.category}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  {blog.title}
                </h1>
              </div>
            </div>

            <div className="px-6 sm:px-8 md:px-10 py-8 md:py-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b border-gray-200">
                <div className="flex flex-wrap items-center gap-6 md:gap-8">
                  <div className="flex items-center space-x-2.5 text-gray-600">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <User size={18} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">Author</span>
                      <span className="font-semibold text-gray-900">{blog.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2.5 text-gray-600">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">Read Time</span>
                      <span className="font-semibold text-gray-900">{blog.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2.5 text-gray-600">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📅</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 font-medium">Published</span>
                      <span className="font-semibold text-gray-900">{blog.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className="p-3 hover:bg-red-50 rounded-full transition-all duration-200 group"
                    title="Add to favorites"
                  >
                    <Heart
                      size={22}
                      className={`transition-all duration-200 ${
                        isFavorited
                          ? 'fill-red-500 text-red-500 scale-110'
                          : 'text-gray-400 group-hover:text-red-500'
                      }`}
                    />
                  </button>
                  <button
                    className="p-3 hover:bg-blue-50 rounded-full transition-all duration-200 group"
                    title="Share"
                  >
                    <Share2 size={22} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </button>
                </div>
              </div>

              <div className="mt-8 md:mt-10">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 font-medium italic border-l-4 border-blue-600 pl-6 py-2">
                  {blog.excerpt}
                </p>
                <div className="space-y-6 md:space-y-7">
                  {blog.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-base md:text-lg text-gray-700 leading-relaxed md:leading-8 font-normal">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-12 md:mt-16 pt-10 border-t border-gray-200">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <ArrowRight size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        Ready to transform your business?
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm md:text-base">
                        Get in touch with our expert.
                      </p>
                      <button
                        onClick={openContactModal}
                        className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:scale-105 group"
                      >
                        <span>Start Free Trial</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .scrollbar-thin::-webkit-scrollbar { width: 6px; }
          .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 3px; }
          .scrollbar-track-gray-100::-webkit-scrollbar-track { background-color: #f3f4f6; }
        `}</style>
      </div>

      {/* Contact Form Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeContactModal(); }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden">

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-6">
              <button
                onClick={closeContactModal}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-xl font-bold transition-colors"
              >
                ✕
              </button>
              <div className="flex items-center gap-3">
                <MessageSquare size={24} className="text-white" />
                <div>
                  <h3 className="text-xl font-bold text-white">Start Free Trial</h3>
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