import React from 'react'
import { Brain, Mail, Twitter, Github, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">NeuroToolkit</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering neurodiverse professionals with industry-specific tools, resources, and strategies for workplace success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Toolkit Generator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ADHD Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Autism Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dyslexia Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bipolar Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 NeuroToolkit. Made with <Heart className="h-4 w-4 inline text-red-500" /> for the neurodiverse community.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built with accessibility and inclusion in mind.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
