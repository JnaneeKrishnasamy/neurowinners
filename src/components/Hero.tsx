import React from 'react'
import { ArrowRight, Sparkles, Users, Target } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-gray-200">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Empowering neurodiverse professionals</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Tools for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Neurodiverse Minds
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get personalized, industry-specific tips, tricks, and downloadable resources tailored to your profession and neurodivergent needs. From ADHD-friendly workflows to autism-accommodating strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
              <span>Generate My Toolkit</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
              Browse Resources
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Industry-Specific</h3>
              <p className="text-gray-600 text-sm">Tailored resources for your exact profession and workplace challenges</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">All Conditions</h3>
              <p className="text-gray-600 text-sm">Support for ADHD, autism, dyslexia, bipolar disorder, and more</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Downloadable</h3>
              <p className="text-gray-600 text-sm">Ready-to-use templates, checklists, and practical tools</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  )
}

export default Hero
