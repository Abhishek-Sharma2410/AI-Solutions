import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from '../assets/reverse_logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
              <img src={logo} alt="logo" className="h-16 w-auto" />
              SigmaChain<span className="text-blue-500">AI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses with cutting-edge AI technology for a smarter future.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Automation</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Forecasting</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Security</a></li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Support</a></li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              {/* <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li> */}
              <li><a href="#" className="hover:text-blue-500 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 SigmaChainAI. All rights reserved.
            </p>
            {/* <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
