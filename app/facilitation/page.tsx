import { Globe, Users, FileText, TrendingUp, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FacilitationPage() {
  const services = [
    {
      icon: Globe,
      title: "Market Entry Strategy",
      description: "Comprehensive market analysis and entry strategies for new regions",
      features: ["Market Research", "Regulatory Analysis", "Partner Identification", "Risk Assessment"],
    },
    {
      icon: FileText,
      title: "Regulatory Compliance",
      description: "Navigate complex international regulations and compliance requirements",
      features: ["Legal Documentation", "Permit Acquisition", "Standards Compliance", "Regulatory Updates"],
    },
    {
      icon: Users,
      title: "Partnership Development",
      description: "Connect with reliable international partners and distributors",
      features: ["Partner Screening", "Due Diligence", "Contract Negotiation", "Relationship Management"],
    },
  ]

  const regions = [
    { name: "North America", markets: "USA, Canada, Mexico", specialties: "Technology, Manufacturing" },
    { name: "European Union", markets: "Germany, France, UK, Netherlands", specialties: "Automotive, Pharmaceuticals" },
    { name: "Asia Pacific", markets: "China, Japan, Singapore, Australia", specialties: "Electronics, Textiles" },
    { name: "Middle East", markets: "UAE, Saudi Arabia, Qatar", specialties: "Energy, Construction" },
    { name: "Latin America", markets: "Brazil, Argentina, Chile", specialties: "Agriculture, Mining" },
    { name: "Africa", markets: "South Africa, Nigeria, Kenya", specialties: "Resources, Infrastructure" },
  ]

  const expertise = [
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time market data, trends, and competitive analysis for informed decision-making",
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Comprehensive risk assessment and mitigation strategies for international operations",
    },
    {
      icon: Award,
      title: "Success Optimization",
      description: "Proven methodologies to maximize success rates in international market entry",
    },
  ]

  const tradeAgreements = [
    "USMCA (NAFTA)",
    "CPTPP",
    "RCEP",
    "AFCFTA",
    "EU Trade Agreements",
    "Bilateral Trade Treaties",
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">International Trade Facilitation</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert facilitation of global trade by navigating regulatory and logistical requirements. We connect
            international markets and enable seamless cross-border business operations.
          </p>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Facilitation Services</h2>
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
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Regional Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Regional Market Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">{region.name}</CardTitle>
                  <CardDescription className="text-sm mb-2">{region.markets}</CardDescription>
                  <Badge variant="outline" className="w-fit text-xs">
                    {region.specialties}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((expert, index) => {
              const Icon = expert.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle>{expert.title}</CardTitle>
                    <CardDescription>{expert.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Trade Agreements */}
        <div className="mb-20 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Trade Agreement Expertise</h2>
          <p className="text-center text-slate-600 mb-8">Deep knowledge of major international trade agreements</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tradeAgreements.map((agreement, index) => (
              <Badge key={index} variant="outline" className="justify-center py-3 text-sm">
                {agreement}
              </Badge>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Proven Track Record</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Market Entry Success</h3>
                    <p className="text-slate-600">
                      95% success rate in facilitating successful international market entries
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Regulatory Compliance</h3>
                    <p className="text-slate-600">
                      100% compliance rate with international trade regulations and requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Time to Market</h3>
                    <p className="text-slate-600">
                      Average 40% reduction in time to market for international expansion
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Facilitation Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
                  <div className="text-sm text-slate-600">Companies Facilitated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Countries Connected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">$2B+</div>
                  <div className="text-sm text-slate-600">Trade Volume Facilitated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Facilitation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Market Analysis",
                desc: "Comprehensive market research and opportunity assessment",
              },
              { step: "02", title: "Strategy Development", desc: "Customized market entry and expansion strategies" },
              { step: "03", title: "Implementation", desc: "Execution of market entry with regulatory compliance" },
              {
                step: "04",
                title: "Ongoing Support",
                desc: "Continuous support and optimization for sustained success",
              },
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
          <h2 className="text-3xl font-bold mb-4">Ready to Expand Globally?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Let us facilitate your international trade success with expert guidance and proven strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              Start Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Market Research
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
