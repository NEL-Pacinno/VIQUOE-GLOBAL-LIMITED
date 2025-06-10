import { Building, HardHat, Wrench, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ConstructionPage() {
  const services = [
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial facilities",
      projects: ["Office Complexes", "Shopping Centers", "Warehouses", "Industrial Facilities"],
    },
    {
      icon: HardHat,
      title: "Infrastructure Development",
      description: "Roads, bridges, utilities, and public infrastructure projects",
      projects: ["Highway Construction", "Bridge Engineering", "Utility Installation", "Public Works"],
    },
    {
      icon: Wrench,
      title: "Renovation & Maintenance",
      description: "Building upgrades, renovations, and ongoing maintenance services",
      projects: ["Building Renovations", "System Upgrades", "Preventive Maintenance", "Emergency Repairs"],
    },
  ]

  const capabilities = [
    "Project Management",
    "Design-Build Services",
    "Value Engineering",
    "Quality Control",
    "Safety Management",
    "Environmental Compliance",
  ]

  const certifications = [
    "ISO 9001:2015",
    "OSHA Certified",
    "LEED Accredited",
    "Green Building Council",
    "Construction Industry Institute",
    "Project Management Institute",
  ]

  const projectTypes = [
    { name: "Commercial Buildings", count: "150+" },
    { name: "Infrastructure Projects", count: "75+" },
    { name: "Industrial Facilities", count: "100+" },
    { name: "Renovation Projects", count: "200+" },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">General Contractors</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive construction and infrastructure project management services. From planning to completion, we
            deliver quality construction solutions that meet deadlines and exceed expectations.
          </p>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Construction Services</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.projects.map((project, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Project Portfolio */}
        <div className="mb-20 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Project Portfolio</h2>
          <p className="text-center text-slate-600 mb-8">Completed projects across various sectors</p>
          <div className="grid md:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{type.count}</div>
                <div className="text-sm text-slate-600">{type.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities & Certifications */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Core Capabilities</h2>
              <p className="text-slate-600 mb-8">
                Our comprehensive approach ensures successful project delivery from conception to completion, with focus
                on quality, safety, and client satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Certifications & Standards</h2>
              <p className="text-slate-600 mb-8">
                We maintain the highest industry standards and certifications to ensure quality and compliance in all
                our construction projects.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="justify-center py-2 text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Construction Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Planning & Design", desc: "Comprehensive project planning and design development" },
              {
                step: "02",
                title: "Permits & Approvals",
                desc: "Securing all necessary permits and regulatory approvals",
              },
              { step: "03", title: "Construction", desc: "Professional construction with quality control and safety" },
              { step: "04", title: "Completion", desc: "Final inspections, handover, and ongoing support" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
                <p className="text-slate-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-orange-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Construction Project?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Contact our construction experts for a detailed consultation and project estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              Get Project Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
