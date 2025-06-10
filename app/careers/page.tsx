import { Briefcase, Users, TrendingUp, Award, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Sales Manager - Automobiles",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead automobile sales team and develop client relationships in the automotive sector.",
    },
    {
      title: "Logistics Coordinator",
      department: "Operations",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "3+ years",
      description: "Coordinate transportation and distribution operations across regional networks.",
    },
    {
      title: "Construction Project Manager",
      department: "Construction",
      location: "Dallas, TX",
      type: "Full-time",
      experience: "7+ years",
      description: "Manage large-scale construction and infrastructure projects from planning to completion.",
    },
    {
      title: "International Trade Specialist",
      department: "Trade",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "4+ years",
      description: "Facilitate international trade operations and ensure regulatory compliance.",
    },
    {
      title: "Supply Chain Analyst",
      department: "Supply Chain",
      location: "Atlanta, GA",
      type: "Full-time",
      experience: "2+ years",
      description: "Analyze supply chain performance and optimize distribution processes.",
    },
    {
      title: "Business Development Manager",
      department: "Business Development",
      location: "Miami, FL",
      type: "Full-time",
      experience: "6+ years",
      description: "Identify new business opportunities and develop strategic partnerships globally.",
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement paths and professional development opportunities",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with diverse, talented teams across multiple industries",
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Comprehensive health, retirement, and performance-based compensation",
    },
  ]

  const departments = [
    "Sales & Marketing",
    "Operations & Logistics",
    "Construction Management",
    "International Trade",
    "Supply Chain",
    "Business Development",
    "Finance & Administration",
    "Human Resources",
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Careers at Viquoe Global</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join our dynamic team and build a rewarding career across multiple industries. We offer opportunities for
            growth, innovation, and global impact.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Viquoe Global</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-20 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Departments</h2>
          <p className="text-center text-slate-600 mb-8">
            Explore career opportunities across our diverse business units
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <Badge key={index} variant="outline" className="justify-center py-3 text-sm">
                {dept}
              </Badge>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <CardDescription>{position.description}</CardDescription>
                    </div>
                    <Button className="bg-orange-600 hover:bg-orange-700 md:w-auto">Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-orange-600" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-orange-600" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-orange-600" />
                      <span>{position.experience}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Employee Benefits */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Employee Benefits</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Health & Wellness</h3>
                    <p className="text-slate-600">
                      Comprehensive medical, dental, and vision coverage with wellness programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Retirement Planning</h3>
                    <p className="text-slate-600">401(k) with company matching and financial planning resources</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Work-Life Balance</h3>
                    <p className="text-slate-600">Flexible schedules, remote work options, and generous PTO policies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Professional Development</h3>
                    <p className="text-slate-600">Training programs, certifications, and tuition reimbursement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Company Culture</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">500+</div>
                  <div className="text-sm text-slate-600">Global Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">25+</div>
                  <div className="text-sm text-slate-600">Office Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">95%</div>
                  <div className="text-sm text-slate-600">Employee Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">4.8/5</div>
                  <div className="text-sm text-slate-600">Glassdoor Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-orange-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-orange-100">Take the next step in your career with Viquoe Global Ltd</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              View All Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Submit Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
