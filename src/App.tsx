import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ToolkitGenerator from './components/ToolkitGenerator'
import IndustryResources from './components/IndustryResources'
import FeaturedResources from './components/FeaturedResources'
import ConditionGuides from './components/ConditionGuides'
import Footer from './components/Footer'

function App() {
  const [generatedToolkit, setGeneratedToolkit] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <Hero />
      <ToolkitGenerator onToolkitGenerated={setGeneratedToolkit} />
      {generatedToolkit && (
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your Personalized Toolkit
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <div dangerouslySetInnerHTML={{ __html: generatedToolkit }} />
            </div>
          </div>
        </div>
      )}
      <IndustryResources />
      <FeaturedResources />
      <ConditionGuides />
      <Footer />
    </div>
  )
}

export default App
