import React from 'react'
import { ArrowRight, Brain, Heart, Eye, Zap } from 'lucide-react'

const ConditionGuides = () => {
  const conditions = [
    {
      name: "ADHD",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      description: "Attention Deficit Hyperactivity Disorder support for focus, organization, and time management.",
      features: [
        "Focus enhancement techniques",
        "Time management strategies", 
        "Organization systems",
        "Energy regulation tools"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      name: "Autism",
      icon: Brain,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      description: "Autism spectrum support for communication, sensory needs, and workplace navigation.",
      features: [
        "Communication scripts",
        "Sensory accommodation guides",
        "Social interaction strategies",
        "Routine optimization tools"
      ],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
    },
    {
      name: "Dyslexia",
      icon: Eye,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      description: "Dyslexia support for reading, writing, and information processing in professional settings.",
      features: [
        "Reading comprehension aids",
        "Writing assistance tools",
        "Visual learning strategies",
        "Technology recommendations"
      ],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
    },
    {
      name: "Bipolar Disorder",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      description: "Bipolar disorder support for mood management, energy regulation, and workplace stability.",
      features: [
        "Mood tracking systems",
        "Energy management plans",
        "Crisis prevention strategies",
        "Medication scheduling tools"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section id="guides" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Condition-Specific Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deep-dive resources tailored to specific neurodivergent conditions, with expert insights and practical strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {conditions.map((condition, index) => {
            const IconComponent = condition.icon
            return (
              <div key={index} className={`${condition.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group`}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`bg-gradient-to-r ${condition.color} p-4 rounded-2xl`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {condition.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {condition.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {condition.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium group-hover:translate-x-1 transition-all duration-200">
                      <span>Explore {condition.name} Resources</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="hidden md:block flex-shrink-0">
                    <img 
                      src={condition.image} 
                      alt={condition.name}
                      className="w-32 h-24 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't see your condition?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're constantly expanding our resources. Many of our tools and strategies are beneficial across multiple neurodivergent conditions.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            Request New Resources
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConditionGuides
