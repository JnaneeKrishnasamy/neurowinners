import React, { useState } from 'react'
import { Stethoscope, GraduationCap, Code, Briefcase, Wrench, Users, Calculator, Scale, Building, Palette } from 'lucide-react'

const IndustryResources = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('healthcare')

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      description: 'Medical professionals, nurses, therapists, and healthcare workers'
    },
    {
      id: 'education',
      name: 'Education',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      description: 'Teachers, professors, administrators, and education specialists'
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      description: 'Software developers, IT professionals, and tech specialists'
    },
    {
      id: 'business',
      name: 'Business',
      icon: Briefcase,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      description: 'Managers, consultants, analysts, and business professionals'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      description: 'Engineers, architects, and technical design professionals'
    },
    {
      id: 'social-services',
      name: 'Social Services',
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
      description: 'Social workers, counselors, and community service professionals'
    },
    {
      id: 'finance',
      name: 'Finance',
      icon: Calculator,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
      description: 'Accountants, financial advisors, and banking professionals'
    },
    {
      id: 'legal',
      name: 'Legal',
      icon: Scale,
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-50',
      description: 'Lawyers, paralegals, and legal professionals'
    },
    {
      id: 'corporate',
      name: 'Corporate',
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      description: 'Corporate executives, HR professionals, and office workers'
    },
    {
      id: 'creative',
      name: 'Creative',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      description: 'Designers, artists, writers, and creative professionals'
    }
  ]

  const industryResources = {
    healthcare: [
      {
        title: "ADHD-Friendly Patient Tracking System",
        description: "Visual patient management templates with color-coding and priority systems for healthcare professionals with ADHD.",
        type: "Template",
        fileUrl: "/resources/healthcare/adhd-patient-tracking.pdf"
      },
      {
        title: "Autism Communication Scripts for Medical Settings",
        description: "Pre-written scripts for patient interactions, difficult conversations, and medical explanations.",
        type: "Guide",
        fileUrl: "/resources/healthcare/autism-communication-scripts.pdf"
      },
      {
        title: "Dyslexia-Friendly Medical Documentation",
        description: "Simplified forms and documentation templates optimized for dyslexic healthcare workers.",
        type: "Template",
        fileUrl: "/resources/healthcare/dyslexia-medical-docs.pdf"
      }
    ],
    education: [
      {
        title: "ADHD Classroom Management Toolkit",
        description: "Lesson planning templates, attention management strategies, and organizational systems for teachers with ADHD.",
        type: "Toolkit",
        fileUrl: "/resources/education/adhd-classroom-management.pdf"
      },
      {
        title: "Autism-Friendly Parent Communication Templates",
        description: "Email templates and conversation guides for parent-teacher conferences and difficult discussions.",
        type: "Template",
        fileUrl: "/resources/education/autism-parent-communication.pdf"
      },
      {
        title: "Dyslexia Teaching Strategies Guide",
        description: "Evidence-based teaching methods and accommodations for educators with dyslexia.",
        type: "Guide",
        fileUrl: "/resources/education/dyslexia-teaching-strategies.pdf"
      }
    ],
    technology: [
      {
        title: "ADHD-Friendly Code Review Checklist",
        description: "Structured checklist and templates for code reviews, debugging, and project management.",
        type: "Checklist",
        fileUrl: "/resources/technology/adhd-code-review.pdf"
      },
      {
        title: "Autism Tech Team Communication Guide",
        description: "Scripts for stand-ups, code reviews, and technical discussions in development teams.",
        type: "Guide",
        fileUrl: "/resources/technology/autism-tech-communication.pdf"
      },
      {
        title: "Dyslexia-Friendly Documentation Templates",
        description: "Clear, visual templates for technical documentation and API guides.",
        type: "Template",
        fileUrl: "/resources/technology/dyslexia-tech-docs.pdf"
      }
    ],
    business: [
      {
        title: "ADHD Executive Function Planner",
        description: "Daily, weekly, and monthly planning templates designed for business professionals with ADHD.",
        type: "Planner",
        fileUrl: "/resources/business/adhd-executive-planner.pdf"
      },
      {
        title: "Autism Business Meeting Scripts",
        description: "Templates for presentations, client meetings, and networking conversations.",
        type: "Scripts",
        fileUrl: "/resources/business/autism-meeting-scripts.pdf"
      },
      {
        title: "Bipolar Energy Management for Business",
        description: "Mood tracking and energy management tools for business professionals.",
        type: "Tracker",
        fileUrl: "/resources/business/bipolar-energy-management.pdf"
      }
    ],
    engineering: [
      {
        title: "ADHD Project Management for Engineers",
        description: "Visual project tracking, milestone management, and focus techniques for engineering projects.",
        type: "System",
        fileUrl: "/resources/engineering/adhd-project-management.pdf"
      },
      {
        title: "Autism Technical Communication Guide",
        description: "Templates for technical reports, client presentations, and team collaboration.",
        type: "Guide",
        fileUrl: "/resources/engineering/autism-technical-communication.pdf"
      },
      {
        title: "Dyslexia-Friendly Engineering Documentation",
        description: "Visual templates for technical specifications, design documents, and reports.",
        type: "Template",
        fileUrl: "/resources/engineering/dyslexia-engineering-docs.pdf"
      }
    ],
    'social-services': [
      {
        title: "ADHD Case Management System",
        description: "Organizational tools and tracking systems for social workers with ADHD.",
        type: "System",
        fileUrl: "/resources/social-services/adhd-case-management.pdf"
      },
      {
        title: "Autism Client Interaction Scripts",
        description: "Communication templates for difficult conversations and crisis situations.",
        type: "Scripts",
        fileUrl: "/resources/social-services/autism-client-scripts.pdf"
      },
      {
        title: "Bipolar Self-Care for Social Workers",
        description: "Stress management and self-care strategies for social service professionals.",
        type: "Guide",
        fileUrl: "/resources/social-services/bipolar-self-care.pdf"
      }
    ],
    finance: [
      {
        title: "ADHD Financial Analysis Templates",
        description: "Structured templates for financial reports, budgeting, and data analysis.",
        type: "Template",
        fileUrl: "/resources/finance/adhd-financial-analysis.pdf"
      },
      {
        title: "Autism Client Communication for Finance",
        description: "Scripts for client meetings, financial advice sessions, and difficult conversations.",
        type: "Scripts",
        fileUrl: "/resources/finance/autism-client-communication.pdf"
      },
      {
        title: "Dyslexia-Friendly Financial Documentation",
        description: "Clear, visual templates for financial reports and client presentations.",
        type: "Template",
        fileUrl: "/resources/finance/dyslexia-financial-docs.pdf"
      }
    ],
    legal: [
      {
        title: "ADHD Legal Case Management",
        description: "Organization systems for case files, deadlines, and client communications.",
        type: "System",
        fileUrl: "/resources/legal/adhd-case-management.pdf"
      },
      {
        title: "Autism Courtroom Communication Guide",
        description: "Scripts and strategies for court appearances and client interactions.",
        type: "Guide",
        fileUrl: "/resources/legal/autism-courtroom-communication.pdf"
      },
      {
        title: "Dyslexia Legal Writing Templates",
        description: "Structured templates for legal documents, briefs, and correspondence.",
        type: "Template",
        fileUrl: "/resources/legal/dyslexia-legal-writing.pdf"
      }
    ],
    corporate: [
      {
        title: "ADHD Corporate Productivity System",
        description: "Time management, meeting preparation, and task organization for corporate environments.",
        type: "System",
        fileUrl: "/resources/corporate/adhd-productivity-system.pdf"
      },
      {
        title: "Autism Corporate Communication Templates",
        description: "Email templates, meeting scripts, and networking conversation guides.",
        type: "Templates",
        fileUrl: "/resources/corporate/autism-corporate-communication.pdf"
      },
      {
        title: "Bipolar Workplace Stress Management",
        description: "Strategies for managing mood fluctuations in high-pressure corporate environments.",
        type: "Guide",
        fileUrl: "/resources/corporate/bipolar-stress-management.pdf"
      }
    ],
    creative: [
      {
        title: "ADHD Creative Project Management",
        description: "Visual project tracking and creative workflow management for ADHD professionals.",
        type: "System",
        fileUrl: "/resources/creative/adhd-creative-management.pdf"
      },
      {
        title: "Autism Client Presentation Templates",
        description: "Structured templates for creative presentations and client feedback sessions.",
        type: "Templates",
        fileUrl: "/resources/creative/autism-presentation-templates.pdf"
      },
      {
        title: "Dyslexia Creative Brief Templates",
        description: "Visual, easy-to-read templates for creative briefs and project specifications.",
        type: "Template",
        fileUrl: "/resources/creative/dyslexia-creative-briefs.pdf"
      }
    ]
  }

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
/Length 100
>>
stream
BT
/F1 24 Tf
100 700 Td
(${title}) Tj
0 -50 Td
(This is a sample resource document.) Tj
0 -30 Td
(Created by NeuroToolkit) Tj
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
0000000424 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
521
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

  const selectedIndustryData = industries.find(ind => ind.id === selectedIndustry)
  const resources = industryResources[selectedIndustry] || []

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resources by Industry
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find specialized tools and resources tailored to your specific profession and industry needs.
          </p>
        </div>

        {/* Industry Selection */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {industries.map((industry) => {
            const IconComponent = industry.icon
            return (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedIndustry === industry.id
                    ? `${industry.bgColor} border-current`
                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`bg-gradient-to-r ${industry.color} p-2 rounded-lg w-fit mx-auto mb-2`}>
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-medium text-sm text-gray-900">{industry.name}</h3>
              </button>
            )
          })}
        </div>

        {/* Selected Industry Resources */}
        {selectedIndustryData && (
          <div className={`${selectedIndustryData.bgColor} rounded-2xl p-8 mb-8`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className={`bg-gradient-to-r ${selectedIndustryData.color} p-3 rounded-xl`}>
                <selectedIndustryData.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedIndustryData.name}</h3>
                <p className="text-gray-600">{selectedIndustryData.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">{resource.title}</h4>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium ml-2 flex-shrink-0">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  <button
                    onClick={() => handleDownload(resource.fileUrl, resource.title)}
                    className={`w-full bg-gradient-to-r ${selectedIndustryData.color} text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200`}
                  >
                    Download Resource
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need resources for a different industry?
            </h3>
            <p className="text-gray-600 mb-6">
              We're constantly expanding our industry-specific resources. Use our toolkit generator for personalized recommendations.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
              Generate Custom Toolkit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryResources
