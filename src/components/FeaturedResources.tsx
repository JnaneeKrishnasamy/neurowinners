import React from 'react'
import { Download, Star, Clock, Users } from 'lucide-react'

const FeaturedResources = () => {
  const resources = [
    {
      title: "ADHD-Friendly Project Management Template",
      description: "Visual project tracking with time-blocking and priority matrices designed for ADHD professionals.",
      category: "Project Management",
      downloads: "2.3k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["ADHD", "Templates", "Organization"],
      fileUrl: "/resources/general/adhd-project-management.pdf"
    },
    {
      title: "Autism Workplace Communication Guide",
      description: "Scripts and strategies for professional communication, meetings, and workplace interactions.",
      category: "Communication",
      downloads: "1.8k",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      tags: ["Autism", "Communication", "Scripts"],
      fileUrl: "/resources/general/autism-communication-guide.pdf"
    },
    {
      title: "Dyslexia-Friendly Note-Taking System",
      description: "Visual note-taking templates and strategies optimized for dyslexic professionals.",
      category: "Note-Taking",
      downloads: "1.5k",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      tags: ["Dyslexia", "Notes", "Visual"],
      fileUrl: "/resources/general/dyslexia-note-taking.pdf"
    },
    {
      title: "Bipolar Energy Management Tracker",
      description: "Daily mood and energy tracking tools to optimize work performance and prevent burnout.",
      category: "Wellness",
      downloads: "1.2k",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop",
      tags: ["Bipolar", "Tracking", "Wellness"],
      fileUrl: "/resources/general/bipolar-energy-tracker.pdf"
    },
    {
      title: "Universal Accommodation Request Kit",
      description: "Professional templates for requesting workplace accommodations across all neurodivergent conditions.",
      category: "Advocacy",
      downloads: "3.1k",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
      tags: ["Advocacy", "Templates", "Legal"],
      fileUrl: "/resources/general/accommodation-request-kit.pdf"
    },
    {
      title: "Sensory-Friendly Workspace Setup Guide",
      description: "Complete guide to creating an optimal work environment for sensory-sensitive professionals.",
      category: "Environment",
      downloads: "2.7k",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
      tags: ["Sensory", "Workspace", "Environment"],
      fileUrl: "/resources/general/sensory-workspace-guide.pdf"
    }
  ]

  const handleDownload = (fileUrl: string, title: string) => {
    // Create a mock PDF content for demonstration
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 150
>>
stream
BT
/F1 24 Tf
50 700 Td
(${title}) Tj
0 -50 Td
/F1 12 Tf
(This is a comprehensive resource document) Tj
0 -20 Td
(designed specifically for neurodiverse professionals.) Tj
0 -30 Td
(Created by NeuroToolkit - Professional Resources) Tj
0 -20 Td
(for Neurodiverse Minds) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000110 00000 n 
0000000271 00000 n 
0000000474 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
571
%%EOF`

    const blob = new Blob([pdfContent], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.pdf`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and effective tools, templates, and guides created by and for neurodiverse professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {resource.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{resource.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleDownload(resource.fileUrl, resource.title)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resource</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
            View All Resources
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedResources
