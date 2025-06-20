import React from 'react'
import { Brain, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NeuroToolkit
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#generator" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Toolkit Generator
            </a>
            <a href="#industries" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              By Industry
            </a>
            <a href="#resources" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Resources
            </a>
            <a href="#guides" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Condition Guides
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#generator" className="text-gray-700 hover:text-blue-600 font-medium">
                Toolkit Generator
              </a>
              <a href="#industries" className="text-gray-700 hover:text-blue-600 font-medium">
                By Industry
              </a>
              <a href="#resources" className="text-gray-700 hover:text-blue-600 font-medium">
                Resources
              </a>
              <a href="#guides" className="text-gray-700 hover:text-blue-600 font-medium">
                Condition Guides
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
